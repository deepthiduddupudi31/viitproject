"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, Search } from "lucide-react"; 
import { navItems, type NavItem } from "../lib/navItems."; 
import { motion, AnimatePresence } from "framer-motion";

// --- FINAL SOLID NestedDropdown ---
const NestedDropdown = ({ items }: { items: NavItem[] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            // CHANGE: Removed transparency for a solid, readable background
            className="absolute left-full -top-2 ml-4 w-72 bg-white border border-gray-200 rounded-md shadow-lg"
        >
            <ul className="py-2 px-2 max-h-[70vh] overflow-y-auto">
                {items.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.path}
                            className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-[#005f9e] hover:text-white rounded-md transition-colors duration-150"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

// --- FINAL SOLID DropdownMenu ---
const DropdownMenu = ({ items }: { items: NavItem[] }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    useEffect(() => {
        if (activeSubMenu) { document.body.classList.add('no-scroll'); } 
        else { document.body.classList.remove('no-scroll'); }
        return () => { document.body.classList.remove('no-scroll'); };
    }, [activeSubMenu]);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -5, transition: { duration: 0.15, ease: "easeOut" as const } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const, staggerChildren: 0.04 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            style={{ transformOrigin: 'top' }}
            // CHANGE: Removed transparency for a solid, readable background
            className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl"
        >
            <motion.ul className="py-2 px-2">
                {items.map((item) => (
                    <motion.li
                        key={item.label}
                        variants={itemVariants}
                        className="relative"
                        onMouseEnter={() => item.children && setActiveSubMenu(item.label)}
                        onMouseLeave={() => item.children && setActiveSubMenu(null)}
                    >
                        <Link
                            href={item.path}
                            className={`flex items-center justify-between w-full px-3 py-2.5 text-sm text-left rounded-md transition-colors duration-150 ${
                                activeSubMenu === item.label
                                ? "bg-[#005f9e] text-white"
                                : "text-gray-800 hover:bg-gray-100" // Hover for solid background
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
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

// --- DesktopNav (Unchanged) ---
const DesktopNav = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setActiveMenu(label);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => setActiveMenu(null), 200);
    };

    return (
        <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center h-full text-sm font-medium">
                {navItems.map((item) => (
                    <li
                        key={item.label}
                        className="relative h-full flex items-center group"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href={item.path}
                            className="relative px-4 py-2 flex items-center gap-1.5 h-full text-white/90 rounded-full transition-colors duration-200 group-hover:bg-white/20"
                        >
                            <span>{item.label}</span>
                            {item.children && (
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
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

// --- Mobile Navigation Components (Unchanged) ---
const MobileNavItem = ({ item, closeMenu }: { item: NavItem, closeMenu: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    if (!item.children) {
        return <li><Link href={item.path} onClick={closeMenu} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100">{item.label}</Link></li>;
    }
    return (
        <li className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center px-4 py-3 text-base text-gray-700 hover:bg-gray-100">
                <span>{item.label}</span><ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 bg-gray-50">
                        {item.children.map(child => <MobileNavItem key={child.label} item={child} closeMenu={closeMenu} />)}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
};

const MobileNav = ({ isOpen, closeMenu }: { isOpen: boolean, closeMenu: () => void }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={closeMenu}>
                <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="font-bold text-lg">Menu</h2>
                        <button onClick={closeMenu} className="p-1"><X className="h-6 w-6 text-gray-600" /></button>
                    </div>
                    <ul className="py-2">
                        {navItems.map(item => <MobileNavItem key={item.label} item={item} closeMenu={closeMenu} />)}
                    </ul>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

// --- Main Header Component with FINAL REFINEMENTS ---
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
        { label: "Careers", path: "/careers" },
        { label: "Alumni", path: "/alumni" },
        { label: "VIIT Advantages", path: "/advantages" },
    ];

    const placeholderHeight = (topBarRef.current?.offsetHeight ?? 0) + 56;

    return (
        <>
            <header className="relative w-full z-50 bg-white shadow-sm">
                <div ref={topBarRef} className="border-b border-gray-200">
                    <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.jpg" alt="VIIT Logo" width={750} height={55} className="h-auto" priority />
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
                        ? 'fixed top-0 left-0 right-0 py-2' 
                        : 'relative bg-gradient-to-r from-[#005f9e] to-[#0077c2] rounded-b-2xl'
                    }`
                }>
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className={`flex items-center justify-between transition-all duration-300 
                            ${isSticky 
                                ? 'h-16 bg-gradient-to-r from-[#005f9e]/90 to-[#0077c2]/90 backdrop-blur-lg rounded-xl shadow-lg' 
                                : 'h-14'
                            }`
                        }>
                            <DesktopNav />
                            <div className="lg:hidden">
                                <button onClick={() => setMobileMenuOpen(true)} className="p-2 rounded-md text-white hover:bg-white/20" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isSticky && <div style={{ height: placeholderHeight }} />}
            
            <MobileNav isOpen={isMobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />
        </>
    );
}
