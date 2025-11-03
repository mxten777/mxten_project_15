import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Rocket, Users } from 'lucide-react';
import BentoSection from '../components/BentoSection';
import StickyElements from '../components/StickyElements';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero min-h-screen flex items-center justify-center relative overflow-hidden morphing-bg particle-bg pt-20">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-5xl mx-auto">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-relaxed tracking-normal animate-slide-up"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            <span className="block mb-3 sm:mb-4 text-white animate-fade-in">체계적으로 검증된</span>
            <span className="block text-yellow-300 font-extrabold animate-text-glow" style={{ animationDelay: '0.3s' }}>
              40+개 전문 MVP 포트폴리오
            </span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl font-normal mb-12 sm:mb-14 text-white/95 max-w-3xl mx-auto leading-loose px-4 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            기업솔루션부터 AI기술까지, 16개 전문분야의 체계적이고 실용적인 MVP 개발 경험을 제공합니다
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto animate-bounce-in"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex-1 animate-float" style={{ animationDelay: '1s' }}>
              <Link 
                to="/portfolio" 
                aria-label="포트폴리오 보기"
                className="group inline-flex items-center justify-center w-full px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 min-h-[60px] animate-pulse-glow"
              >
                포트폴리오 보기 
                <div className="ml-2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </div>
            
            <div className="flex-1 animate-float" style={{ animationDelay: '1.2s' }}>
              <Link 
                to="/campaign" 
                aria-label="특별 런칭 이벤트 확인하기"
                className="inline-flex items-center justify-center w-full px-8 py-4 sm:px-10 sm:py-5 border-3 border-white/50 text-white font-bold text-base sm:text-lg rounded-2xl backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 min-h-[60px] animate-shimmer mb-8"
              >
                🎉 런칭 이벤트
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 sm:mb-20 text-gray-900 dark:text-white leading-normal animate-slide-up">
            왜 바이브코딩인가요?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {[
              {
                icon: <Zap className="w-12 h-12 text-blue-600 mb-4" />,
                title: "체계적 MVP 개발",
                description: "16개 전문분야 40+ 프로젝트 검증된 개발 방법론을 제공합니다."
              },
              {
                icon: <Target className="w-12 h-12 text-purple-600 mb-4" />,
                title: "검증된 기술력", 
                description: "React, AI, Python 등 최신 기술스택 실전 프로젝트 경험을 보유합니다."
              },
              {
                icon: <Rocket className="w-12 h-12 text-green-600 mb-4" />,
                title: "전문분야 특화",
                description: "기업솔루션, AI기술, 공공서비스 등 도메인별 전문성을 제공합니다."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group h-full min-h-[320px] sm:min-h-[360px] p-8 sm:p-10 rounded-2xl bg-gray-50 dark:bg-gray-800 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-all duration-500 flex flex-col justify-between animate-scale-in hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex-grow flex flex-col justify-center">
                  <div className="mb-6 animate-bounce-in" style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
                    {React.cloneElement(feature.icon, { 
                      className: `w-14 h-14 sm:w-16 sm:h-16 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 animate-float`,
                      style: { animationDelay: `${index * 0.5}s` }
                    })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white leading-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-200 leading-loose group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-gradient-bg"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-gray-900 dark:text-white leading-normal text-center animate-slide-up">
            검증된 성과
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { number: "40+", label: "완성된 MVP" },
              { number: "15+", label: "성공적 출시" },
              { number: "100+", label: "만족한 고객" },
              { number: "2주", label: "개발 기간" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer h-full animate-scale-in hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-full min-h-[160px] sm:min-h-[180px] p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl border border-gray-200 dark:border-gray-600 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-gray-700 dark:group-hover:to-gray-600 animate-pulse-glow">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400 flex-shrink-0 animate-bounce-in group-hover:scale-110 transition-transform" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 text-center leading-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-b border-gray-200 dark:border-gray-700 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient-bg opacity-60"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-normal text-white animate-slide-up animate-text-glow">
            당신의 아이디어를 현실로 만들어보세요
          </h2>
          <p className="text-lg sm:text-xl font-normal text-white/90 mb-8 sm:mb-10 leading-loose max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            지금 바로 무료 상담을 받고 MVP 개발 여정을 시작하세요
          </p>
          <div className="animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/contact" 
              aria-label="무료 상담 신청하기"
              className="group inline-flex items-center justify-center px-12 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none animate-pulse-glow"
            >
              <Users className="mr-3 w-7 h-7 group-hover:scale-110 transition-transform animate-float" />
              <span className="animate-shimmer">무료 상담 신청하기</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BentoSection & StickyElements */}
      <BentoSection />
      <StickyElements />
    </div>
  );
};

export default LandingPage;