'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Dr.T.V.S.P.V.Satyaguru', designation: 'HOD, Assoc.prof (Selection Grade)' },
  { sno: 2, name: 'Dr.R.Hanumantha Rao', designation: 'Professor' },
  { sno: 3, name: 'Dr.Kranthi kumar Gangu', designation: 'Professor' },
  { sno: 4, name: 'Dr.Ch.GanguNaidu', designation: 'Professor' },
  { sno: 5, name: 'Dr.K.Ramappadu', designation: 'Assoc.prof' },
  { sno: 6, name: 'Dr.P.Rajesh', designation: 'Assoc.prof' },
  { sno: 7, name: 'Dr.D.Ganesh', designation: 'Assoc.prof' },
  { sno: 8, name: 'Dr.S.Ravi Kumar', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 9, name: 'Dr.K.Sirisha', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 10, name: 'Dr.Adi Lakshmi', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 11, name: 'Dr.B.Dhana Lakshmi', designation: 'Assoc.prof (Selection Grade)' },
  { sno: 12, name: 'Dr.S.Indira', designation: 'Assoc.prof (Selection Grade)' },
  { sno: 13, name: 'Dr. T.Lakshmana Rao', designation: 'Assoc.prof (Selection Grade)' },
  { sno: 14, name: 'Dr.T.Chinnappalanaidu', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 15, name: 'Dr.M.Ratnaraju', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 16, name: 'Dr.D.Leela', designation: 'Assoc.prof (Senior Scale)' },
  { sno: 17, name: 'Dr.K.Mrudula devi', designation: 'Assoc.prof' },
  { sno: 18, name: 'Dr.Ch.V.V.Ramana', designation: 'Assoc.prof' },
  { sno: 19, name: 'Dr.A.Lakshmana', designation: 'Assoc.prof' },
  { sno: 20, name: 'Dr.Sruthi.Vasamsetty', designation: 'Assoc.prof' },
  { sno: 21, name: 'Dr.Paresh Kumar Panigrahi', designation: 'Assoc.prof' },
  { sno: 22, name: 'Dr.A.Sahitya Kumar', designation: 'Assoc.prof' },
  { sno: 23, name: 'Dr.K.M.Archana', designation: 'Assoc.prof' },
  { sno: 24, name: 'Dr.Kuntalika Jharimune', designation: 'Assoc.prof' },
  { sno: 25, name: 'Dr.M.Mamatha', designation: 'Assoc.prof' },
  { sno: 26, name: 'Dr.D.Raga Sudha', designation: 'Assoc.prof' },
  { sno: 27, name: 'Dr.D.Vamsi Priya', designation: 'Assoc.prof' },
  { sno: 28, name: 'Dr.S.Srivani Madhu', designation: 'Assoc.prof' },
  { sno: 29, name: 'Dr.K.Niharika', designation: 'Assoc.prof' },
  { sno: 30, name: 'Dr.S.Dharma Rao', designation: 'Assoc.prof' },
  { sno: 31, name: 'Dr.P.Harikrishna', designation: 'Assoc.prof' },
  { sno: 32, name: 'Dr.Satyaranjan Sahoo', designation: 'Assoc.prof' },
  { sno: 33, name: 'Dr.Sudipta Priyadarshini', designation: 'Assoc.prof' },
  { sno: 34, name: 'Dr.K.Ch.N.Tarani', designation: 'Assoc.prof' },
  { sno: 35, name: 'Mr.S.Yogeswararao', designation: 'Asst.prof' },
  { sno: 36, name: 'Ms.Akella Ramya', designation: 'Asst.prof' },
  { sno: 37, name: 'Ms.K.Yasoda', designation: 'Asst.prof' },
  { sno: 38, name: 'Ms.D.Sravani', designation: 'Asst.prof' },
  { sno: 39, name: 'Mrs.M.Himabindu', designation: 'Asst.prof' },
  { sno: 40, name: 'Ms.N.Jaya Lalitha', designation: 'Asst.prof' },
  { sno: 41, name: 'Mrs.A.Anuradha', designation: 'Asst.prof' },
  { sno: 42, name: 'Mrs.G.Vara Lakshmi', designation: 'Asst.prof' },
  { sno: 43, name: 'Mr.D.V.G.R.K.Siva kumar', designation: 'Asst.prof' },
  { sno: 44, name: 'Ms.G.Kavya', designation: 'Asst.prof' },
  { sno: 45, name: 'Mr.Ch.Bhaskara Rao', designation: 'Asst.prof' },
  { sno: 46, name: 'Mr.K.Sairam Naidu', designation: 'Asst.prof' },
  { sno: 47, name: 'Ms.S.Namritha', designation: 'Asst.prof' },
  { sno: 48, name: 'Ms.G.Hemalatha', designation: 'Asst.prof' },
  { sno: 49, name: 'Mr.K.Satyanarayana', designation: 'Asst.prof' },
  { sno: 50, name: 'Ms.Ch.Meenakshi', designation: 'Asst.prof' },
  { sno: 51, name: 'Ms.N.Sravani', designation: 'Asst.prof' },
  { sno: 52, name: 'Mrs.D.Anusha', designation: 'Asst.prof' },
  { sno: 53, name: 'Ms.Ch.S.S.Ramani Priya', designation: 'Asst.prof' },
  { sno: 54, name: 'Ms.A.Tejaswi', designation: 'Asst.prof' },
  { sno: 55, name: 'Ms.Jayasri Behara', designation: 'Asst.prof' },
  { sno: 56, name: 'Ms.K.Jyothi', designation: 'Asst.prof' },
  { sno: 57, name: 'Mr. Vasudeva Rao Sambhana', designation: 'Asst.prof' },
  { sno: 58, name: 'Ch Siva Parvathi', designation: 'Asst.prof' },
  { sno: 59, name: 'Mr. Kuncha Sampath Ramya Naidu', designation: 'Asst.prof' },
  { sno: 60, name: 'Mr. Vaddadi Naga Raju', designation: 'Asst.prof' },
  { sno: 61, name: 'Ms. K Sridevi', designation: 'Asst.prof' },
  { sno: 62, name: 'Ms. Merupu Gannika Daparti', designation: 'Asst.prof' },
  { sno: 63, name: 'Ms. Muppidi Aparna', designation: 'Asst.prof' },
  { sno: 64, name: 'Ms. Padda Bs Rajya Lakshmi Avanthi', designation: 'Asst.prof' },
  { sno: 65, name: 'Mr. Mandala Satish', designation: 'Asst.prof' },
  { sno: 66, name: 'Mr. Piridi Srinivasu', designation: 'Asst.prof' },
  { sno: 67, name: 'Ms. S N D Padmaja', designation: 'Asst.prof' },
  { sno: 68, name: 'Ms. Mummuluri Jyothi', designation: 'Asst.prof' },
  { sno: 69, name: 'Ms. Mounika Arimilli', designation: 'Asst.prof' },
  { sno: 70, name: 'Ms. Bhavani Theeda', designation: 'Asst.prof' },
  { sno: 71, name: 'Mr. N Dora Babu', designation: 'Asst.prof' },
  { sno: 72, name: 'Ms. Sabbana Kamala', designation: 'Asst.prof' },
  { sno: 73, name: 'Mr. Kommu Koteswara Rao', designation: 'Asst.prof' },
  { sno: 74, name: 'Ms. Kandi Umasankari', designation: 'Asst.prof' },
  { sno: 75, name: 'Mr. Syalada Sanyasi Rao', designation: 'Asst.prof' },
  { sno: 76, name: 'Ms. Swarna Mary Dammu', designation: 'Asst.prof' },
  { sno: 77, name: 'Ms. M Padmavathi', designation: 'Asst.prof' },
  { sno: 78, name: 'Mr. S Maheswar Rao', designation: 'Asst.prof' },
  { sno: 79, name: 'Mr. K Prasadchandra', designation: 'Asst.prof' },
  { sno: 80, name: 'Ms. Rashmita Maharana', designation: 'Asst.prof' },
  { sno: 81, name: 'Ms. Madhuri Mahanty', designation: 'Asst.prof' },
  { sno: 82, name: 'Dr.J.Prasanth', designation: 'PD' },
  { sno: 83, name: 'Dr.P.S.V.Ramana', designation: 'PD' },
  { sno: 84, name: 'Mr.Ch.RamBabu', designation: 'PD' },
  { sno: 85, name: 'Mr.V.Srinivasa Rao', designation: 'Librarian' },
  { sno: 86, name: 'Mr.K.Ramappala Naidu', designation: 'Teaching.Asst' },
  { sno: 87, name: 'Ms.M.Pavani', designation: 'Teaching.Asst' },
  { sno: 88, name: 'Ms.Y.Lavanya Lahari', designation: 'Teaching.Asst' },
  { sno: 89, name: 'Ms.Y.Madhuri', designation: 'Teaching.Asst' },
]

export default function Faculty() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/bsh.jpg"
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
