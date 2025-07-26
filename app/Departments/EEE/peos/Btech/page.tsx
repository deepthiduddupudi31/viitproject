'use client'
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO-1',
    description:
      'Pursue their careers in the core or allied industries, or emerge as entrepreneurs.',
  },
  {
    id: 'PEO-2',
    description:
      'Progress in higher education and conducting research in the interdisciplinary and allied areas.',
  },
  {
    id: 'PEO-3',
    description:
      'Work efficiently as individuals and as team members with strong inter personal skills, lifelong learning abilities, social and ethical responsibilities.',
  },
];

export default function MtechPage() {
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
