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
    { value: '40+', label: '완성된 MVP', icon: <Award className="w-5 h-5" /> },
    { value: '100+', label: '만족한 고객', icon: <Users className="w-5 h-5" /> },
    { value: '2주', label: '평균 개발 기간', icon: <Calendar className="w-5 h-5" /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info - Premium */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                바이브코딩
              </h4>
              
              {/* Logo with premium effect */}
              <div className="flex items-center space-x-4">
                <div className="relative p-3 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-premium border border-gray-200 hover:scale-105 transition-transform duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
                  <img
                    src="/images/baikal_logo_trans.png"
                    alt="바이브코딩 로고"
                    className="relative w-12 h-12 object-contain"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-400">MVP 개발 전문</p>
                  <p className="text-xs text-gray-400">Professional Solutions</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed font-medium text-sm">
                <span className="font-bold text-white">40+개</span>의 성공적인 프로젝트 경험으로<br />
                여러분의 꿈을 실현시켜드립니다.
              </p>

              {/* Premium Stats */}
              <div className="space-y-3 pt-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-102"
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">{stat.icon}</div>
                    <div>
                      <span className="font-bold text-lg text-white">{stat.value}</span>
                      <span className="text-gray-400 text-sm ml-2">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-bold font-heading text-white mb-6">빠른 이동</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                    to={link.path}
                  className="group block p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-102"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {link.description}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Services - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold font-heading text-white mb-6">제공 서비스</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
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
            <h4 className="text-xl font-bold font-heading text-white mb-6">연락처</h4>
            <div className="space-y-4">
              {/* Email */}
              <div className="group flex items-start space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-300 font-semibold mb-2">이메일</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:mxten777@gmail.com"
                      className="block text-white hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      mxten777@gmail.com
                    </a>
                    <a
                      href="mailto:jngdy@naver.com"
                      className="block text-white hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      jngdy@naver.com
                    </a>
                    <a
                      href="mailto:jngdy@baikalsys.kr"
                      className="block text-white hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      jngdy@baikalsys.kr
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-semibold mb-1">전화번호</p>
                  <a
                    href="tel:010-2380-4691"
                    className="text-white hover:text-green-300 transition-colors font-medium"
                  >
                    010-2380-4691
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-semibold mb-1">위치</p>
                  <p className="text-white font-medium text-sm">서울특별시 강남구 역삼로 138</p>
                  <p className="text-xs text-gray-400 font-medium mt-1">온라인 상담 우선</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm font-bold text-gray-300 mb-3">소셜 미디어</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-xl transition-all duration-300 hover:scale-110 border border-white/10 ${social.color}`}
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

        {/* Newsletter Signup */}
        <div className="py-8 px-4 border-t border-gray-700">
          <div className="max-w-lg mx-auto text-center animate-shimmer rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-blue-800/60 backdrop-blur-lg px-6 py-8">
            <h4 className="text-xl font-extrabold font-heading text-white mb-3 drop-shadow-lg tracking-tight">최신 소식 받기</h4>
            <p className="text-gray-300 mb-6 text-base font-semibold">새로운 MVP 프로젝트와 개발 팁을 이메일로 받아보세요</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-5 py-4 bg-white/10 border border-blue-500 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base font-semibold shadow-md backdrop-blur-md"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 text-white rounded-xl shadow-xl hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all whitespace-nowrap text-base font-bold font-heading animate-pulse-glow mb-2">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} 바이브코딩. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-1 animate-float">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in Seoul</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors hover:scale-105"
              >
                개인정보처리방침
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors hover:scale-105"
              >
                이용약관
              </Link>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>서비스 운영중</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;