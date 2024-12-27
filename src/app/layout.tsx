import { pretendard, sen } from "@/fonts/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${sen.variable}`}>
      <body className="font-pre">{children}</body>
    </html>
  );
}
