"use client";
import NewsCard from "../components/NewsCard";
import { useGetNewsQuery } from "../lib/newsApi";
import Loader from "../components/Loader";
import "../components/Loader.css";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { CategorySelector } from '../components/CategorySelector';

export default function NewsList() {
  const { t } = useTranslation();
  const [category, setCategory] = useState('');
  const { data: news = [], error, isLoading } = useGetNewsQuery();
  const filteredNews = category ? news.filter((n: any) => n.category === category) : news;
  return (
    <>
      <CategorySelector value={category} onChange={setCategory} />
      {isLoading && <Loader />}
      {error && <p>{t('errorLoading')}</p>}
      {filteredNews?.map((item: any) => (
        <NewsCard
          key={String(item._id)}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
