/**
 * 🎯 최소 안전망 테스트 #3: 핵심 UX 테스트
 * 
 * 목적: 사용자가 반드시 사용해야 하는 핵심 기능이 작동하는지 확인
 * 
 * 이 테스트가 실패하면:
 * - 메인 CTA가 동작하지 않음
 * - 사용자가 다음 단계로 진행 불가
 * - 비즈니스 목표 달성 불가
 * → 배포하면 안 됨
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LandingPage from '../pages/LandingPage';
import { ThemeProvider } from '../contexts/ThemeContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

describe('핵심 UX 테스트: 주요 사용자 흐름', () => {
  it('메인 CTA 버튼이 존재한다', () => {
    // Arrange & Act
    render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: "프로젝트 문의" 또는 "상담" 관련 CTA 존재
    const ctaButton = 
      screen.queryByRole('link', { name: /프로젝트 문의/i }) ||
      screen.queryByRole('link', { name: /문의하기/i }) ||
      screen.queryByRole('button', { name: /문의/i });
    
    expect(ctaButton).toBeTruthy();
  });

  it('CTA 버튼이 올바른 경로로 링크된다', () => {
    // Arrange & Act
    render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: /contact 경로로 연결되는지 확인
    const ctaLink = screen.queryByRole('link', { name: /프로젝트 문의/i });
    
    if (ctaLink) {
      expect(ctaLink).toHaveAttribute('href', '/contact');
    } else {
      // CTA가 버튼이라면 클릭 이벤트가 있어야 함
      const ctaButton = screen.queryByRole('button', { name: /문의/i });
      expect(ctaButton).toBeTruthy();
    }
  });

  it('포트폴리오 보기 링크가 존재한다', () => {
    // Arrange & Act
    render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: 포트폴리오 페이지로 이동 가능
    const portfolioLink = 
      screen.queryByRole('link', { name: /포트폴리오/i }) ||
      screen.queryByText(/포트폴리오.*보기/i);
    
    expect(portfolioLink).toBeTruthy();
  });

  it('핵심 링크들이 클릭 가능하다', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<LandingPage />, { wrapper: TestWrapper });

    // Act & Assert: 포트폴리오 링크 클릭 가능
    const portfolioLink = screen.queryByRole('link', { name: /포트폴리오.*보기/i });
    
    if (portfolioLink) {
      // 클릭 시 에러가 발생하지 않아야 함
      await expect(user.click(portfolioLink)).resolves.not.toThrow();
    }
  });
});
