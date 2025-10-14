import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  webp?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
  webp,
  loading = 'lazy',
  priority = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setImageError(true);
    if (fallback && imgRef.current) {
      imgRef.current.src = fallback;
    }
  }, [fallback]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse">
          <div className="shimmer-effect absolute inset-0" />
        </div>
      )}

      {/* Optimized Picture Element with WebP */}
      <picture>
        {webp && (
          <source 
            srcSet={webp} 
            type="image/webp"
          />
        )}
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: imageLoaded ? 1 : 1.1,
            opacity: imageLoaded ? 1 : 0
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </picture>

      {/* Error State */}
      {imageError && !fallback && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">이미지를 불러올 수 없습니다</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;