# BAIKAL Systems SEO 최적화 가이드

**작성일**: 2026년 3월 10일  
**도메인**: https://www.baikalsys.kr  
**기술 스택**: React 19 + Vite + Vercel (SPA)  
**회사**: 바이칼시스템즈 (BAIKAL Systems)

---

## 목차

1. [SEO Meta Tag 구조](#1-seo-meta-tag-구조)
2. [OpenGraph 설정](#2-opengraph-설정)
3. [Twitter Card 설정](#3-twitter-card-설정)
4. [robots.txt](#4-robotstxt)
5. [sitemap.xml](#5-sitemapxml)
6. [Structured Data (JSON-LD)](#6-structured-data-json-ld)
7. [React 환경 SEO - react-helmet-async](#7-react-환경-seo---react-helmet-async)
8. [Google Search Console 설정](#8-google-search-console-설정)
9. [네이버 서치어드바이저 설정](#9-네이버-서치어드바이저-설정)
10. [Vercel 배포 설정](#10-vercel-배포-설정)
11. [현재 SEO 현황](#11-현재-seo-현황)

---

## 1. SEO Meta Tag 구조

`index.html`에 적용된 전역 메타 태그 (`react-helmet-async`가 없는 환경 fallback용).

```html
<!-- ── Primary SEO Meta Tags ── -->
<title>AI 플랫폼 개발 | 바이칼시스템즈 (BAIKAL Systems)</title>
<meta name="description" content="바이칼시스템즈는 Private AI, RAG 시스템, AI RPA, AI 입찰 분석 플랫폼, AI 자동화 SaaS를 전문으로 개발하는 AI 솔루션 기업입니다." />
<meta name="keywords" content="AI 플랫폼 개발, Private AI, RAG 시스템, AI RPA, AI 자동화, AI 입찰 분석, 바이칼시스템즈, BAIKAL Systems, AI SaaS" />
<meta name="author" content="바이칼시스템즈 (BAIKAL Systems)" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://www.baikalsys.kr/" />
```

**title 태그 작성 원칙**
| 페이지 | title 패턴 |
|--------|-----------|
| 메인 | `AI 플랫폼 개발 \| 바이칼시스템즈 (BAIKAL Systems)` |
| 서비스 | `{서비스명} \| 바이칼시스템즈` |
| 문의 | `AI 개발 문의 \| 바이칼시스템즈` |
| 길이 | **최대 60자** (검색 결과 truncation 방지) |

**description 태그 원칙**
- 길이: **120~160자** 유지
- AI 서비스 키워드 포함 (Private AI, RAG, RPA...)
- CTA 포함 ("문의하세요", "확인하세요")

---

## 2. OpenGraph 설정

SNS(카카오톡, 슬랙, 라인, Facebook) 링크 공유 시 미리보기 최적화.

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="바이칼시스템즈 (BAIKAL Systems)" />
<meta property="og:title" content="AI 플랫폼 개발 | 바이칼시스템즈" />
<meta property="og:description" content="Private AI · RAG 시스템 · AI RPA · AI 입찰 분석 · AI 자동화 SaaS 전문 개발사." />
<meta property="og:url" content="https://www.baikalsys.kr/" />
<meta property="og:image" content="https://www.baikalsys.kr/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="바이칼시스템즈 AI 플랫폼 개발" />
<meta property="og:locale" content="ko_KR" />
```

**OG 이미지 제작 가이드**
- 크기: **1200 × 630px** (최소 600 × 315px)
- 파일: `/public/og-image.jpg` (WebP 권장, 200KB 이하)
- 내용: 회사 로고 + 슬로건 + AI 키워드 배경
- 도구: Figma / Canva / Sharp(자동화)

---

## 3. Twitter Card 설정

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@baikalsys" />
<meta name="twitter:title" content="AI 플랫폼 개발 | 바이칼시스템즈" />
<meta name="twitter:description" content="Private AI · RAG 시스템 · AI RPA · AI 자동화 SaaS 전문 개발사." />
<meta name="twitter:image" content="https://www.baikalsys.kr/og-image.jpg" />
<meta name="twitter:image:alt" content="바이칼시스템즈 AI 플랫폼 개발" />
```

> `summary_large_image`는 대형 이미지 카드로 노출되어 CTR이 높습니다.

---

## 4. robots.txt

**파일 위치**: `/public/robots.txt` → 배포 후 `https://www.baikalsys.kr/robots.txt`

```
# BAIKAL Systems (바이칼시스템즈) - robots.txt
# https://www.baikalsys.kr

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Crawl-delay: 1

# Naver crawler (Yeti)
User-agent: Yeti
Allow: /
Disallow: /admin/
Disallow: /api/

# Google crawler
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

# Bing crawler
User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://www.baikalsys.kr/sitemap.xml
```

---

## 5. sitemap.xml

**파일 위치**: `/public/sitemap.xml` → 배포 후 `https://www.baikalsys.kr/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://www.baikalsys.kr/</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/about</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/ai-platform</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/rag</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/rpa</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/private-ai</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/ai-saas</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/portfolio</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.baikalsys.kr/contact</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>

</urlset>
```

**페이지 추가 시**: `<url>` 블록을 추가하고 `lastmod`를 현재 날짜로 업데이트 후  
네이버 서치어드바이저 / Google Search Console에서 재제출.

---

## 6. Structured Data (JSON-LD)

### 6-1. Organization Schema (index.html 전역 적용)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "바이칼시스템즈",
  "alternateName": "BAIKAL Systems",
  "description": "Private AI, RAG 시스템, AI RPA, AI 입찰 분석 플랫폼, AI 자동화 SaaS 전문 개발사",
  "url": "https://www.baikalsys.kr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.baikalsys.kr/logo.svg",
    "width": 200,
    "height": 60
  },
  "image": "https://www.baikalsys.kr/og-image.jpg",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KR",
    "addressRegion": "Seoul"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "contact@baikalsys.kr",
    "availableLanguage": "Korean"
  },
  "knowsAbout": [
    "Artificial Intelligence", "Private AI",
    "RAG (Retrieval-Augmented Generation)",
    "AI RPA", "Large Language Models", "AI Automation"
  ]
}
```

### 6-2. Service Schema (각 서비스 페이지에 추가)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "RAG 시스템 구축",
  "description": "검색증강생성(RAG) 시스템 개발 서비스",
  "provider": {
    "@type": "Organization",
    "name": "바이칼시스템즈",
    "url": "https://www.baikalsys.kr"
  },
  "url": "https://www.baikalsys.kr/rag",
  "serviceType": "AI Software Development",
  "areaServed": { "@type": "Country", "name": "South Korea" }
}
```

> 각 서비스 페이지(ai-platform, rag, rpa, private-ai, ai-saas)에 해당 Service Schema 적용 시  
> Google 검색 결과에 **리치 스니펫(Rich Snippet)** 으로 표시될 확률이 높아집니다.

---

## 7. React 환경 SEO - react-helmet-async

### 7-1. 설치 (완료)

```bash
npm install react-helmet-async
```

### 7-2. main.tsx 설정 (완료)

```tsx
import { HelmetProvider } from 'react-helmet-async'

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)
```

### 7-3. 페이지별 SEO 적용

`src/components/SEOHead.tsx`를 각 페이지에서 사용합니다.

```tsx
// 예: RAG 서비스 페이지
import SEOHead, { seoConfigs } from '@/components/SEOHead';

export default function RAGPage() {
  return (
    <>
      <SEOHead {...seoConfigs.rag} />
      <main>
        <h1>RAG 시스템 구축</h1>
        {/* 페이지 콘텐츠 */}
      </main>
    </>
  );
}
```

```tsx
// 예: 커스텀 SEO (seoConfigs에 없는 페이지)
import SEOHead from '@/components/SEOHead';

export default function BlogPostPage({ post }) {
  return (
    <>
      <SEOHead
        title={post.title}
        description={post.summary}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.thumbnail}
        ogType="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.publishedAt,
        }}
      />
      <main>{/* ... */}</main>
    </>
  );
}
```

### 7-4. SEOHead Props 레퍼런스

| Prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `title` | `string` | ✅ | 페이지 제목 (60자 이하 권장) |
| `description` | `string` | ✅ | 메타 설명 (120~160자 권장) |
| `keywords` | `string` | - | 키워드 (쉼표 구분) |
| `canonicalPath` | `string` | - | canonical URL 경로 (기본값: `/`) |
| `ogImage` | `string` | - | OG 이미지 URL (기본값: `/og-image.jpg`) |
| `ogType` | `'website' \| 'article'` | - | OG 타입 (기본값: `website`) |
| `noIndex` | `boolean` | - | 검색 봇 색인 제외 (기본값: `false`) |
| `structuredData` | `object \| object[]` | - | JSON-LD 구조화 데이터 |

---

## 8. Google Search Console 설정

### 8-1. 소유권 인증

`index.html`에 다음 태그 추가 (발급 후 `content` 값 교체):

```html
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
```

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가 → `https://www.baikalsys.kr`
3. **HTML 태그** 방식 선택 → 코드 발급
4. `index.html` `<head>` 에 붙여넣기 → 배포
5. Search Console에서 **확인** 클릭

### 8-2. sitemap 제출

소유권 인증 후:
1. 좌측 메뉴 **Sitemaps** 클릭
2. `sitemap.xml` 입력 → **제출**
3. 상태가 **성공** 으로 표시되면 완료

### 8-3. URL 수동 색인 요청

새 페이지 배포 후 빠른 색인을 위해:
1. 검색창에 URL 입력 (예: `https://www.baikalsys.kr/rag`)
2. **색인 생성 요청** 클릭
3. 통상 24~72시간 내 색인 완료

### 8-4. 핵심 웹 지표 (Core Web Vitals) 관리

SEO 랭킹에 직접 영향:
- **LCP** (최대 콘텐츠풀 페인트): < 2.5초
- **INP** (다음 페인트와의 상호작용): < 200ms  
- **CLS** (누적 레이아웃 이동): < 0.1

---

## 9. 네이버 서치어드바이저 설정

### 9-1. 소유권 인증 (완료)

```html
<!-- index.html <head> 에 이미 적용됨 -->
<meta name="naver-site-verification" content="79449f06a8a699d377a50409f0c13a23e1b403fa" />
```

### 9-2. sitemap 제출 절차

1. [네이버 서치어드바이저](https://searchadvisor.naver.com) 접속
2. 웹마스터 도구 → `www.baikalsys.kr` 선택
3. **요청 → 사이트맵 제출** → `https://www.baikalsys.kr/sitemap.xml` 입력 → 확인
4. **요청 → 웹 페이지 수집** 에서 주요 URL 직접 수집 요청 가능

### 9-3. 네이버 SEO 최적화 포인트

| 항목 | 권장 |
|------|------|
| Yeti 크롤러 허용 | robots.txt에 명시 ✅ |
| 한국어 content | `lang="ko"`, `og:locale="ko_KR"` ✅ |
| 페이지 로딩 속도 | 3초 이내 (네이버 기준 엄격) |
| 모바일 친화성 | viewport meta 태그 ✅ |
| 콘텐츠 품질 | 독창적 AI 서비스 설명 |
| 내부 링크 구조 | 서비스 페이지 간 상호 연결 권장 |

### 9-4. 노출 확인

네이버 검색창에 `site:baikalsys.kr` 입력 시 색인된 페이지 확인 가능.  
반영 기간: **1~4주** 소요 (신규 도메인 기준).

---

## 10. Vercel 배포 설정

### 10-1. SPA 라우팅 (`vercel.json`)

현재 설정 — SPA 라우팅 정상 동작 확인됨:

```json
{
  "rewrites": [
    {
      "source": "/((?!assets/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

### 10-2. SEO 최적화 헤더 추가 (권장)

`vercel.json`에 캐싱 + 보안 헤더 추가:

```json
{
  "rewrites": [
    {
      "source": "/((?!assets/.*).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Content-Type", "value": "application/xml; charset=utf-8" },
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=3600" }
      ]
    },
    {
      "source": "/robots.txt",
      "headers": [
        { "key": "Content-Type", "value": "text/plain; charset=utf-8" },
        { "key": "Cache-Control", "value": "public, max-age=86400" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

> 보안 헤더는 SEO에도 긍정적으로 작용하며(Google Safe Browsing), XSS/Clickjacking 공격도 방어합니다.

### 10-3. www 리디렉션 (Vercel 도메인 설정)

Vercel Dashboard → Domains에서:
- `baikalsys.kr` → `www.baikalsys.kr` (301 Redirect) 설정
- canonical 과 일치시켜 중복 URL 방지

### 10-4. 환경변수 확인

Vercel → Settings → Environment Variables에서 필요한 변수 확인:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_PROJECT_ID=...
```

---

## 11. 현재 SEO 현황

| 항목 | 내용 | 상태 |
|------|------|------|
| `lang="ko"` | 한국어 명시 | ✅ |
| `<title>` | AI 플랫폼 개발 \| 바이칼시스템즈 (BAIKAL Systems) | ✅ |
| `meta description` | AI 서비스 설명 130자 | ✅ |
| `meta keywords` | AI 플랫폼 개발, Private AI, RAG, RPA... | ✅ |
| `meta robots` | index, follow + max-image-preview | ✅ |
| `canonical` | https://www.baikalsys.kr/ | ✅ |
| Open Graph 태그 | 6개 완전 적용 | ✅ |
| Twitter Card 태그 | summary_large_image | ✅ |
| Organization JSON-LD | 회사 정보 + knowsAbout | ✅ |
| WebSite JSON-LD | SearchAction 포함 | ✅ |
| `robots.txt` | Yeti/Googlebot/Bingbot + 허용/차단 경로 | ✅ |
| `sitemap.xml` | 10개 페이지 (AI 서비스 6개 포함) | ✅ |
| react-helmet-async | 설치 + HelmetProvider 적용 | ✅ |
| SEOHead 컴포넌트 | 8개 페이지 seoConfig 사전 정의 | ✅ |
| 네이버 서치어드바이저 인증 | meta 태그 방식 | ✅ |
| sitemap 제출 (네이버) | 완료 | ✅ |
| Google Search Console | **인증 코드 발급 후 적용 필요** | ⏳ |
| OG 이미지 제작 | `/public/og-image.jpg` 제작 필요 | ⏳ |
| Vercel 보안 헤더 | vercel.json 업데이트 필요 | ⏳ |

---

## 다음 단계 (Action Items)

1. **OG 이미지 제작**: 1200×630px, BAIKAL Systems 브랜드 이미지 → `/public/og-image.jpg`
2. **Google Search Console**: 인증 코드 발급 → `index.html` 적용 → sitemap 제출
3. **vercel.json 헤더 추가**: 위 10-2 설정 적용
4. **서비스 페이지 구현**: `/ai-platform`, `/rag`, `/rpa`, `/private-ai`, `/ai-saas`, `/about` 각 페이지에 `<SEOHead {...seoConfigs.해당키} />` 추가
5. **콘텐츠 최적화**: 각 서비스 페이지에 `<h1>` 태그 정확히 1개, 키워드 포함

---

## Git 커밋 내역

| 날짜 | 커밋 | 내용 |
|------|------|------|
| 2026-03-04 | `e710c51` | feat: 네이버 SEO - robots.txt, sitemap.xml 추가 및 서치어드바이저 인증 코드 적용 |
| 2026-03-04 | `41dc853` | fix: sitemap, robots.txt 도메인 www.baikalsys.kr 로 수정 |
| 2026-03-10 | - | feat: SEO 전면 개편 - BAIKAL Systems AI 회사 메타태그, JSON-LD, react-helmet-async, sitemap AI 서비스 페이지 추가 |


---

## 완료된 작업 목록

### 1. `public/robots.txt` 생성

네이버 크롤러(Yeti) 포함 모든 검색 봇의 크롤링을 허용하고 sitemap 위치를 명시합니다.  
별도 제출 없이 크롤러가 자동으로 읽습니다.

```
User-agent: *
Allow: /

User-agent: Yeti
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://www.baikalsys.kr/sitemap.xml
```

---

### 2. `public/sitemap.xml` 생성

네이버에 사이트 구조를 알려주는 파일입니다.  
현재 등록된 페이지:

| 페이지 | URL | 우선순위 |
|--------|-----|---------|
| 메인 | https://www.baikalsys.kr/ | 1.0 |
| 포트폴리오 | https://www.baikalsys.kr/portfolio | 0.9 |
| 문의 | https://www.baikalsys.kr/contact | 0.7 |
| 캠페인 | https://www.baikalsys.kr/campaign | 0.6 |

---

### 3. `index.html` 네이버 서치어드바이저 인증 코드 추가

소유권 인증을 위한 meta 태그를 `<head>` 에 추가했습니다.

```html
<meta name="naver-site-verification" content="79449f06a8a699d377a50409f0c13a23e1b403fa" />
```

---

### 4. 네이버 서치어드바이저 설정

- **URL**: https://searchadvisor.naver.com
- **등록 도메인**: https://www.baikalsys.kr
- **등록일**: 2026년 3월 4일
- **소유권 인증**: 완료 (meta 태그 방식)
- **sitemap.xml 제출**: 완료

---

## Git 커밋 내역

| 커밋 | 내용 |
|------|------|
| `e710c51` | feat: 네이버 SEO - robots.txt, sitemap.xml 추가 및 서치어드바이저 인증 코드 적용 |
| `41dc853` | fix: sitemap, robots.txt 도메인 www.baikalsys.kr 로 수정 |

---

## 현재 SEO 설정 현황

| 항목 | 내용 | 상태 |
|------|------|------|
| `lang="ko"` | 한국어 명시 | ✅ |
| `title` | 바이브 코딩 \| 80+ MVP 프로젝트 포트폴리오 | ✅ |
| `meta description` | 사이트 설명 | ✅ |
| `meta keywords` | 키워드 태그 | ✅ |
| Open Graph 태그 | SNS 공유 최적화 | ✅ |
| Twitter Card 태그 | 트위터 공유 최적화 | ✅ |
| Schema.org 구조화 데이터 | 검색 결과 리치스니펫 | ✅ |
| `robots.txt` | 크롤러 접근 허용 | ✅ |
| `sitemap.xml` | 페이지 구조 제출 | ✅ |
| 네이버 서치어드바이저 인증 | 소유권 확인 | ✅ |
| sitemap 제출 | 네이버 크롤링 요청 | ✅ |

---

## 향후 참고 사항

- 네이버 검색 반영까지 **1~4주** 소요
- 새 페이지 추가 시 `public/sitemap.xml`에 URL 추가 후 서치어드바이저에서 재제출
- 네이버 서치어드바이저 **리포트** 메뉴에서 크롤링 현황 및 색인 상태 확인 가능
