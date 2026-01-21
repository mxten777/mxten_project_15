/**
 * Figma Design System - Token Index
 * 
 * 모든 Design Token을 중앙에서 관리합니다.
 * Figma: Local Styles → Code Export
 */

export { colors, colorClasses } from './colors';
export { typography } from './typography';
export { spacing, gap, margin } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';

// Type exports
export type { ColorToken, ColorScale } from './colors';
export type { TypographyToken, TypographyVariant } from './typography';
export type { SpacingToken, SpacingScale } from './spacing';
export type { RadiusToken, RadiusScale } from './radius';
export type { ShadowToken, ShadowScale } from './shadows';
