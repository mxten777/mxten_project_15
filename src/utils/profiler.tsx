import React, { Profiler, ReactNode } from 'react';

interface ProfilerWrapperProps {
  children: ReactNode;
  id: string;
  enabled?: boolean;
}

// React Profiler 래퍼 컴포넌트
export const ProfilerWrapper: React.FC<ProfilerWrapperProps> = ({ 
  children, 
  id, 
  enabled = import.meta.env.DEV 
}) => {
  const onRenderCallback = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    if (enabled) {
      console.group(`🔍 React Profiler: ${id}`);
      console.log(`Phase: ${phase}`);
      console.log(`Actual Duration: ${actualDuration.toFixed(2)}ms`);
      console.log(`Base Duration: ${baseDuration.toFixed(2)}ms`);
      console.log(`Start Time: ${startTime.toFixed(2)}ms`);
      console.log(`Commit Time: ${commitTime.toFixed(2)}ms`);
      console.groupEnd();

      // 성능 임계값 경고
      if (actualDuration > 16) { // 60fps 기준
        console.warn(`⚠️ ${id} 컴포넌트가 느림: ${actualDuration.toFixed(2)}ms`);
      }
    }
  };

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <Profiler id={id} onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
};

// 성능 측정을 위한 HOC (간소화된 버전)
export function withProfiler<T extends object>(
  Component: React.ComponentType<T>,
  profileId?: string
) {
  const WrappedComponent = (props: T) => (
    <ProfilerWrapper id={profileId ?? Component.displayName ?? Component.name}>
      <Component {...props} />
    </ProfilerWrapper>
  );

  WrappedComponent.displayName = `withProfiler(${Component.displayName ?? Component.name})`;
  
  return WrappedComponent;
}

// 개발 환경에서만 성능 로그 출력하는 유틸리티
export const logPerformance = (name: string, duration: number) => {
  if (import.meta.env.DEV) {
    const emoji = duration > 100 ? '🐌' : duration > 50 ? '⚠️' : '✅';
    console.log(`${emoji} ${name}: ${duration.toFixed(2)}ms`);
  }
};

// React Concurrent Features 감지
export const checkConcurrentFeatures = () => {
  if (import.meta.env.DEV) {
    const isReact18 = Boolean((React as any).startTransition);
    console.log('🚀 React 18 Concurrent Features:', isReact18 ? '지원됨' : '지원안됨');
    
    if (isReact18) {
      console.log('✅ Concurrent Rendering 사용 가능');
      console.log('✅ Suspense for Data Fetching 사용 가능');
      console.log('✅ startTransition API 사용 가능');
    }
  }
};