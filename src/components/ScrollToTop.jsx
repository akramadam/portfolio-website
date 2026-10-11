import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left corner (x: 0, y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the path changes

  return null; 
}