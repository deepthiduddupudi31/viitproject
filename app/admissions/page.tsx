export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Admissions</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admission Process</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              VIIT  offers various undergraduate and postgraduate programs across multiple disciplines. Our
              admission process is designed to identify and nurture talented students who can contribute to our academic
              community.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-blue-800">VITEEE</h3>
                <p className="text-sm text-gray-600">VIT Engineering Entrance Examination</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-blue-800">VITREE</h3>
                <p className="text-sm text-gray-600">VIT Research Entrance Examination</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-blue-800">VITMEE</h3>
                <p className="text-sm text-gray-600">VIT Master's Entrance Examination</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Important Dates</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="font-medium">Application Opens</p>
                <p className="text-sm text-gray-600">January 2025</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Application Deadline</p>
                <p className="text-sm text-gray-600">March 2025</p>
              </div>
              <div className="border-b pb-3">
                <p className="font-medium">Entrance Exam</p>
                <p className="text-sm text-gray-600">April 2025</p>
              </div>
              <div>
                <p className="font-medium">Results Declaration</p>
                <p className="text-sm text-gray-600">May 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
