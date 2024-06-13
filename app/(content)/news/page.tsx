"use client";

import { useEffect, useState } from "react";

import NewsList from "@/components/newsList/news-list";

export interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

const NewsPage = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      setIsloading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news");
        setIsloading(false);
      }
      const news = await response.json();
      setIsloading(false);
      setNews(news);
    };
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
