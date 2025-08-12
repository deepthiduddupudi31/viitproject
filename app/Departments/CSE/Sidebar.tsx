'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown, Menu, X, Info, Book, GraduationCap, Building,
  Users, FlaskConical, Handshake, Star,
} from 'lucide-react';
import { clsx } from 'clsx';

const sidebarItems =  [
  { type: 'header', title: 'Department' },
  { title: 'About Us', href: '/Departments/CSE', icon: Info },
  { title: 'Vision & Mission', href: '/Departments/CSE/visionmission', icon: Book },
  { type: 'header', title: 'Academics' },
  { title: 'Programs Offered', href: '/Departments/CSE/programs', icon: GraduationCap },
  {
    title: 'Curriculum', icon: Book,
    children: [
      { title: 'POs - B.Tech', href: '/Departments/CSE/peos/Btech' },
      { title: 'PEOs - B.Tech', href: '/Departments/CSE/peos/Mtech' },
      { title: 'PSOs - B.Tech', href: '/Departments/CSE/peos/Mtech' },
    ],
  },
  { type: 'header', title: 'People & Places' },
  { title: 'Faculty', href: '/Departments/CSE/faculty', icon: Users },
  { title: 'Infrastructure', href: '/Departments/CSE/infrastructure', icon: Building },
  { title: 'Laboratories', href: '/Departments/CSE/laboratories', icon: FlaskConical },
  { type: 'header', title: 'Engagement' },
  { title: 'Collaborations', href: '/Departments/CSE/CDMD', icon: Handshake },
  { title: 'Achievements', href: '/Departments/CSE/extraCirricularActivities', icon: Star },
];
const NavLink = ({ item, isActive, onNavigate }) => (
  <li>
    <Link
      href={item.href || '#'}
      onClick={onNavigate}
      className={clsx(
        'flex items-center gap-3 px-3 py-2.5 rounded-md',
        isActive
          ? 'bg-indigo-50 text-indigo-700 font-semibold'
          : 'text-slate-600 hover:bg-slate-100'
      )}
    >
      <item.icon className="w-5 h-5" />
      <span className="text-sm">{item.title}</span>
    </Link>
  </li>
);

const DropdownItem = ({ item, currentPath, onNavigate }) => {
  const isParentActive = item.children.some(child => child.href === currentPath);
  const [isOpen, setIsOpen] = useState(isParentActive);

  useEffect(() => {
    if (isParentActive) setIsOpen(true);
  }, [isParentActive]);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md',
          isParentActive ? 'bg-slate-100' : 'hover:bg-slate-100'
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5" />
          <span className="text-sm font-medium text-slate-800">{item.title}</span>
        </div>
        <ChevronDown
          className={clsx(
            'w-5 h-5 text-slate-400 transition-transform',
            { 'rotate-180': isOpen }
          )}
        />
      </button>
      {isOpen && (
        <ul className="pl-8 py-1 space-y-1">
          {item.children.map((child) => (
            <li key={child.title}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className={clsx(
                  'block py-1.5 px-3 text-sm rounded',
                  currentPath === child.href
                    ? 'text-indigo-600 font-semibold'
                    : 'text-slate-500 hover:text-indigo-600'
                )}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(true)}
        className={clsx(
          'md:hidden fixed right-5 z-50 p-2 bg-blue-500 backdrop-blur-sm text-slate-800 shadow-lg',
          'transition-all duration-300 ease-in-out z-50',
          isScrolled ? 'top-[20px]' : 'top-[75px]'
        )}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        onClick={handleClose}
        className={clsx(
          'md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity',
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />

      <aside
        className={clsx(
          'bg-white w-72 p-4 z-50 lg:z-0 transition-transform duration-300 ease-in-out',
          'fixed top-0 left-0 h-full flex flex-col',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0 md:h-fit md:max-h-[calc(100vh-5rem)] md:rounded-xl md:shadow-sm',
          'md:relative md:w-64 lg:w-72 md:left-auto md:top-auto',
          'md:sticky md:top-24'
        )}
      >
        <div className="flex justify-between items-center mb-4 p-2">
          <h2 className="text-lg font-bold text-slate-800">CSE Department</h2>
          <button onClick={handleClose} className="md:hidden p-1">
            <X className="h-6 w-6 text-slate-500" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) =>
              item.type === 'header' ? (
                <li
                  key={index}
                  className="px-3 pt-4 pb-1 text-xs font-bold uppercase text-indigo-700 tracking-wider"
                >
                  {item.title}
                </li>
              ) : item.children ? (
                <DropdownItem
                  key={item.title}
                  item={item}
                  currentPath={pathname}
                  onNavigate={handleClose}
                />
              ) : (
                <NavLink
                  key={item.title}
                  item={item}
                  isActive={pathname === item.href}
                  onNavigate={handleClose}
                />
              )
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}