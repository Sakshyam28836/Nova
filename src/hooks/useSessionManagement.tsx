
import { useEffect, useState } from 'react';
import { usePageVisibility } from './usePageVisibility';

export const useSessionManagement = () => {
  const { isVisible, lastVisibleTime } = usePageVisibility();
  const [sessionActive, setSessionActive] = useState(true);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    // Handle page becoming visible after being hidden
    if (isVisible) {
      const timeAway = Date.now() - lastVisibleTime;
      const maxInactiveTime = 30 * 60 * 1000; // 30 minutes

      if (timeAway > maxInactiveTime) {
        setShouldRefresh(true);
      }

      // Restore session
      setSessionActive(true);
      
      // Check if resources need reloading
      const lastRefresh = localStorage.getItem('lastRefresh');
      const now = Date.now();
      
      if (!lastRefresh || now - parseInt(lastRefresh) > 60 * 60 * 1000) {
        localStorage.setItem('lastRefresh', now.toString());
      }
    }
  }, [isVisible, lastVisibleTime]);

  useEffect(() => {
    // Handle online/offline events
    const handleOnline = () => {
      setSessionActive(true);
      setShouldRefresh(false);
    };

    const handleOffline = () => {
      setSessionActive(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { sessionActive, shouldRefresh, isVisible };
};
