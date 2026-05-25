import React, { useEffect, useState } from 'react';

// ─── সেট করুন আপনার deadline এখানে ───
// Format: 'YYYY-MM-DDTHH:MM:SS'  (24-hour, local time)
const REGISTRATION_DEADLINE = '2026-06-07T17:59:59';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const deadline = new Date(REGISTRATION_DEADLINE).getTime();

    function calc() {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft(null);
        return;
      }
      setExpired(false);
      setTimeLeft({
        days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs:  Math.floor((diff % (1000 * 60)) / 1000),
      });
    }

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ marginBottom: 32, animation: 'fadeDown 0.8s ease 0.35s both' }}>
      <div style={labelStyle}>⏳ Registration Closes In</div>

      {expired ? (
        <div style={expiredStyle}>🔒 Registration Closed</div>
      ) : timeLeft ? (
        <div style={rowStyle}>
          {[
            { val: timeLeft.days,  tag: 'Days'  },
            { val: timeLeft.hours, tag: 'Hours' },
            { val: timeLeft.mins,  tag: 'Mins'  },
            { val: timeLeft.secs,  tag: 'Secs'  },
          ].map(({ val, tag }) => (
            <div key={tag} style={unitStyle}>
              <div style={numStyle}>{pad(val)}</div>
              <div style={tagStyle}>{tag}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const labelStyle = {
  fontSize: '0.7rem',
  letterSpacing: 3,
  textTransform: 'uppercase',
  color: 'var(--text2)',
  marginBottom: 12,
};
const rowStyle = {
  display: 'flex',
  gap: 12,
  justifyContent: 'center',
  flexWrap: 'wrap',
};
const unitStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  background: 'rgba(230,57,70,0.08)',
  border: '1px solid rgba(230,57,70,0.25)',
  borderRadius: 10,
  padding: '12px 18px',
  minWidth: 70,
};
const numStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '1.8rem',
  fontWeight: 900,
  color: 'var(--accent)',
  lineHeight: 1,
  textShadow: '0 0 20px rgba(230,57,70,0.4)',
};
const tagStyle = {
  fontSize: '0.6rem',
  letterSpacing: 2,
  textTransform: 'uppercase',
  color: 'var(--text2)',
};
const expiredStyle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--accent)',
  background: 'rgba(230,57,70,0.12)',
  border: '1px solid rgba(230,57,70,0.3)',
  padding: '12px 28px',
  borderRadius: 10,
  letterSpacing: 2,
  textTransform: 'uppercase',
  display: 'inline-block',
};
