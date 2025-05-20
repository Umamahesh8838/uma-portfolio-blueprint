
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
        <div
          className="absolute bg-secondary/50 rounded-full blur-2xl transition-all duration-500 ease-in-out"
          style={{
            width: '150px',
            height: '150px',
            left: `${mousePosition.x - 75}px`,
            top: `${mousePosition.y - 75}px`,
            opacity: 0.5,
            transform: 'scale(1)',
          }}
        />
      )}
    </div>
  );
};

export default RippleText;
