'use client'
import Sidebar from '.././Sidebar';

export default function CivilPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">PROGRAMS OFFERED</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-blue-200 text-gray-900">
                <tr>
                  <th className="px-4 py-2 border">S. No.</th>
                  <th className="px-4 py-2 border">Name of the Program</th>
                  <th className="px-4 py-2 border">Current intake</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="bg-gray-100">
                  <td className="px-4 py-2 border">1</td>
                  <td className="px-4 py-2 border">B. Tech. in Civil Engineering</td>
                  <td className="px-4 py-2 border">120</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">2</td>
                  <td className="px-4 py-2 border">M. Tech. in Transportation Engineering</td>
                  <td className="px-4 py-2 border">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
  