import Link from "next/link";

export default function BlogPage() {
  return <main>
    <h1>The Blog</h1>
    <h2><Link href="/blog/post-1">Post 1</Link></h2>
    <h2><Link href="/blog/post-2">Post 1</Link></h2>
  </main>
}