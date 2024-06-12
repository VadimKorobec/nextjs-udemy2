"use client";

import { DUMMY_NEWS } from "@/dummy-news";

import { notFound, useRouter } from "next/navigation";

interface ImagePageProps {
  params: {
    id: string;
  };
}

const IntercepredImagePage = ({ params }: ImagePageProps) => {
  const router = useRouter();
  const newsItemId = params.id;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemId)!;

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default IntercepredImagePage;
