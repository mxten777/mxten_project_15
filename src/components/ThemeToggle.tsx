import React from 'react';

import { Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  scrolled?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ scrolled = false }) => {
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
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-lg transition-all duration-300 group backdrop-blur-sm shadow-lg hover:scale-105 cursor-pointer ${
        scrolled
          ? 'bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-blue-400'
          : 'bg-white/30 dark:bg-gray-800/50 border border-white/50 dark:border-gray-600/50 hover:bg-white/40 dark:hover:bg-gray-700/50'
      }`}
      aria-label={`현재: ${getLabel()}, 클릭하여 테마 변경`}
      title={getLabel()}
    >
      <div
        key={theme}
        className={`transition-colors duration-300 ${
          scrolled
            ? 'text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
            : 'text-white dark:text-gray-300 group-hover:text-yellow-300 dark:group-hover:text-blue-400 drop-shadow-md'
        }`}
      >
        {getIcon()}
      </div>
    </button>
  );
};

export default ThemeToggle;