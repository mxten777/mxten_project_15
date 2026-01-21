/**
 * Figma Design System - Color Tokens
 * 
 * 이 파일은 Figma의 Color Style과 1:1 대응됩니다.
 * Figma: Assets > Colors
 */

export const colors = {
  // Figma: Color / Primary
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Figma: Color / Primary / 500 (Main)
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Figma: Color / Secondary
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',  // Figma: Color / Secondary / 500 (Main)
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },

  // Figma: Color / Accent
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',  // Figma: Color / Accent / 300 (Main)
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },

  // Figma: Color / Background
  background: {
    light: '#ffffff',       // Figma: Color / Background / Light
    lightAlt: '#f9fafb',    // Figma: Color / Background / Light Alt
    dark: '#111827',        // Figma: Color / Background / Dark
    darkAlt: '#1f2937',     // Figma: Color / Background / Dark Alt
  },

  // Figma: Color / Surface
  surface: {
    light: '#ffffff',       // Figma: Color / Surface / Light
    lightElevated: '#f3f4f6', // Figma: Color / Surface / Light Elevated
    dark: '#1f2937',        // Figma: Color / Surface / Dark
    darkElevated: '#374151', // Figma: Color / Surface / Dark Elevated
  },

  // Figma: Color / Text
  text: {
    primary: {
      light: '#111827',     // Figma: Color / Text / Primary / Light
      dark: '#f9fafb',      // Figma: Color / Text / Primary / Dark
    },
    secondary: {
      light: '#6b7280',     // Figma: Color / Text / Secondary / Light
      dark: '#d1d5db',      // Figma: Color / Text / Secondary / Dark
    },
    muted: {
      light: '#9ca3af',     // Figma: Color / Text / Muted / Light
      dark: '#9ca3af',      // Figma: Color / Text / Muted / Dark
    },
  },

  // Figma: Color / Border
  border: {
    light: '#e5e7eb',       // Figma: Color / Border / Light
    lightStrong: '#d1d5db', // Figma: Color / Border / Light Strong
    dark: '#374151',        // Figma: Color / Border / Dark
    darkStrong: '#4b5563',  // Figma: Color / Border / Dark Strong
  },

  // Figma: Color / Semantic
  semantic: {
    success: '#10b981',     // Figma: Color / Semantic / Success
    warning: '#f59e0b',     // Figma: Color / Semantic / Warning
    error: '#ef4444',       // Figma: Color / Semantic / Error
    info: '#3b82f6',        // Figma: Color / Semantic / Info
  },

  // Figma: Color / Gradient
  gradient: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
    hero: 'linear-gradient(135deg, #1e3a8a 0%, #7e22ce 50%, #9333ea 100%)',
    card: 'linear-gradient(135deg, #60a5fa 0%, #c084fc 100%)',
  },
} as const;

// Figma: Color Utilities
export type ColorToken = typeof colors;
export type ColorScale = keyof typeof colors.primary;

/**
 * Tailwind 클래스 매핑 (Design Token → Utility Class)
 * Figma의 색상을 Tailwind에 직접 매핑
 */
export const colorClasses = {
  // Background
  bgPrimary: 'bg-blue-500',
  bgSecondary: 'bg-purple-500',
  bgAccent: 'bg-yellow-300',
  bgLight: 'bg-white',
  bgLightAlt: 'bg-gray-50',
  bgDark: 'bg-gray-900',
  bgDarkAlt: 'bg-gray-800',

  // Text
  textPrimaryLight: 'text-gray-900',
  textPrimaryDark: 'text-gray-50',
  textSecondaryLight: 'text-gray-600',
  textSecondaryDark: 'text-gray-300',
  textMuted: 'text-gray-400',
  textAccent: 'text-yellow-300',

  // Border
  borderLight: 'border-gray-200',
  borderDark: 'border-gray-700',

  // Gradient
  gradientPrimary: 'bg-gradient-to-r from-blue-500 to-purple-600',
  gradientHero: 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900',
} as const;
