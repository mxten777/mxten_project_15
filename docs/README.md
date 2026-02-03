# 바이브 코딩 MVP 프로젝트 관리 표준 문서

> **문서 버전**: 1.0  
> **최종 수정일**: 2026-01-22  
> **적용 대상**: 83개 전체 MVP 프로젝트

---

## 📚 문서 개요

이 문서는 바이브 코딩의 83개 MVP 프로젝트를 일관되고 체계적으로 관리하기 위한 **표준 가이드라인**입니다.

### 🎯 목적
- 프로젝트 등록/수정 시 일관된 규칙 적용
- 썸네일 연결 오류 원천 차단
- 향후 확장성 확보 (SEO, 상품화, 제안서 등)
- 팀원 간 커뮤니케이션 효율화

### 👥 대상
- **개발자**: 코드 작성, 데이터 관리
- **디자이너**: 이미지 제작, 브랜딩
- **프로젝트 매니저**: 기획, 검수, 배포 승인

---

## 📂 문서 구조

### 1️⃣ [프로젝트 네이밍 규칙](./PROJECT_NAMING_STANDARD.md)
**내용:**
- ID, Slug, Title 생성 규칙
- Prefix 종류 및 용도 (mvp, gen, jdx, grok 등)
- 파일명 규칙 (썸네일, 스크린샷)
- 중복 방지 전략
- 자동 검증 스크립트

**주요 포인트:**
```
✅ id: 'ketri-01' (prefix-number)
✅ slug: 'ketri-homepage' (영문 소문자 + 하이픈)
✅ title: '한국환경안전연구소 공식 홈페이지'
✅ 파일명: ketri-homepage.webp (slug 일치)
```

**활용 시점:**
- 신규 프로젝트 등록 시
- 프로젝트 정보 수정 시
- 데이터 마이그레이션 시

---

### 2️⃣ [URL 및 Routing 구조](./URL_ROUTING_STANDARD.md)
**내용:**
- URL 설계 원칙 (RESTful, 사용자 친화성)
- 포트폴리오 URL 패턴 (`/portfolio/:slug`)
- 카테고리별 URL 구조
- Featured 프로젝트 처리 방법
- SEO 최적화 전략 (Canonical, Sitemap, Meta 태그)
- 리다이렉트 규칙 (Legacy URL 처리)

**주요 포인트:**
```
✅ /portfolio → 전체 목록
✅ /portfolio/ketri-homepage → 프로젝트 상세
✅ /portfolio/category/company → 카테고리 필터
✅ /portfolio/featured → Featured 전용
```

**활용 시점:**
- URL 구조 설계 시
- Slug 변경 시 (리다이렉트 필요)
- SEO 설정 시

---

### 3️⃣ [MVP 프로젝트 분류 기준표](./PROJECT_CLASSIFICATION_STANDARD.md)
**내용:**
- 4대 카테고리 정의 (기업·기관, 교육·AI, SaaS, 공공·예약)
- 서비스 유형 분류 (웹사이트/웹앱/시스템/플랫폼)
- 운영 상태 분류 (실제서비스/시범운영/MVP검증)
- 공개 수준 분류 (전체공개/제한공개/내부전용)
- **Featured 선정 기준** (필수 조건 + 우대 조건)
- 카테고리별 Featured 배분 (12개 총 배분)

**주요 포인트:**
```
Featured 12개 배분:
✅ 기업·기관 홈페이지: 5개 (42%)
✅ 교육·AI 플랫폼: 2개 (17%)
✅ SaaS·업무자동화: 2개 (17%)
✅ 공공·예약·문화: 3개 (25%)
```

**활용 시점:**
- 프로젝트 카테고리 선택 시
- Featured 프로젝트 선정/변경 시
- 포트폴리오 균형 검토 시

---

### 4️⃣ [썸네일 및 이미지 관리 규칙](./IMAGE_MANAGEMENT_STANDARD.md)
**내용:**
- 이미지 규격 표준 (썸네일 800×600, 스크린샷 1920×1080)
- 파일명 규칙 (`{slug}.webp`)
- 디렉토리 구조 (`/images/thumbnails/`, `/images/screenshots/`)
- **Fallback 처리 전략** (4단계 계층)
- 이미지 최적화 (WebP 변환, 압축)
- **썸네일 연결 오류 방지 시스템**
- 디자이너 가이드 (제작 단계별)

**주요 포인트:**
```
Fallback 계층:
Level 1: 프로젝트 고유 썸네일 (/images/thumbnails/ketri-homepage.webp)
Level 2: 카테고리별 기본 이미지 (/images/placeholders/company.webp)
Level 3: 전체 기본 이미지 (/images/placeholders/default.webp)
Level 4: SVG Placeholder (인라인)
```

**활용 시점:**
- 썸네일 제작 시
- 이미지 파일 업로드 시
- 썸네일 연결 오류 발생 시

---

### 5️⃣ [실무 적용 체크리스트](./CHECKLIST.md)
**내용:**
- **신규 프로젝트 등록 체크리스트** (65개 항목)
- 기존 프로젝트 수정 체크리스트
- Featured 프로젝트 선정 체크리스트
- 이미지 제작 체크리스트 (디자이너용)
- **배포 전 최종 점검** (성능, SEO, 접근성, 브라우저 호환성)
- 단계별 소요 시간 및 담당자

**주요 포인트:**
```
신규 프로젝트 등록 프로세스:
1. 정보 수집 (30분)
2. 식별자 생성 (15분)
3. 데이터 입력 (30분)
4. 이미지 제작 (2시간)
5. 검증 (1시간)
6. 배포 (2시간)
총 소요: 약 6시간
```

