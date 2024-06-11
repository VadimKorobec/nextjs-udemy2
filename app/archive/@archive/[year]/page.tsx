import NewsList from "@/components/newsList/news-list";
import { getNewsForYear } from "@/lib/news";

interface FilteredNewsPageProps {
  params: {
    year: string;
  };
}

const FilteredNewsPage = ({ params }: FilteredNewsPageProps) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
};

export default FilteredNewsPage;
