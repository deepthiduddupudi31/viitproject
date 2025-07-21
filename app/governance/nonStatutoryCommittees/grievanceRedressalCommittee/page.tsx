"use client";

import React from "react";

export default function GRC() {
  const minutes: string[] = [
    "GRC - 2018-19 - MoM",
    "GRC - 2019-20 - MoM",
    "GRC - 2020-21 - MoM",
    "GRC - 2021-22 - MoM",
    "GRC - 2022-23 - MoM",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. Ch. Hari Govinda Rao", "Dean IQAC", "Member"],
    ["3", "Dr. B. Sateesh", "Dean Students Affairs", "Member"],
    ["4", "Dr. A. Naga Jyothi", "Dean Academics", "Member"],
    ["5", "Mr. P. H. J. Venkatesh", "In charge – Student Discipline", "Member"],
    ["6", "Dr. K. S. Raghuram", "Head Grievance Cell", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Grievance Redressal Committee (GRC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Grievance Redressal Committee (GRC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Roles and Responsibilities of the committee:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Encourage the students and staff to express their grievances / problems
            freely and frankly, without any fear of being victimized.
          </li>
          <li>
            The committee ensures that grievances are addressed promptly and resolved
            within a reasonable timeframe.
          </li>
          <li>
            Aimed at prevent grievances and improve the overall campus environment.
          </li>
          <li>
            Ensure that students, faculty, and staff have a mechanism to address their
            concerns effectively.
          </li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Two years and shall continue to be in force until
          reconstruction.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
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
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Minutes of Meetings - GRC
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
