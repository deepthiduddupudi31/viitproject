'use client'
import Sidebar from '.././Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/bsh.jpg"
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
              • To be a Centre of Excellence for High Quality Education and Research generating highly competent professionals with ethical & human values to serve the society.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                To impart high quality education with innovative practices in teaching-learning process by empowering students to take up professional challenges.
              </li>
              <li>
                To foster the spirit of research amongst faculty and students by providing state-of-the-art facilities and conducive environment.
              </li>
              <li>
                To transform students into professionals by imparting social responsibility, communication skills, leadership qualities, managerial skills, team spirit, and continuous learning.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
