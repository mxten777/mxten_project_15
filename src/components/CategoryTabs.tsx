import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, getCategoryCount } from '../data/portfolio';

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showCounts?: boolean;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  selectedCategory, 
  onCategoryChange,
  showCounts = true 
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((category) => {
        const isActive = selectedCategory === category;
        const count = getCategoryCount(category);
        
        return (
          <motion.button
            key={category}
            onClick={() => { onCategoryChange(category); }}
            className={`
              relative px-6 py-3 rounded-full font-medium transition-all duration-300
              ${isActive 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }
              border-2 ${isActive ? 'border-transparent' : 'border-gray-200 dark:border-gray-700'}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`${category} 카테고리 필터`}
            aria-pressed={isActive}
          >
            <span className="flex items-center gap-2">
              {category}
              {showCounts && (
                <span className={`
                  text-xs font-bold px-2 py-0.5 rounded-full
                  ${isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }
                `}>
                  {count}
                </span>
              )}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
