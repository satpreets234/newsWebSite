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
    <select
      className="form-select w-auto mb-3"
      style={{ background: 'var(--soft-lavender)', color: 'var(--dark-indigo)', border: '1px solid var(--primary-purple)', borderRadius: '8px', transition: 'border 0.2s, box-shadow 0.2s' }}
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent-purple)')}
      onBlur={e => (e.currentTarget.style.boxShadow = 'none')}
    >
      <option value="">{t('selectCategory')}</option>
      {categories.map((cat) => (
        <option key={cat.value} value={cat.value}>{cat.label}</option>
      ))}
    </select>
  );
};
