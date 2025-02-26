// 폴더 명[] 안의 id를 받아올 수 있다.
interface Params {
  id: string;
}

export default function BlogPostPage({ params }: { params: Params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.id}</p>
    </main>
  )
}