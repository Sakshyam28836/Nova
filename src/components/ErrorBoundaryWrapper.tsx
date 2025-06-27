
import React from 'react';
import { useErrorBoundary } from '@/hooks/useErrorBoundary';
import { RefreshCw, AlertTriangle, MessageSquare, Bot } from 'lucide-react';

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  const { hasError, error, resetError } = useErrorBoundary();

  const handleReload = () => {
    window.location.href = "https://zero.indmc.fun";
  };

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto text-center p-8 glass-effect rounded-2xl">
          {/* Bot icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 discord-primary rounded-full animate-pulse-glow relative">
              <Bot className="h-12 w-12 text-white" />
              <AlertTriangle className="h-6 w-6 text-yellow-500 absolute -top-1 -right-1" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 gradient-text">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            Don't worry, this is normal! The page encountered an error, but we can fix this easily.
          </p>
          
          <div className="space-y-3 mb-6">
            <button
              onClick={resetError}
              className="w-full btn-primary flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
            <button
              onClick={handleReload}
              className="w-full btn-secondary hover:scale-105 transition-transform duration-300"
            >
              Reload Page
            </button>
          </div>

          {/* Support section */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-3">Need help?</p>
            <a
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
            >
              <MessageSquare className="h-4 w-4" />
              Join Support Server
            </a>
          </div>

          {error && (
            <details className="mt-6 text-left">
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
