export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-linkedin mb-8">About VIIT</h1>

            {/* Video Embed Placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-video mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-linkedin rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-gray-600">VIIT  - Empowering Academic Excellence</p>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg font-semibold text-linkedin">V</p>
              <p>
                IT has been a forerunner in delivering quality education. Consistently ranked among the top educational
                institutes in the country, the VIT group of institutions have had a proud tradition of pursuing
                knowledge and excellence. In keeping with this tradition, the leadership at VIIT resonates a dynamic
                blend of academic initiative and industry partnership with a vision of creating one of the finest
                academic destinations in the world.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-linkedin mb-6">ANNOUNCEMENTS</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-06-04</p>
                <h3 className="font-medium text-gray-900">Integrated M.Tech.- 2025 Results & Choice filling</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-23</p>
                <h3 className="font-medium text-gray-900">VITREE-2025 (July Session)-Results</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-08</p>
                <h3 className="font-medium text-gray-900">
                  VITMEE (M.Tech. 2025) Admission Results - Counselling & Choice filling
                </h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-03</p>
                <h3 className="font-medium text-gray-900">VITEEE – 2025 Results</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-13</p>
                <h3 className="font-medium text-gray-900">Fresher's Fee Payment 2025</h3>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">2025-02-17</p>
                <h3 className="font-medium text-gray-900">Additional announcement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
