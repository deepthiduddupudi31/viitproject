'use client'
import Sidebar from '../Sidebar'

const departmentLabs = [
  { sno: 1, name: 'Electrical Machines – I', room: 'C-01', area: '150' },
  { sno: 2, name: 'Electrical Machines – II', room: 'C-02', area: '150' },
  { sno: 3, name: 'Networks Lab', room: 'C-41', area: '90' },
  { sno: 4, name: 'Electrical Measurements Lab', room: 'C-42', area: '90' },
  { sno: 5, name: 'Control System Lab', room: 'C-43', area: '90' },
  { sno: 6, name: 'Power Electronics Lab', room: 'D-53', area: '120' },
  { sno: 7, name: 'Power Systems Lab', room: 'C-32', area: '120' },
]

const researchLabs = [
  { sno: 1, name: 'Advanced Power Electronics Laboratory', room: 'B32', area: '120' },
]

const otherLabs = [
  { sno: 1, name: 'IDEA Lab', room: 'E01', area: '195' },
]

export default function Laboratories() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto p-4">
        <img
          src="https://vignaniit.edu.in/images/eee.jpg"
          alt="Labs Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Laboratories Available in the Department
          </h2>

          {/* Department Labs Table */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Department Laboratories
            </h3>
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

          {/* Research Labs Table */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Research Laboratories
            </h3>
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

          {/* Other Labs Table */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Other Laboratories
            </h3>
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
                  {otherLabs.map((lab) => (
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
