// Logo.jsx
import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg className="logo-icon" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#da7c25' }} />
            <stop offset="100%" style={{ stopColor: '#b923e1' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#iconGradient)"
          d="M12 2L2 22h20L12 2zm0 3.27L17.45 18H6.55L12 5.27z"
        />
      </svg>
      <div className="logo-text">DevDash</div>
    </div>
  );
};

export default Logo;
