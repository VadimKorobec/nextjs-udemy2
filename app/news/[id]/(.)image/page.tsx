import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface ImagePageProps {
  params: {
    id: string;
  };
}

const IntercepredImagePage = ({ params }: ImagePageProps) => {
  const newsItemId = params.id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemId)!;

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  );
};

export default IntercepredImagePage;
