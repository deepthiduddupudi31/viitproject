'use client'
import Sidebar from '../../../Sidebar';

const programSpecificOutcomes = [
  {
    id: 'PSO1',
    description:
      'Apply appropriate methodology and modern engineering/IT tools to meet the international standards in the area of Communication Engineering.',
  },
  {
    id: 'PSO2',
    description:
      'Apply appropriate methodology and modern engineering/IT tools to meet the international standards in the area of Communication Engineering.',
  },
];

export default function MTechPSOPage() {
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
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Program Specific Outcomes (PSOs)
          </h2>
          <div className="space-y-4">
            {programSpecificOutcomes.map((pso) => (
              <div key={pso.id}>
                <h3 className="font-semibold text-gray-800">{pso.id}</h3>
                <p className="text-gray-700 text-justify">{pso.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
