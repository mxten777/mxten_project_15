// 애플리케이션 전역 상수 정의
// UI/UX에 영향을 주는 하드코딩된 문자열을 중앙화

/**
 * 프로젝트 카테고리 상수
 */
export const PROJECT_CATEGORIES = {
  ALL: '전체',
  CORPORATE: '기업·기관 홈페이지',
  EDUCATION: '교육·AI 플랫폼',
  SAAS: 'SaaS·업무자동화',
  PUBLIC: '공공·예약·문화',
} as const;

/**
 * 새로운 4대 분류 체계 (2026-02-03 리뉴얼)
 */
export const NEW_PROJECT_CATEGORIES = {
  ALL: '전체',
  HOMEPAGE: '홈페이지/랜딩',
  PUBLIC_WELFARE: '공공/복지/교육',
  CONTENT_CREATIVE: '콘텐츠/크리에이티브',
  BUSINESS_UTIL: '업무/유틸',
} as const;

/**
 * 프로젝트 상태
 */
export const PROJECT_STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  CONCEPT: 'concept',
} as const;

/**
 * 썸네일 Fallback 경로
 */
export const THUMBNAIL_PATHS = {
  COMPANY: '/images/placeholders/company.webp',
  EDUCATION: '/images/placeholders/education.webp',
  SAAS: '/images/placeholders/saas.webp',
  PUBLIC: '/images/placeholders/public.webp',
  DEFAULT: '/images/placeholders/default.webp',
} as const;

/**
 * 카테고리별 색상 그라데이션
 */
export const CATEGORY_GRADIENTS = {
  [PROJECT_CATEGORIES.CORPORATE]: { from: '#3B82F6', to: '#1E40AF' },
  [PROJECT_CATEGORIES.EDUCATION]: { from: '#8B5CF6', to: '#6D28D9' },
  [PROJECT_CATEGORIES.SAAS]: { from: '#10B981', to: '#047857' },
  [PROJECT_CATEGORIES.PUBLIC]: { from: '#F59E0B', to: '#D97706' },
  DEFAULT: { from: '#6B7280', to: '#374151' },
} as const;

/**
 * 애니메이션 Duration (ms)
 */
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 600,
} as const;

/**
 * Breakpoints (Tailwind 기준)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

/**
 * 연락처 폼 상태
 */
export const CONTACT_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  CLOSED: 'closed',
} as const;

/**
 * 신뢰 지표 (프리미엄 리뉴얼)
 */
export const TRUST_METRICS = {
  TOTAL_PROJECTS: '80+',
  ON_TIME_DELIVERY: '100%',
  CUSTOMER_SATISFACTION: '4.9/5.0',
  RESPONSE_TIME: '24시간',
  WARRANTY_PERIOD: '1년',
} as const;

/**
 * 비즈니스 보장 사항
 */
export const BUSINESS_GUARANTEES = {
  QUOTATION_TIME: '48시간',
  NDA_AVAILABLE: true,
  WARRANTY_YEARS: 1,
  MVP_WEEKS: 4,
  FULL_SYSTEM_WEEKS: 8,
} as const;

/**
 * 네비게이션 경로
 */
export const ROUTES = {
  HOME: '/',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
  CAMPAIGN: '/campaign',
  MVP_DETAIL: (slug: string) => `/portfolio/${slug}`,
} as const;

/**
 * 외부 링크
 */
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/mxten777',
  LINKEDIN: 'https://linkedin.com/in/dongyeol-jung',
  TWITTER: 'https://twitter.com/mxten777',
} as const;

/**
 * SEO 메타 데이터
 */
export const SEO_DEFAULTS = {
  TITLE: '바이브코딩 - MVP 개발 전문',
  DESCRIPTION: '비즈니스 요구사항을 실제 운영 가능한 시스템으로. 엔터프라이즈급 웹 솔루션을 4주 내 구축합니다.',
  KEYWORDS: ['MVP 개발', '웹 개발', 'B2B', '엔터프라이즈', 'SaaS', '홈페이지 제작'],
  OG_IMAGE: '/images/og-image.jpg',
} as const;

/**
 * 타입 헬퍼: 객체의 값들을 Union Type으로 변환
 */
export type ValueOf<T> = T[keyof T];

/**
 * 카테고리 타입
 */
export type ProjectCategoryType = ValueOf<typeof PROJECT_CATEGORIES>;
export type NewProjectCategoryType = ValueOf<typeof NEW_PROJECT_CATEGORIES>;
export type ProjectStatusType = ValueOf<typeof PROJECT_STATUS>;
export type ContactStatusType = ValueOf<typeof CONTACT_STATUS>;
