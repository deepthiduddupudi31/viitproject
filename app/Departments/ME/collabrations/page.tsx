'use client'
import Sidebar from '../Sidebar'

const collaborations = [
  {
    sno: 1,
    industry:
      'Innovative and Scientific House for Advanced Mobility Solutions (ISHAMS), Bhubaneswar, Odisha',
    scope: 'Skill training and Commercialization of Products',
  },
  {
    sno: 2,
    industry: 'Turbomech Services Private Limited, Visakhapatnam',
    scope: 'Skill training',
  },
  {
    sno: 3,
    industry: 'Gaamma Motors Private Limited, Visakhapatnam',
    scope: 'Commercialization of Solar EVs',
  },
  {
    sno: 4,
    industry:
      'Andhra Pradesh State Skill Development Corporation (APSSDC Vizag), Visakhapatnam',
    scope: 'Skill training',
  },
  {
    sno: 5,
    industry: 'Jayem Automotives Private Limited, Coimbatore',
    scope: 'Industrial Consultancy',
  },
  {
    sno: 6,
    industry: 'LV Prasad Eye Institute, Visakhapatnam',
    scope: 'Industrial Consultancy',
  },
  {
    sno: 7,
    industry: 'Vaneklaesen Associates LLP, Gurugram Haryana',
    scope: 'Industrial Consultancy',
  },
  {
    sno: 8,
    industry: 'Naval Dock Yard, Visakhapatnam',
    scope:
      'Airborne Noise Study inside IRL Guide Post onboard INS Kadmatt',
  },
  {
    sno: 9,
    industry: 'Dynamic Test and Measurement System, Chennai',
    scope:
      'Certification and assessment of acoustic impedance tube system',
  },
]

export default function CollaborationsPage() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Collaborations"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Collaborations</h2>

          <div className="overflow-x-auto">
            <table className="w-full border text-sm rounded shadow-md">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2 text-left">S. No.</th>
                  <th className="border px-4 py-2 text-left">Industry</th>
                  <th className="border px-4 py-2 text-left">Scope</th>
                </tr>
              </thead>
              <tbody>
                {collaborations.map((collab) => (
                  <tr key={collab.sno} className="even:bg-gray-50 odd:bg-white">
                    <td className="border px-4 py-2">{collab.sno}</td>
                    <td className="border px-4 py-2">{collab.industry}</td>
                    <td className="border px-4 py-2">{collab.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
