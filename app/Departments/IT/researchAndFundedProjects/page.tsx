'use client'
import Sidebar from '../Sidebar'

const researchData = [
  ['1', '2023-2024', '0', '16', '16'],
  ['2', '2022-2023', '0', '10', '10'],
  ['3', '2021-2022', '0', '10', '10'],
  ['4', '2020-2021', '0', '15', '15'],
  ['5', '2019-2020', '0', '6', '6'],
  ['6', '2018-2019', '0', '7', '7'],
]

const inhouseProjects = [
  'A Cost Effective Automatic Online Bus Information System using RFID and ZigBee.',
  'Online RFID based Student Attendance System.',
  'Online Finger Print based Staff Attendance System.',
  'IoT based Home Automation using Raspberry Pi and Arduino.',
  'Automatic Water Management System.',
  'IoT enabled Vehicle Accident Avoidance System using Alcohol Detection.',
]

export default function Research() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/IT.jpg"
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

          {/* Research Publications Table */}
          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Year</th>
                    <th className="px-4 py-2 border">National Journals</th>
                    <th className="px-4 py-2 border">International Journals</th>
                    <th className="px-4 py-2 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.map((row, idx) => (
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

          {/* Inhouse Research Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Inhouse Research Projects</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {inhouseProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
