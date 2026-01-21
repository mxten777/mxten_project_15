import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag } from 'lucide-react';
import { PortfolioProject } from '../data/portfolio';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl !== undefined && project.demoUrl !== '') {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link 
        to={`/portfolio/${project.slug}`}
        className="block h-full"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-700 group-hover:scale-[1.02]">
          {/* 썸네일 */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset['errored']) {
                  target.dataset['errored'] = 'true';
                  target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(project.title)}`;
                }
              }}
            />
            {/* Featured 뱃지 */}
            {project.featured === true && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ Featured
              </div>
            )}
            {/* 카테고리 태그 */}
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>
          </div>

          {/* 콘텐츠 */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
              {project.oneLiner}
            </p>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.slice(0, 3).map((tech, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-2 mt-auto">
              <button
                onClick={handleDemoClick}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                aria-label={`${project.title} 데모 보기`}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </button>
              <div className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-sm font-semibold">
                자세히 보기
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
