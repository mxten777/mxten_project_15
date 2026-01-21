import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield } from 'lucide-react';

const statements = [
  {
    icon: CheckCircle,
    text: '기획부터 배포까지, 실제 운영 기준으로 설계합니다.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    text: '업종별 MVP를 빠르게 구축해 검증과 개선을 반복합니다.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    text: '유지보수/확장까지 고려한 구조로 납품합니다.',
    color: 'from-orange-500 to-red-500'
  }
];

const TrustStatements: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            신뢰할 수 있는 파트너
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            바이브 코딩이 약속하는 3가지 핵심 가치
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statements.map((statement, index) => {
            const Icon = statement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  {/* 아이콘 */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${statement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* 텍스트 */}
                  <p className="text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                    {statement.text}
                  </p>

                  {/* 배경 그라데이션 효과 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${statement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStatements;
