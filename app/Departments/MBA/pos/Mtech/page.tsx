'use client'
import Sidebar from '../../Sidebar';

const programOutcomes = [
  {
    id: 'PO1',
    description:
      'Knowledge: Apply knowledge of management theories and practices to solve business problems.',
  },
  {
    id: 'PO2',
    description:
      'Problem Analysis: Foster analytical and critical thinking abilities of data-based decision making.',
  },
  {
    id: 'PO3',
    description:
      'Value: Ability to develop Value based Leadership.',
  },
  {
    id: 'PO4',
    description:
      'Communication: Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business.',
  },
  {
    id: 'PO5',
    description:
      'Individual & Team work: Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.',
  },
  {
    id: 'PO6',
    description:
      'Usage of Modern Tools: Use of appropriate qualitative & quantitative techniques to solve business problems.',
  },
  {
    id: 'PO7',
    description:
      'Social & Environmental Responsiveness: Understand the relevance of proper management practices with social and environmental concerns and foster the need of sustainability in development.',
  },
  {
    id: 'PO8',
    description:
      'Life-long learning: Enhanced employability attributes by being adoptive to continuous learning.',
  },
];

export default function POsPage() {
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
            Program Outcomes (POs)
          </h2>
          <div className="space-y-4">
            {programOutcomes.map((po) => (
              <div key={po.id}>
                <h3 className="font-semibold text-gray-800">{po.id}</h3>
                <p className="text-gray-700 text-justify">{po.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
