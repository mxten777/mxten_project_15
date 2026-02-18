import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Code, Clock, Shield, Sparkles, LucideIcon } from 'lucide-react';
import { BUSINESS_GUARANTEES } from '../constants';

interface ProblemSolutionItem {
  problem: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  solution: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

const PROBLEM_SOLUTIONS: readonly ProblemSolutionItem[] = [
  {
    problem: {
      icon: AlertCircle,
      title: '외주 업체 품질 불안',
      description: '납품 후 유지보수 불가, 코드 품질 낮음'
    },
    solution: {
      icon: CheckCircle2,
      title: '엔터프라이즈급 코드 품질',
      description: 'TypeScript, 테스트 코드, 문서화 기본 제공'
    }
  },
  {
    problem: {
      icon: Clock,
      title: '일정 지연과 예산 초과',
      description: '끝없는 추가 개발과 비용 증가'
    },
    solution: {
      icon: Sparkles,
      title: '명확한 일정과 고정 가격',
      description: `${String(BUSINESS_GUARANTEES.MVP_WEEKS)}주 MVP, ${String(BUSINESS_GUARANTEES.FULL_SYSTEM_WEEKS)}주 Full 시스템 보장`
    }
  },
  {
    problem: {
      icon: Shield,
      title: '보안과 확장성 우려',
      description: '향후 기능 추가 시 구조 재설계 필요'
    },
    solution: {
      icon: Code,
      title: '미래 대비 아키텍처',
      description: '모듈화 설계로 언제든 확장 가능'
    }
  }
] as const;

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* ── 투톤 배경: 왼쪽 amber, 오른쪽 indigo ── */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-1/2 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/20" />
        <div className="w-1/2 bg-gradient-to-bl from-indigo-50 via-blue-50 to-violet-50 dark:from-indigo-950/40 dark:via-blue-950/30 dark:to-violet-950/20" />
      </div>

      {/* 가운데 divider glow */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-slate-200/80 dark:via-slate-700/60 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-amber-100/30 via-white/60 to-indigo-100/30 dark:from-amber-900/10 dark:via-slate-900/40 dark:to-indigo-900/10 blur-xl pointer-events-none" />

      {/* 배경 장식 blob */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-amber-300/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-300/10 dark:bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* 헤딩 영역: 투톤 위에 중앙 배치 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* 컬럼 레이블 */}
          <div className="hidden md:flex justify-center gap-0 mb-8">
            <div className="flex-1 flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700/50 text-amber-700 dark:text-amber-300 text-sm font-bold tracking-wide">
                <span>⚠️</span> 이런 고민 있으신가요?
              </span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide">
                <span>✅</span> 바이브 코딩의 해답
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight">
            이런 어려움을 겪고{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">계신가요?</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            바이브 코딩이 제공하는 확실한 솔루션
          </p>
        </motion.div>

        <div className="space-y-6">
          {PROBLEM_SOLUTIONS.map((item, index) => {
            const ProblemIcon = item.problem.icon;
            const SolutionIcon = item.solution.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0"
              >
                {/* Problem Card */}
                <motion.div
                  className="relative md:rounded-l-2xl md:rounded-r-none rounded-2xl p-7 border border-amber-200/70 dark:border-amber-700/40 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 dark:hover:bg-slate-900/70 transition-all duration-300 overflow-hidden group"
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* left accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-amber-400 to-orange-400" />

                  <div className="flex items-center gap-4 pl-3">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-400/30"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <ProblemIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">⚠️</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                          {item.problem.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>

                  {/* corner glow */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-300/10 rounded-full blur-2xl group-hover:bg-amber-300/20 transition-all duration-500" />
                </motion.div>

                {/* Solution Card */}
                <motion.div
                  className="relative md:rounded-r-2xl md:rounded-l-none rounded-2xl p-7 border border-indigo-200/70 dark:border-indigo-700/40 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-white/80 dark:hover:bg-slate-900/70 transition-all duration-300 overflow-hidden group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* right accent bar */}
                  <div className="absolute right-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />

                  <div className="flex items-center gap-4 pr-3">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SolutionIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">✅</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                          {item.solution.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>

                  {/* corner glow */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-300/10 rounded-full blur-2xl group-hover:bg-indigo-300/20 transition-all duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-base text-slate-500 dark:text-slate-400 mb-5">
            귀사의 프로젝트에 맞는 솔루션이 궁금하신가요?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-base rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5"
          >
            무료 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
