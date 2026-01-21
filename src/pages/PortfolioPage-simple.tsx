import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import CategoryTabs from '../components/CategoryTabs';
import ProjectCard from '../components/ProjectCard';
import { getProjectsByCategory } from '../data/portfolio';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section data-has-hero className="morphing-bg particle-bg text-white relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              <span className="text-white">바이브 코딩</span>{' '}
              <span className="text-yellow-300">MVP 포트폴리오</span>
            </h1>
            <p 
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium text-white" 
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
            >
              실전에서 검증된 <strong className="text-yellow-300">12개</strong> 프로젝트
              <br />
              <span className="text-base">🏢 기업·기관 | 🎓 교육·AI | 💼 SaaS | 🏛️ 공공·문화</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                ✅ <strong>12개</strong> 프로젝트 완료
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                🚀 <strong>4주</strong> 평균 개발 기간
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                🎯 <strong>4개</strong> 전문 분야
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                분야별 프로젝트 보기
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                귀사의 업종에 맞는 프로젝트를 선택하세요
              </p>
            </motion.div>

            <CategoryTabs 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showCounts={true}
            />
          </div>

          {/* Project Count */}
          <div className="mb-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              {selectedCategory === '전체' ? '전체' : selectedCategory} 프로젝트 <strong className="text-blue-600 dark:text-blue-400">{filteredProjects.length}개</strong>
            </p>
          </div>

          {/* Projects Grid - 데스크탑 3열, 태블릿 2열, 모바일 1열 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                해당 카테고리에 프로젝트가 없습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            당신의 프로젝트도 시작해보세요
          </h2>
          <p className="text-lg mb-8">
            검증된 개발 프로세스로 4주 안에 완성합니다
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            무료 상담 신청하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
