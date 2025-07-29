'use client'
import Sidebar from '../Sidebar'

const extraCurricularData = [
  ['Sports & Games', 2, 1, 1, 1, 4],
  ['Cultural activities', 2, 1, 4, 1, 1],
]


export default function ExtraCurricular() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="Activities Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Extra Curricular Activities</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">A.Y.</th>
                    <th className="px-4 py-2 border">2022-23</th>
                    <th className="px-4 py-2 border">2021-22</th>
                    <th className="px-4 py-2 border">2020-21</th>
                    <th className="px-4 py-2 border">2019-20</th>
                    <th className="px-4 py-2 border">2018-19</th>
                  </tr>
                </thead>
                <tbody>
                  {extraCurricularData.map((row, idx) => (
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
