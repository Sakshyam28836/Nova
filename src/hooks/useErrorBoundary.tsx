
import { useState, useEffect, useCallback } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  source?: string;
  timestamp: number;
}

export const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<ErrorInfo | null>(null);
  const [errorHistory, setErrorHistory] = useState<ErrorInfo[]>([]);

  const logError = useCallback((errorInfo: ErrorInfo) => {
    console.error('Error logged:', errorInfo);
    setErrorHistory(prev => [...prev.slice(-4), errorInfo]); // Keep last 5 errors
  }, []);

  const handleError = useCallback((event: ErrorEvent) => {
    const errorInfo: ErrorInfo = {
      message: event.error?.message || event.message || 'Unknown error',
      stack: event.error?.stack,
      source: event.filename,
      timestamp: Date.now()
    };
    
    console.error('Global error caught:', errorInfo);
    logError(errorInfo);
    setError(errorInfo);
    setHasError(true);
  }, [logError]);

  const handleUnhandledRejection = useCallback((event: PromiseRejectionEvent) => {
    const errorInfo: ErrorInfo = {
      message: event.reason?.message || String(event.reason) || 'Unhandled promise rejection',
      stack: event.reason?.stack,
      source: 'Promise',
      timestamp: Date.now()
    };

    console.error('Unhandled promise rejection:', errorInfo);
    logError(errorInfo);
    setError(errorInfo);
    setHasError(true);
  }, [logError]);

  useEffect(() => {
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Enhanced error recovery with automatic retry
    const errorRecoveryTimer = setTimeout(() => {
      if (hasError && error) {
        console.log('Attempting automatic error recovery...');
        resetError();
      }
    }, 30000); // Auto-recover after 30 seconds

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      clearTimeout(errorRecoveryTimer);
    };
  }, [handleError, handleUnhandledRejection, hasError, error]);

  const resetError = useCallback(() => {
    console.log('Resetting error state...');
    setHasError(false);
    setError(null);
  }, []);

  const forceReload = useCallback(() => {
    console.log('Force reloading application...');
    window.location.href = "https://zero.indmc.fun";
  }, []);

  const getErrorSummary = useCallback(() => {
    if (!error) return null;
    
    return {
      isRecent: Date.now() - error.timestamp < 5000, // Error within last 5 seconds
      isRecurring: errorHistory.filter(e => e.message === error.message).length > 1,
      errorCount: errorHistory.length,
      lastError: error
    };
  }, [error, errorHistory]);

  return { 
    hasError, 
    error, 
    errorHistory,
    resetError, 
    forceReload,
    getErrorSummary
  };
};
