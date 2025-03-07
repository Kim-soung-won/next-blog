import NewsList from "@/features/news/main/news-list";
import { ReactNode } from "react";

export default async function LatestNewsPage(): Promise<ReactNode> {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();

  return (
    <>
      <h1>LatestNews Page</h1>
      <NewsList news={news} />
    </>
  );
}
