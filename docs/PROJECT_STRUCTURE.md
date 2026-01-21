# 프로젝트 구조 문서

## 📂 전체 구조

```
mxten_project_15/
├── public/                         # 정적 리소스
│   ├── fonts/                      # 웹폰트
│   │   ├── Inter-[weight].woff2
│   │   └── Poppins-[weight].woff2
│   ├── images/                     # 프로젝트 스크린샷
│   └── thumbnails/                 # 썸네일 이미지
│
├── src/                            # 소스 코드
│   ├── components/                 # 컴포넌트
│   ├── pages/                      # 페이지
│   ├── data/                       # 데이터
│   ├── design-tokens/              # 디자인 토큰
│   ├── contexts/                   # Context API
│   ├── utils/                      # 유틸리티
│   ├── types/                      # TypeScript 타입
│   ├── App.tsx                     # 메인 앱
│   ├── main.tsx                    # 엔트리 포인트
│   └── index.css                   # 글로벌 스타일
│
├── docs/                           # 문서
├── .github/                        # GitHub 설정
├── vercel.json                     # Vercel 설정
├── vite.config.ts                  # Vite 설정
├── tailwind.config.js              # Tailwind 설정
├── tsconfig.json                   # TypeScript 설정
└── package.json                    # 패키지 정보
```

---

## 🧩 컴포넌트 구조

### Design System (`src/components/ds/`)

토큰 기반 디자인 시스템 컴포넌트

```
ds/
├── Button.tsx          # 버튼 컴포넌트
├── Card.tsx            # 카드 컴포넌트
├── Badge.tsx           # 뱃지 컴포넌트
├── Tag.tsx             # 태그 컴포넌트
├── Typography.tsx      # 타이포그래피 (Heading, Text)
└── index.ts            # Export 통합
```

**특징:**
- Design Token 기반 스타일링
- 일관된 variant/size 시스템
- TypeScript 타입 안전성
- 접근성(a11y) 준수

### 비즈니스 컴포넌트 (`src/components/`)

```
components/
├── ProjectCard.tsx         # 프로젝트 카드
├── CategoryTabs.tsx        # 카테고리 탭
├── SearchBar.tsx           # 검색 바
├── TagFilter.tsx           # 태그 필터
├── HighlightProjects.tsx   # Featured 프로젝트 섹션
├── CTASection.tsx          # Call-to-Action 섹션
├── TrustStatements.tsx     # 신뢰도 표시
├── Navbar.tsx              # 네비게이션 바
├── Footer.tsx              # 푸터
├── BentoSection.tsx        # Bento 그리드 레이아웃
├── CursorFollower.tsx      # 커서 팔로워 효과
├── ErrorBoundary.tsx       # 에러 경계
├── LazyImage.tsx           # 지연 로딩 이미지
├── LoadingSpinner.tsx      # 로딩 스피너
├── ScrollTriggered.tsx     # 스크롤 트리거 애니메이션
├── StickyElements.tsx      # 고정 요소
└── ThemeToggle.tsx         # 테마 토글
```

---

## 📄 페이지 구조

### `src/pages/`

```
pages/
├── LandingPage.tsx         # 메인 랜딩 페이지
├── PortfolioPage.tsx       # 포트폴리오 목록
├── MVPDetailPage.tsx       # 프로젝트 상세
├── ContactPage.tsx         # 문의하기
├── CampaignPage.tsx        # 캠페인 페이지
└── NotFoundPage.tsx        # 404 페이지
```

### 페이지별 책임

| 페이지 | 경로 | 주요 기능 |
|--------|------|-----------|
| LandingPage | `/` | 히어로, Featured, CTA |
| PortfolioPage | `/portfolio` | 83개 프로젝트 그리드, 검색/필터 |
| MVPDetailPage | `/portfolio/:slug` | 프로젝트 상세 정보, 갤러리 |
| ContactPage | `/contact` | 문의 폼, Firebase 연동 |
| CampaignPage | `/campaign` | 특별 캠페인 |
| NotFoundPage | `/404` | 404 에러 |

---

## 💾 데이터 구조

### `src/data/portfolio.ts`

**83개 프로젝트 데이터의 단일 소스**

```typescript
// Interface 정의
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: Category;
  oneLiner: string;
  features: [string, string, string];
  fitFor: string;
  demoUrl?: string;
  thumbnail: string;
  screenshots: string[];
  stack: string[];
  tags: string[];
  featured: boolean;
  yearMonth: string;
}

// 카테고리 정의
export const CATEGORIES = [
  '전체',
  '기업·기관 홈페이지',
  '교육·AI 플랫폼',
  'SaaS·업무자동화',
  '공공·예약·문화'
] as const;

// 프로젝트 배열
export const portfolioProjects: PortfolioProject[] = [
  // 12개 Featured
  // 71개 일반 프로젝트
];

// 유틸리티 함수
export const getFeaturedProjects = () => { ... }
export const getProjectsByCategory = (category: string) => { ... }
export const getProjectById = (id: string) => { ... }
export const getProjectBySlug = (slug: string) => { ... }
export const getCategoryCount = (category: string) => { ... }
export const getPortfolioStats = () => { ... }
export const getAllTags = () => { ... }
```

### 데이터 검증 규칙

