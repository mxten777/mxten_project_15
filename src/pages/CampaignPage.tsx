import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Zap, 
  Trophy, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  Award,
  Star,
  Target,
  Sparkles
} from 'lucide-react';

const CampaignPage: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "빠른 MVP 개발",
      description: "아이디어에서 실제 제품까지 최단 2주",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "검증된 기술 스택",
      description: "React, TypeScript, Firebase로 안정적인 구현",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Trophy,
      title: "40+개 성공 사례",
      description: "다양한 업계의 실제 성공 프로젝트들",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "전문가 팀",
      description: "풀스택 개발진과 UX/UI 전문가들",
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "27+", label: "완료된 프로젝트", icon: Trophy },
    { number: "100%", label: "클라이언트 만족도", icon: Star },
    { number: "2주", label: "평균 개발 기간", icon: Clock },
    { number: "24/7", label: "기술 지원", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-8 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">바이칼시스템즈 - 빠르게 검증하는 MVP</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
              아이디어를
              <span className="text-yellow-300" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8)' }}> 현실로</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
              <span className="font-semibold text-yellow-300">바이브코딩</span>과 함께 혁신적인 MVP를 개발하고 
              <br className="hidden md:block" />
              비즈니스 성공의 첫걸음을 내딛으세요
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                무료 상담 시작하기
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                포트폴리오 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              왜 바이칼시스템즈인가?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              검증된 경험과 최신 기술로 여러분의 성공을 보장합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-3xl p-12 border border-blue-500/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                완벽한 MVP 개발 프로세스
              </h2>
              <p className="text-xl text-blue-100">
                체계적이고 투명한 개발 과정으로 최고의 결과를 보장합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "아이디어 분석", desc: "비즈니스 모델 검토 및 기술 스펙 정의" },
                { step: "02", title: "MVP 개발", desc: "애자일 방식의 빠르고 효율적인 개발" },
                { step: "03", title: "런칭 & 지원", desc: "배포부터 유지보수까지 완벽한 지원" }
              ].map((process, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-xl mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-blue-100">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              지금 시작하세요!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              더 이상 기다리지 마세요. 오늘부터 여러분의 아이디어를 현실로 만들어보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                무료 상담 예약
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                성공 사례 보기
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>무료 상담</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>투명한 견적</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>품질 보장</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignPage;