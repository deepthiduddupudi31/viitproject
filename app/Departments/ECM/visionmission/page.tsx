'use client'
import Sidebar from '.././Sidebar';

export default function EcmVisionMission() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="ECM Department Banner"
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
              To Produce globally competent engineers in the area of Electronics & Computers and
              to create technical manpower for the current and future demands of the nation.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              MISSION OF THE DEPARTMENT
            </h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                Introducing innovative practices of teaching and learning.
              </li>
              <li>
                Undertaking research in the thrust areas of software and hardware.
              </li>
              <li>
                To serve the software and hardware industry by producing quality engineers.
              </li>
              <li>
                Inculcating strong set of Ethical values.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
