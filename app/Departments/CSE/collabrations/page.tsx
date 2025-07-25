'use client';
import Sidebar from '../Sidebar';

const collaborations = [
  {
    sno: 1,
    name: 'Indo German Institute of Advanced Technology (igiat), Kancharapalem, Visakhapatnam - 530007',
    start: '18-05-2023',
    end: '17-05-2028',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 2,
    name: 'Indian Biomedical Skill Council (IBSC), AMTZ Campus, Visakhapatnam - 530031, Andhra Pradesh',
    start: '11-05-2023',
    end: '10-05-2026',
    nature: 'Internship/ project work/ student / faculty exchange/ collaborative research',
  },
  {
    sno: 3,
    name: 'M/s Rosys Virtual Solutions Pvt. Ltd. and M/s Soft Tech Solution, PM Palem Main Road, Visakhapatnam',
    start: '23-08-2022',
    end: '22-08-2027',
    nature: 'Internship/ student / faculty exchange/ collaborative research',
  },
  {
    sno: 4,
    name: 'Candela Technologies India Pvt Ltd, Rushikonda Gramam, Visakhapatnam AP 530048',
    start: '03-06-2022',
    end: '02-06-2027',
    nature: 'Internship/ project work/ student / faculty exchange/on-the-job training',
  },
  {
    sno: 5,
    name: 'Teck Team Solutions, Pendurthi Mandalam, Visakhapatnam-531173, Andhra Pradesh',
    start: '16-12-2021',
    end: '15-12-2026',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 6,
    name: 'Coursera, Coursera for Campus, Jubilee Hills, Hyderabad-500033',
    start: '07-05-2021',
    end: '07-04-2024',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 7,
    name: 'Centre of Excellence in Maritime & Shipbuilding (CEMS), Visakhapatnam, Andhra Pradesh 530011',
    start: '08-03-2021',
    end: '07-03-2023',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 8,
    name: 'MSME Technology Center-Visakhapatnam, Andhra Pradesh',
    start: '03-03-2021',
    end: '02-03-2024',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 9,
    name: 'Edu Skills Foundation, Bhubaneswar - 751024, Odisha, India',
    start: '03-03-2021',
    end: '02-03-2024',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 10,
    name: 'Robo Couplers Pvt LTD., MVP Colony, Vishakhapatnam, Andhra Pradesh 530017',
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
    name: 'HMI Engineering Services, Dwarka Nagar, Visakhapatnam, Andhra Pradesh 530016',
    start: '30-04-2019',
    end: '29-05-2028',
    nature: 'Internship/ student / faculty exchange',
  },
  {
    sno: 14,
    name: 'Andhra Pradesh State Skill Development Corporation (APSSDC), Guntur District, AP - 522501',
    start: '20-06-2019',
    end: '19-06-2022',
    nature: 'Student / faculty exchange/ collaborative research',
  },
  {
    sno: 15,
    name: 'National Research Development Corporation, New Delhi - 110048',
    start: '03-06-2017',
    end: '02-06-2022',
    nature: 'Student / faculty exchange',
  },
  {
    sno: 16,
    name: 'Federation of Small and Medium Enterprises (FSME), Visakhapatnam - 530012',
    start: '17-02-2016',
    end: '16-02-2019',
    nature: 'Student / faculty exchange',
  },
];

export default function CollaborationsPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
          alt="Collaborations Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Collaborations</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300 shadow-md">
              <thead className="bg-blue-100 text-gray-700 text-left">
                <tr>
                  <th className="border px-4 py-2">S. No.</th>
                  <th className="border px-4 py-2">Organization</th>
                  <th className="border px-4 py-2">Start Date</th>
                  <th className="border px-4 py-2">End Date</th>
                  <th className="border px-4 py-2">Nature of Collaboration</th>
                </tr>
              </thead>
              <tbody>
                {collaborations.map((collab) => (
                  <tr key={collab.sno} className="odd:bg-white even:bg-gray-50">
                    <td className="border px-4 py-2 text-center">{collab.sno}</td>
                    <td className="border px-4 py-2">{collab.name}</td>
                    <td className="border px-4 py-2 text-center">{collab.start}</td>
                    <td className="border px-4 py-2 text-center">{collab.end}</td>
                    <td className="border px-4 py-2">{collab.nature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
