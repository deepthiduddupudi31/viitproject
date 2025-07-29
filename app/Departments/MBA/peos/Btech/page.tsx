'use client'
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO1',
    description:
      'To provide commendable preparation for a career in mechanical engineering and prepare students for a career at the core/allied industries.',
  },
  {
    id: 'PEO2',
    description:
      'To provide students with a sound foundation in the mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems in mechanical engineering and to prepare them for higher studies.',
  },
  {
    id: 'PEO3',
    description:
      'To exhibit communication skills, team spirit, leadership qualities, life-long managerial skills, integrity and social and environmental responsibility, life-long learning ability, professional ethics and human values.',
  },
];

export default function MtechPage() {
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
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Programme Educational Objectives (PEOs)</h2>
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
