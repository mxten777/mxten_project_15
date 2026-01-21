/**
 * Figma Design System - Typography Components
 * 
 * Figma: Components > Typography
 * - Heading (H1, H2, H3, H4)
 * - Text (Body, BodySmall, Caption)
 */

import React from 'react';
import { typography } from '../../design-tokens/typography';
import { colorClasses } from '../../design-tokens/colors';

// Figma: Heading Component Properties
export interface HeadingProps {
  level: '1' | '2' | '3' | '4';  // Figma: Heading / Level
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
  style?: React.CSSProperties;
}

/**
 * Heading Component
 * 
 * Figma: Components > Typography > Heading
 * - level에 따라 H1~H4 렌더링
 * - Design Token 기반 스타일 적용
 */
export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
  color = 'primary',
  style,
}) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  const styles = typography[`h${level}` as keyof typeof typography];

  // Figma: Text / Color
  const colorClass = {
    primary: `${colorClasses.textPrimaryLight} dark:${colorClasses.textPrimaryDark}`,
    secondary: `${colorClasses.textSecondaryLight} dark:${colorClasses.textSecondaryDark}`,
    muted: colorClasses.textMuted,
    accent: colorClasses.textAccent,
  };

  return (
    <Tag
      style={style}
      className={`
        ${styles.className}
        ${colorClass[color]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Tag>
  );
};

// Figma: Text Component Properties
export interface TextProps {
  variant?: 'bodyLarge' | 'body' | 'bodySmall' | 'caption';  // Figma: Text / Variant
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'muted';
  as?: 'p' | 'span' | 'div';
  style?: React.CSSProperties;
}

/**
 * Text Component
 * 
 * Figma: Components > Typography > Text
 * - variant에 따라 Body/Caption 스타일 적용
 */
export const Text: React.FC<TextProps> = ({
  variant = 'body',
  children,
  className = '',
  color = 'primary',
  as: Tag = 'p',
  style,
}) => {
  const styles = typography[variant];

  // Figma: Text / Color
  const colorClass = {
    primary: `${colorClasses.textPrimaryLight} dark:${colorClasses.textPrimaryDark}`,
    secondary: `${colorClasses.textSecondaryLight} dark:${colorClasses.textSecondaryDark}`,
    muted: colorClasses.textMuted,
  };

  return (
    <Tag
      style={style}
      className={`
        ${styles.className}
        ${colorClass[color]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Tag>
  );
};
