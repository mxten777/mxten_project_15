import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import TrustStatements from '../components/TrustStatements';
import CTASection from '../components/CTASection';
import CategoryTabs from '../components/CategoryTabs';
import { Badge } from '../components/ds';
import { TRUST_METRICS, BUSINESS_GUARANTEES, ROUTES, NEW_PROJECT_CATEGORIES } from '../constants';
// Figma Design System Applied

const LandingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(NEW_PROJECT_CATEGORIES.ALL);

  const trustStats = [
    { 
      number: TRUST_METRICS.TOTAL_PROJECTS, 
      unit: '',
      label: '실전 검증', 
      description: '대기업·공공기관·제조업 실제 배포',
      icon: Briefcase
    },
    { 
      number: TRUST_METRICS.ON_TIME_DELIVERY.replace('%', ''), 
      unit: '%',
      label: '정시 납품', 
      description: `${BUSINESS_GUARANTEES.MVP_WEEKS}주 이내 MVP, ${BUSINESS_GUARANTEES.FULL_SYSTEM_WEEKS}주 이내 Full 시스템`,
      icon: Zap
    },
    { 
      number: TRUST_METRICS.CUSTOMER_SATISFACTION.split('/')[0], 
      unit: '/5.0',
      label: '고객 만족도', 
      description: `유지보수 요청 시 ${TRUST_METRICS.RESPONSE_TIME} 내 대응`,
      icon: Layers
    }
  ] as const;


  return (
    <div>
      {/* Hero Section - 프리미엄 포트폴리오 디자인 */}
      <section id="hero" data-hero-bleed className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-100/70 to-purple-100/50 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-800">

        
        {/* Tech Aurora Background - 강화된 버전 */}
        {/* Glow Orb 1 - Blue */}
        <motion.div
          className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full opacity-30 blur-[100px] md:blur-[150px]"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, #8B5CF6 50%, transparent 70%)' }}
          animate={{
            x: ['-20%', '10%', '-20%'],
            y: ['-10%', '20%', '-10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Glow Orb 2 - Purple/Cyan Mix */}
        <motion.div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full opacity-25 blur-[90px] md:blur-[130px]"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, #8B5CF6 50%, transparent 70%)' }}
          animate={{
            x: ['20%', '-10%', '20%'],
            y: ['10%', '-20%', '10%'],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grid Pattern - 더 미묘하게 */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(rgba(100,100,100,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.05) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}></div>
        
        {/* Main Content - 비대칭 레이아웃 */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 lg:space-y-10">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge 
                  variant="default" 
                  size="md" 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 text-slate-700 dark:text-slate-200 px-5 py-2.5 font-semibold text-sm backdrop-blur-sm"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI 기반 MVP·POC 4주 구축 · 80+ 실전 검증
                  </span>
                </Badge>
              </motion.div>
              
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.08]">
                  <span className="block text-slate-900 dark:text-white">
                    비즈니스 아이디어를 4주 만에
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    실제 제품으로
                  </span>
                </h1>
              </motion.div>
              
              {/* Sub-headline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                  React·TypeScript·Firebase·Vercel 등 글로벌 표준 스택으로{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{BUSINESS_GUARANTEES.MVP_WEEKS}주 내 구축</span>, 
                  AI 보조·사람 검증 프로세스로 운영 가능한 품질을 제공합니다.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to={ROUTES.CONTACT}
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  프로젝트 문의하기
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to={ROUTES.PORTFOLIO} 
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  포트폴리오 둘러보기
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
            </div>
            
            {/* Right Column - 3D Floating Cards */}
            <motion.div 
              className="relative h-[500px] lg:h-[600px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              
              {/* Floating Card 1 - Tech Stack */}
              <motion.div
                className="absolute top-[10%] left-[5%] w-64 p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      ⚡
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Firebase'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Card 2 - Speed */}
              <motion.div
                className="absolute top-[45%] right-[5%] w-72 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-500/30"
                animate={{
                  y: [0, 20, 0],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="space-y-4">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                    4주
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold">
                    MVP 구축 완료
                  </p>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Card 3 - AI Badge */}
              <motion.div
                className="absolute bottom-[15%] left-[15%] w-56 p-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🤖
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">AI 보조</div>
                    <div className="font-bold text-slate-900 dark:text-white">사람 검증</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Glow Effect behind cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 검증된 성과 - 신뢰 지표 강화 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              검증된 구축 역량
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              실전 배포와 실제 운영으로 증명한 바이브 코딩의 실력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center group"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="mb-4">
                    <span className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {stat.label}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 문제-해결 중심 섹션 */}
      <ProblemSolutionSection />

      {/* 검증된 구축 사례 - Featured Top 3 */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              검증된 구축 사례
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              제조·SI·공공·SaaS 분야 실제 배포 시스템
            </p>
          </motion.div>

          {/* Featured 3 Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: '제조·기업',
                title: '바이칼시스템즈 통합 홈페이지',
                impact: ['B2B 문의 월 42% 증가', '페이지 로딩 0.8초 달성'],
                stack: ['React', 'TypeScript', 'TailwindCSS'],
                link: '/portfolio/baical-systems'
              },
              {
                category: '데이터·IT',
                title: '디비인포 리뉴얼',
                impact: ['세션 시간 68% 증가', '이탈률 31% 감소'],
                stack: ['Next.js', 'Framer Motion'],
                link: '/portfolio/dbinfo-renewal'
              },
              {
                category: '공공·SaaS',
                title: 'Vibe Public Hub',
                impact: ['업무 처리 45% 단축', '결재 자동화 90%'],
                stack: ['React', 'Firebase', 'TypeScript'],
                link: '/portfolio/vibe-public-hub'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-xl group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                <div className="space-y-3 mb-6">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  사례 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-lg border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              전체 80+ 프로젝트 보기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

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
              onCategoryChange={(cat) => setSelectedCategory(cat)}
              showCounts={true}
            />
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to={ROUTES.PORTFOLIO}
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
