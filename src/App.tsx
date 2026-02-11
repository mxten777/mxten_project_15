import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import ErrorBoundary from './components/ErrorBoundary';
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
const CampaignPage = lazy(() => 
  import('./pages/CampaignPage').then(module => ({ default: module.default }))
);
const NotFoundPage = lazy(() => 
  import('./pages/NotFoundPage').then(module => ({ default: module.default }))
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
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <SkipToContent />
          <Navbar />
        <main id="main-content" role="main">
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <LandingPage />
                </div>
              </Suspense>
            } 
          />
          <Route 
            path="/portfolio" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <PortfolioPage />
                </div>
              </Suspense>
            } 
          />
          <Route 
            path="/portfolio/:slug" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <MVPDetailPage />
                </div>
              </Suspense>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <ContactPage />
                </div>
              </Suspense>
            } 
          />
          <Route 
            path="/campaign" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <CampaignPage />
                </div>
              </Suspense>
            } 
          />
          {/* 404 Catch-all Route */}
          <Route 
            path="*" 
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="animate-fade-in">
                  <NotFoundPage />
                </div>
              </Suspense>
            } 
          />
        </Routes>
        </main>
        
        <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;