import React from 'react';
import './Loader.css';

const Loader: React.FC = () => (
  <div className="loader-container">
    <div className="loader">
      <div className="spinner"></div>
      <span className="loader-text">Loading...</span>
    </div>
  </div>
);

export default Loader;
