"use client";

import React from "react";

export default function LAC() {
  const minutes: string[] = [
    "2018-19_LAC-MoM",
    "2019-20_LAC-MoM",
    "2020-21_LAC-MoM",
    "2021-22_LAC-MoM",
    "2022-23_LAC-MoM",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. A. Naga Jyothi", "Dean Academics", "Member"],
    ["3", "Dr. Ch. Hari Govinda Rao", "Dean IQAC", "Member"],
    ["4", "Mr. B. Brahmaiah", "I/C Dean Infrastructure", "Member"],
    ["5", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["6", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["7", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["8", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["9", "Dr. Moha Mahanty", "HoD-CSE", "Member"],
    ["10", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["11", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["12", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["13", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["14", "Dr. M.P.V.V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["15", "Dr. B. Chandra", "HoD-MBA", "Member"],
    [
      "16",
      "Ms. P. Pallavi",
      "Student Representative (IIMBA 22L31E0094)",
      "Member",
    ],
    [
      "17",
      "Ms. G.V. Laasya",
      "Student Representative (IVAI&DS 20L31A5426)",
      "Member",
    ],
    [
      "18",
      "Mr. K. Harsha Vardhan",
      "Student Representative (IIME 22L35A0361)",
      "Member",
    ],
    [
      "19",
      "Mr. K. Jayanth",
      "Student Representative (IIIECE 21L31A0481)",
      "Member",
    ],
    ["20", "Mr. V. Srinivasa Rao", "Librarian", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Library Advisory Committee (LAC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Library Advisory Committee (LAC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Student Library Advisory Committee is responsible:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            To formulate policies and procedures for efficient use of Library resources.
            To provide library budget.
          </li>
          <li>
            To provide uninterrupted access to physical and online information to satisfy
            the requirements of the learners.
          </li>
          <li>
            To enrich the various resources of information and knowledge to the learners.
          </li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until
          reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-1">
          <strong>Meetings:</strong> Twice in a year, the meeting may be scheduled as and
          when necessary.
        </p>
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
      <h1 className="text-4xl font-bold text-blue-700 mb-4">LAC - Minutes of Meeting</h1>
      <section className="bg-white shadow-md rounded-xl p-6">
        <ul className="list-disc list-inside text-lg space-y-2">
          {minutes.map((mom, index) => (
            <li key={index}>
              <a
                href={`/documents/${mom}.pdf`}
                target="_blank"
                className="text-gray-800 hover:text-blue-700 hover:underline underline-offset-4"
              >
                {mom}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
