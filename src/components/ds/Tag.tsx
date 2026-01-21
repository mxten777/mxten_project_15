/**
 * Figma Design System - Tag Component
 * 
 * Figma: Components > Tag
 * Variants: primary | secondary | gray | accent
 * Sizes: sm | md
 */

import React from 'react';
import { typography } from '../../design-tokens/typography';
import { radius } from '../../design-tokens/radius';

// Figma: Component Properties
export interface TagProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gray' | 'accent';  // Figma: Tag / Variant
  size?: 'sm' | 'md';                                      // Figma: Tag / Size
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

/**
 * Tag Component
 * 
 * Figma: Components > Tag
 * - 카테고리, 기술 스택, 필터 등에 사용
 * - Variant별 색상 정의
 */
export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'gray',
  size = 'sm',
  icon,
  onClick,
  selected = false,
  className = '',
}) => {
  // Figma: Tag / Variant / Primary
  const variantClasses = {
    primary: `
      bg-blue-100 dark:bg-blue-900/30
      text-blue-700 dark:text-blue-300
      border border-blue-200 dark:border-blue-700
      ${selected ? 'ring-2 ring-blue-500' : ''}
    `,
    // Figma: Tag / Variant / Secondary
    secondary: `
      bg-purple-100 dark:bg-purple-900/30
      text-purple-700 dark:text-purple-300
      border border-purple-200 dark:border-purple-700
      ${selected ? 'ring-2 ring-purple-500' : ''}
    `,
    // Figma: Tag / Variant / Gray
    gray: `
      bg-gray-100 dark:bg-gray-700
      text-gray-700 dark:text-gray-300
      border border-gray-200 dark:border-gray-600
      ${selected ? 'ring-2 ring-gray-500' : ''}
    `,
    // Figma: Tag / Variant / Accent
    accent: `
      bg-yellow-100 dark:bg-yellow-900/30
      text-yellow-800 dark:text-yellow-300
      border border-yellow-200 dark:border-yellow-700
      ${selected ? 'ring-2 ring-yellow-500' : ''}
    `,
  };

  // Figma: Tag / Size / SM
  const sizeClasses = {
    sm: `px-2 py-1 ${typography.caption.className} ${radius.md.className}`,
    // Figma: Tag / Size / MD
    md: `px-3 py-1.5 ${typography.bodySmall.className} ${radius.md.className}`,
  };

  const baseClasses = `
    inline-flex items-center gap-1
    font-medium
    transition-all duration-200
    ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''}
  `;

  return (
    <span
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {Boolean(icon) && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Tag;
