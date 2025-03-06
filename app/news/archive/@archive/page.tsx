import { getAvailableNewsYears } from "@/shared/dummy-data/news";
import Link from "next/link";
import { ReactNode } from "react";

export default function ArchivePage(): ReactNode {
  const links = getAvailableNewsYears();
  return (
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
  );
}
