import React, { useEffect, useRef } from 'react';

const H = ({ children, color }) => (
  <strong style={{ color: color || 'var(--accent)', fontWeight: 700 }}>{children}</strong>
);

const RULES = [
  {
    num: '01', title: 'Eligibility',
    text: <span>Only <H color="var(--silver)">USF Clan Members</H> can participate. Non-clan members will be disqualified immediately. Register your <H color="var(--cyan)">IGN</H> in the <H color="var(--silver)">#registration</H> channel on Discord before the deadline.</span>,
  },
  {
  num: '02', title: 'Match Format',
  text: <span>All matches are <H color="var(--silver)">2 vs 2 (Mode — Gunfight)</H>. Each match consists of <H color="var(--cyan)">6 rounds</H> and each round is <H color="var(--cyan)">1 minute</H> long.<br />
    <H color="var(--gold)">Points System:<br /></H> Win → <H color="var(--cyan)">+3 pts</H> · Loss → <H color="var(--accent)">+0 pts</H> · Draw → <H color="var(--silver)">+1 pts</H><br />
    <H color="var(--silver)">Round Difference (RD):</H> Winners receive the <H color="var(--cyan)">positive value</H> of the round difference and losers receive the <H color="var(--accent)">negative value</H>. For example, a <H color="var(--silver)">6 – 3</H> result gives the winner <H color="var(--cyan)">+3</H> and the loser <H color="var(--accent)">-3</H> in round difference.
  </span>,
 },
  {
    num: '03', title: 'Gun Selection',
    text: <span>Each match uses a <H color="var(--cyan)">randomly selected gun</H> from the allowed list. Each player may <H>ban one gun</H> per match before the random pick happens from the remaining guns.</span>,
  },
  {
    num: '04', title: 'Category System',
    text: <span>Players are divided into <H color="var(--silver)">Tier 01 (Elite)</H> and <H color="var(--silver)">Tier 02 (Mid-tier)</H>. Matches are played within tiers. Prizes are awarded per tier <H color="var(--cyan)">separately</H>.</span>,
  },
  {
    num: '05', title: 'Final Format',
    text: <span>The Final is played in a <H color="var(--gold)">Best of 5</H> TDM series. The gun and map for each match are <H color="var(--silver)">pre-determined</H> - see the <H color="var(--cyan)">Final Series</H> section below for full details.</span>,
  },
  {
    num: '06', title: 'Fair Play',
    text: <span><H>No hacks</H>, emulators manipulation, or unsportsmanlike behavior. Additionally, no player may stand still at any location for more than <H>5 seconds</H> — they must either <H>move or fight</H> at all times. <H>Admin decision is final</H> in all disputes.</span>,
  },
  {
    num: '07', title: 'Match Scheduling',
    text: <span>All matches must be played on schedule. No-shows without prior notice result in a <H>walkover loss.</H></span>,
  },
  {
    num: '08', title: 'Tier Assignment',
    text: <span>The Management Team will assign every player to their respective Tier. Players can confirm their registration by checking whether their name appears in the <H color="var(--silver)">Players Section.</H></span>,
  },
  {
    num: '09', title: 'Bracket Draw',
    text: <span>Each player's Allies and Rivals will be <H color="var(--silver)">randomly</H> selected from the pool of registered players.

</span>,
  },
];

const GUNS = ['Koshka','FFAR 1','BY15','GKS','EM2','MK2','MW11','Swordfish','MSMC','ZRG 20mm'];
const MAPS = ['Pine','Reclaim','Saloon','King','Cage','Stack'];
const FINAL_GUNS = [
  { m: 'M1', gun: 'MK2',    map: 'Killhouse' },
  { m: 'M2', gun: 'MSMC',   map: 'Reclaim'   },
  { m: 'M3', gun: 'BY15',   map: 'Dome'      },
  { m: 'M4', gun: 'FFAR 1', map: 'Cage'      },
  { m: 'M5', gun: 'Koshka', map: 'Shipment'  },
];

export default function Rules() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="rules" className="section animate-up" ref={ref} style={{ padding: 'clamp(40px,5vw,80px) clamp(16px,4vw,40px)' }}>
      <div className="section-header">
        <p className="section-tag">How To Play</p>
        <h2 className="section-title">RULES & FORMAT</h2>
        <div className="section-line" />
      </div>

      <div style={rulesGridStyle}>
        {RULES.map(r => <RuleCard key={r.num} {...r} />)}
      </div>

      <div style={sectionBoxStyle}>
        <div style={boxTitleStyle}>🔫 Allowed Guns</div>
        <div style={chipsGridStyle}>
          {GUNS.map(g => <GunChip key={g} label={g} />)}
        </div>
        <p style={noteStyle}>
          📌 Each player can <H>ban one gun</H> per match. The match gun is then <H color="var(--cyan)">randomly selected</H> from the remaining 8 guns. Final matches use <H color="var(--gold)">pre-set guns</H>.
        </p>
      </div>

      <div style={{ ...sectionBoxStyle, marginTop: 16 }}>
        <div style={{ ...boxTitleStyle, color: 'var(--green)' }}>🗺️ Allowed Maps</div>
        <div style={chipsGridStyle}>
          {MAPS.map(m => <MapChip key={m} label={m} />)}
        </div>
      </div>

      <div style={{ ...sectionBoxStyle, marginTop: 16 }}>
        <div style={boxTitleStyle}>⭐ Final Series <H color="var(--gold)">(Best of 5)</H></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          {FINAL_GUNS.map(({ m, gun, map }) => (
            <div key={m} style={finalMatchStyle}>
              <span style={matchNumStyle}>{m}</span>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--cyan)' }}>{gun}</span>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text2)' }}>{map}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RuleCard({ num, title, text }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      style={{ ...ruleCardStyle, borderColor: hovered ? 'rgba(124,58,237,0.4)' : 'var(--border)', boxShadow: hovered ? '0 10px 40px var(--glow2)' : 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: 'rgba(230,57,70,0.2)', lineHeight: 1, marginBottom: 8 }}>{num}</div>
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: 'var(--purple2)', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7 }}>{text}</div>
    </div>
  );
}

function GunChip({ label }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div style={{ ...chipStyle, borderColor: hov ? 'var(--cyan)' : 'var(--border)', color: hov ? 'var(--cyan)' : 'var(--text)' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{label}</div>
  );
}

function MapChip({ label }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div style={{ ...chipStyle, borderColor: hov ? 'var(--green)' : 'var(--border)', color: hov ? 'var(--green)' : 'var(--text)' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{label}</div>
  );
}

const rulesGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 };
const ruleCardStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 'clamp(18px,3vw,28px)', transition: 'all 0.25s', cursor: 'default' };
const sectionBoxStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 'clamp(18px,3vw,28px)', marginTop: 28 };
const boxTitleStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 };
const chipsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 10 };
const chipStyle = { background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600, textAlign: 'center', letterSpacing: 1, transition: 'all 0.2s', cursor: 'default' };
const noteStyle = { color: 'var(--text2)', fontSize: '0.85rem', marginTop: 16, lineHeight: 1.6 };
const finalMatchStyle = { display: 'flex', alignItems: 'center', gap: 16, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 20px', flexWrap: 'wrap' };
const matchNumStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', minWidth: 30 };