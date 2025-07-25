'use client'
import Sidebar from '../Sidebar'

const departmentLabs = [
  { sno: 1, name: 'Simulation Laboratory', room: 'A01', area: '140' },
  { sno: 2, name: 'Fluid Mechanics and Hydraulic Machines Laboratory', room: 'F11', area: '150' },
  { sno: 3, name: 'Instrumentation & Metrology Laboratory', room: 'F12', area: '140' },
  { sno: 4, name: 'Engineering Mechanics Laboratory', room: 'F12', area: '140' },
  { sno: 5, name: 'Heat Transfer Laboratory', room: 'F13', area: '140' },
  { sno: 6, name: 'Theory of Machines Laboratory', room: 'ML 01', area: '100' },
  { sno: 7, name: 'Production Technology Laboratory', room: 'ML 02', area: '100' },
  { sno: 8, name: 'Engineering Workshop', room: 'ML 03', area: '160' },
  { sno: 9, name: 'Machine Tools Laboratory', room: 'ML 04', area: '185' },
  { sno: 10, name: 'Metallurgy Laboratory', room: 'ML 05', area: '110' },
  { sno: 11, name: 'Thermal Engineering Laboratory', room: 'ML 06', area: '110' },
  { sno: 12, name: 'Mechanics of Solids Laboratory', room: 'ML 07', area: '110' },
]

const researchLabs = [
  { sno: 1, name: 'Vibrations & Acoustics', room: 'A04', area: '250' },
  { sno: 2, name: 'Advanced Metal Forming', room: 'A04', area: '250' },
  { sno: 3, name: '3D Printing', room: 'E12', area: '195' },
]

const skillLabs = [
  { sno: 1, name: 'APSSDC-DASSAULT SYSTEMS LAB', room: 'A22', area: '140' },
]

export default function Laboratories() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
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

          {/* Skill Labs */}
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            List of Skill Development Laboratories
          </h3>
          <section>
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
                  {skillLabs.map((lab) => (
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
