'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const sidebarItems = [
    { title: 'About Us', href: '/about' },
    { title: 'Vision and Mission', href: '/vision' },
    { title: 'Programs Offered', href: '/programs' },
    {
      title: 'POs',
      children: [
        { title: 'B.Tech', href: '/pos/btech' },
        { title: 'M.Tech', href: '/pos/mtech' },
      ],
    },
    {
      title: 'PEOs',
      children: [
        { title: 'B.Tech', href: '/peos/btech' },
        { title: 'M.Tech', href: '/peos/mtech' },
      ],
    },
    {
      title: 'PSOs',
      children: [
        { title: 'B.Tech', href: '/psos/btech' },
        { title: 'M.Tech', href: '/psos/mtech' },
      ],
    },
    { title: 'Board of Studies', href: '/board-of-studies' },
    { title: 'Department Development Committee', href: '/ddc' },
    { title: 'PAQIC', href: '/paqic' },
    { title: 'CDMC', href: '/cdmc' },
    {
      title: 'Program Structure & Syllabus',
      children: [
        { title: 'B.Tech', href: '/syllabus/btech' },
        { title: 'M.Tech', href: '/syllabus/mtech' },
      ],
    },
    { title: 'Faculty', href: '/faculty' },
    { title: 'Infrastructure', href: '/infrastructure' },
    { title: 'Laboratories', href: '/laboratories' },
    { title: 'Innovative Teaching Practices', href: '/teaching-practices' },
    { title: 'Collaborations', href: '/collaborations' },
    { title: 'Co-Curricular Activities', href: '/co-curricular' },
    { title: 'Extra', href: '/extra' },
  ];

  return (
    <div
      className={`bg-blue-900 text-white w-64 p-4 md:relative z-40 transform transition-transform duration-300
        ${isOpen ? 'block md:block' : 'hidden md:block'}
        md:translate-x-0`}
    >
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        {sidebarItems.map((item, idx) =>
          item.children ? (
            <DropdownItem key={idx} item={item} />
          ) : (
            <li key={idx}>
              <Link href={item.href} className="block px-2 py-1 hover:bg-blue-700 rounded">
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile-only close button */}
      <button onClick={onClose} className="md:hidden mt-4 text-sm underline">
        Close
      </button>
    </div>
  );
}

function DropdownItem({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer px-2 py-1 hover:bg-blue-700 rounded flex justify-between items-center"
      >
        {item.title} <span>{open ? '-' : '+'}</span>
      </div>
      {open && (
        <ul className="ml-4 mt-1 space-y-1">
          {item.children.map((child: any, idx: number) => (
            <li key={idx}>
              <Link href={child.href} className="block px-2 py-1 hover:bg-blue-600 rounded">
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
