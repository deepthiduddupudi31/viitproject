"use client";

import React from "react";

export default function ARC() {
  const minutes = [
  { name: "AntiRagging 18-19 MoM", url: "https://vignaniit.edu.in/nonstatutory/arc/Anti%20Ragging%20Committee_18-19_MOM.pdf" },
  { name: "AntiRagging 19-20 MoM", url: "https://vignaniit.edu.in/nonstatutory/arc/Anti-Ragging%20Committee_19-20_MOM.pdf" },
  { name: "AntiRagging 20-21 MoM", url: "https://vignaniit.edu.in/nonstatutory/arc/Anti-Ragging%20Committee_20-21_MOM.pdf" },
  { name: "AntiRagging 21-22 MoM", url: "https://vignaniit.edu.in/nonstatutory/arc/Anti-Ragging%20Committee_21-22-MOM.pdf" },
  { name: "AntiRagging 22-23 MoM", url: "https://vignaniit.edu.in/nonstatutory/arc/Anti-Ragging%20Committee_22-23-MOM.pdf" },
];


  const members: string[][] = [
    ["1", "Dr. J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr. P. S. Ravindra", "Vice Principal", "Member"],
    ["3", "Dr. Ch. Hari Govinda Rao", "Dean IQAC", "Member"],
    ["4", "Dr. A. Naga Jyothi", "Dean Academics", "Member"],
    ["5", "Dr. B. Sateesh", "Dean Student Affairs", "Member"],
    ["6", "Mr. P. H. J. Venkatesh", "In-charge Student Discipline", "Member"],
    ["7", "Dr. Naga Mallik Raj", "Transport Coordinator", "Member"],
    ["8", "Mr. M. Padmakar", "HoD-CE", "Member"],
    ["9", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["10", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["11", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["12", "Dr. Mohan Mahanty", "HoD-CSE", "Member"],
    ["13", "Dr. G. Neelima", "HoD-IT & MCA", "Member"],
    ["14", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["15", "Dr. T. V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["16", "Mr. B. Dinesh Reddy", "HoD-ACSE", "Member"],
    ["17", "Dr. M. P. V. V. Bhaskar Rao", "HoD-BS&H", "Member"],
    ["18", "Dr. B. Chandra", "HoD-MBA", "Member"],
    ["19", "Dr. P. Sanyasi Rao", "In-Charge Hostel", "Member"],
    ["20", "Mr. Ch. Ram Babu", "Physical Director", "Member"],
    ["21", "Mr. M. Aravind (II ECM 22L31A1923)", "Student Representative", "Member"],
    ["22", "Ms. G. V. Lasya (IV AI&DS 20L31A5426)", "Student Representative", "Member"],
    ["23", "Mr. M. Madhan Sekhar", "Asst. Prof - MBA", "Member Secretary"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Anti Ragging Committee (ARC)
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted as
          “Anti Ragging Committee (ARC)” for the Academic Year 2023-24.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>The Student Anti Ragging Committee is responsible:</strong>
        </p>

        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Ensure the display of posters on Institution and Department Notice Boards
            and other prominent designated places.
          </li>
          <li>Provide the services of counseling and create awareness to the students.</li>
          <li>
            Ensure compliance with the provisions of Regulations as well as the
            provisions of any law for the time being in force concerning ragging.
          </li>
          <li>
            Monitor and oversee the performance of the Anti-Ragging Squad in prevention
            of ragging in the institution.
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
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Anti Ragging Committee - Minutes of Meeting
      </h1>
      <section className="bg-white shadow-md rounded-xl p-6">
        {minutes.map((mom, index) => (
            <ul>
  <li key={index}>
    <a
      href={mom.url}
      target="_blank"
      className="text-gray-800 hover:text-blue-700 hover:underline underline-offset-4"
    >
      {mom.name}
    </a>
  </li>
  </ul>
))}

      </section>
    </div>
  );
}
