import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return '라이트 모드';
      case 'dark':
        return '다크 모드';
      default:
        return '시스템 설정';
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl glass-effect border border-white/20 dark:border-gray-700/50 
                hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300 group"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`현재: ${getLabel()}, 클릭하여 테마 변경`}
      title={getLabel()}
    >
      <motion.div
        key={theme}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 
                  dark:group-hover:text-blue-400 transition-colors duration-300"
      >
        {getIcon()}
      </motion.div>

      {/* Indicator dots */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {['light', 'dark', 'auto'].map((mode) => (
          <div
            key={mode}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              theme === mode
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-400 dark:bg-gray-600 scale-100'
            }`}
          />
        ))}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;