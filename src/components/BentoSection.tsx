import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';

interface BentoCardProps {
  size: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ size, children, className = '', gradient }) => {
  const sizeClasses = {
    large: 'bento-large',
    medium: 'bento-medium',
    small: 'bento-small'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} 
        rounded-3xl p-6 glass-effect border border-white/20 dark:border-gray-700/50 
        hover:scale-[1.02] transition-all duration-300 group cursor-pointer
        ${gradient || 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900'}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        rotateY: 2,
        rotateX: 2,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
    >
      {children}
    </motion.div>
  );
};

const BentoSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-black font-display text-center mb-16 tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient-primary bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            우리의 강점
          </span>
        </motion.h2>

        <div className="grid-bento">
          {/* Large Card - Main Hero */}
          <BentoCard 
            size="large" 
            gradient="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
            className="text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mb-6 text-yellow-300"
              >
                <Award className="w-full h-full" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black font-display mb-4">
                35+ 검증된 MVP
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                2024년부터 현재까지 다양한 분야에서 성공적으로 출시된 
                MVP 프로젝트들의 포트폴리오
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  16개 전문분야
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  평균 2주 개발
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Medium Card - Statistics */}
          <BentoCard 
            size="medium" 
            gradient="bg-gradient-nature dark:bg-gradient-dark-blue"
            className="text-white"
          >
            <TrendingUp className="w-12 h-12 mb-4 text-green-300" />
            <h3 className="text-2xl font-bold font-heading mb-3">성장 지표</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-80">완성도</span>
                <span className="font-bold">95%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div 
                  className="bg-green-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-80">고객 만족도</span>
                <span className="font-bold">98%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div 
                  className="bg-blue-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
              </div>
            </div>
          </BentoCard>

          {/* Small Card - Team */}
          <BentoCard 
            size="small" 
            gradient="bg-gradient-sunset dark:bg-gradient-dark"
            className="text-white text-center"
          >
            <Users className="w-10 h-10 mx-auto mb-3 text-pink-300" />
            <h3 className="text-xl font-bold font-heading mb-2">전문팀</h3>
            <p className="text-sm opacity-90">숙련된 개발자들</p>
          </BentoCard>

          {/* Small Card - Speed */}
          <BentoCard 
            size="small" 
            gradient="bg-gradient-fire dark:bg-gradient-dark"
            className="text-white text-center"
          >
            <Zap className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="text-xl font-bold font-heading mb-2">빠른 개발</h3>
            <p className="text-sm opacity-90">평균 2주 완성</p>
          </BentoCard>

          {/* Small Card - Precision */}
          <BentoCard 
            size="small" 
            gradient="bg-gradient-space dark:bg-gradient-dark-blue"
            className="text-white text-center"
          >
            <Target className="w-10 h-10 mx-auto mb-3 text-blue-300" />
            <h3 className="text-xl font-bold font-heading mb-2">정확성</h3>
            <p className="text-sm opacity-90">요구사항 100% 반영</p>
          </BentoCard>

          {/* Medium Card - Time */}
          <BentoCard 
            size="medium" 
            gradient="bg-gradient-ocean dark:bg-gradient-dark"
            className="text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-12 h-12 text-blue-300" />
              <div className="text-right">
                <div className="text-3xl font-black font-display">24/7</div>
                <div className="text-sm opacity-80">지원 서비스</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3">언제든 상담 가능</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              프로젝트 전 과정에서 실시간 소통과 피드백을 통해 
              최상의 결과를 보장합니다.
            </p>
            <div className="mt-4 flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs opacity-80">현재 온라인</span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;