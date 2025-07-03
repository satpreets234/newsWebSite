'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer style={{ background: 'var(--primary-purple)', color: 'var(--soft-white)', textAlign: 'center', padding: '1rem 0', marginTop: '2rem', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
      <div className="container">
        <span>&copy; {new Date().getFullYear()} {t('footerCopyright')}</span>
      </div>
    </footer>
  );
};

export default Footer;
