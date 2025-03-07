"use client";
import NewsList from "@/features/news/main/news-list";
import { getLatestNews } from "@/shared/dummy-data/news";
import { ReactNode, useEffect, useState } from "react";

export default function LatestNewsPage(): ReactNode {
  const latestNews = getLatestNews();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("서버 오류");
        throw new Error("서버 오류");
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>LatestNews Page</h1>
      <NewsList news={news} />
    </>
  );
}
