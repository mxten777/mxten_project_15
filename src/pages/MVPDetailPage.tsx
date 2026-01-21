import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Users, Tag } from 'lucide-react';
import { getProjectBySlug } from '../data/portfolio';

const MVPDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // 프로젝트가 없으면 사용자 친화적인 메시지 표시
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            요청하신 프로젝트가 존재하지 않거나 삭제되었습니다.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            포트폴리오로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const handleDemoClick = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            포트폴리오로 돌아가기
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 카테고리 태그 */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4" />
                {project.category}
              </span>
            </div>

            {/* 프로젝트명 */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            {/* 한 줄 소개 (큰 텍스트) */}
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-8 leading-relaxed">
              {project.oneLiner}
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  데모 보기
                </button>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300"
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 왼쪽 컬럼 - 주요 정보 */}
            <div className="lg:col-span-2 space-y-12">
              {/* 핵심 기능 3가지 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  핵심 기능
                </h2>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* 적합 고객 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-500" />
                  적합한 고객
                </h2>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-100 dark:border-gray-600">
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    {project.fitFor}
                  </p>
                </div>
              </motion.div>

              {/* 스크린샷 갤러리 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  프로젝트 미리보기
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <div 
                      key={index}
                      className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800"
                    >
                      <img 
                        src={screenshot}
                        alt={`${project.title} 스크린샷 ${index + 1}`}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 오른쪽 컬럼 - 부가 정보 */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-24 space-y-8"
              >
                {/* 기술 스택 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    프로젝트 정보
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">분야</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">프로젝트 ID</span>
                      <span className="font-mono text-gray-900 dark:text-white text-xs">{project.id}</span>
                    </div>
                    {project.featured && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Featured</span>
                        <span className="font-semibold text-yellow-600">⭐ 추천</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">
                    비슷한 프로젝트가 필요하신가요?
                  </h3>
                  <p className="text-sm mb-4 text-white/90">
                    귀사의 요구사항에 맞춘 맞춤형 솔루션을 제안해드립니다.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    지금 상담하기
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 관련 프로젝트 추천 (선택사항 - 추후 구현 가능) */}
    </div>
  );
};

export default MVPDetailPage;
