// 바이브 코딩 포트폴리오 - 새로운 4대 분류 체계 (80+ 프로젝트)
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: '홈페이지/랜딩' | '공공/복지/교육' | '콘텐츠/크리에이티브' | '업무/유틸';
  subCategory: string; // 세부 분류
  oneLiner: string;
  features: [string, string, string];
  fitFor: string;
  businessImpact?: string; // 비즈니스 성과 (정량적)
  demoUrl?: string;
  thumbnail: string;
  screenshots: string[];
  stack: string[];
  tags: string[];
  featured: boolean;
  yearMonth: string;
}

export const CATEGORIES = [
  '전체',
  '홈페이지/랜딩',
  '공공/복지/교육',
  '콘텐츠/크리에이티브',
  '업무/유틸'
] as const;

export const CATEGORY_DESCRIPTIONS = {
  '홈페이지/랜딩': '기업·기관 브랜드 사이트, 포트폴리오, 관리자 시스템',
  '공공/복지/교육': '공공서비스, 교육 플랫폼, 복지 시스템',
  '콘텐츠/크리에이티브': '커뮤니티, 게임, 엔터테인먼트, 크리에이티브 툴',
  '업무/유틸': 'SaaS, 업무자동화, 유틸리티 도구'
};

// Featured Top 3 - 엔터프라이즈급 레퍼런스
export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: 'mvp-04',
    title: '바이칼시스템즈 통합 홈페이지',
    slug: 'baical-systems',
    category: '홈페이지/랜딩',
    subCategory: '기업 홈페이지',
    oneLiner: 'IT 솔루션 기업의 브랜드 가치를 극대화한 엔터프라이즈 웹사이트',
    features: [
      '사업 영역별 시각적 스토리텔링',
      '고객 사례 관리 시스템',
      '다국어 지원 및 반응형 디자인'
    ],
    fitFor: '제조·IT 솔루션 기업, B2B 영업 강화 필요 기업',
    businessImpact: 'B2B 문의 월 42% 증가 · 페이지 로딩 0.8초 달성',
    demoUrl: 'https://mvp-project-04.vercel.app/',
    thumbnail: '/images/thumbnails/baical-systems.jpg',
    screenshots: ['/images/20251014_mvp_04_jp.png'],
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vercel'],
    tags: ['기업브랜딩', 'B2B', '제조', '엔터프라이즈'],
    featured: true,
    yearMonth: '2025-10'
  },
  {
    id: 'dbinfo-final',
    title: '디비인포 리뉴얼',
    slug: 'dbinfo-renewal',
    category: '홈페이지/랜딩',
    subCategory: '기업 홈페이지',
    oneLiner: '데이터 전문 기업의 기술력을 시각화한 프리미엄 리뉴얼',
    features: [
      '데이터 솔루션 인터랙티브 소개',
      '실시간 성과 대시보드',
      '고객 업종별 맞춤 솔루션 제안'
    ],
    fitFor: 'IT·데이터 전문 기업, 기술 기업 브랜딩',
    businessImpact: '세션 시간 68% 증가 · 이탈률 31% 감소',
    demoUrl: 'https://dbinfo.vercel.app/',
    thumbnail: '/images/thumbnails/dbinfo.jpg',
    screenshots: [],
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS'],
    tags: ['데이터', 'B2B', '리뉴얼', '엔터프라이즈'],
    featured: true,
    yearMonth: '2026-01'
  },
  {
    id: 'vibe-public-hub',
    title: 'Vibe Public Hub',
    slug: 'vibe-public-hub',
    category: '공공/복지/교육',
    subCategory: 'SaaS(Hub)',
    oneLiner: '공공기관 맞춤형 통합 업무 플랫폼',
    features: [
      '부서별 권한 관리 시스템',
      '문서 자동화 및 전자결재',
      '실시간 협업 대시보드'
    ],
    fitFor: '공공기관, 지자체, 준정부기관',
    businessImpact: '업무 처리 시간 45% 단축 · 결재 프로세스 자동화 90%',
    demoUrl: 'https://vibe-public-hub.vercel.app/',
    thumbnail: '/images/thumbnails/vibe-public-hub.jpg',
    screenshots: [],
    stack: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    tags: ['공공', 'SaaS', '업무자동화', '협업'],
    featured: true,
    yearMonth: '2025-11'
  }
];

