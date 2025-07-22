import React from 'react';
import Image from 'next/image';
import { CheckCircle, Zap, Users, Lightbulb, Blend } from 'lucide-react';

// A reusable card component for different methodology sections
const MethodologyCard = ({ icon, title, children, borderColor = 'border-blue-500' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${borderColor}`}>
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="pl-1 space-y-3 text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const TeachingMethodologiesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* --- Page Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Teaching Methodologies
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our student-centric approach, guided by NEP 2020, fosters an engaging and effective learning environment through a blend of modern and interactive methods.
          </p>
        </div>

        {/* --- Flowchart Image --- */}
        <div className="mb-16">
          <div className="p-2 border-2 border-gray-200 bg-white shadow-lg rounded-lg">
            <Image
              src="/teachingMethods.jpg"
              alt="Flowchart of Student-Centric Teaching Methodologies"
              width={1200}
              height={675}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* --- Main Content Sections --- */}
        <div className="space-y-12">

          {/* Faculty Guidance Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
             <h2 className="text-2xl font-bold text-gray-800 mb-4">Faculty Guidance & Implementation</h2>
             <p className="text-gray-700 leading-relaxed mb-6">
                The institute employs student-centric methods following NEP 2020. A monitoring committee oversees the execution and ensures faculty are guided to adopt these methods. Key instructions include:
             </p>
             <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Utilizing ICT tools (MATLAB, Fusion 360, Google Colab) for at least 40% of classes.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Teaching a minimum of two topics per course with innovative methods.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Uploading all learning materials to the 'MOODLE' LMS.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Completing online courses via NPTEL, Coursera, and participating in FDPs.</span></li>
             </ul>
          </div>
          
          {/* Grid for Methodology Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MethodologyCard
              icon={<Zap className="h-7 w-7 text-purple-600" />}
              title="Experiential & Experiment Learning"
              borderColor="border-purple-500"
            >
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Integration of theory with practical sessions.</li>
                <li>Minor projects for all II & III Year UG students.</li>
                <li>Semester-long internships in the final year.</li>
                <li>Skill Development Labs and Value-Added Courses.</li>
                <li>Activities via professional chapters (IEEE, ACM) and clubs.</li>
              </ul>
            </MethodologyCard>

            <MethodologyCard
              icon={<Users className="h-7 w-7 text-teal-600" />}
              title="Participative Learning"
              borderColor="border-teal-500"
            >
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Innovative methods like Think-Pair-Share (TPS) and Flipped Classrooms.</li>
                <li>Option to complete 14 courses via MOOCs.</li>
                <li>Peer learning, expert lectures, and collaborative projects.</li>
                <li>Research guidance for publishing in indexed journals.</li>
              </ul>
            </MethodologyCard>

            <MethodologyCard
              icon={<Lightbulb className="h-7 w-7 text-orange-600" />}
              title="Problem-Solving Methodologies"
              borderColor="border-orange-500"
            >
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Encouraging participation in Start-up challenges and technical exhibitions.</li>
                <li>A dedicated course on "Engineering Exploration".</li>
                <li>Collaboration with platforms like HackerEarth, CodeChef, and Geeks for Geeks.</li>
                <li>Engagement in community service projects.</li>
              </ul>
            </MethodologyCard>

            <MethodologyCard
              icon={<Blend className="h-7 w-7 text-rose-600" />}
              title="Blended Teaching Approach"
              borderColor="border-rose-500"
            >
              <p>Over <strong>3,554 video lectures</strong> developed by faculty are available on the institute's LMS portal.</p>
              <ul className="list-disc list-outside pl-5 space-y-2 mt-2">
                <li>Use of ICT tools (Google Forms, Mentimeter) for formative assessments.</li>
                <li>Access to a digital library with <strong>6,226 e-books</strong> and <strong>537 journals</strong> (IEEE, ASCE, ASME, Elsevier).</li>
              </ul>
            </MethodologyCard>
          </div>

        </div>
      </div>
    </main>
  );
};

export default TeachingMethodologiesPage;
