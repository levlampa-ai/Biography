import React from 'react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto p-4 flex flex-col items-center justify-center">
      
      {/* Glass GUI Card */}
      <div className="
        relative w-full
        bg-zinc-900/40 backdrop-blur-2xl 
        border border-white/10 
        rounded-3xl 
        p-8 md:p-10 
        flex flex-col items-center text-center
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        ring-1 ring-white/5
      ">
        
        {/* Nickname - Clean White/Silver */}
        <h1 className="
          font-['Montserrat'] font-black uppercase tracking-tighter 
          text-white
          text-4xl md:text-5xl
          mb-6
          drop-shadow-lg
        ">
          Lord of cime
        </h1>

        {/* Separator Line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

        {/* Info Text */}
        <div className="font-['JetBrains_Mono'] text-gray-300 space-y-3 text-sm md:text-base font-medium tracking-wide">
          <p className="flex items-center justify-center gap-2">
            <span className="text-white/40">{`>`}</span>
            <span>мне 14 годиков</span>
          </p>
          
          <p className="flex items-center justify-center gap-2">
            <span className="text-white/40">{`>`}</span>
            <span>учу python & javascript</span>
          </p>
        </div>

        {/* GIF at the bottom from public folder */}
        <div className="mt-8 w-full flex justify-center rounded-xl overflow-hidden border border-white/5 shadow-inner bg-black/20">
          <img 
            src="public/guf.gif" 
            alt="animation" 
            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>

      </div>
    </div>
  );
};