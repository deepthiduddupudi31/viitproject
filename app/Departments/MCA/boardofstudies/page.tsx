'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr.B.Prasad',
    designation: 'Dean Training, Professor & HOD, Department of IT&MCA, VIIT (A)',
    category: 'BOS-Chairman',
    status: '',
    affiliation: '7093098775 / prasad_bode@yahoo.com',
  },
  {
    sno: 2,
    name: 'Dr.D.Haritha',
    designation: 'HOD & Professor, Department of CSE, JNTUK, Kakinada',
    category: 'JNTUK-Nominee',
    status: '',
    affiliation: '9440810901 / harithadasari9@yahoo.com',
  },
  {
    sno: 3,
    name: 'Mr.S.L.N.Ratna Giri',
    designation: 'Scientist Grade “B”, NSTL, Visakhapatnam',
    category: 'Industry-Nominee',
    status: '',
    affiliation: '9441321616 / sathishrgiri_s@yahoo.co.in',
  },
  {
    sno: 4,
    name: 'Mr.M.Santosh Kumar',
    designation: 'Software Engineer, Mylas Info. Tech. Pvt., Visakhapatnam',
    category: 'Alumni-Nominee',
    status: '',
    affiliation: '8978636475 / santoshkumarmaddu@gmail.com',
  },
  {
    sno: 5,
    name: 'Dr.K.Venkata Rao',
    designation: 'Professor & Dean IPD, Dept. of IT, VIIT (A)',
    category: 'Internal Member',
    status: '',
    affiliation: '9866386587 / vr_koduganti@gmail.com',
  },
  {
    sno: 6,
    name: 'Mr.M.Somasundara Rao',
    designation: 'Associate Professor, Dept. of IT, VIIT (A)',
    category: 'Internal Member',
    status: '',
    affiliation: '9866586806 / muppidisomasundararao@gmail.com',
  },
  {
    sno: 7,
    name: 'Mr.P.Praveen Kumar',
    designation: 'Assistant Professor, Dept. IT, VIIT(A)',
    category: 'Internal Member',
    status: '',
    affiliation: '9989769768 / pk.pinjala@gmail.com',
  },
  {
    sno: 8,
    name: 'Mrs.A.Sireesha',
    designation: 'Assistant Professor, Dept. IT, VIIT(A)',
    category: 'Internal Member',
    status: '',
    affiliation: '9059498693 / aswadhati.sirisha@gmail.com',
  },
  {
    sno: 9,
    name: 'Mrs.G.Hima Bindu',
    designation: 'Assistant Professor, Dept. IT, VIIT(A)',
    category: 'Internal Member',
    status: '',
    affiliation: '9000809254 / goginenibindu9@gmail.com',
  },
  {
    sno: 10,
    name: 'Mrs.K.Gowthami Prasanthi',
    designation: 'Assistant Professor, Dept. IT, VIIT(A)',
    category: 'Internal Member',
    status: '',
    affiliation: '8885011584 / prasanthikalavala@gmail.com',
  },
  { sno: 11, name: 'Mrs.G.Jyothi', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 12, name: 'Mrs.G.Mani', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 13, name: 'Mr.Ch.Srinivas Reddy', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 14, name: 'Mr.K.Leela Prasad', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 15, name: 'Mr.G.Ravi Kumar', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 16, name: 'Mr.P.Prudhvi Kiran', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 17, name: 'Ms.Ch.V.Bhargavi', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 18, name: 'Ms.V.Vasantha', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
  { sno: 19, name: 'Mrs.Sushma', designation: 'Assistant Professor, Dept. IT, VIIT(A)', category: 'Internal Member', status: '', affiliation: 'Member –Faculty (IT)' },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
          alt="BOS Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Internal & External Members</h3>
          <table className="w-full table-auto border border-gray-300 text-sm text-left shadow-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="border px-3 py-2">S.No</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Designation</th>
                <th className="border px-3 py-2">Category</th>
                <th className="border px-3 py-2">Contact / Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {boardOfStudiesMembers.map((member) => (
                <tr key={member.sno} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-3 py-2">{member.sno}</td>
                  <td className="border px-3 py-2">{member.name}</td>
                  <td className="border px-3 py-2">{member.designation}</td>
                  <td className="border px-3 py-2">{member.category}</td>
                  <td className="border px-3 py-2">{member.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
