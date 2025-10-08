import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const StickyElements: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Back to top button
      setShowBackToTop(window.scrollY > 500);

      // Active section detection
      const sections = ['hero', 'features', 'stats', 'bento', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'hero', label: '홈' },
    { id: 'features', label: '특징' },
    { id: 'stats', label: '통계' },
    { id: 'bento', label: '강점' },
    { id: 'cta', label: '문의' },
  ];

  return (
    <>
      {/* Floating Back to Top Button */}
      <motion.button
        className="fab bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      {/* Sticky Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0,
          transformOrigin: '0%'
        }}
      />

      {/* Sticky Section Navigator (Desktop) */}
      <motion.nav
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="glass-effect rounded-2xl p-2 border border-white/20 dark:border-gray-700/50">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-blue-400'
              }`}
              onClick={() => scrollToSection(section.id)}
              aria-label={`${section.label} 섹션으로 이동`}
              title={section.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.nav>

      {/* Mobile Quick Actions */}
      <motion.div
        className="fixed bottom-6 left-6 z-50 lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`w-12 h-12 rounded-xl glass-effect border border-white/20 dark:border-gray-700/50 
                flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white scale-110'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => scrollToSection(section.id)}
              aria-label={`${section.label} 섹션으로 이동`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label.slice(0, 1)}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default StickyElements;