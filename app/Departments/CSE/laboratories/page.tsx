'use client'
import Sidebar from '../Sidebar'

const departmentLabs = [
  { sno: 1, name: 'Very Large Scale Integration Laboratory', room: 'D22', area: '110' },
  { sno: 2, name: 'Digital Signal Processing Laboratory', room: 'D23', area: '109.72' },
  { sno: 3, name: 'Communication Laboratory', room: 'D32', area: '92.18' },
  { sno: 4, name: 'Circuits Laboratory', room: 'D33', area: '92.18' },
  { sno: 5, name: 'Electronics Devices and Circuits Laboratory', room: 'D34', area: '91.14' },
  { sno: 6, name: 'Micro Processors & Micro Controllers / Micro Wave & Optical Communication Laboratory', room: 'D54', area: '90.61' },
]

const researchLabs = [
  { sno: 1, name: 'Advanced Antenna Research Laboratory', room: 'A03', area: '37.71' },
  { sno: 2, name: 'Advanced Signal Processing Laboratory', room: 'D52', area: '37.71' },
]

const industryLabs = [
  { sno: 1, name: 'Project Laboratory', room: 'D53', area: '35' },
  { sno: 2, name: '3D Printing Laboratory (IDEA Lab)', room: 'E01', area: '195' },
  { sno: 3, name: 'Centre of Embedded Systems & Industry 4.0', room: '—', area: '—' },
]

export default function Laboratories() {
  return (
    <div>
      {/* Banner Image */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
          alt="Labs Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Page Content */}
      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Laboratories Available in the Department
          </h2>

          {/* Department Labs */}
          <Section title="Department Laboratories" labs={departmentLabs} />

          {/* Research Labs */}
          <Section title="Research Laboratories" labs={researchLabs} />

          {/* Industry Supported Labs */}
          <Section title="Industry Supported Laboratories" labs={industryLabs} />
        </main>
      </div>
    </div>
  )
}

// Reusable Table Section
function Section({ title, labs }: { title: string; labs: any[] }) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
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
            {labs.map((lab) => (
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
  )
}
