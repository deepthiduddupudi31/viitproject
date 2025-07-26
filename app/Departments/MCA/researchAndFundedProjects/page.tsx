'use client'
import Sidebar from '../Sidebar'

const inhouseProjects = [
  'A Cost Effective Automatic Online Bus Information System using RFID and ZigBee.',
  'Online RFID based Student Attendance System.',
  'Online Finger Print based Staff Attendance System.',
  'IoT based Home Automation using Raspberry Pi and Arduino.',
  'Automatic Water management System.',
  'IoT enabled Vehicle Accident Avoidance System using Alcohol Detection.',
]

const publicationData = [
  { sno: 1, year: '2023-24', total: 16 },
  { sno: 2, year: '2022-23', total: 10 },
  { sno: 3, year: '2021-22', total: 10 },
  { sno: 4, year: '2020-21', total: 15 },
  { sno: 5, year: '2019-20', total: 6 },
  { sno: 6, year: '2018-19', total: 7 },
]

export default function Research() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          {/* Inhouse Research Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Inhouse Research Projects
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {inhouseProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </section>

          {/* Research Publications */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Research Publications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Academic Year</th>
                    <th className="px-4 py-2 border">No. of Publications</th>
                  </tr>
                </thead>
                <tbody>
                  {publicationData.map((item) => (
                    <tr key={item.sno} className="odd:bg-white even:bg-gray-50 text-center">
                      <td className="px-4 py-2 border">{item.sno}</td>
                      <td className="px-4 py-2 border">{item.year}</td>
                      <td className="px-4 py-2 border">{item.total}</td>
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
