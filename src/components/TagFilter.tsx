import React from 'react';
import { motion } from 'framer-motion';
import { Tag, X } from 'lucide-react';

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ 
  allTags, 
  selectedTags, 
  onTagToggle, 
  onClearAll 
}) => {
  const popularTags = allTags.slice(0, 15); // 인기 태그 15개만 표시

  return (
    <div className="space-y-4">
      {/* 선택된 태그 표시 */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            선택된 태그:
          </span>
          {selectedTags.map(tag => (
            <motion.button
              key={tag}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={() => { onTagToggle(tag); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <span>{tag}</span>
              <X className="w-3.5 h-3.5" />
            </motion.button>
          ))}
          <button
            onClick={onClearAll}
            className="text-sm text-red-600 dark:text-red-400 hover:underline"
          >
            전체 해제
          </button>
        </div>
      )}

      {/* 인기 태그 목록 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          <Tag className="w-4 h-4" />
          <span>인기 태그</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => { onTagToggle(tag); }}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all
                  ${isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }
                `}
                aria-label={`${tag} 태그 필터 ${isSelected ? '해제' : '선택'}`}
                aria-pressed={isSelected}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* 전체 태그 펼치기 (옵션) */}
      {allTags.length > 15 && (
        <details className="text-sm">
          <summary className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline">
            전체 태그 보기 ({allTags.length}개)
          </summary>
          <div className="flex flex-wrap gap-2 mt-3">
            {allTags.slice(15).map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => { onTagToggle(tag); }}
                  className={`
                    px-2.5 py-1 rounded-full text-xs font-medium transition-all
                    ${isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </details>
      )}
    </div>
  );
};

export default TagFilter;
