// next.js 에서 페이지 새로고침 없이 route 수정 및 렌더링을 지원하는 기능을 제공합니다.
import Link from "next/link";

export default function AwesomPage() {
  return <main>
    <h1>NextJS Is Awesome!</h1>
    <h2><Link href="/about">Go Awesome</Link></h2>
  </main>
}