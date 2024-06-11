import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/newsList/news-list";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
