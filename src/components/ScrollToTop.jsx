import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Change to 'auto' if you want it to jump instantly instead of smooth scrolling
    });
  }, [pathname]);

  return null;
}