'use client'
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO1',
    description:
      'Developing business and management competencies among the future managers.',
  },
  {
    id: 'PEO2',
    description:
      'Developing the ability to examine and analyze the impact of changing environment and to respond appropriately at strategic level.',
  },
  {
    id: 'PEO3',
    description:
      'Facilitating deeper insights, stimulation towards creative thinking, and honing of management skills.',
  },
  {
    id: 'PEO4',
    description:
      'Motivating the students to acquire decision-making, leadership and entrepreneurial capabilities.',
  },
  {
    id: 'PEO5',
    description:
      'Producing aspiring and dynamic managers to meet the requirements of business and industry.',
  },
];

export default function PEOsPage() {
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
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Program Educational Objectives (PEOs)
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
