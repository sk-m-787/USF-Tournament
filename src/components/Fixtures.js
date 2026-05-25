import React, { useState, useEffect, useRef } from 'react';

const T1_DATES = [
  {
    date: '08 June 2026',
    matches: [
      {
        matchNo: 'Match 01', status: 'Completed',
        left:  [{ init: '1', color: 'purple', name: 'Player A' }, { init: '2', color: 'purple', name: 'Player B' }],
        right: [{ init: '3', color: 'red',    name: 'Player C' }, { init: '5', color: 'red',    name: 'Player E' }],
        winner: 'right',
      },
      {
        matchNo: 'Match 02', status: 'Completed',
        left:  [{ init: '4',  color: 't1', name: 'Player B' }, { init: 'NE', color: 't1', name: 'Player E' }],
        right: [{ init: 'GO', color: 'red', name: 'Player A' }, { init: 'DR', color: 'red', name: 'PLayer C' }],
        winner: 'left',
      },
    ],
  },
    {
    date: '09 June 2026',
    matches: [
      {
        matchNo: 'Match 01', status: 'pending',
        left:  [{ init: '1', color: 'purple', name: 'Player A' }, { init: '2', color: 'purple', name: 'Player B' }],
        right: [{ init: '3', color: 'red',    name: 'Player C' }, { init: '5', color: 'red',    name: 'Player E' }],
        winner: '',
      },
      {
        matchNo: 'Match 02', status: 'pending',
        left:  [{ init: '4',  color: 't1', name: 'Player A' }, { init: 'NE', color: 't1', name: 'Player E' }],
        right: [{ init: 'GO', color: 'red', name: 'Player B' }, { init: 'DR', color: 'red', name: 'Player D' }],
        winner: '',
      },
    ],
  },
  {
    date: '13 June 2026',
    matches: [
      {
        matchNo: 'Final 1 · Tier 01', status: 'pending', isGold: true,
        left:  [{ init: 'BL', color: 't1', name: 'T1 · #1' }],
        right: [{ init: 'NE', color: 'red', name: 'T1 · #2'   }],
        winner: '',
      },
    ],
  },
];

