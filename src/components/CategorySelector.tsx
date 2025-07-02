import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const categories = [
  { value: '', label: 'All' },
  { value: 'politics', label: 'Politics' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
  { value: 'entertainment', label: 'Entertainment' },
];

export const CategorySelector: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <select className="form-select w-auto mb-3" value={value} onChange={e => onChange(e.target.value)}>
      <option value="">{t('selectCategory')}</option>
      {categories.map((cat) => (
        <option key={cat.value} value={cat.value}>{cat.label}</option>
      ))}
    </select>
  );
};
