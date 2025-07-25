<<<<<<< HEAD
import type React from "react";
=======
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
<<<<<<< HEAD
import LoaderWrapper from "../components/LoaderWrapper";
import { LoaderProvider } from "../components/LoaderContext";
=======
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "VIIT - Apply Knowledge. Improve Life!",
  description: "VIIT - A premier educational institution focused on academic excellence and innovation.",
  generator: "v0.dev",
=======
  title: "VIIT  - Apply Knowledge. Improve Life!",
  description: "VIIT  - A premier educational institution focused on academic excellence and innovation.",
    generator: 'v0.dev'
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      
      <body className={inter.className}>
        <LoaderProvider>
          <LoaderWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </LoaderWrapper>
        </LoaderProvider>
=======
      <head>
        
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
      </body>
    </html>
  );
}
<<<<<<< HEAD
=======

>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
