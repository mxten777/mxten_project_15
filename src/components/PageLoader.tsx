import React from 'react';

const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-secondary-900 flex items-center justify-center transition-colors duration-300">
    <div className="text-center">
      {/* Advanced Loading Animation */}
      <div className="relative mb-8">
        <div className="w-20 h-20 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin" style={{ animationDuration: '0.8s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Loading Text with Animation */}
      <div className="space-y-2">
        <p className="text-lg font-semibold font-heading text-gray-800 dark:text-gray-200 animate-pulse">
          페이지를 불러오는 중...
        </p>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6 w-64 mx-auto">
        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ width: '100%', animation: 'loading-progress 2s ease-in-out infinite' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default PageLoader;