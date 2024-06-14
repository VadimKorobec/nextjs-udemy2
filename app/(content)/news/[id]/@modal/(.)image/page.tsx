import ModalBackdrop from "@/components/modalBackdrop/modal-backdrop";
import { getNewsItem } from "@/lib/news";

import { notFound } from "next/navigation";

interface ImagePageProps {
  params: {
    id: string;
  };
}

const IntercepredImagePage = async ({ params }: ImagePageProps) => {
  const newsItemId = params.id;
  const newsItem = await getNewsItem(newsItemId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default IntercepredImagePage;
