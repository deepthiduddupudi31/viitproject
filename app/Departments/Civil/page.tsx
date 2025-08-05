'use client';
import Sidebar from './Sidebar'; 
import { BookOpen,Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProfessionalFocusItem = ({ title, children }) => (
  <div className="mb-6 p-5 bg-slate-50 rounded-lg shadow-sm last:mb-0">
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

export default function CsePageLayout() {
  
const focusAreas = [
    { title: "Core Civil Engineering", description: "Mastering the fundamentals of structural analysis, fluid mechanics, surveying, and construction materials to build a strong foundation in civil engineering.." },
    { title: "Roads and construction", description: "Exploring the design and development of highways, pavements, and modern construction practices including project management and sustainable building techniques" },
    { title: "Intelligent Engineering", description: "Diving into the integration of smart technologies in civil infrastructure through building information modeling (BIM), GIS, remote sensing, and data-driven decision-making for efficient planning and maintenance." },
  ];


const AnimatedBranchName = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

  return (
    <motion.div
  key={key}
  variants={container}
  initial="hidden"
  animate="visible"
  className="flex flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 gap-y-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#0077B5] whitespace-normal break-words"
  style={{ perspective: '1000px' }}
>
  {text.split(' ').map((wordText, wordIndex) => (
    <span key={wordIndex} className="flex">
      {wordText.split('').map((letterChar, letterIndex) => (
        <motion.span
          key={letterIndex}
          variants={letter}
          className="inline-block"
        >
          {letterChar}
        </motion.span>
      ))}
      {/* Add non-breaking space between words */}
      <span>&nbsp;</span>
    </span>
  ))}
</motion.div>

  );
};


  return (
    <div className="bg-slate-100 py-2 sm:py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* <header className="bg-white p-4 lg:p-10 rounded-xl shadow-sm mb-6 lg:mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Department of
            <br />
            <AnimatedBranchName text="Civil Engineering" />
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Shaping the future of computing through excellence in academia and pioneering research.
          </p>
        </header> */}
<header className="bg-white px-6 py-16 rounded-xl shadow-sm mb-6 relative">
  <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
    <img
      src="/civil-logo.png"
      alt="Civil Engineering"
      className="w-52 h-52 object-contain"
    />
  </div>

  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-16">
    <div className="flex-1 text-center lg:text-left">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2">
          Department of
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-2 ml-4">
          <AnimatedBranchName text="Civil Engineering" />
        </h1>
      </div>

      <p className="text-lg text-slate-500 mt-2">
        Shaping the future of computing through excellence in academia and pioneering research.
      </p>
    </div>
  </div>
</header>


{/* <header className="bg-white px-6 py-16 rounded-xl shadow-sm mb-6 relative">
  <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
    <Building2 className="text-indigo-500 w-24 h-24" />
  </div>

  <div className="flex flex-col items-center justify-center text-center">
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
        Department of <br />
        <AnimatedBranchName text="Civil Engineering" />
      </h1>
      <p className="text-lg text-slate-500 max-w-xl mx-auto">
        Shaping the future of computing through excellence in academia and pioneering research.
      </p>
    </div>
  </div>
</header> */}



        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          <Sidebar />

          <main className="flex-1 min-w-0">
            <div className="space-y-6">
              {/* <section className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">About The Department</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p>Established in 2002, the Department of Civil Engineering at Vignan’s Institute of Information Technology is a hub of academic and research excellence. We offer comprehensive B.Tech and M.Tech programs designed to provide a deep understanding of all facets of computer science.</p>
                </div>
              </section> */}

              
              
              
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <section className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
                  <div className="flex flex-col items-start gap-6">
                    <div className="w-full text-center">
                      <img src="https://vignaniit.edu.in/images/civil_hod2.jpeg" alt="Dr. K. Mohan Rao" className="w-52 h-52 mx-auto object-cover border-4 border-slate-200 rounded-xl" />
                      <h3 className="mt-4 text-lg font-bold text-slate-900">Dr.Govinda lalam</h3>
                      <p className="text-indigo-600 font-semibold text-sm">Head of Department, Civil</p>
                    </div>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                      <h2 className="text-2xl font-bold text-slate-800 !mb-2 text-center md:text-left">Message from the HoD</h2>
                      <p>"A warm welcome to CIVIL@VIIT. Our department is built on a foundation of academic rigor and creative research. We are dedicated to nurturing the next generation of innovators who will shape our digital future by focusing on key areas of study."</p>
                    </div>
                  </div>
                </section>
                <section className="bg-white p-8 rounded-lg shadow-sm lg:col-span-3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Core Focus Areas</h2>
                  <div>
                    {focusAreas.map((area) => (
                      <ProfessionalFocusItem key={area.title} title={area.title}>{area.description}</ProfessionalFocusItem>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
