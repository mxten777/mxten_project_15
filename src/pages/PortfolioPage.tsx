import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import CategoryTabs from '../components/CategoryTabs';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import { 
  portfolioProjects, 
  getProjectsByCategory, 
  getAllTags
} from '../data/portfolio';

type SortOption = 'recommended' | 'latest' | 'oldest';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [showFilters, setShowFilters] = useState(false);

  const allTags = useMemo(() => getAllTags(), []);

  // 필터링 로직
  const filteredProjects = useMemo(() => {
    let projects = portfolioProjects;

    // 1. 카테고리 필터
    if (selectedCategory !== '전체') {
      projects = getProjectsByCategory(selectedCategory);
    }

    // 2. 검색어 필터
    if (searchQuery.trim() !== '' && searchQuery.length > 0) {
      const lowerQuery = searchQuery.toLowerCase();
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) ||
        project.oneLiner.toLowerCase().includes(lowerQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        project.fitFor.toLowerCase().includes(lowerQuery)
      );
    }

    // 3. 태그 필터 (AND 조건)
    if (selectedTags.length > 0) {
      projects = projects.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }

    // 4. 정렬
    if (sortBy === 'recommended') {
      // Featured 우선, 그 다음 최신순
      projects = [...projects].sort((a, b) => {
        if (a.featured === b.featured) {
          return b.yearMonth.localeCompare(a.yearMonth);
        }
        return a.featured === true ? -1 : 1;
      });
    } else if (sortBy === 'latest') {
      projects = [...projects].sort((a, b) => b.yearMonth.localeCompare(a.yearMonth));
    } else if (sortBy === 'oldest') {
      projects = [...projects].sort((a, b) => a.yearMonth.localeCompare(b.yearMonth));
    }

    return projects;
  }, [selectedCategory, searchQuery, selectedTags, sortBy]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

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
              실전에서 검증된 <strong className="text-yellow-300">{portfolioProjects.length}개</strong> 프로젝트
              <br />
              <span className="text-base">🏢 기업·기관 | 🎓 교육·AI | 💼 SaaS | 🏛️ 공공·문화</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                ✅ <strong>{portfolioProjects.length}개</strong> 프로젝트 완료
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

      {/* Search & Filter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {/* 검색바 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </motion.div>

          {/* 카테고리 탭 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CategoryTabs 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showCounts={true}
            />
          </motion.div>

          {/* 필터 & 정렬 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* 필터 토글 버튼 */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>필터 {showFilters ? '숨기기' : '보기'}</span>
              {selectedTags.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                  {selectedTags.length}
                </span>
              )}
            </button>

            {/* 정렬 옵션 */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="recommended">추천순 (Featured 우선)</option>
                <option value="latest">최신순</option>
                <option value="oldest">오래된순</option>
              </select>
            </div>
          </div>

          {/* 태그 필터 (접기/펼치기) */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <TagFilter
                allTags={allTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                onClearAll={handleClearTags}
              />
            </motion.div>
          )}

          {/* 결과 수 표시 */}
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <span>
              {filteredProjects.length}개의 프로젝트가 검색되었습니다
            </span>
            {(searchQuery !== '' || selectedTags.length > 0) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                  setSelectedCategory('전체');
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                필터 초기화
              </button>
            )}
          </div>

          {/* Projects Grid */}
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
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
                검색 결과가 없습니다
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                  setSelectedCategory('전체');
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                필터 초기화하기
              </button>
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
