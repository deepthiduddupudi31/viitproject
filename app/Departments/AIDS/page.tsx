'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/aids.png'
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
B. Tech. in Artificial Intelligence and Data Science (AI &DS) is an undergraduate programme introduced in 2020 with advanced learning solutions imparting knowledge of advanced innovations like artificial intelligence, data science, machine learning and deep learning. The main goal of artificial intelligence (AI) and data science (DS) is to program computers to use example data or experience to solve a given problem.

During recent times, data science has emerged as one of the most high-growth, dynamic, and gainful careers in technology. This course aims at providing not only the core technologies such as artificial intelligence, data mining and data modeling but also gives intensive inputs in areas of machine learning and big data analytics.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
Welcome to the Department of Artificial Intelligence & Data Science. The B. Tech. program in Artificial Intelligence and Data Science (AI & DS) is an undergraduate initiative introduced in 2020, offering advanced educational solutions that delve into the realm of cutting-edge innovations such as artificial intelligence, data science, machine learning, and deep learning. Our department's mission is to seamlessly integrate superior education with valuable industry contributions.

Our Department consistently pushing the boundaries of innovation. With the aim of providing students a harmonious blend of intellectual exploration and hands-on practical exposure, our ultimate goal is to equip them to effectively address a wide array of societal needs.

Within our department, students are nurtured and groomed to evolve into exceptional software professionals. This includes roles such as Data Engineers, Data Analysts, AI Engineers or Team Leaders in industry or become entrepreneurs in their own innovative way. I am confident that in the times ahead, numerous students from our department will leave an indelible mark both nationally and internationally in the field of AI & DS, bringing pride to our institution.            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/aids_hod.jpeg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - AIDS</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
