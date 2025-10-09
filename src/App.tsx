import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import CursorFollower from './components/CursorFollower';
import { SkipToContent } from './hooks/useAccessibility';
import { ThemeProvider } from './contexts/ThemeContext';

// Import performance monitoring
// import { performanceMonitor } from './utils/performance';

// 코드 스플리팅을 위한 lazy 로딩 (더 세밀한 청크 분할)
const LandingPage = lazy(() => 
  import('./pages/LandingPage').then(module => ({ default: module.default }))
);
const PortfolioPage = lazy(() => 
  import('./pages/PortfolioPage').then(module => ({ default: module.default }))
);
const MVPDetailPage = lazy(() => 
  import('./pages/MVPDetailPage').then(module => ({ default: module.default }))
);
const ContactPage = lazy(() => 
  import('./pages/ContactPage').then(module => ({ default: module.default }))
);

// 컴포넌트 프리로딩은 성능 최적화를 위해 추후 구현

// 로딩 컴포넌트는 별도 파일로 분리됨

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    // performanceMonitor.init();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 transition-colors duration-300">
        <CursorFollower />
        <SkipToContent />
        <Navbar />
        <main id="main-content" role="main">
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LandingPage />
                  </motion.div>
                </Suspense>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PortfolioPage />
                  </motion.div>
                </Suspense>
              } 
            />
            <Route 
              path="/mvp/:id" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MVPDetailPage />
                  </motion.div>
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContactPage />
                  </motion.div>
                </Suspense>
              } 
            />
          </Routes>
        </AnimatePresence>
        </main>
        
        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;