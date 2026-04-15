import React, { useState, useEffect, useRef } from 'react';

export default function MusicPlayer({ isAutoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt auto-play when triggered from cover
    if (isAutoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Auto-play was prevented by the browser. Interaction required.", error);
        });
      }
    }
  }, [isAutoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`music-player-fixed ${isAutoPlay ? 'visible' : ''}`}>
      <audio ref={audioRef} loop>
        <source src="/src/assets/music/dummy.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        className={`music-btn ${isPlaying ? 'playing' : 'paused'}`} 
        onClick={togglePlay}
        aria-label="Toggle Music"
      >
        <div className="music-icon-container">
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </div>
        
        {/* Animated Sound Bars when playing */}
        {isPlaying && (
          <div className="sound-bars">
            <div className="bar"></div>
            <div className="bar shadow"></div>
            <div className="bar"></div>
          </div>
        )}
      </button>
    </div>
  );
}
