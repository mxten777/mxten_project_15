# 📦 배포 가이드

이 문서는 `mxten_project_15` 프로젝트를 프로덕션 환경에 배포하는 방법을 안내합니다.

## Vercel (권장)

Vercel은 Git과 연동하여 가장 빠르고 쉽게 프로젝트를 배포할 수 있는 플랫폼입니다.

### 자동 배포

- `main` 브랜치에 코드를 푸시하면 자동으로 프로덕션 빌드 및 배포가 트리거됩니다.
- Pull Request를 생성하면 해당 변경사항에 대한 프리뷰 URL이 자동으로 생성됩니다.

### 수동 배포 (Vercel CLI)

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **로그인**
   ```bash
   vercel login
   ```

3. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

**배포 URL**: [https://mxten-project-15.vercel.app](https://mxten-project-15-kkoj3lt34-dongyeol-jungs-projects.vercel.app)

### 환경 변수 설정

1. Vercel 대시보드에서 프로젝트를 선택합니다.
2. `Settings` > `Environment Variables`로 이동합니다.
3. `.env.example` 파일에 명시된 모든 환경 변수를 추가합니다.
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - ... 등
4. 각 변수에 대해 `Production`, `Preview`, `Development` 환경을 모두 체크합니다.
5. `Save` 버튼을 눌러 저장합니다.

## Firebase Hosting

Firebase는 백엔드 서비스와 함께 호스팅을 제공하는 좋은 대안입니다.

### 배포 절차

1. **Firebase CLI 설치**
   ```bash
   npm i -g firebase-tools
   ```

2. **로그인**
   ```bash
   firebase login
   ```

3. **프로젝트 초기화 (최초 1회)**
   ```bash
   firebase init hosting
   ```
   - 기존 Firebase 프로젝트에 연결합니다.
   - `public` 디렉토리로 `dist`를 지정합니다.
   - 싱글 페이지 앱(SPA)으로 구성하기 위해 모든 URL을 `/index.html`로 재작성하도록 설정합니다.

4. **프로덕션 빌드**
   ```bash
   npm run build
   ```

5. **배포**
   ```bash
   firebase deploy --only hosting
   ```
