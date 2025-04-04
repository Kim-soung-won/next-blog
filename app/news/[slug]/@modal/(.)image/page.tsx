import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import { notFound } from "next/navigation";
import ImageModal from "./image-modal";

interface ImagePageProps {
  slug: string;
}

export default async function InterceptedImagePage({
  params,
}: {
  params: ImagePageProps;
}) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return <ImageModal newsItem={newsItem} />;
}
