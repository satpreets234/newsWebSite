'use client';
import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">News Website</a>
        <div className="d-flex align-items-center">
          <LanguageSwitcher />
          <button className="btn btn-outline-light ms-2" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
