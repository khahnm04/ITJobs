import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";

export const metadata: Metadata = {
  title: "Dự án 3",
  description: "Website tuyển dụng IT tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
