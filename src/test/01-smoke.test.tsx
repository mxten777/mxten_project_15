/**
 * 🎯 최소 안전망 테스트 #1: 스모크 테스트
 * 
 * 목적: 메인 랜딩 페이지가 치명적 에러 없이 렌더링되는지 확인
 * 
 * 이 테스트가 실패하면:
 * - 의존성 오류
 * - 초기화 문제
 * - 치명적인 런타임 에러
 * → 배포하면 안 됨
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
import LandingPage from '../pages/LandingPage';
import { ThemeProvider } from '../contexts/ThemeContext';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

describe('스모크 테스트: 랜딩 페이지 기본 렌더링', () => {
  it('랜딩 페이지가 오류 없이 마운트된다', () => {
    // Arrange & Act
    const { container } = render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: 페이지가 렌더링되었는지만 확인
    expect(container).toBeInTheDocument();
    expect(container.firstChild).not.toBeNull();
  });

  it('Hero 영역이 존재한다', () => {
    // Arrange & Act
    render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: Hero 섹션이 있는지 확인 (semantic HTML)
    const heroSection = screen.getByRole('region', { hidden: true }) || 
                        document.querySelector('[id="hero"]') ||
                        document.querySelector('section');
    
    expect(heroSection).toBeTruthy();
  });

  it('메인 헤딩이 존재한다', () => {
    // Arrange & Act
    render(<LandingPage />, { wrapper: TestWrapper });

    // Assert: 최소한 하나의 h1이 있어야 함
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
    
    // 핵심 메시지가 포함되어 있는지 확인
    const hasKeyMessage = headings.some(
      heading => 
        heading.textContent?.includes('비즈니스') ||
        heading.textContent?.includes('시스템') ||
        heading.textContent?.includes('운영')
    );
    expect(hasKeyMessage).toBe(true);
  });
});
