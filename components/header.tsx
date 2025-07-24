"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Search } from "lucide-react";
import { navItems, type NavItem } from "../lib/navItems.";
import { motion, AnimatePresence } from "framer-motion";

// Nested Dropdown for Desktop
const NestedDropdown = ({ items }: { items: NavItem[] }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    className="absolute left-full -top-px w-72 bg-white rounded-r-lg shadow-lg border"
  >
    <ul className="py-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.path}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

// Dropdown Menu for Desktop
const DropdownMenu = ({ items }: { items: NavItem[] }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-lg shadow-xl border"
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
              className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors ${
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

// Desktop Navigation with Professional Underline Animation
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
              className="relative px-4 py-2 flex items-center gap-1.5 h-full transition-colors duration-200 hover:text-white"
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              )}
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-1 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
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

// Mobile Navigation Items
const MobileNavItem = ({
  item,
  closeMenu,
}: {
  item: NavItem;
  closeMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.path}
          onClick={closeMenu}
          className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
        >
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
        <ChevronRight
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 bg-gray-50"
          >
            {item.children.map((child) => (
              <MobileNavItem
                key={child.label}
                item={child}
                closeMenu={closeMenu}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

// Mobile Navigation Drawer
const MobileNav = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => (
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
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-lg">Menu</h2>
            <Button onClick={closeMenu} className="p-1">
              <X className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                closeMenu={closeMenu}
              />
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Main Header
export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const topBarRef = React.useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Stickiness effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        setSticky(window.scrollY > topBarRef.current.offsetHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const utilityLinks = [
    { label: "Careers", path: "/careers" },
    { label: "Alumni", path: "/alumni" },
    { label: "VIIT Advantages", path: "/advantages" },
  ];

  return (
    <>
      <header className="relative w-full z-50 bg-white shadow-sm">
        {/* Top Bar with Logo & Utility Links */}
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
              {utilityLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  href={path}
                  className="text-gray-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Button className="text-gray-500 hover:text-blue-700">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Sticky) */}
        <div
          className={`bg-linkedin text-white transition-all duration-300 ${
            isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : "relative"
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

      {isSticky && <div className="h-14" />}
      <MobileNav
        isOpen={isMobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
