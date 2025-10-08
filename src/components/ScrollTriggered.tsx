import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ScrollTriggeredProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'parallax';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  parallaxOffset?: number;
}

const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  },
  fadeDown: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 }
  },
  fadeRight: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 }
  }
};

const ScrollTriggered: React.FC<ScrollTriggeredProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  parallaxOffset = 50
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  if (animation === 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ y }}
      >
        {children}
      </motion.div>
    );
  }

  const variants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Individual staggered item
export const StaggeredItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
}> = ({ children, className = '', animation = 'fadeUp' }) => {
  const itemVariants = {
    hidden: animation === 'fadeUp' ? { opacity: 0, y: 20 } :
             animation === 'fadeLeft' ? { opacity: 0, x: 20 } :
             animation === 'fadeRight' ? { opacity: 0, x: -20 } :
             { opacity: 0, scale: 0.9 },
    show: animation === 'fadeUp' ? { opacity: 1, y: 0 } :
          animation === 'fadeLeft' ? { opacity: 1, x: 0 } :
          animation === 'fadeRight' ? { opacity: 1, x: 0 } :
          { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Progress indicator based on scroll
export const ScrollProgress: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = 'bg-gradient-to-r from-blue-500 to-purple-500' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${color} origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
};

export default ScrollTriggered;