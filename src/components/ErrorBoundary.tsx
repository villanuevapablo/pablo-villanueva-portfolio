import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 text-[#171918] bg-[#F3F0E9] min-h-[60vh] flex flex-col items-center justify-center border-y border-[#B9B7AF]">
          <div className="max-w-md w-full p-8 border border-[#171918] bg-[#F3F0E9]">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#D97745] block mb-2">
              Publication Render Notice
            </span>
            <h2 className="font-serif text-2xl text-[#171918] mb-3">
              A section failed to render.
            </h2>
            <p className="text-sm text-[#3D403E] leading-relaxed mb-6">
              An unexpected runtime error prevented this view from displaying. Reload to reinitialize the journal cleanly.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-5 py-2.5 bg-[#171918] text-[#F3F0E9] hover:bg-[#D97745] text-xs font-semibold uppercase tracking-[0.14em] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
