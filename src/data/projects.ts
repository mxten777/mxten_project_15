// MVP 프로젝트 데이터 - 2025년 10월 리뉴얼 프로젝트들만 포함
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  tags: string[];
  featured?: boolean;
  image?: string; // 썸네일 이미지 URL
  // 🚀 궁극의 카드를 위한 고급 데이터
  techStack?: string[]; // 기술 스택
  status?: 'live' | 'beta' | 'coming-soon' | 'maintenance'; // 프로젝트 상태
  completion?: number; // 완성도 (0-100)
  duration?: string; // 개발 기간
  views?: number; // 조회수
  likes?: number; // 좋아요
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert'; // 난이도
}

export const projects: Project[] = [
  // 🏢 기업 홈페이지 리뉴얼 (4개)
  {
    id: "baical-renewal",
    title: "바이칼시스템즈 홈페이지",
    description: "시스템 솔루션 기업의 브랜드와 기술력을 소개하는 현대적 홈페이지 리뉴얼",
    url: "https://mvp-project-04.vercel.app/",
    category: "기업/산업",
    date: "2025-10-08",
    tags: ["React", "시스템솔루션", "기업브랜딩", "리뉴얼"],
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vercel"],
    status: "live",
    completion: 100,
    duration: "2주",
    views: 1247,
    likes: 89,
    difficulty: "medium"
  },
  {
    id: "mansong-renewal",
    title: "만송시스템 홈페이지",
    description: "기업 브랜딩과 서비스 소개를 위한 프리미엄 홈페이지 리뉴얼",
    url: "https://mvp-project-09-mkg5tmd00-dongyeol-jungs-projects.vercel.app/",
    category: "기업/산업",
    date: "2025-10-03",
    tags: ["React", "기업브랜딩", "서비스소개", "리뉴얼"],
    featured: true
  },
  {
    id: "portfolio-renewal",
    title: "바이브 코딩 MVP 소개자료(포트폴리오) 웹앱",
    description: "28개 MVP 프로젝트를 소개하는 프레젠테이션 스타일 포트폴리오 웹사이트",
    url: "https://mxten-project-15-48zl7ce5t-dongyeol-jungs-projects.vercel.app/",
    category: "대표/통합",
    date: "2025-10-12",
    tags: ["포트폴리오", "프레젠테이션", "MVP소개", "React"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    techStack: ["React", "TypeScript", "Framer Motion", "Vite", "Firebase"],
    status: "live",
    completion: 95,
    duration: "3주",
    views: 2341,
    likes: 156,
    difficulty: "expert"
  },
  {
    id: "korea-copron",
    title: "한국코프론 홈페이지",
    description: "기업 정보와 제품 소개를 위한 반응형 웹사이트 리뉴얼",
    url: "https://mvp-project-03-jhbjp3e6e-dongyeol-jungs-projects.vercel.app/",
    category: "기업/산업",
    date: "2025-10-11",
    tags: ["게임", "슬롯머신", "파칭코", "엔터테인먼트"],
    featured: true
  },
  {
    id: "lawmaker-landing",
    title: "국회의원 랜딩페이지",
    description: "시민과 함께하는 더 나은 미래를 위한 국회의원 랜딩페이지",
    url: "https://lawmaker-landing-akik9rar6-dongyeol-jungs-projects.vercel.app/",
    category: "공공/행정",
    date: "2025-09-20",
    tags: ["정치", "랜딩페이지", "시민참여", "공공"],
    featured: true
  },
  // 💼 전문서비스
  {
    id: "lawyer-homepage",
    title: "박신환 행정사 홈페이지",
    description: "행정사 사무소의 전문적인 서비스 소개 홈페이지",
    url: "https://new-project-04-mwevrreb4-dongyeol-jungs-projects.vercel.app/",
    category: "일자리/사회서비스",
    date: "2025-10-10",
    tags: ["행정사", "법무서비스", "전문직", "사무소홈페이지"]
  },

  {
    id: "mxten-06",
    title: "모바일/태블릿 기반 디지털 작업지시서",
    description: "현장 작업자를 위한 디지털 작업지시서 시스템",
    url: "https://mxten-project-06-6xjxhg48i-dongyeol-jungs-projects.vercel.app/",
    category: "기업/산업",
    date: "2025-10-04",
    tags: ["모바일", "태블릿", "작업지시", "현장관리"]
  },
  {
    id: "new-mvp-02-daycare",
    title: "아이뜨락 어린이집 홈페이지",
    description: "어린이집 소개와 교육 프로그램을 안내하는 웹사이트",
    url: "https://new-project-02-jj8qpb4j0-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-04",
    tags: ["React", "교육", "어린이집", "학부모"]
  },

  // 🌟 2025년 8월 프로젝트들
  {
    id: "new-mvp-05-dental",
    title: "박영진치과 홈페이지",
    description: "치과 의료진과 진료 서비스를 소개하는 전문 의료 홈페이지",
    url: "https://park-youngjin-dental-4qvw27a3v-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-13",
    tags: ["치과", "의료", "홈페이지", "예약시스템"]
  },

  // 🚀 주요 비즈니스 플랫폼들  

  {
    id: "dbinfo-main",
    title: "디비인포 리뉴얼",
    description: "데이터베이스 정보 서비스 플랫폼 리뉴얼",
    url: "https://dbinfo-final.vercel.app/",
    category: "교육/AI/데이터",
    date: "2025-10-13",
    tags: ["데이터베이스", "정보서비스", "리뉴얼"]
  },
  {
    id: "dbinfo-admin",
    title: "디비인포 관리자 모드",
    description: "디비인포 관리자 전용 관리 시스템 (비밀번호: admin1234!)",
    url: "https://dbinfo-final.vercel.app/admin/login",
    category: "교육/AI/데이터",
    date: "2025-10-13",
    tags: ["관리자", "백오피스", "관리시스템"]
  },
  {
    id: "mvp-10-medicine",
    title: "약 복용 리마인더 & 가족 알림 앱",
    description: "약 복용 시간을 알려주고 가족에게 알림을 보내는 앱",
    url: "https://mvp-project-10-g3ca25sv4-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-11",
    tags: ["약복용", "리마인더", "가족알림", "건강관리"]
  },
  {
    id: "mvp-32-welfare",
    title: "복지용품·공유물품 대여서비스",
    description: "복지용품과 공유물품을 대여할 수 있는 서비스 플랫폼",
    url: "https://mvp-project-32-gcm09s8qr-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-11",
    tags: ["복지", "대여서비스", "공유경제"]
  },
  {
    id: "mvp-28-facility",
    title: "공공시설 예약 통합 플랫폼",
    description: "다양한 공공시설을 통합 예약할 수 있는 플랫폼",
    url: "https://mvp-project-28-h21qsrg0t-dongyeol-jungs-projects.vercel.app/",
    category: "공공/행정",
    date: "2025-10-11",
    tags: ["공공시설", "예약시스템", "통합플랫폼"]
  },
  {
    id: "mvp-18-welfare-center",
    title: "바이칼 재가복지센터 홈페이지",
    description: "재가복지센터의 서비스와 프로그램을 소개하는 홈페이지",
    url: "https://mvp-project-18-n9qp4huj7-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-05",
    tags: ["복지센터", "재가복지", "사회서비스"]
  },
  {
    id: "mvp-14-rpa",
    title: "시군구 RPA 통합 플랫폼 앱",
    description: "지방자치단체의 업무 자동화를 위한 RPA 통합 관리 플랫폼",
    url: "https://mvp-project-14-9bmios8kd-dongyeol-jungs-projects.vercel.app/",
    category: "공공/행정",
    date: "2025-10-10",
    tags: ["RPA", "자동화", "지방자치", "공공"],
    featured: true
  },
  {
    id: "mvp-30-complaint",
    title: "주민 제보·민원 실시간 처리 웹앱",
    description: "주민들의 제보와 민원을 실시간으로 처리하는 공공 서비스",
    url: "https://mvp-project-30-czlodp7s2-dongyeol-jungs-projects.vercel.app/",
    category: "공공/행정",
    date: "2025-10-11",
    tags: ["민원처리", "제보시스템", "실시간", "공공서비스"]
  },
  {
    id: "mvp-26-resort",
    title: "바이칼리조트 홈페이지 및 예약시스템",
    description: "리조트 소개와 실시간 예약이 가능한 통합 시스템",
    url: "https://mvp-project-26-7iwsc36ux-dongyeol-jungs-projects.vercel.app/",
    category: "엔터테인먼트",
    date: "2025-10-03",
    tags: ["리조트", "예약시스템", "숙박", "관광"]
  },
  {
    id: "caring-plus",
    title: "재가 복지 센터 통합 관리 시스템",
    description: "재가복지센터의 업무를 통합 관리하는 시스템",
    url: "https://caring-plus-1usacqdhl-dongyeol-jungs-projects.vercel.app/login",
    category: "복지/의료/돌봄",
    date: "2025-10-10",
    tags: ["재가복지", "통합관리", "복지센터", "관리시스템"]
  },
  {
    id: "mvp-06-job-platform",
    title: "AI 중장년 일자리 플랫폼",
    description: "중장년층을 위한 AI 기반 맞춤형 일자리 매칭 플랫폼",
    url: "https://mvp-project-06-9eengpa8d-dongyeol-jungs-projects.vercel.app/",
    category: "일자리/사회서비스",
    date: "2025-10-13",
    tags: ["AI", "중장년", "취업", "매칭플랫폼"],
    featured: true
  },
  {
    id: "music-01",
    title: "AI 작사·작곡 도우미 플랫폼",
    description: "AI 기술을 활용하여 창작자들의 작사와 작곡을 도와주는 창의적 플랫폼",
    url: "https://music-project-01-jgqnm0s1m-dongyeol-jungs-projects.vercel.app/",
    category: "교육/AI/데이터",
    date: "2025-10-20",
    tags: ["AI", "음악", "작사", "작곡", "창작도구"],
    featured: true
  },
  {
    id: "new-medical-01-ent",
    title: "선우 이비인후과 홈페이지",
    description: "전문적인 이비인후과 진료 서비스와 의료진을 소개하는 홈페이지",
    url: "https://new-project-30-6me2stquj-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-10",
    tags: ["이비인후과", "의료", "진료서비스", "전문의"]
  },
  {
    id: "new-medical-03-sunghye-main",
    title: "성혜 정형외과 의원 프리미엄 웹사이트",
    description: "성혜 정형외과 의원의 종합적인 의료 서비스와 진료 안내를 제공하는 프리미엄 웹사이트",
    url: "https://new-project-40-im6ku6iue-dongyeol-jungs-projects.vercel.app/",
    category: "복지/의료/돌봄",
    date: "2025-10-10",
    tags: ["정형외과", "의료", "프리미엄", "종합진료"]
  },
  {
    id: "new-medical-03-sunghye-ai",
    title: "성혜 정형외과 의원 AI 증상 체크",
    description: "AI 기반 증상 체크 시스템으로 환자의 초기 진단을 돕는 스마트 의료 서비스",
    url: "https://new-project-40-im6ku6iue-dongyeol-jungs-projects.vercel.app/ai-symptom-check/",
    category: "복지/의료/돌봄",
    date: "2025-10-10",
    tags: ["AI", "증상체크", "스마트의료", "진단보조"]
  },
  {
    id: "new-medical-03-sunghye-booking",
    title: "성혜 정형외과 의원 실시간 예약",
    description: "실시간 예약 시스템으로 편리한 진료 예약과 스케줄 관리를 제공하는 서비스",
    url: "https://new-project-40-im6ku6iue-dongyeol-jungs-projects.vercel.app/appointment/",
    category: "복지/의료/돌봄",
    date: "2025-10-10",
    tags: ["실시간예약", "스케줄관리", "진료예약", "의료서비스"]
  },
  {
    id: "pachinko-slot-game",
    title: "슬롯머신형 일본 파칭코 웹 MVP",
    description: "일본 파칭코 게임을 모티브로 한 슬롯머신 스타일 웹 게임",
    url: "https://mxten-project-10-4mmti96wq-dongyeol-jungs-projects.vercel.app/",
    category: "엔터테인먼트",
    date: "2025-10-11",
    tags: ["게임", "슬롯머신", "파칭코", "엔터테인먼트"]
  },
  {
    id: "vibe-edu-platform",
    title: "AI 기반 맞춤형 교육 플랫폼(바이브에듀)",
    description: "AI 기술을 활용한 개인화 교육 콘텐츠 제공 플랫폼",
    url: "https://jdx-project-01-mrewf59ag-dongyeol-jungs-projects.vercel.app/",
    category: "교육/AI/데이터",
    date: "2025-10-02",
    tags: ["AI교육", "맞춤형학습", "교육플랫폼", "개인화"]
  },
  {
    id: "worker-ai-edu",
    title: "직장인을 위한 AI교육 플랫폼",
    description: "직장인 대상 AI 교육 프로그램을 제공하는 온라인 학습 플랫폼",
    url: "https://jdx-project-02-odmxu88t2-dongyeol-jungs-projects.vercel.app/",
    category: "교육/AI/데이터",
    date: "2025-10-12",
    tags: ["직장인교육", "AI학습", "온라인교육", "전문교육"]
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

// 카테고리 목록 (7개 주요 카테고리 + 향후 확장 카테고리)
export const categories = [
  "all",
  // 🏆 주요 7개 카테고리 (현재 활용)
  "기업/산업",
  "공공/행정", 
  "복지/의료/돌봄",
  "교육/AI/데이터",
  "일자리/사회서비스",
  "엔터테인먼트",
  "대표/통합",
  
  // 🚀 향후 확장 카테고리 (고도화 예정)
  "금융/핀테크",
  "부동산/건축",
  "물류/유통",
  "스마트시티",
  "스포츠/레저",
  "패션/뷰티",
  "푸드테크",
  "모빌리티",
  "IoT/하드웨어",
  "블록체인/NFT",
  "메타버스/VR",
  "클라우드/인프라"
];

export const categoryLabels: Record<string, string> = {
  "all": "전체",
  
  // 주요 7개 카테고리
  "기업/산업": "기업/산업",
  "공공/행정": "공공/행정",
  "복지/의료/돌봄": "복지/의료/돌봄",
  "교육/AI/데이터": "교육/AI/데이터",
  "일자리/사회서비스": "일자리/사회서비스",
  "엔터테인먼트": "엔터테인먼트",
  "대표/통합": "대표/통합",
  
  // 향후 확장 카테고리
  "금융/핀테크": "금융/핀테크",
  "부동산/건축": "부동산/건축", 
  "물류/유통": "물류/유통",
  "스마트시티": "스마트시티",
  "스포츠/레저": "스포츠/레저",
  "패션/뷰티": "패션/뷰티",
  "푸드테크": "푸드테크",
  "모빌리티": "모빌리티",
  "IoT/하드웨어": "IoT/하드웨어",
  "블록체인/NFT": "블록체인/NFT",
  "메타버스/VR": "메타버스/VR",
  "클라우드/인프라": "클라우드/인프라"
};