import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { actualTheme, toggleTheme } = useTheme();
  const isLight = actualTheme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-2 px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-200"
      aria-label={`현재: ${isLight ? '라이트 모드' : '다크 모드'}, 클릭하여 테마 변경`}
      title={isLight ? '다크 모드로 변경' : '라이트 모드로 변경'}
    >
      <div className="transition-transform duration-200 group-hover:scale-110">
        {isLight ? (
          <Sun className="w-[18px] h-[18px] text-amber-500" />
        ) : (
          <Moon className="w-[18px] h-[18px] text-indigo-400" />
        )}
      </div>
      <span className="text-xs font-semibold hidden sm:inline">
        {isLight ? '라이트' : '다크'}
      </span>
    </button>
  );
};

export default ThemeToggle;