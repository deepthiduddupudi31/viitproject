"use client";

import React from "react";

export default function HMC() {
  const minutes = [
    { name: "HMC 2022-23 - MoM", url: "https://vignaniit.edu.in/nonstatutory/hcm/HCM%2022-23.pdf" },
    { name: "HMC 2021-22 - MoM", url: "https://vignaniit.edu.in/nonstatutory/hcm/HCM%2021-22.pdf" },
    { name: "HMC 2020-21 - MoM", url: "https://vignaniit.edu.in/nonstatutory/hcm/HCM%2020-21.pdf" },
    { name: "HMC 2019-20 - MoM", url: "https://vignaniit.edu.in/nonstatutory/hcm/HCM%2019-20.pdf" },
    { name: "HMC 2018-19 - MoM", url: "https://vignaniit.edu.in/nonstatutory/hcm/HCM%2018-19.pdf" },
  ];

  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. P. S. Ravindra", "Vice Principal, Dean - Admin", "Member"],
    ["3", "Dr. B. Sateesh", "Dean Student Affairs", "Member"],
    ["4", "Mr. Ch. Ram Babu", "Physical Director", "Member"],
    ["5", "Dr. K. Madhusudhan Rao", "Dean Admissions", "Member"],
    ["6", "Dr. P. Sanyasi Rao", "Management Nominee", "Member"],
    ["7", "Mr. B. Teja (III ME 21L31A0321)", "Student Representative - Boys Hostel", "Member"],
    ["8", "Ms. V. N. G. M. Poojitha (III ECE 21L31A04H7)", "Student Representative - Girls Hostel", "Member"],
    ["9", "Mr. V. Sivaji", "In Charge Boys Hostel", "Member Secretary"],
    ["10", "Ms. Ch. R. S. Valli", "Warden Girls Hostel", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Hostel Management Committee (HMC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Hostel Management Committee (HMC)” for the Academic Year 2024-25.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Hostel Management Committee (HMC) is responsible:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>Review the security system at Hostel and recommend strategies to strengthen security measures.</li>
          <li>To create awareness about Anti Ragging and Code of conduct at Hostel.</li>
          <li>To review quality food and suggest plans for improvement.</li>
          <li>To identify and address any other issues in the hostels.</li>
        </ul>
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
