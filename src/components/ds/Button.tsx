/**
 * Figma Design System - Button Component
 * 
 * Figma: Components > Button
 * Variants: primary | secondary | ghost
 * Sizes: sm | md | lg
 */

import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '../../design-tokens/typography';
import { radius } from '../../design-tokens/radius';
import { shadows } from '../../design-tokens/shadows';

// Figma: Component Properties
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';  // Figma: Button / Variant
  size?: 'sm' | 'md' | 'lg';                    // Figma: Button / Size
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Button Component
 * 
 * Figma: Components > Button
 * - Variant별 색상 및 스타일 정의
 * - Size별 padding 및 typography 정의
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  icon,
  iconPosition = 'right',
  type = 'button',
  className = '',
}) => {
  // Figma: Button / Variant / Primary
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
      hover:shadow-lg hover:scale-105
      active:scale-100
      disabled:opacity-50 disabled:cursor-not-allowed
      ${shadows.lg.className}
    `,
    // Figma: Button / Variant / Secondary
    secondary: `
      bg-white/10 backdrop-blur-xl
      text-white
      border-2 border-white/30
      hover:bg-white/20 hover:scale-105
      active:scale-100
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    // Figma: Button / Variant / Ghost
    ghost: `
      bg-transparent
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
      active:bg-gray-200 dark:active:bg-gray-700
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };

  // Figma: Button / Size / SM
  const sizeClasses = {
    sm: `px-4 py-2 ${typography.buttonSmall.className} ${radius.md.className}`,
    // Figma: Button / Size / MD
    md: `px-6 py-3 ${typography.button.className} ${radius.lg.className}`,
    // Figma: Button / Size / LG
    lg: `px-8 py-4 ${typography.buttonLarge.className} ${radius.xl.className}`,
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold
    transition-all duration-300
    ${fullWidth ? 'w-full' : ''}
  `;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {Boolean(icon) && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {Boolean(icon) && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
};

export default Button;
