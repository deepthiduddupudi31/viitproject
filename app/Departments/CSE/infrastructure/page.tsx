'use client'
import Sidebar from '../Sidebar'

const facilities = [
  { sno: 1, name: 'Number of Class rooms', details: '07' },
  { sno: 2, name: 'Number of tutorial rooms', details: 'Nil' },
  { sno: 3, name: 'Classrooms with ICT facility', details: '07' },
  { sno: 4, name: 'Academic Laboratories', details: '06' },
  { sno: 5, name: 'Research Laboratories', details: '01' },
  { sno: 6, name: 'Other Laboratories', details: '01' },
  {
    sno: 7,
    name: 'Library - Department',
    details: 'No. of Titles: 150, No. of Volumes: 500',
  },
  { sno: 8, name: 'Seminar Halls', details: 'Nil' },
  { sno: 9, name: 'Staff rooms', details: '02' },
]

export default function Facilities() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
          alt="Facilities Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Facilities Available in the Department
          </h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Infrastructural Facility</th>
                    <th className="px-4 py-2 border">Quantity/Details</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities.map((item) => (
                    <tr key={item.sno} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{item.sno}</td>
                      <td className="px-4 py-2 border">{item.name}</td>
                      <td className="px-4 py-2 border">{item.details}</td>
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
