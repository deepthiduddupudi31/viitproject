'use client'
import Sidebar from '../Sidebar'

const extensionData = [
  {
    activity: 'Technical Extension Activities',
    data: [2, 2, 2, 2, 2, 2], // From 2023-24 to 2018-19
  },
]

const years = ['2023-24', '2022-23', '2021-22', '2020-21', '2019-20', '2018-19']

export default function ExtensionActivities() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Extension Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Extension Activities</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300 rounded-md shadow-md text-center">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">Activity Type</th>
                    {years.map((year) => (
                      <th key={year} className="px-4 py-2 border">{year}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {extensionData.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border font-medium text-left">{row.activity}</td>
                      {row.data.map((val, i) => (
                        <td key={i} className="px-4 py-2 border">{val}</td>
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
