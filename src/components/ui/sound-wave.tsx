"use client";
import React from 'react';

const SoundWave = () => {
  return (
    <div className="flex items-center justify-center gap-1 h-20 w-20">
      <div className="w-1 bg-amber-500/50 animate-wave" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-1 bg-amber-500/70 animate-wave" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-1 bg-amber-500 animate-wave" style={{ animationDelay: '0.3s' }}></div>
      <div className="w-1 bg-amber-500/70 animate-wave" style={{ animationDelay: '0.4s' }}></div>
      <div className="w-1 bg-amber-500/50 animate-wave" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default SoundWave; 