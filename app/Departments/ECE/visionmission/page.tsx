'use client'
import Sidebar from '.././Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
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
              To be a Centre of Excellence in the field of Electronics and Communication Engineering through high quality education, research and consultancy producing professionals having global standards with ethical and human values and commitment of service to the society.</p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                <strong>M1:</strong> Impart high quality education with innovative practices in teaching- learning process to empower students to take up professional/career challenges.
              </li>
              <li>
                <strong>M2:</strong> Foster research activities for faculty and students by providing the state-of-the-art facilities and conducive environment
              </li>
              <li>
                <strong>M3:</strong> Promote consultancy works among faculty and students by enhancing Industry –Institute interaction
              </li>
              <li>
                <strong>M4:</strong> Transform students into effective professionals with communication skills, leadership qualities, managerial skills, integrity, team spirit, social & environmental responsibility, lifelong learning ability with professional ethics & human values.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
