'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/eee.jpg'
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
Department of Electronics and communication Engineering (ECE) at VIGNAN’S institute of Information Technology (Autonomous) was established in the year 2002 with intake 180 for imparting state-of-the-art knowledge in Electronics and Communication Engineering and allied areas. Department offers Post Graduation Programs in VLSI and Embedded Systems & Electronics (M.Tech – VLSI&ES) and Communication Engineering (M.Tech – ECE) with initial intake of 18 later, decreased to 09 in A.Y. 2019-20. The department has set up laboratories with excellent infrastructure in the areas of Electronics, Communication, Advanced Electronics & Advanced Communications. The B.Tech programme of the department is accredited by NBA and has a JNTU-GV recognised research centre. More than 90% student admissions every year & the department has qualified faculty from reputed institutes with average of 25% doctorates (maintained SFR as per AICTE norms). DST SERB project with worth of Rs. 85,63,830/-, AICTE Modrobs with worth of Rs. 15,09,412/- , 20 Patents & Consultancy Projects with worth of Rs.7,37,000/- The average placements are more than 90% for last 5 years & average academic performance is more than 92%. The department has strong research environment with publications 133 (last 5 years).             {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
HoD Message –It is our earnest desire to develop this department into a cognizant center of learning with excellent faculty and good administration, for the development and welfare of the society, from which we draw the resources and inspiration. The institution is facilitated with the best capabilities to impart skills both theoretical and practical for updating the technical knowledge with the latest expertise in the respective fields of Engineering and Technology. I greet all those who wish to associate themselves with this center of learning and invite them to join The VIGNAN’S Family.            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/hod_ecm.jpg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - EEE</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
