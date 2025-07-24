"use client";

import React from "react";

export default function RDAC() {
  const minutes: { name: string; url: string }[] = [
    {
      name: "RAC 2018-19 MoM",
      url: "https://vignaniit.edu.in/nonstatutory/rac/Research%20Advisory%20Committee_18-19_MOM.pdf",
    },
    {
      name: "RAC 2019-20 MoM",
      url: "https://vignaniit.edu.in/nonstatutory/rac/Research%20Advisory%20Committee_19-20_MOM.pdf",
    },
    {
      name: "RAC 2020-21 MoM",
      url: "https://vignaniit.edu.in/nonstatutory/rac/Research%20Advisory%20Committee_20-21_MOM.pdf",
    },
    {
      name: "RAC 2021-22 MoM",
      url: "https://vignaniit.edu.in/nonstatutory/rac/Research%20Advisory%20Committee_21-22_MOM.pdf",
    },
    {
      name: "RAC 2022-23 MoM",
      url: "https://vignaniit.edu.in/nonstatutory/rac/Research%20Advisory%20Committee_22-23_MOM.pdf",
    },
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudhana Rao", "Rector", "Member"],
    ["3", "Mr. N. Srikanth", "CEO, Vignan Group, Vizag", "Member"],
    ["4", "Dr. Ch. Harigovinda Rao", "Dean IQAC", "Member"],
    ["5", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["6", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["7", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["8", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["9", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["10", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["11", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["12", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["13", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["14", "Dr. M.P.V.V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["15", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["16", "Dr. G. Kranthi Kumar", "Associate Dean R&D", "Member"],
    ["17", "Dr. E. Laxmi Lidiya", "Dean R&D", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Research and Development Advisory Committee (R&D AC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Research and Development Advisory Committee (R&D AC)” for the Academic
          Year 2024-25.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Research and Development Advisory Committee is responsible:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>To ensure Research publications in the quality journals.</li>
          <li>To promote and monitor academic research with faculty and students.</li>
          <li>To conduct workshops and appreciate students with good publications.</li>
          <li>
            Reviews the research progress, and provides recommendations on the
            proposed projects and the expansion of the resource in the institution.
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
