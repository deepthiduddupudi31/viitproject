import React from 'react'

const topRecruiters = () => {
  return (
    <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-12">Top Recruiters</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-16">
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-purple-600">accenture</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-red-600">ALSTOM</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-orange-500">amazon</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-red-500">amdocs</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-blue-600">BAJAJ FINSERV</span>
            </div>
          </div>

          <div className="bg-red-800 text-white py-12 px-8 rounded-lg text-center">
            <blockquote className="text-2xl font-light italic mb-4">
              "INDIA should lead the world. VIT should lead India"
            </blockquote>
            <cite className="text-lg">- Dr. G. Viswanathan, Founder & Chancellor, VIT</cite>
          </div>
        </div>
      </section>
  )
}

export default topRecruiters
