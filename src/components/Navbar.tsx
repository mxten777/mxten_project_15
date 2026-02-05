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
    { name: '포트폴리오', path: '/portfolio', description: '80+개 MVP 프로젝트' },
    { name: '🎉 캠페인', path: '/campaign', description: '특별 런칭 이벤트' },
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
          ? 'bg-white dark:bg-slate-900 shadow-md border-b-2 border-slate-200 dark:border-slate-700'
          : 'bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-700'
      }`}>
        
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 app-header-inner">
            <div className="flex items-center justify-between">
            
            {/* Logo - Premium Clean */}
            <Link
              to="/"
              className="relative z-20 flex items-center space-x-2.5 group flex-shrink-0 hover:scale-[1.02] transition-transform duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg transition-all duration-200 shadow-sm border-2 border-slate-300 dark:border-slate-600 group-hover:shadow-md group-hover:border-blue-500 dark:group-hover:border-blue-400">
                <img
                  src="/images/baikal_logo_new_trans.png"
                  alt="바이브코딩"
                  className="relative h-8 sm:h-9 w-auto object-contain"
                  style={{
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              <span className="relative z-10 font-bold font-heading text-xl sm:text-2xl leading-none tracking-tight transition-colors duration-200 text-slate-900 dark:text-white">
                바이브코딩
              </span>
            </Link>

            {/* Desktop Navigation - Maximum Contrast */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-1 mx-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-4 py-2 rounded-lg font-bold text-[15px] transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-white bg-blue-600 shadow-lg border-2 border-blue-500'
                      : 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Side - High Contrast CTA */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />

              <Link
                to="/contact"
                className="group relative px-5 py-2 rounded-lg font-bold text-[15px] bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl border-2 border-blue-500 hover:border-blue-400 transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
              >
                <span className="relative z-10">상담 신청</span>
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="flex-shrink-0">
                <ThemeToggle />
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 transition-all duration-200"
                aria-label="메뉴 토글"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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