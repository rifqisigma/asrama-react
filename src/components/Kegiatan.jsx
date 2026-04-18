import React from 'react';
import dn5 from '../assets/images/dn5.jpg';

export default function Kegiatan() {
  return (
    <section id="kegiatan">
      <div className="kegiatan-container">
        <div className="kegiatan-text reveal-left">
          <span className="section-label">· Rangkaian Acara ·</span>
          <h2 className="section-heading">Agenda<br /><em>Perayaan</em></h2>
          <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '20px 0' }}>
            <div className="ornament-diamond"></div>
            <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></div>
          </div>
          <p className="section-body">
            Perayaan Dies Natalis ke-74 Asrama Sukasari hadir dengan serangkaian kegiatan yang mempertemukan kenangan indah masa lalu dengan semangat generasi masa kini.
          </p>
          <ul className="kegiatan-list">
            <li className="reveal-item">
              <span className="kl-time">09.00</span>
              <div className="kl-content">
                <h4>Open Gate</h4>
                <p>Awal kebersamaan dimulai di sini</p>
              </div>
            </li>
            <li className="reveal-item">
              <span className="kl-time">10.00</span>
              <div className="kl-content">
                <h4>Upacara Pembukaan</h4>
                <p>Prosesi resmi dan sambutan-sambutan</p>
              </div>
            </li>
            <li className="reveal-item">
              <span className="kl-time">10.45</span>
              <div className="kl-content">
                <h4>Penampilan Video dan Puisi</h4>
                <p>Harmoni makna dalam Video dan Puisi</p>
              </div>
            </li>
            <li className="reveal-item">
              <span className="kl-time">11.15</span>
              <div className="kl-content">
                <h4>Sharing Session</h4>
                <p>Berbagi inspirasi bersama alumni</p>
              </div>
            </li>
            <li className="reveal-item">
              <span className="kl-time">12.20</span>
              <div className="kl-content">
                <h4>Penampilan Musikal</h4>
                <p>Penampilan Hymne Asrama Sukasari dan Musikal</p>
              </div>
            </li>
            <li className="reveal-item">
              <span className="kl-time">12.40</span>
              <div className="kl-content">
                <h4>Dokumentasi dan Penutupan</h4>
                <p>Penutup rangkaian Dies Natalis ke-74 dengan momen kebersamaan</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="kegiatan-image-wrap reveal-right">
          <div className="img-accent-box-navy"></div>
          <div className="kegiatan-img-main">
            <img
              className='kegiatan-img'
              src={dn5}
              alt="Kegiatan Asrama"
            />
          </div>
          <div className="img-accent-box-navy-bl"></div>
        </div>
      </div>
    </section>
  );
}
