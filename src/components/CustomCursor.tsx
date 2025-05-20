
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleLinkHoverStart = () => {
      setIsHovering(true);
    };

    const handleLinkHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
      <div
        className={cn(
          "fixed pointer-events-none z-50 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ left: 0, top: 0 }}
      >
        <div
          className={cn(
            "rounded-full border border-primary mix-blend-difference transition-all duration-100 ease-out",
            isHovering ? "w-12 h-12" : "w-6 h-6"
          )}
          style={{
            transform: `translate(${position.x - (isHovering ? 24 : 12)}px, ${position.y - (isHovering ? 24 : 12)}px)`,
          }}
        />
        <div
          className="bg-primary/80 rounded-full fixed w-2 h-2 mix-blend-difference transition-all duration-75 ease-out"
          style={{
            transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
