import React, { useState, useEffect } from 'react';

export default function Tanggal() {
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });

  useEffect(() => {
    const target = new Date('2025-07-19T08:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      setTimeLeft({
        days: String(d).padStart(2,'0'),
        hours: String(h).padStart(2,'0'),
        minutes: String(m).padStart(2,'0'),
        seconds: String(s).padStart(2,'0')
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tanggal">
      <div className="tanggal-container">
        <p className="tanggal-heading reveal">· Catat Tanggalnya ·</p>
        <h2 className="tanggal-title reveal">Momen yang Telah Dinantikan</h2>

        <div className="ornament-line reveal" style={{ marginBottom: '48px' }}>
          <div className="ornament-diamond" style={{ background: 'var(--gold-light)' }}></div>
        </div>

        <div className="tanggal-cards reveal">
          <div className="tanggal-card">
            <span className="tc-label">Hari</span>
            <div className="tc-value">Sabtu</div>
            <div className="tc-sub">Dies Natalis</div>
          </div>
          <div className="tanggal-card">
            <span className="tc-label">Tanggal</span>
            <div className="tc-value">19</div>
            <div className="tc-sub">Juli 2025</div>
          </div>
          <div className="tanggal-card">
            <span className="tc-label">Pukul</span>
            <div className="tc-value">08.00</div>
            <div className="tc-sub">WIB – Selesai</div>
          </div>
        </div>

        <div className="tanggal-location reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          <p>Asrama Sukasari, Kampus IPB<br/><em>Dramaga, Bogor, Jawa Barat</em></p>
        </div>

        <div className="countdown-wrap reveal">
          <p className="countdown-label">· Hitung Mundur Menuju Hari H ·</p>
          <div className="countdown">
            <div className="cd-item">
              <div className="cd-num">{timeLeft.days}</div>
              <div className="cd-lbl">Hari</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-item">
              <div className="cd-num">{timeLeft.hours}</div>
              <div className="cd-lbl">Jam</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-item">
              <div className="cd-num">{timeLeft.minutes}</div>
              <div className="cd-lbl">Menit</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-item">
              <div className="cd-num">{timeLeft.seconds}</div>
              <div className="cd-lbl">Detik</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
