// MVP 프로젝트 데이터 - 실제 제공된 MVP들만 포함
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
  // 🔥 2025년 9월 최신 프로젝트들
  {
    id: "jdx-01",
    title: "JDX[1] 바이브 에듀 - AI 기반 맞춤형 교육 플랫폼",
    description: "최고의 교육 경험을 제공하는 차세대 온라인 교육 플랫폼. 실시간 강의, 커뮤니티, AI 기반 맞춤 학습 등 최신 기술을 집약한 서비스.",
    url: "https://jdx-project-01-mrewf59ag-dongyeol-jungs-projects.vercel.app/",
    category: "교육 플랫폼",
    date: "2025-10-02",
    tags: ["교육", "플랫폼", "AI", "실시간", "커뮤니티"],
    featured: true
  },
  {
    id: "mxten-12",
    title: "동해기계 홈페이지 리뉴얼",
    description: "기계 제조업체의 현대적인 홈페이지 리뉴얼 프로젝트",
    url: "https://mxten-project-12-4pwo921bz-dongyeol-jungs-projects.vercel.app/ko/home",
    category: "웹사이트",
    date: "2025-10-03",
    tags: ["React", "리뉴얼", "제조업", "다국어"],
    featured: true
  },
  {
    id: "jdx-02",
    title: "직장인을 위한 AI교육 플랫폼",
    description: "직장인들의 업무 역량 향상을 위한 AI 기반 맞춤형 교육 플랫폼",
    url: "https://jdx-project-02-r5s7u3v9w-dongyeol-jungs-projects.vercel.app/",
    category: "교육",
    date: "2025-10-15",
    tags: ["직장인교육", "AI", "역량개발", "교육플랫폼"],
    featured: true
  },
  {
    id: "mxten-10",
    title: "슬롯머신형 일본 파칭코 웹",
    description: "재미있는 슬롯머신 스타일의 파칭코 게임 웹 애플리케이션",
    url: "https://mxten-project-10-4mmti96wq-dongyeol-jungs-projects.vercel.app/",
    category: "게임",
    date: "2025-10-11",
    tags: ["게임", "슬롯머신", "파칭코", "엔터테인먼트"],
    featured: true
  },
  {
    id: "lawmaker-landing",
    title: "국회의원 랜딩페이지",
    description: "시민과 함께하는 더 나은 미래를 위한 국회의원 랜딩페이지",
    url: "https://lawmaker-landing-akik9rar6-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2025-09-20",
    tags: ["정치", "랜딩페이지", "시민참여", "공공"],
    featured: true
  },
  {
    id: "mvp-09",
    title: "만송시스템 홈페이지",
    description: "기업 브랜딩과 서비스 소개를 위한 현대적인 홈페이지",
    url: "https://mvp-project-09-mkg5tmd00-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-19",
    tags: ["React", "TailwindCSS", "기업홈페이지"],
    featured: true
  },
  {
    id: "mvp-03",
    title: "한국코프론 홈페이지",
    description: "기업 정보와 제품 소개를 위한 반응형 웹사이트",
    url: "https://mvp-project-03-jqy07sslc-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-18",
    tags: ["React", "기업정보", "제품소개"]
  },
  {
    id: "new-mvp-04",
    title: "박신환 행정사 홈페이지",
    description: "행정사 사무소의 전문적인 서비스 소개 홈페이지",
    url: "https://new-project-04-21gei6zl7-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-18",
    tags: ["행정사", "법무서비스", "전문직"]
  },
  {
    id: "mvp-25",
    title: "스마트 케어 매칭 플랫폼",
    description: "B2B/B2C 스마트 케어 서비스 매칭 플랫폼",
    url: "https://mvp-project-25-j4m8nqsxv-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2025-09-18",
    tags: ["케어", "매칭", "B2B", "B2C", "헬스케어"]
  },
  {
    id: "music-02",
    title: "나만의 시 → 노래 앨범 생성 서비스",
    description: "시를 노래로 변환하여 개인 앨범을 생성하는 AI 서비스",
    url: "https://music-project-02-dn8uy6v8p-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2025-09-17",
    tags: ["AI", "음악", "시", "앨범생성"]
  },
  {
    id: "music-01",
    title: "AI 작사·작곡 도우미",
    description: "시를 가사/코드/멜로디로 자동 변환하는 AI 웹앱",
    url: "https://music-project-01-rknu7qncs-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2025-09-17",
    tags: ["AI", "작사", "작곡", "자동변환"]
  },
  {
    id: "mxten-06",
    title: "모바일/태블릿 기반 디지털 작업지시서",
    description: "현장 작업자를 위한 디지털 작업지시서 시스템",
    url: "https://mxten-project-06-gspqrzve2-dongyeol-jungs-projects.vercel.app/",
    category: "업무도구",
    date: "2025-09-17",
    tags: ["모바일", "태블릿", "작업지시", "현장관리"]
  },
  {
    id: "mxten-07",
    title: "BAIKAL 종합현황표",
    description: "바이칼 시스템의 종합 현황을 한눈에 볼 수 있는 대시보드",
    url: "https://mxten-project-07-noujsrz7x-dongyeol-jungs-projects.vercel.app/",
    category: "대시보드",
    date: "2025-09-16",
    tags: ["대시보드", "현황표", "모니터링"]
  },
  {
    id: "mxten-05",
    title: "미니게임 허브",
    description: "다양한 미니게임을 즐길 수 있는 게임 허브 플랫폼",
    url: "https://mxten-project-05-b2yerziv5-dongyeol-jungs-projects.vercel.app/",
    category: "게임",
    date: "2025-09-15",
    tags: ["미니게임", "게임허브", "엔터테인먼트"]
  },
  {
    id: "mxten-03",
    title: "출퇴근 정류장 알리미 웹앱",
    description: "출퇴근 시 대중교통 정류장 정보를 알려주는 웹앱",
    url: "https://mxten-project-03-hqrssa8j7-dongyeol-jungs-projects.vercel.app/",
    category: "정보서비스",
    date: "2025-09-15",
    tags: ["대중교통", "정류장", "출퇴근", "알림"]
  },
  {
    id: "mvp-04-baical",
    title: "바이칼시스템즈 홈페이지",
    description: "시스템 솔루션 기업의 브랜드와 기술력을 소개하는 홈페이지",
    url: "https://mvp-project-04-4pwo921bz-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-15",
    tags: ["React", "시스템", "기업홈페이지", "TailwindCSS"],
    featured: true
  },
  {
    id: "new-mvp-02-daycare",
    title: "아이뜨락 어린이집 홈페이지",
    description: "어린이집 소개와 교육 프로그램을 안내하는 웹사이트",
    url: "https://new-project-02-4ee93i64q-dongyeol-jungs-projects.vercel.app/",
    category: "교육",
    date: "2025-09-15",
    tags: ["React", "교육", "어린이집", "학부모"]
  },

  // 🌟 2025년 8월 프로젝트들
  {
    id: "new-mvp-05-dental",
    title: "박영진치과 홈페이지",
    description: "치과 의료진과 진료 서비스를 소개하는 전문 의료 홈페이지",
    url: "https://park-youngjin-dental-u6xb6ynrw-dongyeol-jungs-projects.vercel.app/",
    category: "의료",
    date: "2025-08-16",
    tags: ["치과", "의료", "홈페이지", "예약시스템"]
  },
  {
    id: "mvp-14-budget",
    title: "AI 간편장부 앱",
    description: "AI 기반 개인 가계부 관리 애플리케이션",
    url: "https://mvp-project-14-qa9xl5k8r-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2025-08-14",
    tags: ["AI", "가계부", "개인재정", "모바일"]
  },

  // 🚀 주요 비즈니스 플랫폼들
  {
    id: "mvp-02-mansong",
    title: "만송시스템 홈페이지 (Ver.2)",
    description: "만송시스템의 두 번째 버전 홈페이지",
    url: "https://mvp-project-02-7lpd9zwz0-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-13",
    tags: ["기업홈페이지", "리뉴얼"]
  },
  {
    id: "dbinfo-main",
    title: "디비인포 리뉴얼",
    description: "데이터베이스 정보 서비스 플랫폼 리뉴얼",
    url: "https://dbinfo-homepage-ddysi6ynz-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2025-09-12",
    tags: ["데이터베이스", "정보서비스", "리뉴얼"]
  },
  {
    id: "dbinfo-admin",
    title: "디비인포 관리자 모드",
    description: "디비인포 관리자 전용 관리 시스템 (비밀번호: admin1234!)",
    url: "https://dbinfo-homepage-ddysi6ynz-dongyeol-jungs-projects.vercel.app/admin/login",
    category: "관리시스템",
    date: "2025-09-12",
    tags: ["관리자", "백오피스", "관리시스템"]
  },
  {
    id: "fuel-02",
    title: "AI 주유소 플랫폼",
    description: "AI 기반 주유소 정보 및 서비스 플랫폼",
    url: "https://fuel-project-02-fek6qfj2o-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2025-09-12",
    tags: ["AI", "주유소", "플랫폼", "자동차"]
  },
  {
    id: "mvp-10-medicine",
    title: "약 복용 리마인더 & 가족 알림 앱",
    description: "약 복용 시간을 알려주고 가족에게 알림을 보내는 앱",
    url: "https://mvp-project-10-1i4i48y0a-dongyeol-jungs-projects.vercel.app/",
    category: "헬스케어",
    date: "2025-09-11",
    tags: ["약복용", "리마인더", "가족알림", "건강관리"]
  },
  {
    id: "mvp-25-care",
    title: "스마트 케어 매칭 플랫폼 (Ver.2)",
    description: "B2B/B2C 스마트 케어 서비스 매칭 플랫폼 두 번째 버전",
    url: "https://mvp-project-25-k7q3m9r5t-dongyeol-jungs-projects.vercel.app/",
    category: "플랫폼",
    date: "2025-09-11",
    tags: ["케어", "매칭", "B2B", "B2C", "헬스케어"]
  },
  {
    id: "mvp-32-welfare",
    title: "복지용품·공유물품 대여서비스",
    description: "복지용품과 공유물품을 대여할 수 있는 서비스 플랫폼",
    url: "https://mvp-project-32-qz289a87p-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2025-09-09",
    tags: ["복지", "대여서비스", "공유경제"]
  },
  {
    id: "mvp-28-facility",
    title: "공공시설 예약 통합 플랫폼",
    description: "다양한 공공시설을 통합 예약할 수 있는 플랫폼",
    url: "https://mvp-project-28-jw62b134z-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2025-09-08",
    tags: ["공공시설", "예약시스템", "통합플랫폼"]
  },
  {
    id: "mvp-18-welfare-center",
    title: "바이칼 재가복지센터 홈페이지",
    description: "재가복지센터의 서비스와 프로그램을 소개하는 홈페이지",
    url: "https://mvp-project-18-8t1lxe1o7-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2025-09-08",
    tags: ["복지센터", "재가복지", "사회서비스"]
  },
  {
    id: "mvp-36-renewal",
    title: "스마트한 웹사이트 리뉴얼",
    description: "기존 웹사이트를 현대적이고 스마트하게 리뉴얼",
    url: "https://mvp-project-35-iw1tntzbk-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-08",
    tags: ["리뉴얼", "웹사이트", "UI/UX"]
  },
  {
    id: "mvp-35-mxten",
    title: "엠엑스텐 웹사이트 리뉴얼",
    description: "엠엑스텐 공식 웹사이트의 현대적 리뉴얼",
    url: "https://mvp-project-35-fofg6fl8z-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-09-05",
    tags: ["기업홈페이지", "리뉴얼", "브랜딩"]
  },
  {
    id: "mvp-14-rpa",
    title: "시군구 RPA 통합 플랫폼 앱",
    description: "지방자치단체의 업무 자동화를 위한 RPA 통합 관리 플랫폼",
    url: "https://mvp-project-14-kx8ql2v9p-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2025-09-02",
    tags: ["RPA", "자동화", "지방자치", "공공"],
    featured: true
  },
  {
    id: "mvp-30-complaint",
    title: "주민 제보·민원 실시간 처리 웹앱",
    description: "주민들의 제보와 민원을 실시간으로 처리하는 공공 서비스",
    url: "https://mvp-project-30-obzpnc1f8-dongyeol-jungs-projects.vercel.app/",
    category: "공공서비스",
    date: "2025-09-01",
    tags: ["민원처리", "제보시스템", "실시간", "공공서비스"]
  },
  {
    id: "mvp-26-resort",
    title: "바이칼리조트 홈페이지 및 예약시스템",
    description: "리조트 소개와 실시간 예약이 가능한 통합 시스템",
    url: "https://mvp-project-26-ak6wjm4yp-dongyeol-jungs-projects.vercel.app/",
    category: "숙박/예약",
    date: "2025-08-31",
    tags: ["리조트", "예약시스템", "숙박", "관광"]
  },
  {
    id: "mvp-08-senior",
    title: "시니어 복지정보 알림 앱",
    description: "시니어를 위한 맞춤형 복지 정보 알림 서비스",
    url: "https://mvp-project-08-jnxg8fbw2-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2025-08-22",
    tags: ["시니어", "복지정보", "알림서비스"]
  },
  {
    id: "caring-plus",
    title: "재가 복지 센터 통합 관리 시스템",
    description: "재가복지센터의 업무를 통합 관리하는 시스템",
    url: "https://caring-plus-4v7h7lpvr-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2025-08-22",
    tags: ["재가복지", "통합관리", "복지센터", "관리시스템"]
  },
  {
    id: "mvp-20-welfare-recommend",
    title: "복지 서비스 추천 앱",
    description: "개인 맞춤형 복지 서비스를 추천해주는 애플리케이션",
    url: "https://mvp-project-20-1367rwzsk-dongyeol-jungs-projects.vercel.app/",
    category: "복지",
    date: "2025-08-21",
    tags: ["복지서비스", "개인화추천", "매칭"]
  },
  {
    id: "new-mvp-10-baikal",
    title: "바이칼 홈페이지",
    description: "바이칼 그룹의 공식 홈페이지",
    url: "https://new-project-10-ciiz9t2rc-dongyeol-jungs-projects.vercel.app/",
    category: "웹사이트",
    date: "2025-08-16",
    tags: ["기업홈페이지", "그룹사", "브랜딩"]
  },
  {
    id: "mvp-06-job-platform",
    title: "AI 중장년 일자리 플랫폼",
    description: "중장년층을 위한 AI 기반 맞춤형 일자리 매칭 플랫폼",
    url: "https://mvp-project-06-t4fmwazwp-dongyeol-jungs-projects.vercel.app/",
    category: "취업지원",
    date: "2025-08-15",
    tags: ["AI", "중장년", "취업", "매칭플랫폼"],
    featured: true
  },
  {
    id: "music-01",
    title: "AI 작사·작곡 도우미 플랫폼",
    description: "AI 기술을 활용하여 창작자들의 작사와 작곡을 도와주는 창의적 플랫폼",
    url: "https://music-project-01-k7h3m8n4q-dongyeol-jungs-projects.vercel.app/",
    category: "AI/음성",
    date: "2025-10-20",
    tags: ["AI", "음악", "작사", "작곡", "창작도구"],
    featured: true
  },
  {
    id: "new-medical-01-ent",
    title: "김정훈 이비인후과 홈페이지",
    description: "전문적인 이비인후과 진료 서비스와 의료진을 소개하는 홈페이지",
    url: "https://kim-jeonghun-ent-clinic-dongyeol-jungs-projects.vercel.app/",
    category: "의료",
    date: "2025-10-10",
    tags: ["이비인후과", "의료", "진료서비스", "전문의"]
  },
  {
    id: "new-medical-02-ortho",
    title: "박준서 정형외과 홈페이지", 
    description: "정형외과 전문 진료와 재활 치료 서비스를 안내하는 의료 홈페이지",
    url: "https://park-junseo-orthopedic-clinic-dongyeol-jungs-projects.vercel.app/",
    category: "의료",
    date: "2025-10-10",
    tags: ["정형외과", "의료", "재활치료", "전문의"]
  }
];

// 필터링 함수들
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

// 카테고리 목록 (실제 프로젝트 카테고리만 포함)
export const categories = [
  "all",
  "웹사이트",
  "플랫폼", 
  "AI/음성",
  "게임",
  "헬스케어",
  "업무도구",
  "정보서비스",
  "교육",
  "대시보드",
  "복지",
  "공공서비스",
  "취업지원",
  "의료",
  "관리시스템",
  "숙박/예약"
];

export const categoryLabels: Record<string, string> = {
  "all": "전체",
  "웹사이트": "웹사이트",
  "플랫폼": "플랫폼",
  "AI/음성": "AI/음성",
  "게임": "게임",
  "헬스케어": "헬스케어",
  "업무도구": "업무도구",
  "정보서비스": "정보서비스",
  "교육": "교육",
  "대시보드": "대시보드",
  "복지": "복지",
  "공공서비스": "공공서비스",
  "취업지원": "취업지원",
  "의료": "의료",
  "관리시스템": "관리시스템",
  "숙박/예약": "숙박/예약"
};