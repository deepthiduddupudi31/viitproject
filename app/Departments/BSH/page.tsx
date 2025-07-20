'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/bsh.jpg'
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
Department of Basic Sciences and Humanities is recognized as one of the Ten Departments in the Institution. It is a combination of multiple subjects and streams like Chemistry, Physics, Mathematics, Environmental Sciences and English. It oversees the academic activities of I B.Tech and bridges the gap between Intermediate and Engineering courses. The department has a privilege to transform the students, who are from diverse backgrounds, into better individuals to cope with the global requirements.

We had a strong counselling system which helps the students to mould themselves into real time professionals. Department has been securing outstanding results from last 18 years and always stands in top three places under the affiliating university. Department has a rich galaxy of intellectuals with 20 Doctorates, 6 pursuing Doctorates, 11 M.Phils and 7 CSIR-UGC NET/APSET qualified faculty members. Two faculty members had their Post Doctoral Fellowship from Universities abroad. Faculty members have published about 110 research papers and 45 conference papers in various National and International reputed journals and conferences.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
            It is a great opportunity of being Head of the department of BS&H branch. I feel proud to introduce about the department's strength and achievements. The department of BS&H is offering UG course with an intake of 120 in B.Tech (Civil Engineering) and post-graduation program with an intake of 18 in M.Tech Transportation Engineering. The students of civil are good in both academics as well as in extra and co-curricular activities. Our students are provided a solid engineering education, with a focus on creativity and innovation, and a strong ethical responsibility. The civil engineering program prepares graduates with strong leadership qualities. These leadership qualities and our program's high technical standards generate strong interest from industries and employers across the region.
            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/hod_bsh1.jpeg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - BSHL</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
