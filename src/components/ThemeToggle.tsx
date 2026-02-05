import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer"
      aria-label={`현재: ${theme === 'light' ? '라이트 모드' : '다크 모드'}, 클릭하여 테마 변경`}
      title={theme === 'light' ? '다크 모드로 변경' : '라이트 모드로 변경'}
    >
      <div className="transition-all duration-200 group-hover:scale-110">
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-amber-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </div>
      <span className="text-sm font-bold hidden sm:inline">
        {theme === 'light' ? '라이트' : '다크'}
      </span>
    </button>
  );
};

export default ThemeToggle;