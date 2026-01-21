/**
 * Figma Design System - Badge Component
 * 
 * Figma: Components > Badge
 * - Featured, New, Hot 등의 뱃지 표시
 */

import React from 'react';
import { typography } from '../../design-tokens/typography';
import { radius } from '../../design-tokens/radius';

// Figma: Component Properties
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'featured' | 'new' | 'hot' | 'default';  // Figma: Badge / Variant
  size?: 'sm' | 'md';                                 // Figma: Badge / Size
  className?: string;
}

/**
 * Badge Component
 * 
 * Figma: Components > Badge
 * - 카드 위 강조 표시에 사용
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  // Figma: Badge / Variant / Featured
  const variantClasses = {
    featured: `
      bg-yellow-400 text-gray-900
      shadow-lg
    `,
    // Figma: Badge / Variant / New
    new: `
      bg-green-500 text-white
      shadow-md
    `,
    // Figma: Badge / Variant / Hot
    hot: `
      bg-red-500 text-white
      shadow-md
    `,
    // Figma: Badge / Variant / Default
    default: `
      bg-gray-700 text-white
      shadow-md
    `,
  };

  // Figma: Badge / Size
  const sizeClasses = {
    sm: `px-2 py-1 ${typography.caption.className}`,
    md: `px-3 py-1.5 ${typography.bodySmall.className}`,
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1
        font-bold
        ${radius.full.className}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
};

export default Badge;
