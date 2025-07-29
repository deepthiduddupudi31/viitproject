'use client'
import Sidebar from '../Sidebar';

const collaborationsData = [
  {
    sno: 1,
    organization: 'Tentamus India Pvt Ltd',
    startDate: '30/05/2023',
    endDate: '29/05/2026',
    nature: 'MOU',
  },
];

export default function Collaborations() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
          alt="Collaborations Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Collaborations</h2>

          <section className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S. No.</th>
                    <th className="px-4 py-2 border">
                      Name of the organization with whom MOU/Collaboration being signed
                    </th>
                    <th className="px-4 py-2 border">Start Date</th>
                    <th className="px-4 py-2 border">End Date</th>
                    <th className="px-4 py-2 border">Nature of Collaboration</th>
                  </tr>
                </thead>
                <tbody>
                  {collaborationsData.map((item) => (
                    <tr key={item.sno} className="odd:bg-white even:bg-gray-50 text-center">
                      <td className="px-4 py-2 border">{item.sno}</td>
                      <td className="px-4 py-2 border">{item.organization}</td>
                      <td className="px-4 py-2 border">{item.startDate}</td>
                      <td className="px-4 py-2 border">{item.endDate}</td>
                      <td className="px-4 py-2 border">{item.nature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
