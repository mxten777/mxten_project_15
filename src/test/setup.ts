/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-useless-constructor */

import { afterEach, vi, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';

// 각 테스트 후 자동 cleanup
afterEach(() => {
  cleanup();
});

// Framer Motion 애니메이션 비활성화 (테스트 속도 향상)
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        // 모든 motion 컴포넌트를 일반 HTML 요소로 대체
        return React.forwardRef(({ children, ...props }: any, ref: any) => {
          // Framer Motion 전용 props 제거
          const {
            initial,
            animate,
            exit,
            variants,
            transition,
            whileHover,
            whileTap,
            whileFocus,
            whileInView,
            viewport,
            layoutId,
            layout,
            ...htmlProps
          } = props;
          
          return React.createElement(prop as string, { ...htmlProps, ref }, children);
        });
      },
    }
  ),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Window.matchMedia mock (다크모드 테스트용)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// IntersectionObserver mock (스크롤 애니메이션용)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Console 에러를 테스트 실패로 처리
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    // React 경고는 무시 (테스트 환경 특성)
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return;
    }
    originalError(...args);
    throw new Error(`Console.error: ${args.join(' ')}`);
  };
});

afterAll(() => {
  console.error = originalError;
});
