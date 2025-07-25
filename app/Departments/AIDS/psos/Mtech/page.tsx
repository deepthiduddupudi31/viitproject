'use client'
import Sidebar from '../../Sidebar';

const programSpecificOutcomes = [
  {
    id: 'PSO1',
    description:
      'Apply knowledge of Transportation Engineering and management in real time.',
  },
  {
    id: 'PSO2',
    description:
      'Design a transportation system and analyse a system, component, or process in the knowledge areas of transportation engineering in real time problems.',
  },
  {
    id: 'PSO3',
    description:
      'Conduct investigations and address complex Transportation engineering problems; Utilize and develop innovative tools and techniques that are appropriate in Transportation Engineering discipline.',
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
          {/* Program Specific Outcomes */}
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Specific Outcomes (PSOs)</h2>
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
