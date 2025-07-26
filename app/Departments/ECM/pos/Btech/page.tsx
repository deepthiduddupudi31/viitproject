'use client'
import Sidebar from '../../Sidebar';

const programmeOutcomes = [
  {
    id: 'PO1',
    title: 'Engineering Knowledge',
    description:
      'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to solve complex engineering problems.',
  },
  {
    id: 'PO2',
    title: 'Problem Analysis',
    description:
      'Identify, formulate, review research literature, and analyze complex engineering problems to reach substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
  },
  {
    id: 'PO3',
    title: 'Design/Development of Solutions',
    description:
      'Design solutions for complex engineering problems and develop system components or processes that meet specified needs, considering public health, safety, cultural, societal, and environmental aspects.',
  },
  {
    id: 'PO4',
    title: 'Conduct Investigations of Complex Problems',
    description:
      'Use research-based knowledge and methods, including experiment design, data analysis, and interpretation, to draw valid conclusions.',
  },
  {
    id: 'PO5',
    title: 'Modern Tools Usage',
    description:
      'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering activities, understanding their limitations.',
  },
  {
    id: 'PO6',
    title: 'The Engineer and Society',
    description:
      'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and fulfill the associated responsibilities relevant to professional engineering practice.',
  },
  {
    id: 'PO7',
    title: 'Environment and Sustainability',
    description:
      'Understand the impact of engineering solutions in societal and environmental contexts and demonstrate knowledge of, and the need for, sustainable development.',
  },
  {
    id: 'PO8',
    title: 'Ethics',
    description:
      'Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.',
  },
  {
    id: 'PO9',
    title: 'Individual and Team Work',
    description:
      'Function effectively as an individual, and as a member or leader in diverse teams and multidisciplinary settings.',
  },
  {
    id: 'PO10',
    title: 'Communication',
    description:
      'Communicate effectively on complex engineering activities with the engineering community and society at large, including writing clear reports, design documentation, delivering effective presentations, and giving and receiving clear instructions.',
  },
  {
    id: 'PO11',
    title: 'Project Management and Finance',
    description:
      'Demonstrate knowledge and understanding of engineering and management principles and apply them to one’s own work, as a member or leader in a team, to manage projects in multidisciplinary environments.',
  },
  {
    id: 'PO12',
    title: 'Life-Long Learning',
    description:
      'Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
  },
];

export default function ProgrammeOutcomesPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="Programme Outcomes Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Programme Outcomes (POs)
          </h2>

          <div className="space-y-4">
            {programmeOutcomes.map((po) => (
              <div key={po.id}>
                <h3 className="font-semibold text-gray-800">
                  {po.id}: {po.title}
                </h3>
                <p className="text-gray-700 text-justify">{po.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
