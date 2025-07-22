import React from 'react';
import Image from 'next/image';
import { TrendingUp, Users, CheckSquare } from 'lucide-react'; // Icons for visual context

const SpecialProgramsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* --- Page Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Special Programs for Student Diversity
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            A well-defined system to identify and support advanced and slow learners based on their unique learning styles and academic performance.
          </p>
        </div>

        {/* --- Flowchart Image --- */}
        <div className="mb-16">
          <div className="p-2 border-2 border-gray-200 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
            <Image
              src="/obepractice.jpg"
              alt="Assessment and Support Flowchart for Learners"
              width={1000}
              height={800}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
        
        {/* --- Assessment Criteria Section --- */}
        <section className="bg-white p-8 rounded-lg shadow-sm border mb-12">
           <h2 className="text-2xl font-bold text-gray-800 mb-4">Assessment of Learning Abilities</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 leading-relaxed">
              <p><strong className="text-blue-700">Advanced Learners:</strong> Students with an SGPA above 7 in the previous semester, or based on EAMCET rank and MID-I performance for first-year students.</p>
              <p><strong className="text-orange-700">Slow Learners:</strong> Students with an SGPA below 7 in the preceding semester exam, or identified similarly for first-year students.</p>
           </div>
        </section>

        {/* --- Comparison Grid for Learner Programs --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Card for Advanced Learners */}
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-5">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h3 className="ml-4 text-2xl font-bold text-blue-800">Programs for Advanced Learners</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Consistently monitored to upgrade skills and achieve higher goals for holistic development.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Self-learning via SWAYAM, NPTEL, Coursera.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Participation in Hackathons & Coding Contests.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Industry Projects & Semester Long Internships.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Special classes for GATE, GRE, and TOEFL.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Guidance for Honors/Minors Degree Programs.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" /><span>Research guidance for publishing articles.</span></li>
            </ul>
          </div>

          {/* Card for Slow Learners */}
          <div className="bg-orange-50 border border-orange-200 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-5">
              <Users className="h-8 w-8 text-orange-600" />
              <h3 className="ml-4 text-2xl font-bold text-orange-800">Programs for Slow Learners</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Focused on continuous monitoring and a strong mentor-mentee system to address difficulties.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span>Remedial and backlog-focused classes.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span>Access to specialized e-resources and course material.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span>Peer mentoring with support from advanced learners.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span>Access to recorded video lectures on the LMS platform.</span></li>
              <li className="flex items-start"><CheckSquare className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span>Effective counseling for personal and social factors.</span></li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
};

export default SpecialProgramsPage;
