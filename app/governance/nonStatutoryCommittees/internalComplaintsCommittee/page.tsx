"use client";

import React from "react";

export default function ICC() {
  const minutes: string[] = [
    "ICC_18-19_MOM",
    "ICC_19-20_MOM",
    "ICC_20-21_MOM",
    "ICC_21-22_MOM",
    "ICC_22-23_MOM",
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Mrs. K. Prabhavathi", "Advocate", "External Member"],
    ["3", "Dr. E. Laxmi Lydia", "Professor", "Member"],
    ["4", "Dr. A. Naga Jyothi", "Professor", "Member"],
    ["5", "Mrs. K. Sravanthi", "Assistant Professor", "Member"],
    ["6", "Dr. N. Ramya", "Associate Professor", "Member"],
    ["7", "Dr. R. Umamaheswari", "Professor", "Member"],
    ["8", "Mrs. G. Mani", "Assistant Professor", "Member"],
    ["9", "Dr. K. Mrudula Devi", "Associate Professor", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Internal Complaints Committee (ICC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Internal Complaints Committee (ICC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          In pursuance of the Sexual Harassment of Women at Workplace (Prevention,
          Prohibition and Redressal) Act 2013 an ICC has been constituted in our
          institute.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Objectives: Internal Complaints Committee to prevent sexual harassment
          of women at the workplace are as follows:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>To develop a policy against sexual harassment in the institute.</li>
          <li>
            To ensure the implementation of the policy in the letter and spirit through
            proper reporting of complaints and their follow-up procedures.
          </li>
          <li>
            To uphold the commitment of the institute to provide an environment free of
            gender-based discrimination.
          </li>
          <li>
            To promote a social and psychological environment to raise awareness on
            sexual harassment in various forms.
          </li>
          <li>
            To create a secure physical and social environment to deter any act of sexual
            harassment.
          </li>
          <li>
            To evolve permanent mechanisms for the prevention and redressal of sexual
            harassment cases and other acts of gender-based violence at the institute.
          </li>
        </ul>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The following committee is constituted to look after gender sensitization,
          prevention, and prohibition of sexual harassment of women employees and
          students and redressal of grievances in Vignan’s Institute of Information
          Technology.
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
