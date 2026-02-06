import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Header from "../components/Header";

import {
  BLOG_TITLE,
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from "../constants";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Code & Words",
//   description: "Personal Website",
// };

// app/layout.js - Add this to your root layout

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "Code & Words",
    template: "%s | Your Name",
  },
  description: "Articles about web development, programming, and technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000/",
    siteName: "Your Name's Blog",
    images: [
      {
        url: "/og-default.png", // Create a default OG image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Your Name's Blog",
      },
    ],
  },

  // Twitter defaults
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
  },

  // RSS feed link
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
        {/* RSS feed link in <head> */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        style={{
          backgroundColor: "oklch(12.9% 0.042 264.695)",
          color: "white",
        }}
      >
        <Header />
        <main>{children}</main>
        {/* <footer></footer> */}
      </body>
    </html>
  );
}
