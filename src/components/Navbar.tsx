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
      <nav className={`fixed w-full left-0 right-0 top-0 z-50 transition-all duration-300 animate-slide-in-top ${
        scrolled
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl border-b-2 border-gray-200 dark:border-gray-600'
          : 'bg-black/30 dark:bg-black/50 backdrop-blur-xl border-b border-white/30 dark:border-white/20'
      }`}>
        {/* Animated gradient background overlay */}
        {!scrolled && (
          <div className="absolute inset-0 opacity-30 animate-gradient-bg"></div>
        )}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18 md:h-20">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group flex-shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-2 bg-white rounded-lg transition-all duration-300 shadow-md border border-gray-200 group-hover:scale-105 group-hover:bg-gray-50 animate-float">
                <img
                  src="/images/baikal_logo_trans.png"
                  alt="바이브코딩 로고"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  style={{
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold font-heading text-lg sm:text-xl leading-tight tracking-tight transition-colors ${
                  scrolled ? 'text-gray-900 dark:text-white drop-shadow-sm' : 'text-white'
                }`}
                style={{
                  textShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.1)' : '2px 2px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.5)'
                }}>
                  바이브코딩
                </span>
                <span className={`text-xs sm:text-sm font-semibold font-sans leading-tight tracking-wide ${
                  scrolled ? 'text-blue-700 dark:text-blue-300 font-bold' : 'text-blue-100'
                }`}
                style={{
                  textShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.2)' : '1px 1px 4px rgba(0,0,0,0.8)'
                }}>
                  MVP 개발 전문
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - 중앙 배치 */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isActive(item.path)
                      ? scrolled
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg animate-pulse-glow'
                        : 'text-blue-900 bg-white/95 backdrop-blur-sm shadow-lg border border-white/50'
                      : scrolled
                        ? 'text-gray-900 dark:text-white font-extrabold hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-md'
                        : 'text-white hover:bg-white/25 backdrop-blur-sm border border-white/30'
                  }`}
                  style={{
                    textShadow: scrolled 
                      ? isActive(item.path) ? 'none' : '0 1px 3px rgba(0,0,0,0.3)' 
                      : !isActive(item.path) ? '1px 1px 3px rgba(0,0,0,0.7)' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side - 테마 토글과 CTA */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <ThemeToggle scrolled={scrolled} />

              <Link
                to="/contact"
                className={`px-8 py-3 rounded-xl font-bold text-base shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  scrolled
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 shadow-xl hover:shadow-2xl animate-pulse-glow'
                    : 'bg-white text-blue-700 hover:bg-gray-50 shadow-white/30 border border-white/50'
                }`}
              >
                상담 신청
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
          <div className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden border border-gray-100">
            <div className="px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => (
                  <div key={item.path} className="relative">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-600 shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-lg">{item.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</span>
                      </div>
                      
                      <ChevronRight 
                        size={22} 
                        className={`transition-all duration-300 ${
                          isActive(item.path) ? 'text-blue-500' : 'text-gray-400 group-hover:translate-x-1 group-hover:text-blue-500'
                        }`} 
                      />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  📞 문의하기
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-18 md:h-20" />
    </>
  );
};

export default Navbar;