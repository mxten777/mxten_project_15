import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      href: 'https://github.com/vibecoding', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/company/vibecoding', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://twitter.com/vibecoding', 
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Section Title */}
              <h4 className="text-xl font-bold font-heading text-white mb-6">바이브 코딩</h4>
              
              {/* Company Description */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200">
                  <img 
                    src="/images/baikal_logo_trans.png" 
                    alt="바이칼 로고" 
                    className="w-9 h-9 object-contain rounded-md"
                    style={{ 
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-400">MVP 전문 개발팀</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                빠르고 효율적인 MVP 개발로 아이디어를 현실로 만듭니다. 
                검증된 방법론과 최신 기술로 성공적인 런칭을 지원합니다.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <div className="text-blue-400">{stat.icon}</div>
                    <div>
                      <span className="font-bold font-heading text-white">{stat.value}</span>
                      <span className="text-gray-400 ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 h-full"
            >
              <h4 className="text-xl font-bold font-heading text-white mb-6">빠른 이동</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors">
                      <div>
                        <div className="font-medium font-sans text-gray-200 group-hover:text-white transition-colors">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 h-full"
            >
              <h4 className="text-xl font-bold font-heading text-white mb-6">제공 서비스</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 font-sans hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span className="text-sm">{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 h-full"
            >
              <h4 className="text-xl font-bold font-heading text-white mb-6">연락처</h4>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">이메일</p>
                    <a 
                      href="mailto:jngdy@baikalsys.kr" 
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      jngdy@baikalsys.kr
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">전화번호</p>
                    <a 
                      href="tel:010-2380-4691" 
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      010-2380-4691
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">위치</p>
                    <p className="text-gray-200">서울특별시 강남구 역삼로 138</p>
                    <p className="text-xs text-gray-400">온라인 상담 우선</p>
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
                      className={`p-2 bg-white/10 rounded-lg transition-all duration-200 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 px-4 border-t border-gray-700"
        >
          <div className="max-w-lg mx-auto text-center">
            <h4 className="text-lg font-semibold font-heading text-white mb-2">최신 소식 받기</h4>
            <p className="text-gray-400 mb-6 text-sm">
              새로운 MVP 프로젝트와 개발 팁을 이메일로 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all whitespace-nowrap text-sm font-semibold font-heading">
                구독하기
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} 바이브 코딩. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>in Seoul</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
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