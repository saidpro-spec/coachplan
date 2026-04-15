import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Profile {
  id: string;
  email: string;
  role: 'admin' | 'coach';
  created_at: string;
}

type Tab = 'users' | 'invite';

export default function AdminPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<Tab>('users');
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Invite form
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitePassword, setInvitePassword] = useState('');
  const [inviteRole, setInviteRole] = useState<'coach' | 'admin'>('coach');
  const [inviteLoading, setInviteLoading] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState('');
  const [inviteError, setInviteError] = useState('');

  // Edit role
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    setLoading(true);
    setError('');
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError('Impossible de charger les utilisateurs.');
    } else {
      setProfiles(data || []);
    }
    setLoading(false);
  };

  const updateRole = async (id: string, role: 'admin' | 'coach') => {
    const { error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', id);

    if (!error) {
      setProfiles(prev => prev.map(p => p.id === id ? { ...p, role } : p));
      setEditingId(null);
    }
  };

  const deleteUser = (_id: string, email: string) => {
    alert(`Pour supprimer le compte "${email}", va dans :\nSupabase → Authentication → Users → 3 points → Delete user`);
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setInviteError('');
    setInviteSuccess('');
    setInviteLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: inviteEmail,
      password: invitePassword,
    });

    if (error) {
      setInviteError(error.message.includes('already registered')
        ? 'Cet email est déjà utilisé.'
        : error.message);
      setInviteLoading(false);
      return;
    }

    // Set role if admin
    if (data.user && inviteRole === 'admin') {
      await supabase.from('profiles').update({ role: 'admin' }).eq('id', data.user.id);
    }

    setInviteSuccess(`Compte créé pour ${inviteEmail} avec le rôle ${inviteRole}.`);
    setInviteEmail('');
    setInvitePassword('');
    setInviteRole('coach');
    setInviteLoading(false);
    loadProfiles();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 12px',
    borderRadius: 8, border: '1px solid var(--color-border)',
    background: 'var(--color-bg)', fontSize: 14,
    color: 'var(--color-text)', outline: 'none',
    fontFamily: 'Barlow, sans-serif', boxSizing: 'border-box',
  };

  const ROLE_COLORS: Record<string, string> = {
    admin: '#9F4271',
    coach: '#1E9E58',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'Barlow, sans-serif' }}>

      {/* Header */}
      <div style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 90,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
          <button onClick={() => navigate('/')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 13, color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            ← Retour
          </button>
          <div style={{ width: 1, height: 20, background: 'var(--color-border)' }} />
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800, fontSize: 20, margin: 0,
            color: 'var(--color-text)',
          }}>
            Administration
          </h1>
          <span style={{
            background: '#9F4271', color: 'white',
            fontSize: 11, fontWeight: 700, padding: '2px 8px',
            borderRadius: 20, letterSpacing: '0.05em',
          }}>ADMIN</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>{user?.email}</span>
          <button onClick={signOut} style={{
            background: 'none', border: '1px solid var(--color-border)',
            borderRadius: 8, cursor: 'pointer', padding: '6px 12px',
            fontSize: 12, color: 'var(--color-muted)', fontFamily: 'Barlow, sans-serif',
          }}>
            Déconnexion
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px' }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--color-border)' }}>
          {(['users', 'invite'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 16px', fontSize: 13,
              fontWeight: tab === t ? 700 : 500,
              color: tab === t ? 'var(--color-text)' : 'var(--color-muted)',
              borderBottom: `2px solid ${tab === t ? '#1E9E58' : 'transparent'}`,
              marginBottom: -1, fontFamily: 'Barlow, sans-serif',
            }}>
              {t === 'users' ? `👥 Utilisateurs (${profiles.length})` : '➕ Créer un compte'}
            </button>
          ))}
        </div>

        {/* Tab: Users */}
        {tab === 'users' && (
          <div>
            {loading && (
              <div style={{ textAlign: 'center', padding: 40, color: 'var(--color-muted)' }}>Chargement...</div>
            )}
            {error && (
              <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', color: '#B91C1C', fontSize: 13, marginBottom: 16 }}>
                {error}
              </div>
            )}
            {!loading && profiles.length === 0 && (
              <div style={{ textAlign: 'center', padding: 40, color: 'var(--color-muted)', fontSize: 14 }}>
                Aucun utilisateur trouvé.
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {profiles.map(profile => (
                <div key={profile.id} style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12, padding: '14px 18px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  flexWrap: 'wrap',
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: `${ROLE_COLORS[profile.role]}22`,
                    border: `1px solid ${ROLE_COLORS[profile.role]}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 14, color: ROLE_COLORS[profile.role],
                    flexShrink: 0,
                  }}>
                    {profile.email?.[0]?.toUpperCase() ?? '?'}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {profile.email}
                      {profile.id === user?.id && (
                        <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--color-muted)', fontWeight: 400 }}>(vous)</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 2 }}>
                      Inscrit le {new Date(profile.created_at).toLocaleDateString('fr-FR')}
                    </div>
                  </div>

                  {/* Role badge / selector */}
                  {editingId === profile.id ? (
                    <div style={{ display: 'flex', gap: 6 }}>
                      {(['coach', 'admin'] as const).map(r => (
                        <button key={r} onClick={() => updateRole(profile.id, r)} style={{
                          padding: '5px 12px', borderRadius: 20, border: 'none', cursor: 'pointer',
                          background: ROLE_COLORS[r], color: 'white', fontSize: 12, fontWeight: 700,
                          fontFamily: 'Barlow, sans-serif',
                        }}>
                          {r}
                        </button>
                      ))}
                      <button onClick={() => setEditingId(null)} style={{
                        padding: '5px 10px', borderRadius: 20,
                        border: '1px solid var(--color-border)', cursor: 'pointer',
                        background: 'none', fontSize: 12, color: 'var(--color-muted)',
                        fontFamily: 'Barlow, sans-serif',
                      }}>✕</button>
                    </div>
                  ) : (
                    <button onClick={() => setEditingId(profile.id)} style={{
                      padding: '4px 12px', borderRadius: 20, border: 'none', cursor: 'pointer',
                      background: `${ROLE_COLORS[profile.role]}22`,
                      color: ROLE_COLORS[profile.role],
                      fontSize: 12, fontWeight: 700, fontFamily: 'Barlow, sans-serif',
                    }}>
                      {profile.role}
                    </button>
                  )}

                  {/* Delete */}
                  {profile.id !== user?.id && (
                    <button onClick={() => deleteUser(profile.id, profile.email)} style={{
                      background: 'none', border: '1px solid #FECACA',
                      borderRadius: 8, cursor: 'pointer', padding: '6px 10px',
                      fontSize: 13, color: '#EF4444', fontFamily: 'Barlow, sans-serif',
                    }}>
                      🗑
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button onClick={loadProfiles} style={{
              marginTop: 16, background: 'none',
              border: '1px solid var(--color-border)', borderRadius: 8,
              cursor: 'pointer', padding: '8px 16px', fontSize: 13,
              color: 'var(--color-muted)', fontFamily: 'Barlow, sans-serif',
            }}>
              ↻ Actualiser
            </button>
          </div>
        )}

        {/* Tab: Invite */}
        {tab === 'invite' && (
          <div style={{ maxWidth: 480 }}>
            <p style={{ fontSize: 14, color: 'var(--color-muted)', margin: '0 0 24px' }}>
              Crée un nouveau compte coach ou admin directement depuis ici.
            </p>

            <form onSubmit={createUser} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email</label>
                <input
                  type="email" value={inviteEmail} required
                  onChange={e => setInviteEmail(e.target.value)}
                  placeholder="coach@exemple.com"
                  style={{ ...inputStyle, marginTop: 6 }}
                />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Mot de passe</label>
                <input
                  type="password" value={invitePassword} required minLength={6}
                  onChange={e => setInvitePassword(e.target.value)}
                  placeholder="Minimum 6 caractères"
                  style={{ ...inputStyle, marginTop: 6 }}
                />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Rôle</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  {(['coach', 'admin'] as const).map(r => (
                    <button key={r} type="button" onClick={() => setInviteRole(r)} style={{
                      flex: 1, padding: '10px', borderRadius: 8, cursor: 'pointer',
                      border: `2px solid ${inviteRole === r ? ROLE_COLORS[r] : 'var(--color-border)'}`,
                      background: inviteRole === r ? `${ROLE_COLORS[r]}12` : 'var(--color-surface)',
                      color: inviteRole === r ? ROLE_COLORS[r] : 'var(--color-muted)',
                      fontWeight: 700, fontSize: 13, fontFamily: 'Barlow, sans-serif',
                      transition: 'all 0.15s',
                    }}>
                      {r === 'coach' ? '⚽ Coach' : '🔑 Admin'}
                    </button>
                  ))}
                </div>
              </div>

              {inviteError && (
                <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#B91C1C' }}>
                  {inviteError}
                </div>
              )}
              {inviteSuccess && (
                <div style={{ background: '#DCFCE7', border: '1px solid #BBF7D0', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#15803D' }}>
                  {inviteSuccess}
                </div>
              )}

              <button type="submit" disabled={inviteLoading} style={{
                background: inviteLoading ? '#86EFAC' : '#1E9E58',
                color: 'white', border: 'none', borderRadius: 10,
                padding: '13px', fontSize: 14, fontWeight: 700,
                fontFamily: 'Barlow, sans-serif', cursor: inviteLoading ? 'not-allowed' : 'pointer',
              }}>
                {inviteLoading ? 'Création...' : 'Créer le compte'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
