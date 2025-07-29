'use client'
import Sidebar from '.././Sidebar';

const boardOfStudiesMembers = [
  {
    sno: 1,
    name: 'Dr.K.Murali Krishna',
    designation: 'Professor',
    category: 'Education',
    status: 'Chairperson (HOD)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 2,
    name: 'Dr.S.V.Jagadeesh Chandra',
    designation: 'Professor',
    category: 'Education',
    status: 'Member –Faculty (VLSI)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 3,
    name: 'Dr. A. Naga Jyothi',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Member –Faculty (Signal Processing)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 4,
    name: 'Dr.K.Srinivasa Naik',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Member –Faculty (Antenna wave Propogations)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 5,
    name: 'Dr. P.S.N.Murthy',
    designation: 'Associate Professor',
    category: 'Education',
    status: 'Member –Faculty (Image Processing)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 6,
    name: 'Dr.Sourav Roy',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member –Faculty (Microwave & Antenna)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 7,
    name: 'Dr.Rohan Prasad',
    designation: 'Assistant Professor',
    category: 'Education',
    status: 'Member –Faculty (Signal Processing)',
    affiliation: 'VIIT, Visakhapatnam.',
  },
  {
    sno: 8,
    name: 'Prof. K.C.B. Rao',
    designation: 'Professor',
    category: 'Education',
    status: 'Member -Faculty(Selected by the Vice Chancellor from the names proposed by the Principal)',
    affiliation: 'Professor HoD, JNTU Vizianagaram, (Nominated by JNTUK)',
  },
  {
    sno: 9,
    name: 'Prof. P. Rajesh Kumar',
    designation: 'Professor',
    category: 'Education',
    status: 'Member -Faculty(outside the College nominated by the Academic Council)',
    affiliation: 'HoD, Department of ECE, Andhra University College of Engineering (A)',
  },
  {
    sno: 10,
    name: 'Sri. B. Suresh Kumar',
    designation: 'Member',
    category: 'Industry',
    status: 'Representative from Industry/Corporate sector/allied areas relating to placements',
    affiliation: 'Manager Design Tech Systems Pvt. Ltd. Client location-Centre of Excellence in Maritime and Ship building',
  },
  {
    sno: 11,
    name: 'Sri G.V. Manoj Kumar',
    designation: 'Member',
    category: 'Industry',
    status: 'Representative from Industry/Corporate sector/allied areas relating to placements',
    affiliation: 'ITS Director (Security), DOT, Ministry of Communications Govt. Of India',
  },
  {
    sno: 12,
    name: 'Mr. Venkatesh Sappagaddi',
    designation: 'Member',
    category: 'Alumni',
    status: 'Post graduate meritorious student to be nominated by the Principal(co-optional)',
    affiliation: 'Founder & CEO, Electro Pro Pvt. Ltd',
  },
];

export default function BoardOfStudiesPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies</h2>
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Internal And External Membars</h2>
          <table className="w-full table-auto border border-gray-300 text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-2">S.No</th>
                <th className="border px-2 py-2">Name</th>
                <th className="border px-2 py-2">Designation</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Status</th>
                <th className="border px-2 py-2">Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {boardOfStudiesMembers.map((member) => (
                <tr key={member.sno}>
                  <td className="border px-2 py-1">{member.sno}</td>
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.designation}</td>
                  <td className="border px-2 py-1">{member.category}</td>
                  <td className="border px-2 py-1">{member.status}</td>
                  <td className="border px-2 py-1">{member.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}