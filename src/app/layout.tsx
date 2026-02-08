import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Context Protocol",
  description:
    "Licensed, citable retrieval for books, papers, and deep reference material — built for AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${GeistPixelSquare.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
