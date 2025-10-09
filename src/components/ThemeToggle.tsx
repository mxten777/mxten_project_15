import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      default:
        return <Settings className="w-4 h-4" />;
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
      className="p-2.5 rounded-lg bg-white/20 dark:bg-gray-800/50 border border-white/30 dark:border-gray-600/50 
                hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 group backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
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
    </motion.button>
  );
};

export default ThemeToggle;