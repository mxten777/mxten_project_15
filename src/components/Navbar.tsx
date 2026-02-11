import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // 페이지 이동 시 모바일 메뉴 자동 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: '홈', path: '/', description: '서비스 소개' },
    { name: '포트폴리오', path: '/portfolio', description: '80+개 MVP 프로젝트' },
    { name: '캠페인', path: '/campaign', description: '특별 런칭 이벤트' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed w-full left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60 dark:border-slate-800/60'
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 app-header-inner">
            <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="relative z-20 flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 min-w-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative px-1.5 py-1 sm:px-2 sm:py-1.5 bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl transition-all duration-200 shadow-sm border border-slate-200 dark:border-slate-800 group-hover:shadow-md group-hover:border-indigo-300 dark:group-hover:border-indigo-700 flex-shrink-0">
                <img
                  src="/images/baikal_logo_new_trans.png"
                  alt="(주)바이칼시스템즈"
                  className="relative h-6 sm:h-8 w-auto object-contain block dark:hidden"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <img
                  src="/images/baikal_logo_white.png"
                  alt="(주)바이칼시스템즈"
                  className="relative h-6 sm:h-8 w-auto object-contain hidden dark:block"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight whitespace-nowrap hidden xs:inline">
                (주)바이칼시스템즈
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-1 mx-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              <Link
                to="/contact"
                className="px-5 py-2 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-600/20 hover:shadow-md transition-all duration-200"
              >
                상담 신청
              </Link>
            </div>

            {/* Mobile Right */}
            <div className="md:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-200"
                aria-label="메뉴 토글"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl z-50 md:hidden overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-base">{item.name}</span>
                      <span className={`block text-xs mt-0.5 ${isActive(item.path) ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>{item.description}</span>
                    </div>
                    <ChevronRight size={18} className="text-slate-400" />
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-sm"
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <div style={{ height: 'var(--app-header-h)' }} />
    </>
  );
};

export default Navbar;