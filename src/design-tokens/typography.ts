/**
 * Figma Design System - Typography Tokens
 * 
 * 이 파일은 Figma의 Text Style과 1:1 대응됩니다.
 * Figma: Assets > Text Styles
 */

export const typography = {
  // Figma: Typography / Heading / H1
  h1: {
    fontSize: '3.75rem',    // 60px - Figma: Typography / Heading / H1 / Size
    lineHeight: '1.2',      // Figma: Typography / Heading / H1 / Line Height
    fontWeight: '700',      // Figma: Typography / Heading / H1 / Weight (Bold)
    letterSpacing: '-0.02em', // Figma: Typography / Heading / H1 / Letter Spacing
    fontFamily: 'Poppins, sans-serif',
    className: 'text-6xl font-bold leading-tight tracking-tight',
  },

  // Figma: Typography / Heading / H2
  h2: {
    fontSize: '3rem',       // 48px - Figma: Typography / Heading / H2 / Size
    lineHeight: '1.25',     // Figma: Typography / Heading / H2 / Line Height
    fontWeight: '700',      // Figma: Typography / Heading / H2 / Weight (Bold)
    letterSpacing: '-0.01em',
    fontFamily: 'Poppins, sans-serif',
    className: 'text-5xl font-bold leading-tight',
  },

  // Figma: Typography / Heading / H3
  h3: {
    fontSize: '2.25rem',    // 36px - Figma: Typography / Heading / H3 / Size
    lineHeight: '1.3',      // Figma: Typography / Heading / H3 / Line Height
    fontWeight: '700',      // Figma: Typography / Heading / H3 / Weight (Bold)
    letterSpacing: '0',
    fontFamily: 'Poppins, sans-serif',
    className: 'text-4xl font-bold',
  },

  // Figma: Typography / Heading / H4
  h4: {
    fontSize: '1.875rem',   // 30px - Figma: Typography / Heading / H4 / Size
    lineHeight: '1.4',      // Figma: Typography / Heading / H4 / Line Height
    fontWeight: '700',      // Figma: Typography / Heading / H4 / Weight (Bold)
    letterSpacing: '0',
    fontFamily: 'Poppins, sans-serif',
    className: 'text-3xl font-bold',
  },

  // Figma: Typography / Body / Large
  bodyLarge: {
    fontSize: '1.125rem',   // 18px - Figma: Typography / Body / Large / Size
    lineHeight: '1.75',     // Figma: Typography / Body / Large / Line Height
    fontWeight: '400',      // Figma: Typography / Body / Large / Weight (Regular)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-lg font-normal leading-relaxed',
  },

  // Figma: Typography / Body / Default
  body: {
    fontSize: '1rem',       // 16px - Figma: Typography / Body / Default / Size
    lineHeight: '1.5',      // Figma: Typography / Body / Default / Line Height
    fontWeight: '400',      // Figma: Typography / Body / Default / Weight (Regular)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-base font-normal leading-normal',
  },

  // Figma: Typography / Body / Small
  bodySmall: {
    fontSize: '0.875rem',   // 14px - Figma: Typography / Body / Small / Size
    lineHeight: '1.5',      // Figma: Typography / Body / Small / Line Height
    fontWeight: '400',      // Figma: Typography / Body / Small / Weight (Regular)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-sm font-normal',
  },

  // Figma: Typography / Caption
  caption: {
    fontSize: '0.75rem',    // 12px - Figma: Typography / Caption / Size
    lineHeight: '1.5',      // Figma: Typography / Caption / Line Height
    fontWeight: '400',      // Figma: Typography / Caption / Weight (Regular)
    letterSpacing: '0.02em',
    fontFamily: 'Inter, sans-serif',
    className: 'text-xs font-normal tracking-wide',
  },

  // Figma: Typography / Button / Large
  buttonLarge: {
    fontSize: '1.125rem',   // 18px - Figma: Typography / Button / Large / Size
    lineHeight: '1.5',      // Figma: Typography / Button / Large / Line Height
    fontWeight: '600',      // Figma: Typography / Button / Large / Weight (Semibold)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-lg font-semibold',
  },

  // Figma: Typography / Button / Default
  button: {
    fontSize: '1rem',       // 16px - Figma: Typography / Button / Default / Size
    lineHeight: '1.5',      // Figma: Typography / Button / Default / Line Height
    fontWeight: '600',      // Figma: Typography / Button / Default / Weight (Semibold)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-base font-semibold',
  },

  // Figma: Typography / Button / Small
  buttonSmall: {
    fontSize: '0.875rem',   // 14px - Figma: Typography / Button / Small / Size
    lineHeight: '1.5',      // Figma: Typography / Button / Small / Line Height
    fontWeight: '600',      // Figma: Typography / Button / Small / Weight (Semibold)
    letterSpacing: '0',
    fontFamily: 'Inter, sans-serif',
    className: 'text-sm font-semibold',
  },
} as const;

export type TypographyToken = typeof typography;
export type TypographyVariant = keyof typeof typography;
