"use client";

import React from "react";

export default function PlanningMonitoringCommittee() {
   const minutes = [
    {
      name: "PMC_18-19_MoM",
      url: "https://vignaniit.edu.in/nonstatutory/pmc/PMC%2018-19.pdf",
    },
    {
      name: "PMC_19-20_MoM",
      url: "https://vignaniit.edu.in/nonstatutory/pmc/PMC%2019-20.pdf",
    },
    {
      name: "PMC_20-21_MoM",
      url: "https://vignaniit.edu.in/nonstatutory/pmc/PMC%2020-21.pdf",
    },
    {
      name: "PMC_21-22_MoM",
      url: "https://vignaniit.edu.in/nonstatutory/pmc/PMC%2021-22.pdf",
    },
    {
      name: "PMC_22-23_MoM",
      url: "https://vignaniit.edu.in/nonstatutory/pmc/PMC%2022-23.pdf",
    },
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. V. Madhusudan Rao", "Rector", "Member"],
    ["3", "Mr. N. Srikanth", "CEO - Vignan Group of Institutions, Visakhapatnam", "Member"],
    ["4", "Dr. Ch. Hari Govinda Rao", "Dean IQAC", "Member"],
    ["5", "Dr. G. Kranthi Kumar", "Dean R&D", "Member"],
    ["6", "Dr. A. Naga Jyothi", "Dean Academics", "Member"],
    ["7", "Dr. K. Madhusudan Rao", "Dean Admissions", "Member"],
    ["8", "Mr. R. Rudhrabiramu", "Dean Evaluation", "Member"],
    ["9", "Mr. B. Brahmaiah", "I/C Dean Infrastructure", "Member"],
    ["10", "Dr. B. Sateesh", "Dean Student Affairs", "Member"],
    ["11", "Mr. M. Padmakar", "HoD- CE", "Member"],
    ["12", "Dr. P Sekher", "HoD- EEE", "Member"],
    ["13", "Dr. S Rambabu", "HoD-ME", "Member"],
    ["14", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["15", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["16", "Mr. B. Dinesh Reddy", "HoD- ACSE", "Member"],
    ["17", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["18", "Dr. R Umamaheswari", "HoD-ECM", "Member"],
    ["19", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["20", "Dr.M.P.V.V.Bhaskar Rao", "HoD-BS&H", "Member"],
    ["21", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["22", "Ms. P. Pallavi", "Student Representative - 22L31E0094 - MBA", "Member"],
    ["23", "Mr. K. Charan Sai", "Student Representative - 22L31A4322 - ACSE", "Member"],
    ["24", "Dr. P. S. Ravindra", "Vice-Principal & Dean Administration", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Planning and Monitoring Committee
      </h1>

      {/* About + Functions (merged, no heading) */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby
          Reconstituted as “Planning and Monitoring Committee (PMC)” for the
          Academic Year 2024-25.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The PMC is responsible for the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>To review institute development plan and suggest for future development.</li>
          <li>Review and approve institute progress and recommend action plan for further improvement.</li>
          <li>Review and approval of the annual academic calendar.</li>
          <li>To review the institute academic plan and suggest activities to strengthen institution.</li>
        </ul>
      </section>

      {/* Structure (table, no heading) */}
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

      {/* Minutes of Meetings - Second Heading */}
       <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Minutes of Meetings
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
