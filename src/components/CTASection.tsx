import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = '프로젝트를 시작할 준비가 되셨나요?',
  description = '귀사의 비즈니스를 온라인으로 구현하는 첫 단계, 지금 바로 상담을 시작하세요.',
  buttonText = '프로젝트 상담하기',
  buttonLink = '/contact'
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* 플로팅 원 효과 */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* 추가 정보 */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>무료 초기 상담</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>빠른 견적 제공</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>맞춤형 제안서</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
