import React from "react";

const committeeMembers = [
  { no: 1, name: "Dr. J. Sudhakar", designation: "Principal & Professor", position: "Chairperson" },
  { no: 2, name: "Dr. A Sampath Dakshina Murthy", designation: "Assoc. Professor", position: "Head-VCIS & NISP Coordinator" },
  { no: 3, name: "Dr. M. Srinu", designation: "Assoc. Professor", position: "I/C ED Cell Coordinator" },
  { no: 4, name: "Dr Bharat Kumar CH", designation: "Assoc. Professor", position: "IPR Cell Coordinator" },
  { no: 5, name: "Dr. G. Amulya", designation: "Assoc. Professor, CE", position: "Member" },
  { no: 6, name: "Dr. Viplove Ranjan Ganguly", designation: "Assoc. Professor, ME", position: "Member" },
  { no: 7, name: "Dr. M. L. S. Sai Kumar", designation: "Assoc. Professor, EEE", position: "Member" },
  { no: 8, name: "Dr. P V Sai Charishma", designation: "Assoc. Professor, ECE", position: "Member" },
  { no: 9, name: "Mr. Vijay Bhaskar", designation: "Asst. Professor, AI&DS", position: "Member" },
  { no: 10, name: "Mrs G. Jyothi", designation: "Asst. Professor, IT", position: "Member" },
  { no: 11, name: "Mrs. Ch. Gayatri", designation: "Asst. Professor, ECM", position: "Member" },
  { no: 12, name: "Mr. Ramesh", designation: "Asst. Professor, CSE", position: "Member" },
  { no: 13, name: "Dr. Bharat Kumar CH", designation: "Assoc. Professor, ACSE", position: "Member" },
  { no: 14, name: "Mr. B Siva Kumar", designation: "Asst. Professor, MBA", position: "Member" },
  { no: 15, name: "Mr. Kona Venkatesh Babu", designation: "Asst. Professor, MCA", position: "Member" },
];

const objectives = [
  "To develop entrepreneurship awareness among the students",
  "To organize Entrepreneurship Motivation Programs, Skill development programs, Entrepreneurship Awareness Camps, Entrepreneurship Development Programs, Staff Development programs, Competitions to unleash the entrepreneurial potential among students",
  "To Promote Innovation and foster an entrepreneurial culture in the institute",
  "Provide services, information and guidance to budding engineers",
  "Establishment of entrepreneurship Incubation centers",
  "Creation and dissemination of new knowledge",
  "To improve the managerial capabilities in non-corporate and unorganized sectors like education, rural development, small-scale industry",
  "Participate in institution entrepreneur building efforts",
  "Respond effectively to the emerging challenges and opportunities and practice through experience."
];

export default function EdCellPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">Entrepreneurship Development Cell (ED CELL)</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          The Entrepreneurship Development Cell was established at the institution to promote the concept of entrepreneurship among students.<br/>
          The Cell's goal is to create an entrepreneurial environment on campus as well as to provide a venue for students to turn a concept into a fundable technological start-up.<br/>
          The cell also aims to equip academics who are interested in and enthusiastic about programme implementation. Since its beginnings, the cell has encouraged students to consider options other than placements or jobs.<br/>
          There are a lot of motivational speeches and events to help kids learn how to be more entrepreneurial.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Committee Members of the ED Cell</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#0077B5] text-white">
              <tr>
                <th className="py-2 px-3 border-b">S. No.</th>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Designation</th>
                <th className="py-2 px-3 border-b">Position</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map(member => (
                <tr key={member.no} className="even:bg-[#e6f0fa]">
                  <td className="py-2 px-3 border-b text-center">{member.no}</td>
                  <td className="py-2 px-3 border-b">{member.name}</td>
                  <td className="py-2 px-3 border-b">{member.designation}</td>
                  <td className="py-2 px-3 border-b">{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2">Objectives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 