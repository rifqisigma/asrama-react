import React from 'react';
import dn1 from '../assets/images/dn1.jpg';
import dn2 from '../assets/images/dn2.jpg';
import dn3 from '../assets/images/dn3.jpg';
import dn4 from '../assets/images/dn4.jpg';

export default function Gallery() {
  const dummyImages = [
    { url: dn1, label: "Pentas Seni" },
    { url: dn2, label: "Malam Keakraban" },
    { url: dn3, label: "Kegiatan Sosial" },
    { url: dn4, label: "Seminar Alumni" },
  ];

  return (
    <section id="gallery">
      <div className="gallery-header reveal">
        <span className="section-label">· Kenangan Dies Natalies 73 ·</span>
        <h2 className="section-heading"><em style={{ color: 'var(--purple)' }}>Gallery Sukasari</em></h2>
        <div className="ornament-line" style={{ marginTop: '16px' }}>
          <div className="ornament-diamond" style={{ background: 'var(--gold-light)' }}></div>
        </div>
      </div>

      <div className="gallery-grid">
        {dummyImages.map((img, index) => (
          <div className="gallery-item reveal" key={index}>
            <div className="gi-img-container">
              <img src={img.url} alt={img.label} className="gi-img-content" />
              <div className="gi-overlay">
                <p>{img.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
