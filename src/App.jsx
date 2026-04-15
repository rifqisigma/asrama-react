import React, { useState, useEffect } from 'react'
import Cover from './components/Cover'
import Hero from './components/Hero'
import Sejarah from './components/Sejarah'
import Tanggal from './components/Tanggal'
import Kegiatan from './components/Kegiatan'
import Gallery from './components/Gallery'
import Gift from './components/Gift'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.classList.add('cover-active');
      return;
    } else {
      document.body.classList.remove('cover-active');
    }

    // Scroll reveals
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    gsap.utils.toArray('.reveal-left').forEach(el => {
      gsap.to(el, {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
      });
    });

    gsap.utils.toArray('.reveal-right').forEach(el => {
      gsap.to(el, {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
      });
    });

    // SMOOTH STAGGERED REVEAL FOR KEGIATAN ITEMS
    gsap.fromTo('.reveal-item', 
      { opacity: 0, y: 30, x: -20 },
      { 
        opacity: 1, y: 0, x: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.kegiatan-list',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isOpened]);

  return (
    <>
      <Cover onOpen={() => setIsOpened(true)} />
      <MusicPlayer isAutoPlay={isOpened} />
      <div className="main-content">
        <Hero />
        <Sejarah />
        <Tanggal />
        <Kegiatan />
        <Gallery />
        <Gift />
        <Footer />
      </div>
    </>
  )
}

export default App
