import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointing, setIsPointing] = useState(false);

  useEffect(() => {
    // Add global styles for cursor
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body, html {
        cursor: url('https://cursor.style/collections/cute-animal/2672-panda-cursor.svg') 16 16, auto !important;
      }
      
      a, button, [role="button"], input[type="submit"], input[type="button"], select, textarea, .clickable {
        cursor: url('https://cursor.style/collections/cute-animal/2672-panda-pointer.svg') 16 16, pointer !important;
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

    const handlePointerDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPointer = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' && (
          target.getAttribute('type') === 'button' || 
          target.getAttribute('type') === 'submit'
        ) ||
        target.classList.contains('clickable');
      
      setIsPointing(isPointer);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', handlePointerDetection);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Clean up styles and event listeners on unmount
      document.head.removeChild(styleElement);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', handlePointerDetection);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Just return null as we're handling cursors via CSS now
  return null;
};

export default CustomCursor;
