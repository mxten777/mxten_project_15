import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 초기 테마 설정 및 즉시 DOM 반영
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme = savedTheme || 'light';
    
    // 즉시 DOM에 반영 (첫 렌더부터 정확한 테마 적용)
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      if (initialTheme === 'dark') {
        root.classList.add('dark');
      } else if (initialTheme === 'light') {
        root.classList.remove('dark');
      } else if (initialTheme === 'auto') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    }
    
    return initialTheme;
  });

  // actualTheme은 계산된 값 (별도 state 없음)
  const actualTheme: 'light' | 'dark' = React.useMemo(() => {
    if (theme === 'auto') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return theme;
  }, [theme]);

  // theme 변경 시 DOM 즉시 업데이트
  useEffect(() => {
    const root = document.documentElement;
    
    // 즉시 DOM 클래스 토글
    if (actualTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // localStorage 저장
    localStorage.setItem('theme', theme);

    // auto 모드: 시스템 테마 변경 감지
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    
    return undefined;
  }, [theme, actualTheme]);

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  const contextValue: ThemeContextType = {
    theme,
    actualTheme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};