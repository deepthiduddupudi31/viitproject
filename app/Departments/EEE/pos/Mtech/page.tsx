'use client'
import Sidebar from '../../Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/eee.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Outcomes (POs)</h2>
          <div className="space-y-4 text-gray-700 text-justify">
            <p><strong>PO1:</strong> Problem Investigations and Development of Solutions: An ability to independently carry out research / investigation and development work to solve practical problems.</p>
            <p><strong>PO2:</strong> Academic Writing: An ability to write and present a substantial technical report / document.</p>
            <p><strong>PO3:</strong> Model Tool Usage: To apply Modern Engineering tools to solve the problems pertaining to meet global and national needs.</p>
            <p><strong>PO4:</strong> Engineering & Society: Work on multi disciplinary projects on Emerging areas to solve the societal problems.</p>
            <p><strong>PO5:</strong> Ethics: Develop professional and ethical attitude and become socially responsible citizen.</p>
            <p><strong>PO6:</strong> Life Long Learning: Engage in lifelong learning to enhance knowledge and competence.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
