import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeFAB from "@/components/layout/ThemeFAB";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Edit Benyi — Real Estate & Mortgage Guidance Under One Roof",
    template: "%s | Edit Benyi",
  },
  description:
    "Get real estate and mortgage guidance from one trusted advisor. Buying, selling, financing, and investing — all under one roof in Southern California.",
  openGraph: {
    type: "website",
    siteName: "Edit Benyi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="editorial" className={`${newsreader.variable} ${hankenGrotesk.variable}`}>
      <head>
        {/* Prevent theme flash before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t&&['editorial','trust','minimal'].includes(t)){document.documentElement.setAttribute('data-theme',t);}})();`,
          }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <ThemeFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