- ✅ 총 프로젝트 수: 정확히 83개
- ✅ Featured: 정확히 12개
- ✅ 카테고리: 4개 중 하나 (오타 불가)
- ✅ 카테고리 합계: 21 + 12 + 28 + 22 = 83
- ✅ ID 중복: 0건
- ✅ 빈 값: 0건

---

## 🎨 Design Tokens 구조

### `src/design-tokens/`

```
design-tokens/
├── colors.ts           # 색상 팔레트
├── typography.ts       # 폰트, 크기, 행간
├── spacing.ts          # 간격 시스템 (8px grid)
├── shadows.ts          # 그림자
├── radius.ts           # 모서리 반경
└── index.ts            # 통합 export
```

### Token 계층 구조

```
tokens
├── colors
│   ├── primary (50-900)
│   ├── secondary (50-900)
│   ├── success (50-900)
│   ├── warning (50-900)
│   ├── error (50-900)
│   ├── info (50-900)
│   └── neutral (50-950)
│
├── typography
│   ├── fontFamily
│   ├── fontSize
│   ├── fontWeight
│   └── lineHeight
│
├── spacing (0.5-16)
├── shadows (sm, md, lg, xl)
└── radius (sm, md, lg, xl, full)
```

---

## 🔄 라우팅 구조

### React Router 설정

```typescript
// src/App.tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/portfolio/:slug',
    element: <MVPDetailPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/campaign',
    element: <CampaignPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
```

### URL 스킴

| URL | 페이지 | 설명 |
|-----|--------|------|
| `/` | LandingPage | 메인 |
| `/portfolio` | PortfolioPage | 전체 목록 |
| `/portfolio/baical-systems` | MVPDetailPage | 바이칼시스템즈 상세 |
| `/portfolio/ai-education-platform` | MVPDetailPage | AI 교육 플랫폼 상세 |
| `/contact` | ContactPage | 문의 |
| `/campaign` | CampaignPage | 캠페인 |

---

## 🧰 유틸리티 구조

### `src/utils/`

```
utils/
├── firebase.ts         # Firebase 초기화 및 설정
├── performance.ts      # 성능 측정 유틸리티
└── profiler.tsx        # React Profiler 래퍼
```

### Firebase 설정

```typescript
// utils/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ...
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
```

---

## 🌐 Context 구조

### `src/contexts/ThemeContext.tsx`

테마 관리 (Light/Dark Mode)

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

---

## 📦 빌드 출력 구조

### `dist/` (빌드 후)

```
dist/
├── index.html                  # HTML 엔트리
├── registerSW.js               # Service Worker 등록
├── manifest.webmanifest        # PWA 매니페스트
├── sw.js                       # Service Worker
├── workbox-[hash].js           # Workbox 런타임
│
├── assets/                     # 최적화된 에셋
│   ├── index-[hash].css        # 통합 CSS (~92KB)
│   ├── index-[hash].js         # 메인 JS (~203KB)
│   ├── portfolio-[hash].js     # 포트폴리오 데이터 (~51KB)
│   ├── animation-vendor-[hash].js  # Framer Motion (~113KB)
│   ├── router-vendor-[hash].js     # React Router (~32KB)
│   └── ... (코드 스플릿 청크)
│
└── ... (public 폴더 복사본)
```

### 빌드 최적화

- **코드 스플리팅**: 페이지별 lazy loading
- **Tree Shaking**: 사용하지 않는 코드 제거
- **CSS 최소화**: TailwindCSS purge
- **에셋 최적화**: 이미지 압축, 폰트 subset
- **Gzip 압축**: ~60% 크기 감소

---

## 🔧 설정 파일 구조

### TypeScript 설정

```
├── tsconfig.json           # 기본 TypeScript 설정
├── tsconfig.app.json       # 앱 전용 설정
└── tsconfig.node.json      # Node 전용 설정 (Vite)
```

### Vite 설정 (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // PWA 설정
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icon-vendor': ['lucide-react'],
          'portfolio': ['./src/data/portfolio.ts']
        }
      }
    }
  }
});
```

### Tailwind 설정 (`tailwind.config.js`)

```javascript
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      // Design Token 연동
    },
  },
  plugins: [],
}
```

---

## 📊 의존성 구조

### 주요 의존성 트리

```
mxten_project_15
├── react@18.3.1
│   └── react-dom@18.3.1
├── react-router@7.1.4
│   └── react-router-dom@7.1.4
├── framer-motion@12.0.11
├── firebase@11.1.0
│   ├── @firebase/firestore
│   └── @firebase/analytics
├── lucide-react@0.474.0
└── tailwindcss@3.4.17

devDependencies
├── vite@7.1.7
├── typescript@5.6.3
├── @vitejs/plugin-react@4.4.1
├── vite-plugin-pwa@0.22.1
└── eslint@9.18.0
```

---

## 🔐 환경 변수 구조

### `.env` 파일

```env
# Firebase 설정
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_FIREBASE_MEASUREMENT_ID=xxx

# 기타 설정
VITE_APP_ENV=production
```

### 환경 변수 사용

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // Vite는 VITE_ 접두사 필요
};
```

---

## 📝 문서 구조

### `docs/`

```
docs/
├── figma-design-system-report.md   # Figma 디자인 시스템 리포트
├── qa-report.md                    # QA 검증 리포트
└── PROJECT_STRUCTURE.md            # (이 문서)
```

### `.github/`

```
.github/
└── copilot-instructions.md         # GitHub Copilot 지침서
```

---

**Last Updated: 2026-01-21**
