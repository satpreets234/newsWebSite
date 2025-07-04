'use client';
import React, { useState, useEffect } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRefresh = () => window.location.reload();
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: 'var(--primary-dark)', transition: 'background 0.3s' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" href="/" style={{ color: 'var(--primary-accent)', fontWeight: 'bold', letterSpacing: '1px' }}>{t('newsWebsite')}</Link>
        <div className="d-flex align-items-center gap-2">
          <Link href="/login" className="btn" style={{ borderRadius: '8px', fontWeight: 500, background: 'var(--soft-grey)', color: 'var(--soft-white)', border: 'none' }}>{t('login')}</Link>
          <Link href="/signup" className="btn" style={{ borderRadius: '8px', fontWeight: 500, background: 'var(--primary-accent)', color: 'var(--soft-white)', border: 'none' }}>{t('signup')}</Link>
          <a href="/contact" className="btn btn-link" style={{ color: 'var(--primary-accent)', textDecoration: 'underline', fontWeight: 500 }}>{t('contactUs')}</a>
          <button className="btn" style={{ borderRadius: '8px', background: 'var(--soft-grey)', color: 'var(--primary-accent)', border: 'none' }} onClick={handleRefresh} aria-label="Refresh">
            &#x21bb;
          </button>
          <LanguageSwitcher />
          {mounted && (
            <button
              className="btn ms-2"
              style={{ background: 'var(--accent-grey)', color: 'var(--primary-accent)', border: 'none', borderRadius: '8px', transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = 'var(--primary-accent)')}
              onMouseOut={e => (e.currentTarget.style.background = 'var(--accent-grey)')}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          )}
        </div>
        {showScroll && (
          <button
            className="btn position-fixed"
            style={{ right: 24, bottom: 24, zIndex: 9999, borderRadius: '50%', width: 48, height: 48, fontSize: 24, background: 'var(--primary-accent)', color: 'var(--soft-white)' }}
            onClick={handleScrollTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
