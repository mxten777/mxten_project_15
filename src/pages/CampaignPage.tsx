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
      description: "아이디어에서 실제 제품까지 최단 4주",
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
      title: "80+개 성공 사례",
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
    { number: "80+", label: "완료된 프로젝트", icon: Trophy },
    { number: "100%", label: "클라이언트 만족도", icon: Star },
    { number: "4주", label: "평균 개발 기간", icon: Clock },
    { number: "24/7", label: "기술 지원", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Hero Section - Premium */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        {/* Premium background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30 mb-10 hover:bg-white/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-white text-base font-bold">바이칼시스템즈 - 빠르게 검증하는 MVP</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 leading-tight">
              아이디어를
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent"> 현실로</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white mb-14 max-w-4xl mx-auto font-semibold leading-relaxed">
              <span className="text-yellow-300 font-bold">바이브코딩</span>과 함께 혁신적인 MVP를 개발하고 
              <br className="hidden md:block" />
              비즈니스 성공의 첫걸음을 내딛으세요
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold text-lg rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/50"
              >
                무료 상담 시작하기
                <ArrowRight className="w-6 h-6 ml-2 inline-block" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-10 py-5 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/30 transition-all duration-300"
              >
                포트폴리오 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Premium */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-3xl border-2 border-blue-200 dark:border-blue-700/50 mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-slate-700 dark:text-slate-300 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Premium */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              왜 바이칼시스템즈인가?
            </h2>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
              검증된 경험과 최신 기술로 여러분의 성공을 보장합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:transform group-hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-5">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-16 border-2 border-blue-200 dark:border-slate-700 shadow-2xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
                완벽한 MVP 개발 프로세스
              </h2>
              <p className="text-2xl text-slate-600 dark:text-slate-300 font-medium">
                체계적이고 투명한 개발 과정으로 최고의 결과를 보장합니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: "01", title: "아이디어 분석", desc: "비즈니스 모델 검토 및 기술 스펙 정의" },
                { step: "02", title: "MVP 개발", desc: "애자일 방식의 빠르고 효율적인 개발" },
                { step: "03", title: "런칭 & 지원", desc: "배포부터 유지보수까지 완벽한 지원" }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">{process.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border-2 border-white/30">
            <Award className="w-20 h-20 text-yellow-300 mx-auto mb-8 drop-shadow-2xl" />
            <h2 className="text-5xl font-bold text-white mb-8">
              지금 시작하세요!
            </h2>
            <p className="text-2xl text-white mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              더 이상 기다리지 마세요. 오늘부터 여러분의 아이디어를 현실로 만들어보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
              <Link
                to="/contact"
                className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold text-lg rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/50"
              >
                무료 상담 예약
                <ArrowRight className="w-6 h-6 ml-2 inline-block" />
              </Link>
              
              <Link
                to="/portfolio"
                className="px-12 py-5 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/30 transition-all duration-300"
              >
                성공 사례 보기
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                <span className="font-semibold text-lg">무료 상담</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                <span className="font-semibold text-lg">투명한 견적</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                <span className="font-semibold text-lg">품질 보장</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampaignPage;