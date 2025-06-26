
import React from 'react';
import { useErrorBoundary } from '@/hooks/useErrorBoundary';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  const { hasError, error, resetError } = useErrorBoundary();

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md mx-auto text-center p-8 glass-effect">
          <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            The page encountered an error, but don't worry - we can fix this easily.
          </p>
          <div className="space-y-3">
            <button
              onClick={resetError}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full btn-secondary"
            >
              Refresh Page
            </button>
          </div>
          {error && (
            <details className="mt-4 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error Details
              </summary>
              <pre className="text-xs text-red-400 mt-2 p-2 bg-red-950/20 rounded">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundaryWrapper;
