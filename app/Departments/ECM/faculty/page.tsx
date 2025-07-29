'use client';
import Sidebar from '../Sidebar';

const facultyList = [
  { sno: 1, name: 'Dr.H.Devanna', designation: 'HOD, Assoc. Prof.' },
  { sno: 2, name: 'Dr.B.Prasada Rao', designation: 'Assoc. Prof.' },
  { sno: 3, name: 'Dr.P.Santosh', designation: 'Assoc. Prof.' },
  { sno: 4, name: 'Mrs.M.Kalpana', designation: 'Asst. Prof.' },
  { sno: 5, name: 'Ms.A.Lakshmi Deepika', designation: 'Asst. Prof.' },
  { sno: 6, name: 'Mr.P.Ganesh', designation: 'Asst. Prof.' },
  { sno: 7, name: 'Mrs.A.Sarvani', designation: 'Asst. Prof.' },
  { sno: 8, name: 'Ch.Gayatri', designation: 'Asst. Prof.' },
  { sno: 9, name: 'Ms.B.Maha Lakshmi', designation: 'Asst. Prof.' },
];

export default function Faculty() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
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
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the Faculty</th>
                    <th className="px-4 py-2 border">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyList.map((member) => (
                    <tr
                      key={member.sno}
                      className="odd:bg-white even:bg-gray-50 text-center"
                    >
                      <td className="px-4 py-2 border">{member.sno}</td>
                      <td className="px-4 py-2 border text-left">
                        {member.name}
                      </td>
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
  );
}
