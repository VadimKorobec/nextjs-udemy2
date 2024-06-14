import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

interface ImagePageProps {
  params: {
    id: string;
  };
}

const ImagePage = async ({ params }: ImagePageProps) => {
  const newsItemId = params.id;
  const newsItem = await getNewsItem(newsItemId);

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
