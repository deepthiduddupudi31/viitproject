'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr. B. Chandra', designation: 'HOD, Assoc. Prof.' },
  { sno: 2, name: 'Dr. P. S. Ravindra', designation: 'Professor' },
  { sno: 3, name: 'Dr. S. M. Murali Krishna', designation: 'Professor' },
  { sno: 4, name: 'Dr. Ch. Hari Govinda Rao', designation: 'Assoc. Prof.' },
  { sno: 5, name: 'Dr. M. Srinu', designation: 'Assoc. Prof.' },
  { sno: 6, name: 'Dr. Praveena KVS', designation: 'Assoc. Prof.' },
  { sno: 7, name: 'Dr. Pinninti Sanyasi Rao', designation: 'Assoc. Prof.' },
  { sno: 8, name: 'Dr. K. G. K. Patnaik', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr. J. Manogna', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Mr. V. Sivaji', designation: 'Sr. Asst. Prof.' },
  { sno: 11, name: 'Ms. Auadhati Datta', designation: 'Asst. Prof.' },
  { sno: 12, name: 'Mr. U. Rakesh', designation: 'Asst. Prof.' },
  { sno: 13, name: 'Mr. B. Siva Kumar', designation: 'Asst. Prof.' },
  { sno: 14, name: 'Ms. P. Lavanya', designation: 'Asst. Prof.' },
  { sno: 15, name: 'Ms. N. Kanaka Maha Lakshmi', designation: 'Teaching Asst.' },
]

export default function Faculty() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mba.jpg"
          alt="Faculty Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Faculty</th>
                    <th className="px-4 py-2 border">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyList.map((member) => (
                    <tr key={member.sno} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{member.sno}</td>
                      <td className="px-4 py-2 border">{member.name}</td>
                      <td className="px-4 py-2 border">{member.designation}</td>
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
