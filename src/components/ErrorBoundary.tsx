import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트합니다.
    return { hasError: true, error, errorInfo: null };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // 에러 로깅 서비스에 보고 (예: Sentry, LogRocket 등)
    // 개발 환경에서는 콘솔에만 출력
    if (import.meta.env.PROD) {
      // 실제 프로덕션에서는 에러 추적 서비스 사용
      // logErrorToService(error, errorInfo);
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public override render() {
    if (this.state.hasError) {
      const isDevelopment = import.meta.env.DEV;
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-pink-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 에러 아이콘 */}
            <div className="mb-8 animate-fade-in">
              <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* 에러 메시지 */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                앗! 문제가 발생했습니다
              </h1>
              <p className="text-xl text-red-100 mb-4">
                예상치 못한 오류가 발생했습니다. 
              </p>
              <p className="text-red-200">
                잠시 후 다시 시도해주시거나 페이지를 새로고침해 주세요.
              </p>
            </div>

            {/* 개발 환경에서만 에러 상세 정보 표시 */}
            {isDevelopment && this.state.error && (
              <div className="mb-8 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-lg font-semibold text-red-300 mb-2">개발 모드 - 에러 상세:</h3>
                <p className="text-red-200 text-sm mb-2 font-mono">
                  {this.state.error.name}: {this.state.error.message}
                </p>
                {this.state.error.stack && (
                  <pre className="text-xs text-red-300 overflow-auto bg-black/20 p-2 rounded max-h-32">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}

            {/* 액션 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                페이지 새로고침
              </button>
              
              <button
                onClick={this.handleReset}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
              >
                다시 시도
              </button>
              
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                홈으로 가기
              </Link>
            </div>

            {/* 지원 연락처 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">
                문제가 지속될 경우
              </h3>
              <p className="text-red-100 mb-4">
                이 문제가 계속 발생한다면 저희에게 알려주세요.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                문의하기
              </Link>
            </div>

            {/* 브랜드 정보 */}
            <div className="mt-8 text-center">
              <p className="text-red-200 text-sm">
                바이칼시스템즈 - 신뢰할 수 있는 MVP 개발 파트너
              </p>
            </div>
          </div>

          {/* 배경 장식 요소 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;