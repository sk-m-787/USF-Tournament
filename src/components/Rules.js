import React, { useEffect, useRef } from 'react';

const RULES = [
  { num: '01', title: 'Eligibility', text: 'Only USF Clan Members can participate. Non-clan members will be disqualified immediately. Register your IGN in the #registration channel on Discord before the deadline.' },
  { num: '02', title: 'Match Format', text: 'All matches are 1v1 (TDM — Shipment). First player to reach 20 kills wins or whoever has more kills when the 250 second timer runs out.' },
  { num: '03', title: 'Gun Selection', text: 'Each match uses a randomly selected gun from the allowed list. Each player may remove (ban) one gun per match before the random pick happens from the remaining guns.' },
  { num: '04', title: 'Category System', text: 'Players are divided into Tier 01 (Elite/Strong players) and Tier 02 (Mid-tier players). Matches are played within tiers. Prizes are awarded per tier separately.' },
  { num: '05', title: 'Final Format', text: 'The Final is a Best of 5 series with pre-determined guns for each match: MK2 → MSMC → BY15 → FFAR 1 → Koshka. Top 2 from each tier advance.' },
  { num: '06', title: 'Fair Play', text: 'No hacks, emulators manipulation, or unsportsmanlike behavior. Match screenshots must be submitted as proof. Admin decision is final in all disputes.' },
];

const GUNS = ['Koshka','FFAR 1','BY15','GKS','EM2','MK2','MW11','Swordfish','MSMC','ZRG 20mm'];
const MAPS = ['Shipment','Rust','Shoot House','Nuketown','Terminal','Scrapyard'];
const FINAL_GUNS = [
  { m: 'M1', gun: 'MK2' },
  { m: 'M2', gun: 'MSMC' },
  { m: 'M3', gun: 'BY15' },
  { m: 'M4', gun: 'FFAR 1' },
  { m: 'M5', gun: 'Koshka' },
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
    <div id="rules" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">How To Play</p>
        <h2 className="section-title">RULES & FORMAT</h2>
        <div className="section-line" />
      </div>

      <div style={rulesGridStyle}>
        {RULES.map(r => <RuleCard key={r.num} {...r} />)}
      </div>

      {/* GUNS */}
      <div style={sectionBoxStyle}>
        <div style={boxTitleStyle}>🔫 Allowed Guns (Season 2.0)</div>
        <div style={chipsGridStyle}>
          {GUNS.map(g => <GunChip key={g} label={g} />)}
        </div>
        <p style={noteStyle}>
          📌 Each player can <strong style={{ color: 'var(--accent)' }}>ban one gun</strong> per match. The match gun is then <strong style={{ color: 'var(--cyan)' }}>randomly selected</strong> from the remaining 8 guns. Final matches use pre-set guns.
        </p>
      </div>

      {/* MAPS */}
      <div style={{ ...sectionBoxStyle, marginTop: 16 }}>
        <div style={{ ...boxTitleStyle, color: 'var(--green)' }}>🗺️ Allowed Maps (Season 2.0)</div>
        <div style={chipsGridStyle}>
          {MAPS.map(m => <MapChip key={m} label={m} />)}
        </div>
        <p style={noteStyle}>
          📌 <strong style={{ color: 'var(--green)' }}>Shipment</strong> is the official map for all matches. Other maps may be used only if both players mutually agree before the match starts.
        </p>
      </div>

      {/* FINAL GUNS ORDER */}
      <div style={{ ...sectionBoxStyle, marginTop: 16 }}>
        <div style={boxTitleStyle}>⭐ Final Series Gun Order (Best of 5)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          {FINAL_GUNS.map(({ m, gun }) => (
            <div key={m} style={finalMatchStyle}>
              <span style={matchNumStyle}>{m}</span>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{gun}</span>
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

const rulesGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 };
const ruleCardStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 28, transition: 'all 0.25s', cursor: 'default' };
const sectionBoxStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 28, marginTop: 28 };
const boxTitleStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 };
const chipsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 10 };
const chipStyle = { background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: '0.88rem', fontWeight: 600, textAlign: 'center', letterSpacing: 1, transition: 'all 0.2s', cursor: 'default' };
const noteStyle = { color: 'var(--text2)', fontSize: '0.85rem', marginTop: 16, lineHeight: 1.6 };
const finalMatchStyle = { display: 'flex', alignItems: 'center', gap: 16, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 20px' };
const matchNumStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', minWidth: 30 };
