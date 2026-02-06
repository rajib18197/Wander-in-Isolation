import { Work_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "../components/Header";

import { BLOG_TITLE, LIGHT_TOKENS, SITE_URL } from "../constants";

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
export const libre = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

// Compound Exercise

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wander in Isolation • A blog by Rajib Das",
    // template: "%s — Rajib Das",
  },
  description:
    "Hey there, Welcome! I'm glad you're here. My name is Rajib Das and I'm a Software Engineer. I've been sharing educational lessons on various software engineering concepts and tools as I learn them. I'm absolutely positive you'll love the way I articulate them and find them useful.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BLOG_TITLE,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: BLOG_TITLE,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
  },

  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={LIGHT_TOKENS}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${workSans.variable} ${libre.variable} antialiased`}
        style={{
          backgroundColor: "oklch(12.9% 0.042 264.695)",
          color: "white",
        }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
