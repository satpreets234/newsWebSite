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
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const { data: news = [], error, isLoading } = useGetNewsQuery();
  
  console.log(news,'news');
   const filteredNews = category
    ? news.filter((n: any) =>
        (n.category || '').toLowerCase().trim() === category.toLowerCase().trim()
      )
    : news;
  const totalPages = Math.ceil(filteredNews.length / pageSize);
  const paginatedNews = filteredNews.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div style={{ background: 'var(--light-purple)', padding: '2rem', borderRadius: '24px' }}>
      <CategorySelector value={category} onChange={v => { setCategory(v); setCurrentPage(1); }} />
      {isLoading && <Loader />}
      {error && <p>{t('errorLoading')}</p>}
      <div className="row g-4">
        {paginatedNews?.map((item: any) => (
          <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch" key={String(item._id)}>
            <NewsCard
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination pagination-lg" style={{ gap: '0.5rem' }}>
            <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
              <button className="page-link" style={{ borderRadius: '8px', background: 'var(--soft-lavender)', color: 'var(--primary-purple)', border: 'none', transition: 'background 0.2s' }} onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
            </li>
            {[...Array(totalPages)].map((_, idx) => (
              <li key={idx} className={`page-item${currentPage === idx + 1 ? ' active' : ''}`}>
                <button
                  className="page-link"
                  style={{ borderRadius: '8px', background: currentPage === idx + 1 ? 'var(--primary-purple)' : 'var(--soft-lavender)', color: currentPage === idx + 1 ? 'var(--soft-white)' : 'var(--primary-purple)', border: 'none', transition: 'background 0.2s' }}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
            <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
              <button className="page-link" style={{ borderRadius: '8px', background: 'var(--soft-lavender)', color: 'var(--primary-purple)', border: 'none', transition: 'background 0.2s' }} onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
