"use client";

import React from "react";

export default function PC() {
  const minutes = [
    { name: "PC 2018-19 - MoM", url: "https://vignaniit.edu.in/nonstatutory/pc/PC%202018-19.pdf" },
    { name: "PC 2019-20 - MoM", url: "https://vignaniit.edu.in/nonstatutory/pc/PC%202019-20.pdf" },
    { name: "PC 2020-21 - MoM", url: "https://vignaniit.edu.in/nonstatutory/pc/PC%202020-21.pdf" },
    { name: "PC 2021-22 - MoM", url: "https://vignaniit.edu.in/nonstatutory/pc/PC%202021-22.pdf" },
    { name: "PC 2022-23 - MoM", url: "https://vignaniit.edu.in/nonstatutory/pc/PC%202022-23.pdf" },
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudhan Rao", "Rector", "Member"],
    ["3", "Mr. N. Srikant", "CEO, VIIT-VSP", "Member"],
    ["4", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["5", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["6", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["7", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["8", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["9", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["10", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["11", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["12", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["13", "Dr. M.P.V.V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["14", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["15", "Dr. V.S.V. Satyanarayana", "Assoc. Prof - ME", "Member"],
    ["16", "Dr. P. Rajesh", "Assoc. Prof - BS&H", "Member"],
    ["17", "Dr. V. Sudheer", "Assoc. Prof - CE", "Member"],
    ["18", "Dr. P.S. Ravindra", "Vice-Principal, Dean-Admin", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Purchase Committee (PC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Purchase Committee (PC)” for the Academic Year 2024-25.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Purchase Committee is responsible to:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>Accept and review the purchase proposals/quotations received from different departments.</li>
          <li>Observe the market condition and explore possibilities of identifying new sources of supply at competitive rates.</li>
          <li>Ensure that items/equipment/accessories are procured through standard procedure of the institution.</li>
          <li>Provide suggestions for further improvement of the purchasing process.</li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-1">
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
                    <td key={idx} className="border border-gray-300 px-4 py-3 text-gray-700">
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
                rel="noopener noreferrer"
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
