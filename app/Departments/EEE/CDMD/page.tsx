'use client'
import Sidebar from '.././Sidebar'

const cdmcMembers = [
  {
    name: 'Dr. Sudhir Vummadisetti',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Chairperson (HOD)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    name: 'Mr. M. Padmakar',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    name: 'Mr. K. Srinivas',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    name: 'Mr. B. Brahmaiah',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    name: 'Mr. P. Shiva Kumar',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    name: 'Mr. Babu Rao',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member – Faculty',
    affiliation: 'VIIT, Visakhapatnam.',
  },
];

const cdmcRoles = [
  "The CDMC is responsible for designing and developing the curriculum for various academic programs offered by the department. This includes determining the structure of courses, defining learning objectives, selecting appropriate teaching methodologies, and designing assessment methods.",
  "The committee ensures that the curriculum aligns with the regulations and guidelines set forth by the Institute. It also stays updated with any changes or updates in these regulations and makes necessary adjustments to the curriculum.",
  "The CDMC may consult with various stakeholders, including faculty members, students, industry experts, and alumni, to gather feedback and insights on the curriculum design. This ensures that the curriculum meets the needs and expectations of all stakeholders.",
  "The CDMC encourages innovation in teaching and learning methods and promotes the integration of new technologies and pedagogical approaches into the curriculum. It also ensures that the curriculum is flexible enough to adapt to changing educational trends and industry requirements.",
  "Finally, the committee is committed to continuous improvement of the curriculum based on feedback, evaluation data, and emerging trends in education. It regularly reviews and revises the curriculum to enhance its effectiveness and relevance",
];

export default function CDMC() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/civil.jpg"
          alt="CDMC Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            CURRICULUM DESIGN & MONITORING COMMITTEE (CDMC)
          </h2>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Internal & External Members</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2 border">S.No.</th>
                    <th className="px-4 py-2 border">Name of the person</th>
                    <th className="px-4 py-2 border">Designation</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Status of the person</th>
                    <th className="px-4 py-2 border">Affilation</th>
                  </tr>
                </thead>
                <tbody>
                  {cdmcMembers.map((member, index) => (
                    <tr key={index} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{index + 1}</td>
                      <td className="px-4 py-2 border">{member.name}</td>
                      <td className="px-4 py-2 border">{member.designation}</td>
                      <td className="px-4 py-2 border">{member.category}</td>
                      <td className="px-4 py-2 border">{member.status}</td>
                      <td className="px-4 py-2 border">{member.affiliation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Roles & Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
              {cdmcRoles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Term and Meeting</h3>
            <p className="text-gray-700 mb-1">
              <strong>Term:</strong> Shall continue to be in force until reconstitution
            </p>
            <p className="text-gray-700">
              <strong>Meeting:</strong> Twice in a year the meeting may be scheduled as and when necessary
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
