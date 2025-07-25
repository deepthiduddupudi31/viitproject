'use client'
import Sidebar from '../Sidebar'

const patents = [
  ['1', 'Smart Wearable Reminder Device', '1. Dr.Madam Aravind Kumar 2. Mr Movva Pavani 3. Dr.Pattisapu S.N.Murthy 4. Dr.Ede Venkata Krishna Rao 5. Mr Alluri Krishna Chaitanya Varma', '03/01/2020', '2020'],
  ['2', 'IOT system to detect and analyse gait of an individual and method employed thereof', '1. Dr. T. Karthikeyan 2. Mr.Achanta Sampath Dakshina Murthy 3. Dr. N. Prabakaran 4. Mr.R.Sekar 5. Dr. K. Shankar 6. Dr.CH. Nagaraju', '01/11/2019', '2019'],
  ['3', 'Microcontroller based tongue operated system for an ambulation device and method thereof', '1. Dr. Rudra Pratap Das 2. Dr. Aggala Naga Jyothi 3. Mr.Achanta Sampath Dakshina Murthy 4. Mr.Govindasamy Thiagarajan', '04/10/2019', '2019'],
]

const researchProjects = [
  ['1', 'Dr.Srinivasa Naik', 'Design Optimization and Performance Improvement of Large Antenna arrays.', 'DST SERB, File No: EEQ/ 2016/000391', '40,61,000/-'],
  ['2', 'Dr.A.Naga Jyothi', 'Arbitrary Waveform Generator for Automotive Radar Systems', 'DST File No : ECR /2017 /000256/ES', '45,02,830/-'],
]

const publications = [
  ['1', '2019 - 2020', '12', '2', '14'],
  ['2', '2018 - 2019', '23', '2', '25'],
  ['3', '2017 - 2018', '25', '11', '36'],
  ['4', '2016 - 2017', '16', '1', '17'],
  ['5', '2015 - 2016', '30', '1', '31'],
  ['6', '2014 - 2015', '11', '1', '12'],
  ['7', '2013 - 2014', '29', '1', '30'],
  ['8', '2012 - 2013', '16', '4', '20'],
]

export default function Research() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto space-y-12">
          {/* Patents */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Patents</h2>
            <table className="w-full text-sm border rounded-md shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-center">
                <tr>
                  <th className="px-4 py-2 border">S.No</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Name of the Applicant</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Year</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-2 border">{cell}</td>
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
                  <th className="px-4 py-2 border">S.No</th>
                  <th className="px-4 py-2 border">Name of the Investigator</th>
                  <th className="px-4 py-2 border">Title of the Project</th>
                  <th className="px-4 py-2 border">Funding Agency</th>
                  <th className="px-4 py-2 border">Amount Granted</th>
                </tr>
              </thead>
              <tbody>
                {researchProjects.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-2 border">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Research Publications */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Publications</h2>
            <table className="w-full text-sm border rounded-md shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-center">
                <tr>
                  <th className="px-4 py-2 border">S.No</th>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="px-4 py-2 border">International/National Journals</th>
                  <th className="px-4 py-2 border">Conferences</th>
                  <th className="px-4 py-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2 border">{cell}</td>
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
