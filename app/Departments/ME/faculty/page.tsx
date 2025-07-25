'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr. Rambabu Sarimalla', designation: 'HOD, Assoc. Prof. (Selection Grade)' },
  { sno: 2, name: 'Dr. B. Sateesh', designation: 'Professor' },
  { sno: 3, name: 'Dr. R. Sundara Ramam', designation: 'Professor' },
  { sno: 4, name: 'Dr. K. S. Raghuram', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 5, name: 'Dr. V. S. V. Satyanarayana', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 6, name: 'Dr. V. Ranjith Kumar', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 7, name: 'Dr. V. Ranjan Ganguly', designation: 'Assoc. Prof.' },
  { sno: 8, name: 'Dr. Y. Appalanaidu', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr. K. Ismail', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Dr. K. G. Durga Prasad', designation: 'Professor' },
  { sno: 11, name: 'Dr. G. Satish', designation: 'Assoc. Prof.' },
  { sno: 12, name: 'Dr. S. Sudhakar Babu', designation: 'Assoc. Prof.' },
  { sno: 13, name: 'Dr. B. Siva Kumar', designation: 'Assoc. Prof.' },
  { sno: 14, name: 'Mr. CH. Sivarama Krishna', designation: 'Sr. Asst. Prof.' },
  { sno: 15, name: 'Mr. R. Rudhrabhi Ramu', designation: 'Assoc. Prof.' },
  { sno: 16, name: 'Mr. G. Santosh Kumar', designation: 'Asst. Prof.' },
  { sno: 17, name: 'Mrs. B. Pavani Sri Kavya', designation: 'Asst. Prof.' },
  { sno: 18, name: 'Mr. K. Leela Kumar', designation: 'Asst. Prof.' },
  { sno: 19, name: 'Mr. B. Hemanth', designation: 'Sr. Asst. Prof.' },
  { sno: 20, name: 'Mr. Nekkala Ganesh', designation: 'Asst. Prof.' },
  { sno: 21, name: 'Ms. V. Naga Sudha', designation: 'Sr. Asst. Prof.' },
  { sno: 22, name: 'Mr. P. H. J. Venkatesh', designation: 'Sr. Asst. Prof.' },
  { sno: 23, name: 'Mr. B. Gangadhar', designation: 'Asst. Prof.' },
  { sno: 24, name: 'Ms. G. Sridevi', designation: 'Asst. Prof.' },
  { sno: 25, name: 'Ms. D. Prathyusha', designation: 'Asst. Prof.' },
  { sno: 26, name: 'Mr. S. Sanyasi Rao', designation: 'Asst. Prof.' },
  { sno: 27, name: 'Dr. Ch. Rohini Kumar', designation: 'Assoc. Prof.' },
  { sno: 28, name: 'Dr. Ch. Bharat Kumar', designation: 'Assoc. Prof.' },
  { sno: 29, name: 'Mr. Dhaneshwar Prasad Sahu', designation: 'Asst. Prof.' },
  { sno: 30, name: 'Ms. B. Vineela Ratnam', designation: 'Asst. Prof.' },
]

export default function Faculty() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Faculty Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty</h2>

          {/* Faculty Table */}
          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border text-left">Name of the Faculty</th>
                    <th className="px-4 py-2 border text-left">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyList.map((member) => (
                    <tr key={member.sno} className="odd:bg-white even:bg-gray-50 text-center">
                      <td className="px-4 py-2 border">{member.sno}</td>
                      <td className="px-4 py-2 border text-left">{member.name}</td>
                      <td className="px-4 py-2 border text-left">{member.designation}</td>
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
