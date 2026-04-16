import { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ALL_ENTRIES } from './ExercicesPage';
import { loadHiddenExercices, saveHiddenExercices } from '../utils/hiddenExercices';

interface Profile {
  id: string;
  email: string;
  role: 'admin' | 'coach';
  created_at: string;
}

type Tab = 'users' | 'invite' | 'exercices';

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

  // Exercices tab
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(loadHiddenExercices);
  const [exSearch, setExSearch] = useState('');
  const [exSourceFilter, setExSourceFilter] = useState<string>('all');

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

  const toggleHidden = (id: string) => {
    setHiddenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveHiddenExercices(next);
      return next;
    });
  };

  const restoreAll = () => {
    const empty = new Set<string>();
    saveHiddenExercices(empty);
    setHiddenIds(empty);
  };

  // Filtered exercises for the admin tab
  const filteredEntries = useMemo(() => {
    return ALL_ENTRIES.filter(e => {
      const matchSource = exSourceFilter === 'all' || e.source === exSourceFilter;
      const matchSearch = !exSearch || e.titre.toLowerCase().includes(exSearch.toLowerCase());
      return matchSource && matchSearch;
    });
  }, [exSearch, exSourceFilter]);

  const SOURCE_LABELS: Record<string, string> = {
    all: 'Tous',
    u8u9: 'Programme U8-U9',
    programme: 'Programme U6-U7',
    livret: 'Livret U7',
    u6: 'Guide U6',
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

  const TAB_LABELS: Record<Tab, string> = {
    users: `👥 Utilisateurs (${profiles.length})`,
    invite: '➕ Créer un compte',
    exercices: `📚 Exercices${hiddenIds.size > 0 ? ` (${hiddenIds.size} masqués)` : ''}`,
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
        <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--color-border)', overflowX: 'auto' }}>
          {(['users', 'invite', 'exercices'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 16px', fontSize: 13, whiteSpace: 'nowrap',
              fontWeight: tab === t ? 700 : 500,
              color: tab === t ? 'var(--color-text)' : 'var(--color-muted)',
              borderBottom: `2px solid ${tab === t ? '#1E9E58' : 'transparent'}`,
              marginBottom: -1, fontFamily: 'Barlow, sans-serif',
            }}>
              {TAB_LABELS[t]}
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

        {/* Tab: Exercices */}
        {tab === 'exercices' && (
          <div>
            {/* Info banner */}
            <div style={{
              background: '#1E9E5808', border: '1px solid #1E9E5830',
              borderRadius: 10, padding: '12px 16px', marginBottom: 20,
              fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.6,
            }}>
              Masquer un exercice le retire de la bibliothèque pour tous les coachs.
              Les exercices masqués sont stockés localement sur cet appareil.
              {hiddenIds.size > 0 && (
                <span style={{ display: 'block', marginTop: 6, color: '#E3061A', fontWeight: 600 }}>
                  {hiddenIds.size} exercice{hiddenIds.size > 1 ? 's' : ''} masqué{hiddenIds.size > 1 ? 's' : ''}.
                  <button onClick={restoreAll} style={{
                    marginLeft: 12, background: 'none', border: '1px solid #E3061A40',
                    borderRadius: 6, cursor: 'pointer', padding: '2px 10px',
                    fontSize: 12, color: '#E3061A', fontFamily: 'Barlow, sans-serif',
                  }}>
                    Tout restaurer
                  </button>
                </span>
              )}
            </div>

            {/* Search + filter */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <input
                type="text"
                value={exSearch}
                onChange={e => setExSearch(e.target.value)}
                placeholder="Rechercher un exercice…"
                style={{
                  flex: 1, minWidth: 200, padding: '9px 12px',
                  borderRadius: 8, border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)', fontSize: 13,
                  color: 'var(--color-text)', outline: 'none',
                  fontFamily: 'Barlow, sans-serif',
                }}
              />
              <select
                value={exSourceFilter}
                onChange={e => setExSourceFilter(e.target.value)}
                style={{
                  padding: '9px 12px', borderRadius: 8,
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)', fontSize: 13,
                  color: 'var(--color-text)', fontFamily: 'Barlow, sans-serif',
                  cursor: 'pointer',
                }}
              >
                {Object.entries(SOURCE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <div style={{ fontSize: 12, color: 'var(--color-muted)', marginBottom: 12 }}>
              {filteredEntries.length} exercice{filteredEntries.length !== 1 ? 's' : ''}
            </div>

            {/* Exercise list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {filteredEntries.map(entry => {
                const hidden = hiddenIds.has(entry.id);
                return (
                  <div key={entry.id} style={{
                    background: hidden ? '#FEF2F2' : 'var(--color-surface)',
                    border: `1px solid ${hidden ? '#FECACA' : 'var(--color-border)'}`,
                    borderRadius: 10, padding: '12px 16px',
                    display: 'flex', alignItems: 'center', gap: 12,
                    opacity: hidden ? 0.7 : 1,
                    transition: 'all 0.15s',
                  }}>
                    {/* Color dot */}
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: entry.color, flexShrink: 0,
                    }} />

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: 14, fontWeight: 600,
                        color: hidden ? '#9CA3AF' : 'var(--color-text)',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        textDecoration: hidden ? 'line-through' : 'none',
                      }}>
                        {entry.titre}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 1 }}>
                        {entry.sourceLabel}
                        {entry.surface ? ` · ${entry.surface}` : ''}
                      </div>
                    </div>

                    {/* Source badge */}
                    <span style={{
                      padding: '2px 7px', borderRadius: 8, flexShrink: 0,
                      background: `${entry.color}18`, border: `1px solid ${entry.color}33`,
                      fontSize: 10, fontWeight: 700, color: entry.color,
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                    }}>
                      {entry.source === 'u8u9' ? 'U8-U9' : entry.source === 'livret' ? 'U7' : entry.source === 'u6' ? 'U6' : 'U6-U7'}
                    </span>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleHidden(entry.id)}
                      title={hidden ? 'Rendre visible' : 'Masquer'}
                      style={{
                        background: hidden ? '#FEE2E2' : 'var(--color-bg)',
                        border: `1px solid ${hidden ? '#FECACA' : 'var(--color-border)'}`,
                        borderRadius: 8, cursor: 'pointer',
                        padding: '5px 10px', fontSize: 13,
                        color: hidden ? '#EF4444' : 'var(--color-muted)',
                        fontFamily: 'Barlow, sans-serif',
                        transition: 'all 0.15s', flexShrink: 0,
                        fontWeight: hidden ? 700 : 400,
                      }}
                    >
                      {hidden ? '👁 Afficher' : '🚫 Masquer'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
