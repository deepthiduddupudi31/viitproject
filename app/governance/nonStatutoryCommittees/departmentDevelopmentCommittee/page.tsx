export default function DDC() {
  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Department Development Committee (DDC)
      </h1>

      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          The Department Development Committee is reconstituted for the Academic Year
          2024-25 and is responsible for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>Academics and Research areas.</li>
          <li>Industry – Institution interactions (MoUs).</li>
          <li>Coaching for competitive exams (GATE, CAT, GRE & TOEFL).</li>
          <li>Development of department Library and Laboratories.</li>
        </ul>
        <p className="text-gray-700 text-lg mt-3">
          <strong>Frequency of meetings:</strong> Once in a semester / on demand basis.
        </p>
      </section>

      {/* ✅ Department Tables */}
      {[
        {
          title: "Department of Civil Engineering",
          members: [
            ["Mr M Padmakar", "HoD - Civil Engineering", "Chairperson"],
            ["Dr. G. Venkata Rao", "Professor", "Member"],
            ["Dr. Pritam", "Associate Professor", "Member"],
            ["Mr. B Brahmiah", "Assistant Professor", "Member"],
            ["Mrs. M. Leela Priyanka", "Assistant Professor", "Member"],
            ["Ms Nistala Likitha", "Student (21L31A0128)", "SAC Member"],
            ["Mr. K Srinivas", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Electrical & Electronics Engineering",
          members: [
            ["Dr P Sekhar", "HoD - EEE", "Chairperson"],
            ["Dr. R.S Ravi Sankar", "Associate Professor", "Member"],
            ["Dr K.K.Deepika", "Associate Professor", "Member"],
            ["Mr.K.Sravan Kumar", "Assistant Professor", "Member"],
            ["Mr B Prasanna Kumar", "Student (19L31A02J1)", "SAC Member"],
            ["Mr. A Rohith Kumar", "Student (20L31A0201)", "Member"],
            ["Ms. K Sravanthi", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Mechanical Engineering",
          members: [
            ["Dr Rambabu Sarimalla", "HoD - ME", "Chairperson"],
            ["Dr. B Sateesh", "Professor", "Member"],
            ["Dr K S Raghuram", "Associate Professor", "Member"],
            ["Mr R Rudrabhi Ramu", "Associate Professor", "Member"],
            ["Mr R Vishu Vardhan", "Student (19L31A03R5)", "SAC Member"],
            ["Dr.Y.Appla Naidu", "Associate Professor", "Member"],
            ["Mr.Ch.Siva Rama Krishna", "Associate Professor", "Member"],
            ["Mr. R Sundaramam", "Associate Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Electronics & Communication Engineering",
          members: [
            ["Dr K Murali Krishna", "HoD - ECE", "Chairperson"],
            ["Dr. A Naga Jyothi", "Professor", "Member"],
            ["Dr K Srinivas Naik", "Associate Professor", "Member"],
            ["Ms. M Karuna", "Assistant Professor", "Member"],
            ["Ms. P Demple Priya", "Student (19L31A04N9)", "SAC Member"],
            ["Mr. M Ravi Kumar", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Computer Science & Engineering",
          members: [
            ["Mr B Dinesh Reddy", "HoD - CSE", "Chairperson"],
            ["Dr. E Laxmi Lydia", "Professor", "Member"],
            ["Dr G Rajendra Kumar", "Professor", "Member"],
            ["Mr.Ch.Sekhar", "Assistant Professor", "Member"],
            ["Ms. Chandram Himasri", "Student (19L31A0514)", "SAC Member"],
            ["Dr. S Naga Mallik Raj", "Associate Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Information Technology",
          members: [
            ["Dr.G.Rajendra Kumar", "HoD - IT", "Chairperson"],
            ["Mr. M.Somasundararao", "Associate Professor", "Member"],
            ["Mr. P.Praveen Kumar", "Assistant Professor", "Member"],
            ["Mrs. G Hima Bindu", "Assistant Professor", "Member"],
            ["Ms K Divya", "Student (19L31A1288)", "SAC Member"],
            ["Mrs. G.Jyothi", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Electronics & Computer Engineering",
          members: [
            ["Dr. R Umamaheswari", "HoD - ECM", "Chairperson"],
            ["Dr. Hemanth Kumar Sahu", "Associate Professor", "Member"],
            ["Mr. D Madhusudhan", "Associate Professor", "Member"],
            ["Mr. M Applaraju", "Assistant Professor", "Member"],
            ["Ms A Pooja", "Student (19L31A1906)", "SAC Member"],
            ["Mr. B Venkatesh", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Artificial Intelligence & Data Science",
          members: [
            ["Dr. T. V Madhusudhan", "HoD - AI&DS", "Chairperson"],
            ["Mr. B Dinesh Reddy", "Associate Professor", "Member"],
            ["Dr. Anima Naik", "Professor", "Member"],
            ["Mr. Ch V Sharma", "Assistant Professor", "Member"],
            ["Mr. B. Satya sasi vatsal", "Student (20L31A5425)", "SAC Member"],
            ["Mr. Ch Sekher", "Assistant Professor", "Member Secretary"],
          ],
        },
        {
          title: "Department of Basic Sciences & Humanities",
          members: [
            ["Dr.M.P.V.V.Bhaskara Rao", "HoD - BS&H", "Chairperson"],
            ["Dr K. Madhusudhana Rao", "Professor", "Member"],
            ["Dr.P. Rajesh", "Associate Professor", "Member"],
            ["Dr.T.V.S.P.V. Satya Guru", "Associate Professor", "Member"],
            ["Dr.D.Ganesh", "Associate Professor", "Member"],
            ["Dr.N. Ramya", "Associate Professor", "Member"],
            ["Dr.R. Hanumantha Rao", "Associate Professor", "Member"],
            ["Dr.G. Kranthi Kumar", "Associate Professor", "Member"],
            ["Dr.K. Sirisha", "Associate Professor", "Member"],
            ["Mr.K. Ramappadu", "Assistant Professor", "Member"],
            ["Mr.S. Yogeshwara Rao", "Assistant Professor", "Member Secretary"],
            ["Badakala Shanmukha Rao", "Student (22L31A0104)", "Student Member"],
            ["Kornu Mounika", "Student (22L31A0129)", "Student Member"],
            ["Allu Ganesh", "Student (22L31A0204)", "Student Member"],
            ["Baratam Sri Akshaya", "Student (22L31A0311)", "Student Member"],
            ["Boggarapu Sreeja", "Student (22L31A0523)", "Student Member"],
            ["Bollam Thanuja", "Student (22L31A0527)", "Student Member"],
          ],
        },
        {
          title: "Department of Master of Business Administration",
          members: [
            ["Dr. S M Murali Krishna", "HoD - MBA", "Chairperson"],
            ["Dr. Ch Hari Govinda Rao", "Professor", "Member"],
            ["Dr. T.Archana Acharya", "Associate Professor", "Member"],
            ["Dr.P.Sanyasi Rao", "Associate Professor", "Member"],
            ["P.Mounika", "Student (21L31E0080)", "Member"],
            ["Dr. B Chandra", "Associate Professor", "Member Secretary"],
          ],
        },
        {
          title: "Master of Computer Applications",
          members: [
            ["Dr. G. Rajedra Kumar", "HoD - MCA", "Chairperson"],
            ["Mrs. Y Lakshmi Sirisha", "Assistant Professor", "Member"],
            ["Ms. D Lalitha", "Student (17L31F0007)", "SAC Member"],
            ["Mr. Ch.Srinivas Reddy", "Assistant Professor", "Member Secretary"],
          ],
        },
      ].map((dept, index) => (
        <section key={index} className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{dept.title}</h2>
          <table className="w-full border border-gray-300 text-left text-gray-700">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Sl. No</th>
                <th className="border border-gray-300 px-4 py-2">Name of Faculty/Student</th>
                <th className="border border-gray-300 px-4 py-2">Designation</th>
                <th className="border border-gray-300 px-4 py-2">Position</th>
              </tr>
            </thead>
            <tbody>
              {dept.members.map((m, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{m[0]}</td>
                  <td className="border border-gray-300 px-4 py-2">{m[1]}</td>
                  <td className="border border-gray-300 px-4 py-2">{m[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
