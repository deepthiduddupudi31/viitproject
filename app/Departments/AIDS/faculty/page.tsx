'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr.T.V.Madhusudhana Rao', designation: 'HOD - Professor' },
  { sno: 2, name: 'Dr.Bhiogade Girish Eknath', designation: 'Assoc. Prof (Senior Scale)' },
  { sno: 3, name: 'Dr.Peter Praveen', designation: 'Assoc. Prof (Senior Scale)' },
  { sno: 4, name: 'Dr.Brajesh Kumar', designation: 'Assoc. Prof' },
  { sno: 5, name: 'Dr.P.Visweswara Rao', designation: 'Assoc. Prof' },
  { sno: 6, name: 'Mr.Gourisankar Nayak', designation: 'Sr. Asst. Prof' },
  { sno: 7, name: 'Ms.I.Manikumari', designation: 'Sr. Asst. Prof' },
  { sno: 8, name: 'Mr.D.Chandramouli', designation: 'Asst. Prof' },
  { sno: 9, name: 'Ms.N.R.S.Lakshmi Prasanthi', designation: 'Asst. Prof' },
  { sno: 10, name: 'Mrs.B.Madhavi', designation: 'Asst. Prof' },
  { sno: 11, name: 'Ms.M.Sharmila', designation: 'Asst. Prof' },
  { sno: 12, name: 'Ms.P.Deekshita', designation: 'Asst. Prof' },
  { sno: 13, name: 'Ms.B.Prameela', designation: 'Asst. Prof' },
  { sno: 14, name: 'Mr. Chavali Amaresh', designation: 'Asst. Prof' },
  { sno: 15, name: 'Mr. S. Ranjeeth', designation: 'Asst. Prof' },
  { sno: 16, name: 'Mr. Mathi Mohana Venkateswara Rao', designation: 'Asst. Prof' },
  { sno: 17, name: 'Ms. Guggilam Navya', designation: 'Asst. Prof' },
  { sno: 18, name: 'Mr. Kiran Kumar Kaveti', designation: 'Asst. Prof' },
  { sno: 19, name: 'Mr. Murali Krishna Nangedda', designation: 'Asst. Prof' },
  { sno: 20, name: 'Mr.Ch.Yamini Sankar', designation: 'Asst. Prof' },
  { sno: 21, name: 'Mr.R.Srinivasarao', designation: 'Asst. Prof' },
  { sno: 22, name: 'Mr. Bathula Anil Babu', designation: 'Asst. Prof' },
]

export default function Faculty() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Faculty Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Faculty</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border text-center">S.No.</th>
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
