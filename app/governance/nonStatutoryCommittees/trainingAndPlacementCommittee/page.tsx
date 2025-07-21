"use client";

import React from "react";

export default function TPC() {
  const minutes: string[] = [
    "T&PC_18-19_MoM",
    "T&PC_19-20_MoM",
    "T&PC_20-21_MoM",
    "T&PC_21-22_MoM",
    "T&PC_22-23_MoM",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudhan Rao", "Rector", "Member"],
    ["3", "Mr. N. Srikant", "CEO, VIIT-VSP", "Member"],
    ["4", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["5", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["6", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["7", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["8", "Dr. Moha Mahanty", "HoD-CSE", "Member"],
    ["9", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["10", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["11", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["12", "Mr. B Dinesh Reddy", "HoD-ACSE", "Member"],
    ["13", "Dr. M.P.V.V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["14", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["15", "Ms. P. Pallavi", "Student Representative (IIMBA 22L31E0094)", "Member"],
    ["16", "Ms. G.V. Laasya", "Student Representative (IVAI&DS 20L31A5426)", "Member"],
    ["17", "Mr. K. Harsha Vardhan", "Student Representative (IIME 22L35A0361)", "Member"],
    ["18", "Mr. K. Jayanth", "Student Representative (IIIECE 21L31A0481)", "Member"],
    ["19", "Dr. B. Prasad", "Dean Training & Placement", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Training and Placement Committee (T&PC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted
          as “Training and Placement Committee (T&PC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Prime tasks of the Committee are as follows:
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Review the Training and Placement activities and suggest areas of
            improvement for quality placements.
          </li>
          <li>
            Develop the students with their behavioral skills, language and
            communication skills, in their four years of study and also counsel
            them for job opportunities in the country and abroad.
          </li>
          <li>
            Develop communication skills in students and improve the vocabulary
            and LSRW skills (Listening, Speaking, Reading & Writing), technical
            report writing and presentation skills.
          </li>
          <li>
            Prepare students for campus interviews, reasoning and aptitude tests.
          </li>
          <li>
            Maintain Alumni database and invite their valuable suggestions by
            conducting alumni meet regularly.
          </li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until
          reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Meetings:</strong> Twice in a year, the meeting may be scheduled as
          and when necessary.
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

      {/* Minutes of Meeting */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Minutes of Meetings
      </h1>
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
