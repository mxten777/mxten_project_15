/**
 * Figma Design System - Border Radius Tokens
 * 
 * 이 파일은 Figma의 Corner Radius와 1:1 대응됩니다.
 * Figma: Effects > Corner Radius
 */

export const radius = {
  // Figma: Radius / None
  none: {
    value: '0',           // Figma: Radius / None
    className: 'rounded-none',
  },

  // Figma: Radius / SM
  sm: {
    value: '0.375rem',    // 6px - Figma: Radius / SM
    className: 'rounded-md',
  },

  // Figma: Radius / MD
  md: {
    value: '0.5rem',      // 8px - Figma: Radius / MD
    className: 'rounded-lg',
  },

  // Figma: Radius / LG
  lg: {
    value: '0.75rem',     // 12px - Figma: Radius / LG
    className: 'rounded-xl',
  },

  // Figma: Radius / XL
  xl: {
    value: '1rem',        // 16px - Figma: Radius / XL
    className: 'rounded-2xl',
  },

  // Figma: Radius / Full
  full: {
    value: '9999px',      // Figma: Radius / Full (Pill)
    className: 'rounded-full',
  },
} as const;

export type RadiusToken = typeof radius;
export type RadiusScale = keyof typeof radius;
