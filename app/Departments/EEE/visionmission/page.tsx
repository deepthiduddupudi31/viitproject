'use client'
import Sidebar from '.././Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/eee.jpg"
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
              To create high quality Civil Engineering with Global perspective and inculcate among them Social Consciousness, Work Ethics, and make them psychologically strong.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                <strong>M1:</strong> To impart high quality education with innovative practices in teaching - learning process to empower students to fit competitively into the present and future industrial requirements.
              </li>
              <li>
                <strong>M2:</strong> To transform students into effective professionals by providing communication skills, leadership qualities, managerial ability, team spirit, social responsibility to serve the nation, physical fitness with ethical and human values.
              </li>
              <li>
                <strong>M3:</strong> To promote research activities amongst faculty and students by providing necessary facilities and conducive environment.
              </li>
              <li>
                <strong>M4:</strong> To promote consultancy work amongst faculty and students by enhancing industry institution interactions.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
