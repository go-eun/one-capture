import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babitalk",
  description: "바비톡 이벤트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <div className="bg-white max-w-[430px] mx-auto min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
