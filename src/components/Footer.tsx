import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Heart,
  Calendar,
  Users,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: '홈', path: '/', description: '서비스 소개' },
    { name: '포트폴리오', path: '/portfolio', description: 'MVP 프로젝트 갤러리' },
    { name: '상담 문의', path: '/contact', description: '무료 상담 신청' },
  ];

  const services = [
    { name: '웹 애플리케이션 개발', icon: '🌐' },
    { name: '모바일 앱 개발', icon: '📱' },
    { name: 'AI/ML 솔루션', icon: '🤖' },
    { name: '플랫폼 구축', icon: '🏗️' },
    { name: 'MVP 개발', icon: '🚀' },
    { name: '유지보수 지원', icon: '🔧' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/mxten777',
      label: 'GitHub',
      color: 'hover:bg-gray-800',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/dongyeol-jung',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/mxten777',
      label: 'Twitter',
      color: 'hover:bg-sky-500',
      gradient: 'from-sky-500 to-sky-700'
    },
  ];

  const stats = [
    { value: '80+', label: '완성된 MVP', icon: <Award className="w-5 h-5" /> },
    { value: '100+', label: '만족한 고객', icon: <Users className="w-5 h-5" /> },
    { value: '4주', label: '평균 개발 기간', icon: <Calendar className="w-5 h-5" /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Company Info - Premium */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="space-y-8">
              <Link to="/" className="inline-block group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="relative px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg transition-all duration-200 shadow-sm border-2 border-slate-300 dark:border-slate-600 group-hover:shadow-md group-hover:border-blue-500 dark:group-hover:border-blue-400">
                    {/* Light mode logo */}
                    <img
                      src="/images/baikal_logo_new_trans.png"
                      alt="(주)바이칼시스템즈"
                      className="h-8 w-auto object-contain block dark:hidden"
                      style={{
                        filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    {/* Dark mode logo */}
                    <img
                      src="/images/baikal_logo_white.png"
                      alt="(주)바이칼시스템즈"
                      className="h-8 w-auto object-contain hidden dark:block"
                      style={{
                        filter: 'contrast(1.1) brightness(1.05)',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 tracking-[-0.02em] leading-tight whitespace-nowrap">
                  (주)바이칼시스템즈
                </h4>
              </Link>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                AI활용 풀스택 개발자의 실전 포트폴리오. 4주 만에 MVP를 현실로 만드는 민첩한 개발 파트너입니다.
              </p>

              {/* Premium Stats */}
              <div className="space-y-3 pt-2">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-4 p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div>
                      <span className="font-bold text-2xl text-slate-900 dark:text-white">{stat.value}</span>
                      <span className="text-slate-700 dark:text-slate-300 text-sm ml-2 font-medium">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">빠른 이동</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                    to={link.path}
                  className="group block p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mb-1">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors font-medium">{link.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Services - Premium */}
          {/* Services - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">제공 서비스</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-3 rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
                    {service.icon}
                  </span>
                  <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">연락처</h4>
            <div className="space-y-4">
              {/* Email */}
              <div className="group flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-bold mb-2">이메일</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:jngdy@naver.com"
                      className="block text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      jngdy@naver.com
                    </a>
                    <a
                      href="mailto:jngdy@baikalsys.kr"
                      className="block text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      jngdy@baikalsys.kr
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 hover:border-green-400 dark:hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-bold mb-1">전화번호</p>
                  <a
                    href="tel:010-2380-4691"
                    className="text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-300 transition-colors font-medium"
                  >
                    010-2380-4691
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-bold mb-1">위치</p>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm">서울특별시 강남구 역삼로 138</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">온라인 상담 우선</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-300 mb-3">소셜 미디어</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - Premium */}
        <div className="py-12 px-4 border-t-2 border-slate-200 dark:border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-lg border-2 border-slate-100 dark:border-slate-700/50 px-8 py-12">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">최신 소식 받기</h4>
            <p className="text-slate-700 dark:text-slate-200 mb-8 text-lg font-medium">새로운 MVP 프로젝트와 개발 팁을 이메일로 받아보세요</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-5 bg-white dark:bg-slate-900/80 border-2 border-slate-200 dark:border-slate-600 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium shadow-sm"
              />
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap text-base font-semibold">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Premium */}
        <div className="py-8 border-t-2 border-slate-200 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium">© {currentYear} (주)바이칼시스템즈. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 dark:text-red-400" />
                <span>in Seoul</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium"
              >
                개인정보처리방침
              </Link>
              <Link
                to="/terms"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors font-medium"
              >
                이용약관
              </Link>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                <span className="font-medium">서비스 운영중</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;