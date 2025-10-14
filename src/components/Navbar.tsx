import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: '포트폴리오', path: '/portfolio', description: '28+ MVP 프로젝트' },
    { name: '🎉 캠페인', path: '/campaign', description: '특별 런칭 이벤트' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        className={`fixed w-full left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white dark:bg-secondary-900 shadow-xl border-b border-gray-100 dark:border-gray-700'
            : 'bg-black/30 dark:bg-black/50 backdrop-blur-lg border-b border-white/30 dark:border-white/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0"
              onClick={closeMenu}
            >
              <motion.div
                className="p-3 bg-white rounded-lg transition-all duration-300 shadow-md border border-gray-200 group-hover:scale-105 group-hover:bg-gray-50"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/images/baikal_logo_trans.png" 
                  alt="바이칼 로고" 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain rounded-md"
                  style={{ 
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </motion.div>
              <div className="flex flex-col ml-3">
                <span className={`font-bold font-heading text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight ${
                  scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}
                style={{
                  textShadow: scrolled ? 'none' : '2px 2px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.5)'
                }}>
                  바이브 코딩
                </span>
                <span className={`text-sm sm:text-base font-semibold font-sans leading-tight tracking-wide ${
                  scrolled ? 'text-blue-600 dark:text-blue-400' : 'text-blue-100'
                }`}
                style={{
                  textShadow: scrolled ? 'none' : '1px 1px 4px rgba(0,0,0,0.8)'
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
                  className={`relative px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                    isActive(item.path)
                      ? scrolled
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                        : 'text-blue-900 bg-white/95 backdrop-blur-sm shadow-lg border border-white/50'
                      : scrolled
                        ? 'text-gray-800 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        : 'text-white hover:bg-white/25 backdrop-blur-sm border border-white/30'
                  }`}
                  style={{
                    textShadow: !scrolled && !isActive(item.path) ? '1px 1px 3px rgba(0,0,0,0.7)' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side - 테마 토글과 CTA */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <ThemeToggle />
              
              <Link
                to="/contact"
                className={`px-8 py-3 rounded-xl font-bold text-base shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  scrolled
                    ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 shadow-blue-200 dark:shadow-blue-900/50'
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
                <ThemeToggle />
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
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              </button>
            </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu - 간소화된 버전 */}
            <motion.div
              className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl z-50 md:hidden overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-8">
                {/* Mobile Navigation Items */}
                <div className="space-y-2 px-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 group ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-2 border-blue-200'
                            : 'text-gray-700 hover:bg-gray-50 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex-1">
                          <div className="font-bold font-heading text-lg">{item.name}</div>
                          <div className="text-sm text-gray-500 font-medium font-sans">{item.description}</div>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                          isActive(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:translate-x-1'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}

                  {/* 상담 문의 추가 (모바일 전용) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Link
                      to="/contact"
                      onClick={closeMenu}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 group text-gray-700 hover:bg-gray-50 border-2 border-transparent"
                    >
                      <div className="flex-1">
                        <div className="font-bold font-heading text-lg">상담 문의</div>
                        <div className="text-sm text-gray-500 font-medium font-sans">무료 상담 신청</div>
                      </div>
                      <ChevronRight className="w-5 h-5 transition-transform duration-200 text-gray-400 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>



                {/* Mobile Contact Info */}
                <motion.div
                  className="mt-8 pt-6 px-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="font-bold font-heading text-gray-800 mb-2">빠른 연락</div>
                    <div className="space-y-1 text-sm">
                      <div className="font-semibold font-sans text-blue-600">contact@vibecoding.com</div>
                      <div className="font-semibold font-sans text-blue-600">010-1234-5678</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-18 md:h-20" />
    </>
  );
};

export default Navbar;