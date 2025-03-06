import { ReactNode } from "react";
import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import NewsList from "@/features/news/main/news-list";

export default function NewsPage(): ReactNode {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
