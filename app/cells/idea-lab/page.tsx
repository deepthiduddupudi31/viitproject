import React from "react";

const benefits = [
  "To provide all facilities under one roof for the conversion of an idea into a prototype.",
  "Training in the 21st century skills- critical thinking, problem-solving, collaboration etc.",
  "Making engineering students more curious, imaginative and creative; engineering education more engaging.",
  "IDEA lab will be centred around activities and events to promote multidisciplinary education and research."
];

export default function IdeaLabPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">AICTE Idea Lab</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">Vision</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          To provide a self-sustainable platform and train next generation of young minds, to execute their Innovative Ideas, complimented with holistic knowledge across disciplines. Upgrade the lab to a firm, in next decade and two, initially supported by AICTE, with investments thereon by us.<br/>
          Improvise the Centre of Innovation of our Institute that produced 100s of projects so far, leveraging on the technical and knowledge support of AICTE.<br/>
          Host Ideation workshops, and encourage students and faculty to learn new technologies, through Industry Collaboration.<br/>
          Build commercially viable products, catering socio economic needs thus nurturing innovativeness and encouraging entrepreneurship in student community, close by.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Benefits to Students and Staff</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Integration of IDEA Lab with Existing Facilities</h2>
        <p className="text-gray-700 mb-6">
          The IDEA Lab is a one of its kind labs which gives a wide exposure to the young talents in and around the Institute to experiment their ideologies.<br/>
          We have 7 Research Laboratories and 48 Academic Laboratories, from which 1000s of mini to major projects have been executed so far. The expertise gained from these existing facilities will be utilized for the IDEA Labs in idealization, Planning, Designing, Programming, Prototyping, Implementing and Promotion.<br/>
          The products developed from the IDEA Lab will be used as primary or feeder units at our existing facilities.<br/>
          The expertise gained from our wide number of projects executed in our existing facilities will be utilized in IDEA Labs, to minimize the failures.<br/>
          The experimental statistics of the research papers being communicated and published by our highly qualified researchers will be through IDEA Labs.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Alignment with National Initiatives & SDGs</h2>
        <p className="text-gray-700 mb-6">
          We will align with National Initiatives such as Make in India, Swatch Bharat and Vision 2035. We look forward to utilize all equipment and machinery made in India, with a motto to achieve the initiative of Aatma Nirbhar Bharat. The only moto of the lab is to transform the lab into an organization and provide an opportunity to the students and society by large, to enhance his/her innovative capabilities and bring out entrepreneurs and thus encouraging Make in India. We will focus more on MANUFACTURING in the areas of a combination of software with other disciplines.<br/>
          Aligning with the SDGs, we will build and sustain resilient Infrastructure, promote inclusive and sustainable industrialization and foster innovation with students, faculty, and students of close by colleges. We will also collaborate with the close by institutes and share the knowledge amongst all colleges, developing the society by large, addressing challenges in electricity, sanitation, and agriculture.<br/>
          We will integrate with schools who have Atal Tinkering Labs and help them grow to the next level, with the facilities in the IDEA Lab. The lab in its 24 hours of operation, will be available for any immediate needs of the society. The Lab will be tuned to work not only for any revenues, but also to manufacture products that develops the region in eradicating pains of primary education, sanitation and agriculture.<br/>
          We will work with an objective of no-pollution, and develop standard operating procedures to make it a practice than a rule defined in the lab. The nation initiatives will be discussed as soon as it is published by the central government, and action plan will be drafted within a week, to align the initiatives in sync with the new discussions. Technology advancements in health industry will also be focused in collaboration with hospitals.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Plan for Sustenance of IDEA Lab Beyond Two Years</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Collaboration with Industry to address the real time problems.</li>
          <li>The expertise gained through Internships will be experimented and prototyped at IDEA Lab.</li>
          <li>Extend the services of faculty to train the students and faculty of other institutions from the expertise attained.</li>
          <li>Lab is available 24*7 for manufacturing trials to verify and validate designs at nominal prices to attract full utilization of the laboratory through rapid prototyping.</li>
          <li>Developing, fabricating and selling educational models from school level to medical colleges and technical institutions.</li>
          <li>Consistently improve the designs of existing products for economical production.</li>
          <li>Utilize the man power (students and staff) for the industrial needs of the industry partners involved at nominal charges.</li>
          <li>Promote informal education and marketing skills to farmers and people from remote areas.</li>
          <li>Consistently engage the laboratory for serving the needy by involving NGOs, and manufacture the social needs.</li>
        </ul>
      </div>
    </div>
  );
} 