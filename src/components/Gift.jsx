import React, { useState, useEffect } from 'react';

export default function Gift() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAmount, setActiveAmount] = useState('Gopay');
  const [copyText, setCopyText] = useState('Salin Nomor Rekening');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const copyRek = () => {
    let rek = '085694409676'; // Default Gopay
    if (activeAmount === 'BRI') rek = '053101016066506';

    navigator.clipboard.writeText(rek).then(() => {
      setCopyText('✓ Tersalin!');
      setTimeout(() => setCopyText('Salin Nomor Rekening'), 2000);
    }).catch(() => {
      alert(`Nomor Rekening ${activeAmount}: ${rek}\n· A.n Nur Hamdan Agustian`);
    });
  };

  return (
    <>
      <section id="gift">
        <div className="gift-container">
          <div className="gift-icon-wrap reveal">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="1.2">
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
            </svg>
          </div>

          <h2 className="gift-title reveal">Tanda Kasih &<br />Dukungan Anda</h2>
          <div className="ornament-line reveal">
            <div className="ornament-diamond"></div>
          </div>
          <p className="gift-desc reveal">
            Partisipasi Anda sangat berarti bagi keberlangsungan dan kemajuan Asrama Sukasari. Setiap kontribusi adalah benih kebaikan yang akan terus tumbuh bagi generasi mendatang.
          </p>

          <button className="btn-gift reveal" onClick={openModal}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
            </svg>
            <span>Berikan Dukungan</span>
          </button>
        </div>
      </section>

      {/* MODAL */}
      <div
        className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
        id="modalOverlay"
        onClick={(e) => { if (e.target.id === 'modalOverlay') closeModal(); }}
      >
        <div className="modal-card" id="modalCard">
          <button className="modal-close" onClick={closeModal}>✕</button>

          <div className="ornament-line" style={{ justifyContent: 'flex-start', marginBottom: '20px' }}>
            <div className="ornament-diamond" style={{ background: 'var(--orange)' }}></div>
            <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'linear-gradient(to right, var(--orange), transparent)' }}></div>
          </div>

          <div className="modal-badge">· Dukungan ·</div>
          <h3 className="modal-title">Pilih Opsi<br />Penyaluran</h3>
          <p className="modal-subtitle">Silakan pilih metode penyaluran dukungan</p>

          <div className="donation-options">
            {['Gopay', 'BRI'].map((amt) => (
              <div
                key={amt}
                className={`donation-card ${activeAmount === amt ? 'active' : ''}`}
                onClick={() => setActiveAmount(amt)}
              >
                <div className="dc-label">
                  {(amt === 'Gopay' || amt === 'DANA') ? 'E-Wallet' : 'Transfer Bank'}
                </div>
                <div className="dc-amount">{amt}</div>
              </div>
            ))}
          </div>

          <div className="donation-bank">
            <p>Tujuan Transfer</p>
            <h4>{activeAmount}</h4>
            <span>
              {activeAmount === 'BRI' && '0531 0101 6066 506  · A.n Nur Hamdan Agustian'}
              {activeAmount === 'Gopay' && '085694409676 · A.n Nur Hamdan Agustian'}

            </span>
          </div>

          <button
            className="btn-copy"
            onClick={copyRek}
            style={copyText === '✓ Tersalin!' ? { background: 'var(--navy)', color: 'var(--white)' } : {}}
          >
            {copyText}
          </button>
        </div>
      </div>
    </>
  );
}
