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
    title: 'Program Structure & Syllabus',
    children: [
      { title: 'B.Tech', href: '/syllabus/btech' },
      { title: 'M.Tech', href: '/syllabus/mtech' },
    ],
  },
  {
  title: 'Minute of Meetings',
  children: [
    { title: 'ES Minutes 2017-18', href: 'https://vignaniit.edu.in/bos/bsh/BOS%20MINUTES%2017-18.PDF' },
    { title: 'ES Minutes 2018-19', href: 'https://vignaniit.edu.in/bos/bsh/BOS%20MINUTES%2018-19.PDF' },
    { title: 'ES Minutes 2019-20', href: 'https://vignaniit.edu.in/bos/bsh/BOS%20MINUTES%2019-20.PDF' },
    { title: 'English Minutes 2017-18', href: 'https://vignaniit.edu.in/bos/bsh/English_BOS%20MINUTES%2017-18.PDF' },
    { title: 'English Minutes 2018-19', href: 'https://vignaniit.edu.in/bos/bsh/English_BOS%20MINUTES%2018-19.PDF' },
    { title: 'English Minutes 2019-20', href: 'https://vignaniit.edu.in/bos/bsh/English_BOS%20MINUTES%2019-20.PDF' },
    { title: 'Chemistry Minutes 2017-18', href: 'https://vignaniit.edu.in/bos/bsh/CHEM_BOS%20MINUTES%2017-18.PDF' },
    { title: 'Chemistry Minutes 2018-19', href: 'https://vignaniit.edu.in/bos/bsh/CHEM_BOS%20MINUTES%2018-19.PDF' },
    { title: 'Chemistry Minutes 2019-20', href: 'https://vignaniit.edu.in/bos/bsh/CHEM_BOS%20MINUTES%2019-20.PDF' },
    { title: 'Physics Minutes 2017-18', href: 'https://vignaniit.edu.in/bos/bsh/Phy_BOS%20MINUTES%2017-18.PDF' },
    { title: 'Physics Minutes 2018-19', href: 'https://vignaniit.edu.in/bos/bsh/Phy_BOS%20MINUTES%2018-19.PDF' },
    { title: 'Physics Minutes 2019-20', href: 'https://vignaniit.edu.in/bos/bsh/Phy_BOS%20MINUTES%2019-20.PDF' },
    { title: 'Physics Minutes 2020-21', href: 'https://vignaniit.edu.in/bos/bsh/Phy_BOS%20MINUTES%2020-21.PDF' },
    { title: 'Maths Minutes 2017-18', href: 'https://vignaniit.edu.in/bos/bsh/Maths_BOS%20MINUTES%2017-18.PDF' },
    { title: 'Maths Minutes 2018-19', href: 'https://vignaniit.edu.in/bos/bsh/Maths_BOS%20MINUTES%2018-19.PDF' },
    { title: 'Maths Minutes 2019-20', href: 'https://vignaniit.edu.in/bos/bsh/Maths_BOS%20MINUTES%2019-20.PDF' },
    { title: 'Maths Minutes 2020-21', href: 'https://vignaniit.edu.in/bos/bsh/Maths_BOS%20MINUTES%2020-21.PDF' },
  ],
},

{
  title: 'DDC',
  children: [
    { title: '2018-19', href: 'https://vignaniit.edu.in/ddc/bsh/BHS_DDC_2018_19.pdf' },
    { title: '2019-20', href: 'https://vignaniit.edu.in/ddc/bsh/DDC%202019-2020.pdf' },
    { title: '2020-21', href: 'https://vignaniit.edu.in/ddc/bsh/DDC%202020-21%201,2.pdf' },
    { title: '2021-22', href: 'https://vignaniit.edu.in/ddc/bsh/DDC%202021-22.pdf' },
    { title: '2022-23', href: 'https://vignaniit.edu.in/ddc/bsh/DDC%202022-2023.pdf' },
    { title: '2023-24', href: 'https://vignaniit.edu.in/ddc/bsh/2023-2024%201.pdf' },
  ],
},
{
  title: 'PAQIC',
  children: [
    { title: '2019-20', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202019-20%201,%202.pdf' },
    { title: '2020-21', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202020-21.pdf' },
    { title: '2021-22', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202021-2022%201,2.pdf' },
    { title: '2022-23', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202022-23%201,2.pdf' },
    { title: '2023-24', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202023-2024%201.pdf' },
  ],
},
{
  title: 'Faculty Courses / Certificates',
  children: [
    { title: 'Online Courses', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202019-20%201,%202.pdf' },
    { title: 'Events Organized', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202020-21.pdf' },
    { title: 'Events Participated', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202021-2022%201,2.pdf' },
    { title: 'Professional Bodies', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202022-23%201,2.pdf' },
    { title: '2023-24', href: 'https://vignaniit.edu.in/ddc/bsh/paqic%202023-2024%201.pdf' },
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
