import React from 'react';
import { News } from '../../../models/News';
import { NewsContent } from '../../../models/NewsContent';
import dbConnect from '../../../lib/mongodb';
import NewsCard from '../../../components/NewsCard';

interface NewsDetailProps {
  params: { permalink: string };
}

async function getNewsDetail(_id: string) {
  await dbConnect();
  const news = await News.findById(_id);
  return news ? JSON.parse(JSON.stringify(news)) : null;
}

async function getNewsContent(newsId: string) {
  await dbConnect();
  const content = await NewsContent.findOne({ newsId });
  return content ? JSON.parse(JSON.stringify(content)) : null;
}

async function getRelatedNews(category: string, excludeId: string) {
  await dbConnect();
  const related = await News.find({ category, _id: { $ne: excludeId } })
    .sort({ createdAt: -1 })
    .limit(5);
  return JSON.parse(JSON.stringify(related));
}

const NewsDetailPage = async ({ params }: NewsDetailProps) => {
  const news = await getNewsDetail(params.permalink);
  if (!news) {
    return <div className="container my-5"><h2>News not found</h2></div>;
  }
  const content = await getNewsContent(news._id);
  const related = await getRelatedNews(news.category, news._id);
  return (
    <div className="container my-5">
      <h1 style={{ color: 'var(--accent)' }}>{news.title}</h1>
      <div className="mb-4" style={{ color: 'var(--text)', fontSize: 18 }}>{content?.content || news.description}</div>
      <div className="mb-2" style={{ color: 'var(--accent)' }}>Category: {news.category}</div>
      <div className="mb-5" style={{ color: 'var(--border)' }}>Published: {new Date(news.createdAt).toLocaleString()}</div>
      <h3 className="mt-5 mb-3" style={{ color: 'var(--accent)' }}>Related News</h3>
      <div className="row g-4">
        {related.map((item: any) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={item._id}>
            <NewsCard
              title={item.title}
              description={item.description}
              _id={item._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetailPage; 