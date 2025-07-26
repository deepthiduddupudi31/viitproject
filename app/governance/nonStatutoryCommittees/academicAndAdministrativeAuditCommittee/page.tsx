"use client";

import React from "react";

export default function AAAC() {
  const minutes = [
  { name: "MoM_22-23", url: "https://vignaniit.edu.in/nonstatutory/AAA/2022-23_AAA1.pdf" },
  { name: "MoM_21-22", url: "https://vignaniit.edu.in/nonstatutory/AAA/2021-22_AAA1.pdf" },
  { name: "MoM_20-21", url: "https://vignaniit.edu.in/nonstatutory/AAA/2020-21_AAA1.pdf" },
  { name: "MoM_19-20", url: "https://vignaniit.edu.in/nonstatutory/AAA/2019-20_AAA1.pdf" },
];



  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. A. Naga Jyothi", "Dean Academics", "Member"],
    ["3", "Mr. R. Rudhrabhi Ramu", "Dean Evaluation", "Member"],
    ["4", "Dr. G. Kranthi Kumar", "Dean R & D", "Member"],
    ["5", "Dr. V. S. V. Satyanarayana", "IQAC Coordinator", "Member"],
    ["6", "Dr. T. V. S. P. V. Satya Guru", "IQAC Coordinator", "Member"],
    ["7", "Dr. Sampath Dakshina Murthy", "IQAC Coordinator", "Member"],
    ["8", "Mr. B. Brahmaiah", "IQAC Coordinator", "Member"],
    ["9", "Mr. K. Appala Naidu", "IQAC Coordinator", "Member"],
    ["10", "Mrs. D. L. Bhavani", "IQAC Coordinator", "Member"],
    ["11", "Dr. Ch. Hari Govinda Rao", "Dean IQAC", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Academic and Administrative Audit Committee (AAAC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Academic and Administrative Audit Committee (AAAC)” for the Academic Year
          2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The roles and responsibilities of the Academic and Administrative Audit Committee:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Assess the strengths and weaknesses of the departments in Academic Process and
            suggest the methods for improvement and overcoming the weaknesses.
          </li>
          <li>
            Identify the bottlenecks in the existing Academic and Administrative mechanisms
            and explore opportunities for reforms.
          </li>
          <li>Suggest methods for continuous improvements of quality.</li>
          <li>Improve student support and progression.</li>
          <li>Update infrastructure and Learning resources.</li>
        </ul>
      </section>

      {/* Members Table */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Name of Faculty
                </th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Designation
                </th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Position</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {m.map((val, idx) => (
                    <td
                      key={idx}
                      className="border border-gray-300 px-4 py-3 text-gray-700"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Minutes of Meeting */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        AAAC - Minutes of Meetings
      </h1>
      <section className="bg-white shadow-md rounded-xl p-6">
        <ul className="list-disc list-inside text-lg space-y-2">
          {minutes.map((m, index) => (
  <li key={index}>
    <a
      href={m.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-blue-700 hover:underline underline-offset-4"
    >
      {m.name}
    </a>
  </li>
))}
        </ul>
      </section>
    </div>
  );
}
