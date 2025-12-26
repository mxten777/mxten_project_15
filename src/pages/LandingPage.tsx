import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Rocket, Users } from 'lucide-react';
import BentoSection from '../components/BentoSection';
import StickyElements from '../components/StickyElements';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Premium 3D/Glassmorphism */}
      <section id="hero" data-hero-bleed className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated gradient background with mesh effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 animate-gradient-bg"></div>
        
        {/* Glassmorphism overlay layers */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Content with glassmorphism card */}
        <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-6xl mx-auto">
          {/* Glassmorphism card container */}
          <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-premium-lg">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-inner-glow"></div>
            
            <h1 
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight animate-slide-up"
            >
              <span className="block mb-4 text-white animate-fade-in" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)' }}>
                체계적으로 검증된
              </span>
              <span className="block text-yellow-300 font-extrabold animate-shimmer" style={{ 
                animationDelay: '0.3s',
                textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.3)'
              }}>
                40+개 전문 MVP 포트폴리오
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl font-medium mb-12 sm:mb-14 text-white max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in"
              style={{ 
                animationDelay: '0.6s',
                textShadow: '0 2px 6px rgba(0,0,0,0.5)'
              }}
            >
              기업솔루션부터 AI기술까지, <span className="font-bold text-yellow-300" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>16개 전문분야</span>의<br className="hidden sm:block" />
              체계적이고 실용적인 MVP 개발 경험을 제공합니다
            </p>
            
            {/* Premium CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto animate-bounce-in"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="flex-1 animate-float" style={{ animationDelay: '1s' }}>
                <Link 
                  to="/portfolio" 
                  aria-label="포트폴리오 보기"
                  className="group relative inline-flex items-center justify-center w-full px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-400 min-h-[70px] overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10">포트폴리오 보기</span>
                  <div className="relative z-10 ml-3 animate-float" style={{ animationDelay: '1.5s' }}>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
              
              <div className="flex-1 animate-float" style={{ animationDelay: '1.2s' }}>
                <Link 
                  to="/campaign" 
                  aria-label="특별 런칭 이벤트 확인하기"
                  className="group relative inline-flex items-center justify-center w-full px-10 py-5 sm:px-12 sm:py-6 bg-white/10 backdrop-blur-xl text-white font-bold text-base sm:text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-400 min-h-[70px] shadow-glass"
                >
                  <span className="text-2xl mr-2 animate-bounce-gentle">🎉</span>
                  <span>런칭 이벤트</span>
                </Link>
              </div>
            </div>
            
            {/* Floating stats badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              {[
                { icon: '✅', text: '40+개 리뉴얼 완료' },
                { icon: '🚀', text: '평균 1-2주 개발' },
                { icon: '🎯', text: '100% 성공 배포' },
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-sm sm:text-base font-semibold shadow-glass hover:bg-white/20 hover:scale-102 transition-all duration-300"
                  style={{ animationDelay: `${1.6 + index * 0.2}s` }}
                >
                  <span className="mr-2">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
              <div className="w-1.5 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
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