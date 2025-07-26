'use client'
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO-1',
    description:
      'To work in core IT companies/allied industries, educational institutions, research organizations and/or be entrepreneurs.',
  },
  {
    id: 'PEO-2',
    description:
      'To pursue higher education/research in the field of Information Technology.',
  },
  {
    id: 'PEO-3',
    description:
      'To demonstrate communication skills, team spirit, leadership qualities, managerial skills, integrity, social & environmental responsibility and lifelong learning ability, professional ethics and human values in profession/career.',
  },
];

export default function BTechITPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Program Educational Objectives (PEOs)</h2>
          <p className="mb-6 text-gray-700">
            The Graduates of B.Tech in Information Technology will be able:
          </p>
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
