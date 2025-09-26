import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { ContactForm } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<Omit<ContactForm, 'id' | 'createdAt' | 'status'>>({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    interestedMVPs: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const industries = [
    'IT/소프트웨어',
    '전자상거래',
    '제조업',
    '금융/핀테크',
    '의료/헬스케어',
    '교육',
    '물류/배송',
    '부동산',
    '여행/관광',
    '기타'
  ];

  const mvpOptions = [
    { id: '1', name: 'AI 기반 고객 상담 챗봇' },
    { id: '2', name: '실시간 배송 추적 앱' },
    { id: '3', name: '스마트 재고 관리 시스템' },
    { id: '4', name: 'NFT 마켓플레이스' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMVPInterest = (mvpId: string) => {
    setFormData(prev => ({
      ...prev,
      interestedMVPs: prev.interestedMVPs.includes(mvpId)
        ? prev.interestedMVPs.filter(id => id !== mvpId)
        : [...prev.interestedMVPs, mvpId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In real app, submit to Firestore
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: '',
        interestedMVPs: []
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              프로젝트 문의
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              여러분의 아이디어를 현실로 만들어 드리겠습니다. 
              무료 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">상담 신청서</h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">전송 중 오류가 발생했습니다. 다시 시도해주세요.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="hong@example.com"
                    />
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="(주)바이브컴퍼니"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      업종 *
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">업종을 선택해주세요</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interested MVPs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    관심 있는 MVP (선택사항)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {mvpOptions.map(mvp => (
                      <motion.div
                        key={mvp.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.interestedMVPs.includes(mvp.id)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => handleMVPInterest(mvp.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 border-2 rounded ${
                            formData.interestedMVPs.includes(mvp.id)
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {formData.interestedMVPs.includes(mvp.id) && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{mvp.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 내용 및 요청사항 *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="어떤 서비스나 기능을 개발하고 싶으신지, 예산이나 일정 등 구체적인 요구사항을 알려주세요."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                  } text-white shadow-lg hover:shadow-xl`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      무료 상담 신청
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">이메일</div>
                    <div className="font-medium text-gray-900">contact@vibecoding.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">전화</div>
                    <div className="font-medium text-gray-900">02-1234-5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">주소</div>
                    <div className="font-medium text-gray-900">
                      서울특별시 강남구<br />
                      테헤란로 123길 45
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">운영시간</div>
                    <div className="font-medium text-gray-900">
                      평일 09:00 - 18:00<br />
                      <span className="text-sm text-gray-500">(주말 및 공휴일 휴무)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3">빠른 응답 보장</h3>
              <div className="space-y-2 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">1시간 내 1차 응답</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">24시간 내 상세 제안서</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">무료 화상 상담 가능</span>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">자주 묻는 질문</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Q. 개발 기간은 얼마나 걸리나요?</div>
                  <div className="text-gray-600 mt-1">A. MVP는 평균 2-3주, 본격적인 서비스는 2-3개월 소요됩니다.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Q. 유지보수도 제공하나요?</div>
                  <div className="text-gray-600 mt-1">A. 네, 개발 완료 후 3개월 무료 유지보수를 제공합니다.</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Q. 예산은 어느 정도 필요한가요?</div>
                  <div className="text-gray-600 mt-1">A. 프로젝트 복잡도에 따라 상이하며, 무료 상담을 통해 정확한 견적을 제공합니다.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;