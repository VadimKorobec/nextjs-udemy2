import NewsList from "@/components/newsList/news-list";
import { getLatestNews } from "@/lib/news";

const LatestPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
