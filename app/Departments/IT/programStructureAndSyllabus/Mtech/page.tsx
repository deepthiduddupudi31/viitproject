'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DropdownLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'VR19', url: 'https://vignaniit.edu.in/syllabus/R19M.Tech.TransportationEngg.pdf' },
    { name: 'VR21', url: 'https://vignaniit.edu.in/syllabus/VR21_civil_M.Tech.pdf' },
    { name: 'VR23', url: 'https://vignaniit.edu.in/syllabus/Syllabus/vr23_new/R23%20CIVIL.pdf' }
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
