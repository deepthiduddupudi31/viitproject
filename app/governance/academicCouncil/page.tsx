"use client";

import React from "react";

export default function AcademicCouncil() {
  // Table Data (Structure of Academic Council)
  const structure: string[][] = [
    ["1", "Dr.J.Sudhakar", "Chair Person", "Principal, Chair Person, VIIT, Visakhapatnam"],
    ["2", "Dr.V.Madhusudana Rao", "Rector", "Management Representative, Rector, VIIT, Visakhapatnam"],
    ["3", "Mr.N.Srikant", "CEO", "Management Representative, CEO, VIIT, Visakhapatnam"],
    ["4", "Dr.P.Sekhar", "Member", "HOD - EEE, Head, VIIT, Visakhapatnam"],
    ["5", "Dr.R.Uma Maheswari", "Member", "HOD - ECE, Head, VIIT, Visakhapatnam"],
    ["6", "Dr.Mohan Mahanty", "Member", "HOD - CSE, Head, VIIT, Visakhapatnam"],
    ["7", "Dr.S.Rambabu", "Member", "HOD - ME, Head, VIIT, Visakhapatnam"],
    ["8", "Dr.L.Govinda", "Member", "HOD - CE, Head, VIIT, Visakhapatnam"],
    ["9", "Dr.H.Devanna", "Member", "HOD - ECM, Head, VIIT, Visakhapatnam"],
    ["10", "Dr.T.P.S.V.Satya Guru", "Member", "HOD - BS & H, Head, VIIT, Visakhapatnam"],
    ["11", "Dr.G.Neelima", "Member", "HOD - IT, Head, VIIT, Visakhapatnam"],
    ["12", "Dr.T.V.Madhusudana Rao", "Member", "HOD - AI&DS, Head, VIIT, Visakhapatnam"],
    ["13", "Mrs.K.Swathi", "Member", "HOD - ACSE, Head, VIIT, Visakhapatnam"],
    ["14", "Dr.B.Chandra", "Member", "HOD - MBA, Head, VIIT, Visakhapatnam"],
    ["15", "Dr.Chandrasekharan Dinesh", "Member", "Assoc. Professor, HoD - MCA, VIIT, Visakhapatnam"],
    ["16", "Dr.B.Prasad", "Member", "Professor (IT), Senior Faculty, VIIT, Visakhapatnam"],
    ["17", "Dr.Ch.Hari Govinda Rao", "Member", "Professor (MBA), Senior Faculty, VIIT, Visakhapatnam"],
    ["18", "Dr.K.Babu Rao", "Member", "Director (Technical), Outside Expert, Navayuga Infotech Pvt. Ltd. Hyderabad"],
    ["19", "Dr.M M Naidu", "Member", "Former Professor & Director of CSE, IT, MCA, Outside Expert, S V University, Tirupathi"],
    ["20", "Dr.Subrahmanyam Boyapati", "Member", "Analog Design Engineer, Outside Expert, Intel, Bangalore"],
    ["21", "Dr.T.V.Raja Sekhar", "Member", "General Manager, Outside Expert, NTPC, Visakhapatnam"],
    ["22", "Dr.R.Srinivasa Rao", "Member", "Director, Academic Planning, University Nominee, JNTUK, Kakinada"],
    ["23", "Dr.L.Sumalatha", "Member", "Director of Evaluation, University Nominee, JNTUK, Kakinada"],
    ["24", "Dr.V.Ravindranath", "Member", "OSD to VC & PRO, University Nominee, JNTUK, Kakinada"],
    ["25", "Dr.A.Naga Jyothi", "Member Secretary", "Dean Academics, VIIT, Visakhapatnam"],
  ];

  // Minutes of Meetings
  const minutes = [
  { name: "Academic_Council_MoM_2022-23", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2022-23.pdf" },
  { name: "Academic_Council_MoM_2021-22", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2021-22.pdf" },
  { name: "Academic_Council_MoM_2020-21", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2020-21.pdf" },
  { name: "Academic_Council_MoM_2019-20", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2019-20.pdf" },
  { name: "Academic_Council_MoM_2018-19", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2018-19.pdf" },
  { name: "Academic_Council_MoM_2017-18", url: "https://vignaniit.edu.in/academicCouncil/AC_MoM_2017-18.pdf" },
];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Academic Council Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Academic Council
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          About the Academic Council
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The Academic Council of the institution is the apex academic body which reports to the Governing Body and is responsible for all the matters relating to the academic functioning of the institution such as framing of academic policy, approval of courses, regulations and syllabi, etc. It is comprised of experts and seniors from both within and outside the institution. The term of the members shall be for three years except for the University nominee. The Principal, who is the Chairperson of the Council, shall convene a meeting of the academic council at least twice in a year and whenever required.
        </p>
      </section>

      {/* Functions Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          Functions of the Academic Council
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-3">
          Without prejudice to the generality of the functions mentioned, the Academic Council has the power to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Scrutinize and approve the proposals with or without modification of the Boards of studies with regard to courses of study, academic regulations, curricula, syllabi and modifications thereof, instructional and evaluation arrangements, methods, procedures relevant thereto etc., provided where the Academic Council differs on any proposal, it will have the right to return the matter for reconsideration to the Board of Studies concerned or reject it, after giving reasons to do so</li>
          <li>Make regulations regarding the admission of students to various UG and PG programs in the college</li>
          <li>Frame rules for sports, play grounds, co and extra-curricular activities and for proper functioning of the hostels</li>
          <li>Recommend to the Governing Body regarding the proposals for institution of new programs of study</li>
          <li>Recommend to the Governing Body regarding the institution of scholarships, studentships, fellowships, prizes and medals, and to frame regulations for the award of the same</li>
          <li>Advise the Governing Body on suggestions pertaining to academic affairs made by the academic council</li>
          <li>Perform such other functions as may be assigned by the Governing Body</li>
        </ul>
      </section>

      {/* Structure Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Structure of Academic Council
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Name of the Person</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Designation & Department / Status / Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {structure.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map((val, idx) => (
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

      {/* Minutes of Meetings */}
<section className="bg-white shadow-md rounded-xl p-6 mb-6">
  <h2 className="text-3xl font-semibold text-blue-700 mb-4">
    Minutes of Meetings
  </h2>
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
