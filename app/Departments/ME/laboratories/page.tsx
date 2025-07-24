'use client'
import Sidebar from '../Sidebar'

const departmentLabs = [
  { sno: 1, name: 'Environmental Engineering Lab', room: 'A02', area: '70' },
  { sno: 2, name: 'Surveying Lab', room: 'F01', area: '40' },
  { sno: 3, name: 'Engineering Geology Lab', room: 'F01 (A)', area: '40' },
  { sno: 4, name: 'Concrete Technology Lab', room: 'F02', area: '60' },
  { sno: 5, name: 'Transportation Engineering Lab', room: 'F03', area: '80' },
  { sno: 6, name: 'Geotechnical Engineering Lab', room: 'F03 (A)', area: '80' },
  { sno: 7, name: 'FM & HM Lab', room: 'F11 (A)', area: '115' },
  { sno: 8, name: 'Strength Of Materials Lab', room: 'ML-07', area: '115' },
  { sno: 9, name: 'CAD Lab', room: 'A01', area: '110' },
  { sno: 10, name: 'STAAD & GIS Lab', room: 'A01 (A)', area: '110' },
]

const researchLabs = [
  { sno: 1, name: '3D Printing Laboratory (IDEA Lab)', room: 'E01', area: '195' },
]

export default function Laboratories() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
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
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Laboratory</th>
                    <th className="px-4 py-2 border">Room No.</th>
                    <th className="px-4 py-2 border">Area (Sq.mts)</th>
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
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            List of Research Laboratories
          </h3>
          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Laboratory</th>
                    <th className="px-4 py-2 border">Room No.</th>
                    <th className="px-4 py-2 border">Area (Sq.mts)</th>
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
        </main>
      </div>
    </div>
  )
}
