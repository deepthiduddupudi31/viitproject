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
  { sno: 2, name: 'AI & ML Lab (Brain-O-Vision & L4G solutions)', room: 'DA 48', area: '86.55' },
]

export default function Laboratories() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
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
          <Section title="Department Laboratories" data={departmentLabs} />

          {/* Research Labs */}
          <Section title="List of Research Laboratories" data={researchLabs} />

          {/* Industry Supported Labs */}
          <Section title="List of Industry Supported Laboratories" data={industryLabs} />
        </main>
      </div>
    </div>
  )
}

function Section({ title, data }: { title: string; data: any[] }) {
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
            {data.map((lab) => (
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
