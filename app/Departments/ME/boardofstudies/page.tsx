'use client';
import Sidebar from '.././Sidebar';

const externalMembers = [
  {
    sno: 1,
    name: 'Dr. C. Neelima Devi',
    designation: 'HOD & Assistant Professor',
    affiliation: 'Dept. of ME, JNTU-GV, Visakhapatnam, A.P.',
  },
  {
    sno: 2,
    name: 'Dr. K. S. S. Harish',
    designation: 'Assistant Professor',
    affiliation: 'Dept. of ME, NIT Tiruchirappalli, Tamil Nadu.',
  },
  {
    sno: 3,
    name: 'Ms. Lata Patnana',
    designation: 'Head Product Support - Customer Service',
    affiliation: 'Customer Service, BOSCH Siemens, Bangalore, Karnataka.',
  },
  {
    sno: 4,
    name: 'Mrs. Y. Usha',
    designation: 'Scientist',
    affiliation: 'CSIR National Metallurgical Laboratory, Jamshedpur, Jharkhand.',
  },
];

const internalMembers = [
  { sno: 1, name: 'Dr. S. Rambabu', designation: 'Chairman, BOS' },
  { sno: 2, name: 'Dr. B. Sateesh', designation: 'Professor' },
  { sno: 3, name: 'Dr. L. V. Venugopal Rao', designation: 'Professor' },
  { sno: 4, name: 'Dr. V. S. V. Satyanarayana', designation: 'Professor' },
  { sno: 5, name: 'Dr. Girish Eknath Bhiogade', designation: 'Associate Professor' },
  { sno: 6, name: 'Dr. Sushanth Kumar Sahu', designation: 'Associate Professor' },
  { sno: 7, name: 'Dr. Mahammad Ali Shaik', designation: 'Associate Professor' },
  { sno: 8, name: 'Mr. Ch. Siva Rama Krishna', designation: 'Associate Professor' },
  { sno: 9, name: 'Mr. R. Sundara Ramam', designation: 'Associate Professor' },
  { sno: 10, name: 'Mr. R. Rudrabhi Ramu', designation: 'Associate Professor' },
  { sno: 11, name: 'Mr. S. V. Ramana', designation: 'Associate Professor' },
  { sno: 12, name: 'Mr. K. Leela Kumar', designation: 'Assistant Professor' },
  { sno: 13, name: 'Mr. B. N. Dhanunjayarao', designation: 'Assistant Professor' },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Board of Studies</h2>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">External Members</h3>
          <table className="w-full table-auto border border-gray-300 text-sm text-left mb-6">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {externalMembers.map((member) => (
                <tr key={member.sno}>
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                  <td className="border px-2 py-1">{member.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">Internal Members</h3>
          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name</th>
                <th className="border px-2 py-2">Designation</th>
              </tr>
            </thead>
            <tbody>
              {internalMembers.map((member) => (
                <tr key={member.sno}>
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
