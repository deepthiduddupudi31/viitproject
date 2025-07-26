'use client'
import Sidebar from '.././Sidebar';

export default function VisionMissionPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Page Layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">VISION & MISSION</h2>

          {/* Vision */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">VISION OF THE DEPARTMENT</h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              To be a globally competent in the field of Artificial Intelligence and Data Science by creating technically potential professionals for future industry requirements and undertaking high quality domain research to serve the society and betterment of mankind.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="list-disc space-y-4 pl-6 text-gray-700 leading-relaxed">
              <li>
                <strong>M1:</strong> To empower the students with adequate technical and analytical skills by undertaking research and development in the area of AI&DS.
              </li>
              <li>
                <strong>M2:</strong> To emphasize on innovative teaching learning process in order to produce professionals with AI & DS domain expertise.
              </li>
              <li>
                <strong>M3:</strong> To provide ethical and human values along with problem solving skills, leadership qualities and team spirit to solve the complex engineering problems of modern society.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
