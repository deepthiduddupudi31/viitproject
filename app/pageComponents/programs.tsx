"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Building, BookMarked, ChevronDown } from "lucide-react";

const programData = {
  Undergraduate: {
    icon: <GraduationCap size={20} />,
    programs: [
      { name: "B.Tech - Computer Science & Engineering", code: "CSE" },
      { name: "B.Tech - CSE (AI & Machine Learning)", code: "CSM" },
      { name: "B.Tech - Information Technology", code: "IT" },
      { name: "B.Tech - Electronics & Communication Engineering", code: "ECE" },
      { name: "B.Tech - Electrical & Electronics Engineering", code: "EEE" },
      { name: "B.Tech - Mechanical Engineering", code: "MECH" },
      { name: "B.Tech - Civil Engineering", code: "CIVIL" },
    ],
  },
  Postgraduate: {
    icon: <Briefcase size={20} />,
    programs: [
      { name: "M.Tech - VLSI Design", code: "VLSI" },
      { name: "M.Tech - CSE (Data Science)", code: "DTS" },
      { name: "M.Tech - Power Electronics", code: "PSE" },
    ],
  },
  MBA: {
    icon: <Building size={20} />,
    programs: [
      { name: "Master of Business Administration", code: "MBA" },
      { name: "MBA - Business Analytics", code: "MBA-BA" },
      { name: "MBA - Fintech", code: "MBA-FT" },
    ],
  },
  Doctoral: {
    icon: <BookMarked size={20} />,
    programs: [
      { name: "Ph.D. in Engineering Disciplines", code: "PHD-ENG" },
      { name: "Ph.D. in Sciences", code: "PHD-SCI" },
      { name: "Ph.D. in Management", code: "PHD-MGMT" },
    ],
  },
};

const programCategories = Object.keys(programData) as (keyof typeof programData)[];

export default function Programs() {
  const [selected, setSelected] = useState<keyof typeof programData>("Undergraduate");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full bg-light-bg py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-navy-text">
            Programmes Offered
          </h2>
          <p className="mt-4 text-lg text-slate-text max-w-3xl mx-auto">
            Explore our comprehensive range of undergraduate, postgraduate, and doctoral programmes designed to foster innovation and leadership.
          </p>
        </motion.div>

        {/* --- Main Content Area --- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- Desktop: Vertical Navigation (Left Column) --- */}
          <div className="hidden lg:flex flex-col space-y-2">
            {programCategories.map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selected === key
                    ? 'bg-vignan-blue text-white shadow-md'
                    : 'bg-white text-navy-text hover:bg-slate-100 hover:text-vignan-blue'
                }`}
              >
                {programData[key].icon}
                <span>{key}</span>
              </button>
            ))}
          </div>

          {/* --- Mobile: Dropdown Navigation --- */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full text-left px-4 py-3 rounded-lg font-semibold bg-white text-navy-text shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-3">
                {programData[selected].icon}
                <span>{selected}</span>
              </div>
              <ChevronDown className={`transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} size={20} />
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-slate-200 z-20"
                >
                  {programCategories.map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelected(key);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-slate-100"
                    >
                      {programData[key].icon}
                      <span>{key}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- Program List (Right Column) --- */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-4"
              >
                {programData[selected].programs.map((program, idx) => (
                  <div 
                    key={idx} 
                    className="bg-light-bg/60 p-4 rounded-xl border border-slate-200 flex items-center justify-between hover:border-vignan-blue transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-navy-text text-base lg:text-lg">{program.name}</h3>
                      <p className="text-sm text-slate-text mt-1">Program Code: {program.code}</p>
                    </div>
                    <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-vignan-blue whitespace-nowrap group">
                      View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
