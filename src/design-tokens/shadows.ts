/**
 * Figma Design System - Shadow Tokens
 * 
 * 이 파일은 Figma의 Effect Styles (Shadows)와 1:1 대응됩니다.
 * Figma: Effects > Shadows
 */

export const shadows = {
  // Figma: Shadow / SM
  sm: {
    value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    className: 'shadow-sm',
  },

  // Figma: Shadow / Default
  default: {
    value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    className: 'shadow',
  },

  // Figma: Shadow / MD
  md: {
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    className: 'shadow-md',
  },

  // Figma: Shadow / LG
  lg: {
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    className: 'shadow-lg',
  },

  // Figma: Shadow / XL
  xl: {
    value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    className: 'shadow-xl',
  },

  // Figma: Shadow / 2XL
  '2xl': {
    value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    className: 'shadow-2xl',
  },

  // Figma: Shadow / None
  none: {
    value: 'none',
    className: 'shadow-none',
  },
} as const;

export type ShadowToken = typeof shadows;
export type ShadowScale = keyof typeof shadows;
