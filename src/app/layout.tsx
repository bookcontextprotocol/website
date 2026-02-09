import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookcontextprotocol.com"),
  title: "Book Context Protocol — Licensed Book Retrieval for AI",
  description:
    "Bring books, papers, and deep reference material into AI workflows with clean citations, usage policies, and a path to paying rights holders. Open spec.",
  openGraph: {
    title: "Book Context Protocol — Licensed Book Retrieval for AI",
    description:
      "Bring books, papers, and deep reference material into AI workflows with clean citations, usage policies, and a path to paying rights holders. Open spec.",
    url: "https://bookcontextprotocol.com",
    siteName: "Book Context Protocol",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Context Protocol — Licensed Book Retrieval for AI",
    description:
      "Bring books, papers, and deep reference material into AI workflows with clean citations, usage policies, and a path to paying rights holders. Open spec.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
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
        <Analytics />
      </body>
    </html>
  );
}
