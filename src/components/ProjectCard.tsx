import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Tag } from 'lucide-react';
import { PortfolioProject } from '../data/portfolio';
import { getThumbnailPath, handleImageError } from '../utils/thumbnailUtils';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const thumbnailPath = getThumbnailPath(project.demoUrl || '', project.category);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.demoUrl !== undefined && project.demoUrl !== '') {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5) }}
      className="group"
    >
      <Link to={`/portfolio/${project.slug}`} className="block h-full">
        <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
          {/* Thumbnail */}
          <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={thumbnailPath}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => handleImageError(e, project.category)}
            />
            {project.featured && (
              <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm">
                Featured
              </div>
            )}
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center gap-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300">
                <Tag className="w-3 h-3" />
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-base font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1 line-clamp-2 leading-relaxed">
              {project.oneLiner}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.slice(0, 3).map((tech: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs px-2 py-0.5 text-slate-400">+{project.stack.length - 3}</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-auto">
              <button
                onClick={handleDemoClick}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors duration-200"
                aria-label={`${project.title} 데모 보기`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </button>
              <div className="flex-1 flex items-center justify-center px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200">
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
