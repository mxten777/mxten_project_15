import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

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
      {/* Hero Section - 바이브 코딩 시그니처 디자인 */}
      <section 
        id="hero" 
        data-hero-bleed 
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/10"
      >

        {/* Animated Mesh Gradient Background */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full opacity-30 dark:opacity-20 blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle at 30% 40%, #3B82F6 0%, #8B5CF6 45%, #EC4899 70%, transparent 100%)' 
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full opacity-25 dark:opacity-15 blur-[90px]"
          style={{ 
            background: 'radial-gradient(circle at 60% 50%, #06B6D4 0%, #8B5CF6 50%, #6366F1 80%, transparent 100%)' 
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating Tech Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 dark:opacity-30"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
        
        {/* Dynamic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]" 
          style={{ 
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
        />
        
        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
            height: '200px',
          }}
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Main Content - 컴팩트한 레이아웃 */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-10 lg:gap-14 items-center">
            
            {/* Left Column - Content with Stagger Animation */}
            <motion.div 
              className="space-y-5 lg:space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              {/* Badge - 완벽한 가독성 */}
              <motion.div variants={itemVariants}>
                <Badge 
                  variant="default" 
                  size="md" 
                  className="inline-flex bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-700 px-4 py-2 font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <motion.span 
                    className="text-blue-600 dark:text-blue-400"
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
              
              {/* Headline - 컴팩트한 3줄 */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.02em] leading-[1.1] text-center lg:text-left">
                  <motion.span 
                    className="block text-slate-900 dark:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    비즈니스 아이디어를
                  </motion.span>
                  <motion.span 
                    className="block text-blue-600 dark:text-blue-400 mt-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    4주 만에
                  </motion.span>
                  <motion.span 
                    className="block mt-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    실제 제품으로
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Sub-headline - 간결한 메시지 */}
              <motion.div variants={itemVariants}>
                <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-2xl">
                  React·TypeScript·Firebase 글로벌 표준 스택, <span className="text-slate-900 dark:text-white font-semibold">{BUSINESS_GUARANTEES.MVP_WEEKS}주 내 구축</span> 보장.<br className="hidden sm:block" />
                  AI 보조·사람 검증으로 운영 가능한 품질 제공.
                </p>
              </motion.div>
              
              {/* CTA Buttons - 컴팩트 디자인 */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <Link 
                  to={ROUTES.CONTACT}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span 
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    프로젝트 문의하기
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
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                </Link>
                <Link 
                  to={ROUTES.PORTFOLIO} 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    포트폴리오 둘러보기
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* Right Column - 컴팩트 카드 배치 */}
            <motion.div 
              className="relative h-[380px] lg:h-[450px] hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              
              {/* Main Card - Tech Stack (더 세련되게) */}
              <motion.div
                className="absolute top-[3%] right-0 w-72 p-7 bg-white dark:bg-slate-800 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-300/60 dark:shadow-slate-900/60"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30"
                      animate={{
                        rotate: [0, 8, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      ⚡
                    </motion.div>
                    <span className="font-black text-lg text-slate-900 dark:text-white">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Firebase'].map((tech, idx) => (
                      <motion.span 
                        key={tech} 
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-600 dark:text-blue-300 rounded-xl text-sm font-bold border border-blue-200/60 dark:border-blue-700/40"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Speed Card */}
              <motion.div
                className="absolute top-[45%] right-[5%] w-64 p-6 bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-blue-500/15 dark:from-purple-500/25 dark:via-pink-500/25 dark:to-blue-500/25 backdrop-blur-2xl rounded-3xl border-2 border-purple-300/60 dark:border-purple-500/40 shadow-xl"
                animate={{
                  y: [0, 16, 0],
                  rotate: [1, -1, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    4주
                  </motion.div>
                  <p className="text-slate-800 dark:text-slate-200 font-black text-lg">
                    MVP 구축 완료
                  </p>
                  <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* AI Badge */}
              <motion.div
                className="absolute bottom-[6%] right-[12%] w-52 p-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-11 h-11 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg shadow-md shadow-blue-500/30"
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    🤖
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">AI 보조</div>
                    <div className="font-bold text-slate-900 dark:text-white">사람 검증</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Ambient Glow - 더 섬세하게 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-[100px] -z-10" />
              
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 검증된 성과 - 압도적 신뢰 지표 */}
      <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border-2 border-blue-300 dark:border-blue-700">
                🏆 Real Performance
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white tracking-tight">
              검증된 구축 역량
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
              실전 배포와 실제 운영으로 증명한 <span className="text-blue-600 dark:text-blue-400 font-bold">바이브 코딩의 실력</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Card Background with Gradient */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border-2 border-slate-100 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 group-hover:shadow-2xl group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-900/50 transition-all duration-300 overflow-hidden">
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                    
                    {/* Icon with Animation */}
                    <motion.div 
                      className="relative mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10" strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Number with Counter Animation */}
                    <div className="relative mb-5">
                      <motion.span 
                        className="text-7xl md:text-8xl font-black bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      >
                        {stat.number}
                      </motion.span>
                      <motion.span 
                        className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      >
                        {stat.unit}
                      </motion.span>
                    </div>
                    
                    {/* Label */}
                    <div className="relative text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="relative text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {stat.description}
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
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

      {/* 검증된 구축 사례 - Featured Top 3 */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/20 to-blue-300/20 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold border-2 border-purple-300 dark:border-purple-700">
                🚀 Success Stories
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white tracking-tight">
              검증된 구축 사례
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
              제조·SI·공공·SaaS 분야 실제 배포 시스템
            </p>
          </motion.div>

          {/* Featured 3 Case Studies with Enhanced Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: '기업·환경',
                title: '한국환경안전연구소 공식 홈페이지 리뉴얼',
                impact: ['전문성 강화된 UI/UX', '연구 성과 가시성 향상'],
                stack: ['React', 'TypeScript', 'TailwindCSS'],
                link: 'https://ketri-project-01.vercel.app/',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                category: '제조·기업',
                title: '한국코프론 홈페이지',
                impact: ['기업 브랜드 이미지 개선', '제품 소개 최적화'],
                stack: ['React', 'Framer Motion', 'TypeScript'],
                link: 'https://mvp-project-03.vercel.app/',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                category: '교육·학원',
                title: '광연자동차전문학원',
                impact: ['온라인 접수 시스템 구축', '모바일 최적화 완료'],
                stack: ['React', 'Firebase', 'TailwindCSS'],
                link: 'https://gen-project-30.vercel.app/',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Premium Card Container */}
                <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 rounded-3xl p-10 shadow-2xl shadow-slate-300/60 dark:shadow-slate-900/80 border-2 border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-all duration-500 overflow-hidden h-full hover:shadow-3xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 hover:-translate-y-2">
                  
                  {/* Animated Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                  
                  {/* Gradient Overlay on Hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-3xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.08 }}
                  />
                  
                  {/* Premium Category Badge */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold mb-8 bg-gradient-to-r ${project.gradient} text-white shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ✨
                    </motion.span>
                    {project.category}
                  </motion.div>
                  
                  {/* Title with Premium Typography */}
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Impact Metrics with Enhanced Design */}
                  <div className="space-y-4 mb-8">
                    {project.impact.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
                          animate={{
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 6px rgba(34, 197, 94, 0.2)",
                              "0 6px 12px rgba(34, 197, 94, 0.4)",
                              "0 4px 6px rgba(34, 197, 94, 0.2)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.5,
                          }}
                        >
                          <span className="text-white text-xs font-bold">✓</span>
                        </motion.div>
                        <span className="text-slate-700 dark:text-slate-300 font-semibold text-base leading-relaxed">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Tech Stack with Premium Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.stack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-bold border-2 border-slate-200 dark:border-slate-600 shadow-sm"
                        whileHover={{ scale: 1.15, y: -4, borderColor: "#3B82F6" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Premium Link Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 group/btn`}
                    >
                      <span>사례 보기</span>
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
