'use client';
import Sidebar from '../Sidebar';

const collaborations = [
  {
    sno: 1,
    name: 'Indo German Institute of Advanced Technology (igiat), Visakhapatnam',
    start: '18-05-2023',
    end: '17-05-2028',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 2,
    name: 'Indian Biomedical Skill Council (IBSC), AMTZ Campus, Visakhapatnam',
    start: '11-05-2023',
    end: '10-05-2026',
    nature: 'Internship/ project work/ student / faculty exchange/ collaborative research',
  },
  {
    sno: 3,
    name: 'M/s Rosys Virtual Solutions Pvt. Ltd. and M/s Soft Tech Solution, Visakhapatnam',
    start: '23-08-2022',
    end: '22-08-2027',
    nature: 'Internship/ student / faculty exchange/ collaborative research',
  },
  {
    sno: 4,
    name: 'Candela Technologies India Private Limited, Visakhapatnam',
    start: '03-06-2022',
    end: '02-06-2027',
    nature: 'Internship/ project work/ student / faculty exchange/on-the-job training',
  },
  {
    sno: 5,
    name: 'Teck Team Solutions, Visakhapatnam',
    start: '16-12-2021',
    end: '15-12-2026',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 6,
    name: 'Coursera, Coursera for Campus, Hyderabad',
    start: '07-05-2021',
    end: '07-04-2024',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 7,
    name: 'Centre of Excellence in Maritime & Shipbuilding (CEMS), Visakhapatnam',
    start: '08-03-2021',
    end: '07-03-2023',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 8,
    name: 'MSME Technology Center-Visakhapatnam',
    start: '03-03-2021',
    end: '02-03-2024',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 9,
    name: 'Edu Skills Foundation, Bhubaneswar, Odisha',
    start: '03-03-2021',
    end: '02-03-2024',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 10,
    name: 'Robo Couplers Pvt LTD., Visakhapatnam',
    start: '22-12-2020',
    end: '21-12-2025',
    nature: 'Internship/ student / faculty exchange/ collaborative research',
  },
  {
    sno: 11,
    name: 'Electro Pro, Ram Nagar, Visakhapatnam',
    start: '20-10-2020',
    end: '19-10-2025',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 12,
    name: 'M/s. Srikara Cloud Technologies (Franchisee of IIHT Ltd.), Visakhapatnam',
    start: '25-11-2019',
    end: '24-11-2021',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 13,
    name: 'HMI Engineering Services, Visakhapatnam',
    start: '30-04-2019',
    end: '29-05-2028',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 14,
    name: 'Andhra Pradesh State Skill Development Corporation (APSSDC), Guntur',
    start: '20-06-2019',
    end: '19-06-2022',
    nature: 'Student / faculty exchange/ collaborative research',
  },
  {
    sno: 15,
    name: 'National Research Development Corporation, New Delhi',
    start: '03-06-2017',
    end: '02-06-2022',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 16,
    name: 'Federation of Small and Medium Enterprises (FSME), Visakhapatnam',
    start: '17-02-2016',
    end: '16-02-2019',
    nature: 'Student / faculty exchange',
  },
];

export default function Collaborations() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="Collaborations Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Collaborations</h2>

          <table className="w-full table-auto border border-gray-300 text-left text-gray-800">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="border border-gray-300 px-4 py-2">S. No</th>
                <th className="border border-gray-300 px-4 py-2">Name of the Organization</th>
                <th className="border border-gray-300 px-4 py-2">Start Date</th>
                <th className="border border-gray-300 px-4 py-2">End Date</th>
                <th className="border border-gray-300 px-4 py-2">Nature of Collaboration</th>
              </tr>
            </thead>
            <tbody>
              {collaborations.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item.sno}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.start}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.end}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.nature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
