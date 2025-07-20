"use client";

import { useState } from "react";

const programData = {
  Undergraduate: [
    "B.Tech. Computer Science and Engineering",
    "B.Tech. CSE (AI and Machine Learning)",
    "B.Tech. CSE (Blockchain)",
    "B.Tech. CSE (Cyber Security)",
    "B.Tech. CSE (Data Analytics)",
    "B.Tech. CSE (Software Engineering)",
    "B.Tech. Electronics and Communication Engineering",
    "B.Tech. ECE (Embedded Systems)",
    "B.Tech. ECE (VLSI)",
    "B.Tech. Mechanical Engineering",
    "B.Tech. Mechanical (Automotive Design)",
    "B.Tech. Mechanical (Robotics)",
  ],
  "Dual Degree": [
    "Integrated M.Tech. CSE (AI & ML)",
    "Integrated M.Tech. ECE (VLSI)",
    "Integrated M.Tech. CSE (Cyber Security)",
  ],
  Integrated: [
    "Integrated M.Sc. Data Science",
    "Integrated M.Sc. Computational Statistics",
  ],
  Postgraduate: [
    "M.Tech. VLSI Design",
    "M.Tech. CSE (Big Data Analytics)",
    "MBA - Business Analytics",
  ],
  Doctoral: [
    "Ph.D. in Engineering Disciplines",
    "Ph.D. in Sciences",
    "Ph.D. in Humanities & Social Sciences",
  ],
};

export default function Programs() {
  const [selected, setSelected] = useState<keyof typeof programData>("Undergraduate");

  return (
    <section className="py-16 px-4 bg-white">
        <div className="text-center">
  <h1 className="text-4xl font-bold text-linkedin mb-6">Programmes Offered</h1>
</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left side - Navigation buttons */}
        <div className="space-y-4">
          {Object.keys(programData).map((key) => (
            <button
              key={key}
              className={`w-full text-left px-4 py-3 border-2 font-medium ${
                selected === key
                  ? "bg-linkedin text-white border-linkedin"
                  : "border-linkedin text-linkedin hover:bg-blue-50"
              }`}
              onClick={() => setSelected(key as keyof typeof programData)}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Right side - Program list */}
        <div className="md:col-span-3 bg-white border border-gray-200 p-6 rounded-lg h-[400px] overflow-y-auto shadow-sm">
          <ul className="space-y-4">
            {programData[selected].map((item, idx) => (
              <li key={idx} className="border-b pb-2 text-gray-800 hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
