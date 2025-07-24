import React from 'react';
import Image from 'next/image';
import { Target, HeartHandshake, BarChart, ChevronRight } from 'lucide-react';

const MentorMenteePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Mentor-Mentee System
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            An effective system to handle the academic, emotional, and psychological needs of students by identifying their innate strengths and weaknesses.
          </p>
        </div>

        {/* --- Objectives Section --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Objectives of the System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-500">
              <Target className="h-10 w-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Monitor & Enhance</h3>
              <p className="mt-2 text-gray-600">To improve student regularity, discipline, and academic performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
              <HeartHandshake className="h-10 w-10 mx-auto text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Provide Consistent Support</h3>
              <p className="mt-2 text-gray-600">To address emotional, youth, or health-related issues through individual focus.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-purple-500">
              <BarChart className="h-10 w-10 mx-auto text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Promote Balanced Engagement</h3>
              <p className="mt-2 text-gray-600">To encourage participation in both academic and co-curricular activities.</p>
            </div>
          </div>
        </section>

        {/* --- Process Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Process of Mentoring
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Flowchart Image */}
            <div className="flex justify-center">
              <div className="p-2 border-2 border-gray-200 bg-white shadow-xl rounded-lg">
                <Image
                  src="/mentoringSystem.png"
                  alt="Mentor-Mentee System Flowchart"
                  width={600}
                  height={750}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Right Column: Process Details */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">
                Each faculty member is allotted a batch of <strong>15-20 mentees</strong> from the first year. Interaction hours are scheduled, but informal communication is a continuous process.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start"><ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" /><span>Mentors gather personal information to assess family background, behavior, and academic interests.</span></li>
                <li className="flex items-start"><ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" /><span>Based on the issue, the mentee is directed to the appropriate authority (e.g., remedial class coordinator, psychologist).</span></li>
                <li className="flex items-start"><ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" /><span>Academically strong mentees are encouraged to join hackathons, coding contests, and certification programs.</span></li>
                <li className="flex items-start"><ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" /><span>Mentees have the freedom to voice their concerns, with support from the department, counselors, and management.</span></li>
                <li className="flex items-start"><ChevronRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" /><span>Mentors provide encouragement for financial challenges and document all interactions and resolutions.</span></li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default MentorMenteePage;
