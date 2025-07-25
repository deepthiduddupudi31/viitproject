'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div >
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/mba.jpg'
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
The institution started offering MBA course from 2006-07, the three aims of the institute are - To enable students to tap their innate potential to bloom into business leaders, To equip the students with skills required to develop themselves into managers and to provide the impetus to reach the higher echelons of the organization and to offer a wide spectrum of business knowledge, conceptual and analytical skills to develop the students into competent and effective managers. the course lays emphasis on innovative pedagogy which include industry internships, live projects, Business games, Case studies, interaction with experts seminars etc.

VIIT is a centre of excellence in value based education, training, research & consultancy. It has got dedicated full time faculty members varied experience in industry & Academia. Vignan brought about a revolution in the field of education & rewrote the history of education in Andhra Pradesh. Today, Vignan is one of the pioneers in the field of education in the country. It has spread its wings across the state& its students have successfully made in their chosen fields all across the globe. The institution started offering MBA a course from 2006-2007, with the ultimate objective of grooming the students into complete professionals and to equip the industry with contemporary global expertise. The course lays emphasis on innovative pedagogy which includes industry internships, live project, Business Games, Case Studies, Interaction with Experts, Seminars etc.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
Greetings from the Department of Management Studies, Vignan's Institute of Information Technology (Autonomous), As you are aware of that the Department of Management Studies has contributed to the spread of Management Education through its full-time programmes. The Department is committed to achieve professional excellence in imparting management education along with social commitment towards extension and diversity The curriculum is designed and enriched with industry support and participation. The pedagogy is highly interactive with practical orientation. The industry has recognized the capability of our students by absorbing them in the core area by offering challenging assignments. The students are placed in well reputed organizations like, Axis Bank, Fedaral Bank, IBM, Just Dail, Capital IQ, JARO Educational Group, Cognizant, GENPACT, Ram Group, I Process, Suthernland Global, Efftronics, Yelamanchili software solutions etc.            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/mba_hod2.jpeg"
    alt="Banner"
    className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
  />
  <p className="text-center mt-2 font-semibold">HOD - MBA</p>
</div>

      
        </main>
       
      </div>
       
    </div>
  );
}
