// 썸네일 유틸리티 함수
// URL 기반으로 썸네일 파일명을 생성하고 fallback 처리

import { THUMBNAIL_PATHS, CATEGORY_GRADIENTS, PROJECT_CATEGORIES } from '../constants';

/**
 * URL에서 도메인 앞부분을 추출하여 썸네일 파일명 생성
 * @param demoUrl - 프로젝트 데모 URL
 * @returns 썸네일 파일명 (예: 'mvp-project-04.png')
 */
export const getThumbnailFilenameFromUrl = (demoUrl: string): string => {
  if (!demoUrl) return '';
  
  try {
    // vercel.app 도메인 추출
    const vercelMatch = demoUrl.match(/https?:\/\/([^.]+)\.vercel\.app/);
    const vercelDomain = vercelMatch?.[1];
    if (typeof vercelDomain === 'string') {
      const trimmed = vercelDomain.trim();
      if (trimmed.length > 0) {
        return `${trimmed}.png`;
      }
    }
    
    // 기타 도메인 (예: baikalsys.kr)
    const domainMatch = demoUrl.match(/https?:\/\/([^/]+)/);
    const domain = domainMatch?.[1];
    if (typeof domain === 'string') {
      const trimmed = domain.trim();
      if (trimmed.length > 0) {
        return `${trimmed.replace(/\./g, '-')}.png`;
      }
    }
  } catch (error) {
    // 프로덕션에서는 에러를 조용히 처리
    if (import.meta.env.DEV) {
      // Dev 환경에서만 경고
      void error;
    }
  }
  
  return '';
};

/**
 * 프로젝트의 썸네일 경로를 URL 기반으로 생성 (4단계 Fallback)
 * @param demoUrl - 프로젝트 데모 URL
 * @param category - 프로젝트 카테고리
 * @returns 썸네일 이미지 경로
 */
export const getThumbnailPath = (
  demoUrl: string,
  category: string
): string => {
  // Level 1: URL 기반 프로젝트 고유 썸네일
  const filename = getThumbnailFilenameFromUrl(demoUrl);
  if (filename) {
    return `/images/thumbnails/${filename}`;
  }
  
  // Level 2: 카테고리별 기본 이미지
  const categoryMap: Record<string, string> = {
    [PROJECT_CATEGORIES.CORPORATE]: THUMBNAIL_PATHS.COMPANY,
    [PROJECT_CATEGORIES.EDUCATION]: THUMBNAIL_PATHS.EDUCATION,
    [PROJECT_CATEGORIES.SAAS]: THUMBNAIL_PATHS.SAAS,
    [PROJECT_CATEGORIES.PUBLIC]: THUMBNAIL_PATHS.PUBLIC,
  };
  
  const trimmedCategory = category.trim();
  if (trimmedCategory.length > 0 && trimmedCategory in categoryMap) {
    const path = categoryMap[trimmedCategory];
    if (typeof path === 'string' && path.length > 0) {
      return path;
    }
  }
  
  // Level 3: 전체 기본 이미지
  return THUMBNAIL_PATHS.DEFAULT;
};

/**
 * 이미지 로드 실패 시 fallback 처리
 * @param e - 에러 이벤트
 * @param category - 프로젝트 카테고리
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  category?: string
) => {
  const target = e.currentTarget;
  
  // 이미 에러 처리된 경우 무한 루프 방지
  if (target.dataset['errored'] === 'true') {
    // Level 4: Inline SVG placeholder
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent && !parent.querySelector('.svg-placeholder')) {
      const svg = createSvgPlaceholder(category ?? '기본');
      parent.insertAdjacentHTML('beforeend', svg);
    }
    return;
  }
  
  target.dataset['errored'] = 'true';
  
  // Level 3: 전체 기본 이미지로 재시도
  target.src = THUMBNAIL_PATHS.DEFAULT;
};

/**
 * SVG Placeholder 생성
 * @param category - 카테고리 이름
 * @returns SVG HTML 문자열
 */
const createSvgPlaceholder = (category: string): string => {
  const gradients = {
    ...CATEGORY_GRADIENTS,
  };
  
  const categoryKey = category as keyof typeof gradients;
  const gradient = (categoryKey in gradients ? gradients[categoryKey] : null) ?? CATEGORY_GRADIENTS.DEFAULT;
  
  return `
    <div class="svg-placeholder absolute inset-0 flex items-center justify-center bg-gradient-to-br" style="background: linear-gradient(135deg, ${gradient.from}, ${gradient.to});">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="white" fill-opacity="0.1" rx="10"/>
        <path d="M50 30L65 50L50 70L35 50L50 30Z" fill="white" fill-opacity="0.3"/>
        <text x="50" y="85" font-family="Arial" font-size="10" fill="white" text-anchor="middle">
          ${category}
        </text>
      </svg>
    </div>
  `;
};

/**
 * 프로젝트 데이터 정합성 검증
 * @param demoUrl - 데모 URL
 * @param thumbnailPath - 현재 썸네일 경로
 * @returns 일치 여부
 */
export const validateThumbnailMatch = (
  demoUrl: string,
  thumbnailPath: string
): boolean => {
  const expectedFilename = getThumbnailFilenameFromUrl(demoUrl);
  const actualFilename = thumbnailPath.split('/').pop();
  
  return expectedFilename === actualFilename;
};

/**
 * 레거시 썸네일 경로를 새 규칙으로 마이그레이션
 * @param demoUrl - 데모 URL
 * @param oldThumbnail - 기존 썸네일 경로
 * @returns 새 썸네일 경로
 */
export const migrateThumbnailPath = (
  demoUrl: string,
  oldThumbnail: string
): string => {
  const filename = getThumbnailFilenameFromUrl(demoUrl);
  if (filename) {
    return `/images/thumbnails/${filename}`;
  }
  return oldThumbnail; // 변환 실패 시 기존 경로 유지
};
