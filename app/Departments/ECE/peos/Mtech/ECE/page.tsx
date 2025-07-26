'use client'
import Sidebar from '../../../Sidebar';

const programmeEducationalObjectives = [
  {
    id: 'PEO-1',
    description:
      'To acquire knowledge of the fundamental and advanced concepts of electronics and communication to analyze, design, develop and implement electronic systems or equipment.',
  },
  {
    id: 'PEO-2',
    description:
      'To prepare the students for successful carrier in industry, academia and research with proficiency in Electronics and Communication Systems.',
  },
  {
    id: 'PEO-3',
    description:
      'To attain professional leadership qualities which including effective communication, teamwork, multidisciplinary approach and ability to relate engineering issues to broader social challenges.',
  },
];

export default function MTechPEOPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/ece.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Program Educational Objectives (PEOs)
          </h2>
          <p className="mb-6 text-gray-800 text-justify">
            The Post Graduates of M.Tech in Electronics and Communication Systems will be able:
          </p>
          <div className="space-y-4">
            {programmeEducationalObjectives.map((peo) => (
              <div key={peo.id}>
                <h3 className="font-semibold text-gray-800">{peo.id}</h3>
                <p className="text-gray-700 text-justify">{peo.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
