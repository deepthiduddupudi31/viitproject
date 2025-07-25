'use client'
import Sidebar from '../../Sidebar';

const programmeOutcomes = [
  {
    id: 'PO1',
    description:
      'Problem Investigations and Development of Solutions: An ability to independently carry out research / investigation and development work to solve practical problems.',
  },
  {
    id: 'PO2',
    description:
      'Academic Writing: An ability to write and present a substantial technical report / document.',
  },
  {
    id: 'PO3',
    description:
      'Model Tool Usage: To apply Modern Engineering tools to solve the problems pertaining to meet global and national needs.',
  },
  {
    id: 'PO4',
    description:
      'Engineering & Society: Work on multidisciplinary projects on emerging areas to solve societal problems.',
  },
  {
    id: 'PO5',
    description:
      'Ethics: Develop professional and ethical attitude and become a socially responsible citizen.',
  },
  {
    id: 'PO6',
    description:
      'Life Long Learning: Engage in lifelong learning to enhance knowledge and competence.',
  },
];

export default function ProgrammeOutcomesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Programme Outcomes (POs)</h2>
          <div className="space-y-4">
            {programmeOutcomes.map((po) => (
              <div key={po.id}>
                <h3 className="font-semibold text-blue-800">{po.id}</h3>
                <p className="text-gray-800 text-justify">{po.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
