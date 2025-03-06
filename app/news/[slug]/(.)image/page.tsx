import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} />
      </div>
    </>
  );
}
