'use client'
import Sidebar from '../Sidebar'

const departmentLabs = [
  { sno: 1, name: 'Steve Jobs Laboratory', room: 'DB 41', area: '86.55' },
  { sno: 2, name: 'Bill Gates Laboratory', room: 'DB 37', area: '86.55' },
  { sno: 3, name: 'Sergey Brin Laboratory', room: 'DA 38', area: '86.55' },
]

const researchLabs = [
  { sno: 1, name: 'IoT Research Laboratory', room: 'DB 46', area: '24.15' },
]

const industryLabs = [
  { sno: 1, name: "CM's Skill Center", room: 'DA 48', area: '86.55' },
  {
    sno: 2,
    name: 'AI & ML Lab (Brain-O-Vision & L4G solutions)',
    room: 'DA 48',
    area: '86.55',
  },
]

export default function Laboratories() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/IT.jpg"
          alt="Labs Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Laboratories Available in the Department
          </h2>

          {/* Department Labs */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Department Laboratories
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border text-center">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Laboratory</th>
                    <th className="px-4 py-2 border text-center">Room No.</th>
                    <th className="px-4 py-2 border text-center">Area (Sq.mts)</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentLabs.map((lab) => (
                    <tr key={lab.sno} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{lab.sno}</td>
                      <td className="px-4 py-2 border">{lab.name}</td>
                      <td className="px-4 py-2 border text-center">{lab.room}</td>
                      <td className="px-4 py-2 border text-center">{lab.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Research Labs */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Research Laboratories
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border text-center">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Laboratory</th>
                    <th className="px-4 py-2 border text-center">Room No.</th>
                    <th className="px-4 py-2 border text-center">Area (Sq.mts)</th>
                  </tr>
                </thead>
                <tbody>
                  {researchLabs.map((lab) => (
                    <tr key={lab.sno} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{lab.sno}</td>
                      <td className="px-4 py-2 border">{lab.name}</td>
                      <td className="px-4 py-2 border text-center">{lab.room}</td>
                      <td className="px-4 py-2 border text-center">{lab.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Industry Supported Labs */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Industry Supported Laboratories
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border text-center">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Laboratory</th>
                    <th className="px-4 py-2 border text-center">Room No.</th>
                    <th className="px-4 py-2 border text-center">Area (Sq.mts)</th>
                  </tr>
                </thead>
                <tbody>
                  {industryLabs.map((lab) => (
                    <tr key={lab.sno} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{lab.sno}</td>
                      <td className="px-4 py-2 border">{lab.name}</td>
                      <td className="px-4 py-2 border text-center">{lab.room}</td>
                      <td className="px-4 py-2 border text-center">{lab.area}</td>
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