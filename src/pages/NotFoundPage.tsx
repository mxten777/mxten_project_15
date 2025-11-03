import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const suggestions = [
    { name: '홈', path: '/', icon: Home, description: '메인 페이지로 돌아가기' },
    { name: '포트폴리오', path: '/portfolio', icon: Search, description: '40+개 MVP 프로젝트 보기' },
    { name: '문의하기', path: '/contact', icon: AlertTriangle, description: '도움이 필요하시면 연락주세요' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 숫자 */}
        <div className="mb-8 animate-fade-in">
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* 에러 메시지 */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <p className="text-blue-200">
            URL을 다시 확인하시거나 아래 링크를 이용해 주세요.
          </p>
        </div>

        {/* 제안 링크들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {suggestions.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-blue-200">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* 뒤로가기 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            이전 페이지로
          </button>
          
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            홈으로 가기
          </Link>
        </div>

        {/* 브랜드 정보 */}
        <div className="text-center">
          <p className="text-blue-200 text-sm mb-2">
            바이칼시스템즈와 함께하는 MVP 개발
          </p>
          <p className="text-blue-300 text-xs">
            © {currentYear} 바이칼시스템즈. All rights reserved.
          </p>
        </div>
      </div>

      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;