import React from 'react';
import './Loader.css';

const Loader: React.FC = () => (
  <div className="loader-container">
    <div className="loader">
      <svg className="magnifier-spinner" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="16" stroke="var(--primary-purple)" strokeWidth="4" fill="var(--soft-lavender)" />
        <rect x="34" y="34" width="10" height="4" rx="2" transform="rotate(45 34 34)" fill="var(--accent-purple)" />
        <circle cx="22" cy="22" r="8" stroke="var(--accent-purple)" strokeWidth="2" fill="none" />
      </svg>
      <span className="loader-text">Loading...</span>
    </div>
  </div>
);

export default Loader;
