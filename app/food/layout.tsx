import "./globals.css";
import MainHeader from "@/features/food/header/main-header";

/**
 * Nextjs는 모든 page, layout에 지정된 metadata를 수집하여 사용자에게 보여줍니다.
 * 이 metadata는 SEO(Search Engine Optimization)에 사용된다.
 * title: 페이지의 제목
 * description: 페이지의 설명
 * 등등 https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * 
 */
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
