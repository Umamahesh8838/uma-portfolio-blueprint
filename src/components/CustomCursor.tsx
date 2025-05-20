
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointing, setIsPointing] = useState(false);

  useEffect(() => {
    // Add global styles for cursor
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body {
        cursor: none;
      }
      a, button, [role="button"] {
        cursor: none;
      }
    `;
    document.head.appendChild(styleElement);

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

    const handlePointerDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.hasAttribute('role') && target.getAttribute('role') === 'button';
      
      setIsPointing(isPointer);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', handlePointerDetection);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      // Clean up styles and event listeners on unmount
      document.head.removeChild(styleElement);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', handlePointerDetection);
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
      {/* Spotlight effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-40 opacity-50"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      
      {/* Custom cursor */}
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
            isHovering ? "w-12 h-12 bg-primary/10" : "w-6 h-6",
            isPointing ? "bg-primary/30" : ""
          )}
          style={{
            transform: `translate(${position.x - (isHovering ? 24 : 12)}px, ${position.y - (isHovering ? 24 : 12)}px)`,
            backdropFilter: "blur(4px)"
          }}
        />
        <div
          className={cn(
            "rounded-full fixed mix-blend-difference transition-all duration-75 ease-out",
            isPointing ? "bg-primary w-3 h-3" : "bg-primary/80 w-2 h-2"
          )}
          style={{
            transform: `translate(${position.x - (isPointing ? 6 : 4)}px, ${position.y - (isPointing ? 6 : 4)}px)`,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
