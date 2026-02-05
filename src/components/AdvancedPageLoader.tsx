import React from 'react';
import { Code, Zap } from 'lucide-react';

interface AdvancedPageLoaderProps {
  message?: string;
  showLogo?: boolean;
}

const AdvancedPageLoader: React.FC<AdvancedPageLoaderProps> = ({
  message = "페이지를 불러오고 있습니다...",
  showLogo = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        {/* 로고 섹션 */}
        {showLogo && (
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Code className="w-12 h-12 text-blue-400 animate-pulse" />
                <Zap className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-bounce" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              바이칼시스템즈
            </h2>
            <p className="text-blue-200 text-sm">
              MVP 개발의 새로운 기준
            </p>
          </div>
        )}

        {/* 로딩 애니메이션 */}
        <div className="mb-6">
          {/* 메인 스피너 */}
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            
            {/* 내부 도트들 */}
            <div className="absolute">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* 진행 바 */}
          <div className="mt-6 w-64 bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* 로딩 메시지 */}
        <div className="space-y-2">
          <p className="text-white font-medium">
            {message}
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* 팁 메시지 */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm opacity-75">
            💡 잠깐! 80+개의 검증된 MVP 프로젝트를 준비하고 있어요
          </p>
        </div>
      </div>

      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default AdvancedPageLoader;