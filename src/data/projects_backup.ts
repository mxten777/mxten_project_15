// MVP 프로젝트 데이터 - 실제 MVP와 아이디어 프로젝트 분리
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  tags: string[];
  featured?: boolean;
  status?: 'active' | 'concept'; // active: 실제 프로젝트, concept: 아이디어 프로젝트
}

export const projects: Project[] = [
  // ✅ 실제 MVP 프로젝트들 - status: 'active'
  
  // 🔥 2025년 최신 프로젝트들 (9월)
  {
    id: "mxten-12",
    title: "동해기계 홈페이지 리뉴얼",
    description: "기계 제조업체의 현대적인 홈페이지 리뉴얼 프로젝트",
    url: "https://mxten-project-12-9a0dcmszu-dongyeol-jungs-projects.vercel.app/ko/home",
    category: "웹사이트",
    date: "2025-09-25",
    tags: ["React", "리뉴얼", "제조업", "다국어"],
    featured: true,
    status: 'active'
  },
  {
    id: "mxten-10",
    title: "슬롯머신형 일본 파칭코 웹",
    description: "재미있는 슬롯머신 스타일의 파칭코 게임 웹 애플리케이션",
    url: "https://mxten-project-10-f98097fis-dongyeol-jungs-projects.vercel.app/",
    category: "게임",
    date: "2025-09-21",
    tags: ["게임", "슬롯머신", "파칭코", "엔터테인먼트"],
    featured: true,
    status: 'active'
  },
  {
    id: "lawmaker-landing",
    title: "국회의원 랜딩페이지",
    description: "시민과 함께하는 더 나은 미래를 위한 국회의원 랜딩페이지",
    url: "https://lawmaker-landing-4dvzqs09k-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2025-09-20",
    tags: ["정치", "랜딩페이지", "시민참여", "공공"],
    featured: true,
    status: 'active'
  },
  {
    id: "mvp-09",
    title: "만송시스템 홈페이지",
    description: "기업 브랜딩과 서비스 소개를 위한 현대적인 홈페이지",
    url: "https://mvp-project-09-cvel1fy8m-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-19",
    tags: ["React", "TailwindCSS", "기업홈페이지"],
    featured: true,
    status: 'active'
  },
  {
    id: "mvp-04-baical",
    title: "바이칼시스템즈 홈페이지",
    description: "시스템 솔루션 기업의 브랜드와 기술력을 소개하는 홈페이지",
    url: "https://mvp-project-04-cqcupnisp-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-15",
    tags: ["React", "시스템", "기업홈페이지", "TailwindCSS"],
    featured: true,
    status: 'active'
  },
  {
    id: "new-mvp-02-daycare",
    title: "아이뜨락 어린이집 홈페이지",
    description: "어린이집 소개와 교육 프로그램을 안내하는 웹사이트",
    url: "https://new-project-02-4ee93i64q-dongyeol-jungs-projects.vercel.app/",
    category: "교육",
    date: "2025-09-15",
    tags: ["React", "교육", "어린이집", "학부모"],
    featured: false,
    status: 'active'
  },
  {
    id: "mvp-03",
    title: "한국코프론 홈페이지",
    description: "기업 정보와 제품 소개를 위한 반응형 웹사이트",
    url: "https://mvp-project-03-jqy07sslc-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-14",
    tags: ["React", "기업정보", "제품소개"],
    status: 'active'
  },
  {
    id: "mvp-02",
    title: "한길유통 홈페이지",
    description: "유통업체의 사업 영역과 서비스를 소개하는 홈페이지",
    url: "https://mvp-project-02-laqhz0s5k-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-13",
    tags: ["React", "유통", "비즈니스"],
    status: 'active'
  },

  // 🌟 2025년 8월 특별 프로젝트들
  {
    id: "ai-middle-aged-job",
    title: "AI 중장년 맞춤형 취업 플랫폼",
    description: "중장년층을 위한 AI 기반 취업 매칭 서비스",
    url: "https://ai-middle-aged-job-matching.onrender.com/",
    category: "취업지원",
    date: "2025-08-14",
    tags: ["AI", "중장년", "취업", "매칭플랫폼"],
    featured: true,
    status: 'active'
  },
  {
    id: "python-mvp-02",
    title: "경기지역 날씨 서비스",
    description: "경기도 지역 특화 날씨 정보 제공 서비스",
    url: "https://python-project-02.onrender.com/",
    category: "정보서비스",
    date: "2025-08-12",
    tags: ["Python", "날씨", "지역정보", "API"],
    featured: false,
    status: 'active'
  },

  // 🚀 2024년 실제 MVP 프로젝트들
  {
    id: "mvp-01-carmarket",
    title: "차량 거래 플랫폼",
    description: "중고차 매매를 위한 온라인 마켓플레이스",
    url: "https://mvp-project-01-l9w6a91bm-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2024-09-12",
    tags: ["플랫폼", "중고차", "거래", "마켓플레이스"],
    status: 'active'
  },
  {
    id: "mvp-12-budget",
    title: "AI 간편장부 앱",
    description: "AI 기반 개인 가계부 관리 애플리케이션",
    url: "https://mvp-project-12-n26m6q5fa-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2024-09-11",
    tags: ["AI", "가계부", "개인재정", "모바일"],
    status: 'active'
  },
  {
    id: "mvp-11",
    title: "행정구역 정보 서비스",
    description: "전국 시군구 행정구역 정보를 제공하는 서비스",
    url: "https://mvp-project-11-iu3sv2q9l-dongyeol-jungs-projects.vercel.app/",
    category: "정보서비스",
    date: "2024-09-10",
    tags: ["행정구역", "공공데이터", "정보서비스"],
    status: 'active'
  },
  {
    id: "mvp-05",
    title: "피트니스 트래커",
    description: "개인 운동 기록과 건강 관리를 위한 애플리케이션",
    url: "https://mvp-project-05-kgmk9u6x2-dongyeol-jungs-projects.vercel.app/",
    category: "헬스케어",
    date: "2024-09-05",
    tags: ["헬스케어", "운동", "건강관리"],
    status: 'active'
  },
  {
    id: "mvp-06",
    title: "간편 메모 앱",
    description: "빠르고 쉬운 메모 작성과 관리 도구",
    url: "https://mvp-project-06-xqr48k7n1-dongyeol-jungs-projects.vercel.app/",
    category: "업무도구",
    date: "2024-09-03",
    tags: ["메모", "노트", "생산성"],
    status: 'active'
  },
  {
    id: "mvp-07",
    title: "날씨 정보 앱",
    description: "실시간 날씨 정보와 예보를 제공하는 서비스",
    url: "https://mvp-project-07-ba6hj8s4n-dongyeol-jungs-projects.vercel.app/",
    category: "정보서비스",
    date: "2024-09-01",
    tags: ["날씨", "정보", "실시간"],
    status: 'active'
  },
  {
    id: "mvp-08",
    title: "간단한 계산기",
    description: "기본적인 수학 연산을 수행하는 웹 계산기",
    url: "https://mvp-project-08-hj2k9x7m3-dongyeol-jungs-projects.vercel.app/",
    category: "업무도구",
    date: "2024-08-30",
    tags: ["계산기", "도구", "유틸리티"],
    status: 'active'
  },
  {
    id: "mvp-14",
    title: "시군구 RPA 통합 플랫폼 앱",
    description: "지방자치단체의 업무 자동화를 위한 RPA 통합 관리 플랫폼",
    url: "https://mvp-project-14-kx8ql2v9p-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2024-08-28",
    tags: ["RPA", "자동화", "지방자치", "공공"],
    status: 'active'
  },
  {
    id: "mvp-13",
    title: "To-Do 리스트 앱",
    description: "할 일 관리와 일정 계획을 위한 간편한 도구",
    url: "https://mvp-project-13-qa9xl5k8r-dongyeol-jungs-projects.vercel.app/",
    category: "업무도구",
    date: "2024-08-25",
    tags: ["할일관리", "일정", "생산성"],
    status: 'active'
  },
  {
    id: "mvp-15",
    title: "음성 인식 노트 앱",
    description: "음성을 텍스트로 변환하여 메모를 작성하는 앱",
    url: "https://mvp-project-15-nx7mq4k2s-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2024-08-23",
    tags: ["음성인식", "STT", "메모", "AI"],
    status: 'active'
  },
  {
    id: "mvp-16",
    title: "AI 음성 감정 분석 도구",
    description: "음성에서 감정을 분석하는 AI 기반 도구",
    url: "https://mvp-project-16-pz3kx9m7l-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2024-08-21",
    tags: ["AI", "음성분석", "감정인식", "머신러닝"],
    status: 'active'
  },
  {
    id: "mvp-17",
    title: "복지 정보 안내 시스템",
    description: "시민들을 위한 복지 혜택 정보 제공 플랫폼",
    url: "https://mvp-project-17-qw4nx8k5m-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-08-19",
    tags: ["복지", "공공서비스", "시민혜택"],
    status: 'active'
  },
  {
    id: "mvp-18",
    title: "장애인 접근성 웹사이트",
    description: "장애인을 위한 웹 접근성 개선 시범 사이트",
    url: "https://mvp-project-18-rx2ly7k9p-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-08-17",
    tags: ["접근성", "장애인", "웹표준", "인클루시브"],
    status: 'active'
  },
  {
    id: "mvp-19",
    title: "시민 참여 플랫폼",
    description: "지역 사회 이슈에 대한 시민 의견 수렴 플랫폼",
    url: "https://mvp-project-19-sk8qx3m7n-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2024-08-15",
    tags: ["시민참여", "의견수렴", "지역사회"],
    status: 'active'
  },
  {
    id: "mvp-20",
    title: "스마트 팜 모니터링",
    description: "농장의 환경 데이터를 실시간으로 모니터링하는 시스템",
    url: "https://mvp-project-20-tj9kx4l8m-dongyeol-jungs-projects.vercel.app/",
    category: "대시보드",
    date: "2024-08-13",
    tags: ["스마트팜", "모니터링", "농업", "IoT"],
    status: 'active'
  },
  {
    id: "mvp-21",
    title: "영어 학습 도우미",
    description: "영어 단어와 문법 학습을 돕는 교육 앱",
    url: "https://mvp-project-21-uk5mx7q9l-dongyeol-jungs-projects.vercel.app/",
    category: "교육",
    date: "2024-08-11",
    tags: ["영어학습", "교육", "언어", "학습도구"],
    status: 'active'
  },
  {
    id: "mvp-22",
    title: "간단한 블로그 플랫폼",
    description: "개인 블로그 작성과 관리를 위한 간단한 플랫폼",
    url: "https://mvp-project-22-vl6nx8k2m-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2024-08-09",
    tags: ["블로그", "글쓰기", "개인미디어"],
    status: 'active'
  },
  {
    id: "mvp-23",
    title: "음식 배달 앱 UI",
    description: "음식 주문과 배달을 위한 사용자 인터페이스",
    url: "https://mvp-project-23-wm7oy9k3n-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2024-08-07",
    tags: ["음식배달", "UI/UX", "모바일앱"],
    status: 'active'
  },
  {
    id: "mvp-24",
    title: "개인 포트폴리오 사이트",
    description: "개발자를 위한 개인 포트폴리오 웹사이트 템플릿",
    url: "https://mvp-project-24-xn8pz0k4o-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2024-08-05",
    tags: ["포트폴리오", "개발자", "이력서"],
    status: 'active'
  },
  {
    id: "mvp-25",
    title: "미니 게임 모음",
    description: "간단한 웹 게임들을 모아놓은 미니게임 플랫폼",
    url: "https://mvp-project-25-yo9qa1k5p-dongyeol-jungs-projects.vercel.app/",
    category: "게임",
    date: "2024-08-03",
    tags: ["미니게임", "웹게임", "엔터테인먼트"],
    status: 'active'
  },
  {
    id: "mvp-26",
    title: "책 추천 시스템",
    description: "사용자 선호도 기반 도서 추천 서비스",
    url: "https://mvp-project-26-zp0rb2k6q-dongyeol-jungs-projects.vercel.app/",
    category: "추천시스템",
    date: "2024-08-01",
    tags: ["책추천", "독서", "개인화"],
    status: 'active'
  },
  {
    id: "mvp-27",
    title: "운동 루틴 플래너",
    description: "개인 맞춤형 운동 계획 수립 도구",
    url: "https://mvp-project-27-aq1sc3k7r-dongyeol-jungs-projects.vercel.app/",
    category: "헬스케어",
    date: "2024-07-30",
    tags: ["운동계획", "헬스", "플래너"],
    status: 'active'
  },
  {
    id: "mvp-28",
    title: "소셜 미디어 대시보드",
    description: "여러 소셜 미디어 계정을 통합 관리하는 대시보드",
    url: "https://mvp-project-28-br2td4k8s-dongyeol-jungs-projects.vercel.app/",
    category: "대시보드",
    date: "2024-07-28",
    tags: ["소셜미디어", "통합관리", "분석"],
    status: 'active'
  },
  {
    id: "mvp-29",
    title: "가상 여행 가이드",
    description: "VR 기술을 활용한 가상 여행 체험 서비스",
    url: "https://mvp-project-29-cs3ue5k9t-dongyeol-jungs-projects.vercel.app/",
    category: "VR/AR",
    date: "2024-07-26",
    tags: ["VR", "여행", "가상현실"],
    status: 'active'
  },
  {
    id: "mvp-30",
    title: "환경 데이터 시각화",
    description: "환경 오염 데이터를 시각적으로 표현하는 대시보드",
    url: "https://mvp-project-30-dt4vf6l0u-dongyeol-jungs-projects.vercel.app/",
    category: "대시보드",
    date: "2024-07-24",
    tags: ["환경", "데이터시각화", "차트"],
    status: 'active'
  },
  {
    id: "mvp-31",
    title: "AI 챗봇 고객센터",
    description: "AI 기반 고객 문의 처리 챗봇 시스템",
    url: "https://mvp-project-31-eu5wg7m1v-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2024-07-22",
    tags: ["AI", "챗봇", "고객서비스"],
    status: 'active'
  },
  {
    id: "mvp-32",
    title: "지역 커뮤니티 앱",
    description: "동네 주민들을 위한 소통과 정보 공유 플랫폼",
    url: "https://mvp-project-32-fv6xh8n2w-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2024-07-20",
    tags: ["커뮤니티", "지역", "소통"],
    status: 'active'
  },
  {
    id: "mvp-33",
    title: "온라인 학습 관리 시스템",
    description: "학생과 교사를 위한 온라인 교육 플랫폼",
    url: "https://mvp-project-33-gw7yi9o3x-dongyeol-jungs-projects.vercel.app/",
    category: "교육",
    date: "2024-07-18",
    tags: ["온라인교육", "LMS", "학습관리"],
    status: 'active'
  },

  // 💡 아이디어 프로젝트들 (개발 예정) - status: 'concept'
  {
    id: "concept-smart-home",
    title: "스마트 홈 통합 관리",
    description: "IoT 디바이스를 통합 관리하는 스마트 홈 시스템",
    url: "#",
    category: "IoT",
    date: "2025-12-01",
    tags: ["IoT", "스마트홈", "자동화", "모바일"],
    status: 'concept'
  },
  {
    id: "concept-blockchain-voting",
    title: "블록체인 투표 시스템",
    description: "투명하고 안전한 블록체인 기반 전자투표 플랫폼",
    url: "#",
    category: "블록체인",
    date: "2025-11-15",
    tags: ["블록체인", "투표", "보안", "탈중앙화"],
    status: 'concept'
  },
  {
    id: "concept-ar-shopping",
    title: "AR 가상 쇼핑몰",
    description: "증강현실을 활용한 몰입형 온라인 쇼핑 경험",
    url: "#",
    category: "VR/AR",
    date: "2025-11-01",
    tags: ["AR", "쇼핑", "가상현실", "이커머스"],
    status: 'concept'
  },
  {
    id: "concept-ai-doctor",
    title: "AI 의료 진단 도우미",
    description: "AI 기반 증상 분석 및 의료진 매칭 서비스",
    url: "#",
    category: "AI/의료",
    date: "2025-10-20",
    tags: ["AI", "의료", "진단", "헬스테크"],
    status: 'concept'
  },
  {
    id: "concept-green-energy",
    title: "친환경 에너지 관리",
    description: "개인 및 기업의 에너지 사용량 최적화 플랫폼",
    url: "#",
    category: "환경",
    date: "2025-10-10",
    tags: ["환경", "에너지", "최적화", "탄소중립"],
    status: 'concept'
  },
  {
    id: "concept-drone-delivery",
    title: "드론 배송 관리 시스템",
    description: "드론을 활용한 마지막 배송 구간 자동화 시스템",
    url: "#",
    category: "물류",
    date: "2025-10-01",
    tags: ["드론", "배송", "물류", "자동화"],
    status: 'concept'
  }
];

// 카테고리별 필터링 함수
export const getProjectsByCategory = (category: string) => {
  if (category === "전체") return projects;
  return projects.filter(project => project.category === category);
};

// 실제 MVP만 가져오기
export const getActiveProjects = () => {
  return projects.filter(project => project.status === 'active');
};

// 아이디어 프로젝트만 가져오기  
export const getConceptProjects = () => {
  return projects.filter(project => project.status === 'concept');
};

// 추천 프로젝트 가져오기 (실제 MVP 중에서만)
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured && project.status === 'active');
};

// 카테고리 목록 (정리된 버전)
export const categories = [
  "전체",
  "웹사이트", 
  "플랫폼",
  "AI/음성",
  "공공서비스",
  "복지",
  "헬스케어",
  "업무도구",
  "게임",
  "교육",
  "대시보드",
  "정보서비스",
  "취업지원",
  "추천시스템",
  "VR/AR",
  "IoT",
  "블록체인",
  "AI/의료",
  "환경",
  "물류"
];