import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag, Star, Grid, List } from 'lucide-react';
import { categories, getProjectsByCategory, getFeaturedProjects, categoryLabels } from '../data/projects';
import Interactive3DCard from '../components/Interactive3DCard';
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
  
  const filteredProjects = showFeatured 
    ? getFeaturedProjects() 
    : getProjectsByCategory(selectedCategory === "전체" ? "all" : selectedCategory);

  const handleDemoClick = (project: { status?: string; url?: string }) => {
    if (project.status === 'concept') {
      alert('🔍 검토중인 아이디어 프로젝트입니다.\n\n현재 기획 단계에 있으며, 향후 개발 예정입니다.\n문의사항이 있으시면 연락주세요!');
      return;
    }
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
  <section className="morphing-bg particle-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <motion.h1 
              className="text-display font-black font-display mb-6 tracking-tighter"
              initial={{ opacity: 0, rotateX: -15 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              바이브 코딩{' '}
              <motion.span 
                className="text-gradient bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                MVP 포트폴리오
              </motion.span>
            </motion.h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              2025년 10월 현재 <strong>28개</strong>의 리뉴얼된 MVP 프로젝트들
              <br />
              <span className="text-lg">🏢 기업홈페이지 | 💊 의료복지 | 🏛️ 공공서비스 | 🎓 교육플랫폼</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                ✅ <strong>28개</strong> 리뉴얼 완료
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
                  <Interactive3DCard
                    className="glass-effect bg-white dark:bg-gray-800 backdrop-blur-sm 
                             rounded-3xl border-2 border-gray-200 dark:border-gray-600 
                             overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow"
                    intensity={0.3}
                    glowEffect={true}
                  >
                  {/* Project Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                    {/* Overlay with badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {project.featured && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-sans bg-yellow-500 text-white shadow-lg backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1" />
                          추천
                        </div>
                      )}
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <div className="px-3 py-1 bg-gray-900/70 text-white rounded-full text-xs font-bold backdrop-blur-sm">
                        {project.category}
                      </div>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-black font-heading text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors drop-shadow-sm dark:drop-shadow-lg line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3 font-medium">
                      {project.description}
                    </p>
                    
                    {/* Project Meta */}
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
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
                    
                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <Link
                        to={`/mvp/${project.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-bold border border-gray-200 dark:border-gray-600 hover:scale-105"
                      >
                        자세히 보기
                      </Link>
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        라이브 데모
                      </button>
                    </div>
                  </div>
                  </Interactive3DCard>
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