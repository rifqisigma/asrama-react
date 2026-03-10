import React from 'react';

export default function Kegiatan() {
  return (
    <section id="kegiatan">
      <div className="kegiatan-container">
        <div className="kegiatan-text reveal-left">
          <span className="section-label">· Rangkaian Acara ·</span>
          <h2 className="section-heading">Agenda<br/><em>Perayaan</em></h2>
          <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '20px 0' }}>
            <div className="ornament-diamond"></div>
            <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></div>
          </div>
          <p className="section-body">
            Perayaan Dies Natalis ke-74 Asrama Sukasari hadir dengan serangkaian kegiatan yang mempertemukan kenangan indah masa lalu dengan semangat generasi masa kini.
          </p>
          <ul className="kegiatan-list">
            <li className="reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="kl-time">08.00</span>
              <div className="kl-content">
                <h4>Upacara Pembukaan</h4>
                <p>Prosesi resmi dan sambutan pimpinan asrama</p>
              </div>
            </li>
            <li className="reveal" style={{ transitionDelay: '0.4s' }}>
              <span className="kl-time">09.30</span>
              <div className="kl-content">
                <h4>Doa & Syukuran</h4>
                <p>Momen sakral bersama seluruh civitas Sukasari</p>
              </div>
            </li>
            <li className="reveal" style={{ transitionDelay: '0.6s' }}>
              <span className="kl-time">11.00</span>
              <div className="kl-content">
                <h4>Seminar & Talkshow</h4>
                <p>Berbagi inspirasi bersama alumni terbaik</p>
              </div>
            </li>
            <li className="reveal" style={{ transitionDelay: '0.8s' }}>
              <span className="kl-time">13.30</span>
              <div className="kl-content">
                <h4>Pameran & Pentas Seni</h4>
                <p>Ekspresi kreativitas dan budaya penghuni asrama</p>
              </div>
            </li>
            <li className="reveal" style={{ transitionDelay: '1.0s' }}>
              <span className="kl-time">19.00</span>
              <div className="kl-content">
                <h4>Malam Puncak & Gala Dinner</h4>
                <p>Perayaan agung menutup rangkaian Dies Natalis</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="kegiatan-image-wrap reveal-right">
          <div className="img-accent-box-navy"></div>
          <div className="img-placeholder">
            <svg className="gi-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="0"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p>[ Foto Kegiatan<br/>Asrama Sukasari ]</p>
          </div>
          <div className="img-accent-box-navy-bl"></div>
        </div>
      </div>
    </section>
  );
}
