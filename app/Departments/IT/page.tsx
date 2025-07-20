'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/IT.jpg'
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
The Department of Information Technology at Vignan's IIT has been active in teaching and research since its inception in 2002. Currently, about 15 committed faculty members are working in the department .The Department of Information Technology offers four-year under-graduate programme and two-year post graduate programme in the field of Information Technology.

The department of Information Technology was started in the year 2002 with the state of art infrastructural facilities right from its inception. It is continuously thriving to impart quality education and competitive spirit among students for academic excellence. The continuous University ranks in competitive exams such as GATE,GRE,TOFFEL,IELTS and "Campus Placements" achieved by the students indicate the aspiration of our department.

The department has made a significant progress within few years. The objective of the department is developing the logical thinking through problem solving among the students and training the students in latest technologies as per the industrial needs. The department contains efficient and eminent faculty & senior faculty mostly with B.Tech and M.Tech backgrounds.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
It’s My Pleasure to welcome you to the department of Information Technology Established in the Year of 2002. Information Technology is a passionate and well-established department with new technologies and eminent experts working as Faculty peers. Information Technology focuses to Install, Implement and maintain software and apply them in Industries to meet their business needs. I ensure Information Technology Department will provide an exceptional learning experience that will enable students to become an Independent Thinker, Success Maker in making Real Time Applications in their chosen Career Path. I wish you All the Best! COME and JOIN US.

With Best Wishes            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/hod_it1.jpeg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - IT</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
