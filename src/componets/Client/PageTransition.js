import React, { useState, useEffect } from 'react';
const PageTransition = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1200); // 600ms for the transition + 600ms for the content to appear
    };

    window.addEventListener('popstate', handleAnimation);
    handleAnimation();

    return () => window.removeEventListener('popstate', handleAnimation);
  }, []);

  return (
    <div className="page-wrapper">
      <div className={`page-transition-container ${isAnimating ? 'active' : ''}`}></div>
      <div className={`page-content ${isAnimating ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
