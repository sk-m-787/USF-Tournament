import React, { useState, useEffect, useRef } from 'react';

// ── Tier 01 fixtures
const T1_FIXTURES = [
  {
    round: 'Group Stage · Match 1', status: 'Completed',
    left: [{ init: 'AR', color: 'purple', name: 'U2F¿ARAGORN', winner: true }, { init: 'BL', color: 'purple', name: 'U2F¿BLITZBOT', winner: true }],
    right: [{ init: 'AK', color: 'red', name: 'U2F¿AKAZA' }, { init: 'DD', color: 'red', name: 'U2F¿DR.DEATH' }],
  },
  {
    round: 'Group Stage · Match 2', status: 'Completed',
    left: [{ init: 'MR', color: 't1', name: 'U2F¿MR_A04', winner: true }, { init: 'NE', color: 't1', name: 'U2F¿NERFF', winner: true }],
    right: [{ init: 'GO', color: 'red', name: 'U2F¿GORILLA' }, { init: 'DR', color: 'red', name: 'U2F¿DRAKEN' }],
  },
  {
    round: 'Group Stage · Match 3', status: 'Completed',
    left: [{ init: 'AR', color: 'purple', name: 'U2F¿ARAGORN', winner: true }, { init: 'IG', color: 'purple', name: 'U2F¿IGRIS', winner: true }],
    right: [{ init: 'GO', color: 'red', name: 'U2F¿GORILLA' }, { init: 'AK', color: 'red', name: 'U2F¿AKAZA' }],
  },
  {
    round: 'Semi Final 1 · Tier 01', status: 'Completed', isGold: true,
    left: [{ init: 'BL', color: 't1', name: 'U2F¿BLITZBOT', winner: true }],
    right: [{ init: 'NE', color: 'red', name: 'U2F¿NERFF' }],
  },
  {
    round: 'Semi Final 2 · Tier 01', status: 'Completed', isGold: true,
    left: [{ init: 'AR', color: 't1', name: 'U2F¿ARAGORN', winner: true }],
    right: [{ init: 'MR', color: 'red', name: 'U2F¿MR_A04' }],
  },
];

// ── Tier 02 fixtures
const T2_FIXTURES = [
  {
    round: 'Group Stage · Match 1', status: 'Completed',
    left: [{ init: 'HA', color: 't2', name: 'U2F¿HABIBI', winner: true }, { init: 'VO', color: 't2', name: 'U2F¿VORTEX', winner: true }],
    right: [{ init: 'LO', color: 'red', name: 'U2F¿LoKi' }, { init: 'MD', color: 'red', name: 'U2F¿MD' }],
  },
  {
    round: 'Group Stage · Match 2', status: 'Completed',
    left: [{ init: 'ZA', color: 't2', name: 'U2F¿ZANZA', winner: true }, { init: 'PR', color: 't2', name: 'U2F¿PRONEX', winner: true }],
    right: [{ init: 'MI', color: 'red', name: 'U2F¿MIAOW' }, { init: 'LO', color: 'red', name: 'U2F¿LoKi' }],
  },
  {
    round: 'Semi Final 1 · Tier 02', status: 'Completed', isSilver: true,
    left: [{ init: 'HA', color: 't2', name: 'U2F¿HABIBI', winner: true }],
    right: [{ init: 'ZA', color: 'red', name: 'U2F¿ZANZA' }],
  },
  {
    round: 'Semi Final 2 · Tier 02', status: 'Completed', isSilver: true,
    left: [{ init: 'VO', color: 't2', name: 'U2F¿VORTEX', winner: true }],
    right: [{ init: 'PR', color: 'red', name: 'U2F¿PRONEX' }],
  },
];

const avatarColors = {
  't1':    { bg: 'rgba(255,215,0,0.12)',   border: 'rgba(255,215,0,0.25)',   color: 'var(--gold)' },
  't2':    { bg: 'rgba(192,192,192,0.12)', border: 'rgba(192,192,192,0.25)', color: 'var(--silver)' },
  'purple':{ bg: 'rgba(124,58,237,0.12)',  border: 'rgba(124,58,237,0.25)',  color: 'var(--purple2)' },
  'red':   { bg: 'rgba(230,57,70,0.12)',   border: 'rgba(230,57,70,0.25)',   color: 'var(--accent)' },
};

export default function Fixtures() {
  const [active, setActive] = useState('f1');
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fixtures = active === 'f1' ? T1_FIXTURES : T2_FIXTURES;

  return (
    <div id="fixtures" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">Match Results</p>
        <h2 className="section-title">FIXTURE</h2>
        <div className="section-line" />
      </div>

      <div style={tabsStyle}>
        <button style={{ ...tabStyle, ...(active === 'f1' ? activeStyle : {}) }} onClick={() => setActive('f1')}>Tier 01 — Elite</button>
        <button style={{ ...tabStyle, ...(active === 'f2' ? activeStyle : {}) }} onClick={() => setActive('f2')}>Tier 02 — Rising</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {fixtures.map((f, i) => <MatchCard key={i} {...f} />)}
      </div>
    </div>
  );
}

function MatchCard({ round, status, left, right, isGold, isSilver }) {
  const accent = isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : 'var(--purple2)';
  const headerBg = isGold ? 'rgba(255,215,0,0.06)' : isSilver ? 'rgba(192,192,192,0.05)' : 'var(--bg3)';
  const borderColor = isGold ? 'rgba(255,215,0,0.2)' : isSilver ? 'rgba(192,192,192,0.25)' : 'var(--border)';

  return (
    <div style={{ background: 'var(--card)', border: `1px solid ${borderColor}`, borderRadius: 12, overflow: 'hidden', transition: 'all 0.2s' }}>
      {/* Header */}
      <div style={{ background: headerBg, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: accent }}>{round}</span>
        <span style={statusStyle}>{status}</span>
      </div>
      {/* Body */}
      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 12 }}>
        {/* Left team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {left.map((p, i) => <PlayerRow key={i} {...p} nameColor={isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : undefined} />)}
        </div>
        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)', color: 'var(--accent)', fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', fontWeight: 700, width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>VS</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', fontWeight: 900, color: 'var(--green)' }}>W</span>
            <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>—</span>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', fontWeight: 900, color: 'var(--text2)' }}>L</span>
          </div>
        </div>
        {/* Right team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          {right.map((p, i) => <PlayerRow key={i} {...p} right nameColor={isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : undefined} />)}
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ init, color, name, winner, right: isRight, nameColor }) {
  const av = avatarColors[color] || avatarColors.red;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexDirection: isRight ? 'row-reverse' : 'row' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', fontWeight: 700, flexShrink: 0, background: av.bg, border: `1px solid ${av.border}`, color: av.color }}>
        {init}
      </div>
      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: nameColor || 'var(--text)', display: 'flex', alignItems: 'center', gap: 6 }}>
        {name} {winner && <span style={{ fontSize: '0.9rem', filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.7))' }}>👑</span>}
      </div>
    </div>
  );
}

const statusStyle = { display: 'inline-block', padding: '3px 10px', borderRadius: 100, fontSize: '0.65rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', background: 'rgba(16,185,129,0.15)', color: 'var(--green)', border: '1px solid rgba(16,185,129,0.3)' };
const tabsStyle = { display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' };
const tabStyle = { padding: '8px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text2)', transition: 'all 0.2s', fontFamily: "'Rajdhani', sans-serif" };
const activeStyle = { background: 'rgba(124,58,237,0.15)', borderColor: 'var(--purple2)', color: 'var(--purple2)' };
