"use client";

import React from "react";

export default function CCMC() {
  const minutes: string[] = [
    "CCMC - MoM 2022-23",
    "CCMC - MoM 2021-22",
    "CCMC - MoM 2020-21",
    "CCMC - MoM 2019-20",
    "CCMC - MoM 2018-19",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Mr. M. Rohith Babu", "Asst. Prof - CE", "Member"],
    ["3", "Mr. B. Diwakar", "Asst. Prof - EEE", "Member"],
    ["4", "Mr. B. Hemanth", "Asst. Prof - ME", "Member"],
    ["5", "Mr. N. Ganesh", "Asst. Prof - ME", "Member"],
    ["6", "Mrs. N. Sunitha", "Asst. Prof - ECE", "Member"],
    ["7", "Mr. K. Chaitanya", "Asst. Prof - ECE", "Member"],
    ["8", "Dr. Ch. Swapna Priya", "Assoc. Prof - CSE", "Member"],
    ["9", "Mrs. G. Jyothi", "Asst. Prof - IT & MCA", "Member"],
    ["10", "Mrs. A. Lakshmi Deepika", "Asst. Prof - ECM", "Member"],
    ["11", "Mr. D. Chandra Mouli", "Asst. Prof - AI&DS", "Member"],
    ["12", "Mr. V. Sivaji", "Asst. Prof, MBA", "Member"],
    ["13", "Dr. K. Ramappadu", "Assoc. Prof - BS&H", "Member"],
    ["14", "Mr. S. Dharma Rao", "Asst. Prof - BS&H", "Member"],
    ["15", "Mrs. M. Hima Bindu", "Asst. Prof - BS&H", "Member"],
    ["16", "Mr. Ch. Rambabu", "PD", "Member"],
    ["17", "Dr. P. S. V. Ramana", "PD", "Member"],
    ["18", "Dr. J. Prashanth", "PD", "Member"],
    ["19", "Ms. A. Bharathi", "PD", "Member"],
    ["20", "G. Tejaswini", "Student", "Member"],
    ["21", "Ganta Teja", "Student", "Member"],
    ["22", "Mr. P. H. J. Venkatesh", "Asst. Prof - Mech", "Member Secretary - Head Discipline Cell"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Code of Conduct Monitoring Committee (CCMC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted
          as “Code of Conduct Monitoring Committee (CCMC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Code of Conduct Monitoring Committee is responsible:
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>Monitor the adherence of the code of conduct.</li>
          <li>Organize programmes on professional ethics for staff and students.</li>
          <li>Organize awareness programmes on code of conduct for staff and students.</li>
          <li>Implement the annual awareness programme on code of conduct.</li>
          <li>Making the recommendations for timely revising the Code of Conduct.</li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Meetings:</strong> Twice in a year, the meeting may be scheduled as and when necessary.
        </p>
      </section>

      {/* Members Table */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Name of Faculty</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Designation</th>
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
