# URL 및 Routing 구조 표준

> **버전**: 1.0  
> **최종 수정일**: 2026-01-22  
> **적용 범위**: 포트폴리오 전체 URL 체계

---

## 📋 목차
1. [URL 설계 원칙](#1-url-설계-원칙)
2. [포트폴리오 URL 구조](#2-포트폴리오-url-구조)
3. [카테고리별 URL](#3-카테고리별-url)
4. [Featured 프로젝트 처리](#4-featured-프로젝트-처리)
5. [SEO 최적화 전략](#5-seo-최적화-전략)
6. [리다이렉트 규칙](#6-리다이렉트-규칙)

---

## 1. URL 설계 원칙

### 1.1 핵심 원칙

#### RESTful 설계
```
GET /portfolio              → 전체 포트폴리오 목록
GET /portfolio/:slug        → 특정 프로젝트 상세
GET /portfolio/category/:name → 카테고리별 목록
GET /portfolio/featured     → Featured 프로젝트만
```

#### 사용자 친화성
- **의미 있는 URL**: 숫자 ID 대신 slug 사용
- **예측 가능성**: 일관된 패턴 유지
- **간결성**: 불필요한 depth 제거

#### SEO 최적화
- **키워드 포함**: URL에 검색 키워드 자연스럽게 삽입
- **하이픈 사용**: 단어 구분에 하이픈(-) 사용 (밑줄 금지)
- **소문자 사용**: 대소문자 혼용 금지

---

## 2. 포트폴리오 URL 구조

### 2.1 기본 URL 패턴

#### 메인 포트폴리오 페이지
```
/portfolio
```
- 83개 전체 프로젝트 표시
- 필터/검색/정렬 기능 제공
- Featured 프로젝트 하이라이트

#### 프로젝트 상세 페이지
```
/portfolio/{slug}
```

**예시:**
```
✅ /portfolio/ketri-homepage
✅ /portfolio/vibe-office-hub
✅ /portfolio/library-reservation
✅ /portfolio/baical-systems

❌ /portfolio/1
❌ /portfolio/project-123
❌ /portfolio/ketri_homepage (밑줄 사용)
```

### 2.2 URL 매핑 규칙

```typescript
// React Router 설정
<Route path="/portfolio" element={<PortfolioPage />} />
<Route path="/portfolio/:slug" element={<MVPDetailPage />} />

// Slug로 프로젝트 조회
const { slug } = useParams();
const project = getProjectBySlug(slug);
```

### 2.3 URL 유효성 검증

```typescript
// URL slug 검증 함수
const isValidSlug = (slug: string): boolean => {
  // 1. 형식 검증: 영문 소문자 + 하이픈만
  const pattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  if (!pattern.test(slug)) return false;
  
  // 2. 길이 검증: 3-50자
  if (slug.length < 3 || slug.length > 50) return false;
  
  // 3. 실제 프로젝트 존재 여부
  const project = getProjectBySlug(slug);
  return project !== undefined;
};
```

---

## 3. 카테고리별 URL

### 3.1 카테고리 URL 구조

```
/portfolio/category/{category-slug}
```

### 3.2 카테고리 Slug 매핑

| 카테고리 (한글) | Category Slug | URL |
|----------------|---------------|-----|
| 전체 | `all` | `/portfolio` |
| 기업·기관 홈페이지 | `company` | `/portfolio/category/company` |
| 교육·AI 플랫폼 | `education` | `/portfolio/category/education` |
| SaaS·업무자동화 | `saas` | `/portfolio/category/saas` |
| 공공·예약·문화 | `public` | `/portfolio/category/public` |

### 3.3 카테고리 라우팅 구현

```typescript
// React Router
<Route path="/portfolio/category/:categorySlug" element={<PortfolioPage />} />

// URL 파라미터 파싱
const { categorySlug } = useParams();
const categoryMap = {
  'all': '전체',
  'company': '기업·기관 홈페이지',
  'education': '교육·AI 플랫폼',
  'saas': 'SaaS·업무자동화',
  'public': '공공·예약·문화'
};
const category = categoryMap[categorySlug] || '전체';
```

### 3.4 카테고리 필터 + 검색 조합

```
/portfolio/category/company?search=바이칼
/portfolio/category/education?tag=AI
/portfolio/category/saas?sort=latest
```

**쿼리 파라미터:**
- `search`: 검색어
- `tag`: 태그 필터
- `sort`: 정렬 (latest, oldest, recommended)
- `featured`: Featured만 보기 (true/false)

---

## 4. Featured 프로젝트 처리

### 4.1 Featured URL 전략

**전략 A: 동일 URL 사용 (권장)**
```
/portfolio/ketri-homepage
```
- Featured 여부는 데이터로만 관리
- URL 중복 없음
- SEO에 유리

**전략 B: 별도 경로 사용**
```
/featured/ketri-homepage
```
- Featured 전용 섹션
- 일반 포트폴리오와 구분
- 관리 복잡도 증가

### 4.2 채택한 전략: A (동일 URL)

**이유:**
1. **URL 단순성**: 하나의 프로젝트 = 하나의 URL
2. **SEO 최적화**: URL 분산 방지
3. **유지보수성**: Featured 상태 변경 시 URL 변경 불필요

**구현 방법:**
```typescript
// Featured 필터링은 쿼리 파라미터로
/portfolio?featured=true

// 또는 별도 필터 컴포넌트
<CategoryTabs selectedCategory={category} />
<FeaturedToggle checked={showFeaturedOnly} />
```

### 4.3 Featured 전용 뷰

```
/portfolio/featured
```
- Featured 12개만 보여주는 전용 페이지
- 메인 페이지에서 "Featured 프로젝트 보기" 링크
- 실제 상세 페이지는 `/portfolio/:slug` 공유

---

## 5. SEO 최적화 전략

### 5.1 URL 구조 최적화

#### 키워드 포함
```
✅ /portfolio/ai-education-platform
   → "AI", "education", "platform" 키워드 포함
   
✅ /portfolio/library-reservation
   → "library", "reservation" 키워드 포함
   
❌ /portfolio/jdx-01
   → 의미 없는 코드명
```

#### 계층 구조
```
Level 1: /portfolio              (포트폴리오 루트)
Level 2: /portfolio/:slug         (프로젝트 상세)
Level 3: /portfolio/category/:name (카테고리별)

❌ /portfolio/2026/01/project/:slug (과도한 depth)
```

### 5.2 Canonical URL 설정

```html
<!-- 프로젝트 상세 페이지 -->
<link rel="canonical" href="https://baikalsys.kr/portfolio/ketri-homepage" />

<!-- 카테고리 페이지 -->
<link rel="canonical" href="https://baikalsys.kr/portfolio/category/company" />
```

### 5.3 Meta 태그 최적화

```typescript
// 프로젝트별 Meta 태그
const generateMetaTags = (project: PortfolioProject) => {
  return {
    title: `${project.title} | 바이브 코딩 포트폴리오`,
    description: project.oneLiner,
    keywords: project.tags.join(', '),
    ogUrl: `https://baikalsys.kr/portfolio/${project.slug}`,
    ogImage: `https://baikalsys.kr${project.thumbnail}`,
    ogType: 'website',
  };
};
```

### 5.4 Sitemap 생성

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 포트폴리오 메인 -->
  <url>
    <loc>https://baikalsys.kr/portfolio</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  
  <!-- 각 프로젝트 -->
  <url>
    <loc>https://baikalsys.kr/portfolio/ketri-homepage</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- ... 83개 프로젝트 -->
</urlset>
```

### 5.5 Robots.txt

```txt
User-agent: *
Allow: /portfolio
Allow: /portfolio/*

Sitemap: https://baikalsys.kr/sitemap.xml
```

---

## 6. 리다이렉트 규칙

### 6.1 Legacy URL 처리

#### ID 기반 → Slug 기반 리다이렉트
```
301 Redirect:
/portfolio/ketri-01 → /portfolio/ketri-homepage
/portfolio/gen-30 → /portfolio/gwangyeon-driving
/portfolio/grok-57 → /portfolio/library-reservation
```

#### 구현 방법
```typescript
// React Router에서 리다이렉트
<Route path="/portfolio/:id" element={<LegacyRedirect />} />

const LegacyRedirect = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  
  if (project) {
    return <Navigate to={`/portfolio/${project.slug}`} replace />;
  }
  return <Navigate to="/portfolio" replace />;
};
```

### 6.2 잘못된 URL 처리

```typescript
// 404 처리
<Route path="/portfolio/*" element={<NotFoundPage />} />

// NotFoundPage 컴포넌트
const NotFoundPage = () => {
  return (
    <div>
      <h1>프로젝트를 찾을 수 없습니다</h1>
      <Link to="/portfolio">포트폴리오로 돌아가기</Link>
    </div>
  );
};
```

### 6.3 대소문자 처리

```typescript
// 모든 URL을 소문자로 정규화
const normalizeUrl = (path: string) => {
  return path.toLowerCase();
};

// Middleware에서 자동 리다이렉트
if (location.pathname !== normalizeUrl(location.pathname)) {
  navigate(normalizeUrl(location.pathname), { replace: true });
}
```

---

## 7. URL 변경 이력 관리

### 7.1 변경 이력 추적

```typescript
// URL 변경 이력 테이블
interface UrlHistory {
  oldUrl: string;
  newUrl: string;
  changedAt: string;
  reason: string;
}

const urlHistory: UrlHistory[] = [
  {
    oldUrl: '/portfolio/ketri-01',
    newUrl: '/portfolio/ketri-homepage',
    changedAt: '2026-01-22',
    reason: 'Slug 기반 URL로 마이그레이션'
  },
  // ...
];
```

### 7.2 리다이렉트 맵 생성

```typescript
// _redirects 파일 (Vercel/Netlify)
/portfolio/ketri-01    /portfolio/ketri-homepage    301
/portfolio/gen-30      /portfolio/gwangyeon-driving 301
/portfolio/grok-57     /portfolio/library-reservation 301
```

---

## 8. URL 구조 종합 정리

### 8.1 전체 URL Map

```
📂 Root
├── 🏠 / (홈페이지)
├── 📁 /portfolio (포트폴리오 메인)
│   ├── 📄 /portfolio/:slug (프로젝트 상세)
│   ├── 📁 /portfolio/category/:categorySlug (카테고리별)
│   ├── 📄 /portfolio/featured (Featured만)
│   └── 🔍 /portfolio?search=keyword (검색)
├── 📞 /contact (문의하기)
└── ℹ️ /about (소개)
```

### 8.2 URL 예시 모음

| 페이지 | URL | 설명 |
|--------|-----|------|
| 포트폴리오 메인 | `/portfolio` | 전체 83개 프로젝트 |
| 프로젝트 상세 | `/portfolio/ketri-homepage` | 한국환경안전연구소 |
| 카테고리 필터 | `/portfolio/category/company` | 기업·기관 홈페이지 |
| Featured | `/portfolio/featured` | Featured 12개 |
| 검색 | `/portfolio?search=AI` | AI 관련 프로젝트 |
| 태그 필터 | `/portfolio?tag=React` | React 사용 프로젝트 |
| 정렬 | `/portfolio?sort=latest` | 최신순 정렬 |

---

## ✅ URL 설계 체크리스트

### 신규 프로젝트 URL 생성 시
- [ ] Slug가 영문 소문자 + 하이픈만 사용했는가?
- [ ] URL이 전체 프로젝트에서 고유한가?
- [ ] URL에 의미 있는 키워드가 포함되어 있는가?
- [ ] URL 길이가 적절한가? (50자 이하)
- [ ] SEO에 유리한 구조인가?

### URL 변경 시
- [ ] 기존 URL에서 301 리다이렉트 설정했는가?
- [ ] Sitemap을 업데이트했는가?
- [ ] Meta 태그의 canonical URL을 수정했는가?
- [ ] 내부 링크를 모두 업데이트했는가?
- [ ] 변경 이력을 문서화했는가?

### SEO 최적화 확인
- [ ] Canonical URL 설정 완료
- [ ] Meta 태그 설정 완료
- [ ] Sitemap 생성/업데이트 완료
- [ ] Robots.txt 설정 완료
- [ ] 구조화된 데이터(Schema.org) 추가 검토

---

**문서 관리:**
- 작성자: 바이브 코딩 개발팀
- 승인자: 프로젝트 매니저
- 다음 리뷰 예정일: 2026-04-22
