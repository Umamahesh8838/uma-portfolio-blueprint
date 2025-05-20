
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RippleTextProps {
  text: string;
  className?: string;
}

const RippleText: React.FC<RippleTextProps> = ({ text, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    
    const rect = textRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={textRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <span className="relative z-10 mix-blend-difference">{text}</span>
      
      {isHovered && (
        <>
          {/* Enhanced radial gradient effect */}
          <div
            className="absolute bg-gradient-to-r from-secondary/80 to-primary/80 rounded-full blur-2xl transition-all duration-300 ease-in-out"
            style={{
              width: '180px',
              height: '180px',
              left: `${mousePosition.x - 90}px`,
              top: `${mousePosition.y - 90}px`,
              opacity: 0.7,
              transform: 'scale(1)',
              animation: 'pulse 2s infinite',
            }}
          />
          {/* Secondary smaller gradient */}
          <div
            className="absolute bg-primary/40 rounded-full blur-md transition-all duration-200 ease-out"
            style={{
              width: '80px',
              height: '80px',
              left: `${mousePosition.x - 40}px`,
              top: `${mousePosition.y - 40}px`,
              opacity: 0.8,
              transform: 'scale(1.2)',
            }}
          />
        </>
      )}
    </div>
  );
};

export default RippleText;
