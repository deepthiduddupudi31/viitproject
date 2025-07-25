'use client'
import Sidebar from '../Sidebar'

const facultyList = [
  { sno: 1, name: 'Mrs.K.Swathi', designation: 'HOD-Sr.Asst. Prof.' },
  { sno: 2, name: 'Dr.V.V.S.S.Sameer Chakravarthy', designation: 'Professor' },
  { sno: 3, name: 'Dr.K.Madhusudhana Rao', designation: 'Professor' },
  { sno: 4, name: 'Dr.Y.Salini', designation: 'Assoc.Prof (Senior Scale)' },
  { sno: 5, name: 'Dr.M.P.V.V.Bhaskara Rao', designation: 'Assoc.Prof (Selection Grade)' },
  { sno: 6, name: 'Dr.Susant Kumar Sahu', designation: 'Assoc.Prof (Selection Grade)' },
  { sno: 7, name: 'Dr.K.A.Naidu', designation: 'Assoc. Prof.' },
  { sno: 8, name: 'Dr. Bhimavarapu Krishna Reddy', designation: 'Assoc. Prof.' },
  { sno: 9, name: 'Dr.T.Archanna Acharya', designation: 'Assoc. Prof.' },
  { sno: 10, name: 'Dr. Velpula Nagi Reddy', designation: 'Assoc. Prof.' },
  { sno: 11, name: 'Dr.O.Bhaskar', designation: 'Assoc. Prof.' },
  { sno: 12, name: 'Mr.K.Harish Kumar', designation: 'Sr.Asst.Prof' },
  { sno: 13, name: 'Ms.V.Savitri', designation: 'Sr.Asst.Prof' },
  { sno: 14, name: 'Ms.G.Sujatha', designation: 'Sr.Asst.Prof' },
  { sno: 15, name: 'Mr.B.V.Ramana', designation: 'Sr.Asst.Prof' },
  { sno: 16, name: 'Mrs.B.Pavani', designation: 'Sr.Asst.Prof' },
  { sno: 17, name: 'Mrs.V.Manasa', designation: 'Sr.Asst.Prof' },
  { sno: 18, name: 'Mrs.K.Divya Kalyani', designation: 'Sr.Asst.Prof' },
  { sno: 19, name: 'Mrs.J.Uttara Alekhya', designation: 'Asst.Prof' },
  { sno: 20, name: 'Mr.S.V.S.V.P.Ramaraju', designation: 'Asst.Prof' },
  { sno: 21, name: 'Mrs.P.Mounika', designation: 'Asst.Prof' },
  { sno: 22, name: 'Ms.R.Swapna', designation: 'Asst.Prof' },
  { sno: 23, name: 'Mr.K.Bhanu Prakash', designation: 'Asst.Prof' },
  { sno: 24, name: 'Mr.A.Sanjay Lova', designation: 'Asst.Prof' },
  { sno: 25, name: 'Mr.Y.KumarSekhar', designation: 'Asst.Prof' },
  { sno: 26, name: 'Mr.K.Venkatesh Babu', designation: 'Asst.Prof' },
  { sno: 27, name: 'Mr.V.Rajendra Prasad', designation: 'Asst.Prof' },
  { sno: 28, name: 'Mrs.B.Shalini', designation: 'Asst.Prof' },
  { sno: 29, name: 'Mrs.Ch.V.Bhargavi', designation: 'Asst.Prof' },
  { sno: 30, name: 'Mr.L.V.Rajesh Kumar', designation: 'Asst.Prof' },
  { sno: 31, name: 'Mr.Kumar Devapogu', designation: 'Asst.Prof' },
  { sno: 32, name: 'Mr.U.Venkateswara Rao', designation: 'Asst.Prof' },
  { sno: 33, name: 'Mr.Gijjula Murali', designation: 'Asst.Prof' },
  { sno: 34, name: 'Mrs.G.Mahalakshmi', designation: 'Asst.Prof' },
  { sno: 35, name: 'Mr. Amar Jukuntla', designation: 'Asst.Prof' },
  { sno: 36, name: 'Mr.P.Srinivas Rao', designation: 'Asst.Prof' },
  { sno: 37, name: 'Ms.Syed Reshma', designation: 'Asst.Prof' },
  { sno: 38, name: 'Mr.Shaik Mahabuba Basha', designation: 'Asst.Prof' },
  { sno: 39, name: 'Ms.Gunakala Archana', designation: 'Asst.Prof' },
  { sno: 40, name: 'Dr.Banoth Tulasya Naik', designation: 'Asst.Prof' },
  { sno: 41, name: 'Ms.D.Lavanya', designation: 'Asst.Prof' },
  { sno: 42, name: 'Ms. Jaladi Indira', designation: 'Asst.Prof' },
  { sno: 43, name: 'Ms. P.Seetha Lakshmi', designation: 'Asst.Prof' },
  { sno: 44, name: 'Mr.P.Manohar Maharshi', designation: 'Teaching Asst' },
  { sno: 45, name: 'Ms.T.Harsha Devi', designation: 'Teaching Asst' },
  { sno: 46, name: 'Mr.M.Pavan Naga Sai', designation: 'Teaching Asst' },
]

export default function Faculty() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/WEB_01.jpg"
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
