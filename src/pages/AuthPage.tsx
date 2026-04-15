import { useState } from 'react';
import { supabase } from '../lib/supabase';
import CoachPlanLogo from '../components/CoachPlanLogo';

type Mode = 'login' | 'signup' | 'forgot';

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

      } else if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setSuccess('Compte créé ! Vérifie ton email pour confirmer ton inscription.');

      } else if (mode === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
        setSuccess('Email de réinitialisation envoyé. Vérifie ta boîte mail.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Une erreur est survenue';
      if (msg.includes('Invalid login credentials')) {
        setError('Email ou mot de passe incorrect.');
      } else if (msg.includes('already registered')) {
        setError('Cet email est déjà utilisé.');
      } else if (msg.includes('Password should be')) {
        setError('Le mot de passe doit contenir au moins 6 caractères.');
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 10,
    border: '1px solid var(--color-border)',
    background: 'var(--color-bg)',
    fontSize: 14,
    color: 'var(--color-text)',
    outline: 'none',
    fontFamily: 'Barlow, sans-serif',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 20px',
      fontFamily: 'Barlow, sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
          <CoachPlanLogo height={48} />
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--color-surface)',
          borderRadius: 18,
          border: '1px solid var(--color-border)',
          padding: '32px 28px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>

          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800,
            fontSize: 22,
            color: 'var(--color-text)',
            margin: '0 0 6px',
          }}>
            {mode === 'login' && 'Connexion'}
            {mode === 'signup' && 'Créer un compte'}
            {mode === 'forgot' && 'Mot de passe oublié'}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-muted)', margin: '0 0 24px' }}>
            {mode === 'login' && 'Accède à tes séances d\'entraînement.'}
            {mode === 'signup' && 'Rejoins CoachPlan et gère tes séances.'}
            {mode === 'forgot' && 'Reçois un lien de réinitialisation par email.'}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="coach@exemple.com"
                required
                style={{ ...inputStyle, marginTop: 6 }}
                onFocus={e => e.target.style.borderColor = '#1E9E58'}
                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>

            {mode !== 'forgot' && (
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  style={{ ...inputStyle, marginTop: 6 }}
                  onFocus={e => e.target.style.borderColor = '#1E9E58'}
                  onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>
            )}

            {error && (
              <div style={{
                background: '#FEE2E2',
                border: '1px solid #FECACA',
                borderRadius: 8,
                padding: '10px 14px',
                fontSize: 13,
                color: '#B91C1C',
              }}>
                {error}
              </div>
            )}

            {success && (
              <div style={{
                background: '#DCFCE7',
                border: '1px solid #BBF7D0',
                borderRadius: 8,
                padding: '10px 14px',
                fontSize: 13,
                color: '#15803D',
              }}>
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? '#86EFAC' : '#1E9E58',
                color: 'white',
                border: 'none',
                borderRadius: 10,
                padding: '13px',
                fontSize: 14,
                fontWeight: 700,
                fontFamily: 'Barlow, sans-serif',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s',
                marginTop: 4,
              }}
            >
              {loading ? 'Chargement...' : (
                mode === 'login' ? 'Se connecter' :
                mode === 'signup' ? 'Créer le compte' :
                'Envoyer le lien'
              )}
            </button>
          </form>

          {/* Footer links */}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            {mode === 'login' && (
              <>
                <button onClick={() => { setMode('forgot'); setError(''); setSuccess(''); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--color-muted)' }}>
                  Mot de passe oublié ?
                </button>
                <div style={{ fontSize: 13, color: 'var(--color-muted)' }}>
                  Pas encore de compte ?{' '}
                  <button onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#1E9E58', fontWeight: 700 }}>
                    S'inscrire
                  </button>
                </div>
              </>
            )}
            {(mode === 'signup' || mode === 'forgot') && (
              <button onClick={() => { setMode('login'); setError(''); setSuccess(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#1E9E58', fontWeight: 700 }}>
                ← Retour à la connexion
              </button>
            )}
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-muted)', marginTop: 20 }}>
          CFI — Programme U6-U7
        </p>
      </div>
    </div>
  );
}
