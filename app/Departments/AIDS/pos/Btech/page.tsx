'use client'
import Sidebar from '../../Sidebar'

const programmeOutcomes = [
  [
    'PO1',
    'Engineering Knowledge',
    'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
  ],
  [
    'PO2',
    'Problem Analysis',
    'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
  ],
  [
    'PO3',
    'Design/Development of Solutions',
    'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.',
  ],
  [
    'PO4',
    'Conduct Investigations of Complex Problems',
    'Use research-based knowledge and methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.',
  ],
  [
    'PO5',
    'Modern Tools Usage',
    'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
  ],
  [
    'PO6',
    'The Engineer and Society',
    'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.',
  ],
  [
    'PO7',
    'Environment and Sustainability',
    'Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of and need for sustainable development.',
  ],
  [
    'PO8',
    'Ethics',
    'Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.',
  ],
  [
    'PO9',
    'Individual and Team Work',
    'Function effectively as an individual and as a member or leader in diverse teams, and in multidisciplinary settings.',
  ],
  [
    'PO10',
    'Communication',
    'Communicate effectively on complex engineering activities with the engineering community and society at large—comprehending and writing reports, documentation, making presentations, and giving/receiving instructions.',
  ],
  [
    'PO11',
    'Project Management and Finance',
    'Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects in multidisciplinary environments.',
  ],
  [
    'PO12',
    'Life-Long Learning',
    'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
  ],
];

export default function ProgramOutcomesPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Program Outcomes Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Outcomes (POs)</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-md shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-center">
                <tr>
                  <th className="px-4 py-2 border">PO Code</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Description</th>
                </tr>
              </thead>
              <tbody>
                {programmeOutcomes.map(([code, title, description], idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border text-center font-medium">{code}</td>
                    <td className="px-4 py-2 border font-semibold text-gray-800">{title}</td>
                    <td className="px-4 py-2 border text-justify text-gray-700">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
