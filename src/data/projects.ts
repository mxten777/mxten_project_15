// MVP 프로젝트 데이터
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // 최신 프로젝트들 (2024.09.18-19)
  {
    id: "mvp-09",
    title: "만송시스템 홈페이지",
    description: "기업 브랜딩과 서비스 소개를 위한 현대적인 홈페이지",
    url: "https://mvp-project-09-cvel1fy8m-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2024-09-19",
    tags: ["React", "TailwindCSS", "기업홈페이지"],
    featured: true
  },
  {
    id: "mvp-03",
    title: "한국코프론 홈페이지",
    description: "기업 정보와 제품 소개를 위한 반응형 웹사이트",
    url: "https://mvp-project-03-jqy07sslc-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2024-09-18",
    tags: ["React", "반응형", "기업홈페이지"]
  },
  {
    id: "new-mvp-04",
    title: "박신환 행정사 홈페이지",
    description: "전문 서비스 소개와 고객 상담을 위한 웹사이트",
    url: "https://new-project-04-21gei6zl7-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2024-09-18",
    tags: ["React", "서비스", "상담"]
  },
  {
    id: "mvp-25",
    title: "스마트 케어 매칭 플랫폼",
    description: "B2B/B2C 케어 서비스 매칭을 위한 통합 플랫폼",
    url: "https://mvp-project-25-7efeen3jv-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2024-09-18",
    tags: ["React", "B2B", "B2C", "매칭"],
    featured: true
  },

  // AI & 음악 프로젝트들 (2024.09.15-17)
  {
    id: "music-02",
    title: "나만의 시 → 노래 앨범 생성 서비스",
    description: "AI 기술로 시를 노래로 변환하는 창작 플랫폼",
    url: "https://music-project-02-dn8uy6v8p-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음악",
    date: "2024-09-17",
    tags: ["AI", "음악", "창작", "React"],
    featured: true
  },
  {
    id: "music-01",
    title: "AI 작사·작곡 도우미",
    description: "시(詩)를 가사/코드/멜로디로 자동 변환하는 AI 웹앱",
    url: "https://music-project-01-rknu7qncs-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음악",
    date: "2024-09-17",
    tags: ["AI", "작사", "작곡", "Vite", "React"]
  },
  {
    id: "mxten-06",
    title: "모바일/태블릿 기반 디지털 작업지시서",
    description: "현장 작업 효율성을 높이는 디지털 작업 관리 시스템",
    url: "https://mxten-project-06-gspqrzve2-dongyeol-jungs-projects.vercel.app/",
    category: "업무도구",
    date: "2024-09-17",
    tags: ["모바일", "태블릿", "작업관리", "React"]
  },
  {
    id: "mxten-07",
    title: "BAIKAL 종합현황표",
    description: "실시간 데이터 모니터링과 현황 관리 대시보드",
    url: "https://mxten-project-07-noujsrz7x-dongyeol-jungs-projects.vercel.app/",
    category: "대시보드",
    date: "2024-09-16",
    tags: ["대시보드", "모니터링", "데이터", "React"]
  },
  {
    id: "mxten-05",
    title: "미니게임 허브",
    description: "다양한 미니게임을 즐길 수 있는 게임 플랫폼",
    url: "https://mxten-project-05-b2yerziv5-dongyeol-jungs-projects.vercel.app/",
    category: "게임",
    date: "2024-09-15",
    tags: ["게임", "엔터테인먼트", "React", "JavaScript"]
  },
  {
    id: "mxten-03",
    title: "출퇴근 정류장 알리미 웹앱",
    description: "대중교통 이용자를 위한 실시간 정류장 정보 서비스",
    url: "https://mxten-project-03-hqrssa8j7-dongyeol-jungs-projects.vercel.app/",
    category: "모바일앱",
    date: "2024-09-15",
    tags: ["교통", "실시간", "알림", "PWA"]
  },

  // 기업 웹사이트 & 플랫폼 (2024.09.11-13)
  {
    id: "mvp-02",
    title: "만송시스템 홈페이지 v2",
    description: "업데이트된 기업 홈페이지 (버전 2)",
    url: "https://mvp-project-02-7lpd9zwz0-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2024-09-13",
    tags: ["React", "기업홈페이지", "리뉴얼"]
  },
  {
    id: "dbinfo-mvp-01",
    title: "디비인포 리뉴얼",
    description: "데이터 관리 서비스의 현대적 리뉴얼 (관리자 모드 포함)",
    url: "https://dbinfo-homepage.vercel.app/",
    category: "플랫폼",
    date: "2024-09-12",
    tags: ["React", "관리자", "데이터관리", "리뉴얼"]
  },
  {
    id: "fuel-mvp-02",
    title: "AI 주유소 플랫폼",
    description: "AI 기술을 활용한 스마트 주유소 관리 플랫폼",
    url: "https://fuel-project-02-b7piovrkn-dongyeol-jungs-projects.vercel.app/",
    category: "AI/플랫폼",
    date: "2024-09-12",
    tags: ["AI", "주유소", "플랫폼", "React"]
  },
  {
    id: "mvp-10",
    title: "약 복용 리마인더 & 가족 알림 앱",
    description: "건강 관리를 위한 스마트 복약 알림 서비스",
    url: "https://mvp-project-10-1i4i48y0a-dongyeol-jungs-projects.vercel.app/",
    category: "헬스케어",
    date: "2024-09-11",
    tags: ["헬스케어", "알림", "가족", "모바일앱"]
  },

  // 공공서비스 & 복지 (2024.09.01-09)
  {
    id: "mvp-32",
    title: "복지용품·공유물품 대여서비스",
    description: "지역사회 복지용품 공유를 위한 대여 플랫폼",
    url: "https://mvp-project-32-qz289a87p-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-09-09",
    tags: ["복지", "공유경제", "대여", "React"]
  },
  {
    id: "mvp-28",
    title: "공공시설 예약 통합 플랫폼",
    description: "다양한 공공시설을 한 번에 예약할 수 있는 통합 서비스",
    url: "https://mvp-project-28-jw62b134z-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2024-09-08",
    tags: ["공공", "예약", "통합플랫폼", "React"],
    featured: true
  },
  {
    id: "mvp-18",
    title: "바이칼 재가복지센터 홈페이지",
    description: "재가복지 서비스 정보와 신청을 위한 웹사이트",
    url: "https://mvp-project-18-jf7kz73yo-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-09-08",
    tags: ["복지", "재가복지", "웹사이트", "React"]
  },
  {
    id: "mvp-14",
    title: "시군구 RPA 통합 플랫폼 앱",
    description: "지방자치단체 업무 자동화를 위한 RPA 통합 솔루션",
    url: "https://mvp-project-14-e8j1qqyqa-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2024-09-02",
    tags: ["RPA", "자동화", "공공", "플랫폼"],
    featured: true
  },
  {
    id: "mvp-30",
    title: "주민 제보·민원 실시간 처리 웹앱",
    description: "시민 참여형 실시간 민원 처리 시스템",
    url: "https://mvp-project-30-obzpnc1f8-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2024-09-01",
    tags: ["민원", "실시간", "시민참여", "React"]
  },

  // 복지 & 시니어 서비스 (2024.08.12-31)
  {
    id: "mvp-26",
    title: "바이칼리조트 홈페이지 및 예약시스템",
    description: "리조트 정보 제공과 실시간 예약이 가능한 통합 시스템",
    url: "https://mvp-project-26-13mqsl3zg-dongyeol-jungs-projects.vercel.app/",
    category: "예약시스템",
    date: "2024-08-31",
    tags: ["리조트", "예약", "관광", "React"]
  },
  {
    id: "mvp-08",
    title: "시니어 복지정보 알림 앱",
    description: "고령자를 위한 맞춤형 복지 정보 제공 서비스",
    url: "https://mvp-project-08-jnxg8fbw2-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-08-22",
    tags: ["시니어", "복지", "알림", "모바일앱"]
  },
  {
    id: "mvp-16",
    title: "재가 복지 센터 통합 관리 시스템",
    description: "복지센터 운영과 서비스 관리를 위한 통합 솔루션",
    url: "https://caring-plus-4v7h7lpvr-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-08-22",
    tags: ["복지", "관리시스템", "재가복지", "React"]
  },
  {
    id: "mvp-20",
    title: "복지 서비스 추천 앱",
    description: "개인 맞춤형 복지 서비스 추천 및 안내 플랫폼",
    url: "https://mvp-project-20-1367rwzsk-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2024-08-21",
    tags: ["복지", "추천", "개인맞춤", "AI"]
  },
  {
    id: "mvp-06",
    title: "AI 중장년 일자리 플랫폼",
    description: "중장년층 취업 지원을 위한 AI 기반 매칭 플랫폼",
    url: "https://mvp-project-06-d8lm59m26-dongyeol-jungs-projects.vercel.app/",
    category: "취업지원",
    date: "2024-08-14",
    tags: ["AI", "중장년", "취업", "매칭플랫폼"]
  },
  {
    id: "python-mvp-02",
    title: "경기지역 날씨 서비스",
    description: "경기도 지역 특화 날씨 정보 제공 서비스",
    url: "https://python-project-02.onrender.com/",
    category: "정보서비스",
    date: "2024-08-12",
    tags: ["Python", "날씨", "지역정보", "API"]
  }
];

// 카테고리별 필터링 함수
export const getProjectsByCategory = (category: string) => {
  if (category === "전체") return projects;
  return projects.filter(project => project.category === category);
};

// 추천 프로젝트 가져오기
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// 카테고리 목록
export const categories = [
  "전체",
  "웹사이트", 
  "플랫폼",
  "AI/음악",
  "복지",
  "공공서비스",
  "헬스케어",
  "업무도구",
  "게임",
  "대시보드"
];