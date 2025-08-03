"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Note: Corrected the import path to be standard
import { navItems, type NavItem, type MegaMenuColumn } from "../lib/navItems.";


// --- MEGA MENU COMPONENT (MODIFIED FOR SIZE) ---
// Increased width and added a fixed minimum height for a larger, consistent panel.
const MegaMenu = ({ columns }: { columns: MegaMenuColumn[] }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const mainColumns = columns.length >= 3 ? columns.slice(0, -1) : columns;
  const featuredColumn = columns.length >= 3 ? columns[columns.length - 1] : null;
  
  const getGridCols = (count: number) => {
    if (count === 1) return "lg:grid-cols-1";
    if (count === 2) return "lg:grid-cols-2";
    return "lg:grid-cols-3";
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 w-full mt-4"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden">
          {/* Added min-h-[480px] to ensure consistent height across all menus */}
          <div className="flex divide-x divide-gray-200/70 min-h-[480px]">
            {/* Left side: Main navigation links - increased padding and gaps */}
            <div className="flex-grow px-10 py-12">
              <div className={`grid grid-cols-1 md:grid-cols-2 ${getGridCols(mainColumns.length)} gap-x-12 gap-y-10`}>
                {mainColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3 border-b">
                      {column.title}
                    </h3>
                    <ul className="space-y-3.5 mt-4">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.path}
                            className="block text-gray-800 hover:text-[#005f9e] transition-colors duration-200 text-sm font-medium"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Featured Column - increased width and padding */}
            {featuredColumn && (
              <div className="w-full max-w-md shrink-0 px-10 py-12 bg-gray-50/60">
                 <div className="h-full">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3 border-b">
                      {featuredColumn.title}
                    </h3>
                    <ul className="space-y-2 mt-4">
                      {featuredColumn.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.path}
                            className="block p-2.5 rounded-md hover:bg-gray-200/70 transition-colors duration-200"
                          >
                            <p className="font-semibold text-gray-800 text-sm">{link.label}</p>
                            {(link as any).description && <p className="text-xs text-gray-500 mt-1">{(link as any).description}</p>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- DESKTOP NAVIGATION (Unchanged) ---
const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav className="hidden lg:flex justify-center h-full relative">
      <ul className="flex items-center h-full text-sm font-medium gap-x-2">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.path}
              className={`relative px-4 py-2 flex items-center gap-1.5 h-full rounded-md transition-colors duration-200
                ${activeMenu === item.label
                  ? 'bg-white/20 text-white'
                  : 'text-white/90 hover:bg-white/10'
                }`}
            >
              <span>{item.label}</span>
              {item.megaMenu && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`}
                />
              )}
            </Link>

            <AnimatePresence>
              {activeMenu === item.label && item.megaMenu && (
                <MegaMenu columns={item.megaMenu} />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};


// --- MOBILE NAVIGATION (Unchanged from your original code) ---
const MobileNavItem = ({ item, closeMenu }: { item: NavItem, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const children = item.megaMenu
    ? item.megaMenu.flatMap(col => col.links)
    : item.children;

  if (!children || children.length === 0) {
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
        className="w-full flex justify-between items-center px-4 py-3 text-base text-left text-gray-700 hover:bg-gray-100"
      >
        <span>{item.label}</span>
        <ChevronRight className={`h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4 bg-gray-50"
          >
            {children.map(child => (
              <li key={child.label}>
                <Link
                  href={child.path}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-200"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const MobileNav = ({ isOpen, closeMenu, navItems }: { isOpen: boolean, closeMenu: () => void, navItems: NavItem[] }) => (
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
          className="fixed top-0 left-0 z-40 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={closeMenu} className="p-1">
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <ul className="py-2">
            {navItems.map(item => (
              <MobileNavItem key={item.label} item={item} closeMenu={closeMenu} />
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- MAIN HEADER COMPONENT (Unchanged from your original code) ---
export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const topBarRef = React.useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        setSticky(window.scrollY > topBarRef.current.offsetHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const utilityLinks = [
    { label: "LMS", path: "https://elearning.vignaniit.edu.in/" },
    { label: "ECAP", path: "https://webprosindia.com/vignanit/" },
    { label: "V-TP", path: "https://taskplanner.vignaniit.edu.in/login" },
    { label: "NBA", path: "https://vignaniit.edu.in/NBA%202024-2026.pdf" },
  ];

  const placeholderHeight = (topBarRef.current?.offsetHeight ?? 0) + 56;

  return (
    <>
      <header className="relative w-full z-40 bg-white shadow-sm">
        <div ref={topBarRef} className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="VIIT Logo" width={200} height={55} className="h-auto w-auto" priority />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {utilityLinks.map(({ label, path }) => (
                <Link key={label} href={path} className="text-gray-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors">{label}</Link>
              ))}
              <button className="text-gray-500 hover:text-blue-700"><Search className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-300
          ${isSticky
            ? 'fixed top-0 left-0 right-0 z-40'
            : 'relative bg-gradient-to-r from-[#005f9e] to-[#0077c2]'
          }`
        }>
          <div className={`mx-auto transition-all duration-300
            ${isSticky ? 'max-w-screen-xl py-2' : ''}
          `}>
            <div className={`flex items-center justify-between lg:justify-center transition-all duration-300
              ${isSticky
                ? 'h-16 bg-gradient-to-r from-[#005f9e]/95 to-[#0077c2]/95 backdrop-blur-lg rounded-xl shadow-lg px-4'
                : 'h-14 max-w-screen-xl mx-auto px-4'
              }`
            }>
              <div className="flex-grow flex justify-center">
                <DesktopNav navItems={navItems} />
              </div>
              <div className="absolute left-4 lg:hidden">
                <button onClick={() => setMobileMenuOpen(true)} className=" p-2 text-white" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isSticky && <div style={{ height: placeholderHeight }} />}
      <MobileNav isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} navItems={navItems} />
    </>
  );
}
