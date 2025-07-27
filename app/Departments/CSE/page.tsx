// src/app/cse/page.jsx
'use client';
// Removed useState, ChevronDown, PanelLeft, clsx from here
import Sidebar from './Sidebar'; // Use the new self-contained Sidebar
import { BookOpen } from 'lucide-react';

// Unchanged: ProfessionalFocusItem component
const ProfessionalFocusItem = ({ title, children }) => (
  <div className="mb-6 p-5 bg-slate-50 rounded-lg shadow-sm last:mb-0">
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

export default function CsePageLayout() {
  // REMOVED: isMobileMenuOpen state is now inside the Sidebar component
  
  const focusAreas = [
    { title: "Core Computer Science", description: "Mastering the fundamentals from algorithms and data structures to cryptography and security." },
    { title: "Systems & Software", description: "Exploring computer architecture, operating systems, compilers, and modern software engineering practices." },
    { title: "Intelligent Systems", description: "Diving into the exciting fields of AI, machine learning, data mining, and information retrieval." },
  ];

  return (
    <div className="bg-slate-100 py-6 sm:py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Department Hero Section (Unchanged) */}
        <header className="bg-white p-8 lg:p-10 rounded-xl shadow-sm mb-6 lg:mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Department of
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Computer Science & Engineering
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Shaping the future of computing through excellence in academia and pioneering research.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          
          {/* === UPDATED: SIMPLIFIED SIDEBAR === */}
          {/* This single component now handles both mobile and desktop views */}
          <Sidebar />

          <main className="flex-1 min-w-0">
            {/* REMOVED: The mobile menu logic is no longer needed here */}
            
            <div className="space-y-6">
              {/* "About The Department" Section (Unchanged) */}
              <section className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">About The Department</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p>Established in 2002, the Department of Computer Science and Engineering at Vignan’s Institute of Information Technology is a hub of academic and research excellence. We offer comprehensive B.Tech and M.Tech programs designed to provide a deep understanding of all facets of computer science.</p>
                </div>
              </section>

              {/* Grid Layout (Unchanged) */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* HoD's Message Section (Unchanged) */}
                <section className="bg-white p-8 rounded-lg shadow-sm lg:col-span-2">
                  <div className="flex flex-col items-start gap-6">
                    <div className="w-full text-center">
                      <img src="https://vignaniit.edu.in/images/mohan1.png" alt="Dr. K. Mohan Rao" className="w-32 h-32 mx-auto object-cover border-4 border-slate-200 rounded-xl" />
                      <h3 className="mt-4 text-lg font-bold text-slate-900">Dr. K. Mohan Rao</h3>
                      <p className="text-indigo-600 font-semibold text-sm">Head of Department, CSE</p>
                    </div>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                      <h2 className="text-2xl font-bold text-slate-800 !mb-2 text-center md:text-left">Message from the HoD</h2>
                      <p>"A warm welcome to CSE@VIIT. Our department is built on a foundation of academic rigor and creative research. We are dedicated to nurturing the next generation of innovators who will shape our digital future by focusing on key areas of study."</p>
                    </div>
                  </div>
                </section>
                {/* Core Focus Areas Section (Unchanged) */}
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
