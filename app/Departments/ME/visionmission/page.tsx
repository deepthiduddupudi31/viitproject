'use client'
import Sidebar from '.././Sidebar';

export default function MechVisionMissionPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">VISION & MISSION</h2>

          {/* Vision */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">VISION OF THE DEPARTMENT</h3>
            <p className="text-gray-700 text-justify">
              To be a center of excellence in academics, research, and consultancy in the field of Mechanical Engineering
              producing globally competent professionals with ethical and human values for national/international development.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                To impart high-quality education through innovative teaching & learning methods to enable students to be
                globally competent to face the challenges of profession/career.
              </li>
              <li>
                To promote research activities amongst faculty and students by providing necessary facilities and environment.
              </li>
              <li>
                To mould the students into effective professionals with necessary communication skills, team spirit, leadership
                qualities, industry-managerial skills, integrity, social & environmental responsibility, and lifelong learning
                ability with professional ethics & human values.
              </li>
              <li>
                To promote consultancy work amongst faculty and students by enhancing industry-institution interactions.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
