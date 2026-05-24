import React, { useEffect, useRef } from 'react';

// ─── আপনার Discord সার্ভারের invite লিংক এখানে দিন ───
const DISCORD_INVITE_LINK = 'https://discord.gg/YOUR_SERVER_CODE';

const STEPS = [
  { icon: '📝', step: 'Step 1', label: 'Join Discord' },
  { icon: '🎯', step: 'Step 2', label: 'Go to #registration' },
  { icon: '✅', step: 'Step 3', label: 'Submit your IGN' },
  { icon: '🎮', step: 'Step 4', label: 'Wait for Category' },
];

export default function Register() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="register" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">Join The Battle</p>
        <h2 className="section-title">REGISTRATION</h2>
        <div className="section-line" />
      </div>

      <div style={regCardStyle}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎮</div>
        <div style={regTitleStyle}>JOIN THE TOURNAMENT</div>
        <div style={regDescStyle}>
          Register on our Discord server in the <strong>#registration</strong> channel. Submit your IGN (In-Game Name) before the deadline to secure your slot. Only 16 slots available — first come, first served!
        </div>
        <div style={deadlineStyle}>⏰ Registration Deadline: 02 July 2025 · 11:59 PM</div>
        <br />
        <a href={DISCORD_INVITE_LINK} target="_blank" rel="noreferrer" style={discordBtnStyle}
          onMouseEnter={e => { e.currentTarget.style.background = '#4752C4'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(88,101,242,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#5865F2'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(88,101,242,0.3)'; e.currentTarget.style.transform = 'none'; }}>
          <DiscordSvg />
          Join Discord Server
        </a>

        <div style={stepsGridStyle}>
          {STEPS.map(({ icon, step, label }) => (
            <div key={step} style={stepCardStyle}>
              <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{step}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiscordSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  );
}

const regCardStyle = {
  background: 'linear-gradient(135deg, var(--card), var(--card2))',
  border: '1px solid rgba(124,58,237,0.3)',
  borderRadius: 20,
  padding: 48,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};
const regTitleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '2.5rem',
  letterSpacing: 4,
  color: 'var(--text)',
  marginBottom: 12,
};
const regDescStyle = {
  color: 'var(--text2)',
  fontSize: '1rem',
  maxWidth: 500,
  margin: '0 auto 32px',
  lineHeight: 1.7,
};
const deadlineStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'rgba(230,57,70,0.12)',
  border: '1px solid rgba(230,57,70,0.3)',
  color: 'var(--accent2)',
  padding: '8px 20px',
  borderRadius: 100,
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: 'uppercase',
  marginBottom: 28,
};
const discordBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#5865F2',
  color: 'white',
  padding: '16px 36px',
  borderRadius: 12,
  fontFamily: "'Rajdhani', sans-serif",
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'all 0.25s',
  boxShadow: '0 8px 30px rgba(88,101,242,0.3)',
};
const stepsGridStyle = {
  marginTop: 24,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: 12,
};
const stepCardStyle = {
  background: 'var(--bg3)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: 16,
  textAlign: 'center',
};
