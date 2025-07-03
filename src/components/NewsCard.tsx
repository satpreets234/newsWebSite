import React from 'react';
import './NewsCard.css';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';

export interface NewsCardProps {
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  // Try to translate, fallback to raw text if not found
  const translatedTitle = t(title, { defaultValue: title });
  const translatedDescription = t(description, { defaultValue: description });
  return (
    <div className={`news-card${theme === 'dark' ? ' news-card--dark' : ''}`}>
      <div className="news-card__overlay"></div>
      <div className="news-card__body">
        <h5 className="news-card__title">{translatedTitle}</h5>
        <p className="news-card__description">{translatedDescription}</p>
      </div>
    </div>
  );
};

export default NewsCard;
