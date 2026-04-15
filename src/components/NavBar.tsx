import { useLocation, useNavigate } from 'react-router-dom';
import CoachPlanLogo from './CoachPlanLogo';
import { useAuth } from '../context/AuthContext';

const TABS = [
  { path: '/exercices', label: 'Exercices', icon: '⚽' },
  { path: '/creer', label: 'Créer', icon: '✏️' },
  { path: '/mes-seances', label: 'Mes séances', icon: '📋' },
];

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role, signOut } = useAuth();

  const active = TABS.find(t => location.pathname.startsWith(t.path));

  return (
    <>
      {/* Desktop top nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 90,
        background: 'rgba(250,249,245,0.96)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 20px',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center',
              padding: '10px 20px 10px 0',
              borderRight: '1px solid var(--color-border)',
              marginRight: 8,
            }}
          >
            <CoachPlanLogo height={30} />
          </button>

          {/* Tabs */}
          {TABS.map(tab => {
            const isActive = active?.path === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                style={{
                  padding: '14px 16px',
                  background: 'none', border: 'none',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7,
                  fontSize: 13, fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
                  borderBottom: `2px solid ${isActive ? '#1E9E58' : 'transparent'}`,
                  marginBottom: -1,
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-text)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-muted)'; }}
              >
                <span style={{ fontSize: 15 }}>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Bouton Admin */}
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

          {/* Email + déconnexion */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontSize: 12, color: 'var(--color-muted)',
              maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {user?.email}
            </span>
            <button
              onClick={signOut}
              style={{
                background: 'none', border: '1px solid var(--color-border)',
                borderRadius: 8, cursor: 'pointer',
                padding: '6px 12px', fontSize: 12,
                color: 'var(--color-muted)', fontFamily: 'Barlow, sans-serif',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.borderColor = 'var(--color-text)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        display: 'flex',
        padding: '6px 0 env(safe-area-inset-bottom, 6px)',
      }}
        className="mobile-nav"
      >
        {TABS.map(tab => {
          const isActive = active?.path === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              style={{
                flex: 1, background: 'none', border: 'none',
                cursor: 'pointer', padding: '6px 4px 2px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 3,
                color: isActive ? '#1E9E58' : 'var(--color-muted)',
                transition: 'color 0.15s',
              }}
            >
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              <span style={{
                fontSize: 10, fontWeight: isActive ? 700 : 400,
                letterSpacing: '0.03em',
              }}>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
