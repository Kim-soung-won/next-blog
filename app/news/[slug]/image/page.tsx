import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import { notFound } from "next/navigation";

interface ImagePageProps {
  slug: string;
}

export default function ImagePage({ params }: { params: ImagePageProps }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
}
