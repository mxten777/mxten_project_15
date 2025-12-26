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

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: '홈', path: '/', description: '서비스 소개' },
    { name: '포트폴리오', path: '/portfolio', description: '40+개 MVP 프로젝트' },
    { name: '🎉 캠페인', path: '/campaign', description: '특별 런칭 이벤트' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed w-full left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-premium border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl border-b border-white/20'
      }`}>
        {/* Premium gradient overlay for non-scrolled state */}
        {!scrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-bg"></div>
        )}
        
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 app-header-inner">
            <div className="flex items-center justify-between">
            
            {/* Logo - Enhanced */}
            <Link
              to="/"
              className="relative z-20 flex items-center space-x-3 group flex-shrink-0 hover:scale-102 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-xl transition-all duration-300 shadow-lg border border-gray-200 group-hover:shadow-premium group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/images/baikal_logo_trans.png"
                  alt="바이브코딩 로고"
                  className="relative w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  style={{
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              <div className="relative flex flex-col">
                <span className={`relative z-10 font-bold font-heading text-2xl sm:text-3xl leading-tight tracking-tight transition-all duration-300 ${
                  scrolled ? 'text-gray-900 dark:text-white' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
                }`}>
                  바이브코딩
                </span>
                <span className={`relative z-10 text-sm sm:text-base font-bold font-sans leading-tight tracking-wide transition-all duration-300 ${
                  scrolled ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]'
                }`}>
                  MVP 개발 전문
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Premium Design */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-6 py-3.5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-102 cursor-pointer overflow-hidden ${
                    isActive(item.path)
                      ? scrolled
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-premium'
                        : 'text-gray-900 bg-white/95 backdrop-blur-sm shadow-premium border border-white/30'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg'
                        : 'text-white hover:bg-white/15 backdrop-blur-sm border border-transparent hover:border-white/20'
                  }`}
                  style={{
                    textShadow: scrolled 
                      ? 'none' 
                      : !isActive(item.path) ? '0 1px 3px rgba(0,0,0,0.7)' : 'none'
                  }}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800"></div>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Side - Premium CTA */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <ThemeToggle scrolled={scrolled} />

              <Link
                to="/contact"
                className={`group relative px-8 py-3.5 rounded-xl font-bold text-lg shadow-premium transition-all duration-400 transform hover:scale-105 cursor-pointer overflow-hidden ${
                  scrolled
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-premium-lg'
                    : 'bg-white text-blue-600 hover:bg-gray-50 shadow-glass border border-white/30'
                }`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800"></div>
                <span className="relative z-10">상담 신청</span>
              </Link>
            </div>

            {/* Mobile Right Side - 테마 토글과 메뉴 버튼 */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <div className="flex-shrink-0">
                <ThemeToggle scrolled={scrolled} />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-lg transition-all duration-200 touch-manipulation ${
                  scrolled
                    ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    : 'text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                }`}
                aria-label="메뉴 토글"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu - 간소화된 버전 */}
          <div className="fixed top-24 left-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => (
                  <div key={item.path} className="relative">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-500'
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className={`text-sm mt-1 ${isActive(item.path) ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>{item.description}</span>
                      </div>
                      
                      <ChevronRight 
                        size={22} 
                        className={`transition-all duration-300 ${
                          isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:translate-x-1 group-hover:text-blue-500'
                        }`} 
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  📞 문의하기
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed navbar (CSS-only header height via --app-header-h) */}
      <div style={{ height: 'var(--app-header-h)' }} />
    </>
  );
};

export default Navbar;