**활용 시점:**
- 신규 프로젝트 등록 전 전체 프로세스 확인
- 각 단계별 진행 시 체크리스트 확인
- 배포 전 최종 점검

---

## 🚀 빠른 시작 가이드

### 신규 프로젝트 등록 시

```
Step 1: 프로젝트 정보 수집
  → 프로젝트명, 카테고리, 기술 스택, 데모 URL

Step 2: 네이밍 규칙 문서 참조
  → ID, Slug, Title 생성
  → 중복 검증

Step 3: 이미지 제작
  → 디자이너에게 Slug 전달
  → 썸네일 (800×600, WebP) 제작
  → /public/images/thumbnails/ 저장

Step 4: portfolio.ts 업데이트
  → 프로젝트 객체 추가
  → 모든 필수 필드 입력

Step 5: 검증
  → npm run validate:projects
  → npm run check:thumbnails
  → 로컬 환경 테스트

Step 6: 배포
  → 체크리스트 최종 확인
  → Git commit & push
  → 프로덕션 배포
```

---

## 📊 데이터 구조 Overview

### PortfolioProject Interface
```typescript
interface PortfolioProject {
  // 식별자 (필수)
  id: string;              // 예: 'ketri-01'
  title: string;           // 예: '한국환경안전연구소 공식 홈페이지'
  slug: string;            // 예: 'ketri-homepage'
  
  // 분류 (필수)
  category: '기업·기관 홈페이지' | '교육·AI 플랫폼' | 'SaaS·업무자동화' | '공공·예약·문화';
  
  // 설명 (필수)
  oneLiner: string;        // 한 줄 설명
  features: [string, string, string];  // 핵심 기능 3가지
  fitFor: string;          // 적합 고객
  
  // URL 및 이미지 (필수)
  thumbnail: string;       // 썸네일 경로
  screenshots: string[];   // 스크린샷 목록
  demoUrl?: string;        // 데모 URL (선택)
  
  // 기술 (필수)
  stack: string[];         // 기술 스택
  tags: string[];          // 태그
  
  // 메타 (필수)
  featured: boolean;       // Featured 여부
  yearMonth: string;       // 출시 연월 (YYYY-MM)
}
```

---

## 🔍 검증 도구

### 자동 검증 스크립트
```bash
# ID/Slug 중복 검사
npm run validate:projects

# 썸네일 파일 존재 여부 확인
npm run check:thumbnails

# TypeScript 타입 검증
npm run type-check

# 코드 품질 검사
npm run lint
```

### 수동 검증 포인트
- [ ] Featured 프로젝트 12개 모두 표시
- [ ] 썸네일 이미지 정상 로딩
- [ ] URL 라우팅 정상 동작
- [ ] 카테고리 필터 동작
- [ ] 검색 기능 동작

---

## 📈 마이그레이션 계획

### 현재 상태 (As-Is)
- 레거시 파일명 혼재 (`20251014_mvp_04.png`)
- 일부 썸네일 경로 불일치
- ID 기반 파일명 사용

### 목표 상태 (To-Be)
- 모든 썸네일이 Slug 기반 파일명 (`{slug}.webp`)
- 일관된 디렉토리 구조
- 자동 검증 시스템 구축

### 마이그레이션 단계
```
Phase 1: 인벤토리 작성 (1주)
  → 현재 이미지 파일 목록 생성
  → 누락된 썸네일 식별

Phase 2: 신규 파일 생성 (2주)
  → Featured 12개 고품질 썸네일 제작
  → 일반 프로젝트 71개 썸네일 제작
  → Placeholder 5종 제작

Phase 3: 데이터 업데이트 (1주)
  → portfolio.ts 경로 일괄 변경
  → 검증 스크립트 실행

Phase 4: 검증 및 배포 (1주)
  → 로컬/스테이징 테스트
  → 프로덕션 배포
  → 레거시 파일 이동
```

---

## 🛠️ 유지보수

### 정기 점검 (월 1회)
- [ ] Featured 프로젝트 리뷰
- [ ] 썸네일 품질 점검
- [ ] URL 라우팅 점검
- [ ] 성능 모니터링

### 문서 업데이트
- [ ] 신규 Prefix 추가 시
- [ ] 카테고리 변경 시
- [ ] Featured 선정 기준 변경 시
- [ ] 이미지 규격 변경 시

---

## 📞 문의 및 지원

### 문서 관련 문의
- **작성자**: 바이브 코딩 개발팀
- **이메일**: dev@vibecoding.com
- **Slack**: #portfolio-management

### 긴급 지원
- **썸네일 오류**: @디자이너팀
- **URL 오류**: @개발팀
- **데이터 오류**: @프로젝트매니저

---

## 📝 버전 히스토리

| 버전 | 날짜 | 변경 내용 | 작성자 |
|------|------|-----------|--------|
| 1.0 | 2026-01-22 | 초안 작성 (5개 문서 완성) | 개발팀 |
| - | - | - | - |

---

## ✅ 문서 승인

```
□ 개발팀 리뷰 완료: _______________
□ 디자인팀 리뷰 완료: _______________
□ PM 최종 승인: _______________
□ 승인 일시: _______________
```

---

**다음 문서 리뷰 예정일**: 2026-04-22 (3개월 후)

**이 문서는 "바이브 코딩 MVP 포트폴리오 관리"의 최상위 인덱스 문서입니다.**  
**각 세부 문서는 링크를 통해 접근하실 수 있습니다.**
