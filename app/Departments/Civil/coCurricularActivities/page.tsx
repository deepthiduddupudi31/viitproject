'use client'
import Sidebar from '../Sidebar'

const activityData = [
  ['Internships', 111, 117, 33, '-', '-'],
  ['Mini Project', 42, 74, 21, '-', '-'],
  ['Major Project', 36, 37, 37, 43, 39],
  ['MOOCS (NPTEL/Coursera etc)', 141, 64, 48, 41, 33],
  ['Add on Courses', 3, 3, 3, 3, 3],
  ['Value added Courses', 7, 5, 5, 3, 2],
  ['Workshops/ Seminars/ Conferences', 2, 2, 2, 1, 1],
  ['Guest Lectures', 1, 3, 2, 1, 1],
  ['Industrial Visits', 3, 3, '-', 4, 9],
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
