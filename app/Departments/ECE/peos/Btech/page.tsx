'use client'
import Sidebar from '../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO1',
    description:
      'Utilize their updated knowledge and skills to adapt themselves in core and software companies to pursue their career successfully.',
  },
  {
    id: 'PEO2',
    description:
      'Augment their proficiency towards higher education and research.',
  },
  {
    id: 'PEO3',
    description:
      'Solve contemporary issues related to society, ethical and human values with lifelong learning.',
  },
];


export default function MtechPage() {
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
