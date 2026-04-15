import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ExercicesPage from './pages/ExercicesPage';
import CreerSeancePage from './pages/CreerSeancePage';
import MesSeancesPage from './pages/MesSeancesPage';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const location = useLocation();
  const { user, role, loading } = useAuth();
  const showNav = location.pathname !== '/' && location.pathname !== '/admin';

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--color-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 36, height: 36,
          border: '3px solid var(--color-border)',
          borderTopColor: '#1E9E58',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return (
    <>
      {showNav && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercices" element={<ExercicesPage />} />
        <Route path="/creer" element={<CreerSeancePage />} />
        <Route path="/mes-seances" element={<MesSeancesPage />} />
        <Route
          path="/admin"
          element={role === 'admin' ? <AdminPage /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
