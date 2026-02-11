import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: '홈', path: '/' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '상담 문의', path: '/contact' },
  ];

  const services = [
    '웹 애플리케이션 개발',
    '모바일 앱 개발',
    'AI/ML 솔루션',
    'MVP 개발',
    '유지보수 지원',
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/mxten777', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/dongyeol-jung', label: 'LinkedIn' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="px-2 py-1.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <img
                  src="/images/baikal_logo_new_trans.png"
                  alt="(주)바이칼시스템즈"
                  className="h-7 w-auto object-contain block dark:hidden"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <img
                  src="/images/baikal_logo_white.png"
                  alt="(주)바이칼시스템즈"
                  className="h-7 w-auto object-contain hidden dark:block"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <span className="font-bold text-sm text-slate-900 dark:text-white">(주)바이칼시스템즈</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              AI활용 풀스택 개발자의 실전 포트폴리오. 4주 만에 MVP를 현실로 만드는 민첩한 개발 파트너입니다.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-wider">바로가기</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-wider">서비스</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-5 uppercase tracking-wider">연락처</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:jngdy@naver.com" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                    jngdy@naver.com
                  </a>
                  <a href="mailto:jngdy@baikalsys.kr" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                    jngdy@baikalsys.kr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a href="tel:010-2380-4691" className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                  010-2380-4691
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">서울특별시 강남구 역삼로 138</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">온라인 상담 우선</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
              <span>© {currentYear} (주)바이칼시스템즈</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-rose-400" /> in Seoul
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/privacy" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                개인정보처리방침
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
                이용약관
              </Link>
              <div className="flex items-center gap-1.5 text-slate-500">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="font-medium">운영중</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;