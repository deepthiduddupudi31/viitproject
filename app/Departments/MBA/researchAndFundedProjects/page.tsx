'use client'
import Sidebar from '../Sidebar'

const researchData = [
  ['1', '2016-17', '-', '-', '1', '-', '1'],
  ['2', '2015-16', '-', '2', '-', '2', '4'],
  ['3', '2014-15', '-', '2', '-', '-', '2'],
  ['4', '2013-14', '-', '1', '-', '-', '1'],
  ['5', '2012-13', '-', '8', '-', '-', '8'],
]

export default function Research() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mba.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Publications</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Year</th>
                    <th className="px-4 py-2 border">National Journal</th>
                    <th className="px-4 py-2 border">International Journal</th>
                    <th className="px-4 py-2 border">National Conference</th>
                    <th className="px-4 py-2 border">International Conference</th>
                    <th className="px-4 py-2 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-white even:bg-gray-50 text-center"
                    >
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
