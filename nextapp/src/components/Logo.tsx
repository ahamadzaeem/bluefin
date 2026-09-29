import React from 'react';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export default function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/assets/logo.png" 
        alt="BlueFin Logo" 
        style={{ 
          height: '2.5rem', 
          width: 'auto', 
          objectFit: 'contain',
          filter: invert ? 'brightness(0)' : 'none',
          transition: 'filter 0.3s ease'
        }} 
      />
    </div>
  );
}
