import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