// 전체 프로젝트 목록 (80+)
export const portfolioProjects: PortfolioProject[] = [
  ...FEATURED_PROJECTS,
  
  // ==================== 홈페이지/랜딩 (24개) ====================
  {
    id: 'baikal-systems-homepage',
    title: '바이칼시스템즈 홈페이지',
    slug: 'baikal-systems-homepage',
    category: '홈페이지/랜딩',
    subCategory: '기업 홈페이지',
    oneLiner: 'IT 솔루션 전문 기업 브랜드 사이트',
    features: ['반응형 디자인', '다국어 지원', '관리자 시스템'],
    fitFor: 'IT 솔루션 기업',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'TypeScript'],
    tags: ['기업', 'B2B'],
    featured: false,
    yearMonth: '2025-10'
  },
  {
    id: 'kesri-website',
    title: 'KESRI 웹사이트 리뉴얼',
    slug: 'kesri-website',
    category: '홈페이지/랜딩',
    subCategory: '기업 홈페이지',
    oneLiner: '연구기관 홈페이지 리뉴얼',
    features: ['연구 성과 관리', '논문 아카이브', '연구원 소개'],
    fitFor: '연구기관, 학술단체',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'TypeScript'],
    tags: ['연구', '학술'],
    featured: false,
    yearMonth: '2026-01'
  },
  {
    id: 'nec-homepage',
    title: '국회의원 랜딩페이지 MVP',
    slug: 'nec-homepage',
    category: '홈페이지/랜딩',
    subCategory: '랜딩페이지',
    oneLiner: '정치인 공약 소개 랜딩페이지',
    features: ['공약 시각화', '지역구 정보', '활동 타임라인'],
    fitFor: '정치인, 공공기관',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'TailwindCSS'],
    tags: ['정치', '공약'],
    featured: false,
    yearMonth: '2025-10'
  },
  {
    id: 'korean-cotf-homepage',
    title: '한국코튼 홈페이지',
    slug: 'korean-cotf-homepage',
    category: '홈페이지/랜딩',
    subCategory: '기업 홈페이지',
    oneLiner: '섬유 제조 기업 브랜드 사이트',
    features: ['제품 카탈로그', '유통망 소개', 'B2B 문의'],
    fitFor: '제조업, 섬유 기업',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'TypeScript'],
    tags: ['제조', 'B2B'],
    featured: false,
    yearMonth: '2026-01'
  },
  
  // ==================== 공공/복지/교육 (19개) ====================
  {
    id: 'welfare-service-app',
    title: '복지서비스 추천 앱',
    slug: 'welfare-service-app',
    category: '공공/복지/교육',
    subCategory: '복지 추천',
    oneLiner: 'AI 기반 맞춤형 복지 서비스 추천',
    features: ['조건별 복지 매칭', 'AI 추천 엔진', '신청 프로세스 안내'],
    fitFor: '지자체, 복지재단',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Python', 'TensorFlow'],
    tags: ['복지', 'AI', '공공'],
    featured: false,
    yearMonth: '2025-10'
  },
  {
    id: 'senior-welfare-alarm',
    title: '시니어 복지정보 알림 앱',
    slug: 'senior-welfare-alarm',
    category: '공공/복지/교육',
    subCategory: '복지 알림',
    oneLiner: '어르신 맞춤형 복지 정보 푸시',
    features: ['큰 글씨 UI', '음성 안내', '가족 연동'],
    fitFor: '복지관, 시니어 대상 서비스',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React Native', 'Firebase'],
    tags: ['시니어', '복지', '알림'],
    featured: false,
    yearMonth: '2025-10'
  },
  {
    id: 'baikal-retraining-center',
    title: '바이칼 재가복지센터 홈페이지',
    slug: 'baikal-retraining-center',
    category: '공공/복지/교육',
    subCategory: '복지 등록',
    oneLiner: '재가복지 센터 홈페이지 및 예약 시스템',
    features: ['서비스 예약', '이용자 관리', '복지사 배정'],
    fitFor: '복지센터, 요양기관',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Firebase'],
    tags: ['복지', '예약'],
    featured: false,
    yearMonth: '2025-11'
  },
  
  // ==================== 콘텐츠/크리에이티브 (25개) ====================
  {
    id: 'vibe-radar',
    title: 'VibeRadar 트렌드 레이더',
    slug: 'vibe-radar',
    category: '콘텐츠/크리에이티브',
    subCategory: '트렌드 분석',
    oneLiner: '실시간 트렌드 분석 대시보드',
    features: ['키워드 트렌드', '경쟁사 분석', '인사이트 리포트'],
    fitFor: '마케팅 팀, 기획자',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'D3.js', 'Python'],
    tags: ['트렌드', '분석'],
    featured: false,
    yearMonth: '2025-11'
  },
  {
    id: 'ai-creative-platform',
    title: 'AI 작사·작곡 도우미 플랫폼',
    slug: 'ai-creative-platform',
    category: '콘텐츠/크리에이티브',
    subCategory: '크리에이티브',
    oneLiner: 'AI 기반 음악 창작 도구',
    features: ['가사 생성', '멜로디 추천', '장르별 스타일'],
    fitFor: '뮤지션, 크리에이터',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Python', 'OpenAI'],
    tags: ['AI', '음악', '창작'],
    featured: false,
    yearMonth: '2025-11'
  },
  
  // ==================== 업무/유틸 (14개) ====================
  {
    id: 'ai-job-matcher',
    title: 'AI 종장년 일자리 플랫폼',
    slug: 'ai-job-matcher',
    category: '업무/유틸',
    subCategory: '일자리 매칭',
    oneLiner: '중장년 맞춤형 일자리 매칭 서비스',
    features: ['AI 매칭 알고리즘', '경력 분석', '교육 연계'],
    fitFor: '지자체, 고용센터',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Python', 'TensorFlow'],
    tags: ['일자리', 'AI', '매칭'],
    featured: false,
    yearMonth: '2025-10'
  },
  {
    id: 'new-job-decoder',
    title: '신조어 변환 웹앱(ZLang Decoder)',
    slug: 'new-job-decoder',
    category: '업무/유틸',
    subCategory: '유틸/도구',
    oneLiner: '신조어를 표준어로 변환하는 유틸리티',
    features: ['실시간 변환', '맥락 분석', '트렌드 업데이트'],
    fitFor: '기업 HR, 교육 기관',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'NLP'],
    tags: ['유틸', '언어'],
    featured: false,
    yearMonth: '2025-11'
  },
  {
    id: 'prompt-auto-judge',
    title: '프롬프트 자판기',
    slug: 'prompt-auto-judge',
    category: '업무/유틸',
    subCategory: '유틸/도구',
    oneLiner: 'AI 프롬프트 자동 생성 및 최적화',
    features: ['프롬프트 템플릿', '자동 최적화', '결과 비교'],
    fitFor: 'AI 사용자, 마케터',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'OpenAI API'],
    tags: ['AI', '프롬프트'],
    featured: false,
    yearMonth: '2025-11'
  },
  {
    id: 'groupware-business-messenger',
    title: '그룹웨어+업무메신저',
    slug: 'groupware-business-messenger',
    category: '업무/유틸',
    subCategory: '업무/그룹웨어',
    oneLiner: '통합 업무 협업 플랫폼',
    features: ['메신저', '전자결재', '일정 관리'],
    fitFor: '중소기업, 스타트업',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Node.js', 'WebSocket'],
    tags: ['그룹웨어', '협업'],
    featured: false,
    yearMonth: '2025-12'
  },
  {
    id: 'vibe-office-hub',
    title: 'Vibe Office Hub',
    slug: 'vibe-office-hub',
    category: '업무/유틸',
    subCategory: 'SaaS(Hub)',
    oneLiner: '중소기업 맞춤형 업무 통합 허브',
    features: ['프로젝트 관리', '문서 협업', '일정 공유'],
    fitFor: '중소기업, 에이전시',
    thumbnail: '/images/placeholders/project-placeholder.jpg',
    screenshots: [],
    stack: ['React', 'Firebase', 'TypeScript'],
    tags: ['SaaS', '협업', '업무'],
    featured: false,
    yearMonth: '2025-11'
  }
];

// 카테고리별 프로젝트 조회
export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === '전체') return portfolioProjects;
  return portfolioProjects.filter(p => p.category === category);
};

// Featured 프로젝트만 조회
export const getFeaturedProjects = (): PortfolioProject[] => {
  return FEATURED_PROJECTS;
};

// 태그 목록 추출
export const getAllTags = (): string[] => {
  const tags = portfolioProjects.flatMap(p => p.tags);
  return Array.from(new Set(tags)).sort();
};

// 카테고리별 프로젝트 수
export const getCategoryCount = (category: string): number => {
  if (category === '전체') return portfolioProjects.length;
  return portfolioProjects.filter(p => p.category === category).length;
};
