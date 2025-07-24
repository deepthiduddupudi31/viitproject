import type React from "react";
import type { Metadata } from "next";
// 1. Change the font import from Poppins to Nunito_Sans
import { Poppins  } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import LoaderWrapper from "../components/LoaderWrapper";

// 2. Configure the Nunito Sans font with the necessary weights
const nunitoSans = Poppins ({
  subsets: ["latin"],
  // We'll keep the same weights to match the font classes used in the components
  weight: ['400', '500', '600', '700'] 
});

// Your existing metadata is preserved
export const metadata: Metadata = {
  title: "VIIT  - Apply Knowledge. Improve Life!",
  description: "VIIT  - A premier educational institution focused on academic excellence and innovation.",
  generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 3. Apply the Nunito Sans font class to the entire application */}
      <body className={nunitoSans.className}>
        <LoaderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoaderWrapper>
      </body>
    </html>
  );
}
