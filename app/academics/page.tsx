export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">Academics</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Schools</h3>
            <ul className="space-y-2 text-sm">
              <li>School of Computer Science and Engineering</li>
              <li>School of Electronics Engineering</li>
              <li>School of Mechanical Engineering</li>
              <li>School of Advanced Sciences</li>
              <li>School of Social Sciences and Humanities</li>
              <li>School of Law</li>
              <li>School of Business</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>Undergraduate Programs</li>
              <li>Postgraduate Programs</li>
              <li>Doctoral Programs</li>
              <li>Integrated Programs</li>
              <li>Dual Degree Programs</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Academic Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Academic Calendar</li>
              <li>Course Catalog</li>
              <li>Academic Regulations</li>
              <li>Examination System</li>
              <li>Grading System</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Academic Excellence</h2>
          <p className="text-gray-700 leading-relaxed">
            VIIT  is committed to providing world-class education through innovative teaching methodologies,
            state-of-the-art infrastructure, and industry-relevant curriculum. Our academic programs are designed to
            foster critical thinking, creativity, and practical skills that prepare students for successful careers in
            their chosen fields.
          </p>
        </div>
      </div>
    </div>
  )
}
