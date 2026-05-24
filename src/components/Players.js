import React, { useState, useEffect, useRef } from 'react';

const TIER1 = [
  { init: 'MR', rank: '#1 · T1', name: 'MR_A404' },
  { init: 'GO', rank: '#2 · T1', name: 'Gorilla' },
  { init: 'AR', rank: '#3 · T1', name: 'Aragorn' },
  { init: 'AK', rank: '#4 · T1', name: 'Akaza' },
  { init: 'LA', rank: '#5 · T1', name: 'LAG' },
  { init: 'HA', rank: '#6 · T1', name: 'Habibi' },
  { init: 'DD', rank: '#7 · T1', name: 'Dr.Death' },
  { init: 'BL', rank: '#8 · T1', name: 'Blitzbot' },
  { init: 'IG', rank: '#9 · T1', name: 'Igris' },
];

const TIER2 = [
  { init: 'DR', rank: '#1 · T2', name: 'Draken' },
  { init: 'NE', rank: '#2 · T2', name: 'Neo' },
  { init: 'CA', rank: '#3 · T2', name: 'Cake' },
  { init: 'LO', rank: '#4 · T2', name: 'LOKI' },
  { init: 'RU', rank: '#5 · T2', name: 'RUPSHA' },
  { init: 'BL', rank: '#6 · T2', name: 'BLE' },
  { init: 'PR', rank: '#7 · T2', name: 'PRONEX' },
  { init: 'IK', rank: '#8 · T2', name: 'Ikram' },
  { init: 'MD', rank: '#9 · T2', name: 'MD' },
  { init: '36', rank: '#10 · T2', name: '360' },
  { init: 'ZA', rank: '#11 · T2', name: 'Zanza' },
  { init: 'AB', rank: '#12 · T2', name: 'ABID' },
  { init: 'UD', rank: '#13 · T2', name: 'Udoy' },
  { init: 'VO', rank: '#14 · T2', name: 'Vortex' },
];

export default function Players() {
  const [active, setActive] = useState('t1');
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="players" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">Registered Players</p>
        <h2 className="section-title">CATEGORY LIST</h2>
        <div className="section-line" />
      </div>

      <div style={tabsStyle}>
        <button
          style={{ ...tabStyle, ...(active === 't1' ? t1ActiveStyle : {}) }}
          onClick={() => setActive('t1')}>
          🥇 Tier 01 — Elite
        </button>
        <button
          style={{ ...tabStyle, ...(active === 't2' ? t2ActiveStyle : {}) }}
          onClick={() => setActive('t2')}>
          🥈 Tier 02 — Rising
        </button>
      </div>

      {active === 't1' && (
        <div>
          <div style={tierHeaderStyle}>
            <span style={t1BadgeStyle}>Tier 01 · Elite</span>
            <span style={descStyle}>Top performers — strongest competitive players</span>
          </div>
          <div style={gridStyle}>
            {TIER1.map((p, i) => <PlayerCard key={i} {...p} tier="t1" />)}
          </div>
        </div>
      )}

      {active === 't2' && (
        <div>
          <div style={tierHeaderStyle}>
            <span style={t2BadgeStyle}>Tier 02 · Rising</span>
            <span style={descStyle}>Developing competitors with potential to shine</span>
          </div>
          <div style={gridStyle}>
            {TIER2.map((p, i) => <PlayerCard key={i} {...p} tier="t2" />)}
          </div>
        </div>
      )}
    </div>
  );
}

function PlayerCard({ init, rank, name, tier }) {
  const [hov, setHov] = React.useState(false);
  const isT1 = tier === 't1';
  const avatarBg = isT1 ? 'rgba(255,215,0,0.15)' : 'rgba(192,192,192,0.15)';
  const avatarBorder = isT1 ? '1px solid rgba(255,215,0,0.3)' : '1px solid rgba(192,192,192,0.3)';
  const avatarColor = isT1 ? 'var(--gold)' : 'var(--silver)';
  const hoverBorder = isT1 ? 'rgba(255,215,0,0.4)' : 'rgba(192,192,192,0.4)';

  return (
    <div
      style={{ ...cardStyle, borderColor: hov ? hoverBorder : 'var(--border)', transform: hov ? 'translateY(-2px)' : 'none', boxShadow: hov ? '0 8px 24px rgba(0,0,0,0.2)' : 'none' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, background: avatarBg, border: avatarBorder, color: avatarColor }}>
        {init}
      </div>
      <div>
        <div style={{ fontSize: '0.65rem', letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text2)' }}>{rank}</div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{name}</div>
      </div>
    </div>
  );
}

const tabsStyle = { display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' };
const tabStyle = { padding: '10px 28px', borderRadius: 8, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '0.9rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', border: '2px solid var(--border)', background: 'transparent', color: 'var(--text2)', transition: 'all 0.2s' };
const t1ActiveStyle = { background: 'rgba(255,215,0,0.15)', borderColor: 'var(--gold)', color: 'var(--gold)' };
const t2ActiveStyle = { background: 'rgba(192,192,192,0.15)', borderColor: 'var(--silver)', color: 'var(--silver)' };
const tierHeaderStyle = { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' };
const t1BadgeStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem', fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: 2, textTransform: 'uppercase', background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.4)', color: 'var(--gold)' };
const t2BadgeStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.8rem', fontWeight: 700, padding: '6px 16px', borderRadius: 100, letterSpacing: 2, textTransform: 'uppercase', background: 'rgba(192,192,192,0.15)', border: '1px solid rgba(192,192,192,0.4)', color: 'var(--silver)' };
const descStyle = { color: 'var(--text2)', fontSize: '0.88rem' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 };
const cardStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 16px', display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s', cursor: 'default' };
