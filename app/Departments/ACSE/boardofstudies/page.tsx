'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr. P. Sekhar',
    designation: 'Associate Professor',
    category: 'Academics',
    status: 'Chairperson (HoD)(Power Systems)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 2,
    name: 'Dr. B. Arundhati',
    designation: 'Professor',
    category: 'Academics',
    status: 'Member – Faculty (Electrical Machine Drives)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 3,
    name: 'Dr. R.S Ravi Sankar',
    designation: 'Associate Professor',
    category: 'Academics',
    status: 'Member – Faculty (Power Electronics)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 4,
    name: 'Dr. B. Prasada Rao',
    designation: 'Associate Professor',
    category: 'Academics',
    status: 'Member – Faculty (Process Instrumentation & Electronics)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 5,
    name: 'Dr. Ramu Srikakulapu',
    designation: 'Assistant Professor',
    category: 'Academics',
    status: 'Member – Faculty (Control Systems)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 6,
    name: 'Dr. M.V.G.V Prasad',
    designation: 'Assistant Professor',
    category: 'Academics',
    status: 'Member – Faculty (Power & Industrial Drives)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 7,
    name: 'Dr. Sanjeeb Mohanty',
    designation: 'Associate Professor',
    category: 'Academics Nominee (External)',
    status: 'Member – Faculty (External member nominated by the Principal)',
    affiliation: 'National Institute of Technology, Rourkela',
  },
  {
    sno: 8,
    name: 'Dr. K. Ravindra',
    designation: 'Associate Professor',
    category: 'Academics Nominee (External)',
    status: 'Member – Faculty (Selected by the Vice Chancellor from the names proposed by the Principal)',
    affiliation: 'JNTUK, Kakinada',
  },
  {
    sno: 9,
    name: 'Mr. C. Ramakrishna',
    designation: 'Member',
    category: 'Industry Nominee',
    status: 'Representative from Industry/Corporate sector/allied areas',
    affiliation: 'Head Operations, Hinduja National Power Corporation Ltd., Visakhapatnam',
  },
  {
    sno: 10,
    name: 'Mr. S. Damodar',
    designation: 'Member',
    category: 'Alumni Nominee',
    status: 'Post graduate meritorious student nominated by the Principal (co-optional)',
    affiliation: 'Senior Manager (Electrical), Vizag Steel Plant (RINL), Visakhapatnam',
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
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Internal And External Members</h2>
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
