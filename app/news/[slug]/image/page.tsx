import { News } from "@/entities/news/news.types";
import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ImagePageProps {
  slug: string;
}

export default async function ImagePage({
  params,
}: {
  params: ImagePageProps;
}) {
  const { slug } = await params;
  const newsItem: News = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={100}
        height={100}
      />
    </div>
  );
}
