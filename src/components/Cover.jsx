import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cover({ onOpen }) {
  const coverRef = useRef(null);
  const contentRef = useRef(null);

  const handleOpen = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpen) onOpen();
      }
    });

    tl.to(contentRef.current, { opacity: 0, y: -20, duration: 0.8, ease: 'power2.in' })
      .to(coverRef.current, { yPercent: -100, duration: 1.2, ease: 'expo.inOut' });
  };

  return (
    <div className="cover-overlay" ref={coverRef}>
      <div className="cover-bg-pattern"></div>
      <div className="cover-frame"></div>

      {/* Corner SVG ornaments */}
      <svg className="corner-ornament tl" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="white" strokeWidth="1.5" />
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="white" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="3" fill="white" opacity="0.6" />
      </svg>
      <svg className="corner-ornament tr" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="white" strokeWidth="1.5" />
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="white" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="3" fill="white" opacity="0.6" />
      </svg>
      <svg className="corner-ornament bl" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="white" strokeWidth="1.5" />
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="white" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="3" fill="white" opacity="0.6" />
      </svg>
      <svg className="corner-ornament br" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="white" strokeWidth="1.5" />
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="white" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="3" fill="white" opacity="0.6" />
      </svg>

      <div className="cover-content" ref={contentRef}>
        <div className="cover-header">
          <p className="cover-label">Wilujeng Sumping</p>
        </div>

        <h1 className="cover-title">
          DIES NATALIS <br />
          <span className="cover-title-number">74</span> <br />
          <span className="cover-asrama">ASRAMA SUKASARI</span>
        </h1>

        <div className="cover-divider">
          <div className="div-line"></div>
          <div className="div-diamond"></div>
          <div className="div-line"></div>
        </div>

        <p className="cover-invitation">
          Kami Mengundang Anda untuk Merayakan Kebersamaan
        </p>

        <button className="cover-btn" onClick={handleOpen}>
          <span>BUKA UNDANGAN</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
