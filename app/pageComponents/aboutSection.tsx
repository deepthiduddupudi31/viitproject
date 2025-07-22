'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

const announcements = [
  {
    date: '2025-06-04',
    title: 'Integrated M.Tech. 2025 Results & Choice filling',
    link: '#',
  },
  {
    date: '2025-05-23',
    title: 'VIITREE-2025 (July Session) Results',
    link: '#',
  },
  {
    date: '2025-05-08',
    title: 'VIITMEE (M.Tech. 2025) Admission Results',
    link: '#',
  },
];

const AboutSection = () => {
  return (
    <section className="w-full bg-light-bg py-24 px-6">
      <div className="container mx-auto">
        
        {/* --- Section 1: Latest Announcements --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-navy-text">
              Latest Announcements
            </h2>
            <p className="mt-2 text-lg text-slate-text max-w-2xl mx-auto">
              Stay updated with the latest news, results, and events from VIIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <Link href={item.link} className="flex flex-col h-full">
                  <div className="flex items-center gap-2 text-vignan-blue mb-2">
                    <CalendarDays size={16} />
                    <span className="text-sm font-semibold">{item.date}</span>
                  </div>
                  <p className="font-semibold text-navy-text flex-grow">
                    {item.title}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-vignan-blue flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Section 2: About VIIT & Campus Video --- */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Left Column: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-extrabold tracking-tighter text-navy-text">
              A Legacy of Pursuing
              <br/>
              <span className="text-vignan-blue">Knowledge and Excellence.</span>
            </h3>
            <p className="mt-4 text-lg text-slate-text leading-relaxed">
              Consistently ranked among the top educational institutes, VIIT resonates a dynamic blend of academic initiative and industry partnership with a vision of creating one of the finest academic destinations in the world.
            </p>
            <Link href="/about-us" className="mt-6 inline-block bg-vignan-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Learn More About Our History
            </Link>
          </motion.div>

          {/* Right Column: Embedded Video */}
          <motion.div
            className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/60"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/DqCDVElxaL8?rel=0"
                title="VIIT Campus Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
