import NewsList from "@/features/news/main/news-list";
import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";
import { getNewsForYear } from "@/shared/dummy-data/news";
import { ReactNode } from "react";

interface Params {
  year: string;
}

export default function FilterNewsPage({
  params,
}: {
  params: Params;
}): ReactNode {
  const newsThisYear = getNewsForYear(params.year);
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={newsThisYear} />
    </>
  );
}
