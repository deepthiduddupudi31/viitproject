'use client'
import Sidebar from '../Sidebar';

const programsOffered = [
  {
    sno: 1,
    name: "B.Tech. in Electronics and Computer Engineering",
    intake: 60
  }
];

export default function ProgramsOffered() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="Programs Offered Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Programs Offered</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-blue-200 text-gray-900">
                <tr>
                  <th className="px-4 py-2 border">S. No.</th>
                  <th className="px-4 py-2 border">Name of the Program</th>
                  <th className="px-4 py-2 border">Current Intake</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {programsOffered.map((program) => (
                  <tr key={program.sno} className="odd:bg-white even:bg-gray-100">
                    <td className="px-4 py-2 border">{program.sno}</td>
                    <td className="px-4 py-2 border">{program.name}</td>
                    <td className="px-4 py-2 border">{program.intake}</td>
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
