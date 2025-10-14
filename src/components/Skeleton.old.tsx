import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';
  width?: string | number;
  height?: string | number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  animation = 'pulse',
  width,
  height
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rounded':
        return 'rounded-lg';
      case 'rectangular':
        return 'rounded-none';
      case 'text':
      default:
        return 'rounded';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'wave':
        return 'shimmer-effect';
      case 'pulse':
        return 'animate-pulse';
      case 'none':
      default:
        return '';
    }
  };

  const style = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1rem' : undefined),
  };

  return (
    <motion.div
      className={`
        bg-gray-200 dark:bg-gray-700 
        ${getVariantClasses()} 
        ${getAnimationClasses()} 
        ${className}
      `}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

// 복합 스켈레톤 컴포넌트들
export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton variant="circular" width="3rem" height="3rem" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="60%" height="1.25rem" />
        <Skeleton variant="text" width="40%" height="1rem" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton variant="text" height="1rem" />
      <Skeleton variant="text" height="1rem" width="80%" />
      <Skeleton variant="text" height="1rem" width="60%" />
    </div>
    <div className="mt-4 flex space-x-2">
      <Skeleton variant="rounded" width="4rem" height="2rem" />
      <Skeleton variant="rounded" width="3rem" height="2rem" />
    </div>
  </div>
);

export const ProjectSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
    <Skeleton variant="rectangular" height="12rem" />
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <Skeleton variant="text" width="70%" height="1.5rem" />
        <Skeleton variant="circular" width="2rem" height="2rem" />
      </div>
      <div className="space-y-2 mb-4">
        <Skeleton variant="text" height="1rem" />
        <Skeleton variant="text" height="1rem" width="90%" />
        <Skeleton variant="text" height="1rem" width="70%" />
      </div>
      <div className="flex space-x-2 mb-4">
        <Skeleton variant="rounded" width="3rem" height="1.5rem" />
        <Skeleton variant="rounded" width="4rem" height="1.5rem" />
        <Skeleton variant="rounded" width="2.5rem" height="1.5rem" />
      </div>
      <div className="flex space-x-3">
        <Skeleton variant="rounded" width="6rem" height="2.5rem" />
        <Skeleton variant="rounded" width="5rem" height="2.5rem" />
      </div>
    </div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="text-center">
    <Skeleton variant="text" width="4rem" height="3rem" className="mx-auto mb-2" />
    <Skeleton variant="text" width="6rem" height="1rem" className="mx-auto" />
  </div>
);

export const BentoSkeleton: React.FC = () => (
  <div className="grid-bento gap-6">
    <div className="bento-large">
      <Skeleton variant="rounded" height="20rem" />
    </div>
    <div className="bento-medium">
      <Skeleton variant="rounded" height="16rem" />
    </div>
    <div className="bento-small">
      <Skeleton variant="rounded" height="12rem" />
    </div>
    <div className="bento-small">
      <Skeleton variant="rounded" height="12rem" />
    </div>
    <div className="bento-small">
      <Skeleton variant="rounded" height="12rem" />
    </div>
    <div className="bento-medium">
      <Skeleton variant="rounded" height="16rem" />
    </div>
  </div>
);

export default Skeleton;