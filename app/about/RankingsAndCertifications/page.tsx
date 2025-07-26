'use client';

import AboutMenuBar from '../../../components/AboutMenubar';
import { useEffect, useState } from 'react';

export default function RankingsAndCertificationsPage() {
  const banners = [
    { src: '/NAAC Ranking.jpg', href: '#' },
    { src: '/NIRF Ranking.jpeg', href: '#' },
    { src: '/APSCHE Award.jpeg', href: '#' },
  ];

  const highlights = [
    {
      text: 'VIIT achieves NIRF India ranking 2024 in 201-300 rank band engineering category',
      href: '#',
    },
    {
      text: 'VIIT re-accredited by National Assessment and Accreditation Council (NAAC) with “A+” Grade (CGPA of 3.40/4.00)',
      href: '#',
    },
    {
      text: 'The State Energy Conservation Award 2023 by the Government of Andhra Pradesh',
      href: '#',
    },
  ];

  const certifications = [
    {
      title: 'International Standard Organisation',
      links: [
        { name: 'ISO 45001:2018(2022-25)', href: 'https://vignaniit.edu.in/iqac/rankings/ISO45001.JPG' },
        { name: 'ISO 9001:2015(2022-25)', href: 'https://vignaniit.edu.in/iqac/rankings/ISO9001.JPG' },
        { name: 'ISO 14001:2015(2022-25)', href: 'https://vignaniit.edu.in/iqac/rankings/ISO2015.JPG' },
        { name: 'ISO 9001:2015(2017-18)', href: 'https://vignaniit.edu.in/iqac/rankings/ISO.pdf' },
        { name: 'OHSAS 18001:2007(2017-18)', href: 'https://vignaniit.edu.in/iqac/rankings/OHSAS.pdf' },
      ],
    },
    {
      title: 'Safety Certificates',
      links: [
        { name: 'Fire Safety Certificate', href: 'https://vignaniit.edu.in/iqac/rankings/FIRE%20SAFETY.pdf' },
        { name: 'Food Safety Certificate', href: 'https://vignaniit.edu.in/iqac/rankings/FOOD%20SAFETY.pdf' },
        { name: 'UV RO Plant certificate', href: 'https://vignaniit.edu.in/iqac/rankings/WATER%20UV%20RO%20PLANT.pdf' },
      ],
    },
    {
      title: 'All India Survey on Higher Education',
      links: [
        { name: 'AISHE 2024-25', href: 'https://vignaniit.edu.in/iqac/rankings/C-17965_certificateold_-DCF%20(13).pdf' },
        { name: 'AISHE 2023-24', href: 'https://vignaniit.edu.in/iqac/rankings/C-17965_certificateold_-DCF-2024.pdf' },
        { name: 'AISHE 2022-23', href: 'https://vignaniit.edu.in/iqac/rankings/AISHE.pdf' },
      ],
    },
    {
      title: 'Atal Ranking of Institutions on Innovation Achievements',
      links: [
        { name: 'ARIIA-2022', href: 'https://vignaniit.edu.in/iqac/rankings/ARIIA%20Certificate%202022.pdf' },
      ],
    },
    {
      title: 'Andhra Pradesh Information Technology Academy',
      links: [
        { name: 'APITA 2019-2020', href: 'https://vignaniit.edu.in/iqac/rankings/APITA.pdf' },
      ],
    },
    {
      title: 'CISCO',
      links: [
        { name: 'Women Rock IT', href: 'https://vignaniit.edu.in/iqac/rankings/2017-18.jpg' },
      ],
    },
    {
      title: 'NATIONAL WOMEN\'s PARLIAMENT',
      links: [
        { name: 'National Womens Parliament', href: 'https://vignaniit.edu.in/iqac/rankings/25.pdf' },
      ],
    },
    {
      title: 'NPTEL',
      links: [
        { name: 'NPTEL - 2019', href: 'https://vignaniit.edu.in/iqac/rankings/2019.jpg' },
        { name: 'NPTEL - 2022', href: 'https://vignaniit.edu.in/iqac/rankings/2022.jpg' },
      ],
    },
    {
      title: 'CAMBRIDGE',
      links: [
        { name: 'Cambridge Assessment English', href: 'https://vignaniit.edu.in/iqac/rankings/46.jpg' },
      ],
    },
    {
      title: 'GREEN AWARDS',
      links: [
        { name: 'Green Waves Environmental Solutions', href: 'https://vignaniit.edu.in/iqac/rankings/G1.pdf' },
        { name: 'State Energy Conservation Mission', href: 'https://vignaniit.edu.in/iqac/rankings/G2.pdf' },
        { name: 'Green institute', href: 'https://vignaniit.edu.in/iqac/rankings/Platinum%20ranking.JPG' },
        { name: 'Others', href: 'https://vignaniit.edu.in/iqac/rankings/Remaining.pdf' },
      ],
    },
    {
      title: 'CII',
      links: [
        { name: 'Young Indians - CII', href: 'https://vignaniit.edu.in/iqac/rankings/19.jpeg' },
        { name: 'AICTE - CII', href: 'https://vignaniit.edu.in/iqac/rankings/AICTE%20CII.pdf' },
      ],
    },
    {
      title: 'Center for Education Growth and Research',
      links: [
        { name: 'CEGR', href: 'https://vignaniit.edu.in/iqac/rankings/11.pdf' },
      ],
    },
    {
      title: 'TIMES',
      links: [
        { name: 'TIMES Ranking 2017', href: 'https://vignaniit.edu.in/iqac/rankings/22%202.pdf' },
        { name: 'TIMES Magazine - VIIT', href: 'https://vignaniit.edu.in/iqac/rankings/22.pdf' },
        { name: 'All India Times Ranking-2023', href: 'https://vignaniit.edu.in/iqac/rankings/2023%20rankings.pdf' },
        { name: 'Times Engineering Institute Ranking 2023', href: 'https://vignaniit.edu.in/iqac/rankings/Times%20Engineering%20Institutes%20Ranking_2023_Final%20(2).pdf' },
        { name: 'Times Engineering Survey Institutes-2025', href: 'https://vignaniit.edu.in/iqac/time_2025.jpeg' },
      ],
    },
    {
      title: 'ACADEMIC INSIGHTS',
      links: [
        { name: 'INDIA\'S TOP 50 ENGINEERING COLLEGES SURVEY - 2025', href: 'https://vignaniit.edu.in/iqac/rankings/Academic%20Insights.pdf' },
      ],
    },
    {
      title: 'R World Institutional Ranking',
      links: [
        { name: 'R World - 2023', href: 'https://vignaniit.edu.in/iqac/rankings/RW.png' },
        { name: 'OBE-2023', href: 'https://vignaniit.edu.in/iqac/rankings/2.pdf' },
      ],
    },
    {
      title: 'AMBITIOUS AWARD',
      links: [
        { name: 'Education Excellence 20-21', href: 'https://vignaniit.edu.in/iqac/rankings/51.jpg' },
      ],
    },
    {
      title: 'PRIME TIME',
      links: [
        { name: 'Global Education Excellence 2017', href: 'https://vignaniit.edu.in/iqac/rankings/21.jpg' },
      ],
    },
    {
      title: 'SERVICE AWARDS',
      links: [
        { name: 'Helping Hearts', href: 'https://vignaniit.edu.in/iqac/rankings/1.pdf' },
        { name: 'Vijaya Sri Blood Bank', href: 'https://vignaniit.edu.in/iqac/rankings/2.pdf' },
        { name: 'Amma Teresa Foundation', href: 'https://vignaniit.edu.in/iqac/rankings/3.pdf' },
        { name: 'For the People Charitable Trust', href: 'https://vignaniit.edu.in/iqac/rankings/4.pdf' },
        { name: 'NTR Memorial Trust', href: 'https://vignaniit.edu.in/iqac/rankings/5.pdf' },
      ],
    },
    {
      title: 'OTHERS',
      links: [
        { name: 'Dewang Mehta National Education Awards', href: 'https://vignaniit.edu.in/iqac/rankings/34.jpg' },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AboutMenuBar />

      <main className="flex-1 p-6 lg:p-10 flex justify-center items-start">
        <section className="bg-white max-w-6xl w-full p-6 lg:p-10 mt-24 shadow-xl rounded-lg space-y-12">
          <h1 className="text-4xl text-center font-bold text-teal-800 uppercase tracking-wide">
            Rankings & Certifications
          </h1>

          {/* Slideshow */}
          <div className="relative w-full aspect-[16/7] overflow-hidden rounded-lg shadow-md">
            {banners.map((banner, index) => (
              <a
                key={index}
                href={banner.href}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={banner.src}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>

          {/* Highlights */}
          <div className="w-full overflow-hidden border-t border-b py-2 bg-gray-100">
            <div className="animate-marquee whitespace-nowrap">
              {highlights.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="inline-block text-blue-700 hover:underline mx-8 font-medium"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <h2 className="text-2xl font-semibold text-teal-700 text-center">
            Certifications
          </h2>

          <div className="space-y-8">
            {certifications.map((section, index) => (
              <div key={index} className="border rounded-md p-4 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">
                  {section.title}
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        📄 {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
