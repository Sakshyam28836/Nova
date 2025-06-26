
import { useState, useEffect } from 'react';

export const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(!document.hidden);
  const [lastVisibleTime, setLastVisibleTime] = useState(Date.now());

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setLastVisibleTime(Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { isVisible, lastVisibleTime };
};
