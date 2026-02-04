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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            이런 어려움을 겪고 계신가요?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            바이브 코딩이 제공하는 확실한 솔루션
          </p>
        </motion.div>

        <div className="space-y-16">
          {PROBLEM_SOLUTIONS.map((item, index) => {
            const ProblemIcon = item.problem.icon;
            const SolutionIcon = item.solution.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Problem Card - Premium Design */}
                <motion.div 
                  className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/10 dark:via-amber-900/10 dark:to-yellow-900/10 rounded-2xl p-8 border-2 border-orange-200/60 dark:border-orange-700/40 shadow-lg shadow-orange-100/50 dark:shadow-orange-900/20 hover:shadow-xl hover:shadow-orange-200/60 dark:hover:shadow-orange-900/30 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.3) 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 dark:from-orange-500 dark:to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/30"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProblemIcon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">⚠️</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.problem.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-amber-400/20 dark:from-orange-600/10 dark:to-amber-700/10 rounded-full blur-2xl" />
                </motion.div>

                {/* Solution Card - Enhanced Premium */}
                <motion.div 
                  className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-300/60 dark:border-blue-700/50 shadow-xl shadow-blue-100/50 dark:shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-200/60 dark:hover:shadow-blue-900/40 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/40"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <SolutionIcon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">✅</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.solution.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 dark:from-blue-600/15 dark:to-indigo-700/15 rounded-full blur-2xl" />
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            귀사의 프로젝트에 맞는 솔루션이 궁금하신가요?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            무료 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
