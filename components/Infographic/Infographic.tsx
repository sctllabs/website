import React, { useEffect } from 'react';

import { ReactComponent as InfographicSVG } from 'public/images/infographic.svg';

const Infographic: React.FC = () => {
  useEffect(() => {
    let prevScrollY = window.scrollY;
    const svg = document.querySelector('.infographic-svg');
    const internalCircle = svg?.querySelector('.infographic-internal-circle');
    const externalCircle = svg?.querySelector('.infographic-external-circle');
    let angle = 0;

    const handleScroll = () => {
      const diff = window.scrollY - prevScrollY;
      angle += diff * 0.06;

      internalCircle?.setAttribute(
        'style',
        `transition: all 0.2s linear; 
        transform-origin: center;
        transform: rotate(${angle}deg); `
      );

      externalCircle?.setAttribute(
        'style',
        `transition: all 0.2s linear; 
        transform-origin: center;
        transform: rotate(${-angle}deg); `
      );

      prevScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  return <InfographicSVG className="infographic-svg" />;
};

export default Infographic;
