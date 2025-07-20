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
        { name: 'ISO 45001:2018(2022-25)', href: '/ISO45001.jpeg' },
        { name: 'ISO 9001:2015(2022-25)', href: '/ISO9001.jpeg' },
        { name: 'ISO 14001:2015(2022-25)', href: '/ISO2015.jpeg' },
        { name: 'ISO 9001:2015(2017-18)', href: '/ISO.pdf' },
        { name: 'OHSAS 18001:2007(2017-18)', href: '/OHSAS.pdf' },
      ],
    },
    {
      title: 'Safety Certificates',
      links: [
        { name: 'Fire Safety Certificate', href: '/FIRE SAFETY.pdf' },
        { name: 'Food Safety Certificate', href: '/FOOD SAFETY.pdf' },
        { name: 'UV RO Plant certificate', href: '/WATER UV RO PLANT.pdf' },
      ],
    },
    {
      title: 'All India Survey on Higher Education',
      links: [
        { name: 'AISHE 2024-25', href: '/C-17965_certificateold_-DCF (13).pdf' },
        { name: 'AISHE 2023-24', href: '/C-17965_certificateold_-DCF-2024.pdf' },
        { name: 'AISHE 2022-23', href: '/AISHE.pdf' },
      ],
    },
    {
      title: 'Atal Ranking of Institutions on Innovation Achievements',
      links: [
        { name: 'ARIIA-2022', href: '/ARIIA Certificate 2022.pdf' },
      ],
    },
    {
      title: 'Andhra Pradesh Information Technology Academy',
      links: [
        { name: 'APITA 2019-2020', href: '/APITA.pdf' },
      ],
    },
    {
      title: 'CISCO',
      links: [
        { name: 'Women Rock IT', href: '/2017-18.jpg' },
      ],
    },
    {
      title: 'NATIONAL WOMEN\'s PARLIAMENT',
      links: [
        { name: 'National Womens Parliament', href: '/25 (1).pdf' },
      ],
    },
    {
      title: 'NPTEL',
      links: [
        { name: 'NPTEL - 2019', href: '/2019.jpg' },
        { name: 'NPTEL - 2022', href: '/2022.jpg' },
      ],
    },
    {
      title: 'CAMBRIDGE',
      links: [
        { name: 'Cambridge Assessment English', href: '/46.jpg' },
      ],
    },
    {
      title: 'GREEN AWARDS',
      links: [
        { name: 'Green Waves Environmental Solutions', href: '/G1.pdf' },
        { name: 'State Energy Conservation Mission', href: '/G2.pdf' },
        { name: 'Green institute', href: '/Platinum ranking.jpeg' },
        { name: 'Others', href: '/Remaining.pdf' },
      ],
    },
    {
      title: 'CII',
      links: [
        { name: 'Young Indians - CII', href: '/19.jpeg' },
        { name: 'AICTE - CII', href: '/AICTE CII.pdf' },
      ],
    },
    {
      title: 'Center for Education Growth and Research',
      links: [
        { name: 'CEGR', href: '/11.pdf' },
      ],
    },
    {
      title: 'TIMES',
      links: [
        { name: 'TIMES Ranking 2017', href: '/22 2.pdf' },
        { name: 'TIMES Magazine - VIIT', href: '/22 (1).pdf' },
        { name: 'All India Times Ranking-2023', href: '/2023 rankings.pdf' },
        { name: 'Times Engineering Institute Ranking 2023', href: '/Times Engineering Institutes Ranking_2023_Final (2).pdf' },
        { name: 'Times Engineering Survey Institutes-2025', href: '/time_2025.jpeg' },
      ],
    },
    {
      title: 'ACADEMIC INSIGHTS',
      links: [
        { name: 'INDIA\'S TOP 50 ENGINEERING COLLEGES SURVEY - 2025', href: '/Academic Insights.pdf' },
      ],
    },
    {
      title: 'R World Institutional Ranking',
      links: [
        { name: 'R World - 2023', href: '/RW.png' },
        { name: 'OBE-2023', href: '/2.pdf' },
      ],
    },
    {
      title: 'AMBITIOUS AWARD',
      links: [
        { name: 'Education Excellence 20-21', href: '/51.jpg' },
      ],
    },
    {
      title: 'PRIME TIME',
      links: [
        { name: 'Global Education Excellence 2017', href: '/21.jpg' },
      ],
    },
    {
      title: 'SERVICE AWARDS',
      links: [
        { name: 'Helping Hearts', href: '/1.pdf' },
        { name: 'Vijaya Sri Blood Bank', href: '/2 (1).pdf' },
        { name: 'Amma Teresa Foundation', href: '/3.pdf' },
        { name: 'For the People Charitable Trust', href: '/4.pdf' },
        { name: 'NTR Memorial Trust', href: '/5.pdf' },
      ],
    },
    {
      title: 'OTHERS',
      links: [
        { name: 'Dewang Mehta National Education Awards', href: '/34.jpg' },
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
