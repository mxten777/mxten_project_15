import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Layers, Zap, Code2, Palette, Server, Shield, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import TrustStatements from '../components/TrustStatements';
import CTASection from '../components/CTASection';
import CategoryTabs from '../components/CategoryTabs';
import { TRUST_METRICS, BUSINESS_GUARANTEES, ROUTES, NEW_PROJECT_CATEGORIES } from '../constants';

// Premium v2 - 2026.02

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

// ─── Typing effect hook ───────────────────────────────────────────────────────
function useTypingEffect(words: string[], speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx] ?? '';
    const delay = deleting
      ? speed / 2
      : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── AnimatedCounter component ────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  const animate = useCallback((time: number) => {
    if (!startTime.current) startTime.current = time;
    const elapsed = time - startTime.current;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    setCount(Math.floor(eased * target));
    if (progress < 1) rafRef.current = requestAnimationFrame(animate);
  }, [target, duration]);

  useEffect(() => {
    if (inView) {
      startTime.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      const id = rafRef.current;
      if (id !== undefined) cancelAnimationFrame(id);
    };
  }, [inView, animate]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

// ─── Hero particles ───────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  top: Math.random() * 100,
  left: Math.random() * 100,
  dur: (Math.random() * 8 + 5).toFixed(1),
  delay: (Math.random() * 6).toFixed(1),
  opacity: (Math.random() * 0.35 + 0.15).toFixed(2),
}));

const LandingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(NEW_PROJECT_CATEGORIES.ALL);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const typedWord = useTypingEffect(['스타트업 MVP', '기업 홈페이지', 'SaaS 플랫폼', 'AI 서비스', '예약 시스템']);

  const trustStats = [
    { number: 80, suffix: '+', label: '실전 검증 프로젝트', description: '글로벌 표준을 적용한 실제 배포', icon: Briefcase, color: 'from-indigo-500 to-violet-500' },
    { number: 100, suffix: '%', label: '정시 납품률', description: `${String(BUSINESS_GUARANTEES.MVP_WEEKS)}주 이내 MVP 완성`, icon: Zap, color: 'from-emerald-500 to-teal-500' },
    { number: 4.9, suffix: '/5.0', label: '고객 만족도', description: `${TRUST_METRICS.RESPONSE_TIME} 내 대응`, icon: Layers, color: 'from-amber-500 to-orange-500', isFloat: true },
  ] as const;

  const techCategories = [
    { icon: Code2, title: 'Frontend', items: ['React 19', 'TypeScript 5.8', 'Vite 7.1'], accent: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900/50', iconBg: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' },
    { icon: Palette, title: 'UI/UX', items: ['TailwindCSS 3.4', 'Framer Motion 12', 'Lucide Icons'], accent: 'bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-900/50', iconBg: 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400' },
    { icon: Server, title: 'Backend', items: ['Firebase Firestore', 'Firebase Analytics', 'Vercel CDN'], accent: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50', iconBg: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400' },
    { icon: Shield, title: 'Quality', items: ['Vitest', 'ESLint 9', 'TypeScript Strict'], accent: 'bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50', iconBg: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' },
  ];

  const caseStudies = [
    { category: '기업·환경', title: '한국환경안전연구소', subtitle: '공식 홈페이지 리뉴얼', impact: ['전문성 강화 UI/UX', '연구 성과 가시성 향상'], stack: ['React', 'TypeScript', 'TailwindCSS'], link: 'https://ketri-project-01.vercel.app/', emoji: '🏢', accentColor: 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400' },
    { category: '제조·기업', title: '한국코프론', subtitle: '기업 홈페이지', impact: ['브랜드 이미지 개선', '제품 소개 최적화'], stack: ['React', 'Framer Motion', 'TypeScript'], link: 'https://mvp-project-03.vercel.app/', emoji: '🏭', accentColor: 'border-indigo-200 dark:border-indigo-800 hover:border-indigo-400' },
    { category: '교육·학원', title: '광연자동차전문학원', subtitle: '온라인 학습 플랫폼', impact: ['온라인 접수 시스템', '모바일 최적화 완료'], stack: ['React', 'Firebase', 'TailwindCSS'], link: 'https://gen-project-30.vercel.app/', emoji: '🎓', accentColor: 'border-violet-200 dark:border-violet-800 hover:border-violet-400' },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">

      {/* ===== Hero Section — Parallax + Typing + Particles ===== */}
      <section
        ref={heroRef}
        id="hero"
        data-hero-bleed
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-950"
      >
        {/* Parallax background blobs */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[700px] h-[700px] bg-violet-400/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-[160px]" />
          <div className="absolute top-3/4 right-1/3 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map(p => (
            <div
              key={p.id}
              className="hero-particle absolute rounded-full bg-white"
              style={{
                width: p.size,
                height: p.size,
                top: `${p.top}%`,
                left: `${p.left}%`,
                opacity: Number(p.opacity),
                '--dur': `${p.dur}s`,
                '--delay': `${p.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center py-32"
        >
          <motion.div initial="hidden" animate="visible" className="space-y-8">

            {/* Pill badge */}
            <motion.div custom={0} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/95 text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-amber-300" />
                4주 구축 · 80+ 실전 검증
              </span>
            </motion.div>

            {/* Headline with typing */}
            <motion.div custom={1} variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">비즈니스 아이디어를</span>
                <br />
                <span className="text-gradient-animated">4주 만에</span>
                <br />
                <span className="text-white">실제 </span>
                <span className="relative inline-block">
                  <span className="text-amber-200">{typedWord}</span>
                  <span className="typing-cursor text-amber-200" />
                </span>
                <span className="text-white">으로</span>
              </h1>
            </motion.div>

            {/* Tech pills */}
            <motion.div custom={2} variants={fadeUp} className="flex flex-wrap justify-center gap-3">
              {['React 19', 'TypeScript 5.8', 'Firebase', 'Framer Motion'].map((t) => (
                <span key={t} className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white font-medium text-sm">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Sub message */}
            <motion.p custom={3} variants={fadeUp} className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed">
              글로벌 표준 기술 스택으로{' '}
              <span className="text-amber-200 font-bold">{BUSINESS_GUARANTEES.MVP_WEEKS}주 내 구축 보장</span>
              <br className="hidden sm:block" />
              AI 보조 · 사람 검증으로 운영 가능한 품질
            </motion.p>

            {/* Mini stats in hero */}
            <motion.div custom={3.5} variants={fadeUp} className="hidden sm:flex justify-center gap-8 py-2">
              {[
                { val: '80+', lbl: '완성 프로젝트' },
                { val: '4주', lbl: '평균 구축 기간' },
                { val: '100%', lbl: '납품 성공률' },
              ].map(s => (
                <div key={s.lbl} className="text-center">
                  <div className="text-2xl font-extrabold text-white">{s.val}</div>
                  <div className="text-xs text-white/60 mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to={ROUTES.CONTACT}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-indigo-700 rounded-2xl font-bold text-base shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                프로젝트 문의하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={ROUTES.PORTFOLIO}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-base border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                포트폴리오 보기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Wave bottom */}
        <div className="wave-section-top absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-slate-50 dark:fill-slate-900">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
          </svg>
        </div>
      </section>

      {/* ===== Tech Stack — Clean Cards ===== */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 border border-indigo-100 dark:border-indigo-900/50">
              기술 스택
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              검증된 글로벌 표준 기술
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              안정성과 확장성이 보장된 최신 기술로 개발합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl p-6 border ${cat.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${cat.iconBg} mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative bg-white dark:bg-slate-950 -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-slate-50 dark:fill-slate-900">
          <path d="M1440,0 C1080,60 360,0 0,60 L0,0 Z"/>
        </svg>
      </div>

      {/* ===== Trust Stats — Animated Counter ===== */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-4 border border-violet-100 dark:border-violet-900/50">
              검증된 성과
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              실전에서 증명한 역량
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              실제 배포와 운영으로 입증된 기술력과 신뢰
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group text-center"
                >
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 border border-slate-100 dark:border-slate-800 card-glow hover:-translate-y-1 transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Animated Number */}
                    <div className="mb-3 flex items-end justify-center gap-1">
                      <span className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-none">
                        {'isFloat' in stat && stat.isFloat
                          ? '4.9'
                          : <AnimatedCounter target={stat.number as number} duration={1600} />
                        }
                      </span>
                      <span className="text-2xl font-bold text-slate-400 dark:text-slate-500 mb-1">{stat.suffix}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{stat.label}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mini progress indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'React 사용률', value: 100 },
              { label: 'TypeScript 적용률', value: 94 },
              { label: 'TailwindCSS 사용률', value: 88 },
              { label: '모바일 최적화', value: 100 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="2.5" className="dark:stroke-slate-800" />
                    <motion.circle
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      whileInView={{ strokeDashoffset: 100 - item.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1"/>
                        <stop offset="100%" stopColor="#a78bfa"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">{item.value}%</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Problem-Solution ===== */}
      <ProblemSolutionSection />

      {/* Wave before case studies */}
      <div className="relative bg-slate-50 dark:bg-slate-900 -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14 fill-white dark:fill-slate-950">
          <path d="M0,0 C480,60 960,0 1440,60 L1440,0 Z"/>
        </svg>
      </div>

      {/* ===== Case Studies — Soft Cards ===== */}
      <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 border border-emerald-100 dark:border-emerald-900/50">
              성공 사례
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              검증된 구축 사례
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              다양한 산업 분야에서 실제 운영 중인 시스템
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className={`bg-white dark:bg-slate-900 rounded-2xl p-8 border ${project.accentColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col card-glow`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{project.emoji}</span>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium">{project.subtitle}</p>

                  {/* Impact */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {project.impact.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link"
                  >
                    사례 보기
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={ROUTES.PORTFOLIO}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-base shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              전체 프로젝트 보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wave before category tabs */}
      <div className="relative bg-white dark:bg-slate-950 -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-14 fill-slate-50 dark:fill-slate-900">
          <path d="M1440,0 C960,60 480,0 0,60 L0,0 Z"/>
        </svg>
      </div>

      {/* ===== Category Tabs ===== */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              분야별 <span className="text-gradient-animated">전문 프로젝트</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              귀사의 업종에 맞는 포트폴리오를 확인하세요
            </p>

            <CategoryTabs
              selectedCategory={selectedCategory}
              onCategoryChange={(cat) => { setSelectedCategory(cat); }}
              showCounts={true}
            />
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to={ROUTES.PORTFOLIO}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              전체 포트폴리오 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Trust + CTA ===== */}
      <TrustStatements />
      <CTASection />
    </div>
  );
};

export default LandingPage;
