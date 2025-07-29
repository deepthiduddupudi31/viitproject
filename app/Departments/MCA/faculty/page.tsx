'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Mrs.A. Sirisha', designation: 'Sr.Asst. Prof.' },
  { sno: 2, name: 'Mrs.D.Lakshmi Bhavani', designation: 'Asst. Prof.' },
  { sno: 3, name: 'Ms.K.Lekha sree', designation: 'Teaching Asst' },
  { sno: 4, name: 'Mr.A.V.V.Chakrapani', designation: 'Asst.Prof' },
  { sno: 5, name: 'Ms.T.V Lakshmi Devi', designation: 'Asst.Prof' },
  { sno: 6, name: 'K Gowthami Prasanthi', designation: 'Asst.Prof' },
  { sno: 7, name: 'Batuula Vennela', designation: 'Asst.Prof' },
  { sno: 8, name: 'PADDA NALINI', designation: 'Asst.Prof' },
  { sno: 9, name: 'BANKURU BHAGYASRI', designation: 'Asst.Prof' },
  { sno: 10, name: 'N.TULASI NAIDU', designation: 'Asst.Prof' },
  { sno: 11, name: 'K.AMRUTHA', designation: 'Asst.Prof' },
  { sno: 12, name: 'M.SASIDHAR', designation: 'Asst.Prof' },
  { sno: 13, name: 'G.PRASANNA KUMARI', designation: 'Asst.Prof' },
  { sno: 14, name: 'A.VANAJA', designation: 'Asst.Prof' },
  { sno: 15, name: 'M.DINESWAR SAI', designation: 'Asst.Prof' },
  { sno: 16, name: 'M.DEEVAN', designation: 'Asst.Prof' },
  { sno: 17, name: 'T.SWATHI', designation: 'Asst.Prof' },
  { sno: 18, name: 'MS.K.Lavanya', designation: 'Teaching Asst' },
  { sno: 19, name: 'Mr.G.Bhargav', designation: 'Teaching Asst' },
  { sno: 20, name: 'Mr. Eswara Rao', designation: 'Teaching Asst' },
]

export default function Faculty() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
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
