'use client'
import Sidebar from '../Sidebar'

const placementData = [
  ['2022-23', '144', '115', '79.86', '6.6', '2.4'],
  ['2021-22', '143', '114', '79.72', '4.58', '2.1'],
  ['2020-21', '139', '112', '80.58', '4.01', '2.16'],
  ['2019-20', '170', '157', '92.35', '3', '1.57'],
  ['2018-19', '176', '157', '89.20', '2.6', '1.57'],
]

export default function Placements() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
          alt="Placements Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Placements</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">Academic Year</th>
                    <th className="px-4 py-2 border">No. of Students</th>
                    <th className="px-4 py-2 border">No. of Students Placed</th>
                    <th className="px-4 py-2 border">Percentage (%)</th>
                    <th className="px-4 py-2 border">Highest Package (LPA)</th>
                    <th className="px-4 py-2 border">Average Package (LPA)</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2 border">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
