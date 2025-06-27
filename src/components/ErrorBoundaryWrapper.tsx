
import React from 'react';
import { useErrorBoundary } from '@/hooks/useErrorBoundary';
import { RefreshCw, AlertTriangle, MessageSquare, Bot, Shield, Zap } from 'lucide-react';

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  const { hasError, error, resetError, forceReload, getErrorSummary } = useErrorBoundary();

  const errorSummary = getErrorSummary();

  const handleReload = () => {
    console.log('User requested page reload');
    forceReload();
  };

  const handleRetry = () => {
    console.log('User requested error retry');
    resetError();
  };

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-destructive/10 rounded-full blur-2xl animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-lg mx-auto text-center p-8 glass-effect rounded-2xl animate-fade-in-scale">
          {/* Enhanced bot icon with status indicator */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="p-4 discord-primary rounded-full animate-pulse-glow">
                <Bot className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-destructive rounded-full">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
            </div>
          </div>

          {/* Enhanced error messaging */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3 gradient-text">Zero Bot Encountered an Issue</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-muted-foreground font-medium">
                Don't worry! This is completely normal.
              </p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Our advanced error recovery system is handling this automatically.
            </p>
            
            {/* Error status indicators */}
            {errorSummary && (
              <div className="flex justify-center gap-4 mb-4">
                {errorSummary.isRecent && (
                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Zap className="h-3 w-3" />
                    Recent Issue
                  </div>
                )}
                {errorSummary.isRecurring && (
                  <div className="flex items-center gap-1 text-xs text-orange-400">
                    <AlertTriangle className="h-3 w-3" />
                    Recurring
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Enhanced action buttons */}
          <div className="space-y-4 mb-6">
            <button
              onClick={handleRetry}
              className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-all duration-300"
            >
              <RefreshCw className="h-5 w-5" />
              Try Again
            </button>
            <button
              onClick={handleReload}
              className="w-full btn-secondary flex items-center justify-center gap-3 text-lg py-4 hover:scale-105 transition-all duration-300"
            >
              <Bot className="h-5 w-5" />
              Reload Zero Bot
            </button>
          </div>

          {/* Enhanced support section */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-primary" />
              <p className="font-semibold text-foreground">Need Immediate Support?</p>
            </div>
            <a
              href="https://discord.gg/vdHy6VPR8f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              Join Zero Support Server
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              Our support team responds within minutes!
            </p>
          </div>

          {/* Enhanced error details for developers */}
          {error && (
            <details className="mt-6 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                Technical Details (For Developers)
              </summary>
              <div className="mt-3 p-4 bg-card rounded-lg border border-border">
                <div className="text-xs space-y-2">
                  <div>
                    <span className="text-primary font-medium">Error:</span>
                    <pre className="text-destructive mt-1 whitespace-pre-wrap">{error.message}</pre>
                  </div>
                  {error.source && (
                    <div>
                      <span className="text-primary font-medium">Source:</span>
                      <pre className="text-muted-foreground mt-1">{error.source}</pre>
                    </div>
                  )}
                  <div>
                    <span className="text-primary font-medium">Timestamp:</span>
                    <pre className="text-muted-foreground mt-1">{new Date(error.timestamp).toLocaleString()}</pre>
                  </div>
                </div>
              </div>
            </details>
          )}

          {/* Bot branding */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center gap-3">
              <img 
                src="/lovable-uploads/48d5ac17-7fc6-4a8e-bfea-36c8dc2cc75b.png" 
                alt="Zero Bot" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="font-bold gradient-text text-lg">Zero Bot</h3>
                <p className="text-sm text-muted-foreground">Advanced Discord Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundaryWrapper;
