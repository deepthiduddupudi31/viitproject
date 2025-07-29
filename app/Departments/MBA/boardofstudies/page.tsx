'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr.P.Ramesh',
    designation: 'Assoc. Professor Cum HOD',
    category: 'Education',
    status: 'Chairperson (HOD)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 2,
    name: 'Dr.S.M.Murali Krishna',
    designation: 'Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 3,
    name: 'Dr.Ch.Hari Govinda Rao',
    designation: 'Assoc. Professor',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 4,
    name: 'Dr.T.Archanna Acharya',
    designation: 'Assoc. Professor',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 5,
    name: 'Dr.Pinninti Sanyasi Rao',
    designation: 'Assoc. Professor',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 6,
    name: 'Mrs.B.Chandra',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 7,
    name: 'Mr.M.Srinu',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 8,
    name: 'Mr.V.Sivaji',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 9,
    name: 'Ms.Praveena .KVS',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - MARKETING',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 10,
    name: 'Ms.CH.Ramya',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 11,
    name: 'Ms.Auadhati Datta',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 12,
    name: 'Ms.N.N.Anusha',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 13,
    name: 'Mr.U.Rakesh',
    designation: 'Asst. Professor',
    category: 'Education',
    status: 'Member Faculty - HR',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 14,
    name: 'Ms.N.Kanaka Maha Lakshmi',
    designation: 'Teaching Asst.',
    category: 'Education',
    status: 'Member Faculty - FINANCE',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 15,
    name: 'Dr. P Sridevi',
    designation: 'Asst. Professor, JNTU Vizianagaram',
    category: 'Education',
    status: 'Member',
    affiliation: 'JNTUK',
  },
  {
    sno: 16,
    name: 'Prof. Y Venkata Rao',
    designation: 'Professor, School of Management Studies, Pondicherry University',
    category: 'Education',
    status: 'Member',
    affiliation: 'Pondicherry University',
  },
  {
    sno: 17,
    name: 'Prof. D Suryachandra Rao',
    designation: 'Professor, School of Management Studies, Krishna University',
    category: 'Education',
    status: 'Member',
    affiliation: 'Krishna University',
  },
  {
    sno: 18,
    name: 'Mr. Durga Prasad Girijala',
    designation: 'Corporate Investment Banking',
    category: 'Industry',
    status: 'Member',
    affiliation: 'Wellsfargo Ltd., Bangalore',
  },
  {
    sno: 19,
    name: 'Mr. P Laxman Rao',
    designation: 'Asst. Manager (HR)',
    category: 'Alumni',
    status: 'Member',
    affiliation: 'Muthoot finance, Hyderabad',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mba.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>
          <h2 className="text-xl font-semibold text-blue-800 mb-6">
            Internal & External Members
          </h2>
          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Status</th>
                <th className="border px-2 py-2">Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {boardOfStudiesMembers.map((member) => (
                <tr key={member.sno} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                  <td className="border px-2 py-1">{member.category}</td>
                  <td className="border px-2 py-1">{member.status}</td>
                  <td className="border px-2 py-1">{member.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
