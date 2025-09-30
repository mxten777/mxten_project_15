import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

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
    { name: '포트폴리오', path: '/portfolio', description: '35+ MVP 프로젝트' },
    { name: '상담 문의', path: '/contact', description: '무료 상담 신청' },
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
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-xl border-b border-gray-100'
            : 'bg-black/30 backdrop-blur-lg border-b border-white/30'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo - 개선된 버전 */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <motion.div
                className="p-1.5 bg-white rounded-xl transition-all duration-300 shadow-lg border border-gray-200 group-hover:scale-110 group-hover:bg-gray-50"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/images/baikal_logo_trans.png" 
                  alt="바이칼 로고" 
                  className="w-10 h-10 object-contain rounded-lg"
                  style={{ 
                    filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl leading-tight ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
                style={{
                  textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)'
                }}>
                  바이브 코딩
                </span>
                <span className={`text-sm font-medium leading-tight ${
                  scrolled ? 'text-blue-600' : 'text-white'
                }`}
                style={{
                  textShadow: scrolled ? 'none' : '1px 1px 3px rgba(0,0,0,0.7)'
                }}>
                  MVP 개발 전문
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - 개선된 버전 */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-3 rounded-xl font-bold transition-all duration-200 ${
                    isActive(item.path)
                      ? scrolled
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                        : 'text-gray-900 bg-white shadow-xl backdrop-blur-sm'
                      : scrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-gray-900 hover:bg-white/95 backdrop-blur-sm shadow-lg'
                  }`}
                  style={{
                    textShadow: !scrolled && !isActive(item.path) ? '1px 1px 3px rgba(0,0,0,0.7)' : 'none'
                  }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className={`absolute -bottom-1 left-2 right-2 h-1 rounded-full ${
                        scrolled ? 'bg-yellow-400' : 'bg-blue-600'
                      }`}
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* CTA Button - 개선된 버전 */}
              <Link
                to="/contact"
                className={`ml-6 px-7 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-xl ${
                  scrolled
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 border-2 border-white/50'
                }`}
              >
                무료 상담 신청
              </Link>
            </div>

            {/* Mobile menu button - 개선된 버전 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-200 shadow-lg ${
                scrolled 
                  ? 'text-gray-700 bg-gray-100 hover:bg-gray-200' 
                  : 'text-white bg-white/30 hover:bg-white/40 backdrop-blur-sm border border-white/50'
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

            {/* Mobile Menu - 개선된 버전 */}
            <motion.div
              className="fixed top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl z-50 md:hidden overflow-hidden border border-gray-100"
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
                          <div className="font-bold text-lg">{item.name}</div>
                          <div className="text-sm text-gray-500 font-medium">{item.description}</div>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                          isActive(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:translate-x-1'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-8 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl"
                  >
                    무료 상담 신청하기
                  </Link>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  className="mt-8 pt-6 px-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="font-bold text-gray-800 mb-2">빠른 연락</div>
                    <div className="space-y-1 text-sm">
                      <div className="font-semibold text-blue-600">contact@vibecoding.com</div>
                      <div className="font-semibold text-blue-600">010-1234-5678</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;