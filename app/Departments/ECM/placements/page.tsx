'use client'
import Sidebar from '../Sidebar'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const placementData = [
  { sno: 1, year: '2019-20', eligible: 27, placed: 26, percentage: 96.3 },
  { sno: 2, year: '2018-19', eligible: 34, placed: 34, percentage: 100 },
  { sno: 3, year: '2017-18', eligible: 10, placed: 10, percentage: 100 },
  { sno: 4, year: '2016-17', eligible: 10, placed: 13, percentage: 77 },
  { sno: 5, year: '2015-16', eligible: 18, placed: 17, percentage: 94.4 },
]

export default function EcmPlacements() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="ECM Placements Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Placements (ECM)
          </h2>

          {/* Table Section */}
          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Academic Year</th>
                    <th className="px-4 py-2 border">Students Eligible</th>
                    <th className="px-4 py-2 border">Students Placed</th>
                    <th className="px-4 py-2 border">Percentage (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {placementData.map((row) => (
                    <tr
                      key={row.sno}
                      className="odd:bg-white even:bg-gray-50 text-center"
                    >
                      <td className="px-4 py-2 border">{row.sno}</td>
                      <td className="px-4 py-2 border">{row.year}</td>
                      <td className="px-4 py-2 border">{row.eligible}</td>
                      <td className="px-4 py-2 border">{row.placed}</td>
                      <td className="px-4 py-2 border">{row.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bar Chart Section */}
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Placement Statistics (Bar Graph)
            </h3>
            <div className="w-full h-80 bg-white p-4 border rounded-lg shadow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={placementData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="eligible"
                    fill="#3b82f6"
                    name="Students Eligible"
                  />
                  <Bar
                    dataKey="placed"
                    fill="#10b981"
                    name="Students Placed"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
