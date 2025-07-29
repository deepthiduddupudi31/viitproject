'use client';
import Sidebar from '.././Sidebar';

export default function VisionMissionPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/mca.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Layout with Sidebar */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />

        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">VISION & MISSION</h2>

          {/* Vision Section */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">VISION OF THE DEPARTMENT</h3>
            <p className="text-gray-700 text-justify">
              We aim to generate groomed, technically competent and skilled intellectual professionals.
              We serve as a valuable resource for modern industry and current society.
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">MISSION OF THE DEPARTMENT</h3>
            <ul className="space-y-4 text-gray-700 list-disc pl-6">
              <li>
                Providing a strong theoretical and practical knowledge in computer science discipline with an emphasis on software development.
              </li>
              <li>
                To provide technical solutions in the field of Information Technology to the local society.
              </li>
              <li>
                To provide need based quality training in the field of Information Technology.
              </li>
              <li>
                Impart quality education to meet global standards and achieve excellence in teaching-learning and research.
              </li>
              <li>
                To provide students with the tools to become productive, participating global citizens and life-long learners.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
