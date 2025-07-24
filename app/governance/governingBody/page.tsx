"use client";

import React from "react";

export default function GoverningBody() {
  const members: string[][] = [
    ["1", "Sri. Oruganti Naresh Kumar", "Chairman", "Trust/Management", "CEO, Symbiosis Technologies, ITSEZ, Visakhapatnam"],
    ["2", "Dr. L. Rathaiah", "Member", "Trust/Management", "President & Correspondent, Lavu Educational Society, Vignan Group"],
    ["3", "Shri. Lavu Krishna Devarayulu", "Member", "Trust/Management", "Vice - Chairman, Lavu Educational Society, Guntur"],
    ["4", "Dr.V.Madhusudhana Rao", "Member", "Trust/Management", "Rector, VignanIIT(A), Duvvada,Visakhapatnam"],
    ["5", "Padma Bhushan Dr. Y Lakshmi Prasad", "Member", "Trust/Management", "Former MP, Chairman Jana Sikshna Samsthan & Hindi Academy, Visakhapatnam"],
    ["6", "Dr.P.V.G.D.Prasad Reddy", "Member", "Educationist", "Vice Chancellor, Andhra University Visakhapatnam"],
    ["7", "Prof A.K.Bakhshi", "Member", "Nominee of UGC", "Vice-Chancellor, P.D.M. University, Delhi"],
    ["8", "Mr.B.Demudu", "Member", "Nominee of State Govt", "Former Principal Govt. Polytechnic, Chemical Engg. College"],
    ["9", "Dr.L.Sumalatha", "Member", "Member nominated by JNTUK", "Professor & Director, IIIP & Skill Development, JNTUK, Kakinada"],
    ["10", "Shri V.V.Venu Gopal Rao", "Member", "Trust/Management", "Director – Finance, Steelplant, Visakhapatnam"],
    ["11", "Sri M.P.Dubey", "Member", "Industrialist", "Joint Director & Officer-in-Charge, Software Technology Parks of India"],
    ["12", "Prof. Krishna Vedula", "Member", "Educationist", "Professor & Dean Emeritus, University of Massachusetts Lowell, USA"],
    ["13", "Sri K.Ravi Chandra", "Member", "Industrialist", "Location Head, Tech Mahindra, Visakhapatnam"],
    ["14", "Sri N. Srikant", "Member", "Trust/Management", "CEO, Vignan Group of Educational Institutions, Visakhapatnam"],
    ["15", "Dr.Ch.Hari Govinda Rao", "Member", "Faculty Representative", "Dean Administration, VIIT, Visakhapatnam"],
    ["16", "Dr.J.Sudhakar", "Member Secretary", "Institute Representative", "Principal, VIIT, Visakhapatnam"],
  ];

  const minutes = [
  { name: "GBM_MoM_2022-23", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2022-23.pdf" },
  { name: "GBM_MoM_2021-22", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2021-22.pdf" },
  { name: "GBM_MoM_2020-21", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2020-21.pdf" },
  { name: "GBM_MoM_2019-20", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2019-20.pdf" },
  { name: "GBM_MoM_2018-19", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2018-19.pdf" },
  { name: "GBM_MoM_2017-18", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2017-18.pdf" },
  { name: "GBM_MoM_2016-17", url: "https://vignaniit.edu.in/governingbody/GBM_MoM_2016-17.pdf" },
];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Governing Body
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          About the Governing Body
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The institution has a well-defined and structured governance system
          headed by the governing body which is an apex committee that oversees
          the overall development and continuous growth of the institution in
          lines with the established vision. The Governing body is comprised of
          eminent people from all spheres of life to bring in the necessary
          balance.
        </p>
      </section>

      {/* Functions Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          Functions of the Governing Body
        </h2>
        <p className="text-gray-700">Subject to the existing provision in the by-laws of the institution and the rules laid down by the state government, the governing body of the institution shall meet twice in a year and has power to:</p>
        <br></br>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            Monitor overall development activities that are initiated to realize
            the vision of the institution
          </li>
          <li>
            Monitor and manage the financial sustainability of the institution
            based on the recommendations of the finance committee
          </li>
          <li>
            Institute scholarships, fellowships, medals, prizes and certificates
            on the recommendations of the Academic Council
          </li>
          <li>
            Establish the necessary industry and other stakeholder collaborations
          </li>
          <li>
            Approve institution for new programs of study leading to
            degrees/diplomas
          </li>
          <li>
            Perform any other functions and constitute any committees, as per
            the necessity and demand
          </li>
          <li>
            Ensure the proper development of the institution in order to fulfill
            the autonomy objectives set out earlier
          </li>
        </ul>
      </section>

      {/* Members Table */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Governing Body Members
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Name</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Designation</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Designation & Affiliation</th>
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
              className="text-gray-800 hover:text-blue-700 hover:underline underline-offset-4"
            >
              {m.name}
            </a>
          </li>
        ))}
      </ul>
    </section>

      {/* Governing Body Profiles */}
      <section className="text-center">
        <a
          href="/documents/GBM_Profiles.pdf"
          target="_blank"
          className="inline-block bg-blue-700 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-800 transition"
        >
          View Governing Body Profiles
        </a>
      </section>
    </div>
  );
}
