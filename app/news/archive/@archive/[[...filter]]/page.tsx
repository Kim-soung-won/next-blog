import NewsList from "@/features/news/main/news-list";
import {
  getAvailableNewsYears,
  getNewsForYear,
} from "@/shared/dummy-data/news";
import Link from "next/link";

interface Params {
  filter: string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { filter } = await params;
  return {
    title: `News Archive - ${filter?.join(" ") || "All"}`,
  };
}

export default async function FilterNewsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for the selected</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/news/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
