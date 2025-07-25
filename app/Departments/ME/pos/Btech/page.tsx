'use client'
import Sidebar from '../../Sidebar';

const programmeOutcomes = [
  {
    id: 'PO1',
    description:
      'Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
  },
  {
    id: 'PO2',
    description:
      'Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
  },
  {
    id: 'PO3',
    description:
      'Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.',
  },
  {
    id: 'PO4',
    description:
      'Conduct Investigations of Complex Problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
  },
  {
    id: 'PO5',
    description:
      'Modern Tools Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
  },
  {
    id: 'PO6',
    description:
      'The Engineer and Society: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to professional engineering practice.',
  },
  {
    id: 'PO7',
    description:
      'Environment and Sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of and need for sustainable development.',
  },
  {
    id: 'PO8',
    description:
      'Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
  },
  {
    id: 'PO9',
    description:
      'Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
  },
  {
    id: 'PO10',
    description:
      'Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
  },
  {
    id: 'PO11',
    description:
      'Project Management and Finance: Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
  },
  {
    id: 'PO12',
    description:
      'Life-Long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
  },
];

export default function ProgrammeOutcomesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Programme Outcomes (POs)</h2>
          <div className="space-y-4">
            {programmeOutcomes.map((po) => (
              <div key={po.id}>
                <h3 className="font-semibold text-blue-800">{po.id}</h3>
                <p className="text-gray-800 text-justify">{po.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
