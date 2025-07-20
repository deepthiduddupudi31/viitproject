'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/mca.jpg'
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
The Department of MCA at Vignan's IIT has been active in teaching and research since its inception in 2006. Currently, about 8 committed faculty members are working in the department .The Department of MCA offers Two-year post-graduate programme in Master of Computer Applications .

VIIT's goal is to become a world class engineering institute in a multi-campus setting. It is one of the best institutions in the state. In respect to that, the department of MCA provides a better guidance to all students with practical knowledge and skills. This is an important aspect for the current requirement, under the new concept of outcome based education. Here the students are trained to work as a team and strive for excellence. These students would be representing the cream of the society and therefore are expected to contribute towards the enhancement of reputation and credibility of this institute. The course will not only groom the students to become world class engineering graduates, but will also nurture their sense of purpose and vision. Members of our faculty reflect the variety of interests and qualities inherent in Information Technology. They are dedicated to demonstrate and promote the speciality to the VIIT community of students and faculty as well as to the people we serve. They work towards outcome all the time,and they don't forget the value of the process. Successful students have a richness about them that comes from openness to great moments, and a consistency in the quality is revealed by VIIT. The most successful professionals care about a wide variety of things in the IT field and emphasize the intrinsic value of the tasks. We invite you to browse through our website and learn about the faculty and programs of the department of MCA, and encourage your comments on our website and departmental activities.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
The Department of MCA at Vignan's IIT has been active in teaching and research since its inception in 2006. Currently, about 8 committed faculty members are working in the department .The Department of MCA offers Two-year post-graduate programme in Master of Computer Applications .

VIIT's goal is to become a world class engineering institute in a multi-campus setting. It is one of the best institutions in the state. In respect to that, the department of MCA provides a better guidance to all students with practical knowledge and skills. This is an important aspect for the current requirement, under the new concept of outcome based education. Here the students are trained to work as a team and strive for excellence. These students would be representing the cream of the society and therefore are expected to contribute towards the enhancement of reputation and credibility of this institute. The course will not only groom the students to become world class engineering graduates, but will also nurture their sense of purpose and vision. Members of our faculty reflect the variety of interests and qualities inherent in Information Technology. They are dedicated to demonstrate and promote the speciality to the VIIT community of students and faculty as well as to the people we serve. They work towards outcome all the time,and they don't forget the value of the process. Successful students have a richness about them that comes from openness to great moments, and a consistency in the quality is revealed by VIIT. The most successful professionals care about a wide variety of things in the IT field and emphasize the intrinsic value of the tasks. We invite you to browse through our website and learn about the faculty and programs of the department of MCA, and encourage your comments on our website and departmental activities.            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/mca_hod1.jpg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - MCA</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
