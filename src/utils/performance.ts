// 성능 메트릭 측정 유틸리티

export interface PerformanceMetrics {
  FCP: number; // First Contentful Paint
  LCP: number; // Largest Contentful Paint
  FID: number; // First Input Delay
  CLS: number; // Cumulative Layout Shift
  TTFB: number; // Time to First Byte
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics() {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.FCP = fcpEntry.startTime;
        this.logMetric('FCP', fcpEntry.startTime);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.LCP = lastEntry.startTime;
      this.logMetric('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.FID = entry.processingStart - entry.startTime;
        this.logMetric('FID', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.CLS = clsValue;
      this.logMetric('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.TTFB = navigation.responseStart - navigation.requestStart;
      this.logMetric('TTFB', navigation.responseStart - navigation.requestStart);
    });
  }

  private logMetric(name: string, value: number) {
    if (import.meta.env.DEV) {
      console.log(`🚀 ${name}: ${Math.round(value)}ms`);
    }
    
    // 프로덕션에서는 Analytics로 전송
    if (import.meta.env.PROD && (window as any).gtag) {
      (window as any).gtag('event', 'web_vital', {
        name,
        value: Math.round(value),
        event_category: 'Performance'
      });
    }
  }

  getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  // 번들 크기 분석
  static analyzeBundleSize() {
    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const jsFiles = entries.filter(entry => entry.name.endsWith('.js'));
    const cssFiles = entries.filter(entry => entry.name.endsWith('.css'));
    
    const totalJSSize = jsFiles.reduce((total, file) => total + (file.transferSize || 0), 0);
    const totalCSSSize = cssFiles.reduce((total, file) => total + (file.transferSize || 0), 0);
    
    console.log(`📦 JavaScript 번들 크기: ${(totalJSSize / 1024).toFixed(2)}KB`);
    console.log(`🎨 CSS 번들 크기: ${(totalCSSSize / 1024).toFixed(2)}KB`);
    
    return {
      jsSize: totalJSSize,
      cssSize: totalCSSSize,
      totalSize: totalJSSize + totalCSSSize
    };
  }

  // 메모리 사용량 모니터링
  static monitorMemoryUsage() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log(`🧠 메모리 사용량: ${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB`);
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
    return null;
  }
}

// 전역 성능 모니터 인스턴스
export const performanceMonitor = new PerformanceMonitor();

// 개발 환경에서 성능 분석 도구
if (import.meta.env.DEV) {
  // 5초 후 번들 크기 분석
  setTimeout(() => {
    PerformanceMonitor.analyzeBundleSize();
    PerformanceMonitor.monitorMemoryUsage();
  }, 5000);
}