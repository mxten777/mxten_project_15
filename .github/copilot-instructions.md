# 바이브 코딩 MVP 소개자료 웹앱 개발 지침서

## 프로젝트 개요
이 프로젝트는 바이브 코딭의 20+ 개 MVP 포트폴리오를 소개하는 프레젠테이션 스타일 웹애플리케이션입니다.

## 주요 기술 스택
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS + Framer Motion
- **Backend**: Firebase Firestore + Analytics
- **배포**: Vercel / Firebase Hosting

## 개발 원칙
1. **프레젠테이션 스타일**: 슬라이드/PPT 같은 시각적 매력
2. **부드러운 애니메이션**: Framer Motion으로 전문적인 UX
3. **모바일 우선**: 반응형 디자인으로 모든 디바이스 지원
4. **성능 최적화**: 빠른 로딩과 매끄러운 인터랙션

## 코딩 스타일
- TypeScript 엄격 모드 사용
- ESLint 규칙 준수
- 컴포넌트는 함수형으로 작성
- Props interface 명확히 정의
- 재사용 가능한 컴포넌트 우선

## 디자인 가이드라인
- TailwindCSS 유틸리티 클래스 활용
- 일관된 색상 체계 (Blue/Purple/Gray)
- Inter & Poppins 폰트 사용
- 8px 그리드 시스템 준수

## Firebase 연동
- Firestore로 MVP 데이터 관리
- 실시간 업데이트 지원
- Analytics로 사용자 행동 추적
- 환경변수로 설정 관리

## 성능 최적화 체크리스트
- [ ] 코드 스플리팅 적용
- [ ] 이미지 최적화 (WebP)
- [ ] 번들 크기 분석
- [ ] 애니메이션 성능 검증
- [ ] 접근성 (a11y) 테스트

## 배포 프로세스
1. 코드 품질 검증 (ESLint + TypeScript)
2. 빌드 테스트
3. Firebase 설정 확인
4. 프로덕션 배포
5. 성능 모니터링

이 지침서를 참조하여 일관된 품질의 코드를 작성하고 프로젝트 목표를 달성하세요.