import Link from "next/link";

export default function NewsPageMainHeader() {
  return (
    <header id="main-header">
      <div id ="logo">
        <Link href="/news">NextLevel News</Link>
      </div>
      <ul>
        <li><Link href="/news">News Home</Link></li>
        <li><Link href="/food">Food Home</Link></li>
      </ul>
    </header>
  )
}