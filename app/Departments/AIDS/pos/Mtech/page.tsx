'use client'
import Sidebar from '../../Sidebar';

const programmeOutcomes = [
  {
    id: 'PO1',
    title: 'Problem Investigations and Development of Solutions',
    description:
      'An ability to independently carry out research / investigation and development work to solve practical problems.',
  },
  {
    id: 'PO2',
    title: 'Academic Writing',
    description:
      'An ability to write and present a substantial technical report / document.',
  },
  {
    id: 'PO3',
    title: 'Model Tool Usage',
    description:
      'To apply Modern Engineering tools to solve the problems pertaining to meet global and national needs.',
  },
  {
    id: 'PO4',
    title: 'Engineering & Society',
    description:
      'Work on multi disciplinary projects on Emerging areas to solve the societal problems.',
  },
  {
    id: 'PO5',
    title: 'Ethics',
    description:
      'Develop professional and ethical attitude and become socially responsible citizen.',
  },
  {
    id: 'PO6',
    title: 'Life Long Learning',
    description:
      'Engage in lifelong learning to enhance knowledge and competence.',
  },
];

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Programme Outcomes (POs)</h2>
          <div className="space-y-4">
            {programmeOutcomes.map((po) => (
              <div key={po.id}>
                <h3 className="font-semibold text-gray-800">{po.id}: {po.title}</h3>
                <p className="text-gray-700 text-justify">{po.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
