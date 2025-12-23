import React from 'react';
import { Fingerprint } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  return (
    <div 
      onClick={onEnter}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-rose-600 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
        <Fingerprint 
          size={64} 
          className="text-rose-500 animate-pulse relative z-10 group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      
      <p className="mt-8 font-['JetBrains_Mono'] text-rose-200 text-sm tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
        [ Click to Initialize ]
      </p>
    </div>
  );
};