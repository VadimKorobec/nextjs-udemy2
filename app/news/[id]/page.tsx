import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

const NewsDetailPage = ({ params }: NewsDetailPageProps) => {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.id)!;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
