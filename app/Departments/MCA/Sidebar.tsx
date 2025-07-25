'use client';
//Sidebar
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar menu data inside component
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
  title: 'Syllabus',
  children: [
    { title: 'VR 17', href: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2017/VR17%20Master%20of%20Computer%20Applications.pdf' },
    { title: 'VR 19', href: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2019/VR%2019%20Master%20of%20Computer%20Applications.pdf' },
    { title: 'VR 20', href: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2020/MCA_VR20_Master%20of%20Computer%20Applications.pdf' },
    { title: 'VR 22', href: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2022/VR22%20MCA%20syllabus.pdf' },
  ],
}

, { title: 'Faculty', href: '/faculty' },
  { title: 'Infrastructure', href: '/infrastructure' },
  { title: 'Laboratories', href: '/laboratories' },
  { title: 'Innovative Teaching Practices', href: '/teaching-practices' },
  { title: 'Collaborations', href: '/collaborations' },
  { title: 'Co-Curricular Activities', href: '/co-curricular' },
  { title: 'Extra', href: '/extra' },
];


  return (
    <>
      {/* Mobile Menu Button (hidden on md and up) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-3 absolute  left-2   bg-blue-900 text-white  rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
     <div
  className={`bg-blue-900 text-white min-h-screen p-4 z-40 transition-transform 
  fixed top-0 left-0 h-full w-64 md:relative md:translate-x-0 
  ${sidebarOpen ? 'translate-x-0  float absolute' : '-translate-x-full'} md:block`}
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

        {/* Mobile only close button */}
        <button
          className="md:hidden mt-4 text-sm underline"
          onClick={() => setSidebarOpen(false)}
        >
          Close
        </button>
      </div>
    </>
  );
}

function DropdownItem({ item }) {
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
          {item.children.map((child, idx) => (
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
