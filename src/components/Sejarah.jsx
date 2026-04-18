import React from 'react';
import n6 from '../assets/images/n2.jpg';

export default function Sejarah() {
  return (
    <section id="sejarah">
      <div className="sejarah-container">
        {/* Image */}
        <div className="sejarah-image-wrap reveal-left">
          <div className="img-accent-box"></div>
          <div className="img-frame">
            <div className="img-frame">
              <img
                src={n6}
                alt="Foto Bersejarah Asrama Sukasari"
                className="img-real"
              />
            </div>
          </div>
          <div className="img-accent-box-br"></div>
        </div>

        {/* Text */}
        <div className="sejarah-text reveal-right">
          <span className="section-label">· Sejarah Singkat ·</span>
          <h2 className="section-heading">Perjalanan Panjang<br /><em>Sukasari</em></h2>
          <div className="ornament-line" style={{ justifyContent: 'flex-start', margin: '20px 0' }}>
            <div className="ornament-diamond"></div>
            <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></div>
          </div>
          <span className="quote-mark">"</span>
          <p className="section-body">
            Asrama Sukasari merupakan salah satu asrama tertua dan paling bersejarah di lingkungan Institut Pertanian Bogor. Selama 74 tahun, asrama ini telah menjadi rumah kedua bagi ribuan mahasiswa dari berbagai penjuru Nusantara. Lebih dari sekadar tempat tinggal, Sukasari menjadi ruang pembentukan karakter, kepemimpinan, dan solidaritas yang terus diwariskan dari generasi ke generasi.
          </p>
          <br />
          <p className="section-body">
            Nilai-nilai kebersamaan dan dedikasi yang tumbuh di dalamnya menjadikan Sukasari sebagai bagian penting dalam perjalanan para penghuninya. Perjalanan panjang ini bukan hanya tentang waktu, tetapi juga tentang kisah, pengorbanan, dan kebanggaan yang terus hidup dalam setiap insan yang pernah menjadi bagian dari Sukasari.
          </p>
          <br />
          <p className="section-body">
            Untuk memperingati perjalanan tersebut, perayaan Dies Natalis ke-74 diselenggarakan sebagai bentuk apresiasi sekaligus momentum mempererat kebersamaan. Melalui rangkaian kegiatan yang hangat dan bermakna, acara ini diharapkan mampu memperkuat rasa kekeluargaan, menumbuhkan rasa memiliki, serta mempererat hubungan antara penghuni, pengurus, dan alumni dalam menjaga Sukasari sebagai rumah kedua.
          </p>
        </div>
      </div>
    </section>
  );
}
