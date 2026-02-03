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
                {/* Problem Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-red-100 dark:border-red-900/30 hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                      <ProblemIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        ❌ {item.problem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                      <SolutionIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        ✅ {item.solution.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
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
