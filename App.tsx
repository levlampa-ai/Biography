import React from 'react';
import { BackgroundMedia } from './components/BackgroundMedia';
import { ProfileCard } from './components/ProfileCard';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
      
      {/* Background Video */}
      <BackgroundMedia />

      {/* Main Content */}
      <main className="z-10 w-full flex items-center justify-center py-10 animate-in fade-in duration-1000">
        <ProfileCard />
      </main>

      {/* Invisible Music Player */}
      <MusicPlayer />
      
    </div>
  );
};

export default App;