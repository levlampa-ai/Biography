import React, { useRef, useEffect } from 'react';

// Путь к видео в папке public
const VIDEO_PATH = "public/bag.mp4"; 

// Fallback image (Dark abstract)
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop";

export const BackgroundMedia: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Neutral dark overlay instead of pink/red */}
      <div className="absolute inset-0 bg-black/60 z-[1] backdrop-blur-[1px]" />
      
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-60"
        poster={FALLBACK_IMAGE}
      >
        <source src={VIDEO_PATH} type="video/mp4" />
      </video>
    </div>
  );
};