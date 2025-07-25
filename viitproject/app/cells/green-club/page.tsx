import React from "react";

const objectives = [
  "To motivate the students to keep their surroundings green and clean",
  "To celebrate environment related days",
  "To organize cleanliness drive in the nearby villages",
  "To educate the students as well as to the community about reuse of waste material",
  "To organize tree plantation programs",
  "To organize awareness programs such as quiz, essay, painting competition, rallies, nuked natak etc. regarding various environmental issues",
  "To sensitize the students to minimize the use of plastic bags, not to throw them in public places as they choke drains and sewers, causes water logging and provide breeding for mosquitoes."
];

const strategies = [
  "Motivate the students to keep their surroundings green and clean by undertaking plantation of trees.",
  "Promote ethos of conservation of water by minimizing the use of water.",
  "Motivate students to imbibe habits and life style for minimum waste generation, source separation of waste and disposing the waste to the nearest storage point.",
  "Revive the indigenous knowledge of organic farming, bio-fertilizer and rain water harvesting, use of renewable energy sources for sustainable development of our society.",
  "Sensitize the students to minimize the use of plastic bags, not to throw them in public places as they choke drains and sewers, cause water logging and provide breeding ground for mosquitoes and other insects."
];

const members = [
  { role: "PRESIDENT", name: "SAMUDRAPU RAJITHA", roll: "21L31A04F2", dept: "ECE" },
  { role: "SECRETARY", name: "ROMPELLA ADITYA SAI", roll: "21L31A05J7", dept: "CSE" },
  { role: "MEMBER", name: "BHAVANA AKASH", roll: "21L31A0413", dept: "ECE" },
  { role: "MEMBER", name: "KATHARI BHANU PRASAD", roll: "21L31A0477", dept: "ECE" },
  { role: "MEMBER", name: "SAMMIDI GIRIDHAR", roll: "21L31A05K4", dept: "CSE" },
  { role: "MEMBER", name: "KORADA KIRAN GANESH", roll: "21L31A05P6", dept: "CSE" },
  { role: "MEMBER", name: "KANDREGULA LALITH SAGAR", roll: "21L31A1921", dept: "ECM" },
  { role: "MEMBER", name: "KAMMILA TILAK", roll: "21L31A1227", dept: "EEE" },
  { role: "MEMBER", name: "BAMMIDI MANIKANTA", roll: "21L31A0217", dept: "EEE" },
  { role: "MEMBER", name: "MUMMANA VENKATESH", roll: "21L31A0383", dept: "ME" },
  { role: "MEMBER", name: "EDADASU MURALI", roll: "21L31A0126", dept: "CE" },
  { role: "MEMBER", name: "SAMIREDDY JASHYA", roll: "21L31A0187", dept: "CE" },
  { role: "MEMBER", name: "MADIMI SOWMYA RANI", roll: "21L31A5460", dept: "AIDS" },
  { role: "MEMBER", name: "REDDY REWAT", roll: "21L31A54A0", dept: "AIDS" },
  { role: "SOCIAL MEDIA TEAM", name: "MOKALLA SAI PRANEETH", roll: "21L31A05E8", dept: "ME" },
  { role: "SOCIAL MEDIA TEAM", name: "BONGU AKASH", roll: "21L31A0319", dept: "ME" },
  { role: "GUIDED BY", name: "DR.K.SIRISHA", roll: "Associate Professor", dept: "BS&H" },
];

export default function GreenClubPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">Green Club</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">About the Green Club</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          GREEN CLUB is established in the VIIT(A) during the academic year 2018-2019. It comprises 16 student volunteers from various undergraduate programs.<br/>
          The main aim of establishing Green Club was to conserve the natural resources and the natural environment, to create eco-friendly environment, create an awareness on biodiversity conservation, local environmental issues, to create a clean and green consciousness among students through various innovative methods.<br/>
          Green Club plays an important role in creating environmental awareness among the students of VIIT. The main motive of the Eco Club is to nurture and teach the importance of environment to students.<br/>
          Green Club of VIIT is playing an active role in bringing awareness among the students, so that everyone will join hands to protect mother earth.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Strategies</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {strategies.map((strat, i) => (
            <li key={i}>{strat}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Composition of the Cell</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#0077B5] text-white">
              <tr>
                <th className="py-2 px-3 border-b">Role</th>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Roll No</th>
                <th className="py-2 px-3 border-b">Department</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i} className="even:bg-[#e6f0fa]">
                  <td className="py-2 px-3 border-b text-center">{m.role}</td>
                  <td className="py-2 px-3 border-b">{m.name}</td>
                  <td className="py-2 px-3 border-b">{m.roll}</td>
                  <td className="py-2 px-3 border-b">{m.dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 