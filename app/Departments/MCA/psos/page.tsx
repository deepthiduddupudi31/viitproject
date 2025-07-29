'use client';
import Sidebar from '../Sidebar';

export default function PsoPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          {/* PSOs Section */}
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Program Specific Outcomes (PSOs)
          </h2>
          <p className="mb-4 text-gray-700">
            MCA program has been designed to prepare graduates for attaining the following program specific outcomes:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800 text-justify">
            <li>
              <strong>PSO1:</strong> They can identify, critically analyze, formulate and develop computer applications.
            </li>
            <li>
              <strong>PSO2:</strong> Function competently as an individual and as a leader in multidisciplinary projects.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
}
