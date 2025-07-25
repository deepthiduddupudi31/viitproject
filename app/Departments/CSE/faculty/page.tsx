'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr.J.Sudhakar', designation: 'Principal' },
  { sno: 2, name: 'Dr.R.Uma Maheswari', designation: 'HOD, Assoc. Prof. (Selection Grade)' },
  { sno: 3, name: 'Dr.Ch.Ramesh Babu', designation: 'Dean IQAC, Assoc. Prof. (Selection Grade)' },
  { sno: 4, name: 'Dr.A.Naga Jyothi', designation: 'Professor' },
  { sno: 5, name: 'Dr.K.Srinivasa Naik', designation: 'Professor' },
  { sno: 6, name: 'Dr.M.Karuna', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 7, name: 'Dr.A.Sampath Dakshina Murthy', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 8, name: 'Dr.V.Sateesh', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr.A.Vyasa Bharadwaja', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Dr.D.Pratap Kumar', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 11, name: 'Dr.P.Nalini', designation: 'Assoc. Prof. (Senior Scale)' },
  { sno: 12, name: 'Dr.P.Suneetha', designation: 'Assoc. Prof.' },
  { sno: 13, name: 'Dr.P.V.Sai Charishma', designation: 'Assoc. Prof.' },
  { sno: 14, name: 'Ms.Y.Sukanya', designation: 'Sr. Asst. Prof.' },
  { sno: 15, name: 'Mr.P.Tirumala Rao', designation: 'Asst. Prof.' },
  { sno: 16, name: 'Mrs.B.Bharani', designation: 'Asst. Prof.' },
  { sno: 17, name: 'Mr.S.Ravi Kumar', designation: 'Sr. Asst. Prof.' },
  { sno: 18, name: 'Mrs.K.Lakshmi', designation: 'Sr. Asst. Prof.' },
  { sno: 19, name: 'Mrs.J.Vijayasree', designation: 'Asst. Prof.' },
  { sno: 20, name: 'Mr.K.Chaitanya', designation: 'Sr. Asst. Prof.' },
  { sno: 21, name: 'Mr.Srinivash Roula', designation: 'Asst. Prof.' },
  { sno: 22, name: 'Mr.J.Siddartha Varma', designation: 'Sr. Asst. Prof.' },
  { sno: 23, name: 'Ms.P.Mamathadevi', designation: 'Asst. Prof.' },
  { sno: 24, name: 'Mr.P.Gopi Krishna', designation: 'Asst. Prof.' },
  { sno: 25, name: 'Mr.Allam Venkatesh', designation: 'Asst. Prof.' },
  { sno: 26, name: 'Mr.A.Satyanarayana Varma', designation: 'Asst. Prof.' },
  { sno: 27, name: 'Mrs.Ch.Eswari Sai Sindhu Priya', designation: 'Asst. Prof.' },
  { sno: 28, name: 'Mrs.G.Laxmi Priyanka', designation: 'Asst. Prof.' },
  { sno: 29, name: 'Mr.S.Venkata Anand', designation: 'Asst. Prof.' },
  { sno: 30, name: 'Ms.K.Kalyani', designation: 'Asst. Prof.' },
  { sno: 31, name: 'Ms.K.Saujanya', designation: 'Asst. Prof.' },
  { sno: 32, name: 'Ms.G.S.Charitha', designation: 'Asst. Prof.' },
  { sno: 33, name: 'Ms.A.Usha Rani', designation: 'Asst. Prof.' },
  { sno: 34, name: 'Mr.P.Vijaya Bhaskar', designation: 'Asst. Prof.' },
  { sno: 35, name: 'Mr.J.Sumadeep', designation: 'Asst. Prof.' },
  { sno: 36, name: 'Mr.G. Sudheer', designation: 'Asst. Prof.' },
]

export default function Faculty() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
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
