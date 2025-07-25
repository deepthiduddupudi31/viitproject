'use client'
import Sidebar from '../Sidebar'

const placementData = [
  ['2022-23', '227', '192', '87.78', '28', '4.41'],
  ['2021-22', '249', '204', '87.33', '27', '3.93'],
  ['2020-21', '237', '186', '86.17', '18.1', '3.59'],
  ['2019-20', '241', '195', '87.18', '17.64', '2.87'],
  ['2018-19', '260', '219', '87.53', '20.3', '2.52'],
]

export default function Placements() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Placements Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Placements</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-blue-100 text-gray-800 text-center">
                <tr>
                  <th className="px-4 py-2 border">Academic Year</th>
                  <th className="px-4 py-2 border">No. of Students</th>
                  <th className="px-4 py-2 border">No. Placed</th>
                  <th className="px-4 py-2 border">Percentage (%)</th>
                  <th className="px-4 py-2 border">Highest Package (LPA)</th>
                  <th className="px-4 py-2 border">Average Package (LPA)</th>
                </tr>
              </thead>
              <tbody>
                {placementData.map((row, idx) => (
                  <tr key={idx} className="text-center odd:bg-white even:bg-gray-50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-2 border">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
