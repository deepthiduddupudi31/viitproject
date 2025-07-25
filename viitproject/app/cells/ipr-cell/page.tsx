import React from "react";

const mission = [
  "To create awareness about Intellectual Property Rights (IPR).",
  "Provide quality technical education that transforms students into knowledgeable, skilled, innovative, and entrepreneurial professionals.",
  "Sketch to success: We will help you transform your initial concepts into polished inventions with resources on prototyping and design.",
  "Protect your Genius: Get help safeguarding your creations.",
  "Stimulate a dynamic, vibrant, and balanced intellectual property rights system in India to foster creativity and innovation and thereby, promote entrepreneurship and enhance socio-economic and cultural development."
];

const objectives = [
  "To impart knowledge about intellectual property rights to faculty, staff and students.",
  "To lay down a transparent administrative system for assessing the ownership and assignment of intellectual property.",
  "To facilitate the faculty members, staff members and students to obtain IP.",
  "To explore possible commercialization of the IP owned by the Institute.",
  "To frame guidelines regarding share and revenue earned for the Intellectual Property between the inventor and the Institute.",
  "By the IP Policy, VIIT is intended to provide a healthy atmosphere conducive to research and development through a generous system of rewards and incentives for the creation of intellectual property, while at the same time giving proper consideration to the economic rights and responsibilities of the Institute. This document is set to introduce, regulate, and organize issues related to intellectual property within the Institute. It also reaffirms the Institute's commitment to scientific endeavors, academic excellence and the dissemination of knowledge. This policy is set to spell out the responsibilities of the Institute and its employees and to establish a framework for ethical conduct.",
  "This Policy proposed to protect the respective interests of all participants by ensuring that the benefits of such property accrued to the public, the inventor, the Institute and sponsors of specific research projects varying in degrees of protection, monetary return, and recognition, as per circumstances justify or require."
];

export default function IPRCellPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">Intellectual Property Rights Cell</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">About IPR Cell</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          In recognition of the importance of intellectual property in providing a competitive edge to an organization, VIIT has established an Intellectual Property Rights (IPR) cell to encourage the creativity and protection of intellectual property within the institute. The IPR Cell is driven by a predefined institute IPR policy to guide academic and non-academic staff, students, scholars, and outside agencies on the practices and rules of the Institute regarding intellectual property rights (IPR) and obligations.<br/>
          The policy covers the nature of intellectual property (IP), its ownership, exploitation, technology transfer, and confidentiality requirements. The policy is expected to promote academic freedom and provide a conducive environment for research and development at the institute. The intangible assets of an organization, such as know-how, inventions, brands, designs, and other creative and innovative products, are recognized as being more valuable than its physical assets. Therefore, the IP Policy of VIIT is an important step in protecting and promoting the commercialization of intellectual property generated within the institute. By doing so, VIIT aims to contribute to the overall economic growth and development of society while also benefiting the creators of intellectual property.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">VISION</h2>
        <p className="text-gray-700 mb-6">
          The counter highlights its commitment to educating and guiding the college community on safeguarding their intellectual property.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">MISSION</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {mission.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">OBJECTIVES</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 