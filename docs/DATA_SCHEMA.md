# 📐 데이터 스키마

이 문서는 `mxten_project_15`에서 사용되는 핵심 데이터 구조를 정의합니다.

## PortfolioProject Interface

모든 포트폴리오 프로젝트는 다음 인터페이스를 따릅니다.

```typescript
export interface PortfolioProject {
  id: string;                          // 고유 ID (예: "mvp-01", "gen-01")
  title: string;                       // 프로젝트 제목
  slug: string;                        // URL 슬러그
  category: Category;                  // 4개 카테고리 중 하나
  oneLiner: string;                    // 한 줄 설명
  features: [string, string, string];  // 3개 주요 기능
  fitFor: string;                      // 적합한 고객
  demoUrl?: string;                    // 데모 URL (선택)
  thumbnail: string;                   // 썸네일 경로
  screenshots: string[];               // 스크린샷 배열
  stack: string[];                     // 기술 스택
  tags: string[];                      // 태그 배열
  featured: boolean;                   // Featured 여부
  yearMonth: string;                   // 제작 시기 (예: "2024-06")
}
```

## 카테고리 정의

프로젝트는 4개의 주요 카테고리로 분류됩니다.

```typescript
export const CATEGORIES = [
  '전체',
  '기업·기관 홈페이지',
  '교육·AI 플랫폼',
  'SaaS·업무자동화',
  '공공·예약·문화'
] as const;

export type Category = typeof CATEGORIES[number];
```

## 데이터 예시

다음은 `src/data/portfolio.ts`에 저장된 실제 데이터의 예시입니다.

```typescript
{
  id: 'mvp-04',
  title: '바이칼시스템즈 홈페이지',
  slug: 'baical-systems',
  category: '기업·기관 홈페이지',
  oneLiner: '글로벌 IT 기업의 프리미엄 홈페이지 솔루션',
  features: [
    '반응형 다국어 지원',
    '제품/솔루션 쇼케이스',
    '기업 정보 관리 시스템'
  ],
  fitFor: 'IT 기업, 제조업, B2B 서비스',
  demoUrl: 'https://www.baicalsystems.com',
  thumbnail: '/thumbnails/baical-systems.jpg',
  screenshots: [
    '/images/baical-systems-1.jpg',
    '/images/baical-systems-2.jpg'
  ],
  stack: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
  tags: ['기업 홈페이지', 'B2B', '다국어', '반응형'],
  featured: true,
  yearMonth: '2024-08'
}
```

## 유틸리티 함수

`src/data/portfolio.ts` 파일에는 데이터를 쉽게 조회하고 처리할 수 있는 유틸리티 함수들이 포함되어 있습니다.

```typescript
// Featured 프로젝트 조회 (12개)
export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter(p => p.featured);
};

// 카테고리별 조회
export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === '전체') return portfolioProjects;
  return portfolioProjects.filter(p => p.category === category);
};

// ID로 조회
export const getProjectById = (id: string): PortfolioProject | undefined => {
  return portfolioProjects.find(p => p.id === id);
};

// 슬러그로 조회
export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find(p => p.slug === slug);
};

// 카테고리 통계
export const getCategoryCount = (category: string): number => {
  return getProjectsByCategory(category).length;
};

// 전체 통계
export const getPortfolioStats = () => ({
  total: portfolioProjects.length,
  featured: getFeaturedProjects().length,
  categories: CATEGORIES.slice(1).map(cat => ({
    name: cat,
    count: getCategoryCount(cat)
  }))
});

// 모든 태그 추출
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  portfolioProjects.forEach(p => p.tags.forEach(tag => tagsSet.add(tag)));
  return Array.from(tagsSet).sort();
};
```
