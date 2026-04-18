import React, { useState, useEffect } from 'react';

export default function Tanggal() {
  const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });

  useEffect(() => {
    const target = new Date('2026-05-17T10:00:00');

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
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
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

        <div className="tanggal-new-layout reveal">
          <div className="tnl-side">
            <span className="tnl-label">Hari</span>
            <div className="tnl-val">MINGGU</div>
          </div>

          <div className="tnl-center">
            <div className="tnl-circle">
              <div className="tnl-date-big">17</div>
              <div className="tnl-month-small">MEI 2026</div>
              <svg className="tnl-ornament" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          <div className="tnl-side">
            <span className="tnl-label">Waktu</span>
            <div className="tnl-val">
              <span className="tnl-big-time">10.00</span>
              <span className="tnl-medium-unit">WIB</span>
            </div>
          </div>
        </div>

        <div className="tanggal-location reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <p>Asrama IPB SUKASARI<br /><em>JL. Siliwangi, Sukasari, Bogor, Jawa Barat</em></p>
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
