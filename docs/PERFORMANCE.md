# 🚀 성능 최적화 가이드

이 문서는 `mxten_project_15` 웹 애플리케이션의 성능을 최상으로 유지하기 위한 전략과 팁을 제공합니다.

## 1. 이미지 최적화

이미지는 웹 성능에 가장 큰 영향을 미치는 요소 중 하나입니다.

- **포맷**: 모든 이미지는 **WebP** 포맷을 우선적으로 사용합니다.
- **크기 조정**: 이미지를 업로드하기 전에 용도에 맞게 크기를 조정합니다.
  - 썸네일: `400x300px`
  - 스크린샷/히어로 이미지: `1200x900px`
- **지연 로딩**: `LazyImage` 컴포넌트를 사용하여 화면에 보이지 않는 이미지는 로딩을 지연시킵니다.
- **플레이스홀더**: 이미지가 로딩되는 동안 `Skeleton` 컴포넌트나 저화질 이미지 플레이스홀더(LQIP)를 표시하여 UX를 개선합니다.

## 2. 코드 스플리팅 (Code Splitting)

Vite는 기본적으로 효율적인 코드 스플리팅을 지원합니다. 라우트 기반 스플리팅을 적극적으로 활용합니다.

```tsx
// src/App.tsx

import { lazy } from 'react';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const MVPDetailPage = lazy(() => import('./pages/MVPDetailPage'));

// ... React Router 설정 내에서 이 컴포넌트들을 사용
```

## 3. 번들 분석

`vite-plugin-visualizer`를 사용하여 프로덕션 번들의 구성을 시각적으로 분석하고 최적화가 필요한 부분을 찾습니다.

```bash
# package.json에 스크립트 추가
"analyze": "vite build --mode analyze"

# 분석 실행
npm run analyze
```
`stats.html` 파일이 생성되어 어떤 모듈이 번들 크기를 많이 차지하는지 확인할 수 있습니다.

## 4. React 렌더링 최적화

- **`React.memo`**: Props가 변경되지 않은 컴포넌트의 불필요한 리렌더링을 방지합니다. `ProjectCard`와 같이 목록에 많이 표시되는 컴포넌트에 특히 유용합니다.
- **`useCallback`**: 함수를 메모이제이션하여 자식 컴포넌트에 항상 동일한 함수 참조를 전달합니다.
- **`useMemo`**: 복잡한 계산 결과를 메모이제이션하여 렌더링 시마다 반복적인 계산을 피합니다.

## 5. 애니메이션 성능

Framer Motion은 GPU 가속을 활용하여 성능이 우수하지만, 남용은 피해야 합니다.

- **`will-change`**: 애니메이션이 적용될 요소에 `will-change: transform, opacity;` 속성을 부여하여 브라우저가 미리 최적화하도록 힌트를 줍니다.
- **레이아웃 쉬프트 방지**: 애니메이션으로 인해 다른 요소들의 위치가 변경되지 않도록 주의합니다. `position: absolute` 등을 활용할 수 있습니다.

## 6. 폰트 최적화

- **`font-display: swap`**: 폰트가 로딩되는 동안 대체 폰트를 먼저 보여주어 텍스트가 보이지 않는 현상(FOIT)을 방지합니다.
- **서브셋 폰트**: 필요한 문자만 포함된 서브셋 폰트를 사용하여 파일 크기를 줄입니다. (현재 프로젝트는 영문/숫자/기본 한글 위주)
