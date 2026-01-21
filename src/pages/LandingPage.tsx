import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import HighlightProjects from '../components/HighlightProjects';
import TrustStatements from '../components/TrustStatements';
import CTASection from '../components/CTASection';
import CategoryTabs from '../components/CategoryTabs';
import { Button, Badge, Heading, Text } from '../components/ds';
// Figma Design System Applied

const LandingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('전체');

  return (
    <div>
      {/* Hero Section - 실전 MVP 검증 */}
      <section id="hero" data-hero-bleed className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 animate-gradient-bg"></div>
        
        {/* Glassmorphism overlay layers */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-8 max-w-6xl mx-auto">
          <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-premium-lg">
            <div className="absolute inset-0 rounded-3xl shadow-inner-glow"></div>
            
            {/* Figma: Typography / Heading / H1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8"
            >
              <Heading level="1" className="text-white mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                실전 MVP로 검증된
              </Heading>
              <Heading level="1" color="accent" className="font-extrabold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                웹서비스 구축
              </Heading>
            </motion.div>
            
            {/* Figma: Typography / Body / Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <Text 
                variant="bodyLarge" 
                className="text-white/90 max-w-4xl mx-auto leading-relaxed text-center" 
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
                as="div"
              >
                기업·공공·교육·SaaS까지,<br className="hidden sm:block" />
                빠르게 만들고 실제로 동작하게 합니다.
              </Text>
            </motion.div>
            
            {/* Figma: Components / Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-2xl mx-auto mb-12"
            >
              <Link to="/portfolio" className="flex-1">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  icon={<ArrowRight className="w-6 h-6" />}
                  iconPosition="right"
                >
                  포트폴리오 보기
                </Button>
              </Link>
              
              <Link to="/contact" className="flex-1">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  fullWidth
                >
                  프로젝트 상담하기
                </Button>
              </Link>
            </motion.div>
            
            {/* Figma: Components / Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Badge variant="default" size="md" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                ✅ 80+ 프로젝트
              </Badge>
              <Badge variant="default" size="md" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                🎯 4개 분야
              </Badge>
              <Badge variant="default" size="md" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                ⚡ 4주 완성
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 핵심 강점 3가지 - 숫자로 보여주기 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              검증된 성과
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              실전에서 증명한 바이브 코딩의 실력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, number: '80+', label: '프로젝트', color: 'from-blue-500 to-cyan-500' },
              { icon: Layers, number: '4개', label: '분야', color: 'from-purple-500 to-pink-500' },
              { icon: Zap, number: '4주', label: '완성', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 대표 프로젝트 하이라이트 */}
      <HighlightProjects />

      {/* 카테고리별 필터 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              4개 분야별 전문 프로젝트
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              귀사의 업종에 맞는 포트폴리오를 확인하세요
            </p>
            
            <CategoryTabs 
              selectedCategory={selectedCategory} 
              onCategoryChange={setSelectedCategory}
              showCounts={true}
            />
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              전체 포트폴리오 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 고객 신뢰 문구 - 3줄 */}
      <TrustStatements />

      {/* CTA - 프로젝트 상담하기 */}
      <CTASection />
    </div>
  );
};

export default LandingPage;
