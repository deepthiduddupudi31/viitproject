import React from "react";

const objectives = [
  "To create a ecosystem encouraging innovation and supporting startups",
  "To bring awareness among academia regarding IPR, NISP, NEP, Start-up schemes etc.",
  "Prepare institute for ARIIA, NIRF",
  "To improve cognitive ability for Students by encouraging them to innovate solutions to societal problems",
  "To increase employability and entrepreneurship in students as well as faculty"
];

const mission = [
  "Conduct workshops, seminars, boot camps, Ideation workshops on various topics like innovation and entrepreneurship, design thinking, IPR, NISP etc. so as to bring awareness among academia",
  "Facilitate interactions between students and various entrepreneurs",
  "Conduct boot camps at different locations in vicinity areas of the college",
  "Conduct skill up gradation programs to students as to increase their employability"
];

const journey = [
  "Since IIC is established in the institute, many steps are taken to improve Entrepreneurship skills among the students",
  "It has formed a strong committee comprising external members, internal members and students.",
  "The committee is conducting periodically meetings with students and other stakeholders. Minutes of the meetings are also uploaded",
  "Several webinars and invited talks are organized to sensitize college academia on IPR, Entrepreneurship, Innovation, Design Thinking etc. in-spite of COVID pandemic."
];

const internalCoordinators = [
  { name: "Dr. T. Archana Acharya", position: "Coordinator of IIC & Innovation Activity Coordinator" },
  { name: "Dr. LaxmiLidya", position: "Start-up Activity Coordinator" },
  { name: "Dr. S. M. Murali Krishna", position: "Internship Coordinator & IPR Activity Coordinator" },
  { name: "Dr. K. Madhusudhan Rao", position: "Social Media Coordinator" },
  { name: "Dr. Ch. HariGovind Rao", position: "NIRF and ARIIA Coordinator" },
  { name: "Dr. L. V. Venugopal", position: "Member" },
  { name: "Dr. Preetham Hait", position: "Member" },
  { name: "Dr. GirishBhiogade", position: "Member" },
  { name: "Dr. K. SrinivasaNaik", position: "Member" },
  { name: "Mr. K. Avinash", position: "Member" },
  { name: "Mr. Mohan Mohanty", position: "Member" },
  { name: "Mrs.G.Mani", position: "Member" },
  { name: "Mr. D. Madhusudhan", position: "Member" },
  { name: "Mr.SampathDakshina Murthy Achanta", position: "Member" },
];

const externalCoordinators = [
  { name: "Mr. M. P. Dubey", company: "STPI", designation: "Vice President" },
  { name: "Mt. G. Durga Prasad", company: "Wells Fargo India", designation: "Investor" },
  { name: "Ms. A. HimaBindu", company: "Novel Patent Services", designation: "Patent Expert" },
  { name: "Mr. C. Rama Krishna", company: "Hinduja National Power Corporation", designation: "Member" },
  { name: "Mr. S Venkatesh", company: "Electropro India", designation: "Start-up/Alumni Entrepreneur" },
];

export default function IICCellPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8" style={{ scrollBehavior: 'smooth' }}>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">Institute Innovation Cell - IIC</h1>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2">Objective</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Mission</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {mission.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Journey of IIC at the Institute</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {journey.map((j, i) => (
            <li key={i}>{j}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Key Functionaries at the IIC Institute</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Dr. Vallabhaneni Madhusudhana Rao<br/><span className="font-normal">Rector & President of IIC</span></p>
          <p className="text-gray-700 font-semibold mt-2">Dr. J. Sudhakar<br/><span className="font-normal">Principal & Convenor of IIC</span></p>
        </div>
        <h3 className="text-xl font-semibold text-[#0077B5] mb-2 mt-6">Internal Faculty Coordinators of IIC</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#0077B5] text-white">
              <tr>
                <th className="py-2 px-3 border-b">Name of the Member</th>
                <th className="py-2 px-3 border-b">Position in IIC</th>
              </tr>
            </thead>
            <tbody>
              {internalCoordinators.map((c, i) => (
                <tr key={i} className="even:bg-[#e6f0fa]">
                  <td className="py-2 px-3 border-b">{c.name}</td>
                  <td className="py-2 px-3 border-b">{c.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold text-[#0077B5] mb-2 mt-6">External Faculty Coordinators of IIC</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#0077B5] text-white">
              <tr>
                <th className="py-2 px-3 border-b">Name</th>
                <th className="py-2 px-3 border-b">Company</th>
                <th className="py-2 px-3 border-b">Designation</th>
              </tr>
            </thead>
            <tbody>
              {externalCoordinators.map((c, i) => (
                <tr key={i} className="even:bg-[#e6f0fa]">
                  <td className="py-2 px-3 border-b">{c.name}</td>
                  <td className="py-2 px-3 border-b">{c.company}</td>
                  <td className="py-2 px-3 border-b">{c.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 