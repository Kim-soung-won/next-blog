import Link from "next/link";

export default function AwesomPage() {
  return <main>
    <h1>About NextJS</h1>
    <h2><Link href="/awesome">Go Awesome</Link></h2>
  </main>
}