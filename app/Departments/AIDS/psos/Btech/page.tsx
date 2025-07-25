'use client'
import Sidebar from '../../Sidebar';

const programSpecificOutcomes = [
  {
    id: 'PSO1',
    description:
      'Design and develop efficient AI-based systems using core AI and DS principles, algorithms and problem-solving techniques.',
  },
  {
    id: 'PSO2',
    description:
      'Apply advanced technology concepts including Deep Learning Models, Pattern Recognition, Cloud System Services, and Big Data Analytics to solve complex intelligent problems.',
  },
];

export default function PSOPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Layout with Sidebar and Content */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />

        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Specific Outcomes (PSOs)</h2>

          {/* Table without visible borders */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-blue-800 font-semibold border-b">
                  {/* <th className="py-2 pr-4 w-1/6">PSO Code</th> */}
                  {/* <th className="py-2">Description</th> */}
                </tr>
              </thead>
              <tbody>
                {programSpecificOutcomes.map((pso) => (
                  <tr key={pso.id} className="align-top border-b last:border-b-0">
                    <td className="py-2 pr-4 font-medium text-gray-800">{pso.id}</td>
                    <td className="py-2 text-gray-700 text-justify">{pso.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
