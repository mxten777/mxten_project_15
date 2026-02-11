# 🎨 디자인 토큰 시스템

이 문서는 `mxten_project_15`의 일관된 UI를 위한 디자인 토큰 시스템을 설명합니다. 모든 디자인 결정은 이 토큰들을 기반으로 이루어집니다.

## 색상 시스템 (`src/design-tokens/colors.ts`)

프로젝트의 색상 팔레트는 `primary`, `secondary`, `semantic`, `neutral`로 구성됩니다.

```typescript
import { colors } from '@/design-tokens';

// Primary (Blue)
colors.primary[50]  // 가장 밝음
colors.primary[500] // 기본
colors.primary[900] // 가장 어두움

// Secondary (Purple)
colors.secondary[500]

// Semantic Colors
colors.success[500]  // 초록 (성공)
colors.warning[500]  // 노랑 (경고)
colors.error[500]    // 빨강 (오류)
colors.info[500]     // 파랑 (정보)

// Neutral (Gray)
colors.neutral[100]  // 배경
colors.neutral[600]  // 본문 텍스트
colors.neutral[900]  // 제목 텍스트
```

## 타이포그래피 (`src/design-tokens/typography.ts`)

폰트, 크기, 굵기 등 텍스트 스타일을 정의합니다.

```typescript
import { typography } from '@/design-tokens';

// Font Family
typography.fontFamily.sans     // 'Inter', sans-serif
typography.fontFamily.display  // 'Poppins', sans-serif

// Font Size (rem)
typography.fontSize.xs   // 0.75rem (12px)
typography.fontSize.base // 1rem (16px)
typography.fontSize['4xl'] // 2.25rem (36px)

// Font Weight
typography.fontWeight.normal   // 400
typography.fontWeight.medium   // 500
typography.fontWeight.semibold // 600
typography.fontWeight.bold     // 700
```

## 간격 (8px 그리드 시스템) (`src/design-tokens/spacing.ts`)

모든 간격과 여백은 8px 그리드 시스템을 따릅니다. `spacing` 토큰은 `rem` 단위를 사용합니다.

```typescript
import { spacing } from '@/design-tokens';

spacing[1]  // 0.25rem (4px)
spacing[2]  // 0.5rem (8px)
spacing[4]  // 1rem (16px)
spacing[8]  // 2rem (32px)
spacing[16] // 4rem (64px)
```

## 그림자 (`src/design-tokens/shadows.ts`)

UI 요소의 깊이감을 표현하기 위한 그림자 스타일입니다.

```typescript
import { shadows } from '@/design-tokens';

shadows.sm  // 작은 그림자
shadows.md  // 중간 그림자
shadows.lg  // 큰 그림자
shadows.xl  // 매우 큰 그림자
```

## 모서리 반경 (`src/design-tokens/radius.ts`)

컴포넌트의 모서리 둥글기를 제어합니다.

```typescript
import { radius } from '@/design-tokens';

radius.sm   // 0.25rem (4px)
radius.md   // 0.5rem (8px)
radius.lg   // 0.75rem (12px)
radius.xl   // 1rem (16px)
radius.full // 9999px (완전 둥근 형태)
```
