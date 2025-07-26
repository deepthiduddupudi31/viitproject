"use client";

import React from "react";

export default function REC() {
  const minutes = [
  {
    name: "Research Ethics - 18-19_MoM",
    url: "https://vignaniit.edu.in/nonstatutory/rec/Institutional%20Ethics%20Committee_18-19_MOM.pdf",
  },
  {
    name: "Research Ethics - 19-20_MoM",
    url: "https://vignaniit.edu.in/nonstatutory/rec/Institutional%20Ethics%20Committee_19-20_MOM.pdf",
  },
  {
    name: "Research Ethics - 20-21_MoM",
    url: "https://vignaniit.edu.in/nonstatutory/rec/Institutional%20Ethics%20Committee_20-21_MOM.pdf",
  },
  {
    name: "Research Ethics - 21-22_MoM",
    url: "https://vignaniit.edu.in/nonstatutory/rec/Institutional%20Ethics%20Committee_21-22_MOM.pdf",
  },
  {
    name: "Research Ethics - 22-23_MoM",
    url: "https://vignaniit.edu.in/nonstatutory/rec/Institutional%20Ethics%20Committee_22-23_MOM.pdf",
  },
];



  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudhan Rao", "Rector", "Member"],
    ["3", "Mr. N. Srikanth", "CEO, Vignan Group, Vizag", "Member"],
    ["4", "Dr. Ch. Harigovinda Rao", "Dean IQAC", "Member"],
    ["5", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["6", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["7", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["8", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["9", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["10", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["11", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["12", "Dr. T. V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["13", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["14", "Dr. M. P. V. V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["15", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["16", "Dr. A. Sampath Dakshina Murthy", "Associate Dean R&D", "Member"],
    ["17", "Dr. G. Kranthi Kumar", "Dean R&D", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Research Ethics Committee (REC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Research Ethics Committee (REC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Student Research Ethics Committee is responsible:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>To implement code of ethics policy.</li>
          <li>To encourage students to write unique content without copying.</li>
          <li>
            To review quality of research and ensure ethical practices in research &
            development activities.
          </li>
          <li>
            To review and scrutiny the research proposals and solutions, recommend
            suggestions for quality research.
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
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Research - MOMs</h1>
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
