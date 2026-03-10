import React from 'react';

export default function Sejarah() {
  return (
    <section id="sejarah">
      <div className="sejarah-container">
        {/* Image */}
        <div className="sejarah-image-wrap reveal-left">
          <div className="img-accent-box"></div>
          <div className="img-frame">
            <div className="img-placeholder">
              <svg className="gi-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="0"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <p>[ Foto Bersejarah<br/>Asrama Sukasari ]</p>
            </div>
          </div>
          <div className="img-accent-box-br"></div>
        </div>

        {/* Text */}
        <div className="sejarah-text reveal-right">
          <span className="section-label">· Sejarah Singkat ·</span>
          <h2 className="section-heading">Perjalanan Panjang<br/><em>Sukasari</em></h2>
          <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '20px 0' }}>
            <div className="ornament-diamond"></div>
            <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></div>
          </div>
          <span className="quote-mark">"</span>
          <p className="section-body">
            Asrama Sukasari merupakan salah satu asrama tertua dan paling bersejarah di lingkungan Institut Pertanian Bogor. Berdiri selama 74 tahun, asrama ini telah menjadi rumah kedua bagi ribuan mahasiswa yang datang dari berbagai penjuru Nusantara.
          </p>
          <br/>
          <p className="section-body">
            Sejak awal berdirinya, Sukasari dikenal sebagai tempat persemaian karakter, kepemimpinan, dan solidaritas. Nilai-nilai luhur yang ditanamkan di sini telah melahirkan generasi demi generasi putra-putri bangsa yang berdedikasi.
          </p>
          <br/>
          <p className="section-body">
            Tujuh puluh empat tahun bukanlah waktu yang singkat — ia adalah saga panjang tentang kebersamaan, pengorbanan, dan kebanggaan yang terus berkobar dalam setiap detak jantung civitas Sukasari.
          </p>
        </div>
      </div>
    </section>
  );
}
