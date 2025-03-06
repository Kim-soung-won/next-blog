import NewsPageMainHeader from "@/features/news/header/main-header";
import "./globals.css";

/**
 * Nextjs는 모든 page, layout에 지정된 metadata를 수집하여 사용자에게 보여줍니다.
 * 이 metadata는 SEO(Search Engine Optimization)에 사용된다.
 * title: 페이지의 제목
 * description: 페이지의 설명
 * 등등 https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * 
 */
export const metadata = {
  title: "News Page",
  description: "News",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="page">
        <NewsPageMainHeader />
        {children}
      </div>
    </>
  );
}
