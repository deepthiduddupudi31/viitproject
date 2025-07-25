'use client'
import Sidebar from '../Sidebar'

const placementData = [
  ['2023-24', '51', '41', '80.39'],
  ['2022-23', '56', '54', '96.42'],
  ['2021-22', '55', '51', '92.72'],
  ['2020-21', '47', '47', '100'],
  ['2019-20', '48', '44', '91.66'],
  ['2018-19', '37', '35', '94.59'],
]

export default function Placements() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/IT.jpg"
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

          {/* Placement Table */}
          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">Batch</th>
                    <th className="px-4 py-2 border">Students Eligible</th>
                    <th className="px-4 py-2 border">Students Placed</th>
                    <th className="px-4 py-2 border">Percentage (%)</th>
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

          {/* Placement Image After Table */}
          <div className="mt-8">
            <img
              src="https://vignaniit.edu.in/images/it_placements.png"
              alt="IT Placements"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </main>
      </div>
    </div>
  )
}
