'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr. Sudhir Vummadisetti',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Chairperson (HoD)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 2,
    name: 'Prof. Brijesh Kumar Dubey',
    designation: 'Member',
    category: 'Education',
    status: 'External Chair person',
    affiliation: 'Professor, Dept of CIVIL, IIT Kharagpur',
  },
  {
    sno: 3,
    name: 'Prof. B Krishna Rao',
    designation: 'Member',
    category: 'Education',
    status: 'External Member',
    affiliation: 'Professor, Dept of CIVIL, JNTUK Kakinada',
  },
  {
    sno: 4,
    name: 'Prof. Adi Seshu Siragam',
    designation: 'Member',
    category: 'Education',
    status: 'Education Member',
    affiliation: 'Andhra University, Visakhapatnam',
  },
  {
    sno: 5,
    name: 'Mrs. V Suchitra',
    designation: 'Member',
    category: 'Industry, Verizon',
    status: 'External Member',
    affiliation: 'Deputy Engineer, Irrigation Department, Visakhapatnam',
  },
  {
    sno: 6,
    name: 'Mr. M. Pavani',
    designation: 'Member',
    category: 'Alumni',
    status: 'External Member',
    affiliation: 'Design Engineer (Civil), GVPR Engineer Limited, Hyderabad',
  },
  {
    sno: 7,
    name: 'Mr. M. Padmakar',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 8,
    name: 'Dr. Ratna Tej Reddy',
    designation: 'Assoc. Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 9,
    name: 'Dr. K. Bhaskara Rao',
    designation: 'Assoc. Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 10,
    name: 'Dr. L. Govinda',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 11,
    name: 'Mr. B. Brahmaiah',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 12,
    name: 'Mr. K. Srinivas',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 13,
    name: 'Mr. G. Sudheer Kumar',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 14,
    name: 'Mrs. M. Leela Priyanka',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 15,
    name: 'Mr. P. Shiva Kumar',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 16,
    name: 'Mr. Babu Rao',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Internal Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Internal And External Membars</h2>
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
                <tr key={member.sno}>
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
