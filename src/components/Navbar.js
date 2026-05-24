import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: '#info', label: 'Info' },
    { href: '#rules', label: 'Rules' },
    { href: '#players', label: 'Players' },
    { href: '#standings', label: 'Standings' },
    { href: '#fixtures', label: 'Fixture' },
    { href: '#register', label: 'Register' },
  ];

  return (
    <>
      <nav style={navStyle}>
        <a href="#home" style={logoStyle}>USF<span style={{ color: 'var(--text)' }}> | S2.0</span></a>

        <ul style={linksStyle}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={linkStyle}
                onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(230,57,70,0.1)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.background = 'transparent'; }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button style={themeToggleStyle} onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            style={hamburgerBtnStyle}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ ...hamLineStyle, transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ ...hamLineStyle, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...hamLineStyle, transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={mobileNavStyle}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={mobileLinkStyle} onClick={closeMenu}
              onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(230,57,70,0.1)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.background = 'transparent'; }}>
              {l.label}
            </a>
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
  padding: '14px 24px',
  background: 'rgba(10,10,15,0.85)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid var(--border)',
  transition: 'background 0.3s',
};
const logoStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.6rem',
  letterSpacing: 3,
  color: 'var(--accent)',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};
const linksStyle = {
  display: 'flex',
  gap: 6,
  listStyle: 'none',
  alignItems: 'center',
  '@media(maxWidth:768px)': { display: 'none' },
};
const linkStyle = {
  color: 'var(--text2)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.85rem',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  padding: '6px 12px',
  borderRadius: 6,
  transition: 'all 0.2s',
  display: 'block',
};
const themeToggleStyle = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  width: 36, height: 36,
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1rem',
  transition: 'all 0.2s',
};
const hamburgerBtnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 4,
};
const hamLineStyle = {
  display: 'block',
  width: 24, height: 2,
  background: 'var(--text)',
  borderRadius: 2,
  transition: 'all 0.3s',
};
const mobileNavStyle = {
  position: 'fixed',
  top: 65, left: 0, right: 0,
  background: 'var(--bg2)',
  borderBottom: '1px solid var(--border)',
  padding: 16,
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};
const mobileLinkStyle = {
  color: 'var(--text2)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: 1,
  textTransform: 'uppercase',
  padding: '10px 16px',
  borderRadius: 8,
  transition: 'all 0.2s',
};
