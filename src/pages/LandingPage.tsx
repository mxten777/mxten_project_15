import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Rocket, Users } from 'lucide-react';
import BentoSection from '../components/BentoSection';
import StickyElements from '../components/StickyElements';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
  <section id="hero" className="hero min-h-screen flex items-center justify-center relative overflow-hidden morphing-bg particle-bg">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-5xl mx-auto">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-relaxed tracking-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            <span className="block mb-3 sm:mb-4 text-white">체계적으로 검증된</span>
            <span className="block text-yellow-300 font-extrabold">
              35+ 전문 MVP 포트폴리오
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-normal mb-12 sm:mb-14 text-white/95 max-w-3xl mx-auto leading-loose px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            기업솔루션부터 AI기술까지, 16개 전문분야의 체계적이고 실용적인 MVP 개발 경험을 제공합니다
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1"
              >
                <Link 
                  to="/portfolio" 
                  aria-label="포트폴리오 보기"
                  className="inline-flex items-center justify-center w-full px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 min-h-[60px]"
                >
                  포트폴리오 보기 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1"
              >
                <Link 
                  to="/contact" 
                  aria-label="상담 문의하기"
                  className="inline-flex items-center justify-center w-full px-8 py-4 sm:px-10 sm:py-5 border-3 border-white/50 text-white font-bold text-base sm:text-lg rounded-2xl backdrop-blur-sm hover:bg-white/15 transition-all duration-200 min-h-[60px]"
                >
                  상담 문의하기
                </Link>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
  <section id="features" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 sm:mb-20 text-gray-900 dark:text-white leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            왜 바이브 코딩인가요?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {[
              {
                icon: <Zap className="w-12 h-12 text-blue-600 mb-4" />,
                title: "체계적 MVP 개발",
                description: "16개 전문분야 35+ 프로젝트 검증된 개발 방법론을 제공합니다."
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
              <motion.div 
                key={index}
                className="h-full min-h-[320px] sm:min-h-[360px] p-8 sm:p-10 rounded-2xl bg-gray-50 dark:bg-gray-800 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2
                }}
              >
                <div className="flex-grow flex flex-col justify-center">
                  <div className="mb-6">
                    {React.cloneElement(feature.icon, { 
                      className: "w-14 h-14 sm:w-16 sm:h-16 text-blue-600 mb-4 mx-auto" 
                    })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white leading-normal">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-200 leading-loose">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-gray-900 dark:text-white leading-normal text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            검증된 성과
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { number: "35+", label: "완성된 MVP" },
              { number: "15+", label: "성공적 출시" },
              { number: "100+", label: "만족한 고객" },
              { number: "2주", label: "개발 기간" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer h-full"
                initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 20
                }}
              >
                <motion.div 
                  className="relative h-full min-h-[160px] sm:min-h-[180px] p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl border border-gray-200 dark:border-gray-600 flex flex-col justify-center items-center shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 text-center leading-normal">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section id="cta" className="py-24 sm:py-32 bg-gradient-nature dark:bg-gradient-dark-blue border-b border-gray-200 dark:border-gray-700 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-normal text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            당신의 아이디어를 현실로 만들어보세요
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl font-normal text-gray-700 dark:text-gray-200 mb-8 sm:mb-10 leading-loose max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            지금 바로 무료 상담을 받고 MVP 개발 여정을 시작하세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
              <Link 
                to="/contact" 
                aria-label="무료 상담 신청하기"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-base rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <Users className="mr-3 w-6 h-6 sm:w-7 sm:h-7" />
              무료 상담 신청하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Box Section */}
      <div id="bento">
        <BentoSection />
      </div>

      {/* Sticky Elements */}
      <StickyElements />
    </div>
  );
};

export default LandingPage;