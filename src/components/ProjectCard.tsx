import React, { useRef, useCallback } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -7;
    const rotateY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }, []);

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
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transition: 'transform 0.15s ease-out, box-shadow 0.3s ease' }}
          className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-glow h-full flex flex-col"
        >
          {/* Thumbnail */}
          <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={thumbnailPath}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => handleImageError(e, project.category)}
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
