<<<<<<< HEAD
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Search } from "lucide-react";
import { navItems, type NavItem } from "../lib/navItems."; // Ensure this path is correct
import { motion, AnimatePresence } from "framer-motion";

// --- Reusable Dropdown Components for Desktop ---

const NestedDropdown = ({ items }: { items: NavItem[] }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    className="absolute left-full -top-px w-72 bg-white rounded-r-lg shadow-lg border-l-0 border"
  >
    <ul className="py-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/100"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const DropdownMenu = ({ items }: { items: NavItem[] }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-xl border-t-0 border"
    >
      <ul className="py-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => item.children && setActiveSubMenu(item.label)}
            onMouseLeave={() => item.children && setActiveSubMenu(null)}
          >
            <Link
              href={item.path}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left transition-colors ${
                activeSubMenu === item.label
                  ? "bg-linkedin text-white"
                  : "text-gray-800 hover:bg-blue-50"
              }`}
            >
              <span>{item.label}</span>
              {item.children && <ChevronRight className="h-4 w-4" />}
            </Link>
            <AnimatePresence>
              {item.children && activeSubMenu === item.label && (
                <NestedDropdown items={item.children} />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// --- Desktop Navigation Component ---

const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  return (
    <nav className="hidden lg:flex items-center h-full">
      <ul className="flex items-center h-full text-sm">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative h-full flex items-center group"
            onMouseEnter={() => setActiveMenu(item.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.path}
              className="px-4 py-2 flex items-center gap-1.5 h-full transition-colors duration-200 hover:bg-white/10"
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>
            <AnimatePresence>
              {item.children && activeMenu === item.label && (
                <DropdownMenu items={item.children} />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- Mobile Navigation Components ---

const MobileNavItem = ({ item, closeMenu }: { item: NavItem, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link href={item.path} onClick={closeMenu} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100">
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
      >
        <span>{item.label}</span>
        <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 bg-gray-50"
          >
            {item.children.map(child => (
              <MobileNavItem key={child.label} item={child} closeMenu={closeMenu} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const MobileNav = ({ isOpen, closeMenu }: { isOpen: boolean, closeMenu: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={closeMenu}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={closeMenu} className="p-1">
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <ul className="py-2">
            {navItems.map(item => <MobileNavItem key={item.label} item={item} closeMenu={closeMenu} />)}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- Main Header Component ---

export default function Header() {
  // CHANGED: 1. Add state for stickiness and a ref for the top bar
  const [isSticky, setSticky] = useState(false);
  const topBarRef = React.useRef<HTMLDivElement>(null);
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CHANGED: 2. Add a useEffect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        // Set sticky to true if scroll position is past the top bar's height
        setSticky(window.scrollY > topBarRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  const utilityLinks = [
    { label: "Careers", path: "/careers" },
    { label: "Alumni", path: "/alumni" },
    { label: "VIIT Advantages", path: "/advantages" },
  ];

  return (
    <>
      {/* CHANGED: 3. The main header tag is no longer 'fixed'. It's now relative. */}
      <header className="relative w-full z-50 bg-white shadow-sm">
        {/* Top Bar with Logo and Utility Links */}
        <div ref={topBarRef} className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="VIIT Logo"
                width={750}
                height={55}
                className="h-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {utilityLinks.map(({label, path}) => (
                <Link key={label} href={path} className="text-gray-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors">
                  {label}
                </Link>
              ))}
              <button className="text-gray-500 hover:text-blue-700"><Search className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        {/* CHANGED: 4. This container now has conditional classes for stickiness */}
        <div 
          className={`bg-linkedin text-white transition-all duration-300 ${
            isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
            <DesktopNav />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-white/20"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* CHANGED: 5. Add a placeholder to prevent content from jumping up when the nav becomes sticky */}
      {isSticky && <div className="h-14" />}
      
      <MobileNav isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />
    </>
  );
=======
"use client"

import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Search, Menu } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="text-white w-full z-50 fixed top-0 transition-all duration-300 bg-none">
      {/* Top Bar - remains fixed and without blur */}
      <div className="border-b bg-linkedin border-linkedin z-30 relative">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                
                  <Image 
  src="/clg logo(1)(1).png" 
  // src="https://vignaniit.edu.in/images/09%20copy-1.jpg"

  alt="Description of image"
  width={200} 
  height={300}
/>

                
              {/* </div> */}
              {/* <span className="text-sm">CAMPUSES</span>
              <span className="text-xs">›</span> */}
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
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

      <div className={clsx(
        "w-full z-20 transition-all duration-300",
        scrolled ? "bg-white text-black" : "text-white backdrop-blur-md shadow-md"
      )}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                <Image
                  src="/Vignan_logo.png" // Use your actual logo file name here
                  alt="VIIT Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold ">VIIT</h1>
                <p className="text-xs ">Apply Knowledge. Improve Life!™</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                ["About", "/about"],
                ["Admissions", "/admissions"],
                ["Academics", "/academics"],
                ["Career Development Center", "/career-development"],
                ["Research", "/research"],
                ["Campus Life", "/campus-life"]
              ].map(([label, path]) => (
                <Link
                  key={label}
                  href={path}
                  className="relative  hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Button variant="ghost" size="sm" className="lg:hidden ">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
>>>>>>> 64e2da18118fcbfa5f9045783253d47e7e36146f
}
