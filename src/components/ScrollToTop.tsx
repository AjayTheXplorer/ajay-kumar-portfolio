import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Hash navigation is intentional on the homepage
    // (for example /#contact or /#work).
    if (hash) {
      const elementId = decodeURIComponent(hash.slice(1));

      const scrollToHash = () => {
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
          return;
        }

        // If the target is not mounted yet, fall back to the top.
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      };

      requestAnimationFrame(scrollToHash);
      return;
    }

    // Every normal route change starts at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
