import React from 'react';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const HighlightProjects: React.FC = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 4); // 최대 4개

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            대표 프로젝트 하이라이트
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            실제 운영 가능한 수준으로 구축한 Featured 프로젝트
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightProjects;
