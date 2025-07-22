"use client";

import React from "react";

export default function AAC() {
  const minutes = [
  { name: "AAC_MoM_2018-19", url: "https://vignaniit.edu.in/aac/AAC_18-19.pdf" },
  { name: "AAC_MoM_2019-20", url: "https://vignaniit.edu.in/aac/AAC_19-20.pdf" },
  { name: "AAC_MoM_2020-21", url: "https://vignaniit.edu.in/aac/AAC_20-21.pdf" },
  { name: "AAC_MoM_2021-22", url: "https://vignaniit.edu.in/aac/AAC_21-22.pdf" },
  { name: "AAC_MoM_2022-23", url: "https://vignaniit.edu.in/aac/AAC_22_23.pdf" },
];


  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["3", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["4", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["5", "Dr.Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["6", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["7", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["8", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["9", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["10", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["11", "Dr. M.P.V.V.Bhaskar Rao", "HoD-BS&H", "Member"],
    ["12", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["13", "Dr. K. Madhusudhana Rao", "Dean of Admissions", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Admission Advisory Committee (AAC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted
          as “Admission Advisory Committee (AAC)” for the Academic Year 2024-25.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Committee is responsible for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Monitor admission procedures for students admitted under convener quota
            and management quota.
          </li>
          <li>
            Review admissions data and suggest strategies to improve the quality of
            admissions.
          </li>
          <li>Maintain data of all students from UG and PG.</li>
          <li>
            Preparation and submission of necessary documents to statutory bodies
            such as JNTU-GV, APSCHE, AICTE etc.
          </li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until
          reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Meetings:</strong> Twice in a year, the meeting may be scheduled
          as and when necessary.
        </p>
      </section>

      {/* Members Table */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  S.No
                </th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Name of Faculty
                </th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Designation
                </th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Position
                </th>
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

      {/* Minutes of Meetings */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">AAC Minutes of Meetings</h1>
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
