import React from 'react';
import Countdown from './Countdown';

export default function Hero() {
  return (
    <section id="home" style={heroStyle}>
      <div style={heroBgStyle} />
      <div style={heroGridStyle} />
      <div style={contentStyle}>
        <div style={badgeStyle}>⚡ Unity Strike Force Presents</div>

        <h1 style={titleStyle}>
          <span className="title-line-wrap" style={{ display: 'block', color: 'var(--text)' }}>
            <span className="title-word">" ALLIES</span>
            <span className="title-word"> TO</span>
            <span className="title-word"> RIVALS "</span>
          </span>
          <span style={{ display: 'block', color: 'var(--accent)', textShadow: '0 0 60px rgba(230,57,70,0.5)' }}>TOURNAMENT</span>
        </h1>

        <div style={seasonStyle}>SEASON 2026</div>

        <div style={metaRowStyle} className="meta-row">
          <div className="meta-group">
            <MetaItem label="Start Date" value="08 JUNE 2026" />
            <div style={dividerStyle} className="meta-divider" />
            <MetaItem label="Final" value="13 JUNE 2026" />
          </div>
          <div style={dividerStyle} className="meta-divider meta-divider-center" />
          <div className="meta-group">
            <MetaItem label="Prize Pool" value="2500 BDT" />
            <div style={dividerStyle} className="meta-divider" />
            <MetaItem label="Slots" value="16" />
          </div>
        </div>

        <Countdown />
      </div>

      {/* Register section embedded below hero */}
      <RegisterInline />

      <style>{`
        .meta-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .meta-group {
          display: flex;
          align-items: center;
          gap: clamp(8px, 3vw, 20px);
        }
        @media (max-width: 465px) {
          .title-line-wrap {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .title-word {
            display: block !important;
            line-height: 1 !important;
          }
          .meta-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .meta-divider-center {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function RegisterInline() {
  const DISCORD_INVITE_LINK = 'https://discord.gg/8C9nA2bx';
  const STEPS = [
    { icon: '📝', step: 'Step 1', label: 'Join Discord' },
    { icon: '🎯', step: 'Step 2', label: 'Go to #registration' },
    { icon: '✅', step: 'Step 3', label: 'Submit your IGN' },
    { icon: '🎮', step: 'Step 4', label: 'Wait for Category' },
  ];

  return (
    <div id="register" style={registerWrapStyle}>
      <div style={sectionHeaderStyle}>
        <p style={sectionTagStyle}>Join The Battle</p>
        <h2 style={sectionTitleStyle}>REGISTRATION</h2>
        <div style={sectionLineStyle} />
      </div>
      <div style={regCardStyle}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: 16 }}>🎮</div>
        <div style={regTitleStyle}>JOIN THE TOURNAMENT</div>
        <div style={regDescStyle}>
          Register on our Discord server in the <strong>#registration</strong> channel. Submit your IGN (In-Game Name) before the deadline to secure your slot. Only 16 slots available — first come, first served!
        </div>
        <div style={deadlineStyle}>⏰ Registration Deadline: 07 June 2026 · 06:00 PM</div>
        <br />
        <a
          href={DISCORD_INVITE_LINK}
          target="_blank"
          rel="noreferrer"
          style={discordBtnStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#4752C4';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(88,101,242,0.5)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#5865F2';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(88,101,242,0.3)';
            e.currentTarget.style.transform = 'none';
          }}
        >
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
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function MetaItem({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text2)' }}>{label}</span>
      <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(0.75rem, 2.5vw, 1rem)', fontWeight: 700, color: 'var(--accent)' }}>{value}</span>
    </div>
  );
}

const heroStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textAlign: 'center',
  position: 'relative',
  padding: 'clamp(80px, 10vw, 100px) clamp(16px, 4vw, 24px) 80px',
  overflow: 'hidden',
  boxSizing: 'border-box',
};
const heroBgStyle = {
  position: 'absolute',
  inset: 0,
  background: `
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,57,70,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,58,237,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 20% 60%, rgba(6,182,212,0.08) 0%, transparent 60%)
  `,
};
const heroGridStyle = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
};
const contentStyle = {
  position: 'relative',
  zIndex: 1,
  maxWidth: 800,
  width: '100%',
};
const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'rgba(230,57,70,0.15)',
  border: '1px solid rgba(230,57,70,0.4)',
  color: 'var(--accent2)',
  fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
  fontWeight: 700,
  letterSpacing: 3,
  textTransform: 'uppercase',
  padding: '6px 16px',
  borderRadius: 100,
  marginBottom: 24,
  animation: 'fadeDown 0.8s ease both',
  flexWrap: 'wrap',
  justifyContent: 'center',
};
const titleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(2.5rem, 12vw, 8rem)',
  lineHeight: 0.9,
  letterSpacing: 4,
  marginBottom: 8,
  animation: 'fadeDown 0.8s ease 0.1s both',
};
const seasonStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: 'clamp(0.8rem, 3vw, 1.6rem)',
  letterSpacing: 'clamp(2px, 1.5vw, 8px)',
  color: 'var(--gold)',
  marginBottom: 32,
  animation: 'fadeDown 0.8s ease 0.2s both',
};
const metaRowStyle = {
  gap: 'clamp(8px, 3vw, 20px)',
  marginBottom: 40,
  animation: 'fadeDown 0.8s ease 0.3s both',
};
const dividerStyle = {
  width: 1,
  height: 40,
  background: 'var(--border)',
  alignSelf: 'center',
};
const registerWrapStyle = {
  width: '100%',
  maxWidth: 800,
  marginTop: 80,
  padding: '0 clamp(12px, 4vw, 24px)',
  boxSizing: 'border-box',
};
const sectionHeaderStyle = { textAlign: 'center', marginBottom: 48 };
const sectionTagStyle = {
  fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
  letterSpacing: 3,
  textTransform: 'uppercase',
  color: 'var(--accent)',
  fontWeight: 700,
  marginBottom: 8,
};
const sectionTitleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
  letterSpacing: 6,
  color: 'var(--text)',
  marginBottom: 16,
};
const sectionLineStyle = {
  width: 60,
  height: 3,
  background: 'linear-gradient(90deg, var(--accent), var(--purple))',
  margin: '0 auto',
  borderRadius: 2,
};
const regCardStyle = {
  background: 'linear-gradient(135deg, var(--card), var(--card2))',
  border: '1px solid rgba(124,58,237,0.3)',
  borderRadius: 20,
  padding: 'clamp(20px, 5vw, 48px)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
};
const regTitleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
  letterSpacing: 4,
  color: 'var(--text)',
  marginBottom: 12,
};
const regDescStyle = {
  color: 'var(--text2)',
  fontSize: 'clamp(0.82rem, 2vw, 1rem)',
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
  padding: '8px clamp(12px, 3vw, 20px)',
  borderRadius: 100,
  fontSize: 'clamp(0.62rem, 1.5vw, 0.82rem)',
  fontWeight: 700,
  letterSpacing: 'clamp(1px, 0.5vw, 2px)',
  textTransform: 'uppercase',
  marginBottom: 28,
  flexWrap: 'wrap',
  justifyContent: 'center',
  textAlign: 'center',
};
const discordBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: '#5865F2',
  color: 'white',
  padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 36px)',
  borderRadius: 12,
  fontFamily: "'Rajdhani', sans-serif",
  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
  gap: 12,
};
const stepCardStyle = {
  background: 'var(--bg3)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: 'clamp(10px, 2vw, 16px)',
  textAlign: 'center',
};