import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag, Star, Grid, List, Eye, Heart, Zap, Clock, Code2, Sparkles, Trophy } from 'lucide-react';
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
  <section className="morphing-bg particle-bg text-white py-20 relative overflow-hidden">
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
            >
              바이브 코딩{' '}
              <motion.span 
                className="text-white"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                MVP 포트폴리오
              </motion.span>
            </motion.h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto font-medium">
              2025년 10월 현재 <strong>35+개</strong>의 리뉴얼된 MVP 프로젝트들
              <br />
              <span className="text-base opacity-80">🏢 기업홈페이지 | 💊 의료복지 | 🏛️ 공공서비스 | 🎓 교육플랫폼</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                ✅ <strong>35+개</strong> 리뉴얼 완료
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
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <ScrollTriggered
                  key={project.id}
                  animation="scale"
                  delay={index * 0.1}
                  duration={0.6}
                >
                  <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 
                                 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden h-full
                                 hover:border-blue-400 dark:hover:border-blue-500">
                    {/* 프로젝트 썸네일 */}
                    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    
                    <img 
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center";
                      }}
                    />

                    {/* 💫 스파클링 오버레이 */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
                    </div>

                    {/* 🏆 상태 및 배지들 */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {project.featured && (
                        <motion.div 
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg backdrop-blur-sm"
                          animate={{ 
                            boxShadow: ["0 0 10px #f59e0b", "0 0 20px #f59e0b", "0 0 10px #f59e0b"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-3 h-3 mr-1" />
                          <Sparkles className="w-3 h-3 mr-1" />
                          추천
                        </motion.div>
                      )}
                      
                      {/* 프로젝트 상태 */}
                      {project.status && (
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                          project.status === 'live' ? 'bg-green-500 text-white' :
                          project.status === 'beta' ? 'bg-blue-500 text-white' :
                          project.status === 'coming-soon' ? 'bg-purple-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          <Zap className="w-3 h-3 mr-1" />
                          {project.status === 'live' ? 'LIVE' : 
                           project.status === 'beta' ? 'BETA' :
                           project.status === 'coming-soon' ? 'COMING' : 'MAINTENANCE'}
                        </div>
                      )}

                      {/* 난이도 */}
                      {project.difficulty && (
                        <div className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                          project.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          project.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          project.difficulty === 'hard' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }`}>
                          {project.difficulty === 'easy' ? '초급' :
                           project.difficulty === 'medium' ? '중급' :
                           project.difficulty === 'hard' ? '고급' : '전문가'}
                        </div>
                      )}
                    </div>

                    {/* 카테고리 & 통계 */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                      <div className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                        {project.category}
                      </div>
                      
                      {/* 조회수 & 좋아요 */}
                      <div className="flex gap-2">
                        {project.views && (
                          <div className="flex items-center px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-bold backdrop-blur-sm">
                            <Eye className="w-3 h-3 mr-1 text-blue-500" />
                            {project.views.toLocaleString()}
                          </div>
                        )}
                        {project.likes && (
                          <div className="flex items-center px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-bold backdrop-blur-sm">
                            <Heart className="w-3 h-3 mr-1 text-red-500" />
                            {project.likes}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 그라디언트 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                    {/* 프로젝트 정보 */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    
                    {/* 🔥 완성도 진행률 바 */}
                    {project.completion && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-400">완성도</span>
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{project.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-1">
                          <div 
                            className="h-full bg-blue-500 rounded"
                            style={{ width: `${project.completion}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* 🛠️ 기술 스택 */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Code2 className="w-4 h-4 mr-1 text-indigo-500" />
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-400">기술 스택</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 4).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-bold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-700"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.techStack.length > 4 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                              +{project.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* 📅 프로젝트 메타 정보 */}
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-green-500" />
                        {project.date}
                      </div>
                      {project.duration && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-blue-500" />
                          {project.duration}
                        </div>
                      )}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-3 py-1 rounded text-xs font-bold font-sans bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 border border-blue-200 dark:border-blue-600"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* 🚀 궁극의 액션 버튼들 */}
                    <div className="flex gap-3 mt-auto">
                      <Link
                        to={`/mvp/${project.id}`}
                        className="flex-1 relative group/btn overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-lg"></div>
                        <div className="relative inline-flex w-full items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 text-sm font-bold border border-gray-200 dark:border-gray-600 group-hover/btn:scale-105 group-hover/btn:shadow-xl">
                          <Trophy className="w-4 h-4 mr-2 text-amber-500" />
                          자세히 보기
                        </div>
                      </Link>
                      
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="flex-1 relative group/demo overflow-hidden"
                      >
                        {/* 네온 글로우 효과 */}
                        <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-0 group-hover/demo:opacity-20 transition-opacity duration-300 blur-lg"></div>
                        
                        {/* 버튼 본체 */}
                        <motion.div 
                          className="relative inline-flex w-full items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-md hover:shadow-lg"
                          whileHover={{ 
                            boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)",
                            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* 스파클 애니메이션 */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"
                            animate={{
                              x: ["-100%", "100%"]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          />
                          
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span className="relative z-10">라이브 데모</span>
                          <Sparkles className="w-4 h-4 ml-2 animate-spin" />
                        </motion.div>
                      </button>
                    </div>
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
                    
                    <div className="mt-4 md:mt-0 md:ml-6 flex gap-2">
                      <Link
                        to={`/mvp/${project.id}`}
                        className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all font-semibold border border-gray-300 dark:border-gray-600"
                      >
                        자세히 보기
                      </Link>
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="inline-flex items-center px-4 py-2 rounded-2xl shadow bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-500 dark:hover:to-purple-500 hover:scale-105 transition-all font-semibold border border-blue-600 dark:border-blue-500"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        데모 보기
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