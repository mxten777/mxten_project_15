import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Trophy, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Clock,
  TrendingUp,
  Eye
} from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';
import Interactive3DCard from '../components/Interactive3DCard';
import ScrollTriggered from '../components/ScrollTriggered';

const CampaignPage: React.FC = () => {
  const [currentStats, setCurrentStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });

  // 실시간 카운터 애니메이션
  useEffect(() => {
    const targetStats = {
      projects: 28,
      clients: 15,
      satisfaction: 98,
      experience: 5
    };

    const duration = 3000; // 3초
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCurrentStats({
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress),
        experience: Math.floor(targetStats.experience * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCurrentStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 🚀 히어로 섹션 - 사이버펑크 스타일 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
          
          {/* 파티클 애니메이션 */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: Math.random() * window.innerHeight,
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, -100, null],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* 그리드 배경 */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* 메인 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black font-heading mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              바이브 코딩
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-yellow-400">2025 MVP 혁신</span>{' '}
              <span className="text-white">캠페인</span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              당신의 아이디어를 현실로 만드는 <span className="text-blue-400 font-bold">MVP 전문팀</span>
            </motion.p>
          </motion.div>

          {/* CTA 버튼들 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/portfolio"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-lg text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <Rocket className="w-6 h-6 mr-3 inline" />
                포트폴리오 보기
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-2xl font-bold text-lg text-white hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <Zap className="w-6 h-6 mr-3 inline" />
                프로젝트 문의하기
                <Sparkles className="w-5 h-5 ml-2 inline animate-spin" />
              </div>
            </Link>
          </motion.div>

          {/* 실시간 통계 카운터 */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-blue-400 mb-2">
                {currentStats.projects}+
              </div>
              <div className="text-gray-400 font-semibold">완성 프로젝트</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-purple-400 mb-2">
                {currentStats.clients}+
              </div>
              <div className="text-gray-400 font-semibold">만족한 고객</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-pink-400 mb-2">
                {currentStats.satisfaction}%
              </div>
              <div className="text-gray-400 font-semibold">만족도</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black text-yellow-400 mb-2">
                {currentStats.experience}년+
              </div>
              <div className="text-gray-400 font-semibold">경험</div>
            </div>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* 🏆 성과 섹션 */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollTriggered animation="scale" duration={0.8}>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2025년 혁신 성과
              </motion.h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                불가능을 가능으로 만드는 바이브 코딩의 놀라운 성과를 확인하세요
              </p>
            </div>
          </ScrollTriggered>

          {/* 성과 카드들 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollTriggered animation="fadeUp" delay={0.2}>
              <Interactive3DCard className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500">
                <Trophy className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center mb-4">프로젝트 품질</h3>
                <p className="text-gray-300 text-center mb-6">
                  모든 프로젝트가 기업급 품질로 완성되어 실제 비즈니스에서 활용 가능
                </p>
                <div className="text-center">
                  <span className="text-4xl font-black text-blue-400">100%</span>
                  <div className="text-gray-400">완성도</div>
                </div>
              </Interactive3DCard>
            </ScrollTriggered>

            <ScrollTriggered animation="fadeUp" delay={0.4}>
              <Interactive3DCard className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500">
                <Clock className="w-16 h-16 text-purple-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center mb-4">빠른 개발</h3>
                <p className="text-gray-300 text-center mb-6">
                  평균 2-3주 내 MVP 완성으로 빠른 시장 검증과 피드백 수집 가능
                </p>
                <div className="text-center">
                  <span className="text-4xl font-black text-purple-400">2-3주</span>
                  <div className="text-gray-400">평균 개발기간</div>
                </div>
              </Interactive3DCard>
            </ScrollTriggered>

            <ScrollTriggered animation="fadeUp" delay={0.6}>
              <Interactive3DCard className="bg-gradient-to-br from-pink-900/50 to-yellow-900/50 p-8 rounded-3xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500">
                <TrendingUp className="w-16 h-16 text-pink-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center mb-4">기술 혁신</h3>
                <p className="text-gray-300 text-center mb-6">
                  최신 기술 스택과 트렌드를 적용한 미래지향적 솔루션 제공
                </p>
                <div className="text-center">
                  <span className="text-4xl font-black text-pink-400">최신</span>
                  <div className="text-gray-400">기술 스택</div>
                </div>
              </Interactive3DCard>
            </ScrollTriggered>
          </div>
        </div>
      </section>

      {/* 🌟 특별 혜택 섹션 */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ScrollTriggered animation="scale">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                whileInView={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                특별 런칭 이벤트
              </motion.h2>
              <p className="text-xl text-gray-300">
                지금 바로 시작하는 고객만의 특별한 혜택
              </p>
            </div>
          </ScrollTriggered>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black mb-6 text-white">
                  🎉 런칭 기념 특가
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">무료 기획 컨설팅 (30만원 상당)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">1개월 무료 유지보수</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">프리미엄 디자인 템플릿 제공</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">24시간 응답 보장</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="group relative inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl font-bold text-lg text-white hover:from-green-400 hover:to-blue-500 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <Rocket className="w-6 h-6 mr-3 inline" />
                    지금 바로 시작하기
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <div className="text-8xl font-black text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-4">
                  30%
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  런칭 할인
                </div>
                <div className="text-gray-400">
                  선착순 10명 한정
                </div>
                
                {/* 카운트다운 타이머 */}
                <div className="mt-8 p-4 bg-black/50 rounded-2xl border border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">이벤트 종료까지</div>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">07</div>
                      <div className="text-xs text-gray-500">일</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">12</div>
                      <div className="text-xs text-gray-500">시간</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">34</div>
                      <div className="text-xs text-gray-500">분</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 프로젝트 하이라이트 */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollTriggered animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                대표 프로젝트
              </h2>
              <p className="text-xl text-gray-300">
                실제 비즈니스에서 성공적으로 운영 중인 프로젝트들
              </p>
            </div>
          </ScrollTriggered>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <ScrollTriggered key={project.id} animation="scale" delay={index * 0.1}>
                <Interactive3DCard className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">
                        LIVE
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.category}</span>
                      <Link
                        to={`/mvp/${project.id}`}
                        className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                      >
                        자세히 보기 →
                      </Link>
                    </div>
                  </div>
                </Interactive3DCard>
              </ScrollTriggered>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group-hover:scale-105">
                <Eye className="w-6 h-6 mr-3 inline" />
                전체 포트폴리오 보기
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 🚀 최종 CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollTriggered animation="scale">
            <motion.h2 
              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              당신의 차례입니다
            </motion.h2>
          </ScrollTriggered>

          <ScrollTriggered animation="fadeUp" delay={0.3}>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              아이디어가 있으신가요? 바이브 코딩이 그 아이디어를 현실로 만들어드립니다.
            </p>
          </ScrollTriggered>

          <ScrollTriggered animation="scale" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <motion.div 
                  className="relative px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl font-black text-2xl text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                  whileHover={{ 
                    boxShadow: "0 0 50px rgba(147, 51, 234, 0.5)",
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                  }}
                >
                  <Rocket className="w-8 h-8 mr-4 inline" />
                  프로젝트 시작하기
                  <Sparkles className="w-6 h-6 ml-3 inline animate-spin" />
                </motion.div>
              </Link>
            </div>
          </ScrollTriggered>

          <ScrollTriggered animation="fadeUp" delay={0.9}>
            <div className="mt-16 text-gray-400">
              <p className="text-lg">
                📞 상담 문의: <span className="text-blue-400">24시간 언제든지</span>
              </p>
              <p className="text-lg mt-2">
                💬 카카오톡: <span className="text-purple-400">실시간 채팅 상담</span>
              </p>
            </div>
          </ScrollTriggered>
        </div>
      </section>
    </div>
  );
};

export default CampaignPage;