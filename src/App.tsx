import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SkipToContent } from './hooks/useAccessibility';

// Import performance monitoring
import { performanceMonitor } from './utils/performance';

// 코드 스플리팅을 위한 lazy 로딩
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const MVPDetailPage = lazy(() => import('./pages/MVPDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// 로딩 컴포넌트
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
      <p className="text-white text-lg font-semibold">페이지 로딩중...</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    performanceMonitor;
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
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
  );
}

export default App;