import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import LoaderWrapper from "../components/LoaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIIT  - Apply Knowledge. Improve Life!",
  description: "VIIT  - A premier educational institution focused on academic excellence and innovation.",
    generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoaderWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}

