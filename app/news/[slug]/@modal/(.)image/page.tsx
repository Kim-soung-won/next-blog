"use client";
import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import { notFound, useRouter } from "next/navigation";

interface ImagePageProps {
  slug: string;
}

export default async function InterceptedImagePage({
  params,
}: {
  params: ImagePageProps;
}) {
  const router = useRouter();
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={router.back}
      />
      <dialog
        className="modal"
        open
      >
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
}
