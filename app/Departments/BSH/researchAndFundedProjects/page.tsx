'use client'
import Sidebar from '../Sidebar'

export default function BOS() {
  const departments = [
    {
      name: 'Chemistry',
      members: [
        ['1', 'Dr. K.V. Vivekananda', 'HoD', 'Chairperson', 'VIIT (A), Visakhapatnam'],
        ['2', 'Dr. S. Satyaveni', 'Assistant Professor', 'JNTUK, Nominee', 'JNTUK'],
        ['3', 'Dr. N. Annapurna', 'Associate Professor', 'AU, Nominee', 'AUCOE'],
        ['4', 'Dr. Prathap Reddy', 'Head, R&D', 'Industry Nominee', 'Ryptus Pharma, Visakhapatnam'],
        ['5', 'Mr. P. H. J Venkatesh', 'Assistant Professor', 'Alumni Member', 'Visakhapatnam'],
        ['6', 'Dr. T.V.S.P.V. Satyaguru', 'Associate Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['7', 'Dr. G. Krantikumar', 'Associate Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['8', 'Ms. P. Varalakshmi', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['9', 'Ms. A. Ramya', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
      ],
    },
    {
      name: 'Physics',
      members: [
        ['1', 'Dr. K. Madhusudhana Rao', 'Professor', 'Chairman', 'VIIT, Visakhapatnam'],
        ['2', 'Dr. R. Hanumantha Rao', 'Associate Professor', 'Member –Faculty', 'VIIT, Visakhapatnam'],
        ['3', 'Dr. K. Yellareswara Rao', 'Associate Professor', 'Member –Faculty', 'VIIT, Visakhapatnam'],
        ['4', 'Dr. B. Dhana lakshmi', 'Associate Professor', 'Member –Faculty', 'VIIT, Visakhapatnam'],
        ['5', 'Dr. A. Santhosh Kumar', 'Associate Professor', 'Member –Faculty', 'VIIT, Visakhapatnam'],
        ['6', 'Mr. S. Ravi Kumar', 'Assistant Professor', 'Member –Faculty', 'VIIT, Visakhapatnam'],
        ['7', 'Mr. K. Appala Naidu', 'Member', 'Alumni', '2010 past out EEE student'],
      ],
    },
    {
      name: 'Mathematics',
      members: [
        ['1', 'Dr. P. Rajesh', 'Associate Professor', 'Chairperson (HOD)', 'VIIT, Visakhapatnam'],
        ['2', 'Dr. G. V. S. R. Deekshitulu', 'Professor', 'Member -Faculty', 'Dept. of Mathematics, JNTU(K),Kakinada'],
        ['3', 'Dr. K. Rajendra Prasad', 'Professor', 'Member –Faculty ,BOS Chairman', 'Dept of Applied Mathematics, A.U College of Science and technology, Visakhapatnam'],
        ['4', 'Mr Raj Kumar', 'Member', 'Alumni', ''],
        ['5', 'Dr. N. Ramya', 'Associate Professor', 'Member – Faculty(Statistics )', 'Internal'],
        ['6', 'Dr. Mrudhula devi', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['7', 'Dr. Vijaya Prasamsa', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['8', 'Dr. Laxmi Sowjanya', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['9', 'Dr. S. Sunitha Devi', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['10', 'Dr. M.P.V.V.Bhaskara Rao', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['11', 'Mrs. S. AdiLaxmi', 'Assistant Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['12', 'Mrs. S. Indira', 'Assistant Professor', 'Member – Faculty (Mathematics)', 'Internal'],
        ['13', 'Dr N B Gayathri', 'Associate Professor', 'Member – Faculty (Mathematics)', 'Internal'],
      ],
    },
    {
      name: 'English',
      members: [
        ['1', 'Dr..K.G.B. Santhosh Kumari', 'HoD', 'Chairperson', 'VIIT (A), Visakhapatnam'],
        ['2', 'Dr.B.Indira', 'Professor', 'JNTUK, Nominee', 'AUCOE'],
        ['3', 'Dr.Sharada Allamneni', 'Professor', 'Member', 'Vignan University'],
        ['4', 'Dr.I.S.V.Manjula', 'Professor', 'Member', 'International Examiner'],
        ['5', 'Mr.P.H.J Venkatesh', 'Assistant Professor', 'Alumni Member', 'Visakhapatnam'],
        ['6', 'Mr.K.Ramappadu', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['7', 'Mr.D.Ganesh', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['8', 'Ms.K.S.N.V.L.Lavanya Kumari', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['9', 'Ms. Padmaja Rani Behara', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['10', 'Ms. Sai Madhuri', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['11', 'Ms. Hilda Sharon', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
        ['12', 'Ms.Monika Reddy', 'Assistant Professor', 'Member –Faculty', 'VIIT (A), Visakhapatnam'],
      ],
    },
  ]

  return (
    <div>
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/bsh.jpg"
          alt="BOS Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Board of Studies (BOS)</h2>
          {departments.map((dept, idx) => (
            <section key={idx} className="mb-12">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">BOS Members – Department of {dept.name}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border rounded-md shadow-md text-center">
                  <thead className="bg-blue-100 text-gray-700">
                    <tr>
                      <th className="px-4 py-2 border">S.No</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Designation</th>
                      <th className="px-4 py-2 border">Status</th>
                      <th className="px-4 py-2 border">Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dept.members.map((member, mIdx) => (
                      <tr key={mIdx} className="odd:bg-white even:bg-gray-50">
                        {member.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2 border">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
