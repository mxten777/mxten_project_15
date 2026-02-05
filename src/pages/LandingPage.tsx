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

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const trustStats = [
    { 
      number: TRUST_METRICS.TOTAL_PROJECTS, 
      unit: '',
      label: '실전 검증', 
      description: '글로벌표준을 적용한 실제배포',
      icon: Briefcase
    },
    { 
      number: TRUST_METRICS.ON_TIME_DELIVERY.replace('%', ''), 
      unit: '%',
      label: '정시 납품', 
      description: `${String(BUSINESS_GUARANTEES.MVP_WEEKS)}주 이내 MVP, ${String(BUSINESS_GUARANTEES.FULL_SYSTEM_WEEKS)}주 이내 Full 시스템`,
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
      {/* Hero Section - Portfolio/Campaign 스타일 일관성 */}
      <section 
        id="hero" 
        data-hero-bleed 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-900"
      >

        {/* 깔끔한 배경 효과 */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        {/* Main Content - 중앙 정렬 */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center">
            
            {/* Content with Stagger Animation */}
            <motion.div 
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              {/* Badge - 임팩트 디자인 */}
              <motion.div variants={itemVariants}>
                <Badge 
                  variant="default" 
                  size="md" 
                  className="inline-flex bg-white/20 dark:bg-white/10 backdrop-blur-xl border-2 border-white/30 px-6 py-3 font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <motion.span 
                    className="text-white"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ✨ 4주 구축 · 80+ 실전 검증
                  </motion.span>
                </Badge>
              </motion.div>
              
              {/* Headline - 임팩트있는 타이포그래피 */}
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.02em] leading-[1.1]">
                  <motion.span 
                    className="block text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    비즈니스 아이디어를
                  </motion.span>
                  <motion.span 
                    className="block mt-3 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    4주 만에
                  </motion.span>
                  <motion.span 
                    className="block mt-3 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    실제 제품으로
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Sub-headline - 강력한 메시지 */}
              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-50 dark:text-slate-200 leading-relaxed font-medium max-w-4xl mx-auto">
                  <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-yellow-300 font-bold text-base md:text-lg mr-2">React · TypeScript · Firebase</span>
                  글로벌 표준 스택으로
                  <br className="hidden sm:block" />
                  <span className="text-white font-bold">{BUSINESS_GUARANTEES.MVP_WEEKS}주 내 구축</span> 보장.
                  <span className="block mt-4 text-base md:text-lg text-blue-100 dark:text-slate-300">
                    AI 보조 · 사람 검증으로 <span className="text-white font-bold">운영 가능한 품질</span> 제공
                  </span>
                </p>
              </motion.div>
              
              {/* CTA Buttons - 임팩트있는 디자인 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Link 
                  to={ROUTES.CONTACT}
                  className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold bg-white text-blue-700 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <motion.span 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">💬</span>
                    프로젝트 문의하기
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
                <Link 
                  to={ROUTES.PORTFOLIO} 
                  className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold bg-white/10 backdrop-blur-xl text-white rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">🎨</span>
                    포트폴리오 둘러보기
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
              
            </motion.div>
            
        </div>
      </section>

      {/* 검증된 성과 - 프리미엄 신뢰 지표 */}
      <section className="relative py-40 bg-gradient-to-b from-purple-50/50 via-pink-50/40 to-fuchsia-50/30 dark:from-purple-950/40 dark:via-fuchsia-950/30 dark:to-slate-900 border-t-2 border-purple-200 dark:border-purple-900/50 overflow-hidden">
        
        {/* Enhanced Background Accents */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-400/30 via-fuchsia-500/30 to-pink-400/30 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-pink-400/20 via-fuchsia-500/20 to-purple-400/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-base font-black border-2 border-white/30 shadow-xl shadow-blue-500/30">
                🏆 검증된 실력
              </span>
            </motion.div>
            <motion.h2 
              className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              실전에서 증명한 역량
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              실제 배포와 운영으로 검증된 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-black">기술력</span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 80 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="relative group"
                >
                  {/* Premium Card with Glass Effect */}
                  <div className="relative bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-12 shadow-2xl shadow-slate-300/60 dark:shadow-slate-900/80 border-2 border-slate-200/50 dark:border-slate-700/50 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:shadow-3xl group-hover:shadow-blue-300/40 dark:group-hover:shadow-blue-900/60 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                    
                    {/* Animated Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                      whileHover={{
                        background: [
                          'linear-gradient(135deg, rgba(59,130,246,0) 0%, rgba(168,85,247,0) 50%, rgba(236,72,153,0) 100%)',
                          'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.1) 100%)'
                        ],
                      }}
                    />
                    
                    {/* Icon with Premium Animation */}
                    <motion.div 
                      className="relative mb-8 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 dark:from-blue-600 dark:via-purple-700 dark:to-pink-700 text-white shadow-2xl shadow-blue-500/40 group-hover:shadow-blue-500/60"
                      whileHover={{ 
                        rotate: [0, -15, 15, -15, 0],
                        scale: [1, 1.1, 1.1, 1.1, 1],
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12" strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Number with Enhanced Animation */}
                    <div className="relative mb-6">
                      <motion.span 
                        className="text-8xl md:text-9xl font-black bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg"
                        initial={{ scale: 0.3, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                      >
                        {stat.number}
                      </motion.span>
                      <motion.span 
                        className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                        initial={{ scale: 0.3, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 + 0.4, type: "spring", stiffness: 100 }}
                      >
                        {stat.unit}
                      </motion.span>
                    </div>
                    
                    {/* Label with Gradient */}
                    <div className="relative text-3xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
                      {stat.label}
                    </div>
                    
                    {/* Description with Better Typography */}
                    <div className="relative text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                      {stat.description}
                    </div>
                    
                    {/* Animated Bottom Accent */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-3xl"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                    
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 문제-해결 중심 섹션 */}
      <ProblemSolutionSection />

      {/* 검증된 구축 사례 - 프리미엄 Featured */}
      <section className="py-32 bg-gradient-to-b from-cyan-50/50 via-sky-50/40 to-blue-50/30 dark:from-cyan-950/40 dark:via-sky-950/30 dark:to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Animation */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/30 via-sky-400/30 to-blue-400/30 dark:from-cyan-600/20 dark:via-sky-600/20 dark:to-blue-600/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-400/20 to-cyan-400/20 dark:from-sky-600/15 dark:to-cyan-600/15 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-base font-black border-2 border-white/30 shadow-xl shadow-purple-500/30">
                🚀 성공 사례
              </span>
            </motion.div>
            <motion.h2 
              className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              검증된 구축 사례
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-semibold leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              제조 · SI · 공공 · SaaS 분야 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-black">실제 배포 시스템</span>
            </motion.p>
          </motion.div>

          {/* Featured 3 Case Studies - 프리미엄 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {[
              {
                category: '기업·환경',
                title: '한국환경안전연구소 공식 홈페이지 리뉴얼',
                impact: ['전문성 강화된 UI/UX', '연구 성과 가시성 향상'],
                stack: ['React', 'TypeScript', 'TailwindCSS'],
                link: 'https://ketri-project-01.vercel.app/',
                gradient: 'from-green-500 to-emerald-500',
                icon: '🏢'
              },
              {
                category: '제조·기업',
                title: '한국코프론 홈페이지',
                impact: ['기업 브랜드 이미지 개선', '제품 소개 최적화'],
                stack: ['React', 'Framer Motion', 'TypeScript'],
                link: 'https://mvp-project-03.vercel.app/',
                gradient: 'from-blue-500 to-cyan-500',
                icon: '🏭'
              },
              {
                category: '교육·학원',
                title: '광연자동차전문학원',
                impact: ['온라인 접수 시스템 구축', '모바일 최적화 완료'],
                stack: ['React', 'Firebase', 'TailwindCSS'],
                link: 'https://gen-project-30.vercel.app/',
                gradient: 'from-purple-500 to-pink-500',
                icon: '🎓'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 80 }}
                whileHover={{ y: -16, scale: 1.03 }}
                className="group relative"
              >
                {/* 프리미엄 카드 컨테이너 */}
                <div className="relative bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-12 shadow-2xl shadow-slate-400/40 dark:shadow-slate-950/60 border-2 border-slate-200/50 dark:border-slate-700/50 group-hover:border-transparent transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
                  
                  {/* 호버 시 글로우 효과 */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`}></div>
                  
                  {/* 그라데이션 오버레이 */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-3xl`}
                    whileHover={{ opacity: 0.12 }}
                  />
                  
                  {/* 상단 아이콘 */}
                  <motion.div
                    className="mb-6 text-5xl"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* 프리미엄 카테고리 배지 */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-base font-black mb-8 bg-gradient-to-r ${project.gradient} text-white shadow-xl`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  >
                    {project.category}
                  </motion.div>
                  
                  {/* 타이틀 프리미엄 타이포그래피 */}
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-10 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </h3>
                  
                  {/* 임팩트 지표 강화 디자인 */}
                  <div className="space-y-5 mb-10">
                    {project.impact.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800/30 border-2 border-slate-200 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-lg"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.15, type: "spring", stiffness: 100 }}
                        whileHover={{ x: 8, scale: 1.03 }}
                      >
                        <motion.div
                          className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl`}
                          animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: idx * 0.5,
                          }}
                        >
                          <span className="text-white text-base font-black">✓</span>
                        </motion.div>
                        <span className="text-slate-800 dark:text-slate-200 font-bold text-lg leading-relaxed">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Tech Stack 프리미엄 배지 */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.stack.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className={`px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-sm font-black border-2 border-white/20 shadow-lg`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        whileHover={{ 
                          scale: 1.2, 
                          y: -6,
                          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* 프리미엄 링크 버튼 */}
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r ${project.gradient} text-white font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group/btn border-2 border-white/30`}
                    >
                      <span>사례 상세보기</span>
                      <motion.div
                        animate={{
                          x: [0, 6, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.div>
                    </a>
                  </motion.div>
                  
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button with Animation */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to={ROUTES.PORTFOLIO}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                전체 프로젝트 보기
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 카테고리별 필터 섹션 */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 via-green-50/40 to-teal-50/30 dark:from-emerald-950/40 dark:via-green-950/30 dark:to-slate-900">
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
              onCategoryChange={(cat) => { setSelectedCategory(cat); }}
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
