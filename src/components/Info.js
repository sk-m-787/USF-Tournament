import React, { useEffect, useRef } from 'react';

export default function Info() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="info" className="section animate-up" ref={ref}>
      <div className="section-header">
        <p className="section-tag">Tournament Details</p>
        <h2 className="section-title">EVENT INFO</h2>
        <div className="section-line" />
      </div>

      {/* PRIZE BANNER */}
      <div style={prizeBannerStyle}>
        <div style={prizeTotalStyle}>2500 BDT</div>
        <div style={prizeSubStyle}>Total Prize Pool</div>
        <div style={prizeBreakdownStyle}>
          <PrizeItem pos="🥇" name="1st Runner Up (Each Tier)" amt="850 BDT" color="var(--gold)" />
          <PrizeItem pos="🥈" name="2nd Runner Up (Each Tier)" amt="400 BDT" color="var(--silver)" />
        </div>
      </div>



      {/* INFO GRID */}
      <div style={infoGridStyle}>
        <InfoCard icon="📅" label="Starting Date" value="08 June 2026" valueColor="var(--green)"/>
        <InfoCard icon="🎯" label="Game Mode" value="Gunfight" valueColor="var(--green)"/>
        <InfoCard icon="💰" label="Entry Fee" value="FREE" valueColor="var(--green)" big />
        <InfoCard icon="🎮" label="Total Slots" value="16" big />
        <InfoCard icon="🖇️" label="Tier Categories" value="2" valueColor="var(--green)" big />
        <InfoCard icon="🏅" label="Rewards Via" value="Bkash" valueColor="var(--green)" big />
        {/* <InfoCard icon="⏱️" label="Time Limit" value="250 Seconds" /> */}
        <InfoCard icon="🔖" label="Sponsored By" value="USF" valueColor="var(--gold)" big />
        <InfoCard icon="👥" label="Eligibility" value="Clan Members Only" />




        {/* GRAND FINALE */}
        <div style={finaleCardStyle}>
          <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>🏆</div>
          <div style={finaleTitleStyle}>⚔️ GRAND FINALE</div>
          <div style={{ color: 'var(--text2)', fontSize: '0.82rem', letterSpacing: 1, marginBottom: 20 }}>
            📅 13 June 2026 &nbsp;·&nbsp; 10:00 PM &nbsp;·&nbsp; Best of 5 TDM
          </div>
          <div style={finaleTiersStyle}>
            <div style={finaleTierBlockStyle}>
              <div style={{ ...finaleTierLabelStyle, color: 'var(--gold)' }}>🥇 Tier 01 · Elite Final — 10:30 PM</div>
              <div style={finaleMatchupRowStyle}>
                <span>T1 · #1</span>
                <span style={finaleVsStyle}>VS</span>
                <span>T1 · #2</span>
              </div>
              <div style={finaleTimeStyle}>🎯 Top two players from Tier 01 standings</div>
            </div>
            <div style={finaleTierBlockStyle}>
              <div style={{ ...finaleTierLabelStyle, color: 'var(--silver)' }}>🥈 Tier 02 · Rising Final — 11:00 PM</div>
              <div style={finaleMatchupRowStyle}>
                <span>T2 · #1</span>
                <span style={finaleVsStyle}>VS</span>
                <span>T2 · #2</span>
              </div>
              <div style={finaleTimeStyle}>🎯 Top two players from Tier 02 standings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value, valueColor, big }) {
  return (
    <div style={infoCardStyle}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--accent), var(--purple))' }} />
      <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: big ? '1.3rem' : '1rem', fontWeight: 700, color: valueColor || 'var(--accent)', wordBreak: 'break-word' }}>{value}</div>
    </div>
  );
}

function PrizeItem({ pos, name, amt, color }) {
  return (
    <div style={prizeItemStyle}>
      <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{pos}</div>
      <div style={{ fontSize: '0.72rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 6 }}>{name}</div>
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.1rem', fontWeight: 700, color }}>{amt}</div>
    </div>
  );
}

const prizeBannerStyle = {
  background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(124,58,237,0.15))',
  border: '1px solid rgba(230,57,70,0.3)',
  borderRadius: 16,
  padding: 32,
  textAlign: 'center',
  marginBottom: 32,
  position: 'relative',
  overflow: 'hidden',
};
const prizeTotalStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  color: 'var(--gold)',
  letterSpacing: 4,
  textShadow: '0 0 40px rgba(255,215,0,0.3)',
};
const prizeSubStyle = { color: 'var(--text2)', fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase' };
const prizeBreakdownStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 };
const prizeItemStyle = { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 20, textAlign: 'center' };

const infoGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 };
const infoCardStyle = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 14,
  padding: 24,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.25s, box-shadow 0.25s',
  cursor: 'default',
};
const finaleCardStyle = {
  gridColumn: '1 / -1',
  background: 'linear-gradient(135deg, rgba(230,57,70,0.12), rgba(124,58,237,0.12))',
  border: '1px solid rgba(230,57,70,0.35)',
  borderRadius: 14,
  padding: 24,
  position: 'relative',
  overflow: 'hidden',
};
const finaleTitleStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: '1.6rem',
  letterSpacing: 5,
  color: 'var(--gold)',
  marginBottom: 16,
  textShadow: '0 0 30px rgba(255,215,0,0.3)',
};
const finaleTiersStyle = { display: 'flex', gap: 16, flexWrap: 'wrap' };
const finaleTierBlockStyle = { flex: 1, minWidth: 200, background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: 16 };
const finaleTierLabelStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 };
const finaleMatchupRowStyle = { display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' };
const finaleVsStyle = { fontFamily: "'Orbitron', sans-serif", fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(230,57,70,0.12)', padding: '3px 8px', borderRadius: 4, border: '1px solid rgba(230,57,70,0.25)' };
const finaleTimeStyle = { color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700, marginTop: 8 };
