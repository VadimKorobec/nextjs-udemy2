// "use client";

// import { useEffect, useState } from "react";

import NewsList from "@/components/newsList/news-list";
import { getAllNews } from "@/lib/news";

export interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

const NewsPage = async () => {
  const news = getAllNews();

  // const [isLoading, setIsloading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  // const [news, setNews] = useState<News[]>([]);

  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  // const news = await response.json();

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setIsloading(true);
  //     const response = await fetch("http://localhost:8080/news");
  //     if (!response.ok) {
  //       setError("Failed to fetch news");
  //       setIsloading(false);
  //     }
  //     const news = await response.json();
  //     setIsloading(false);
  //     setNews(news);
  //   };
  //   fetchNews();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // let newsContent;

  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  return (
    <>
      <h1>News Page</h1>
      {/* {newsContent} */}
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
