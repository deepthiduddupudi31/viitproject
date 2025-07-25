'use client';
import Sidebar from '../Sidebar';

const facultyList = [
  { sno: 1, name: 'Dr. Gullipalli Neelima', designation: 'HOD - Professor' },
  { sno: 2, name: 'Dr. B. Prasad', designation: 'Professor' },
  { sno: 3, name: 'Dr. T. Eswara Rao', designation: 'Associate Professor' },
  { sno: 4, name: 'Mrs. G. Jyothi', designation: 'Senior Assistant Professor' },
  { sno: 5, name: 'Mr. Ch. Srinivasa Reddy', designation: 'Senior Assistant Professor' },
  { sno: 6, name: 'Mr. G. Ravikumar', designation: 'Senior Assistant Professor' },
  { sno: 7, name: 'Mrs. G. Mani', designation: 'Senior Assistant Professor' },
  { sno: 8, name: 'Ms. P. Pavithra', designation: 'Senior Assistant Professor' },
  { sno: 9, name: 'Ms. Y. Jayalakshmi', designation: 'Assistant Professor' },
  { sno: 10, name: 'Ms. K. Lashmi Prasanna', designation: 'Assistant Professor' },
  { sno: 11, name: 'Mrs. Mruna Dubey', designation: 'Assistant Professor' },
  { sno: 12, name: 'Ms. R. Naga Shirisha', designation: 'Assistant Professor' },
  { sno: 13, name: 'Mr. C. Kalyan Chakravarthi', designation: 'Assistant Professor' },
  { sno: 14, name: 'Mr. Kiran Kumar Kalagadda', designation: 'Assistant Professor' },
  { sno: 15, name: 'Mr. Yalamanchili Bhanuprasad', designation: 'Assistant Professor' },
  { sno: 16, name: 'Mr. Simhadri Chinna Gopi', designation: 'Assistant Professor' },
  { sno: 17, name: 'Mr. T. Narasimha Rao', designation: 'Assistant Professor' },
  { sno: 18, name: 'Mr. Sureshbabu Amarthaluri', designation: 'Assistant Professor' },
  { sno: 19, name: 'Mr. Sheik Bhadar Saheb', designation: 'Assistant Professor' },
  { sno: 20, name: 'Mr. Y. Rama Mohan', designation: 'Assistant Professor' },
  { sno: 21, name: 'Mr. Gullapalli Praveen Kumar', designation: 'Assistant Professor' },
  { sno: 22, name: 'Mrs. Parvathy Chennupati', designation: 'Assistant Professor' },
];

export default function Faculty() {
  return (
    <div>
      {/* Banner */}
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
  );
}
