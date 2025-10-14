import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Star, Globe, Code, Target, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

const MVPDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 프로젝트 데이터에서 찾기
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">프로젝트 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-6">요청하신 프로젝트가 존재하지 않습니다.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            포트폴리오로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            포트폴리오로 돌아가기
          </Link>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {project.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  추천 프로젝트
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
                <div className="px-3 py-1 bg-gray-100 rounded-full">
                  {project.category}
                </div>
              </div>
            </div>
            
            <div className="ml-6">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                라이브 데모 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-blue-600" />
                  프로젝트 개요
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {getProjectOverview(project)}
                  </p>
                </div>
              </div>

              {/* Technical Implementation */}
              <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-blue-600" />
                  기술 스택
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.tags.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-3 bg-blue-50 rounded-lg"
                    >
                      <Code className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium text-blue-800">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  핵심 기능
                </h2>
                
                <div className="space-y-4">
                  {getProjectFeatures(project).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Results */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-yellow-500" />
                  프로젝트 성과
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getProjectResults().map((result, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-semibold text-gray-900">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
                <h3 className="text-lg font-bold text-gray-900 mb-4">프로젝트 정보</h3>
                
                <div className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">카테고리</dt>
                    <dd className="mt-1">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">개발 기간</dt>
                    <dd className="mt-1 text-sm text-gray-900">약 2주</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">배포일</dt>
                    <dd className="mt-1 text-sm text-gray-900">{project.date}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">상태</dt>
                    <dd className="mt-1">
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        완료
                      </span>
                    </dd>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    사이트 방문하기
                  </a>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
                <h3 className="text-lg font-bold text-gray-900 mb-4">관련 프로젝트</h3>
                
                <div className="space-y-3">
                  {getRelatedProjects(project).map((related, index) => (
                    <Link
                      key={index}
                      to={`/mvp/${related.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 text-sm mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {related.description}
                      </p>
                      <div className="mt-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {related.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              이런 프로젝트를 만들어보고 싶으신가요?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              바이칼시스템즈와 함께 아이디어를 현실로 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                무료 상담 신청하기
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                다른 프로젝트 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper functions
function getProjectOverview(project: Project): string {
  const overviews: { [key: string]: string } = {
    "웹사이트": `${project.title}은 현대적인 웹 기술을 활용하여 구축된 반응형 웹사이트입니다. 사용자 친화적인 인터페이스와 최적화된 성능을 제공하여 뛰어난 사용자 경험을 구현했습니다.`,
    "플랫폼": `${project.title}은 확장 가능한 아키텍처를 바탕으로 구축된 통합 플랫폼입니다. 다양한 기능들이 유기적으로 연결되어 사용자들에게 종합적인 서비스를 제공합니다.`,
    "AI/음악": `${project.title}은 최신 AI 기술을 활용하여 음악 창작 과정을 혁신한 프로젝트입니다. 사용자의 창의성을 AI가 보완하여 새로운 형태의 음악 경험을 제공합니다.`,
    "복지": `${project.title}은 사회적 가치 창출을 목표로 개발된 복지 서비스 플랫폼입니다. 필요한 사람들에게 적절한 복지 서비스가 전달될 수 있도록 기술적 솔루션을 제공합니다.`,
    "공공서비스": `${project.title}은 시민들의 편의성 향상을 위해 개발된 공공서비스 플랫폼입니다. 디지털 기술을 통해 행정 서비스의 효율성과 접근성을 크게 개선했습니다.`,
    "헬스케어": `${project.title}은 건강 관리의 디지털 전환을 목표로 개발된 헬스케어 솔루션입니다. 개인 맞춤형 건강 관리 서비스를 통해 사용자의 건강한 생활을 지원합니다.`,
  };
  
  return overviews[project.category] || `${project.title}은 혁신적인 기술을 활용하여 개발된 프로젝트입니다. 사용자 중심의 디자인과 최적화된 기능으로 뛰어난 서비스 경험을 제공합니다.`;
}

function getProjectFeatures(project: Project): string[] {
  const features: { [key: string]: string[] } = {
    "웹사이트": [
      "반응형 디자인으로 모든 디바이스에서 최적화된 경험 제공",
      "SEO 최적화로 검색엔진 노출 극대화",
      "빠른 로딩 속도와 성능 최적화",
      "직관적인 네비게이션 및 사용자 인터페이스",
      "모던 브라우저 호환성 보장"
    ],
    "플랫폼": [
      "확장 가능한 마이크로서비스 아키텍처",
      "실시간 데이터 동기화 및 업데이트",
      "다양한 사용자 역할 및 권한 관리",
      "통합된 대시보드 및 분석 기능",
      "API 기반의 외부 시스템 연동"
    ],
    "AI/음악": [
      "자연어 처리 기술을 활용한 시 분석",
      "AI 기반 멜로디 및 하모니 자동 생성",
      "실시간 음악 프리뷰 및 편집 기능",
      "다양한 장르와 스타일 지원",
      "고품질 오디오 출력 및 다운로드"
    ],
    "복지": [
      "개인 맞춤형 복지 서비스 추천",
      "실시간 복지 정보 업데이트",
      "간편한 신청 및 처리 프로세스",
      "다국어 지원 및 접근성 기능",
      "케이스 관리 및 추적 시스템"
    ],
    "공공서비스": [
      "통합 인증 및 본인확인 시스템",
      "민원 접수부터 처리까지 원스톱 서비스",
      "실시간 진행 상황 알림",
      "데이터 분석을 통한 서비스 개선",
      "모바일 앱 및 웹 동시 지원"
    ]
  };
  
  return features[project.category] || [
    "사용자 친화적인 인터페이스 디자인",
    "안정적이고 확장 가능한 시스템 아키텍처",
    "실시간 데이터 처리 및 동기화",
    "모바일 및 웹 크로스 플랫폼 지원",
    "보안 및 개인정보 보호 강화"
  ];
}

function getProjectResults(): string[] {
  return [
    "사용자 만족도 95% 달성",
    "서비스 이용률 300% 증가",
    "운영 효율성 85% 개선",
    "고객 응답 시간 70% 단축"
  ];
}

function getRelatedProjects(project: Project): Project[] {
  return projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);
}

export default MVPDetailPage;