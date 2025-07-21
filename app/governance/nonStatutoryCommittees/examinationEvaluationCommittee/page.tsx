"use client";

import React from "react";

export default function EEC() {
  const minutes: string[] = [
    "EEC_MoM_18-19",
    "EEC_MoM_19-20",
    "EEC_MoM_20-21",
    "EEC_MoM_21-22",
    "EEC_MoM_22-23",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudhana Rao", "Rector", "External Member"],
    ["3", "Dr. P. Rajesh", "Controller of Examinations", "Member"],
    ["4", "Dr. A. Nagajyothi", "Dean Academics", "Member"],
    ["5", "Dr. R. Hanumanth Rao", "Assoc. Dean Academics", "Member"],
    ["6", "Mr. D. Ganesh", "ACE (2023-AB)", "Member"],
    ["7", "Mr. P. Suresh", "ACE (2022-AB)", "Member"],
    ["8", "Mr. K. Leela Kumar", "ACE (2021-AB)", "Member"],
    ["9", "Mrs. A. Usha Rani", "ACE (PG)", "Member"],
    ["10", "Mr. B. Siva Kumar", "ACE (ABC)", "Member"],
    ["11", "Mr. R. Rudrabhi Ramu", "Dean Evaluation", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Examination Evaluation Committee (EEC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Examination Evaluation Committee (EEC)” for the Academic Year 2024-25.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Prime tasks of the Committee are as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>Planning, scheduling and conducting internal examination.</li>
          <li>
            Providing information and guidance on matters related to external
            (University) examinations.
          </li>
          <li>Addressing the grievances regarding internal marks of the students.</li>
          <li>Conducting programmes/ discussions on Examination reforms.</li>
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
