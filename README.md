# 🚀 바이브 코딩 MVP 소개자료 웹앱# React + TypeScript + Vite



빠른 실험으로 검증된 20+ 개 MVP 포트폴리오를 소개하는 프레젠테이션 스타일 웹애플리케이션입니다.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## ✨ 주요 기능Currently, two official plugins are available:



### 🎯 핵심 구성- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- **Landing Page**: 회사 비전과 히어로 섹션으로 강력한 첫인상- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Portfolio Section**: 카드 형식의 MVP 그리드뷰 및 상세 모달

- **MVP Detail Page**: 문제정의, 솔루션, 기술스택, 결과 상세 표시## React Compiler

- **Contact Form**: 맞춤형 제안 요청 및 Firestore 연동

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### 💻 기술적 특징

- **프레젠테이션 스타일**: TailwindCSS로 슬라이드/PPT 같은 비주얼 구현## Expanding the ESLint configuration

- **부드러운 애니메이션**: Framer Motion으로 전문적인 UX

- **반응형 디자인**: 모든 디바이스에서 완벽한 경험If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **실시간 업데이트**: Firebase Firestore로 동적 콘텐츠 관리

```js

## 🛠️ 기술 스택export default defineConfig([

  globalIgnores(['dist']),

### Frontend  {

- **React 18** + **TypeScript**: 현대적인 UI 개발    files: ['**/*.{ts,tsx}'],

- **Vite**: 빠른 개발 환경    extends: [

- **TailwindCSS**: 유틸리티 우선 CSS 프레임워크      // Other configs...

- **Framer Motion**: 고급 애니메이션 라이브러리

- **React Router**: SPA 라우팅      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

### Backend & 서비스      // Alternatively, use this for stricter rules

- **Firebase Firestore**: NoSQL 실시간 데이터베이스      tseslint.configs.strictTypeChecked,

- **Firebase Hosting**: 안정적인 웹 호스팅      // Optionally, add this for stylistic rules

- **Firebase Analytics**: 사용자 행동 분석      tseslint.configs.stylisticTypeChecked,



### 개발 도구      // Other configs...

- **ESLint**: 코드 품질 관리    ],

- **TypeScript**: 타입 안전성    languageOptions: {

- **Lucide React**: 일관된 아이콘 시스템      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## 🚀 시작하기        tsconfigRootDir: import.meta.dirname,

      },

### 필수 요구사항      // other options...

- Node.js 18+     },

- npm 또는 yarn  },

])

### 설치 및 실행```



```bashYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

# 의존성 설치

npm install```js

// eslint.config.js

# 개발 서버 실행import reactX from 'eslint-plugin-react-x'

npm run devimport reactDom from 'eslint-plugin-react-dom'



# 프로덕션 빌드export default defineConfig([

npm run build  globalIgnores(['dist']),

  {

# 빌드 결과 미리보기    files: ['**/*.{ts,tsx}'],

npm run preview    extends: [

```      // Other configs...

      // Enable lint rules for React

### Firebase 설정      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

1. Firebase 프로젝트 생성      reactDom.configs.recommended,

2. `src/utils/firebase.ts`에서 설정값 업데이트:    ],

    languageOptions: {

```typescript      parserOptions: {

const firebaseConfig = {        project: ['./tsconfig.node.json', './tsconfig.app.json'],

  apiKey: "your-api-key",        tsconfigRootDir: import.meta.dirname,

  authDomain: "your-auth-domain",      },

  projectId: "your-project-id",      // other options...

  storageBucket: "your-storage-bucket",    },

  messagingSenderId: "your-messaging-sender-id",  },

  appId: "your-app-id",])

  measurementId: "your-measurement-id"```

};
```

3. Firestore 규칙 설정
4. Firebase Hosting 배포

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Navbar.tsx      # 네비게이션 바
│   └── Footer.tsx      # 푸터
├── pages/              # 페이지 컴포넌트
│   ├── LandingPage.tsx # 메인 랜딩 페이지
│   ├── PortfolioPage.tsx # MVP 포트폴리오
│   ├── MVPDetailPage.tsx # MVP 상세 페이지
│   └── ContactPage.tsx # 연락처 폼
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── utils/              # 유틸리티 함수
│   └── firebase.ts     # Firebase 설정
├── hooks/              # 커스텀 React Hook
├── App.tsx             # 메인 앱 컴포넌트
└── main.tsx           # 앱 진입점
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Blue (600-700)
- **Secondary**: Purple (600)  
- **Accent**: Yellow/Orange (400-600)
- **Background**: Slate (50, 900)

### 타이포그래피
- **Heading**: Poppins (400-800)
- **Body**: Inter (300-700)

### 애니메이션
- **페이지 전환**: 0.3s ease
- **호버 효과**: 0.2s ease
- **스크롤 애니메이션**: Framer Motion

## 📊 데이터 구조

### MVP 데이터 타입
```typescript
interface MVP {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  results: string[];
  screenshots: string[];
  demoUrl?: string;
  category: string;
  industry: string;
  developmentTime: string;
  teamSize: number;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'concept';
}
```

## 🚢 배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### Firebase Hosting
```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 빌드
npm run build

# Firebase 배포
firebase deploy
```

## 📈 성능 최적화

- **코드 스플리팅**: React.lazy()로 페이지별 분할
- **이미지 최적화**: WebP 형식 사용 권장
- **번들 크기 최적화**: Tree shaking 및 불필요한 의존성 제거
- **CDN 활용**: Firebase Hosting의 글로벌 CDN

## 🔧 개발 팁

### 새로운 MVP 추가
1. Firestore에 MVP 데이터 추가
2. 스크린샷 이미지를 Firebase Storage에 업로드
3. 자동으로 포트폴리오에 반영됨

### 커스터마이징
- `tailwind.config.js`에서 색상/테마 수정
- `src/components/`에서 UI 컴포넌트 커스터마이징
- `src/types/index.ts`에서 데이터 구조 확장

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이센스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

- **이메일**: contact@vibecoding.com
- **전화**: 02-1234-5678
- **웹사이트**: https://vibecoding.com

---

⚡ **바이브 코딩**으로 여러분의 아이디어를 현실로 만들어보세요!