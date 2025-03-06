import Link from "next/link";
import NavLink from "./nav-link";

export default function NewsPageMainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/news">NextLevel News</Link>
      </div>
      <ul>
        <li>
          <NavLink href="/news">News Home</NavLink>
        </li>
        <li>
          <NavLink href="/news/archive">Archive Home</NavLink>
        </li>
        <li>
          <NavLink href="/food">Food</NavLink>
        </li>
      </ul>
    </header>
  );
}
