'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr.L.Govinda', designation: 'HOD-Assoc. Prof.' },
  { sno: 2, name: 'Dr.G.Tejaswi Laxmi Priyanka', designation: 'Assoc. Prof.' },
  { sno: 3, name: 'Dr.K.Ramesh Babu', designation: 'Assoc.Prof' },
  { sno: 4, name: 'Dr.G.Amulya', designation: 'Assoc. Prof.' },
  { sno: 5, name: 'Dr.S.Gayathri', designation: 'Assoc. Prof.' },
  { sno: 6, name: 'Dr.D.Sreeman', designation: 'Assoc. Prof.' },
  { sno: 7, name: 'Dr.A.Srija', designation: 'Assoc. Prof.' },
  { sno: 8, name: 'Dr.K.Dharithri', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr.P.SruthiSekhar', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Dr.G.Aravind Goud', designation: 'Assoc. Prof.' },
  { sno: 11, name: 'Mr.B.Brahmaiah', designation: 'Sr.Asst.Prof' },
  { sno: 12, name: 'Mr.K.Srinivas', designation: 'Sr.Asst. Prof.' },
  { sno: 13, name: 'Ms.S.Kranthi Vijaya', designation: 'Sr.Asst. Prof.' },
  { sno: 14, name: 'Ms.A.V.S.L.Ramya', designation: 'Asst. Prof.' },
  { sno: 15, name: 'Mr.R.Rohit Babu', designation: 'Asst. Prof.' },
  { sno: 16, name: 'Ms.M.Yogaswarna', designation: 'Asst.Prof' },
  { sno: 17, name: 'Mr.M.Baburao', designation: 'Asst.Prof' },
  { sno: 18, name: 'Mr.A.Teja', designation: 'Asst.Prof' },
  { sno: 19, name: 'Ms.T.Reshma Chandran', designation: 'Asst.Prof' },
  { sno: 20, name: 'Ms.K.Sree Sandhya', designation: 'Asst.Prof' },
  { sno: 21, name: 'Mr.B.Ashok Kumar', designation: 'Asst.Prof' },
]

export default function Faculty() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
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
