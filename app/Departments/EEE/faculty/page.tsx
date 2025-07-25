'use client'

import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr.P.Sekhar', designation: 'HOD, Assoc. Prof. (Selection Grade)' },
  { sno: 2, name: 'Dr.K.Durga Syam Prasad', designation: 'Professor' },
  { sno: 3, name: 'Dr.R.S.Ravi Sankar', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 4, name: 'Dr.K.K.Deepika', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 5, name: 'Dr.K.Venkatanagaraju', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 6, name: 'Dr.M.Lakshmi SivaSai Kumar', designation: 'Assoc. Prof.' },
  { sno: 7, name: 'Dr.B.Trinadha', designation: 'Assoc. Prof.' },
  { sno: 8, name: 'Dr.B.Omkar Lakshmi Jagan', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr.Jayanta Kumar Sahu', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Dr.Subhendu Sekhar Sahoo', designation: 'Assoc. Prof.' },
  { sno: 11, name: 'Mrs.K.Sravanthi', designation: 'Sr. Asst. Prof.' },
  { sno: 12, name: 'Ms.B.Jyothi', designation: 'Sr. Asst. Prof.' },
  { sno: 13, name: 'Mr.K.Sravan Kumar', designation: 'Asst. Prof.' },
  { sno: 14, name: 'Mr.V.Vivek Viswanadh', designation: 'Asst. Prof.' },
  { sno: 15, name: 'Mr.Rajesh Tanna', designation: 'Asst. Prof.' },
  { sno: 16, name: 'Ms.B.Sonia', designation: 'Sr. Asst. Prof.' },
  { sno: 17, name: 'Mr.P.Suresh Kumar', designation: 'Sr. Asst. Prof.' },
  { sno: 18, name: 'Mr.A.V.Satyanarayana', designation: 'Asst. Prof.' },
  { sno: 19, name: 'Ms.V.Venkata Lakshmi', designation: 'Asst. Prof.' },
  { sno: 20, name: 'Mr.K.Avinash', designation: 'Asst. Prof.' },
  { sno: 21, name: 'Mr.R.Ganesh', designation: 'Asst. Prof.' },
]

export default function Faculty() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl mx-auto p-4">
        <img
          src="https://vignaniit.edu.in/images/eee.jpg"
          alt="ECE Department Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Layout with Sidebar */}
      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty</h2>

          <div className="overflow-x-auto">
            <table className="w-full border rounded-md shadow text-sm">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border text-center">S.No.</th>
                  <th className="px-4 py-2 border">Name of the Faculty</th>
                  <th className="px-4 py-2 border">Designation</th>
                </tr>
              </thead>
              <tbody>
                {facultyList.map((faculty) => (
                  <tr key={faculty.sno} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{faculty.sno}</td>
                    <td className="px-4 py-2 border">{faculty.name}</td>
                    <td className="px-4 py-2 border">{faculty.designation}</td>
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
