'use client';
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO1',
    description:
      'To pursue a career in core software/hardware companies or allied industries of Computer Science and Engineering, educational institutions, and research organizations.',
  },
  {
    id: 'PEO2',
    description:
      'To pursue higher education and research in the field of Computer Science and Engineering.',
  },
  {
    id: 'PEO3',
    description:
      'To demonstrate team spirit, leadership qualities, managerial skills, integrity, social and environmental responsibility, lifelong learning ability with professional ethics and human values in profession/career with good communication skills.',
  },
];

export default function CsePeosPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/WEB_01.jpg" // Optional: Replace with CSE-related banner
          alt="CSE Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Main Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Programme Educational Objectives (PEOs)
          </h2>
          <div className="space-y-4">
            {programmeEducationalObjectives.map((peo) => (
              <div key={peo.id}>
                <h3 className="font-semibold text-gray-800">{peo.id}</h3>
                <p className="text-gray-700 text-justify">{peo.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
