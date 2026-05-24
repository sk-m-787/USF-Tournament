import React, { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position: absolute;
        border-radius: 50%;
        animation: floatUp linear infinite;
        opacity: 0;
        left: ${Math.random() * 100}vw;
        animation-duration: ${8 + Math.random() * 12}s;
        animation-delay: ${Math.random() * 10}s;
        width: ${1 + Math.random() * 3}px;
        height: ${1 + Math.random() * 3}px;
        background: ${Math.random() > 0.5 ? 'var(--accent)' : 'var(--purple2)'};
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
}
