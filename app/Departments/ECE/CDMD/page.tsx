'use client'
import Sidebar from '.././Sidebar'

const cdmcMembers = [
  { name: 'Dr. Ch. Ramesh Babu', designation: 'Chairperson (Head of the Department)' },
  { name: 'Dr. A. Naga Jyothi', designation: 'Professor, Department of ECE' },
  { name: 'Dr. K. Srinivasa Naik', designation: 'Associate Professor, Department of ECE' },
  { name: 'Dr. H. Devanna', designation: 'Associate Professor, Department of ECE' },
  { name: 'Mrs. A. Usha Rani', designation: 'Assistant Professor, Department of ECE' },
  { name: 'Mr. S. Ravi Kumar', designation: 'Assistant Professor, Department of ECE' },
  { name: 'Mr. S. Bhaskar', designation: 'Assistant Professor, Department of ECE' },
  { name: 'Mr. B. Pavan Kumar', designation: 'Assistant Professor, Department of ECE' },
  { name: 'Mr. B. Sai Kiran', designation: 'Assistant Professor, Department of ECE' },
];

export default function CDMC() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="CDMC Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Curriculum Design & Monitoring Committee (CDMC)
          </h2>

          {/* Roles & Responsibilities */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Roles & Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800 pl-4">
              <li>Design of curriculum for B.Tech Program in Electronics and Communication Engineering as per AICTE and affiliating university guidelines.</li>
              <li>Mapping of curriculum to Program Outcomes (POs), Program Specific Outcomes (PSOs), and Program Educational Objectives (PEOs).</li>
              <li>Recommending modifications in the curriculum considering feedback from stakeholders including students, alumni, faculty, industry, and academia.</li>
              <li>Monitoring the implementation of the curriculum and recommending improvements based on evaluation and feedback.</li>
              <li>Conducting curriculum review meetings periodically.</li>
            </ul>
          </section>

          {/* Term */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Term</h3>
            <p className="text-gray-700 pl-4">2 Years</p>
          </section>

          {/* Meeting Frequency */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Meeting Frequency</h3>
            <p className="text-gray-700 pl-4">Once per Semester</p>
          </section>

          {/* Members */}
          <section>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Committee Members</h3>
            <table className="w-full table-auto border border-gray-300 text-left text-gray-800">
              <thead className="bg-blue-100 text-blue-900">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">S. No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Designation</th>
                </tr>
              </thead>
              <tbody>
                {cdmcMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
