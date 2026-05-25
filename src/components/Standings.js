import React, { useState, useEffect, useRef } from 'react';

const T1_ROWS = [
  { rank: 1, player: 'Player A',  w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 2, player: 'Player B',   w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 3, player: 'Player C', w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 4, player: 'Player D',    w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 5, player: 'Player E',    w: 0, d: 0, l: 0, rd: 0, pts: '00' },
];

const T2_ROWS = [
  { rank: 1, player: 'Player O',    w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 2, player: 'Player P',  w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 3, player: 'Player Q',     w: 0, d: 0, l: 0, rd: 0, pts: '00' },
  { rank: 4, player: 'Player R',    w: 0, d: 0, l: 0, rd: 0, pts: '00' },
];

const rankColor = (r) => r === 1 ? 'var(--gold)' : r === 2 ? 'var(--silver)' : r === 3 ? 'var(--bronze)' : 'var(--text)';

export default function Standings() {
  const [active, setActive] = useState('s1');
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="standings" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">League Table</p>
        <h2 className="section-title">STANDINGS</h2>
        <div className="section-line" />
      </div>

      <div style={tabsStyle}>
        <button style={{ ...tabStyle, ...(active === 's1' ? activeStyle : {}) }} onClick={() => setActive('s1')}>Tier 01 — Elite</button>
        <button style={{ ...tabStyle, ...(active === 's2' ? activeStyle : {}) }} onClick={() => setActive('s2')}>Tier 02 — Rising</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            {['#','Player','W','D','L','RD','Pts'].map(h => (
              <th key={h} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(active === 's1' ? T1_ROWS : T2_ROWS).map(row => (
            <tr key={row.rank}
              onMouseEnter={e => { Array.from(e.currentTarget.cells).forEach(c => c.style.background = 'rgba(255,255,255,0.03)'); }}
              onMouseLeave={e => { Array.from(e.currentTarget.cells).forEach(c => c.style.background = ''); }}>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 700 }}>{row.rank}</span>
              </td>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>{row.player}</td>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>{row.w}</td>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>{row.d}</td>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>{row.l}</td>
              <td style={{ ...tdStyle, color: rankColor(row.rank) }}>{row.rd}</td>
              <td style={tdStyle}>
                <span style={ptsBadgeStyle}>{row.pts}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tabsStyle = { display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' };
const tabStyle = { padding: '8px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text2)', transition: 'all 0.2s', fontFamily: "'Rajdhani', sans-serif" };
const activeStyle = { background: 'rgba(124,58,237,0.15)', borderColor: 'var(--purple2)', color: 'var(--purple2)' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', background: 'var(--card)', borderRadius: 14, overflow: 'hidden' };
const thStyle = { background: 'var(--bg3)', padding: '14px 16px', fontSize: '0.72rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text2)', fontWeight: 700, textAlign: 'left' };
const tdStyle = { padding: '14px 16px', borderBottom: '1px solid var(--border)', fontSize: '0.95rem', verticalAlign: 'middle' };
const ptsBadgeStyle = { display: 'inline-block', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: 'var(--purple2)', padding: '3px 10px', borderRadius: 100, fontSize: '0.82rem', fontWeight: 700 };
