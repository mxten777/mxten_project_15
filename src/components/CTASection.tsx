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
    <section className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* 미세한 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* 플로팅 원 효과 (절제됨) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* 추가 정보 */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-slate-300">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <span className="text-2xl">📄</span>
              </div>
              <span className="font-medium">{BUSINESS_GUARANTEES.QUOTATION_TIME} 내 견적 제공</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <span className="font-medium">NDA 체결 가능</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <span className="font-medium">유지보수 {BUSINESS_GUARANTEES.WARRANTY_YEARS}년 무상</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
