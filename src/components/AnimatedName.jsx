import React, { useEffect } from 'react';
import './AnimatedName.css';

const AnimatedName = () => {
  useEffect(() => {
    const path = document.querySelector('.text-path');
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 4s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, 100);
  }, []);

  return (
    <div className="name-container">
      <svg viewBox="0 0 1200 200">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="animated-text"
        >
          <textPath href="#path" startOffset="0%">
            Harshavardhan Reddy Nagarthi
          </textPath>
        </text>
        <path
          id="path"
          className="text-path"
          d="M100,100 C300,20 900,180 1100,100"
          fill="transparent"
          stroke="#00ffcc"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default AnimatedName;
