'use client'
import Sidebar from '../Sidebar'

const facultyAwards = [
  { sno: 1, name: 'Dr. B. Sateesh', awards: 8 },
  { sno: 2, name: 'Dr. S. Rambabu', awards: 1 },
  { sno: 3, name: 'Dr. K. S. Raghuram', awards: 3 },
  { sno: 4, name: 'Dr. Susant Kumar Sahu', awards: 2 },
  { sno: 5, name: 'Dr. B. N. Dhanunjayarao', awards: 4 },
  { sno: 6, name: 'Dr. B. Girish', awards: 2 },
  { sno: 7, name: 'Dr. MD. Ali', awards: 1 },
  { sno: 8, name: 'Dr. Brajesh Kumar', awards: 2 },
  { sno: 9, name: 'Dr. K. Ismail', awards: 3 },
  { sno: 10, name: 'Dr. Ch. Bharat Kumar', awards: 1 },
  { sno: 11, name: 'Dr. Y. Appala Naidu', awards: 3 },
  { sno: 12, name: 'Dr. V. Ranjith Kumar', awards: 1 },
]

export default function FacultyAwards() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Faculty Awards"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty Awards</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm rounded shadow-md">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2 text-left">S. No.</th>
                  <th className="border px-4 py-2 text-left">Faculty Name</th>
                  <th className="border px-4 py-2 text-left">No. of Awards</th>
                </tr>
              </thead>
              <tbody>
                {facultyAwards.map((fac) => (
                  <tr key={fac.sno} className="even:bg-gray-50 odd:bg-white">
                    <td className="border px-4 py-2">{fac.sno}</td>
                    <td className="border px-4 py-2">{fac.name}</td>
                    <td className="border px-4 py-2 text-center">{fac.awards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
