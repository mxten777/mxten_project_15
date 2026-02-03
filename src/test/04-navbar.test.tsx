/**
 * 🎯 선택 테스트 #4: Navbar 네비게이션 (선택)
 * 
 * 목적: 주요 네비게이션이 작동하는지 확인
 * 
 * 이 테스트가 실패하면:
 * - 사용자가 다른 페이지로 이동 불가
 * - 사이트 탐색 불가
 * → 비즈니스 목표 달성 어려움
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../contexts/ThemeContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

describe('선택 테스트: Navbar 기본 동작', () => {
  it('Navbar가 렌더링된다', () => {
    // Arrange & Act
    render(<Navbar />, { wrapper: TestWrapper });

    // Assert: nav 요소가 존재
    const nav = screen.getByRole('navigation') || document.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('로고/홈 링크가 존재한다', () => {
    // Arrange & Act
    render(<Navbar />, { wrapper: TestWrapper });

    // Assert: 홈으로 가는 링크 존재
    const homeLink = 
      screen.queryByRole('link', { name: /바이브코딩/i }) ||
      screen.queryByRole('link', { name: /홈/i });
    
    expect(homeLink).toBeTruthy();
  });

  it('주요 네비게이션 링크들이 존재한다', () => {
    // Arrange & Act
    render(<Navbar />, { wrapper: TestWrapper });

    // Assert: 포트폴리오 링크 존재 (최소 1개)
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
    
    const hasPortfolioLink = links.some(
      link => link.textContent?.includes('포트폴리오')
    );
    expect(hasPortfolioLink).toBe(true);
  });
});
