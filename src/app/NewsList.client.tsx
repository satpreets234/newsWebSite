"use client";
import NewsCard from "../components/NewsCard";
import { useGetNewsQuery } from "../lib/newsApi";
import Loader from "../components/Loader";
import "../components/Loader.css";

export default function NewsList() {
  const { data: news = [], error, isLoading } = useGetNewsQuery();
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error loading news.</p>}
      {news?.map((item: any) => (
        <NewsCard
          key={String(item._id)}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
