import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';
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

  const filteredProjects = useMemo(() => {
    let projects = portfolioProjects;

    if (selectedCategory !== '전체') {
      projects = getProjectsByCategory(selectedCategory);
    }

    if (searchQuery.trim() !== '' && searchQuery.length > 0) {
      const lowerQuery = searchQuery.toLowerCase();
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) ||
        project.oneLiner.toLowerCase().includes(lowerQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        project.fitFor.toLowerCase().includes(lowerQuery)
      );
    }

    if (selectedTags.length > 0) {
      projects = projects.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }

    if (sortBy === 'recommended') {
      projects = [...projects].sort((a, b) => {
        if (a.featured === b.featured) return b.yearMonth.localeCompare(a.yearMonth);
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
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero — Soft Gradient */}
      <section data-has-hero className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-violet-400/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-indigo-400/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="text-white">바이브 코딩 </span>
              <span className="bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">MVP 포트폴리오</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-medium mb-10">
              실전에서 검증된 <span className="text-amber-200 font-bold">80+</span>개 프로젝트
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['🏢 기업·기관', '🎓 교육·AI', '💼 SaaS', '🏛️ 공공·문화'].map((cat) => (
                <span key={cat} className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-medium">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <CategoryTabs
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            showCounts={true}
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all duration-200 text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-slate-700 dark:text-slate-300">필터 {showFilters ? '숨기기' : '보기'}</span>
              {selectedTags.length > 0 && (
                <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-bold">
                  {selectedTags.length}
                </span>
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            >
              <option value="recommended">추천순</option>
              <option value="latest">최신순</option>
              <option value="oldest">오래된순</option>
            </select>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800"
            >
              <TagFilter
                allTags={allTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                onClearAll={() => setSelectedTags([])}
              />
            </motion.div>
          )}

          <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
            <span>{filteredProjects.length}개의 프로젝트</span>
            {(searchQuery !== '' || selectedTags.length > 0) && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedTags([]); setSelectedCategory('전체'); }}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                필터 초기화
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-3">검색 결과가 없습니다</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedTags([]); setSelectedCategory('전체'); }}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm"
              >
                필터 초기화하기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            당신의 프로젝트도 시작해보세요
          </h2>
          <p className="text-lg text-white/85 mb-8 font-medium">
            검증된 개발 프로세스로 4주 안에 완성합니다
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            무료 상담 신청하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
