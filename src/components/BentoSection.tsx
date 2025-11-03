import React from 'react';

import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';

interface BentoCardProps {
  size: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ size, children, className = '' }) => {
  const sizeClasses = {
    large: 'bento-large',
    medium: 'bento-medium',
    small: 'bento-small'
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} 
        rounded-3xl p-8 border-2 
        hover:shadow-2xl transition-all duration-500 group cursor-pointer shadow-lg hover:scale-[1.02] animate-fade-in
      `}
    >
      {children}
    </div>
  );
};

const BentoSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900 dark:text-gray-50 tracking-tight drop-shadow-sm animate-fade-in">
          우리의 강점
        </h2>

        <div className="bento-grid">
          {/* Large Card - Main Hero */}
          <BentoCard 
            size="large" 
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-blue-300 dark:border-gray-600"
          >
            <div className="w-20 h-20 mb-8 text-blue-600 dark:text-blue-400 bg-blue-200/50 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center border-2 border-blue-300 dark:border-blue-500">
              <Award className="w-12 h-12" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">
              40+ 검증된 MVP
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed mb-8 font-semibold">
              2024년부터 현재까지 다양한 분야에서 성공적으로 출시된 
              MVP 프로젝트들의 포트폴리오
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-5 py-2 bg-blue-200 dark:bg-blue-700 rounded-full text-sm font-bold text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-600">
                16개 전문분야
              </div>
              <div className="px-5 py-2 bg-green-200 dark:bg-green-700 rounded-full text-sm font-bold text-green-900 dark:text-green-100 border border-green-300 dark:border-green-600">
                평균 2주 개발
              </div>
            </div>
          </BentoCard>

          {/* Medium Card - Statistics */}
          <BentoCard 
            size="medium" 
            className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-green-300 dark:border-gray-600"
          >
              <div className="relative w-full rounded-2xl pt-7 pb-4 px-2 mb-4 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{boxShadow:'0 8px 32px rgba(59,130,246,0.10), 0 1.5px 6px rgba(0,0,0,0.06)'}} />
                <div className="w-16 h-16 mb-8 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-black mb-7 text-gray-900 dark:text-white tracking-tight drop-shadow-lg text-center">성장 지표</h3>
                <div className="space-y-7">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-bold text-gray-700 dark:text-gray-200">완성도</span>
                      <span className="font-black text-xl text-gray-900 dark:text-white whitespace-nowrap">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 border border-gray-300 dark:border-gray-700 flex items-center">
                      <div className="w-full h-4 rounded-full overflow-hidden flex items-center">
                        <div className="relative w-full h-4">
                          <div className="w-full h-4 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-hidden" style={{position:'relative'}}>
                            <div 
                              className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-blue-400 animate-pulse will-change-transform shadow-md"
                              style={{ width: "95%", borderRadius: '2rem' }}
                              ref={el => {
                                if (el) {
                                  console.log('[게이지 디버그] 완성도:', {
                                    width: '95%',
                                    rect: el.getBoundingClientRect(),
                                    left: el.style.left,
                                    top: el.style.top
                                  });
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-base font-bold text-gray-700 dark:text-gray-200">고객 만족도</span>
                      <span className="font-black text-xl text-gray-900 dark:text-white whitespace-nowrap">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4 border border-gray-300 dark:border-gray-700 flex items-center">
                      <div className="w-full h-4 rounded-full overflow-hidden flex items-center">
                        <div className="relative w-full h-4">
                          <div className="w-full h-4 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-hidden" style={{position:'relative'}}>
                            <div 
                              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 animate-pulse will-change-transform shadow-md"
                              style={{ width: "98%", borderRadius: '2rem' }}
                              ref={el => {
                                if (el) {
                                  console.log('[게이지 디버그] 고객만족도:', {
                                    width: '98%',
                                    rect: el.getBoundingClientRect(),
                                    left: el.style.left,
                                    top: el.style.top
                                  });
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </BentoCard>

          {/* Small Card - Team */}
          <BentoCard 
            size="small" 
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-purple-300 dark:border-gray-600 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 text-purple-600 dark:text-purple-400 bg-purple-200/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center border-2 border-purple-300 dark:border-purple-500">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">전문팀</h3>
            <p className="text-base font-bold text-gray-700 dark:text-gray-200">숙련된 개발자들</p>
          </BentoCard>

          {/* Small Card - Speed */}
          <BentoCard 
            size="small" 
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-yellow-300 dark:border-gray-600 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 text-yellow-600 dark:text-yellow-400 bg-yellow-200/50 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center border-2 border-yellow-300 dark:border-yellow-500">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">빠른 개발</h3>
            <p className="text-base font-bold text-gray-700 dark:text-gray-200">평균 2주 완성</p>
          </BentoCard>

          {/* Small Card - Precision */}
          <BentoCard 
            size="small" 
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-indigo-300 dark:border-gray-600 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 text-indigo-600 dark:text-indigo-400 bg-indigo-200/50 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center border-2 border-indigo-300 dark:border-indigo-500">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">정확성</h3>
            <p className="text-base font-bold text-gray-700 dark:text-gray-200">요구사항 100% 반영</p>
          </BentoCard>

          {/* Medium Card - Time */}
          <BentoCard 
            size="medium" 
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-cyan-300 dark:border-gray-600"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 text-cyan-600 dark:text-cyan-400 bg-cyan-200/50 dark:bg-cyan-900/50 rounded-xl flex items-center justify-center border-2 border-cyan-300 dark:border-cyan-500">
                <Clock className="w-9 h-9" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">24/7</div>
                <div className="text-base font-bold text-gray-700 dark:text-gray-200">지원 서비스</div>
              </div>
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">언제든 상담 가능</h3>
            <p className="text-base text-gray-800 dark:text-gray-100 leading-relaxed mb-6 font-semibold">
              프로젝트 전 과정에서 실시간 소통과 피드백을 통해 
              최상의 결과를 보장합니다.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-green-400"></div>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-200">현재 온라인</span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;