import { Metadata } from "next";
import "./globals.css";

// Metadata for SEO
export const metadata = {
  title: "NextJS Easy Template",
  description: "NextJS | TailwindCSS | ChakraUI easy template by Li Yuxuan",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "NextJS Easy Template",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
  applicationName: "NextJS Easy Template",
  keywords: ["template"],
  authors: [{ name: "Li Yuxuan", url: "https://xmliszt.github.io/" }],
  creator: "Li Yuxuan",
  alternates: {
    canonical: "http://localhost:3000",
  },
  category: "technology",
  openGraph: {
    title: "NextJS Easy Template",
    description: "NextJS | TailwindCSS | ChakraUI easy template by Li Yuxuan",
    url: "http://localhost:3000",
    siteName: "Taboo AI",
    images: [
      {
        url: "https://i.imgur.com/IIP6UzK.jpeg",
        width: 800,
        height: 600,
        alt: "NextJS Easy Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextJS Easy Template",
    description: "NextJS | TailwindCSS | ChakraUI easy template by Li Yuxuan",
    siteId: "1704579643",
    creator: "@xmliszt",
    creatorId: "1704579643",
    images: ["https://i.imgur.com/IIP6UzK.jpeg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
