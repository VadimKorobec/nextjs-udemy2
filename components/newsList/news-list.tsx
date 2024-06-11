import Link from "next/link";

interface NewsListProps {
  news: {
    id: string;
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
  }[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
