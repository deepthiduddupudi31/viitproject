'use client'
import Sidebar from '.././Sidebar'

const responsibilitiesByFrequency = [
  {
    frequency: 'Twice in a Semester',
    items: [
      'Review result analysis of students in internal & external examinations.',
      'Identification of slow and advanced learners.',
      'Verification of lab manuals according to the academic regulations.',
      'Laboratory stock and maintenance register verification.',
      'Checking the lab equipment condition.',
      'Updating the lab software status.',
      'Verification of quality of mid-examination question paper.',
      'Verification of quality of mid-examination answers sheets evaluation.',
      'Course file verification.',
      'Adherence to the academic calendar.',
      'CRC meetings to verify syllabus status before mid-1 and mid-2.',
    ],
  },
  {
    frequency: 'Once in a Semester',
    items: [
      'Analysis of course feedback, graduate exit survey, alumni survey, and course exit survey from the students.',
      'Analysis of CO attainment, PO, and PSO attainments. Propose strategies for continuous improvement.',
      'Creating OBE awareness through guest lectures and seminars.',
      'Evaluating the implementation of active learning, collaborative learning, and project-based learning in the classrooms.',
    ],
  },
  {
    frequency: 'Once in a Year',
    items: [
      'Review admission analysis and recommend strategies to improve the quality of admissions.',
      'Verification of alumni reports.',
      'Suggestions for Students –Industry interaction.',
      'Assessing the student’s projects (Mini & Major).',
      'Checking the quality improvement of student publications.',
      'Examining the quality of project reports through plagiarism check.',
    ],
  },
]

const pmcMoMs = [
  { year: '2022-23', title: 'PMC_22-23_MoM', url: 'https://vignaniit.edu.in/PAQIC/ECE~PAQIC@01996520240421133321.pdf' },
  { year: '2021-22', title: 'PMC_21-22_MoM', url: 'https://vignaniit.edu.in/PAQIC/ECE~PAQIC@01996520240421133321.pdf' },
  { year: '2020-21', title: 'PMC_20-21_MoM', url: 'https://vignaniit.edu.in/PAQIC/ECE~PAQIC01996520240421133321.pdf' },
]

export default function PAQIC() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="PAQIC Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Program Assessment and Quality Improvement Committee (PAQIC)
          </h2>

          {/* Responsibilities */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Responsibilities</h3>
            {responsibilitiesByFrequency.map((group) => (
              <div key={group.frequency} className="mb-6">
                <h4 className="text-md font-semibold text-blue-700 mb-2">{group.frequency}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                  {group.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* MoMs Section */}
          <section>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Minutes of Meetings (MoM)</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700 pl-4">
              {pmcMoMs.map((mom) => (
                <li key={mom.year}>
                  <a href={mom.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {mom.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
