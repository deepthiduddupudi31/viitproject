import React from 'react';
import { BookMarked } from 'lucide-react'; // An icon representing regulations/documents

// Organized data for course outcome regulations
const courseOutcomes = [
  { name: "VR23 Regulation", href: "https://vignaniit.edu.in/aqar2324uploads/criteria1/1.1.1/1.1.1c_VR23%20COs.pdf" },
  { name: "VR22 Regulation", href: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1c%20(vr22).pdf" },
  { name: "VR21 Regulation", href: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1c%20(vr21).pdf" },
  { name: "VR20 Regulation", href: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1c%20(vr20).pdf" },
  { name: "VR19 Regulation", href: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1c%20(vr19).pdf" },
  { name: "VR17 Regulation", href: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1c%20(vr17).pdf" },
];

const CourseOutcomesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Course Outcomes
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Detailed course outcomes as per the regulations of each academic year.
          </p>
        </div>

        {/* Grid of Regulation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseOutcomes.map((outcome) => (
            <a
              key={outcome.name}
              href={outcome.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1"
            >
              <BookMarked className="h-12 w-12 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                {outcome.name}
              </span>
            </a>
          ))}
        </div>
        
      </div>
    </main>
  );
};

export default CourseOutcomesPage;
