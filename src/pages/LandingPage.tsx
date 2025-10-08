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
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-display font-display font-black mb-6 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            체계적으로 검증된<br />
            <span className="text-gradient-rainbow bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-pulse">
              35+ 전문 MVP 포트폴리오
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-body font-medium mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🏢 기업솔루션부터 🤖 AI기술까지, 16개 전문분야의 
            <br />체계적이고 실용적인 MVP 개발 경험을 제공합니다
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
              >
                <Link 
                  to="/portfolio" 
                  aria-label="포트폴리오 보기"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 font-bold font-heading rounded-2xl shadow-xl magnetic-hover shimmer-effect group"
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
              >
                <Link 
                  to="/contact" 
                  aria-label="상담 문의하기"
                  className="inline-flex items-center px-8 py-4 glass-effect border-2 border-white/30 text-white font-bold font-heading rounded-2xl shadow-xl hover:border-white/50 transition-all duration-300"
                >
                  상담 문의하기
                </Link>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
  <section id="features" className="py-20 bg-gradient-ocean dark:bg-gradient-dark border-b border-gray-200 dark:border-gray-700 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-black font-display text-center mb-12 text-gray-800 dark:text-white tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient-primary bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              왜 바이브 코딩인가요?
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-blue-600 mb-4" />,
                title: "체계적인 MVP 개발",
                description: "16개 전문분야 35+ 프로젝트로 검증된 체계적인 개발 방법론을 제공합니다."
              },
              {
                icon: <Target className="w-12 h-12 text-purple-600 mb-4" />,
                title: "검증된 기술력",
                description: "React, AI, Python 등 최신 기술스택으로 구축된 실전 프로젝트 경험을 보유합니다."
              },
              {
                icon: <Rocket className="w-12 h-12 text-green-600 mb-4" />,
                title: "전문분야 특화",
                description: "기업솔루션, AI기술, 공공서비스 등 다양한 도메인별 전문성을 제공합니다."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="card-3d p-8 rounded-2xl glass-effect text-center group cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div 
                  className="group-hover:animate-bounce-gentle"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold font-heading mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-body leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 morphing-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-black font-display mb-12 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              검증된 성과
            </span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "35+", label: "완성된 MVP" },
              { number: "15+", label: "성공적 출시" },
              { number: "100+", label: "만족한 고객" },
              { number: "2주", label: "평균 개발 기간" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
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
                  scale: 1.1,
                  rotateY: 10,
                  z: 50
                }}
              >
                <motion.div 
                  className="relative p-6 glass-effect rounded-2xl border border-white/20"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <motion.div 
                    className="text-6xl md:text-7xl font-black font-display mb-3 text-gradient bg-gradient-to-br from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent tracking-tighter"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.5)",
                        "0 0 20px rgba(255, 255, 255, 0.8)",
                        "0 0 10px rgba(255, 255, 255, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-lg font-body font-bold text-white/90 tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section id="cta" className="py-20 bg-gradient-nature dark:bg-gradient-dark-blue border-b border-gray-200 dark:border-gray-700 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient-primary bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              당신의 아이디어를 현실로 만들어보세요
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl font-body font-medium text-gray-600 mb-8 leading-relaxed tracking-wide max-w-3xl mx-auto"
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <Users className="mr-2 w-5 h-5" />
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