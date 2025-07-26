'use client'
import Sidebar from '.././Sidebar'

const ddcMembers = [
  { sno: 1, name: 'Dr. Sudhir Vummadisetti', role: 'Chairperson', designation: 'Head of the Department-CE' },
  { sno: 2, name: 'Mr. M. Padmakar', role: 'Member', designation: 'Assistant Professor, VIIT (A)' },
  { sno: 3, name: 'Mr. K. Srinivas', role: 'Member Secretary', designation: 'Asst. HoD, CE' },
  { sno: 4, name: 'Mr. B. Brahmaiah', role: 'Member', designation: 'Assistant Professor, VIIT (A)' },
  { sno: 5, name: 'Dr. RatnaTej Reddy', role: 'Member', designation: 'Assistant Professor, VIIT (A)' },
  { sno: 6, name: 'Mrs. Jami Lakshmi Sudha', role: 'Member', designation: 'Assistant Professor, VIIT (A)' },
  { sno: 7, name: 'Mrs. Reshma Chandran T', role: 'Member', designation: 'Assistant Professor, VIIT (A)' },
];

const ddcmoms = [
  { year: '2023-24', url: 'https://vignaniit.edu.in/DDC/DDC_23-24.pdf' },
  { year: '2022-23', url: 'https://vignaniit.edu.in/DDC/DDC_ECE.pdf' },
  { year: '2021-22', url: 'https://vignaniit.edu.in/ddc/ece/ECE_DDC_2021_22.pdf' },
  { year: '2020-21', url: 'https://vignaniit.edu.in/ddc/ece/ECE_DDC_2020_21.pdf' },
];

export default function DepartmentDevelopmentCommittee() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mba.jpg"
          alt="DDC Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Department Development Committee (DDC)</h2>

          {/* Roles & Responsibilities */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Roles and Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Review the existing curriculum and suggest improvements for industry alignment and relevance.</li>
              <li>Monitor industry trends and recommend guest lectures from experts.</li>
              <li>Propose new specializations and value-added courses.</li>
              <li>Suggest innovative teaching methodologies for better student engagement.</li>
              <li>Advise strategies for placements, higher education, and entrepreneurship opportunities.</li>
              <li>Identify research focus areas and funding opportunities.</li>
              <li>Promote faculty collaboration and research innovation.</li>
              <li>Support development of labs, libraries, and IT infrastructure.</li>
              <li>Provide inputs on budget allocation for academic and research activities.</li>
              <li><strong>Meeting Frequency:</strong> Once a year</li>
            </ul>
          </section>

          {/* Committee Structure */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Structure of Committee</h3>
            <table className="w-full table-auto border border-gray-300 text-sm text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border px-2 py-2">S.No</th>
                  <th className="border px-2 py-2">Name</th>
                  <th className="border px-2 py-2">Role</th>
                  <th className="border px-2 py-2">Designation</th>
                </tr>
              </thead>
              <tbody>
                {ddcMembers.map((member) => (
                  <tr key={member.sno}>
                    <td className="border px-2 py-1">{member.sno}</td>
                    <td className="border px-2 py-1">{member.name}</td>
                    <td className="border px-2 py-1">{member.role}</td>
                    <td className="border px-2 py-1">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* DDC MoM */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">DDC Minutes of Meetings (MoM)</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              {ddcmoms.map((mom) => (
                <li key={mom.year}>
                  <a href={mom.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    DDC MoM {mom.year}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
