"use client";

import React from "react";

export default function SAC() {
  const minutes = [
  { name: "SAC_MoM 22-23", url: "https://vignaniit.edu.in/nonstatutory/sac/SAC%20Committee%20Body_2022-23.pdf" },
  { name: "SAC_MoM 21-22", url: "https://vignaniit.edu.in/nonstatutory/sac/SAC%20Committee%20Body_2021-22.pdf" },
  { name: "SAC_MoM 20-21", url: "https://vignaniit.edu.in/nonstatutory/sac/SAC%20Committee%20Body_2020-21.pdf" },
  { name: "SAC_MoM 19-20", url: "https://vignaniit.edu.in/nonstatutory/sac/SAC%20Committee%20Body_2019-20.pdf" },
  { name: "SAC_MoM 18-19", url: "https://vignaniit.edu.in/nonstatutory/sac/SAC%20Committee%20Body_2018-19.pdf" },
];


  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. R. Uma Maheswari", "Faculty Member", "Member"],
    ["3", "Mr. M. Padmakar", "Faculty Member", "Member"],
    ["4", "Mr. M. Sai Sampath (IV EEE 20L31A02B4)", "Student Representative", "Member"],
    ["5", "P. Hemanth Naidu (IV IT 20L31A1246)", "Student Representative", "Member"],
    ["6", "P. Pallavi (II MBA 22L31E0094)", "Student Representative", "Member"],
    ["7", "B. Lakshmi Sai Aasritha (III CSE 21L31A05C7)", "Student Representative", "Member"],
    ["8", "Rathan Bhavish Erothi (III ECM 21L31A1949)", "Student Representative", "Member"],
    ["9", "G. V. Laasya (IV AI&DS 20L31A5426)", "Student Representative", "Member"],
    ["10", "K. Harsha Vardhan (II ME 22L35A0361)", "Student Representative", "Member"],
    ["11", "K. Jayanth (III ECE 21L31A0481)", "Student Representative", "Member"],
    ["12", "K. Sreeja (III IT 21L31A1228)", "Student Representative", "Member"],
    ["13", "S. Pujitha (III EEE 21L31A0292)", "Student Representative", "Member"],
    ["14", "Shaik Sameer (II ME 22L35A0321)", "Student Representative", "Member"],
    ["15", "J. Surya Raj (II ECE 22L31A0468)", "Student Representative", "Member"],
    ["16", "Thandra Jayadeep (II CSE 22L31A05L9)", "Student Representative", "Member"],
    ["17", "K. Charan Sai (II CSE-AI 22L31A4322)", "Student Representative", "Member"],
    ["18", "Subhakankshith Sahu (II IT 22L31A1253)", "Student Representative", "Member"],
    ["19", "K. Aravind Sai Teja (II ECM 22L31A1923)", "Student Representative", "Member"],
    ["20", "Dr. B. Sateesh", "Dean Student Affairs", "Member"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Student Activity Committee (SAC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Student Activity Committee (SAC)” for the Academic Year 2023-24.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Student Activity Committee is responsible:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Student Activity Council is established to be a platform with fostering
            leadership, managerial skills and group dynamics.
          </li>
          <li>
            SAC extends its roots to every student who wants to develop professionally,
            socially, contribute to a team and be inspiringly successful.
          </li>
          <li>
            Monitor major clubs such as Cultural, Literary, Sports, Movie and Green club
            which are overseen by the Student Activity Council of the Institution.
          </li>
        </ul>
      </section>

      {/* Members Table */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">
                  Name of Faculty / Student
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
