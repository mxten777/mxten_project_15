import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorFollowerProps {
  children?: React.ReactNode;
  size?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  children,
  size = 20
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 20, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Check if device is mobile
    const checkIsMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.matchMedia('(max-width: 768px)').matches 
        || 'ontouchstart' in window;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    const isMobileDevice = checkIsMobile();
    
    // Don't initialize cursor on mobile devices
    if (isMobileDevice) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Interactive elements detection
    const handleElementHover = (entering: boolean) => {
      setIsHovering(entering);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea, select, .cursor-pointer'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => handleElementHover(true));
        el.addEventListener('mouseleave', () => handleElementHover(false));
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', () => handleElementHover(true));
          el.removeEventListener('mouseleave', () => handleElementHover(false));
        });
      };
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    const cleanup = addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cleanup();
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render cursor on mobile
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: -size / 2,
          translateY: -size / 2,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="bg-white rounded-full"
          style={{
            width: size,
            height: size,
          }}
        />
      </motion.div>

      {/* Trailing Dots */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: -3,
          translateY: -3,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          scale: { delay: 0.05, type: 'spring', stiffness: 200, damping: 20 },
          opacity: { delay: 0.05, duration: 0.2 },
        }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: -2,
          translateY: -2,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          scale: { delay: 0.1, type: 'spring', stiffness: 150, damping: 20 },
          opacity: { delay: 0.1, duration: 0.2 },
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>

      {children}
    </>
  );
};

export default CursorFollower;