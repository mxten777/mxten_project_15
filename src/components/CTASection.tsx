import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_GUARANTEES, ROUTES } from '../constants';

interface CTASectionProps {
  readonly title?: string;
  readonly description?: string;
  readonly buttonText?: string;
  readonly buttonLink?: string;
}

const DEFAULT_CTA_PROPS = {
  title: '다음 프로젝트를 함께 시작하시겠습니까?',
  description: '요구사항 정의부터 배포까지, 명확한 일정과 품질 기준으로 진행합니다.',
  buttonText: '프로젝트 문의하기',
  buttonLink: ROUTES.CONTACT,
} as const;

const CTASection: React.FC<CTASectionProps> = ({
  title = DEFAULT_CTA_PROPS.title,
  description = DEFAULT_CTA_PROPS.description,
  buttonText = DEFAULT_CTA_PROPS.buttonText,
  buttonLink = DEFAULT_CTA_PROPS.buttonLink
}) => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
      {/* Premium Animated Background */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${String(15 + (i * 12))}%`,
            top: `${String(20 + (i * 8))}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + (i * 0.5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Icon with Animation */}
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl mb-10 shadow-2xl border-2 border-white/30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircle className="w-12 h-12 text-white drop-shadow-2xl" strokeWidth={2.5} />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            {title}
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-14 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
            {description}
          </p>

          {/* Premium CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mb-20"
          >
            <Link
              to={buttonLink}
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-300 text-slate-900 font-black text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{buttonText}</span>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-6 h-6" strokeWidth={3} />
              </motion.div>
            </Link>
          </motion.div>

          {/* Premium Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            {[
              { icon: '📄', text: `${BUSINESS_GUARANTEES.QUOTATION_TIME} 내 견적 제공` },
              { icon: '🔒', text: 'NDA 체결 가능' },
              { icon: '✅', text: `유지보수 ${String(BUSINESS_GUARANTEES.WARRANTY_YEARS)}년 무상` }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl drop-shadow-lg">{item.icon}</span>
                </motion.div>
                <span className="font-bold text-lg drop-shadow-md">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