const T2_DATES = [
  {
    date: '08 June 2026',
    matches: [
      {
        matchNo: 'Match 01', status: 'Completed',
        left:  [{ init: 'HA', color: 't2', name: 'Player O'  }, { init: 'VO', color: 't2', name: 'Player P' }],
        right: [{ init: 'LO', color: 'red', name: 'Player R'  }, { init: 'MD', color: 'red', name: 'Player Q'     }],
        winner: 'left',
      },
      {
        matchNo: 'Match 02', status: 'Completed',
        left:  [{ init: 'ZA', color: 't2', name: 'Player R'  }, { init: 'PR', color: 't2', name: 'Player O' }],
        right: [{ init: 'MI', color: 'red', name: 'Player P' }, { init: 'LO', color: 'red', name: 'Player Q'  }],
        winner: 'left',
      },
    ],
  },
    {
    date: '09 June 2026',
    matches: [
      {
        matchNo: 'Match 01', status: 'Completed',
        left:  [{ init: 'HA', color: 't2', name: 'Player O'  }, { init: 'VO', color: 't2', name: 'Player R' }],
        right: [{ init: 'LO', color: 'red', name: 'Player Q'  }, { init: 'MD', color: 'red', name: 'Player S'     }],
        winner: 'left',
      },
    ],
  },
  {
    date: '13 June 2026',
    matches: [
      {
        matchNo: 'Final 2 · Tier 02', status: 'pending', isGold: true,
        left:  [{ init: 'HA', color: 't2', name: 'T2 · #1' }],
        right: [{ init: 'ZA', color: 'red', name: 'T2 · #2' }],
        winner: '',
      },
    ],
  },
];

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

  const dates = active === 'f1' ? T1_DATES : T2_DATES;

  return (
    <div id="fixtures" className="section animate-up" ref={ref} style={{ padding: 'clamp(40px,5vw,80px) clamp(16px,4vw,40px)' }}>
      <div className="section-header">
        <p className="section-tag">Match Results</p>
        <h2 className="section-title">FIXTURE</h2>
        <div className="section-line" />
      </div>

      <div style={tabsStyle}>
        <button style={{ ...tabStyle, ...(active === 'f1' ? activeTabStyle : {}) }} onClick={() => setActive('f1')}>Tier 01 — Elite</button>
        <button style={{ ...tabStyle, ...(active === 'f2' ? activeTabStyle : {}) }} onClick={() => setActive('f2')}>Tier 02 — Rising</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {dates.map((d, di) => (
          <div key={di}>
            <div style={dateLabelStyle}>
              <span style={dateTextStyle}>📅 {d.date}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {d.matches.map((m, mi) => (
                <MatchCard key={mi} {...m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ matchNo, status, left, right, winner, isGold, isSilver }) {
  const accent      = isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : 'var(--purple2)';
  const headerBg    = isGold ? 'rgba(255,215,0,0.06)' : isSilver ? 'rgba(192,192,192,0.05)' : 'var(--bg3)';
  const borderColor = isGold ? 'rgba(255,215,0,0.2)' : isSilver ? 'rgba(192,192,192,0.25)' : 'var(--border)';
  const leftWon  = winner === 'left';
  const rightWon = winner === 'right';

  return (
    <div style={{ background: 'var(--card)', border: `1px solid ${borderColor}`, borderRadius: 12, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: headerBg, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: accent }}>{matchNo}</span>
        <span style={statusBadgeStyle(status)}>{status}</span>
      </div>
      {/* Body */}
      <div style={{ padding: 'clamp(12px,2vw,16px)', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 'clamp(8px,2vw,16px)' }}>
        {/* Left team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {left.map((p, i) => (
            <PlayerRow key={i} name={p.name} isWinner={leftWon} nameColor={isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : undefined} />
          ))}
        </div>
        {/* Center VS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)', color: 'var(--accent)', fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', fontWeight: 700, width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>VS</div>
          {status === 'Completed' && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', fontWeight: 900, color: leftWon ? 'var(--green)' : 'var(--text2)' }}>W</span>
              <span style={{ color: 'var(--text2)', fontSize: '0.8rem' }}>—</span>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', fontWeight: 900, color: rightWon ? 'var(--green)' : 'var(--text2)' }}>W</span>
            </div>
          )}
        </div>
        {/* Right team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          {right.map((p, i) => (
            <PlayerRow key={i} name={p.name} isWinner={rightWon} right nameColor={isGold ? 'var(--gold)' : isSilver ? 'var(--silver)' : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerRow({ name, isWinner, right: isRight, nameColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexDirection: isRight ? 'row-reverse' : 'row' }}>
      <div style={{ fontWeight: 700, fontSize: 'clamp(0.8rem, 2vw, 0.92rem)', color: nameColor || 'var(--text)', display: 'flex', alignItems: 'center', gap: 6, flexDirection: isRight ? 'row-reverse' : 'row', wordBreak: 'break-all' }}>
        {name}
        {isWinner && <span style={{ fontSize: '0.9rem', filter: 'drop-shadow(0 0 4px rgba(255,215,0,0.7))' }}>👑</span>}
      </div>
    </div>
  );
}

const statusBadgeStyle = (status) => ({
  display: 'inline-block',
  padding: '3px 10px',
  borderRadius: 100,
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: 1,
  textTransform: 'uppercase',
  background: status === 'Completed' ? 'rgba(16,185,129,0.15)' : 'rgba(230,57,70,0.15)',
  color: status === 'Completed' ? 'var(--green)' : 'var(--accent)',
  border: status === 'Completed' ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(230,57,70,0.3)',
});

const dateLabelStyle = {
  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12,
};
const dateTextStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '0.8rem',
  fontWeight: 700,
  color: 'var(--gold)',
  letterSpacing: 2,
  background: 'rgba(255,215,0,0.08)',
  border: '1px solid rgba(255,215,0,0.2)',
  padding: '6px 16px',
  borderRadius: 8,
};
const tabsStyle = { display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' };
const tabStyle = { padding: '8px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text2)', transition: 'all 0.2s', fontFamily: "'Rajdhani', sans-serif" };
const activeTabStyle = { background: 'rgba(124,58,237,0.15)', borderColor: 'var(--purple2)', color: 'var(--purple2)' };