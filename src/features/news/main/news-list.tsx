import { Newses } from "@/entities/news/news.types";
import Image from "next/image";
import Link from "next/link";

interface NewsItemProps {
  news: Newses;
}

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={200}
              height={200}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
