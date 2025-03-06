import Link from "next/link";
import { ReactNode } from "react";
import { DUMMY_NEWS } from "@/shared/dummy-data/dummy-news";

export default function NewsPage(): ReactNode {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              {news.title}
              <img
                src={`/images/news/${news.image}`}
                alt={news.title}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
