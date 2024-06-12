import NewsList from "@/components/newsList/news-list";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
