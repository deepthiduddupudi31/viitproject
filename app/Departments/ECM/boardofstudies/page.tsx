'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Mrs. R. Uma Maheswari',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Chairman (HOD)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 2,
    name: 'Dr. Ch. Srinivasa Rao',
    designation: 'Professor',
    category: 'Education',
    status: 'JNTUK, Nominee',
    affiliation: 'JNTUK, Kakinada',
  },
  {
    sno: 3,
    name: 'Dr. S. Pallam Setty',
    designation: 'Professor',
    category: 'Education',
    status: 'Subject Expert',
    affiliation: 'Professor, Dept. of CSSE, AUCE, Andhra University, Visakhapatnam',
  },
  {
    sno: 4,
    name: 'Mr. Raju V. E',
    designation: 'Team Lead',
    category: 'Industry',
    status: 'Industry Nominee (Computer Science & Engineering)',
    affiliation: 'Spondias India Pvt Ltd, Visakhapatnam',
  },
  {
    sno: 5,
    name: 'Dr. T. V. Madhusudhana Rao',
    designation: 'Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 6,
    name: 'Ms. P. Hasritha',
    designation: 'Systems Engineer',
    category: 'Alumni',
    status: 'Student Nominee',
    affiliation: 'Infosys, Hyderabad',
  },
  {
    sno: 7,
    name: 'Dr. Hemanta Kumar Sahu',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty (Electronics & Communication Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 8,
    name: 'Mr. D. Madhusudan',
    designation: 'Assistant HoD',
    category: 'Education',
    status: 'Member – Faculty (Electronics & Communication Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 9,
    name: 'Mr. B. Venkatesh',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty (Computer Science & Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 10,
    name: 'Mrs. G. Indira Devi',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty (Electronics & Communication Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 11,
    name: 'Mr. V. Appala Raju',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty (Electronics & Communication Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
  {
    sno: 12,
    name: 'Ms. N. Subha Sri',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty (Computer Science & Engineering)',
    affiliation: 'VIIT, Visakhapatnam',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Internal & External Members</h2>
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
