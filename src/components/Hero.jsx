import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const heroTl = gsap.timeline({ delay: 0.4 });
    heroTl
      .to('.hero-badge',        { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 0)
      .to('.hero-subtitle-top', { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 0.2)
      .to('.hero-title-small',  { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 0.4)
      .to('.hero-dies',         { opacity:1, y:0, duration:1,   ease:'power3.out' }, 0.6)
      .to('.hero-number',       { opacity:1, y:0, duration:1.2, ease:'power3.out' }, 0.8)
      .to('.hero-asrama-name',  { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 1.0)
      .to('.hero-ipb',          { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 1.2)
      .to('.hero-date-bar',     { opacity:1, y:0, duration:0.8, ease:'power3.out' }, 1.4);

    let floatAnim = gsap.to('.hero-roman', {
      y: -20,
      duration: 6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

    let parallaxAnim = gsap.to('.hero-roman', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });

    return () => {
      heroTl.kill();
      floatAnim.kill();
      if (parallaxAnim.scrollTrigger) parallaxAnim.scrollTrigger.kill();
      parallaxAnim.kill();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg-pattern"></div>
      <div className="hero-frame"></div>

      {/* Corner SVG ornaments */}
      <svg className="corner-ornament tl" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="#FFFFFF" strokeWidth="1.5"/>
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="#FFFFFF" strokeWidth="0.8"/>
        <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.8"/>
        <path d="M40 0 L40 12 M0 40 L12 40" stroke="#FFFFFF" strokeWidth="1"/>
      </svg>
      <svg className="corner-ornament tr" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="#FFFFFF" strokeWidth="1.5"/>
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="#FFFFFF" strokeWidth="0.8"/>
        <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.8"/>
        <path d="M40 0 L40 12 M0 40 L12 40" stroke="#FFFFFF" strokeWidth="1"/>
      </svg>
      <svg className="corner-ornament bl" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="#FFFFFF" strokeWidth="1.5"/>
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="#FFFFFF" strokeWidth="0.8"/>
        <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.8"/>
        <path d="M40 0 L40 12 M0 40 L12 40" stroke="#FFFFFF" strokeWidth="1"/>
      </svg>
      <svg className="corner-ornament br" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 L60 0 M0 0 L0 60" stroke="#FFFFFF" strokeWidth="1.5"/>
        <path d="M20 20 L55 20 M20 20 L20 55" stroke="#FFFFFF" strokeWidth="0.8"/>
        <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.8"/>
        <path d="M40 0 L40 12 M0 40 L12 40" stroke="#FFFFFF" strokeWidth="1"/>
      </svg>

      <div className="hero-roman">LXXIV</div>

      {/* Sundanese Ornaments */}
      <svg className="kujang-ornament left" viewBox="0 0 100 200">
        <path d="M50 0 C70 50 80 80 80 120 C80 160 50 200 30 200 C40 160 30 140 20 120 C10 80 20 50 50 0 Z" fill="currentColor"/>
      </svg>
      <svg className="kujang-ornament right" viewBox="0 0 100 200">
        <path d="M50 0 C70 50 80 80 80 120 C80 160 50 200 30 200 C40 160 30 140 20 120 C10 80 20 50 50 0 Z" fill="currentColor"/>
      </svg>

      <div className="aksara-bg">ᮞᮥᮊᮞᮛᮤ</div>

      <div className="hero-content">
        <p className="hero-badge">– Wilujeng Sumping –</p>
        <p className="hero-title-small">Dies Natalis ke</p>
        <div className="ornament-line"><div className="ornament-diamond"></div></div>
        <p className="hero-dies">Dies Natalis</p>
        <span className="hero-number">74</span>
        <p className="hero-asrama-name">ASRAMA SUKASARI</p>
        <p className="hero-ipb">Institut Pertanian Bogor</p>
        <div className="ornament-line"><div className="ornament-diamond"></div></div>
        <div className="hero-date-bar">
          <p>Minggu, 17 Mei 2026 &nbsp;·&nbsp; 10.00 WIB &nbsp;·&nbsp; Bogor</p>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
