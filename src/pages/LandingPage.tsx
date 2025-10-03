import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Rocket, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
  <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-presentation">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            체계적으로 검증된<br />
            <span className="text-yellow-300">35+ 전문 MVP 포트폴리오</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
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
              <Link 
                to="/portfolio" 
                aria-label="포트폴리오 보기"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-2xl shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              포트폴리오 보기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
              <Link 
                to="/contact" 
                aria-label="상담 문의하기"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl shadow-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              상담 문의하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
  <section className="py-20 bg-gradient-radial from-presentation-bg via-presentation-card to-presentation-light border-b border-gray-200 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            왜 바이브 코딩인가요?
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
                className="p-8 rounded-lg bg-gray-50 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold font-heading mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "35+", label: "완성된 MVP" },
              { number: "15+", label: "성공적 출시" },
              { number: "100+", label: "만족한 고객" },
              { number: "2주", label: "평균 개발 기간" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-radial from-presentation-bg via-presentation-card to-presentation-light border-b border-gray-200 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            당신의 아이디어를 현실로 만들어보세요
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
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
    </div>
  );
};

export default LandingPage;