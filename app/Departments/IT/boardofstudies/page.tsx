'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr. G. Neelima',
    designation: 'Professor & HOD, Department of IT, VIIT (A)',
    category: 'BOS-Chairman',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 2,
    name: 'Dr. D. Rajya Lakshmi',
    designation: 'Professor, Dept. of CSE, JNTUGV-University College of Engineering Vizianagaram, Andhra Pradesh',
    category: 'JNTUGV-Nominee',
    status: 'External Member',
    affiliation: '',
  },
  {
    sno: 3,
    name: 'Mr. Nijam Mohammed',
    designation: 'Lead Decision Architect, Verizon',
    category: 'Industry-Nominee',
    status: 'External Member',
    affiliation: '',
  },
  {
    sno: 4,
    name: 'Mr. B. Sampath Kumar',
    designation: 'System Engineer, PayPal',
    category: 'Alumni-Nominee',
    status: 'External Member',
    affiliation: '',
  },
  {
    sno: 5,
    name: 'Dr. B. Prasad',
    designation: 'Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 6,
    name: 'Dr. P. Praveen Kumar',
    designation: 'Associate Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 7,
    name: 'Mrs. G. Jyothi',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 8,
    name: 'Mrs. G. Mani',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 9,
    name: 'Mr. Ch. Srinivas Reddy',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 10,
    name: 'Mrs. P. Pavithra',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 11,
    name: 'Mr. G. Ravi Kumar',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 12,
    name: 'Mrs. Ch. V. Bhargavi',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 13,
    name: 'Mr. K. Venkatesh Babu',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
  {
    sno: 14,
    name: 'Mr. Ch. Dinesh',
    designation: 'Assistant Professor, Dept. of IT, VIIT (A)',
    category: '',
    status: 'Internal Member',
    affiliation: '',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/IT.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Board of Studies – Information Technology</h2>
          <p className="text-md text-gray-700 mb-6">
            List of Internal and External Members of the Board of Studies, IT Department.
          </p>

          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {boardOfStudiesMembers.map((member) => (
                <tr key={member.sno} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                  <td className="border px-2 py-1">{member.category}</td>
                  <td className="border px-2 py-1">{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
