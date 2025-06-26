
import { useEffect } from 'react';
import { useSessionManagement } from '@/hooks/useSessionManagement';

const SessionManager = ({ children }: { children: React.ReactNode }) => {
  const { sessionActive, shouldRefresh, isVisible } = useSessionManagement();

  useEffect(() => {
    // Auto-refresh resources when page becomes visible after long absence
    if (shouldRefresh && isVisible) {
      console.log('Refreshing resources after extended absence');
      
      // Preload critical resources
      const preloadResources = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (img.src) {
            const newImg = new Image();
            newImg.src = img.src;
          }
        });
      };

      preloadResources();
    }
  }, [shouldRefresh, isVisible]);

  useEffect(() => {
    // Handle focus/blur events for better session management
    const handleFocus = () => {
      document.body.classList.remove('page-inactive');
    };

    const handleBlur = () => {
      document.body.classList.add('page-inactive');
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div className={`session-wrapper ${!sessionActive ? 'session-inactive' : ''}`}>
      {children}
    </div>
  );
};

export default SessionManager;
