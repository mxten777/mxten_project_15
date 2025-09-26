import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Rocket, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            빠른 실험으로 검증된<br />
            <span className="text-yellow-300">20+ 개 MVP 포트폴리오</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            바이브 코딩과 함께 아이디어부터 출시까지, 
            빠르고 효율적인 MVP 개발을 경험해보세요
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              포트폴리오 보기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              상담 문의하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
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
                title: "빠른 MVP 개발",
                description: "아이디어부터 출시까지 최단 시간 내 검증 가능한 제품을 만듭니다."
              },
              {
                icon: <Target className="w-12 h-12 text-purple-600 mb-4" />,
                title: "검증된 방법론",
                description: "20개 이상의 성공적인 MVP 경험으로 검증된 개발 프로세스를 제공합니다."
              },
              {
                icon: <Rocket className="w-12 h-12 text-green-600 mb-4" />,
                title: "시장 출시 지원",
                description: "개발뿐만 아니라 마케팅과 사용자 피드백 수집까지 전체 과정을 지원합니다."
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
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
              { number: "20+", label: "완성된 MVP" },
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
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
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
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
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