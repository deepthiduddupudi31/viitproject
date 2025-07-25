'use client'
import Sidebar from '../Sidebar'

const patents = [
  {
    faculty: 'Dr. Susant Kumar Sahu',
    title: 'Flat Receiver for Solar Parabolic Dish Concentrator System and Method Thereof.',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Granted',
    year: 2020,
  },
  {
    faculty: 'Dr. Susant Kumar Sahu',
    title: 'Solar Powered Electric Liquid Sprayer Device and Method Thereof.',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Granted',
    year: 2020,
  },
  {
    faculty: 'Dr. K.S. Raghuram',
    title: 'Two Wheeled Moving Cum Relocating Hand Truck',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Filed',
    year: 2021,
  },
  {
    faculty: 'Dr. K.S. Raghuram',
    title: 'Thermal Imaging Camera for Solar Power Plant',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Filed',
    year: 2023,
  },
  {
    faculty: 'Dr. K.S. Raghuram',
    title: 'An Efficient IRIS Recognition with Complete Local Ternary Pattern Feature Extraction and Classification Method',
    agency: 'IP Australia, Government of Australia',
    status: 'Accepted',
    year: 2023,
  },
  {
    faculty: 'Dr. K.S. Raghuram',
    title: 'A System Based on Neural Network to Refine the Heuristic Data with Image Processing Techniques',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Published',
    year: 2021,
  },
  {
    faculty: 'Dr. Rapeta Sundara Ramam',
    title: 'Integrated Airless Wheel',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Filed',
    year: 2021,
  },
  {
    faculty: 'Dr. Bharat Kumar Chigilipalli',
    title: 'Conductive Coating for Low Temperature Solid Oxide Fuel Cell',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Published',
    year: 2023,
  },
  {
    faculty: 'Dr. B.N.Dhanujaya',
    title: 'An Automotive Tyre',
    agency: 'Intellectual Property India, Patent Office, Government of India',
    status: 'Published',
    year: 2024,
  },
]

const researchProjects = [
  {
    investigator: 'Ch. V. S. N. Reddi',
    title: 'Medium and High Frequency Noise Reduction in a Vibro-acoustic Cavity using Radiatter Geometry',
    agency: 'DST-SERB',
    amount: 'Rs. 36.036 Lakhs',
  },
  {
    investigator: 'Dr. G. Yoganjaneyulu',
    title: 'Investigation on the formability, microstructure and mechanical behavior of Titanium and Nitinol alloy foils during single point micro incremental process.',
    agency: 'DST-SERB',
    amount: 'Rs. 23.9751 Lakhs',
  },
  {
    investigator: 'Head of the Department',
    title: 'To strengthen the research facility in department under FIST scheme.',
    agency: 'DST-FIST',
    amount: 'Rs. 20.50 Lakhs',
  },
  {
    investigator: 'Head of the Institute',
    title: 'AICTE-IDEA Lab',
    agency: 'AICTE',
    amount: 'Rs. 55 Lakhs',
  },
]

const researchPublications = [
  { year: '2023 - 24', journals: 26, conferences: 0, total: 26 },
  { year: '2022 - 23', journals: 26, conferences: 20, total: 46 },
  { year: '2021 - 22', journals: 81, conferences: 7, total: 88 },
  { year: '2020 - 21', journals: 71, conferences: 0, total: 71 },
  { year: '2019 - 20', journals: 39, conferences: 0, total: 39 },
  { year: '2018 - 19', journals: 30, conferences: 1, total: 31 },
]

export default function ResearchPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Research Patents</h2>
          <table className="w-full text-sm border mb-12 rounded-md shadow">
            <thead className="bg-blue-100 text-gray-700 text-center">
              <tr>
                <th className="border px-4 py-2">S.No</th>
                <th className="border px-4 py-2">Faculty Name</th>
                <th className="border px-4 py-2">Title of the Patent</th>
                <th className="border px-4 py-2">Agency</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {patents.map((patent, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 text-center">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td className="border px-2 py-1">{patent.faculty}</td>
                  <td className="border px-2 py-1 text-left">{patent.title}</td>
                  <td className="border px-2 py-1">{patent.agency}</td>
                  <td className="border px-2 py-1">{patent.status}</td>
                  <td className="border px-2 py-1">{patent.year}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Projects</h2>
          <table className="w-full text-sm border mb-12 rounded-md shadow">
            <thead className="bg-blue-100 text-gray-700 text-center">
              <tr>
                <th className="border px-4 py-2">S.No</th>
                <th className="border px-4 py-2">Investigator</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Agency</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {researchProjects.map((proj, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 text-center">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td className="border px-2 py-1">{proj.investigator}</td>
                  <td className="border px-2 py-1 text-left">{proj.title}</td>
                  <td className="border px-2 py-1">{proj.agency}</td>
                  <td className="border px-2 py-1">{proj.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Publications</h2>
          <table className="w-full text-sm border rounded-md shadow">
            <thead className="bg-blue-100 text-gray-700 text-center">
              <tr>
                <th className="border px-4 py-2">S.No</th>
                <th className="border px-4 py-2">Year</th>
                <th className="border px-4 py-2">International/National Journals</th>
                <th className="border px-4 py-2">Conferences</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {researchPublications.map((pub, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 text-center">
                  <td className="border px-2 py-1">{index + 1}</td>
                  <td className="border px-2 py-1">{pub.year}</td>
                  <td className="border px-2 py-1">{pub.journals}</td>
                  <td className="border px-2 py-1">{pub.conferences}</td>
                  <td className="border px-2 py-1">{pub.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}

