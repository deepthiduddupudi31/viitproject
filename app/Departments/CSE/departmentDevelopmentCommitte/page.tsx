'use client'
import Sidebar from '.././Sidebar'

const ddcMembers = [
  { sno: 1, name: 'Dr.Ch. Ramesh Babu', role: 'Chairperson', designation: 'Head of the Department-ECE' },
  { sno: 2, name: 'Prof.K. Babulu', role: 'Member', designation: 'Academic Expert, Director R&D, JNTU-GV' },
  { sno: 3, name: 'Mr. Sitarama Penumetsa', role: 'Member', designation: 'Industry Expert, CEO-Tech Team Solutions, Visakhapatnam' },
  { sno: 4, name: 'Mr.Venkatesh Sappagaddi', role: 'Member', designation: 'Alumni Representative, Founder & CEO, Electro Pro. Pvt. Ltd' },
  { sno: 5, name: 'Dr. A. Naga Jyothi', role: 'Member', designation: 'Professor, VIIT (A)' },
  { sno: 6, name: 'Dr.K.Srinivasa Naik', role: 'Member', designation: 'Professor, VIIT (A)' },
  { sno: 7, name: 'Dr. B. Prasad Rao', role: 'Member', designation: 'Professor, VIIT (A)' },
  { sno: 8, name: 'Mr. S. Ravi Kumar', role: 'Member Secretary', designation: 'Asst. HoD, ECE' },
];

const ddcmoms = [
  { year: '2022-23', url: '#' },
  { year: '2021-22', url: '#' },
  { year: '2020-21', url: '#' },
];

export default function DepartmentDevelopmentCommittee() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
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
              <li>Review the existing curriculum and suggest improvements to enhance its relevance, effectiveness, and alignment with industry standards. This could involve suggesting new courses, revising course content, and updating teaching methodologies.</li>
              <li>Stay updated on current industry trends and skill requirements. Identify potential gaps between the department's curriculum and the industry's needs. Suggest industry expert lectures/guest lectures.</li>
              <li>Based on industry trends and student needs, recommend new specializations. Suggest add-on/value added courses.</li>
              <li>Suggest innovative teaching methods that promote student engagement, critical thinking, and deeper understanding of concepts.</li>
              <li>Advise strategies to improve student placement, higher education, and entrepreneurship opportunities.</li>
              <li>Recommend areas of research focus, considering emerging trends and faculty expertise. Advise on identifying potential funding sources for research projects.</li>
              <li>Encourage faculty collaboration on research projects. Promote innovation and entrepreneurship within the department.</li>
              <li>Advise on development and maintenance of infrastructure like laboratories, libraries, and IT resources.</li>
              <li>Provide recommendations on allocation of departmental budget for curriculum development, faculty training, and research activities.</li>
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
                  <th className="border px-2 py-2">Name of the Member</th>
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
                    DDC_MoM_{mom.year}
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
