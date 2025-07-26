'use client'
import Sidebar from '../Sidebar'

const researchProjects = [
  ['1', 'Implementation of E-Commerce website using different programming languages', 'HMI Engineering Services, Visakhapatnam', 'Dr. Pudi Sekhar', 'completed', '1,50,000'],
  ['2', 'Design and Implementation of an Internet of Things (IoT) Enabled Smart Rolling Shutter System', 'Taurius technologies Pvt. Ltd. Visakhapatnam', 'Mrs. K. Sravanthi', 'completed', '1,08,000'],
  ['3', 'Online E-Book Store Using Full Stack Development through Python', 'Taurius technologies Pvt. Ltd. Visakhapatnam', 'Mr. K. Avinash', 'completed', '1,00,000'],
  ['4', 'Implementation of social-commerce website', 'Vihaan Electrix Pvt Ltd, Visakhapatnam', 'Dr. Pudi Sekhar', 'completed', '1,50,000'],
  ['5', 'Design and implementation of an intelligent IoT-enabled smart trolley system', 'Collab Electronics, Visakhapatnam', 'Ms. B. Jyothi', 'completed', '97,000'],
  ['6', 'Restaurant Management System Using Full Stack Development through Python', 'MK Embedded Solutions, Visakhapatnam', 'Dr. K. K. Deepika', 'completed', '1,01,000'],
  ['7', 'Implementation of a smart exhaust fan system', 'Collab Electronics, Visakhapatnam', 'Mrs. Y. Swathi', 'completed', '18,000'],
  ['8', 'Online Cab Booking Using Full Stack Development through Python', 'Taurius technologies Pvt. Ltd. Visakhapatnam', 'Dr. Jyoti Ranjan Nayak', 'completed', '1,00,000'],
  ['9', 'UGC Scheme for monitoring NAAC Accrediation Aspirant Institutions to promote Quality Assurance in Higher Education', 'UGC Paramarsh', 'Dr. B Arundhati', 'completed', '21,45,596'],
  ['10', 'A Twin-Mode energy conversion unit for improved MPPT and reliability of large-scale PV system: Design, Development, and Prototyping', 'DST-TARE', 'Dr.Madisa V G Varaprasad', 'completed', '2,75,000'],
  ['11', 'Design and Implementation of Automated Aeroponics System', 'MK Embedded Solutions, Visakhapatnam', 'Mr. T. Rajesh', 'completed', '26,000'],
  ['12', 'Designing an Advanced Embedded System Using IOT', 'Taurius technologies Pvt. Ltd. Visakhapatnam', 'Mr. P. Suresh Kumar', 'completed', '18,000'],
  ['13', 'AICTE IDEA Lab', 'AICTE-IDEA Lab', 'Dr. B. Arundhati', 'completed', '44,00,000'],
  ['14', 'NAAC Financial Assistance/ Academic Support', 'NAAC Financial Assistance/ Academic Support', 'Dr. B. Arundhati', 'completed', '30,000'],
  ['15', 'Switching and Drive Control of Humanoid Robot Using Bluetooth in Robotics', 'HMI Engineering Services, Visakhapatnam', 'Mr. K. Avinash', 'completed', '23,000'],
  ['16', 'Design and Implementation of Real time machine learning project with yolo processing', 'MK Embedded Solutions, Visakhapatnam', 'Mr. T. Rajesh', 'completed', '25,000'],
  ['17', 'Design and Implementation of Real time machine learning', 'Collab Electronics, Visakhapatnam', 'Mr. T. Rajesh', 'completed', '18,000'],
  ['18', 'Drive Control of Robot Using iot', 'Collab Electronics, Visakhapatnam', 'Mr. K. Avinash', 'completed', '28,000'],
  ['19', 'Optimization of Water Usage and Electrical Energy in Irrigation System Using IoT', 'MK Embedded Solutions, Visakhapatnam', 'Mr. K. Appalanaidu', 'completed', '11,000'],
  ['20', 'Smart Grid Management System for Power Distribution and Demand Response with Advanced User Interface', 'HMI Engineering Services, Visakhapatnam', 'Mr. K. Appalanaidu', 'completed', '16,000'],
  ['21', 'Optimization of Water Usage and Electrical Energy in Irrigation System Using Arduino', 'Collab Electronics, Visakhapatnam', 'Mr. P. Suresh Kumar', 'completed', '12,000'],
  ['22', 'A unified virtual power decoupling method for droop controlled parallel inverters in microgrids under complex load conditions- Release of 3rd grant', 'DST- SERB ECR', 'Dr. Pudi Sekhar', 'completed', '6,05,830'],
  ['23', 'Enhancing Security and Privacy in Smart Home Control Panels using Hardware Encryption and Authentication Techniques', 'HMI Engineering Services, Visakhapatnam', 'Dr. B. Arundhati', 'completed', '30,000'],
  ['24', 'Real-Time Monitoring and Control System for Power Distribution Networks', 'HMI Engineering Services, Visakhapatnam', 'Mr. V. Vivek', 'completed', '16,000'],
  ['25', 'Development of a Touchscreen Motor Control Panel for Industrial Applications', 'MK Embedded Solutions, Visakhapatnam', 'Mrs. K.K. Deepika', 'completed', '30,000'],
  ['26', 'A unified virtual power decoupling method for droop controlled parallel inverters in microgrids under complex load conditions-Release of 2nd grant', 'DST- SERB ECR', 'Dr. Pudi Sekhar', 'completed', '6,05,830'],
];

export default function ResearchProjects() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/eee.jpg"
          alt="Research Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Research Projects</h2>

          <section>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-md shadow-md">
                <thead className="bg-blue-100 text-gray-700 text-center">
                  <tr>
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Title of the project</th>
                    <th className="px-4 py-2 border">Funding agency</th>
                    <th className="px-4 py-2 border">Principal Investigator</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Amount sanctioned (Rs./-)</th>
                  </tr>
                </thead>
                <tbody>
                  {researchProjects.map((row, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50 text-center">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2 border">{cell}</td>
                      ))}
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
