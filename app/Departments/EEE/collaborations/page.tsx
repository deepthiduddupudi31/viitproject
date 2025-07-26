'use client';
import Sidebar from '../Sidebar';

const collaborations = [
  {
    sno: 1,
    name: 'Indo German Institute of Advanced Technology (IGIAT), #39-22-29, Industrial Estate, Kancharapalem, Visakhapatnam-530007',
    start: '18-05-2023',
    end: '17-05-2028',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 2,
    name: 'Indian Biomedical Skill Council (IBSC), AMTZ Campus, Pragati Maidan, Visakhapatnam -530031',
    start: '11-05-2023',
    end: '10-05-2026',
    nature: 'Internship / project work / student / faculty exchange / collaborative research',
  },
  {
    sno: 3,
    name: 'VIHAAN Electrix, Pulagalipalem-Juttada Road, Pendurthy, Visakhapatnam-530013',
    start: '10-05-2023',
    end: '09-05-2028',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 4,
    name: 'AAP SAB KI AWAAZ (ASKA), Visakhapatnam, Andhra Pradesh',
    start: '20-12-2022',
    end: '19-12-2027',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 5,
    name: 'NoobTron Pvt. Ltd., Chitlapakkam, Chennai, Tamil Nadu, 600064',
    start: '11-07-2022',
    end: '10-07-2027',
    nature: 'Internship / student / faculty exchange / collaborative research',
  },
  {
    sno: 6,
    name: 'Novel Patent Services Pvt. Ltd. (NPS), Gambheeram, Anandapuram, Visakhapatnam-531163',
    start: '07-06-2022',
    end: '06-06-2027',
    nature: 'Internship / project work / student / faculty exchange',
  },
  {
    sno: 7,
    name: 'Candela Technologies India Pvt. Ltd., Rushikonda Gramam, Visakhapatnam',
    start: '03-06-2022',
    end: '02-06-2027',
    nature: 'Internship / project work / student / faculty exchange / on-the-job training',
  },
  {
    sno: 8,
    name: 'Teck Team Solutions, Pulagalipalem Village, Pendurthi, Visakhapatnam-531173',
    start: '16-12-2021',
    end: '15-12-2026',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 9,
    name: 'AEP Certification, Hitech City, Hyderabad, 500081',
    start: '23-12-2020',
    end: '22-12-2025',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 10,
    name: 'Robo Couplers Pvt. Ltd., MVP Colony, Visakhapatnam',
    start: '22-12-2020',
    end: '21-12-2025',
    nature: 'Internship / student / faculty exchange / collaborative research',
  },
  {
    sno: 11,
    name: 'Electro Pro, Ram Nagar, Visakhapatnam',
    start: '20-10-2020',
    end: '19-10-2025',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 12,
    name: 'Ramyasri Electrical Automation, Auto Nagar-530012',
    start: '07-09-2020',
    end: '06-09-2025',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 13,
    name: 'HMI Engineering Services, Dwarka Nagar, Visakhapatnam',
    start: '30-04-2019',
    end: '29-05-2028',
    nature: 'Internship / student / faculty exchange',
  },
  {
    sno: 14,
    name: 'AP State Skill Development Corporation (APSSDC), Guntur District',
    start: '20-06-2019',
    end: '19-06-2022',
    nature: 'Student / faculty exchange / collaborative research',
  },
  {
    sno: 15,
    name: 'ELCTROPRO Technologies Pvt. Ltd., Jadadamba Complex, Visakhapatnam',
    start: '01-01-2019',
    end: '31-12-2023',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 16,
    name: 'GVK CAMS Pvt. Ltd., Madhava Dhara, Visakhapatnam',
    start: '07-06-2017',
    end: '06-06-2020',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 17,
    name: 'World Diamond Manufactures Pvt. Ltd., VSEZ, Duvvada, Visakhapatnam',
    start: '01-12-2015',
    end: '31-11-2018',
    nature: 'Internship / student / faculty exchange / collaborative research',
  },
];

export default function CollaborationsPage() {
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
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Collaborations</h2>
          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Organization</th>
                <th className="border px-2 py-2">Start Date</th>
                <th className="border px-2 py-2">End Date</th>
                <th className="border px-2 py-2">Nature of Collaboration</th>
              </tr>
            </thead>
            <tbody>
              {collaborations.map((item) => (
                <tr key={item.sno} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{item.sno}</td>
                  <td className="border px-2 py-1">{item.name}</td>
                  <td className="border px-2 py-1">{item.start}</td>
                  <td className="border px-2 py-1">{item.end}</td>
                  <td className="border px-2 py-1">{item.nature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
