import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={logoStyle}>USF</div>
      <div style={textStyle}>Unity Strike Force · "DO | 1v1 | DIE" Season 2.0</div>
      <div style={textStyle}>© 2025 USF Clan. All rights reserved.</div>
    </footer>
  );
}

const footerStyle = {
  background: 'var(--bg2)',
  borderTop: '1px solid var(--border)',
  textAlign: 'center',
  padding: '40px 24px',
  position: 'relative',
  zIndex: 1,
};
const logoStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '2rem',
  letterSpacing: 4,
  color: 'var(--accent)',
  marginBottom: 8,
};
const textStyle = {
  color: 'var(--text2)',
  fontSize: '0.85rem',
  marginBottom: 4,
};
