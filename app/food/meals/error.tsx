// 모든 에러에 대해 대응하기 위해 client side rendering을 사용한다.
'use client';

export default function Error({ error }) {
  return <main className="error">
    <h1>Error!</h1>
    <p>Failed to fetch Meals Data</p>
    </main>;
}