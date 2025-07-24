import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import LoaderWrapper from "../components/LoaderWrapper";
import { LoaderProvider } from "../components/LoaderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIIT - Apply Knowledge. Improve Life!",
  description: "VIIT - A premier educational institution focused on academic excellence and innovation.",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Roboto.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      <body className={inter.className}>
        <LoaderProvider>
          <LoaderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </LoaderWrapper>
        </LoaderProvider>
      </body>
    </html>
  );
}
