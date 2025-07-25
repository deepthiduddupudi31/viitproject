'use client'
import Sidebar from '../Sidebar'

const ddcMembers = [
  { sno: 1, name: 'Dr. S. Rambabu', role: 'Chairperson', designation: 'Head of the Department-ME' },
  { sno: 2, name: 'Dr. C. Neelima Devi', role: 'Member', designation: 'Academic Expert, HoD, JNTU-GV' },
  { sno: 3, name: 'Mrs. Y. Usha', role: 'Member', designation: 'Industry Expert, Scientist, CSIR National Metallurgical Laboratory' },
  { sno: 4, name: 'Mr. A. Rudra Kumar', role: 'Member', designation: 'Alumni Representative, Research Engineer, Hyundai Motor India Engineering' },
  { sno: 5, name: 'Dr. B. Sateesh', role: 'Member', designation: 'Professor, VIIT (A)' },
  { sno: 6, name: 'Dr. L.V.V. Gopala Rao', role: 'Member', designation: 'Professor, VIIT (A)' },
  { sno: 7, name: 'Mr. Ch. Siva Rama Krishna', role: 'Member', designation: 'Assoc. Professor, VIIT (A)' },
  { sno: 8, name: 'Mr. B.N. Dhanunjaya Rao', role: 'Member Secretary', designation: 'Asst. HoD, ECE' },
];

const ddcmoms = [
  { year: '2022-23', url: 'https://vignaniit.edu.in/ddc/mech/ME_DDC_2022_23.pdf' },
  { year: '2021-22', url: 'https://vignaniit.edu.in/ddc/mech/ME_DDC_2021_22.pdf' },
  { year: '2020-21', url: 'https://vignaniit.edu.in/ddc/mech/ME_DDC_2020_21.pdf' },
];

export default function DepartmentDevelopmentCommittee() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
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
              <li>Review the existing curriculum and suggest improvements to enhance relevance, effectiveness, and alignment with industry standards.</li>
              <li>Stay updated on industry trends and skill requirements; suggest expert lectures to bridge curriculum-industry gaps.</li>
              <li>Recommend new specializations and add-on/value-added courses based on trends and student needs.</li>
              <li>Encourage innovative teaching methods to enhance student engagement and conceptual clarity.</li>
              <li>Advise on strategies for improving placements, higher education, and entrepreneurial opportunities.</li>
              <li>Identify areas for research focus and recommend funding opportunities for faculty and students.</li>
              <li>Promote interfaculty collaboration and innovation in research and entrepreneurship.</li>
              <li>Support development of departmental labs, libraries, and IT infrastructure.</li>
              <li>Provide recommendations for budget allocation in academic and research domains.</li>
              <li><strong>Meeting Frequency:</strong> Once in a year</li>
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
