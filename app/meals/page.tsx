import Link from "next/link";

export default function MealsPage() {
  return <main>
    <h1>The Blog</h1>
    <h2><Link href="/meals/post-1">Post 1</Link></h2>
    <h2><Link href="/meals/post-2">Post 2</Link></h2>
  </main>
}