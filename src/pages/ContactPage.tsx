import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // 실제 API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // 3초 후 성공 메시지 숨김
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // 실시간 validation
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      content: 'mxten777@gmail.com',
      description: '언제든 연락주세요',
      href: 'mailto:mxten777@gmail.com',
    },
    {
      icon: Mail,
      title: '개발 문의',
      content: 'jngdy@baikalsys.kr',
      description: 'MVP 프로젝트 전용',
      href: 'mailto:jngdy@baikalsys.kr',
    },
    {
      icon: Phone,
      title: '전화',
      content: '010-2380-4691',
      description: '평일 09:00 - 18:00',
      href: 'tel:010-2380-4691',
    },
    {
      icon: MapPin,
      title: '주소',
      content: '서울특별시 강남구 역삼로 138',
      description: '온라인 상담 우선',
      href: '#',
    },
    {
      icon: Clock,
      title: '운영시간',
      content: '평일 09:00 - 18:00',
      description: '주말/공휴일 휴무',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Hero Section - Premium */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-bg"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">함께 만들어가요</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
              새로운 아이디어가 있으신가요?<br className="hidden sm:block" />
              <span className="font-bold text-blue-600 dark:text-blue-400">바이브코딩</span>과 함께 혁신적인 프로젝트를 시작해보세요.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Premium */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-premium p-8 md:p-10 border border-gray-200/50 dark:border-gray-700/50">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">프로젝트 문의</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  아래 양식을 작성해주시면 <span className="font-semibold text-blue-600 dark:text-blue-400">24시간 내</span>에 연락드리겠습니다.
                </p>
              </div>

              {isSubmitted && (
                <div className="relative mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-700 rounded-xl animate-bounce-in">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      문의가 성공적으로 전송되었습니다!
                    </span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    빠른 시일 내에 답변드리겠습니다.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    이름 *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm ${
                        errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  {errors.name && (
                    <div className="mt-2 flex items-center text-red-600 dark:text-red-400 text-sm font-medium animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    이메일 *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm ${
                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  {errors.email && (
                    <div className="mt-2 flex items-center text-red-600 dark:text-red-400 text-sm font-medium animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    메시지 *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm ${
                        errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="프로젝트에 대해 자세히 설명해주세요"
                    />
                  </div>
                  {errors.message && (
                    <div className="mt-2 flex items-center text-red-600 dark:text-red-400 text-sm font-medium animate-shake">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group/submit relative w-full flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg shadow-premium overflow-hidden transition-all duration-400 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-100 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-premium-lg hover:scale-102'
                  }`}
                >
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/submit:translate-x-[200%] transition-transform duration-800"></div>
                  )}
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-3 border-gray-200 border-t-white mr-3" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover/submit:translate-x-1 transition-transform" />
                      문의하기
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards - Premium */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className={`group block bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-premium transition-all duration-400 border border-gray-200/50 dark:border-gray-700/50 ${
                    info.href !== '#' ? 'hover:scale-102 hover:-translate-y-1' : 'cursor-default'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-400">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
            
            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-premium p-8">
              <h3 className="text-2xl font-bold mb-6">자주 묻는 질문</h3>
              
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <h4 className="font-semibold mb-2">💡 MVP 개발 기간은?</h4>
                  <p className="text-white/90 text-sm">
                    프로젝트 규모에 따라 2-8주 소요됩니다.
                  </p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h4 className="font-semibold mb-2">💰 개발 비용은?</h4>
                  <p className="text-white/90 text-sm">
                    기능과 복잡도에 따라 견적을 제공합니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🚀 사후 지원은?</h4>
                  <p className="text-white/90 text-sm">
                    3개월 무료 유지보수와 지속적인 기술 지원을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;