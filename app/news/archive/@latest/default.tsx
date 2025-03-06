import NewsList from "@/features/news/main/news-list";
import { getLatestNews } from "@/shared/dummy-data/news";
import { ReactNode } from "react";

export default function LatestNewsPage(): ReactNode {
  const latestNews = getLatestNews();

  return (
    <>
      <h1>LatestNews Page</h1>
      <NewsList news={latestNews} />
    </>
  );
}
