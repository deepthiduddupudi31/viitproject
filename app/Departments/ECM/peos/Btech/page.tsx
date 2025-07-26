'use client'
import Sidebar from '../../Sidebar'

const programmeEducationalObjectives = [
  {
    id: 'PEO 1',
    description:
      'To work in core IT companies/allied industries, educational institutions, research organizations and/or be entrepreneurs.',
  },
  {
    id: 'PEO 2',
    description:
      'To pursue higher education/ research in the field of Electronics and Computer Engineering.',
  },
  {
    id: 'PEO 3',
    description:
      'To demonstrate communication skills, team spirit, leadership qualities, managerial skills, integrity, social & environmental responsibility and lifelong learning ability, professional ethics and human values in profession/career.',
  },
]

export default function EcePeoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="max-w-screen-xl mx-auto p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
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
            The Graduates of B.Tech in Electronics and Computer Engineering will be able to:
          </p>

          <div className="space-y-4">
            {programmeEducationalObjectives.map((peo) => (
              <div key={peo.id} className="p-3 bg-gray-50 rounded-md shadow-sm">
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
