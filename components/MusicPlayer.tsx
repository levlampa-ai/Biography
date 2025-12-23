import React, { useEffect, useRef } from 'react';

// Путь к музыке в папке public
const AUDIO_PATH = "public/myz.mp3";

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    // To prevent the "play() failed" error, we strictly wait for the first user interaction
    // instead of attempting to autoplay immediately.
    const handleUserInteraction = () => {
      if (audio) {
        audio.play().catch((err) => {
          console.debug("Playback failed after interaction:", err);
        });
      }
      // Clean up listeners after first interaction
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      loop 
      src={AUDIO_PATH} 
      className="hidden" 
      preload="auto"
    />
  );
};