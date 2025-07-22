import React from "react";

const objectives = [
  "The International Student Cell Committee is constituted with a purpose to take utmost care of international students during their stay, from the time of their admission to completion of their study.",
  "To promote cordial student-student and student-teacher relationship.",
  "The committee would work to ensure support and integrate international students in various events of the institution.",
  "Encourage lasting success for students and scholars by providing collaborative, innovative, and transformative experiences and services.",
  "Foster friendly relationships between students and teachers."
];

export default function InternationalStudentCellPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">International Student Cell</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">About Us</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Vignan’s Institute of Information Technology(A), Visakhapatnam is committed to becoming a well-known academic and research institution that provides excellent education to society as a way of giving back. Our goal is to promote globalization by serving as a mediator and expanding our impact in teaching, research, and development. We prioritize conducting research and fostering innovation through international cooperation to have a significant impact worldwide.<br/>
          Our objective is to offer exceptional education that appeals to and retains top-notch students from various cultural backgrounds worldwide and prepares them to excel in a highly competitive global job market.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Goals & Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 