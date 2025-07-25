'use client';
import Sidebar from '../Sidebar';

export default function PeoPage() {
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
          {/* PEOs Section */}
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Program Educational Objectives (PEOs)
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-800 text-justify">
            <li>
              <strong>PEO1:</strong> Successful professional in industry, government sector, academia, research, entrepreneurial pursuit and consulting firms.
            </li>
            <li>
              <strong>PEO2:</strong> Contribute to society as broadly educated, expressive, ethical and responsible citizens with proven expertise.
            </li>
            <li>
              <strong>PEO3:</strong> Thrive to pursue life-long learning to fulfil their goals.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
}
