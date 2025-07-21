"use client";

import React from "react";

export default function FinanceCommittee() {
  // Finance Committee Structure Data
  const structure: string[][] = [
    ["1", "Dr. J. Sudhakar", "Chairperson", "Principal, VIIT(A), Visakhapatnam"],
    ["2", "Mr. N. Srikant", "Member", "Governing Body Nominee, CEO, Vignan’s Group of Educational Institutions, Visakhapatnam"],
    ["3", "Dr. V. Madhusudan Rao", "Member", "Trust Nominee, Rector, VIIT(A), Visakhapatnam"],
    ["4", "Mr. Ch. L. Srinivasa Reddy", "Member", "Internal Auditor, Vignan Group of Institutions, Visakhapatnam, Partner M/s Srikanth & Srinivasa Chartered Accountants"],
    ["5", "Mr. S. Suresh", "Member", "Finance Manager, Accounts Dept., Vignan Group, Visakhapatnam"],
    ["6", "Dr. Ch. Harigovinda Rao", "Member Secretary", "Professor, Dean Administration, VIIT(A), Visakhapatnam"],
  ];

  // Minutes of Meetings
  const minutes: string[] = [
    "FC_MoM_2022-23",
    "FC_MoM_2021-22",
    "FC_MoM_2020-21",
    "FC_MoM_2019-20",
    "FC_MoM_2018-19",
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Finance Committee
      </h1>

      {/* About Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          About the Finance Committee
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Finance Committee of the institution shall be the key body which will monitor and manage the financial sustainability of the institution. Finance committee is an advisory body to the Governing Body and reports / recommends from time to time regarding the matters related to budget estimates, income from fees etc. The term of the members of the finance committee will be for two years and shall be reconstituted by the principal.
        </p>
      </section>

      {/* Functions Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-3">
          Functions of the Finance Committee
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-3">
          The functions of Finance Committee are as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>
            The Finance Committee shall act as an advisory body to the Governing Body, to consider:
          </li>
          <li>
            Budget estimates relating to the grant received/receivable from Govt. and Non-Govt. agencies, and income from fees, etc. collected for the activities to undertake the scheme of autonomy.
          </li>
          <li>
            Audited accounts for the above.
          </li>
          <li>
            To manage the annual budgets and utilization reports submitted by the individual departments.
          </li>
        </ul>
      </section>

      {/* Structure Section */}
      <section className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Finance Committee Structure
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-base">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">S.No</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Name</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Role</th>
                <th className="border border-gray-300 px-4 py-3 text-blue-700">Designation</th>
              </tr>
            </thead>
            <tbody>
              {structure.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map((val, idx) => (
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
