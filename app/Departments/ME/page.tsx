'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div className='mt-[10%]'>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/mech.jpg'
        alt="Banner"
        className="w-full h-32 object-cover rounded-lg shadow-lg"
      />
      </div>

      {/* Content layout */}
      <div className="flex max-w-screen-xl mx-auto relative">
        <Sidebar />
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">ABOUT DEPT</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Department of Civil Engineering is part of the institute since 2011. The Department has grown tremendously over the years and is now recognized as one of the major engineering departments in the state offering four-year undergraduate programme in Civil Engineering.The department has amalgam of experienced faculty and almost all of them qualified from premier institutions like IITs and NITs. Department is focusing on the special skills required for Civil Engineering field along with regular academics. Department encourage the students to take up projects based on the societal problems. In addition, from the II years programming skills, problem skills and managerial skills are imparted. As a result of above 90% students are able to get placements in core industries.
            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
            It is a great opportunity of being Head of the department of CIVIL branch. I feel proud to introduce about the department's strength and achievements. The department of CIVIL is offering UG course with an intake of 120 in B.Tech (Civil Engineering) and post-graduation program with an intake of 18 in M.Tech Transportation Engineering. The students of civil are good in both academics as well as in extra and co-curricular activities. Our students are provided a solid engineering education, with a focus on creativity and innovation, and a strong ethical responsibility. The civil engineering program prepares graduates with strong leadership qualities. These leadership qualities and our program's high technical standards generate strong interest from industries and employers across the region.
            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/mech_hod_new.jpeg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - CIVIL</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
