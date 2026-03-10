import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="ornament-line" style={{ marginBottom: '28px' }}>
        <div className="ornament-diamond" style={{ background: 'var(--gold-light)' }}></div>
      </div>
      <div className="footer-logo">SUKASARI</div>
      <div className="footer-sub">Asrama IPB · Berdiri Sejak 1951</div>
      <p className="footer-copy">© 2025 Asrama Sukasari Institut Pertanian Bogor · Dies Natalis ke-74</p>
    </footer>
  );
}
