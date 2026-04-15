import { useNavigate } from 'react-router-dom';
import CoachPlanLogo from '../components/CoachPlanLogo';
import { useAuth } from '../context/AuthContext';
import { sessions, SERIE_CHATEAU } from '../data/sessions';
import { LIVRET_U7 } from '../data/livretU7';
import { LIVRET_U6 } from '../data/livretU6';

const totalExercices =
  LIVRET_U7.length +
  LIVRET_U6.length +
  [...sessions, ...SERIE_CHATEAU].reduce((acc, s) => acc + s.exercices.length, 0);

const CARDS = [
  {
    path: '/exercices',
    icon: '⚽',
    title: 'Exercices',
    description: `${totalExercices} exercices issus du Guide U6, Livret U7 et Programme CFI, filtrables et consultables en détail.`,
    color: '#1E9E58',
    label: 'Parcourir',
  },
  {
    path: '/creer',
    icon: '✏️',
    title: 'Créer ma séance',
    description: 'Composez une séance sur-mesure en sélectionnant jusqu\'à 5 exercices depuis la bibliothèque.',
    color: '#208B78',
    label: 'Créer',
  },
  {
    path: '/mes-seances',
    icon: '📋',
    title: 'Mes séances',
    description: 'Retrouvez toutes vos séances personnalisées sauvegardées, avec le détail des exercices.',
    color: '#9F4271',
    label: 'Voir mes séances',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { user, role, signOut } = useAuth();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px 100px',
      fontFamily: 'Barlow, sans-serif',
      position: 'relative',
    }}>
      {/* Barre top droite */}
      <div style={{
        position: 'absolute', top: 20, right: 24,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {role === 'admin' && (
          <button onClick={() => navigate('/admin')} style={{
            background: '#9F427122', border: '1px solid #9F427144',
            borderRadius: 8, cursor: 'pointer', padding: '6px 12px',
            fontSize: 12, fontWeight: 700, color: '#9F4271',
            fontFamily: 'Barlow, sans-serif',
          }}>
            🔑 Admin
          </button>
        )}
        {user && (
          <>
            <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>{user.email}</span>
            <button onClick={signOut} style={{
              background: 'none', border: '1px solid var(--color-border)',
              borderRadius: 8, cursor: 'pointer', padding: '6px 12px',
              fontSize: 12, color: 'var(--color-muted)', fontFamily: 'Barlow, sans-serif',
            }}>
              Déconnexion
            </button>
          </>
        )}
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 520 }}>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <CoachPlanLogo height={64} />
        </div>
        <p style={{
          fontSize: 16, color: 'var(--color-muted)',
          margin: 0, lineHeight: 1.6,
        }}>
          Préparez et gérez vos séances d'entraînement directement depuis votre téléphone.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
        width: '100%',
        maxWidth: 900,
      }}>
        {CARDS.map(card => (
          <button
            key={card.path}
            onClick={() => navigate(card.path)}
            style={{
              background: 'var(--color-surface)',
              border: `1px solid var(--color-border)`,
              borderRadius: 18,
              padding: '28px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 16px 48px ${card.color}22`;
              e.currentTarget.style.borderColor = `${card.color}66`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            <div style={{ height: 3, background: card.color, borderRadius: 2, marginTop: -4 }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                background: `${card.color}18`,
                border: `1px solid ${card.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24,
              }}>
                {card.icon}
              </div>
              <h2 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900, fontSize: 22,
                color: 'var(--color-text)', margin: 0,
                letterSpacing: '0.02em',
              }}>
                {card.title}
              </h2>
            </div>

            <p style={{
              fontSize: 14, color: 'var(--color-muted)',
              margin: 0, lineHeight: 1.65, flex: 1,
            }}>
              {card.description}
            </p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: card.color, fontSize: 13, fontWeight: 700,
              letterSpacing: '0.04em',
            }}>
              {card.label}
              <span style={{ fontSize: 16 }}>→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
