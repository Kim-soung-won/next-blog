import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/blog">
        <img
          src={logo.src}
          alt="Mobile phone with posts feed on it"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/blog/feed">Feed</Link>
          </li>
          <li>
            <Link
              className="cta-link"
              href="/blog/new-post"
            >
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
