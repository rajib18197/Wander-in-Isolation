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

export const metadata = {
  title: "Code & Words",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={LIGHT_TOKENS}>
      <body
        className={`${inter.className} antialiased`}
        style={{ backgroundColor: "#101d37", color: "white" }}
      >
        <div className="flex flex-col gap-20 mt-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
