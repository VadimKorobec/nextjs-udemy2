import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface ImagePageProps {
  params: {
    id: string;
  };
}

const ImagePage = ({ params }: ImagePageProps) => {
  const newsItemId = params.id;
  const newsItem = DUMMY_NEWS.find((item) => item.id === newsItemId)!;

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
