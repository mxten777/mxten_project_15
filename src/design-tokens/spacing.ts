/**
 * Figma Design System - Spacing Tokens
 * 
 * 이 파일은 Figma의 Spacing Grid와 1:1 대응됩니다.
 * Figma: Layout > Spacing
 */

export const spacing = {
  // Figma: Spacing / 4px
  xs: {
    value: '0.25rem',     // 4px - Figma: Spacing / XS
    className: 'p-1',
  },

  // Figma: Spacing / 8px
  sm: {
    value: '0.5rem',      // 8px - Figma: Spacing / SM
    className: 'p-2',
  },

  // Figma: Spacing / 16px
  md: {
    value: '1rem',        // 16px - Figma: Spacing / MD
    className: 'p-4',
  },

  // Figma: Spacing / 24px
  lg: {
    value: '1.5rem',      // 24px - Figma: Spacing / LG
    className: 'p-6',
  },

  // Figma: Spacing / 32px
  xl: {
    value: '2rem',        // 32px - Figma: Spacing / XL
    className: 'p-8',
  },

  // Figma: Spacing / 48px
  '2xl': {
    value: '3rem',        // 48px - Figma: Spacing / 2XL
    className: 'p-12',
  },

  // Figma: Spacing / 64px
  '3xl': {
    value: '4rem',        // 64px - Figma: Spacing / 3XL
    className: 'p-16',
  },
} as const;

/**
 * Figma: Gap (간격) 토큰
 */
export const gap = {
  xs: 'gap-1',    // Figma: Gap / 4px
  sm: 'gap-2',    // Figma: Gap / 8px
  md: 'gap-4',    // Figma: Gap / 16px
  lg: 'gap-6',    // Figma: Gap / 24px
  xl: 'gap-8',    // Figma: Gap / 32px
} as const;

/**
 * Figma: Margin 토큰
 */
export const margin = {
  xs: 'mb-1',     // Figma: Margin Bottom / 4px
  sm: 'mb-2',     // Figma: Margin Bottom / 8px
  md: 'mb-4',     // Figma: Margin Bottom / 16px
  lg: 'mb-6',     // Figma: Margin Bottom / 24px
  xl: 'mb-8',     // Figma: Margin Bottom / 32px
} as const;

export type SpacingToken = typeof spacing;
export type SpacingScale = keyof typeof spacing;
