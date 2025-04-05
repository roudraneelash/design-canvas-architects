
import React from 'react';
import { cn } from '@/lib/utils';

interface ParallaxDividerProps {
  imageUrl: string;
  height?: string;
  text?: string;
}

const ParallaxDivider = ({ 
  imageUrl, 
  height = "h-[300px]", 
  text 
}: ParallaxDividerProps) => {
  return (
    <div className={cn("w-full relative overflow-hidden", height)}>
      <div 
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-mono-dark/40" />
      
      {text && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl text-white font-serif font-light tracking-wide animate-on-scroll">
            {text}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ParallaxDivider;
