import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Briefcase, BookOpen, Building, Code2, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import JobPortal from './pages/JobPortal';
import Preparation from './pages/Preparation';
import HiringProcess from './pages/HiringProcess';
import DSAPrep from './pages/DSAPrep';

// Theme Context
export const ThemeContext = createContext();

// Navigation Component
const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: <Briefcase size={18} /> },
    { name: 'Job Portal', path: '/job-portal', icon: <Briefcase size={18} /> },
    { name: 'Preparation', path: '/preparation', icon: <BookOpen size={18} /> },
    { name: 'Hiring Process', path: '/hiring-process', icon: <Building size={18} /> },
    { name: 'DSA Prep', path: '/dsa-prep', icon: <Code2 size={18} /> },
  ];

  return (
    <nav className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 1000, margin: '1rem', borderRadius: '1rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif' }}>
          <span className="text-gradient">Arzu's Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: location.pathname === link.path ? 'var(--accent-color)' : 'var(--text-secondary)',
                fontWeight: location.pathname === link.path ? 600 : 500,
                textDecoration: 'none'
              }}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-only">
          <button onClick={toggleTheme} className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', color: 'var(--text-primary)' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-nav" style={{ padding: '1rem', borderTop: '1px solid var(--card-border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: location.pathname === link.path ? 'var(--accent-light)' : 'transparent',
                  color: location.pathname === link.path ? 'var(--accent-color)' : 'var(--text-primary)',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-only { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

// Main App Component
function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, padding: '2rem 0' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/job-portal" element={<JobPortal />} />
              <Route path="/preparation" element={<Preparation />} />
              <Route path="/hiring-process" element={<HiringProcess />} />
              <Route path="/dsa-prep" element={<DSAPrep />} />
            </Routes>
          </main>

          {/* Simple Footer */}
          <footer style={{ borderTop: '1px solid var(--card-border)', padding: '2rem 0', textAlign: 'center', backgroundColor: 'var(--card-bg)' }}>
            <div className="container">
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, marginBottom: '0.5rem' }} className="text-gradient">Arzu's Portfolio</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                Dedicated to helping you land your dream job with structured preparation and modern tools.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
