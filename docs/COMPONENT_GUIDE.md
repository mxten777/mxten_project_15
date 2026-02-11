# 🧩 컴포넌트 가이드

이 문서는 `mxten_project_15`의 주요 React 컴포넌트 사용법을 안내합니다.

## Design System 컴포넌트 (`src/components/ds`)

디자인 시스템의 기초를 이루는 원자 단위 컴포넌트입니다.

### Button

```tsx
import { Button } from '@/components/ds';

<Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
  Primary Button
</Button>

// Variants: primary, secondary, ghost, outline
// Sizes: sm, md, lg
```

### Card

```tsx
import { Card } from '@/components/ds';

<Card variant="elevated" interactive>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Variants: elevated, flat, outlined
// Props: interactive (boolean) - 호버 시 그림자 및 스케일 효과 적용
```

### Badge

```tsx
import { Badge } from '@/components/ds';

<Badge variant="success">Success</Badge>

// Variants: primary, success, warning, error, info, neutral
```

### Tag

```tsx
import { Tag } from '@/components/ds';

<Tag active={isActive} onClick={() => setActive(!isActive)}>
  React
</Tag>

// Props: active (boolean) - 활성화 상태 스타일링
```

### Typography

```tsx
import { Heading, Text } from '@/components/ds';

<Heading level={1}>Page Title (H1)</Heading>
<Heading level={2}>Section Title (H2)</Heading>
<Text variant="body">This is a body text.</Text>
<Text variant="caption">This is a caption.</Text>

// Heading levels: 1-6
// Text variants: body, caption, small, lead
```

## 비즈니스 컴포넌트 (`src/components`)

Design System 컴포넌트를 조합하여 만든 기능 단위 컴포넌트입니다.

### ProjectCard

개별 프로젝트를 나타내는 카드 컴포넌트입니다.

```tsx
import { ProjectCard } from '@/components';
import { projectData } from '@/data/portfolio'; // 예시 데이터

<ProjectCard
  project={projectData}
  variant="default"
/>

// Variants: default, compact, featured
```

### CategoryTabs

포트폴리오 페이지에서 카테고리를 필터링하는 탭 컴포넌트입니다.

```tsx
import { CategoryTabs } from '@/components';
import { CATEGORIES } from '@/data/portfolio';

const [activeCategory, setActiveCategory] = useState('전체');

<CategoryTabs
  categories={CATEGORIES}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>
```

### SearchBar

프로젝트를 실시간으로 검색하는 입력 필드입니다.

```tsx
import { SearchBar } from '@/components';

const [searchTerm, setSearchTerm] = useState('');

<SearchBar
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="프로젝트 검색..."
/>
```

### TagFilter

태그를 기반으로 프로젝트를 필터링하는 컴포넌트입니다.

```tsx
import { TagFilter } from '@/components';

const allTags = ['React', 'TypeScript', 'B2B']; // 예시 태그
const [selectedTags, setSelectedTags] = useState<string[]>([]);

const handleTagToggle = (tag: string) => {
  setSelectedTags(prev => 
    prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
  );
};

<TagFilter
  tags={allTags}
  selectedTags={selectedTags}
  onTagToggle={handleTagToggle}
/>
```
