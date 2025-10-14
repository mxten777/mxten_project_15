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
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/dongyeol-jung',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/mxten777',
      label: 'Twitter',
      color: 'hover:text-sky-400'
    },
  ];

  const stats = [
    { value: '35+', label: '완성된 MVP', icon: <Award className="w-5 h-5" /> },
    { value: '100+', label: '만족한 고객', icon: <Users className="w-5 h-5" /> },
    { value: '2주', label: '평균 개발 기간', icon: <Calendar className="w-5 h-5" /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-blue-900/20 to-purple-900/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <div className="space-y-4 animate-float">
              {/* Section Title */}
              <h4 className="text-xl font-bold font-heading text-white mb-6">바이브코딩</h4>
              
              {/* Company Description */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200 animate-pulse-glow">
                  <img
                    src="/images/baikal_logo_trans.png"
                    alt="바이브코딩 로고"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-md"
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">MVP 개발 전문</p>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed font-medium">
                35+개의 성공적인 프로젝트 경험으로 여러분의 꿈을 실현시켜드립니다.
                검증된 방법론과 최신 기술로 성공적인 런칭을 지원합니다.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm hover:scale-105 transition-transform">
                    <div className="text-blue-400">{stat.icon}</div>
                    <div>
                      <span className="font-bold font-heading text-white">{stat.value}</span>
                      <span className="text-gray-400 ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-start">
            <div className="space-y-4 h-full">
              <h4 className="text-xl font-bold font-heading text-white mb-6">빠른 이동</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div>
                        <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-300 font-medium">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col justify-start">
            <div className="space-y-4 h-full">
              <h4 className="text-xl font-bold font-heading text-white mb-6">제공 서비스</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-200 font-sans hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <span className="text-lg animate-float" style={{ animationDelay: `${index * 0.1}s` }}>{service.icon}</span>
                    <span className="text-sm font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-start">
            <div className="space-y-4 h-full">
              <h4 className="text-xl font-bold font-heading text-white mb-6">연락처</h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">이메일</p>
                    <div className="space-y-1">
                      <a
                        href="mailto:mxten777@gmail.com"
                        className="block text-white hover:text-blue-300 transition-colors text-sm hover:scale-105 font-medium"
                      >
                        mxten777@gmail.com
                      </a>
                      <a
                        href="mailto:jngdy@naver.com"
                        className="block text-white hover:text-blue-300 transition-colors text-sm hover:scale-105 font-medium"
                      >
                        jngdy@naver.com
                      </a>
                      <a
                        href="mailto:jngdy@baikalsys.kr"
                        className="block text-white hover:text-blue-300 transition-colors text-sm hover:scale-105 font-medium"
                      >
                        jngdy@baikalsys.kr
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">전화번호</p>
                    <a
                      href="tel:010-2380-4691"
                      className="text-white hover:text-blue-300 transition-colors hover:scale-105 font-medium"
                    >
                      010-2380-4691
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">위치</p>
                    <p className="text-white font-medium">서울특별시 강남구 역삼로 138</p>
                    <p className="text-xs text-gray-300 font-medium">온라인 상담 우선</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-3">소셜 미디어</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 animate-pulse-glow ${social.color}`}
                      aria-label={social.label}
                      style={{ animationDelay: `${index * 0.2}s` }}
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
        <div className="py-6 px-4 border-t border-gray-700">
          <div className="max-w-lg mx-auto text-center animate-shimmer">
            <h4 className="text-lg font-semibold font-heading text-white mb-2">최신 소식 받기</h4>
            <p className="text-gray-400 mb-6 text-sm">
              새로운 MVP 프로젝트와 개발 팁을 이메일로 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all whitespace-nowrap text-sm font-semibold font-heading animate-pulse-glow">
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