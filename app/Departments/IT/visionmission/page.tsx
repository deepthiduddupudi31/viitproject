'use client'
import Sidebar from '../Sidebar';

export default function ITPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/IT.jpg"
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
              To be a centre of excellence in high quality education and research producing globally competent IT professionals with ethical/human values to meet the needs of Information Technology sector and related services.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                <strong>M1:</strong> To impart high quality education through innovative teaching - learning practices resulting in strong software & hardware knowledge and skills to enable students to meet the challenges of IT profession.
              </li>
              <li>
                <strong>M2:</strong> To facilitate faculty and students to carry out research work by providing necessary latest facilities and a conducive environment.
              </li>
              <li>
                <strong>M3:</strong> To mould the students into effective professionals with necessary communication skills, team spirit, leadership qualities, managerial skills, integrity, social & environmental responsibility and lifelong learning ability with professional ethics and human values.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
