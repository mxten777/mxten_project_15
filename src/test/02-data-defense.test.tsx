/**
 * 🎯 최소 안전망 테스트 #2: 데이터 방어 테스트
 * 
 * 목적: 데이터가 없거나 undefined여도 앱이 깨지지 않는지 확인
 * 
 * 이 테스트가 실패하면:
 * - 백엔드 장애 시 화면이 깨짐
 * - 초기 로딩 상태에서 에러 발생
 * - Fallback UI가 작동하지 않음
 * → 배포하면 안 됨
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import { ThemeProvider } from '../contexts/ThemeContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

// 데이터 모듈 모킹
vi.mock('../data/portfolio', () => ({
  CATEGORIES: ['전체'],
  portfolioProjects: [],
  getProjectsByCategory: () => [],
  getFeaturedProjects: () => [],
  getAllTags: () => [],
  getCategoryCount: () => 0,
}));

describe('데이터 방어 테스트: 빈 데이터 처리', () => {
  it('포트폴리오 데이터가 비어있어도 렌더링된다', () => {
    // Arrange & Act
    const { container } = render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: 페이지가 크래시하지 않고 렌더링됨
    expect(container).toBeInTheDocument();
    expect(container.firstChild).not.toBeNull();
  });

  it('카테고리 데이터가 없어도 UI가 깨지지 않는다', () => {
    // Arrange & Act
    const { container } = render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: 최소한의 UI 요소는 존재해야 함
    expect(container.querySelector('section')).toBeTruthy();
  });

  it('빈 데이터 상태에서도 치명적 에러가 없다', () => {
    // Arrange & Act
    // 렌더링 중 throw되는 에러가 없어야 함
    expect(() => {
      render(<LandingPage />, { wrapper: TestWrapper });
    }).not.toThrow();
  });
});
