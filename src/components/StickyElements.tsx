import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const StickyElements: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showBackToTop) return null;

  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:transform hover:scale-110 z-50 animate-fade-in"
        aria-label="맨 위로 스크롤"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </>
  );
};

export default StickyElements;