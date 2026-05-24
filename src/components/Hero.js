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
          <span style={{ display: 'block', color: 'var(--text)' }}>" DO · 1v1 · DIE "</span>
          <span style={{ display: 'block', color: 'var(--accent)', textShadow: '0 0 60px rgba(230,57,70,0.5)' }}>TOURNAMENT</span>
        </h1>

        <div style={seasonStyle}>SEASON 2.0</div>

        <div style={metaRowStyle}>
          <MetaItem label="Start Date" value="03 AUG 2025" />
          <div style={dividerStyle} />
          <MetaItem label="Final" value="09 AUG 2025" />
          <div style={dividerStyle} />
          <MetaItem label="Prize Pool" value="960 CP" />
          <div style={dividerStyle} />
          <MetaItem label="Slots" value="16" />
        </div>

        <Countdown />

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeDown 0.8s ease 0.4s both' }}>
          <a href="#register" className="btn btn-primary">🎮 Register Now</a>
          <a href="#info" className="btn btn-secondary">View Details</a>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span style={{ fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text2)' }}>{label}</span>
      <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>{value}</span>
    </div>
  );
}

const heroStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  padding: '100px 24px 60px',
  overflow: 'hidden',
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
};
const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'rgba(230,57,70,0.15)',
  border: '1px solid rgba(230,57,70,0.4)',
  color: 'var(--accent2)',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: 3,
  textTransform: 'uppercase',
  padding: '6px 16px',
  borderRadius: 100,
  marginBottom: 24,
  animation: 'fadeDown 0.8s ease both',
};
const titleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(3.5rem, 12vw, 8rem)',
  lineHeight: 0.9,
  letterSpacing: 4,
  marginBottom: 8,
  animation: 'fadeDown 0.8s ease 0.1s both',
};
const seasonStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: 'clamp(1rem, 3vw, 1.6rem)',
  letterSpacing: 8,
  color: 'var(--gold)',
  marginBottom: 32,
  animation: 'fadeDown 0.8s ease 0.2s both',
};
const metaRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 20,
  marginBottom: 40,
  animation: 'fadeDown 0.8s ease 0.3s both',
};
const dividerStyle = {
  width: 1, height: 40,
  background: 'var(--border)',
  alignSelf: 'center',
};
