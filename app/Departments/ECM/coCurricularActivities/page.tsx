'use client';
import Sidebar from '../Sidebar';

const activityData = [
  ['Internships', '150', '38', '24', '-', '-'],
  ['Mini Project', '-', '12', '12', '-', '-'],
  ['Major Project', '12', '12', '10', '10', '11'],
  ['MOOCS (NPTEL / Coursera etc)', '22', '-', '-', '39', '-'],
  ['Add on Courses', '03', '03', '03', '03', '03'],
  ['Value added Courses', '03', '02', '02', '02', '02'],
  ['Workshops / Seminars / Conferences', '15', '15', '17', '15', '15'],
  ['Guest Lectures', '01', '02', '-', '03', '01'],
  ['Industrial Visits', '01', '-', '-', '-', '-'],
];

export default function CoCurricularActivities() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="Co-Curricular Activities Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Co-Curricular Activities
          </h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border text-left">A.Y</th>
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
                        <td key={cIdx} className="px-4 py-2 border text-center">
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
