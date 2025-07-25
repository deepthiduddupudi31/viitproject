'use client'
import Sidebar from '../../Sidebar'

const programmeEducationalObjectives = [
  {
    id: 'PEO 1',
    description:
      'Utilize their updated knowledge and skills to adapt themselves in core & software companies to pursue their career successfully.',
  },
  {
    id: 'PEO 2',
    description:
      'Augment their proficiency towards higher education and research.',
  },
  {
    id: 'PEO 3',
    description:
      'Solve contemporary issues related to society, ethical and human values with lifelong learning.',
  },
]

export default function EcePeoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto p-4">
        <img
          src="https://vignaniit.edu.in/images/cse.jpg"
          alt="ECE Department Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <div className="flex max-w-screen-xl mx-auto px-4">
        <Sidebar />

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Programme Educational Objectives (PEOs)
          </h2>

          <p className="text-md text-gray-800 mb-4">
            The Graduates of B.Tech in Electronics and Communication Engineering will be able to:
          </p>

          <div className="space-y-4">
            {programmeEducationalObjectives.map((peo) => (
              <div key={peo.id}>
                <h3 className="font-semibold text-gray-900">{peo.id}</h3>
                <p className="text-gray-700 text-justify">{peo.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
