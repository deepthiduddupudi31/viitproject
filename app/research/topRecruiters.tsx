import React from 'react'

const TopRecruiters = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
          Top Recruiters
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="animate-slide flex gap-16 items-center w-max">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center h-16 min-w-[150px] group">
                  <span className="text-2xl font-bold text-purple-600 transition duration-300 group-hover:scale-110 group-hover:text-purple-800 cursor-pointer">
                    accenture
                  </span>
                </div>
                <div className="flex items-center justify-center h-16 min-w-[150px] group">
                  <span className="text-2xl font-bold text-red-600 transition duration-300 group-hover:scale-110 group-hover:text-red-800 cursor-pointer">
                    ALSTOM
                  </span>
                </div>
                <div className="flex items-center justify-center h-16 min-w-[150px] group">
                  <span className="text-2xl font-bold text-orange-500 transition duration-300 group-hover:scale-110 group-hover:text-orange-700 cursor-pointer">
                    amazon
                  </span>
                </div>
                <div className="flex items-center justify-center h-16 min-w-[150px] group">
                  <span className="text-2xl font-bold text-red-500 transition duration-300 group-hover:scale-110 group-hover:text-red-700 cursor-pointer">
                    amdocs
                  </span>
                </div>
                <div className="flex items-center justify-center h-16 min-w-[150px] group">
                  <span className="text-2xl font-bold text-blue-600 transition duration-300 group-hover:scale-110 group-hover:text-blue-800 cursor-pointer">
                    BAJAJ FINSERV
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-linkedin text-white py-12 px-8 mt-16 rounded-lg text-center">
          <blockquote className="text-2xl font-light italic mb-4">
            "INDIA should lead the world. VIT should lead India"
          </blockquote>
          <cite className="text-lg">- Dr. G. Viswanathan, Founder & Chancellor, VIT</cite>
        </div>
      </div>
    </section>
  )
}

export default TopRecruiters
