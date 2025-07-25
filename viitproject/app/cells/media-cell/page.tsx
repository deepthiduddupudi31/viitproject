import React from "react";

const objectives = [
  "The objective for the use of media is not just to disseminate information, but also to undertake Institution, students and stakeholder’s engagement for a meaningful participation.",
  "To keep our college website up-to-date and ensures that all the important information is easily accessible to the right audience.",
  "To cover all programmes, seminars, events, achievement records, alumni profiles, faculty connect and latest newsletters/newspapers.",
  "Cell is responsible for managing events and updates on social media accounts like Facebook, YouTube, Instagram, LinkedIn, Twitter etc.",
  "Media cell also undertake promotional activities about the college such as printing of pamphlets/brochures, producing videos/documentaries and erecting banners/hoardings in attractive way for the benefit."
];

export default function MediaCellPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">VIIT - Media Cell</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">About Media Cell</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Media Cell is established in the VIIT(A) during the academic year 2018-2019. It handles the PR activities of the students and of the college. It caters to the three major domains of the institute- Public Relations, Social media and Official Newspaper/Newsletter of the Institute. Media Cell enhances the Institute performance to the students and its stakeholders. The team works towards publishing and distributing information on the various activities, achievements and successes of the institute through various print, electronic, digital and social media channels. The members are drawn from across the college staff in order to ensure a holistic approach to information dissemination and coverage.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Media Cell Incharge</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Dr.P.Santosh<br/><span className="font-normal">Associate Professor<br/>Dept. of ECM<br/>Media Cell-Incharge</span></p>
        </div>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Media Cell Coordinator</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Mrs.Auadhati Datta<br/><span className="font-normal">Assistant Professor<br/>Dept. of MBA<br/>Media Cell-Coordinator</span></p>
        </div>
      </div>
    </div>
  );
} 