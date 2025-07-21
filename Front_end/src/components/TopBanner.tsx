import { useEffect, useState } from 'react';
import '../styles/SideNav.css';

export default function TopBanner() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="topBanner" className="top-banner">
      <h1>Top Banner</h1>
      {showGoTop && (
        <button id="goTop" onClick={scrollToTop} className="go-top">
          Go Top
        </button>
      )}
    </div>
  );
}
