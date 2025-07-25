'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Mr. B Dinesh Reddy',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Chairperson (HOD)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 2,
    name: 'Dr. E Laxmi Lydia',
    designation: 'Professor',
    category: 'Education',
    status: 'Member –Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 3,
    name: 'Dr. G Rajendra Kumar',
    designation: 'Professor',
    category: 'Education',
    status: 'Member –Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 4,
    name: 'Dr. N Tirupati Rao',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Member –Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 5,
    name: 'Dr. O Srinivasa Rao',
    designation: 'Member',
    category: 'Education',
    status: 'Member -Faculty(Selected by the Vice Chancellor from the names proposed by the Principal)',
    affiliation: 'Professor, JNTUK, Kakinada',
  },
  {
    sno: 6,
    name: 'Dr. Sanjoy Kumar Saha',
    designation: 'Member',
    category: 'Education',
    status: 'Member -Faculty(outside the College nominated by the Academic Council)',
    affiliation: 'Professor, Dept of CSE, Jadavpur University, Kolkata',
  },
  {
    sno: 7,
    name: 'Mr. K Ravi Chandra',
    designation: 'Member',
    category: 'Industry (Towards Placements)',
    status: 'Representative from Industry/Corporate sector/allied areas relating to placements',
    affiliation: 'Tech Mahindra, Visakhapatnam',
  },
  {
    sno: 8,
    name: 'Mr. A Ravi Kumar',
    designation: 'Member',
    category: 'Alumni',
    status: 'Graduate student to be nominated by the Principal (co-optional)',
    affiliation: 'CDK Global, Hyderabad',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
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
                <th className="border px-2 py-2">Name of the Person</th>
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
