'use client'
import Sidebar from '.././Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mba.jpg"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              VISION OF THE DEPARTMENT
            </h3>
            <p className="text-gray-700 text-justify">
              To Build Managers, Entrepreneurs through excellent standards of
              quality education by keeping pace with rapidly changing environment.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              MISSION OF THE DEPARTMENT
            </h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                <strong>M1:</strong> To enable students to tap their innate
                potential to bloom into business leaders.
              </li>
              <li>
                <strong>M2:</strong> To develop better and efficient managers &
                better job prospects.
              </li>
              <li>
                <strong>M3:</strong> To deliver distinctive education through the
                pioneering use of technology.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
