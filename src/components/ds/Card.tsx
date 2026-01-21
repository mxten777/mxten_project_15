/**
 * Figma Design System - Card Component
 * 
 * Figma: Components > Card
 * Variants: default | featured
 */

import React from 'react';
import { motion } from 'framer-motion';
import { radius } from '../../design-tokens/radius';
import { shadows } from '../../design-tokens/shadows';
import { spacing } from '../../design-tokens/spacing';

// Figma: Component Properties
export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured';  // Figma: Card / Variant
  padding?: 'sm' | 'md' | 'lg';      // Figma: Card / Padding
  hover?: boolean;                    // Figma: Card / Hover Effect
  className?: string;
  onClick?: () => void;
}

/**
 * Card Component
 * 
 * Figma: Components > Card
 * - 일관된 padding, radius, shadow 적용
 * - Featured 카드는 특별한 시각적 강조
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  onClick,
}) => {
  // Figma: Card / Variant / Default
  const variantClasses = {
    default: `
      bg-white dark:bg-gray-800
      border border-gray-100 dark:border-gray-700
      ${shadows.lg.className}
    `,
    // Figma: Card / Variant / Featured
    featured: `
      bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700
      border border-blue-200 dark:border-purple-700
      ${shadows.xl.className}
    `,
  };

  // Figma: Card / Padding
  const paddingClasses = {
    sm: spacing.md.className,      // Figma: Spacing / 16px
    md: spacing.lg.className,      // Figma: Spacing / 24px
    lg: spacing.xl.className,      // Figma: Spacing / 32px
  };

  // Figma: Card / Hover Effect
  const hoverClasses = hover
    ? 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer'
    : '';

  const baseClasses = `
    ${radius.xl.className}
    overflow-hidden
    transition-all duration-300
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </motion.div>
  );
};

export default Card;
