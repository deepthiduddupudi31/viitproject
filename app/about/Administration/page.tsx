'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const admins = [
  {
    name: 'Shri SRIKANTH NANDIGAMA',
    title: 'CEO',
    image: '/CEO.jpg',
  },
  {
    name: 'Dr. SUDHAKAR JYOTHULA',
    title: 'PRINCIPAL',
    image: '/Principal.jpg',
  },
  {
    name: 'Dr. LAVU RATHAIAH',
    title: 'CHAIRMAN',
    image: '/Chairman.jpg',
  },
  {
    name: 'Dr.Ch.Ramesh Babu',
    title: 'Dean-IQAC',
    image: '/Dean.jpg',
  },
  {
    name: 'Dr.V Madhusudan Rao,FRSC',
    title: 'Rector',
    image: '/Rector.jpg',
  }
  
];

export default function Administration() {
  const [current, setCurrent] = useState(0);
  const total = admins.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  const getPosition = (index: number) => {
    const diff = (index - current + total) % total;
    if (diff === 0) return 'center';
    if (diff === 1 || (diff === -total + 1)) return 'right';
    if (diff === total - 1 || diff === -1) return 'left';
    return 'hidden';
  };

  return (
    <section className="w-full py-10 bg-white relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-[#0a66c2] uppercase mb-1">
        Administration Team
      </h2>

      <div className="relative flex justify-center items-center h-[460px]">
        {admins.map((admin, i) => {
          const pos = getPosition(i);
          return (
            <div
              key={i}
              className={clsx(
                'absolute w-80 h-[320px] transition-all duration-700 ease-in-out rounded-xl shadow-xl bg-white border',
                {
                  'z-4 scale-100 left-1/2 -translate-x-1/2': pos === 'center',
                  'z-1 scale-90 -translate-x-[160%] opacity-40': pos === 'left',
                  'z-1 scale-90 translate-x-[160%] opacity-40': pos === 'right',
                  'opacity-0 scale-75 pointer-events-none': pos === 'hidden',
                }
              )}
              style={{ transitionTimingFunction: 'ease-in-out' }}
            >
              <div className="relative w-full h-72 rounded-t-xl overflow-hidden">
                <Image
                src={admin.image}
                alt={admin.name}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-500"
              />

              </div>
              <div className="bg-[#0a66c2] text-white text-center p-4 rounded-b-xl">
                <h3 className="text-lg font-bold">{admin.name}</h3>
                <p className="text-sm tracking-wide opacity-90">{admin.title}</p>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0a66c2] text-white p-3 rounded-full hover:scale-105 transition-all z-40"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0a66c2] text-white p-3 rounded-full hover:scale-105 transition-all z-40"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
