import React, { useState, useEffect } from 'react';

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { key: 'home',      label: 'Home'      },
    { key: 'info',      label: 'Info'      },
    { key: 'rules',     label: 'Rules'     },
    { key: 'players',   label: 'Players'   },
    { key: 'standings', label: 'Standings' },
    { key: 'fixtures',  label: 'Fixture'   },
  ];

  const handleNav = (key) => {
    setPage(key);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <button onClick={() => handleNav('home')} style={logoStyle}>
          USF<span style={{ color: 'var(--text)' }}> | 2026</span>
        </button>

        {/* Desktop links — hidden on mobile */}
        {!isMobile && (
          <ul style={linksStyle}>
            {links.map(l => (
              <li key={l.key} style={{ listStyle: 'none' }}>
                <button
                  onClick={() => handleNav(l.key)}
                  style={{
                    ...linkStyle,
                    color: page === l.key ? 'var(--accent)' : 'var(--text2)',
                    background: page === l.key ? 'rgba(230,57,70,0.1)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.background = 'rgba(230,57,70,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = page === l.key ? 'var(--accent)' : 'var(--text2)';
                    e.currentTarget.style.background = page === l.key ? 'rgba(230,57,70,0.1)' : 'transparent';
                  }}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Right side controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button style={themeToggleStyle} onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger — only on mobile */}
          {isMobile && (
            <button
              style={hamburgerBtnStyle}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span style={{
                ...hamLineStyle,
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                ...hamLineStyle,
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'none',
              }} />
              <span style={{
                ...hamLineStyle,
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={mobileNavStyle}>
          {links.map(l => (
            <button
              key={l.key}
              onClick={() => handleNav(l.key)}
              style={{
                ...mobileLinkStyle,
                color: page === l.key ? 'var(--accent)' : 'var(--text2)',
                background: page === l.key ? 'rgba(230,57,70,0.1)' : 'transparent',
                borderLeft: page === l.key ? '3px solid var(--accent)' : '3px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'rgba(230,57,70,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = page === l.key ? 'var(--accent)' : 'var(--text2)';
                e.currentTarget.style.background = page === l.key ? 'rgba(230,57,70,0.1)' : 'transparent';
              }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

const navStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 20px',
  background: 'rgba(10,10,15,0.92)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid var(--border)',
};

const logoStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.6rem',
  letterSpacing: 3,
  color: 'var(--accent)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: 0,
  lineHeight: 1,
};

const linksStyle = {
  display: 'flex',
  gap: 4,
  listStyle: 'none',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '0.82rem',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  padding: '6px 10px',
  borderRadius: 6,
  transition: 'all 0.2s',
  fontFamily: "'Rajdhani', sans-serif",
};

const themeToggleStyle = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  width: 34,
  height: 34,
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  flexShrink: 0,
};

const hamburgerBtnStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 5,
  cursor: 'pointer',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: '7px 8px',
  width: 34,
  height: 34,
  boxSizing: 'border-box',
};

const hamLineStyle = {
  display: 'block',
  width: 18,
  height: 2,
  background: 'var(--text)',
  borderRadius: 2,
  transition: 'all 0.3s ease',
  transformOrigin: 'center',
};

const mobileNavStyle = {
  position: 'fixed',
  top: 63,
  left: 0,
  right: 0,
  background: 'rgba(10,10,15,0.97)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid var(--border)',
  padding: '8px 12px 16px',
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const mobileLinkStyle = {
  background: 'none',
  border: 'none',
  borderLeft: '3px solid transparent',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '0.95rem',
  letterSpacing: 2,
  textTransform: 'uppercase',
  padding: '12px 16px',
  borderRadius: '0 8px 8px 0',
  transition: 'all 0.2s',
  textAlign: 'left',
  fontFamily: "'Rajdhani', sans-serif",
  width: '100%',
};