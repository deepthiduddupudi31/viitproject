import React from 'react'

const placementHighlights = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-12">Placement Highlight</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-8">
                VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to
                nurturing industry-ready professionals. Boasting a stellar track record, our students have secured
                coveted positions in leading companies. The testament to our rigorous academic curriculum and holistic
                development approach is evident in the remarkable success stories of our graduates.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-900 rounded-lg p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">632</div>
                      <div className="text-sm text-blue-900">Companies</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">2807</div>
                    <div>Super Dream Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">530</div>
                    <div>Marquee Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">2862</div>
                    <div>Dream Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">12579</div>
                    <div>Overall Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">6380</div>
                    <div>Regular Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">4051</div>
                    <div>Industry Internships</div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-yellow-400 font-bold">Highest CTC ₹1 Crore</div>
                  <div className="text-xs">295 Super Dream Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default placementHighlights
