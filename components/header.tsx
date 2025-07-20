"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white w-full z-50 fixed top-0 transition-all duration-300 bg-none">
      {/* Top Bar */}
      <div className="border-b bg-linkedin border-linkedin z-30 relative">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/clg logo(1)(1).png"
              alt="College Logo"
              width={200}
              height={300}
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            {["careers", "alumni", "advantages"].map((page, idx) => (
              <Link
                key={idx}
                href={`/${page}`}
                className="hover:underline underline-offset-4 decoration-white/70 transition duration-200 hover:text-blue-600"
              >
                {page === "advantages" ? "VIIT Advantages" : page[0].toUpperCase() + page.slice(1)}
              </Link>
            ))}
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-600">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-600">
              360
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={clsx(
          "w-full z-20 transition-all duration-300",
          scrolled ? "bg-white text-black" : "text-white backdrop-blur-md shadow-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/Vignan_logo.png"
                  alt="VIIT Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">VIIT</h1>
                <p className="text-xs">Apply Knowledge. Improve Life!™</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                ["About", "/about"],
                ["Admissions", "/admissions"],
                ["Academics", "/academics"],
                ["Examinations", "/examinations"],
                ["Career Development Center", "/career-development"],
                ["Research", "/research"],
                ["Campus Life", "/campus-life"]
              ].map(([label, path]) => (
                <Link
                  key={label}
                  href={path}
                  className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-white shadow-md text-black space-y-3">
            {[
              ["About", "/about"],
              ["Admissions", "/admissions"],
              ["Academics", "/academics"],
              ["Examinations", "/examinations"],
              ["Career Development Center", "/career-development"],
              ["Research", "/research"],
              ["Campus Life", "/campus-life"],
            ].map(([label, path]) => (
              <Link
                key={label}
                href={path}
                className="block border-b py-2 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
