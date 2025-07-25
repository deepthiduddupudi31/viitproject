"use client";

import React from "react";

export default function SCSTC() {
  const minutes = [
  { name: "SCST 22-23", url: "https://vignaniit.edu.in/nonstatutory/scst/SCST%2022-23.pdf" },
  { name: "SCST 21-22", url: "https://vignaniit.edu.in/nonstatutory/scst/SCST%2021-22.pdf" },
  { name: "SCST 20-21", url: "https://vignaniit.edu.in/nonstatutory/scst/SCST%2020-21.pdf" },
  { name: "SCST 19-20", url: "https://vignaniit.edu.in/nonstatutory/scst/SCST%2019-20.pdf" },
  { name: "SCST 18-19", url: "https://vignaniit.edu.in/nonstatutory/scst/SCST%2018-19.pdf" },
];


  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. N. Tirupathi Rao", "Associate Professor", "Member"],
    ["3", "Dr. Ch. Swapna Priya", "Associate Professor", "Member"],
    ["4", "Mr. K. Avinash", "Assistant Professor", "Member"],
    ["5", "Ms. G. Bhulaksmi", "DEO", "Member"],
    ["6", "Mr. Ch. Eswara Rao", "Asst. Librarian", "Member"],
    ["7", "S. Vijaya (III ECE - 21L31A04F5)", "Student Representative", "Member"],
    ["8", "P. Bhanu Eswari Devi (II CSE - 22L31A05E8)", "Student Representative", "Member"],
    ["9", "T. Gulshan Babu (I CE - 23L35A0151)", "Student Representative", "Member"],
    ["10", "Dr. K. Srinivasa Naik", "Associate Professor", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        SC & ST Committee (SC&ST C)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “SC & ST Committee (SC&ST C)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Student SC & ST Committee is responsible:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            To counsel and guide SC/ ST students and help them to manage academic and
            personal issues if any.
          </li>
          <li>
            To inform the SC/ST students regarding various scholarships / program of State
            Govt. and UGC.
          </li>
          <li>
            Function as a Grievances Redressal Cell for the grievances of SC/ST students
            and employees of the college and render them necessary help in solving their
            academic as well as administrative problems.
          </li>
          <li>
            To ensure the Prevention of Atrocities on the SC, ST Staff, Faculty and
            Students.
          </li>
          <li>
            To hear and resolve the issues/complaints if any; of such nature of Atrocity
            reported/complained.
          </li>
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
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Minutes of Meetings</h1>
      <section className="bg-white shadow-md rounded-xl p-6">
        <ul className="list-disc list-inside text-lg space-y-2">
  {minutes.map((mom, index) => (
    <li key={index}>
      <a
        href={mom.url}
        target="_blank"
        className="text-gray-800 hover:text-blue-700 hover:underline underline-offset-4"
      >
        {mom.name}
      </a>
    </li>
  ))}
</ul>

      </section>
    </div>
  );
}
