"use client";

import React from "react";

export default function APMC() {
  const minutes = [
  { name: "MoM_22-23", url: "https://vignaniit.edu.in/nonstatutory/apmc/apmc2223.pdf" },
  { name: "MoM_21-22", url: "https://vignaniit.edu.in/nonstatutory/apmc/apmc2122.pdf" },
  { name: "MoM_20-21", url: "https://vignaniit.edu.in/nonstatutory/apmc/apmc2021.pdf" },
  { name: "MoM_19-20", url: "https://vignaniit.edu.in/nonstatutory/apmc/apmc1920.pdf" },
  { name: "MoM_18-19", url: "https://vignaniit.edu.in/nonstatutory/apmc/apmc1819.pdf" },
];

  const members: string[][] = [
    ["1", "Dr.J. Sudhakar", "Principal", "Chairperson"],
    ["2", "Dr.Aggala Naga Jyothi", "Dean Academics", "Member Secretary"],
    ["3", "Dr.R.Hanumantha Rao", "Assoc.Dean Academics", "Member Secretary"],
    ["4", "Dr.L.Govinda", "HoD-CE", "Member"],
    ["5", "Dr. P. Sekher", "HoD-EEE", "Member"],
    ["6", "Dr. S. Rambabu", "HoD-ME", "Member"],
    ["7", "Dr. Ch. Ramesh Babu", "HoD-ECE", "Member"],
    ["8", "Mr. B.Dinesh Reddy", "HoD-CSE", "Member"],
    ["9", "Dr. G.Neelima", "HoD-IT", "Member"],
    ["10", "Dr. R. Umamaheswari", "HoD-ECM", "Member"],
    ["11", "Dr. T.V. Madhusudhana Rao", "HoD-AI&DS", "Member"],
    ["12", "Mrs. K.Swathi", "HoD-ACSE", "Member"],
    ["13", "Dr. T.V.S.P.V. Satyaguru", "HoD-BS&H", "Member"],
    ["14", "Dr.Dinesh Chandrasekharan", "HoD-MCA", "Member"],
    ["15", "Dr. B. Chandra", "HoD-MBA", "Member"],
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Academic Planning and Monitoring Committee (APMC)
      </h1>

      {/* About + Functions (merged, no extra headings) */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          A committee consisting of the following members is hereby reconstituted
          as “Academic Planning & Monitoring Committee (APMC)” for the Academic Year
          2025-26.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          The Academic Planning and Monitoring Committee takes-up the following activities:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-3 space-y-1">
          <li>
            Monitor, review and make recommendations on all academic matters for
            consistency with the Institute’s mission and strategies.
          </li>
          <li>
            To promote research and extension activities and plan for resource
            mobilization through consultancy and extramural funding and to plan for
            sustaining the quality of education, quality improvement and accreditation
            of the college.
          </li>
          <li>
            Review and approve Academic Calendars for UG and PG programs and implement
            academic planners through the departments. Prepare necessary timetables,
            lesson plans, course file and lab manual for the next semester.
          </li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          <strong>Term:</strong> Shall continue to be in force until reconstitution
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>Meeting:</strong> Once in a year the meeting may be scheduled as and
          when necessary
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

      {/* Minutes of Meetings - Second Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Minutes of Meetings</h1>
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
