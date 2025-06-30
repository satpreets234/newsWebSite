import React from 'react';

export interface NewsCardProps {
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default NewsCard;
