import "./globals.css";
import MainHeader from "@/features/header/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
