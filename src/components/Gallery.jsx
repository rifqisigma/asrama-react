import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-header reveal">
        <span className="section-label">· Kenangan Bersama ·</span>
        <h2 className="section-heading"><em style={{ color: 'var(--orange-light)' }}> Galery Sukasari</em></h2>
        <div className="ornament-line" style={{ marginTop: '16px' }}>
          <div className="ornament-diamond" style={{ background: 'var(--gold-light)' }}></div>
        </div>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item gi-1 reveal">
          <div className="gi-img" data-year="Kenangan">
            <svg className="gi-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Kebersamaan Alumni</p></div>
        </div>
        <div className="gallery-item gi-2 reveal">
          <div className="gi-img" data-year="Tradisi">
            <svg className="gi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Tradisi & Budaya</p></div>
        </div>
        <div className="gallery-item gi-3 reveal">
          <div className="gi-img" data-year="Prestasi">
            <svg className="gi-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Prestasi Gemilang</p></div>
        </div>
        <div className="gallery-item gi-4 reveal">
          <div className="gi-img" data-year="Persahabatan">
            <svg className="gi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Ikatan Persahabatan</p></div>
        </div>
        <div className="gallery-item gi-5 reveal">
          <div className="gi-img" data-year="Seni">
            <svg className="gi-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Pentas Seni</p></div>
        </div>
        <div className="gallery-item gi-6 reveal">
          <div className="gi-img" data-year="Asrama">
            <svg className="gi-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Wajah Asrama Sukasari</p></div>
        </div>
        <div className="gallery-item gi-7 reveal">
          <div className="gi-img" data-year="Wisuda">
            <svg className="gi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Hari Wisuda</p></div>
        </div>
        <div className="gallery-item gi-8 reveal">
          <div className="gi-img" data-year="Dies">
            <svg className="gi-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="3" y="3" width="18" height="18" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div className="gi-overlay"><p>Dies Natalis Masa Lalu</p></div>
        </div>
      </div>
    </section>
  );
}
