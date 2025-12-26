import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Grid, List, Calendar, Tag } from 'lucide-react';
import { categories, getProjectsByCategory, getFeaturedProjects, categoryLabels } from '../data/projects';

import ScrollTriggered from '../components/ScrollTriggered';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [showFeatured, setShowFeatured] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // 카테고리별 프로젝트 수 계산
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(category => {
      if (category === 'all') {
        counts[category] = getProjectsByCategory(category).length;
      } else {
        counts[category] = getProjectsByCategory(category).length;
      }
    });
    return counts;
  }, []);
  
  const filteredProjects = useMemo(() => {
    return showFeatured 
      ? getFeaturedProjects() 
      : getProjectsByCategory(selectedCategory === "전체" ? "all" : selectedCategory);
  }, [showFeatured, selectedCategory]);

  const handleDemoClick = useCallback((project: { status?: string; url?: string }) => {
    if (project.status === 'concept') {
      alert('🔍 검토중인 아이디어 프로젝트입니다.\n\n현재 기획 단계에 있으며, 향후 개발 예정입니다.\n문의사항이 있으시면 연락주세요!');
      return;
    }
    window.open(project.url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
      <section data-has-hero className="morphing-bg particle-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight"
              initial={{ opacity: 0, rotateX: -15 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}
            >
              <span className="text-white">바이브 코딩</span>{' '}
              <motion.span 
                className="text-yellow-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ 
                  backgroundSize: "200% 200%",
                  textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8)'
                }}
              >
                MVP 포트폴리오
              </motion.span>
            </motion.h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-medium text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
              2025년 11월 현재 <strong className="text-yellow-300">40+개</strong>의 리뉴얼된 MVP 프로젝트들
              <br />
              <span className="text-base">🏢 기업홈페이지 | 💊 의료복지 | 🏛️ 공공서비스 | 🎓 교육플랫폼</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                ✅ <strong>40+개</strong> 리뉴얼 완료
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                🚀 <strong>평균 1-2주</strong> 개발 기간
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                🎯 <strong>100%</strong> 성공적 배포
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
  <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 mb-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowFeatured(!showFeatured)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-sans transition-all duration-300 ${
                  showFeatured
                    ? 'bg-yellow-500 text-white shadow-lg border-2 border-yellow-400 transform scale-105'
                    : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-700 border border-yellow-300 dark:border-yellow-600'
                }`}
              >
                <Star className="w-4 h-4" />
                <span>추천 프로젝트</span>
                <span className={`inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full ${
                  showFeatured 
                    ? 'bg-white text-yellow-500'
                    : 'bg-yellow-500 dark:bg-yellow-600 text-white'
                }`}>
                  {getFeaturedProjects().length}
                </span>
              </button>
              {categories.map((category) => {
                const displayName = categoryLabels[category] || category;
                const count = categoryCounts[category] || 0;
                const hasProjects = count > 0;
                const isSelected = (selectedCategory === displayName || (category === 'all' && selectedCategory === '전체')) && !showFeatured;
                
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(displayName);
                      setShowFeatured(false);
                    }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold font-sans transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-500 text-white shadow-lg border-2 border-blue-400 transform scale-105'
                        : hasProjects
                        ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700 border border-green-300 dark:border-green-600'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-600 cursor-default opacity-60'
                    }`}
                    disabled={!hasProjects && category !== 'all'}
                  >
                    <span>{displayName}</span>
                    {hasProjects && (
                      <span className={`inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full ${
                        isSelected 
                          ? 'bg-white text-blue-500'
                          : 'bg-green-500 dark:bg-green-600 text-white'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-600 rounded-lg p-1 border border-gray-300 dark:border-gray-500">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded font-semibold text-sm transition-all ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded font-semibold text-sm transition-all ${
                  viewMode === 'list' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 font-semibold">
            총 <strong className="text-blue-600 dark:text-blue-400">{filteredProjects.length}개</strong> 프로젝트
            {showFeatured && " (추천 프로젝트)"}
            {!showFeatured && selectedCategory !== "전체" && ` (${selectedCategory} 카테고리)`}
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
  <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <ScrollTriggered
                  key={project.id}
                  animation="scale"
                  delay={index * 0.05}
                  duration={0.5}
                >
                  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 
                                 shadow-lg hover:shadow-premium transition-all duration-400 overflow-hidden h-full
                                 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-2">
                    {/* Premium 썸네일 영역 with 3D effect */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-750 dark:to-gray-700">
                      {/* 이미지 */}
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                          <div className="text-7xl opacity-40 group-hover:scale-110 transition-transform duration-400">
                            {project.category.includes('기업') ? '🏢' :
                             project.category.includes('의료') ? '🏥' :
                             project.category.includes('교육') ? '🎓' :
                             project.category.includes('공공') ? '🏛️' :
                             project.category.includes('게임') ? '🎮' : '💻'}
                          </div>
                        </div>
                      )}
                      
                      {/* 그라데이션 오버레이 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                      
                      {/* Premium 배지들 */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {project.featured && (
                          <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-premium backdrop-blur-sm">
                            <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                            추천
                          </div>
                        )}
                        {project.status && (
                          <div className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-xl border ${
                            project.status === 'live' ? 'bg-green-500/90 text-white border-green-400/50' :
                            project.status === 'beta' ? 'bg-blue-500/90 text-white border-blue-400/50' :
                            'bg-gray-500/90 text-white border-gray-400/50'
                          }`}>
                            {project.status === 'live' ? '운영중' : project.status === 'beta' ? '베타' : '개발중'}
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-full text-xs font-bold text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-600/50 shadow-lg">
                          {project.category}
                        </div>
                      </div>
                      
                      {/* Hover 시 나타나는 추가 정보 */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                        <div className="flex gap-2 flex-wrap">
                          {project.techStack?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded text-xs font-semibold text-gray-700 dark:text-gray-300 border border-white/50 dark:border-gray-700/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Premium 프로젝트 정보 */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* 프로젝트 메타 정보 */}
                      {(project.views || project.likes || project.duration) && (
                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                          {project.views && (
                            <span className="flex items-center gap-1">
                              👁️ {project.views.toLocaleString()}
                            </span>
                          )}
                          {project.likes && (
                            <span className="flex items-center gap-1">
                              ❤️ {project.likes}
                            </span>
                          )}
                          {project.duration && (
                            <span className="flex items-center gap-1">
                              ⏱️ {project.duration}
                            </span>
                          )}
                        </div>
                      )}
                    
                      {/* Premium 라이브 데모 버튼 */}
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="group/btn relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-400 flex items-center justify-center gap-2 shadow-lg hover:shadow-premium overflow-hidden"
                      >
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-800"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          라이브 데모 보기
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </ScrollTriggered>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 animate-fade-in border-2 border-gray-200 dark:border-gray-600"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs font-bold font-sans text-gray-800 dark:text-gray-200 border dark:border-gray-500">
                          {project.category}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 mb-2">
                        {project.featured && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-sans bg-yellow-200 dark:bg-yellow-500 text-yellow-900 dark:text-yellow-100 flex-shrink-0 border border-yellow-300 dark:border-yellow-400">
                            <Star className="w-3 h-3 mr-1" />
                            추천
                          </div>
                        )}
                        <h3 className="text-xl font-black font-heading text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-200 mb-3 font-semibold">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 rounded text-xs font-bold font-sans bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 border border-blue-200 dark:border-blue-600"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 font-semibold">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        라이브 데모
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              당신의 아이디어도 MVP로 만들어보세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              검증된 방법론으로 빠르고 효율적인 MVP 개발을 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold font-heading rounded-2xl shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-all animate-bounce-gentle"
              >
                무료 상담 신청하기
              </a>
              <a
                href="/"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold font-heading rounded-2xl shadow-lg hover:bg-white hover:text-gray-900 hover:scale-105 transition-all animate-fade-in"
              >
                서비스 소개 보기
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;