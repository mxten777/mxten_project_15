# 썸네일 및 이미지 관리 규칙

> **버전**: 1.0  
> **최종 수정일**: 2026-01-22  
> **적용 범위**: 포트폴리오 전체 이미지 자산

---

## 📋 목차
1. [이미지 규격 표준](#1-이미지-규격-표준)
2. [파일명 규칙](#2-파일명-규칙)
3. [저장 위치 및 구조](#3-저장-위치-및-구조)
4. [Fallback 처리 전략](#4-fallback-처리-전략)
5. [이미지 최적화](#5-이미지-최적화)
6. [썸네일 연결 오류 방지](#6-썸네일-연결-오류-방지)
7. [디자이너 가이드](#7-디자이너-가이드)

---

## 1. 이미지 규격 표준

### 1.1 썸네일 (Thumbnail)

**용도:** 프로젝트 카드, 목록 뷰

| 항목 | 규격 |
|------|------|
| **권장 크기** | 800 × 600px (4:3 비율) |
| **최소 크기** | 400 × 300px |
| **최대 크기** | 1200 × 900px |
| **파일 형식** | WebP (권장), PNG (호환) |
| **파일 크기** | 100KB 이하 (WebP), 200KB 이하 (PNG) |
| **색상 모드** | RGB |
| **DPI** | 72dpi (웹용) |

**비율 가이드:**
```
✅ 4:3 (800×600) - 권장
✅ 16:9 (800×450) - 허용
❌ 1:1 (800×800) - 비권장 (카드 레이아웃에 맞지 않음)
```

### 1.2 스크린샷 (Screenshots)

**용도:** 프로젝트 상세 페이지, 갤러리

| 항목 | 규격 |
|------|------|
| **권장 크기** | 1920 × 1080px (16:9) |
| **최소 크기** | 1200 × 675px |
| **파일 형식** | WebP (권장), PNG |
| **파일 크기** | 300KB 이하 (WebP), 500KB 이하 (PNG) |
| **색상 모드** | RGB |
| **DPI** | 72dpi |

### 1.3 Featured 전용 이미지

**용도:** 메인 페이지 하이라이트, 히어로 섹션

| 항목 | 규격 |
|------|------|
| **권장 크기** | 1200 × 900px (4:3) |
| **파일 형식** | WebP |
| **파일 크기** | 150KB 이하 |
| **품질** | 최상 (85-90% quality) |

---

## 2. 파일명 규칙

### 2.1 기본 원칙

```
{project-slug}.{extension}

예시:
ketri-homepage.webp
vibe-office-hub.webp
library-reservation.webp
```

### 2.2 파일명 규칙 상세

| 구성 요소 | 규칙 | 예시 |
|-----------|------|------|
| **프로젝트 식별자** | slug 사용 (영문 소문자 + 하이픈) | `ketri-homepage` |
| **용도 접미사** | 필요 시 추가 | `-screenshot-01` |
| **확장자** | .webp (권장), .png | `.webp` |

### 2.3 파일명 패턴

#### 썸네일
```
{slug}.webp
{slug}.png (레거시 호환)

예시:
ketri-homepage.webp
ketri-homepage.png
```

#### 스크린샷 (여러 장)
```
{slug}-screenshot-{number}.webp

예시:
ketri-homepage-screenshot-01.webp
ketri-homepage-screenshot-02.webp
ketri-homepage-screenshot-03.webp
```

#### Featured 전용
```
{slug}-featured.webp

예시:
ketri-homepage-featured.webp
```

#### 모바일/태블릿 버전
```
{slug}-mobile.webp
{slug}-tablet.webp

예시:
ketri-homepage-mobile.webp
ketri-homepage-tablet.webp
```

### 2.4 금지 사항

```
❌ 날짜 기반 파일명
20251014_mvp_04.png  → 의미 파악 불가

❌ 숫자 ID 기반
ketri-01.png  → slug로 통일

❌ 한글 파일명
한국환경안전연구소.png  → 인코딩 문제 발생 가능

❌ 공백 포함
ketri homepage.png  → URL 인코딩 문제

❌ 대문자 사용
Ketri-Homepage.PNG  → 대소문자 혼동

❌ 특수문자 사용
ketri_homepage!.png  → 하이픈만 사용
```

---

## 3. 저장 위치 및 구조

### 3.1 디렉토리 구조

```
public/
└── images/
    ├── thumbnails/          # 썸네일 (400×300 ~ 800×600)
    │   ├── ketri-homepage.webp
    │   ├── vibe-office-hub.webp
    │   └── ...
    │
    ├── screenshots/         # 스크린샷 (1920×1080)
    │   ├── ketri-homepage-01.webp
    │   ├── ketri-homepage-02.webp
    │   └── ...
    │
    ├── featured/            # Featured 전용 고품질 이미지
    │   ├── ketri-homepage-featured.webp
    │   └── ...
    │
    ├── placeholders/        # Fallback 이미지
    │   ├── default.webp
    │   ├── company.webp
    │   ├── education.webp
    │   ├── saas.webp
    │   └── public.webp
    │
    └── legacy/              # 레거시 파일 (마이그레이션 예정)
        ├── 20251014_mvp_04.png
        └── ...
```

### 3.2 경로 규칙

| 이미지 유형 | 경로 패턴 | 예시 |
|-------------|-----------|------|
| **썸네일** | `/images/thumbnails/{slug}.webp` | `/images/thumbnails/ketri-homepage.webp` |
| **스크린샷** | `/images/screenshots/{slug}-{number}.webp` | `/images/screenshots/ketri-homepage-01.webp` |
| **Featured** | `/images/featured/{slug}-featured.webp` | `/images/featured/ketri-homepage-featured.webp` |
| **Placeholder** | `/images/placeholders/{category}.webp` | `/images/placeholders/company.webp` |

### 3.3 레거시 경로 호환

**현재 사용 중인 레거시 경로:**
```
/images/20251014_mvp_04_jp.png
/images/20251014_dbinfo_final.png
/images/20251014_jdx_01.png
```

**마이그레이션 계획:**
```
Phase 1: 신규 파일 생성 (slug 기반)
  → /images/thumbnails/baical-systems.webp

Phase 2: 데이터 업데이트
  → portfolio.ts에서 경로 변경

Phase 3: 레거시 파일 이동
  → /images/legacy/로 이동

Phase 4: 레거시 파일 삭제
  → 3개월 후 완전 제거
```

---

## 4. Fallback 처리 전략

### 4.1 Fallback 계층 구조

```
Level 1: 프로젝트 고유 썸네일
  ↓ (없을 경우)
Level 2: 카테고리별 기본 이미지
  ↓ (없을 경우)
Level 3: 전체 기본 이미지
  ↓ (없을 경우)
Level 4: SVG Placeholder (인라인)
```

### 4.2 카테고리별 Fallback 이미지

| 카테고리 | Fallback 이미지 | 설명 |
|----------|----------------|------|
| 기업·기관 홈페이지 | `/images/placeholders/company.webp` | 회사 아이콘, 파란색 그라데이션 |
| 교육·AI 플랫폼 | `/images/placeholders/education.webp` | AI/교육 아이콘, 초록색 그라데이션 |
| SaaS·업무자동화 | `/images/placeholders/saas.webp` | 업무 아이콘, 보라색 그라데이션 |
| 공공·예약·문화 | `/images/placeholders/public.webp` | 공공 아이콘, 주황색 그라데이션 |
| 기본 | `/images/placeholders/default.webp` | 바이브 코딩 로고, 회색 그라데이션 |

### 4.3 Fallback 처리 코드

```typescript
// ProjectCard.tsx
const getThumbnailWithFallback = (project: PortfolioProject) => {
  // Level 1: 프로젝트 고유 썸네일
  const primary = `/images/thumbnails/${project.slug}.webp`;
  
  // Level 2: 카테고리별 Fallback
  const categoryMap = {
    '기업·기관 홈페이지': '/images/placeholders/company.webp',
    '교육·AI 플랫폼': '/images/placeholders/education.webp',
    'SaaS·업무자동화': '/images/placeholders/saas.webp',
    '공공·예약·문화': '/images/placeholders/public.webp'
  };
  const secondary = categoryMap[project.category];
  
  // Level 3: 전체 기본 이미지
  const tertiary = '/images/placeholders/default.webp';
  
  return {
    primary,
    secondary,
    tertiary
  };
};

// 이미지 로딩 with Fallback
<img 
  src={primary}
  onError={(e) => {
    const target = e.currentTarget;
    if (target.src === primary) {
      target.src = secondary;
    } else if (target.src === secondary) {
      target.src = tertiary;
    }
  }}
/>
```

### 4.4 Lazy Loading + Fallback

```tsx
const LazyThumbnail: React.FC<{ project: PortfolioProject }> = ({ project }) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const { primary, secondary, tertiary } = getThumbnailWithFallback(project);
  
  useEffect(() => {
    const img = new Image();
    img.src = primary;
    
    img.onload = () => {
      setImgSrc(primary);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      // Try secondary fallback
      const fallbackImg = new Image();
      fallbackImg.src = secondary;
      
      fallbackImg.onload = () => {
        setImgSrc(secondary);
        setIsLoading(false);
      };
      
      fallbackImg.onerror = () => {
        setImgSrc(tertiary);
        setIsLoading(false);
        setHasError(true);
      };
    };
  }, [primary, secondary, tertiary]);
  
  if (isLoading) {
    return <Skeleton />;
  }
  
  return (
    <img 
      src={imgSrc} 
      alt={project.title}
      className={hasError ? 'opacity-50' : ''}
    />
  );
};
```

---

## 5. 이미지 최적화

### 5.1 WebP 변환

**권장 도구:**
- **CLI**: `cwebp` (Google WebP Tools)
- **GUI**: Squoosh (https://squoosh.app/)
- **자동화**: ImageMagick, Sharp (Node.js)

**변환 명령어:**
```bash
# PNG → WebP (고품질)
cwebp -q 85 input.png -o output.webp

# PNG → WebP (압축 우선)
cwebp -q 75 input.png -o output.webp

# 배치 변환
for file in *.png; do
  cwebp -q 85 "$file" -o "${file%.png}.webp"
done
```

### 5.2 품질 설정

| 용도 | Quality | 파일 크기 목표 |
|------|---------|---------------|
| **Featured 이미지** | 90 | 150KB 이하 |
| **썸네일** | 85 | 100KB 이하 |
| **스크린샷** | 80 | 300KB 이하 |
| **Placeholder** | 70 | 50KB 이하 |

### 5.3 반응형 이미지

```html
<!-- srcset 활용 -->
<img
  src="/images/thumbnails/ketri-homepage.webp"
  srcset="
    /images/thumbnails/ketri-homepage-400.webp 400w,
    /images/thumbnails/ketri-homepage-800.webp 800w,
    /images/thumbnails/ketri-homepage-1200.webp 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="한국환경안전연구소"
/>

<!-- picture 활용 -->
<picture>
  <source 
    srcset="/images/thumbnails/ketri-homepage.webp" 
    type="image/webp" 
  />
  <source 
    srcset="/images/thumbnails/ketri-homepage.png" 
    type="image/png" 
  />
  <img 
    src="/images/thumbnails/ketri-homepage.png" 
    alt="한국환경안전연구소" 
  />
</picture>
```

### 5.4 이미지 압축 자동화

```javascript
// vite.config.ts
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      webp: {
        quality: 85
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      }
    })
  ]
};
```

---

## 6. 썸네일 연결 오류 방지

### 6.1 원인 분석

**기존 문제점:**
1. ❌ 파일명이 날짜 기반 (`20251014_mvp_09.png`)
2. ❌ ID와 파일명 불일치 (`gen-30` → `mvp_09.png`)
3. ❌ 프로젝트 간 썸네일 중복 사용
4. ❌ 경로 오타 (`/images/` vs `/thumbnails/`)

### 6.2 해결 방안

#### A. Slug 기반 파일명 통일
```typescript
// ✅ 권장 방식
{
  id: 'ketri-01',
  slug: 'ketri-homepage',
  thumbnail: '/images/thumbnails/ketri-homepage.webp'  // slug 일치
}

// ❌ 기존 방식
{
  id: 'ketri-01',
  slug: 'ketri-homepage',
  thumbnail: '/images/20251014_mvp_18.png'  // 관련성 없음
}
```

#### B. 자동 경로 생성 함수
```typescript
// 썸네일 경로 자동 생성
const getThumbnailPath = (project: PortfolioProject): string => {
  return `/images/thumbnails/${project.slug}.webp`;
};

// 데이터 검증
export const validateThumbnails = async () => {
  const errors: string[] = [];
  
  for (const project of portfolioProjects) {
    const expectedPath = getThumbnailPath(project);
    const fileExists = await checkFileExists(expectedPath);
    
    if (!fileExists) {
      errors.push(`Missing thumbnail: ${expectedPath} for ${project.title}`);
    }
    
    if (project.thumbnail !== expectedPath) {
      errors.push(`Path mismatch: ${project.thumbnail} should be ${expectedPath}`);
    }
  }
  
  return errors;
};
```

#### C. TypeScript 타입 강제
```typescript
// Thumbnail 경로 타입 정의
type ThumbnailPath = `/images/thumbnails/${string}.webp`;

export interface PortfolioProject {
  // ...
  thumbnail: ThumbnailPath;  // 타입 강제
}
```

### 6.3 검증 스크립트

```bash
#!/bin/bash
# check-thumbnails.sh

echo "🔍 썸네일 파일 검증 시작..."

# portfolio.ts에서 thumbnail 경로 추출
THUMBNAILS=$(grep -oP 'thumbnail: ["'\'']([^"'\'']+)["'\'']' src/data/portfolio.ts | cut -d"'" -f2 | cut -d'"' -f2)

MISSING=0
for thumb in $THUMBNAILS; do
  FILE="public${thumb}"
  if [ ! -f "$FILE" ]; then
    echo "❌ Missing: $FILE"
    MISSING=$((MISSING+1))
  fi
done

if [ $MISSING -eq 0 ]; then
  echo "✅ 모든 썸네일 파일이 존재합니다."
else
  echo "⚠️ $MISSING 개의 썸네일 파일이 누락되었습니다."
  exit 1
fi
```

### 6.4 CI/CD 자동 검증

```yaml
# .github/workflows/check-assets.yml
name: Check Assets

on: [push, pull_request]

jobs:
  check-thumbnails:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Check Thumbnail Files
        run: |
          chmod +x ./scripts/check-thumbnails.sh
          ./scripts/check-thumbnails.sh
```

---

## 7. 디자이너 가이드

### 7.1 썸네일 제작 가이드

#### 준비 단계
1. 프로젝트 Slug 확인 (개발팀에 요청)
2. 카테고리 확인 (4대 카테고리 중 하나)
3. 실제 서비스 화면 캡처 또는 디자인 시안 준비

#### 제작 단계

**Step 1: 화면 캡처**
```
- 브라우저 해상도: 1920 × 1080
- 데모 URL 접속
- 메인 화면 전체 캡처 (F12 → Device Toolbar)
```

**Step 2: 크롭 및 리사이즈**
```
- Photoshop / Figma에서 열기
- 4:3 비율로 크롭 (800 × 600)
- 중요한 요소가 잘리지 않도록 주의
```

**Step 3: 최적화**
```
- 텍스트 가독성 확인
- 색상 대비 조정
- 불필요한 요소 제거
```

**Step 4: 내보내기**
```
- File → Export → WebP
- Quality: 85
- 파일명: {slug}.webp
- 저장 위치: public/images/thumbnails/
```

### 7.2 스크린샷 제작 가이드

**촬영 대상:**
- 메인 화면 (필수)
- 주요 기능 화면 2-3개
- 모바일 뷰 (선택)

**촬영 규격:**
- 데스크탑: 1920 × 1080 (16:9)
- 모바일: 375 × 812 (iPhone X 기준)

**파일명 규칙:**
```
{slug}-screenshot-01.webp  (메인)
{slug}-screenshot-02.webp  (기능1)
{slug}-screenshot-03.webp  (기능2)
{slug}-screenshot-mobile.webp  (모바일)
```

### 7.3 Placeholder 이미지 가이드

**디자인 요소:**
- 카테고리 대표 아이콘
- 브랜드 컬러 그라데이션
- "바이브 코딩" 워터마크
- 프로젝트명 텍스트 영역

**SVG 템플릿:**
```svg
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad)"/>
  <text x="400" y="300" text-anchor="middle" fill="white" 
        font-size="36" font-weight="bold">
    프로젝트명
  </text>
  <text x="400" y="350" text-anchor="middle" fill="white" 
        font-size="18" opacity="0.9">
    카테고리
  </text>
</svg>
```

### 7.4 품질 체크리스트

#### 썸네일 제작 완료 시
- [ ] 파일명이 slug와 일치하는가?
- [ ] 크기가 800 × 600 (4:3)인가?
- [ ] WebP 형식인가?
- [ ] 파일 크기가 100KB 이하인가?
- [ ] 텍스트가 선명하게 보이는가?
- [ ] 브랜드 컬러가 잘 표현되었는가?

#### 스크린샷 제작 완료 시
- [ ] 최소 3장 이상 제작했는가?
- [ ] 크기가 1920 × 1080 (16:9)인가?
- [ ] 주요 기능이 잘 보이는가?
- [ ] 파일 크기가 300KB 이하인가?

---

## 8. 이미지 마이그레이션 계획

### 8.1 Phase 1: 인벤토리 작성 (1주)

```bash
# 현재 이미지 파일 목록 생성
find public/images -type f > image-inventory.txt

# 누락된 썸네일 목록 생성
node scripts/find-missing-thumbnails.js > missing-thumbnails.txt
```

### 8.2 Phase 2: 신규 파일 생성 (2주)

| 작업 | 담당 | 기간 |
|------|------|------|
| Featured 12개 고품질 썸네일 | 디자이너 | 3일 |
| 일반 프로젝트 71개 썸네일 | 디자이너 + 개발 | 7일 |
| Placeholder 5종 제작 | 디자이너 | 2일 |
| WebP 변환 자동화 | 개발 | 2일 |

### 8.3 Phase 3: 데이터 업데이트 (1주)

```typescript
// portfolio.ts 일괄 업데이트
const migrateThumb nails = () => {
  portfolioProjects.forEach(project => {
    const oldPath = project.thumbnail;
    const newPath = `/images/thumbnails/${project.slug}.webp`;
    
    console.log(`Migrating: ${oldPath} → ${newPath}`);
    
    // 실제 파일 존재 여부 확인 후 업데이트
    if (fileExists(newPath)) {
      project.thumbnail = newPath;
    }
  });
};
```

### 8.4 Phase 4: 검증 및 배포 (1주)

- [ ] 로컬 환경 테스트
- [ ] 스테이징 환경 배포
- [ ] Featured 프로젝트 12개 육안 확인
- [ ] 일반 프로젝트 샘플 확인
- [ ] 성능 테스트 (이미지 로딩 속도)
- [ ] 프로덕션 배포

---

## ✅ 체크리스트

### 개발자용
- [ ] 프로젝트 slug 기반 경로 사용
- [ ] Fallback 처리 구현
- [ ] Lazy Loading 적용
- [ ] 이미지 최적화 플러그인 설정
- [ ] 썸네일 검증 스크립트 실행

### 디자이너용
- [ ] Slug 확인 후 파일명 작성
- [ ] 4:3 비율 유지 (800×600)
- [ ] WebP 형식으로 내보내기
- [ ] 파일 크기 100KB 이하 확인
- [ ] 지정된 폴더에 저장

### PM용
- [ ] Featured 프로젝트 이미지 품질 검수
- [ ] 전체 프로젝트 썸네일 완성도 확인
- [ ] 마이그레이션 일정 관리
- [ ] 최종 배포 승인

---

**문서 관리:**
- 작성자: 바이브 코딩 개발팀
- 승인자: 디자인팀 + 프로젝트 매니저
- 다음 리뷰 예정일: 2026-04-22
