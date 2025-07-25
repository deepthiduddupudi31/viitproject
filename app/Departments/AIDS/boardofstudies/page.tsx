'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr. T V Madhusudhana Rao',
    designation: 'Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 2,
    name: 'Mr. Ch V Sharma',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 3,
    name: 'Dr. Chandra Mouli PVSSR',
    designation: 'Member',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'Associate Professor & HoD CSE, Central University of Tamil Nadu',
  },
  {
    sno: 4,
    name: 'Mr. Md Nizamuddin',
    designation: 'Member',
    category: 'Industry (Towards Placements)',
    status: 'Representative from Industry/Corporate sector/allied areas relating to placements',
    affiliation: 'Lead Decisioning Architect Verizon',
  },
  {
    sno: 5,
    name: 'Mr. A Ravi Kumar',
    designation: 'Member',
    category: 'Alumni',
    status: 'Graduate student nominated by the Principal (co-optional)',
    affiliation: 'CDK Global, Hyderabad',
  },
];

const externalInternalMembers = [
  {
    sno: 1,
    name: 'Dr. T.V.Madhusudhan Rao',
    designation: 'Head, Department of AI&DS, VIIT',
    type: 'BoS Chairman',
  },
  {
    sno: 2,
    name: 'Dr. D.Rajya Laxmi',
    designation: 'Professor, Dept of CSE, JNTU – Vizianagaram',
    type: 'External Member',
  },
  {
    sno: 3,
    name: 'Dr. Korra Sathya Babu',
    designation: 'Associate Professor, Department of CSE, IIITDM Kurnool',
    type: 'External Member',
  },
  {
    sno: 4,
    name: 'Mr. Nizam Mohammed',
    designation: 'Lead Decisioning Architect Verizon',
    type: 'External Member',
  },
  {
    sno: 5,
    name: 'Mr.B.Sampath',
    designation: 'SDE, Paypal India',
    type: 'External Member',
  },
  {
    sno: 6,
    name: 'Dr. Anima Nayak',
    designation: 'Assoc. Professor, Department of AI&DS, VIIT',
    type: 'Internal Member',
  },
  {
    sno: 7,
    name: 'Mr.Ch.Viswanadh Sarma',
    designation: 'Assistant Professor, Department of AI&DS, VIIT',
    type: 'Internal Member',
  },
  {
    sno: 8,
    name: 'Mr. R.V.L.S.N.Sastry',
    designation: 'Assistant Professor, Department of AI&DS, VIIT',
    type: 'Internal Member',
  },
  {
    sno: 9,
    name: 'Mrs. G.Hima Bindu',
    designation: 'Assistant Professor, Department of AI&DS, VIIT',
    type: 'Internal Member',
  },
  {
    sno: 10,
    name: 'Mrs. I Mani Kumari',
    designation: 'Assistant Professor, Department of AI&DS, VIIT',
    type: 'Internal Member',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>

          {/* First Table */}
          <h3 className="text-xl font-semibold text-blue-800 mb-4">General Members</h3>
          <table className="w-full table-auto border border-gray-300 text-sm text-left mb-10">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name of the Person</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Status of the Person</th>
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

          {/* Second Table */}
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Internal & External Members</h3>
          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name of the Person</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">External / Internal</th>
              </tr>
            </thead>
            <tbody>
              {externalInternalMembers.map((member) => (
                <tr key={member.sno}>
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                  <td className="border px-2 py-1">{member.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
