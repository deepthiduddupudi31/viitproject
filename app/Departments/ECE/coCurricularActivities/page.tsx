'use client'
import Sidebar from '../Sidebar'

const activityData = [
  ['Internships', 600, 304, 109, '-', '-'],
  ['Mini Project', 42, 96, 76, '-', '-'],
  ['Major Project', 57, 31, 49, 48, 51],
  ['MOOCS (NPTEL/Coursera etc)', 137, '-', 151, 124, '-'],
  ['Add on Courses', 3, 3, 3, 3, 3],
  ['Value added Courses', 6, 4, 4, 7, 5],
  ['Workshops/ Seminars/ Conferences', 1, 0, 0, 1, 1],
  ['Guest Lectures', 2, 4, 4, 3, 3],
  ['Industrial Visits', 2, 2, '-', 2, '-'],
]


export default function CoCurricular() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
          alt="Activities Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Co-Curricular Activities</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">A.Y</th>
                    <th className="px-4 py-2 border">2022-23</th>
                    <th className="px-4 py-2 border">2021-22</th>
                    <th className="px-4 py-2 border">2020-21</th>
                    <th className="px-4 py-2 border">2019-20</th>
                    <th className="px-4 py-2 border">2018-19</th>
                  </tr>
                </thead>
                <tbody>
                  {activityData.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2 border">
                          {cell}
                        </td>
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
