'use client';
import Sidebar from '../Sidebar';

const activityData = [
  ['Internships', 250, 160, 126, 134, 'NA', 'NA'],
  ['Mini Project', 210, 268, 272, 197, 212, 210],
  ['Major Project', 255, 233, 252, 237, 254, 263],
  ['MOOCS (NPTEL/Coursera etc)', 35, 6, 7, 25, 63, 4],
  ['Add on Courses', 3, 3, 3, 3, 3, 3],
  ['Value added Courses', 6, 8, 7, 7, 6, 5],
  ['Workshops/ Seminars/ Conferences', 3, 10, 4, 5, 3, 1],
  ['Expert Lectures', 3, 10, 4, 5, 3, 1],
  ['Industrial Visits', 2, 2, 1, 0, 2, 2],
];

export default function CoCurricular() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
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
                    <th className="px-4 py-2 border text-left">Activity</th>
                    <th className="px-4 py-2 border">2023-24</th>
                    <th className="px-4 py-2 border">2022-23</th>
                    <th className="px-4 py-2 border">2021-22</th>
                    <th className="px-4 py-2 border">2020-21</th>
                    <th className="px-4 py-2 border">2019-20</th>
                    <th className="px-4 py-2 border">2018-19</th>
                  </tr>
                </thead>
                <tbody>
                  {activityData.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-4 py-2 border ${
                            cIdx === 0 ? 'text-left font-medium' : 'text-center'
                          }`}
                        >
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
  );
}
