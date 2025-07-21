"use client"

import { useEffect, useRef, useState, useLayoutEffect } from "react"
import { Button } from "../components/ui/button"
import { Search, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import Image from "next/image"

const NAVBAR_HEIGHT = 64; // Adjust if your navbar height is different

const campusLifeColumns = [
  {
    heading: "Facilities",
    links: [
      { label: "Infrastructure", href: "/campus-life/infrastructure" },
      { label: "Library", href: "/library" },
      { label: "IT Infrastructure", href: "/campus-life/it-infrastructure" },
      { label: "Transport", href: "/campus-life/transport" },
      { label: "Hostels", href: "/campus-life/hostels" },
      { label: "Cafeteria", href: "/campus-life/cafeteria" },
      { label: "Physical Education", href: "/campus-life/physical-education" },
      { label: "Medical", href: "#" },
    ],
  },
];

const cellsColumns = [
  {
    heading: "Cells & Clubs",
    links: [
      { label: "Discipline Cell", href: "/cells/discipline" },
      { label: "ED Cell", href: "/cells/ed-cell" },
      { label: "Green Club", href: "/cells/green-club" },
      { label: "Idea Lab", href: "/cells/idea-lab" },
      { label: "IIC Cell", href: "/cells/iic-cell" },
      { label: "IPR Cell", href: "/cells/ipr-cell" },
      { label: "International Student Cell", href: "/cells/international-student-cell" },
      { label: "Media Cell", href: "/cells/media-cell" },
      { label: "NSS Unit", href: "/cells/nss-unit" },
      { label: "Research Cell" },
      { label: "Skill Development Lab" },
      { label: "Student Activity Council" },
      { label: "WEP Cell" },
    ],
  },
];

// Fixed Size Mega Menu Component
function CampusLifeMegaMenu({ open, anchorRef }: { open: boolean, anchorRef: React.RefObject<HTMLDivElement> }) {
  const [menuPos, setMenuPos] = useState({ left: 0, top: 0, width: 470 });
  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const scrollX = window.scrollX || window.pageXOffset;
      let menuWidth = 470;
      let left = rect.left + scrollX + rect.width / 2 - menuWidth / 2;
      const minMargin = 12;
      if (window.innerWidth < menuWidth + minMargin * 2) {
        menuWidth = window.innerWidth - minMargin * 2;
        left = minMargin;
      } else {
        if (left < minMargin) left = minMargin;
        if (left + menuWidth > window.innerWidth - minMargin) left = window.innerWidth - menuWidth - minMargin;
      }
      // Set top to the bottom of the Campus Life button plus a small gap, relative to the viewport only
      const top = rect.bottom + 8; // 8px gap, no window.scrollY
      setMenuPos({
        left,
        top,
        width: menuWidth
      });
    }
  }, [open, anchorRef]);
  return (
    <div
      className={clsx(
        "fixed z-40 bg-white shadow-2xl border border-gray-200",
        "transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
        open
          ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
          : "opacity-0 pointer-events-none scale-95 -translate-y-4"
      )}
      style={{
        top: menuPos.top,
        left: menuPos.left,
        height: '495px',
        width: menuPos.width,
        borderRadius: '18px',
        overflow: 'hidden',
        maxWidth: '98vw',
        maxHeight: '90vh',
        boxShadow: '0 8px 32px 0 rgba(0, 119, 181, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)',
        borderTop: '4px solid #0077B5',
        transform: 'none',
        overflowY: 'auto', // Added to make menu scrollable if too tall
      }}
    >
      {/* Arrow/triangle at the top center */}
      <div className="absolute left-1/2 z-50" style={{ top: '-20px', transform: 'translateX(-50%)' }}>
        <div className="w-6 h-6 bg-[#0077B5] rotate-45 border-t border-l border-[#0077B5] shadow-md" style={{ boxShadow: '0 2px 8px 0 rgba(0,119,181,0.10)' }} />
      </div>
      {/* Centered content container, no flex */}
      <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-start pl-12 pr-4">
        {/* Compact header section */}
        <div className="text-center mb-4 mt-4 px-2">
        </div>

        {/* Content grid, more vertical space */}
        <div className="flex-1 flex items-start w-full">
          <div className="w-80">
            {campusLifeColumns.map((col, colIndex) => (
              <div key={col.heading} className="space-y-4">
                {/* Column header */}
                <div className="border-b-2 border-[#0077B5] pb-2 text-left">
                  <h3 className="text-xl font-bold text-[#0077B5] text-left">{col.heading}</h3>
                </div>
                {/* Links list */}
                <ul className="space-y-2 text-left">
                  {col.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      {link.href && link.href !== "#" ? (
                        <Link
                          href={link.href}
                          className="group flex items-center text-lg text-gray-700 hover:text-[#0077B5] transition-all duration-300 relative w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                        >
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0077B5] group-hover:w-full transition-all duration-300"></span>
                          <span className="relative z-10">{link.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0077B5]">→</span>
                        </Link>
                      ) : link.label === "Infrastructure" ? (
                        <a
                          href="/campus-life/infrastructure"
                          className="group flex items-center text-lg text-gray-700 hover:text-[#0077B5] transition-all duration-300 relative w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                        >
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0077B5] group-hover:w-full transition-all duration-300"></span>
                          <span className="relative z-10">{link.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0077B5]">→</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="group flex items-center text-lg text-gray-700 hover:text-[#0077B5] transition-all duration-300 relative w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                        >
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0077B5] group-hover:w-full transition-all duration-300"></span>
                          <span className="relative z-10">{link.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0077B5]">→</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom call to action */}
        <div className="text-center mt-6 pt-4 border-t border-gray-200 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-4 text-base">Ready to explore more?</p>
          <Link 
            href="/campus-life"
            className="inline-flex items-center px-6 py-2 bg-[#0077B5] text-white rounded-full text-base font-semibold hover:bg-[#005885] transition-all duration-300 transform hover:scale-105"
          >
            View Full Campus Life
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Add a CellsMegaMenu component, styled like CampusLifeMegaMenu, but using cellsColumns and anchorRef for 'Cells'
function CellsMegaMenu({ open, anchorRef }: { open: boolean, anchorRef: React.RefObject<HTMLDivElement> }) {
  const [menuPos, setMenuPos] = useState({ left: 0, top: 0, width: 470 });
  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      const scrollX = window.scrollX || window.pageXOffset;
      let menuWidth = 470;
      let left = rect.left + scrollX + rect.width / 2 - menuWidth / 2;
      const minMargin = 12;
      if (window.innerWidth < menuWidth + minMargin * 2) {
        menuWidth = window.innerWidth - minMargin * 2;
        left = minMargin;
      } else {
        if (left < minMargin) left = minMargin;
        if (left + menuWidth > window.innerWidth - minMargin) left = window.innerWidth - menuWidth - minMargin;
      }
      const top = rect.bottom + 8;
      setMenuPos({
        left,
        top,
        width: menuWidth
      });
    }
  }, [open, anchorRef]);
  return (
    <div
      className={clsx(
        "fixed z-40 bg-white shadow-2xl border border-gray-200",
        "transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
        open
          ? "opacity-100 pointer-events-auto scale-100 translate-y-0"
          : "opacity-0 pointer-events-none scale-95 -translate-y-4"
      )}
      style={{
        top: menuPos.top,
        left: menuPos.left,
        height: '495px',
        width: menuPos.width,
        borderRadius: '18px',
        overflow: 'hidden',
        maxWidth: '98vw',
        maxHeight: '90vh',
        boxShadow: '0 8px 32px 0 rgba(0, 119, 181, 0.25), 0 2px 8px 0 rgba(0,0,0,0.10)',
        borderTop: '4px solid #0077B5',
        transform: 'none',
        overflowY: 'auto',
      }}
    >
      {/* Arrow/triangle at the top center */}
      <div className="absolute left-1/2 z-50" style={{ top: '-20px', transform: 'translateX(-50%)' }}>
        <div className="w-6 h-6 bg-[#0077B5] rotate-45 border-t border-l border-[#0077B5] shadow-md" style={{ boxShadow: '0 2px 8px 0 rgba(0,119,181,0.10)' }} />
      </div>
      <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-start pl-12 pr-4">
        <div className="text-center mb-4 mt-4 px-2"></div>
        <div className="flex-1 flex items-start w-full">
          <div className="w-80">
            {cellsColumns.map((col, colIndex) => (
              <div key={col.heading} className="space-y-4">
                <div className="border-b-2 border-[#0077B5] pb-2 text-left">
                  <h3 className="text-xl font-bold text-[#0077B5] text-left">{col.heading}</h3>
                </div>
                <ul className="space-y-2 text-left">
                  {col.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="group flex items-center text-lg text-gray-700 hover:text-[#0077B5] transition-all duration-300 relative w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                        >
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0077B5] group-hover:w-full transition-all duration-300"></span>
                          <span className="relative z-10">{link.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0077B5]">→</span>
                        </Link>
                      ) : (
                        <span className="group flex items-center text-lg text-gray-700 hover:text-[#0077B5] transition-all duration-300 relative w-full text-left bg-transparent border-0 p-0 cursor-pointer">
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0077B5] group-hover:w-full transition-all duration-300"></span>
                          <span className="relative z-10">{link.label}</span>
                          <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0077B5]">→</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 pt-4 border-t border-gray-200 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-4 text-base">Ready to explore more?</p>
          <span className="inline-flex items-center px-6 py-2 bg-[#0077B5] text-white rounded-full text-base font-semibold cursor-default opacity-70">
            Cells & Clubs
          </span>
        </div>
      </div>
    </div>
  );
}

// Mobile collapsible for Campus Life (move above Header)
function MobileCampusLife() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center w-full px-3 py-2 text-white hover:bg-[#005885] hover:text-[#b3d9ff] transition-all duration-300 rounded focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="mobile-campus-life-facilities"
      >
        Campus Life
        <ChevronDown className={clsx("ml-auto transition-transform", open ? "rotate-180" : "rotate-0")}/>
      </button>
      <div
        id="mobile-campus-life-facilities"
        className={clsx(
          "overflow-hidden transition-all duration-300 bg-[#006699]/10 rounded-b-lg",
          open ? "max-h-96 py-2" : "max-h-0 py-0"
        )}
      >
        <div className="pl-6">
          <div className="border-b-2 border-[#0077B5] pb-2 text-left">
            <h3 className="text-lg font-bold text-[#0077B5] text-left">Facilities</h3>
          </div>
          <ul className="space-y-2 text-left mt-2">
            {campusLifeColumns[0].links.map(link => (
              <li key={link.label}>
                {link.href && link.href !== "#" ? (
                  <Link
                    href={link.href}
                    className="flex items-center text-base text-gray-100 hover:text-[#0077B5] transition-all duration-300 w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center text-base text-gray-100 hover:text-[#0077B5] transition-all duration-300 w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileCellsMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center w-full px-3 py-2 text-white hover:bg-[#005885] hover:text-[#b3d9ff] transition-all duration-300 rounded focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="mobile-cells-facilities"
      >
        Cells
        <ChevronDown className={clsx("ml-auto transition-transform", open ? "rotate-180" : "rotate-0")}/>
      </button>
      <div
        id="mobile-cells-facilities"
        className={clsx(
          "overflow-hidden transition-all duration-300 bg-[#006699]/10 rounded-b-lg",
          open ? "max-h-96 py-2" : "max-h-0 py-0"
        )}
      >
        <div className="pl-6">
          <div className="border-b-2 border-[#0077B5] pb-2 text-left">
            <h3 className="text-lg font-bold text-[#0077B5] text-left">Cells & Clubs</h3>
          </div>
          <ul className="space-y-2 text-left mt-2">
            {cellsColumns[0].links.map(link => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className="flex items-center text-base text-gray-100 hover:text-[#0077B5] transition-all duration-300 w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center text-base text-gray-100 hover:text-[#0077B5] transition-all duration-300 w-full text-left bg-transparent border-0 p-0 cursor-pointer"
                  >
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [cellsMenuOpen, setCellsMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false); // Add mounted state
  let menuTimeout: NodeJS.Timeout | null = null
  const campusLifeRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true); // Set mounted true after client mount
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper for mouse enter/leave
  const handleMenuEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout)
    setMegaMenuOpen(true)
    setCellsMenuOpen(false) // Close Cells menu when Campus Life opens
  }
  const handleMenuLeave = () => {
    menuTimeout = setTimeout(() => setMegaMenuOpen(false), 120)
  }
  // Cells menu helpers
  const handleCellsEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout)
    setCellsMenuOpen(true)
    setMegaMenuOpen(false) // Close Campus Life menu when Cells opens
  }
  const handleCellsLeave = () => {
    menuTimeout = setTimeout(() => setCellsMenuOpen(false), 120)
  }

  // Navigation items
  const navItems = [
    ["About", "/about"],
    ["Admissions", "/admissions"],
    ["Academics", "/academics"],
    ["Career Development Center", "/career-development"],
    ["Cells", "/cells"],
    ["Campus Life", "/campus-life"]
  ]

  return (
    <header className="text-white w-full z-50 fixed top-0 transition-all duration-300">
      {/* Top Bar - LinkedIn blue background */}
      <div className="border-b bg-[#0077B5] border-[#005885] z-30 relative">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-[#0077B5] text-xs font-bold">🏛️</span>
              </div>
              <span className="text-sm">CAMPUSES</span>
              <span className="text-xs">›</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            {['careers', 'alumni', 'advantages'].map((page, idx) => (
              <Link
                key={idx}
                href={`/${page}`}
                className="hover:underline underline-offset-4 decoration-white/70 transition duration-200 hover:text-[#b3d9ff]"
              >
                {page === 'advantages' ? 'VIIT Advantages' : page[0].toUpperCase() + page.slice(1)}
              </Link>
            ))}
            <Button variant="ghost" size="sm" className="text-white hover:text-[#b3d9ff] hover:bg-[#005885] transition-all duration-300">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#b3d9ff] hover:bg-[#005885] transition-all duration-300">
              360
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation - LinkedIn blue background with animations */}
      <div className={clsx(
        "w-full z-20 transition-all duration-300 bg-[#0077B5] text-white shadow-lg"
      )}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with scale animation */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/Vignan_logo.png"
                  alt="VIIT Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="transition-transform duration-200 group-hover:scale-105">
                <h1 className="text-xl font-bold">VIIT</h1>
                <p className="text-xs">Apply Knowledge. Improve Life!™</p>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map(([label, path]) =>
                label === "Campus Life" ? (
                  <div
                    key={label}
                    className="relative"
                    ref={campusLifeRef}
                    onMouseEnter={handleMenuEnter}
                    onMouseLeave={handleMenuLeave}
                  >
                    <Link
                      href={path}
                      className="relative px-3 py-2 hover:bg-[#005885] transition-all duration-300 rounded group"
                    >
                      {label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <div className="hidden lg:block">
                      {/* Only open menu after mount to prevent SSR flash */}
                      <CampusLifeMegaMenu open={mounted && megaMenuOpen} anchorRef={campusLifeRef} />
                    </div>
                  </div>
                ) : label === "Cells" ? (
                  <div
                    key={label}
                    className="relative"
                    ref={cellsRef}
                    onMouseEnter={handleCellsEnter}
                    onMouseLeave={handleCellsLeave}
                  >
                    <Link
                      href={path}
                      className="relative px-3 py-2 hover:bg-[#005885] transition-all duration-300 rounded group"
                    >
                      {label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <div className="hidden lg:block">
                      {/* Only open menu after mount to prevent SSR flash */}
                      <CellsMegaMenu open={mounted && cellsMenuOpen} anchorRef={cellsRef} />
                    </div>
                  </div>
                ) : (
                <Link
                  key={label}
                  href={path}
                    className="relative px-3 py-2 hover:bg-[#005885] transition-all duration-300 rounded group"
                >
                  {label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden text-white hover:text-[#b3d9ff] hover:bg-[#005885] transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div className={clsx(
          "lg:hidden bg-[#0077B5] border-t border-[#005885] transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="px-4 py-4 space-y-2">
            {navItems.map(([label, path]) =>
              label === "Campus Life"
                ? <MobileCampusLife key={label} />
                : label === "Cells"
                  ? <MobileCellsMenu key={label} />
                  : (
                    <Link
                      key={label}
                      href={path}
                      className="block px-3 py-2 text-white hover:bg-[#005885] hover:text-[#b3d9ff] transition-all duration-300 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  )
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
