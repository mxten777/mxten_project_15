/**
 * SEOHead Component - BAIKAL Systems (바이칼시스템즈)
 *
 * react-helmet-async 기반 페이지별 동적 SEO 메타 태그 관리
 * 사용법: 각 페이지 컴포넌트 최상단에 <SEOHead {...seoConfig.pageName} /> 추가
 */

import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.baikalsys.kr';
const SITE_NAME = '바이칼시스템즈 (BAIKAL Systems)';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;       // e.g. '/rag' → canonical = SITE_URL + '/rag'
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: object | object[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const canonical = `${SITE_URL}${canonicalPath}`;
  const fullTitle = title.includes('바이칼') ? title : `${title} | 바이칼시스템즈`;

  const jsonLdArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@baikalsys" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

// ─────────────────────────────────────────────
// 페이지별 SEO 기본값 (seoConfigs)
// 각 페이지에서 import { seoConfigs } from './SEOHead'
// ─────────────────────────────────────────────

export const seoConfigs = {
  home: {
    title: 'AI 플랫폼 개발 | 바이칼시스템즈 (BAIKAL Systems)',
    description:
      '바이칼시스템즈는 Private AI, RAG 시스템, AI RPA, AI 입찰 분석 플랫폼, AI 자동화 SaaS를 전문으로 개발하는 AI 솔루션 기업입니다.',
    keywords:
      'AI 플랫폼 개발, Private AI, RAG 시스템, AI RPA, AI 자동화, 바이칼시스템즈, BAIKAL Systems, AI SaaS',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '바이칼시스템즈',
      alternateName: 'BAIKAL Systems',
      description: 'Private AI, RAG, AI RPA, AI 자동화 SaaS 전문 개발사',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'contact@baikalsys.kr',
        availableLanguage: 'Korean',
      },
    },
  },

  aiPlatform: {
    title: 'AI 플랫폼 개발',
    description:
      '기업 맞춤형 AI 플랫폼 구축. 자체 LLM 연동, 데이터 파이프라인 설계, 프로덕션 배포까지 엔드투엔드 AI 솔루션을 제공합니다.',
    keywords: 'AI 플랫폼, 기업 AI, LLM 연동, AI 솔루션, 생성형 AI, AI 개발',
    canonicalPath: '/ai-platform',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI 플랫폼 개발',
      description: '기업 맞춤형 AI 플랫폼 구축 서비스',
      provider: { '@type': 'Organization', name: '바이칼시스템즈', url: SITE_URL },
      url: `${SITE_URL}/ai-platform`,
      serviceType: 'AI Software Development',
      areaServed: { '@type': 'Country', name: 'South Korea' },
    },
  },

  rag: {
    title: 'RAG 시스템 구축',
    description:
      '검색증강생성(RAG) 시스템 전문 개발. 기업 문서 기반 AI 질의응답, 벡터 DB 설계, LLM 파인튜닝을 통해 정확도 높은 Private AI를 구현합니다.',
    keywords: 'RAG 시스템, 검색증강생성, 벡터 DB, Private AI, LLM, 기업 문서 AI',
    canonicalPath: '/rag',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'RAG 시스템 구축',
      description: '검색증강생성(RAG) 시스템 개발 서비스',
      provider: { '@type': 'Organization', name: '바이칼시스템즈', url: SITE_URL },
      url: `${SITE_URL}/rag`,
      serviceType: 'AI Software Development',
    },
  },

  rpa: {
    title: 'AI RPA 자동화',
    description:
      'AI RPA로 반복 업무를 자동화하세요. 문서 처리, 데이터 추출, 워크플로우 자동화, 시스템 연동까지 지능형 자동화 솔루션을 제공합니다.',
    keywords: 'AI RPA, 업무 자동화, 지능형 자동화, 문서 처리 자동화, 로봇 프로세스 자동화',
    canonicalPath: '/rpa',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI RPA 자동화',
      description: 'AI 기반 로봇 프로세스 자동화(RPA) 서비스',
      provider: { '@type': 'Organization', name: '바이칼시스템즈', url: SITE_URL },
      url: `${SITE_URL}/rpa`,
      serviceType: 'AI Automation',
    },
  },

  privateAi: {
    title: 'Private AI 솔루션',
    description:
      '기업 내부 데이터를 외부에 노출하지 않는 Private AI. 온프레미스 또는 프라이빗 클라우드 환경에 LLM을 구축하여 데이터 보안과 AI 성능을 동시에 확보합니다.',
    keywords: 'Private AI, 온프레미스 AI, 기업 AI 보안, LLM 내부 구축, 데이터 프라이버시 AI',
    canonicalPath: '/private-ai',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Private AI 솔루션',
      description: '기업 내부 환경 전용 Private AI 구축 서비스',
      provider: { '@type': 'Organization', name: '바이칼시스템즈', url: SITE_URL },
      url: `${SITE_URL}/private-ai`,
      serviceType: 'AI Software Development',
    },
  },

  aiSaas: {
    title: 'AI 자동화 SaaS',
    description:
      'AI 입찰 분석 플랫폼, AI 자동화 SaaS 개발. 공공 입찰 분석부터 B2B SaaS까지 AI 기반 서비스를 빠르게 구축합니다.',
    keywords: 'AI SaaS, AI 입찰 분석, AI 자동화 플랫폼, B2B SaaS, AI 서비스 개발',
    canonicalPath: '/ai-saas',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI 자동화 SaaS 개발',
      description: 'AI 입찰 분석 플랫폼 및 AI 자동화 SaaS 개발 서비스',
      provider: { '@type': 'Organization', name: '바이칼시스템즈', url: SITE_URL },
      url: `${SITE_URL}/ai-saas`,
      serviceType: 'SaaS Development',
    },
  },

  portfolio: {
    title: '프로젝트 포트폴리오',
    description:
      '바이칼시스템즈의 AI 개발 프로젝트 포트폴리오. Private AI, RAG, AI RPA, SaaS 분야의 실제 구축 사례를 확인하세요.',
    keywords: '바이칼시스템즈 포트폴리오, AI 개발 사례, AI 프로젝트, RAG 구축 사례',
    canonicalPath: '/portfolio',
  },

  contact: {
    title: 'AI 개발 문의',
    description:
      'AI 플랫폼 개발, RAG 시스템, AI RPA, Private AI 솔루션 구축 문의. 바이칼시스템즈와 AI 프로젝트를 시작하세요.',
    keywords: 'AI 개발 문의, AI 솔루션 상담, 바이칼시스템즈 문의',
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'AI 개발 문의 - 바이칼시스템즈',
      url: `${SITE_URL}/contact`,
    },
  },

  about: {
    title: '회사 소개',
    description:
      '바이칼시스템즈(BAIKAL Systems)는 대한민국 AI 플랫폼 개발 전문 기업입니다. Private AI, RAG, AI RPA 분야 전문가 팀이 기업의 AI 전환을 지원합니다.',
    keywords: '바이칼시스템즈 회사소개, BAIKAL Systems, AI 회사, AI 스타트업 한국',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: '회사 소개 - 바이칼시스템즈',
      description: 'AI 플랫폼 개발 전문 기업 바이칼시스템즈 소개',
      url: `${SITE_URL}/about`,
    },
  },
} as const satisfies Record<string, SEOHeadProps>;
