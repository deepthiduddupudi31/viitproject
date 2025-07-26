'use client'
import Sidebar from '../../Sidebar';

const programmeSpecificOutcomes = [
  {
    id: 'PSO1',
    description:
      'Apply advanced algorithms in communication systems, signal processing, and image processing to solve complex problems.',
  },
  {
    id: 'PSO2',
    description:
      'Exploit the concepts of VLSI and Embedded Systems for the implementation of real-time applications.',
  },
];


export default function CivilPage() {
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
          {/* Program Specific Outcomes */}
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Specific Outcomes (PSOs)</h2>
          <div className="space-y-4">
            {programmeSpecificOutcomes.map((pso) => (
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


