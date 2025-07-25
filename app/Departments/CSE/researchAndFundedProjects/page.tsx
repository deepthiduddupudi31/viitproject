'use client'
import Sidebar from '../Sidebar'

const publicationsData = [
  ['1', '2019 - 2020', '12', '2', '14'],
  ['2', '2018 - 2019', '23', '2', '25'],
  ['3', '2017 - 2018', '25', '11', '36'],
  ['4', '2016 - 2017', '16', '1', '17'],
  ['5', '2015 - 2016', '30', '1', '31'],
  ['6', '2014 - 2015', '11', '1', '12'],
  ['7', '2013 - 2014', '29', '1', '30'],
  ['8', '2012 - 2013', '16', '4', '20'],
]

const patentsData = [
  ['1', 'Smart Wearable Reminder Device', 'Dr.Madam Aravind Kumar, Mr Movva Pavani, Dr.Pattisapu S.N.Murthy, Dr.Ede Venkata Krishna Rao, Mr Alluri Krishna Chaitanya Varma', '03/01/2020', '2020'],
  ['2', 'IOT system to detect and analyse gait of an individual and method employed thereof', 'Dr. T. Karthikeyan, Mr.Achanta Sampath Dakshina Murthy, Dr. N. Prabakaran, Mr.R.Sekar, Dr. K. Shankar, Dr.CH. Nagaraju', '01/11/2019', '2019'],
  ['3', 'Microcontroller based tongue operated system for an ambulation device and method thereof', 'Dr. Rudra Pratap Das, Dr. Aggala Naga Jyothi, Mr.Achanta Sampath Dakshina Murthy, Mr.Govindasamy Thiagarajan', '04/10/2019', '2019'],
]

const projectsData = [
  ['1', 'Dr.Srinivasa Naik', 'Design Optimization and Performance Improvement of Large Antenna arrays.', 'DST SERB, File No: EEQ/ 2016/000391', '40,61,000/-'],
  ['2', 'Dr.A.Naga Jyothi', 'Arbitrary Waveform Generator for Automotive Radar Systems', 'DST File No : ECR /2017 /000256/ES', '45,02,830/-'],
]

export default function ResearchPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto space-y-12">
          {/* Research Publications */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Publications</h2>
            <table className="w-full text-sm border rounded-md shadow-md">
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
                {publicationsData.map((row, idx) => (
                  <tr key={idx} className="text-center odd:bg-white even:bg-gray-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="border px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Patents */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Patents</h2>
            <table className="w-full text-sm border rounded-md shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-center">
                <tr>
                  <th className="border px-4 py-2">S.No</th>
                  <th className="border px-4 py-2">Title of the Patent</th>
                  <th className="border px-4 py-2">Name of the Applicants</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Year</th>
                </tr>
              </thead>
              <tbody>
                {patentsData.map((row, idx) => (
                  <tr key={idx} className="text-center odd:bg-white even:bg-gray-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="border px-4 py-2 text-justify">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Research Projects */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Projects</h2>
            <table className="w-full text-sm border rounded-md shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-center">
                <tr>
                  <th className="border px-4 py-2">S.No</th>
                  <th className="border px-4 py-2">Name of the Investigator</th>
                  <th className="border px-4 py-2">Title of the Project</th>
                  <th className="border px-4 py-2">Funding Agency</th>
                  <th className="border px-4 py-2">Amount Granted</th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map((row, idx) => (
                  <tr key={idx} className="text-center odd:bg-white even:bg-gray-50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="border px-4 py-2 text-justify">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  )
}
