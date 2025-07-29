'use client';
import Sidebar from '../../Sidebar';
export default function BTechSyllabusLinks() {
  const links = [
    {
      name: 'VR19',
      url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2019/UG%20-%20B.Tech/04_VR%2019_Electronics%20Engineering.pdf',
    },
    {
      name: 'VR20',
      url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2020/VR20%20ECE.pdf',
    },
    {
      name: 'VR22',
      url: 'https://vignaniit.edu.in/syllabus/Syllabus/VR%2022/ECE_VR22.pdf',
    },
    {
      name: 'VR23',
      url: 'https://vignaniit.edu.in/syllabus/Syllabus/vr23_new/VR23%20ECE.pdf',
    },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-4">B.Tech ECE Syllabus</h2>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-fit"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
