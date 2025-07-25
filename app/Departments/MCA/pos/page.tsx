'use client';
import Sidebar from '../Sidebar';

export default function PoPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg" // Replace with actual banner if needed
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Outcomes (POs)</h2>

          <ol className="list-decimal pl-6 space-y-4 text-gray-800 text-justify">
            <li><strong>Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>

            <li><strong>Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>

            <li><strong>Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</li>

            <li><strong>Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</li>

            <li><strong>Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</li>

            <li><strong>The Engineer and Society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>

            <li><strong>Environment and Sustainability:</strong> Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of, and need for sustainable development.</li>

            <li><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>

            <li><strong>Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>

            <li><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>

            <li><strong>Project Management and Finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>

            <li><strong>Life-Long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
          </ol>
        </main>
      </div>
    </div>
  );
}
