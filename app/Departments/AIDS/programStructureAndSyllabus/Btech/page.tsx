'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DropdownLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'R13', url: 'https://vignaniit.edu.in/syllabus/Syllabus/R%2013/01.%20B.Tech%20-%20Civil%20Engineering.pdf' },
    { name: 'R16', url: 'https://vignaniit.edu.in/syllabus/Syllabus/R%2016/01.%20B.Tech%20-%20Civil%20Engineering.pdf' },
    { name: 'VR17', url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2017/UG%20-%20B.%20Tech/01_Civil%20Engineering.pdf' },
    { name: 'VR19', url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2019/UG%20-%20B.Tech/01_VR%2019_Civil%20Engineering.pdf' },
    { name: 'VR20', url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2020/VR20%20CIVIL.pdf' },
    { name: 'VR22', url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2022/CIVIL%20VR22.pdf' },
    { name: 'VR23', url: 'https://vignaniit.edu.in/syllabus/Syllabus/vr23_new/VR23%20CIVIL.pdf' }
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        DDC MOMs
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
