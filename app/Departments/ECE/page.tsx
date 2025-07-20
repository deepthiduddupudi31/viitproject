'use client'
import Sidebar from './Sidebar';

export default function ECElPage() {
  return (
    <div className='mt-[10%]'>
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
The Department of Electrical and Electronics Engineering at Vignan's Institute of Information Technology has been active in teaching and research since its inception 2002.The Department offers four year undergraduate program in Electrical & Electronics Engineering and two years Post- graduate course in Power and Industrial Drives. The Department has state of Art Laboratories with fully equipped latest equipment and modern technical software. The Department has rich experienced and dedicated faculty from reputed institutes. Currently, about 38 committed faculty members are working and engaged in research in the areas of Electrical Machines, Control systems, Power systems, High Voltage Engineering & Power Electronics etc. Faculty are encouraged to take independent initiatives with collective responsibility in all the relevant academic and R&D dimension like innovative teaching, student projects and research supervision, continuous education through organizing conferences, symposia etc. The department has Funded Project Grants worth Rs.55 Lakhs Latest Teaching and Learning techniques are adapted to train the students to explore, to create, to challenge and to lead. Dept. Faculty addresses emotional and psychological needs of the students through strong counseling system. The department of EEE Consistently maintaining the results nearly 90%. About 60% of the students are placed in campus drives. As a part of social responsibilities to uplift the surrounding, the department conducts community Welfare Programs.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
It is my pleasure to welcome you to the Department of Electrical & Electronics Engineering at Vignan's Institute of Information Technology (A). The Department has been active in teaching and research since its inception in the year 2002.

The growing utilization of the electrical energy and penetration of renewable energy is a decisive prerequisite for a rapid development of industry. The department aims to train the students by imparting them latest knowledge in the fields of Electrical, Electronics and other allied areas, with a focus on ethical and human values.

The department offers academic programmes B.Tech (Electrical & Electronics Engineering) and M.Tech. (Power and Industrial Drives). The curriculum has been enriched on regular intervals by Board of Studies members drawn from International and National level reputed academic, research and industrial organizations.

The department is supported by well qualified and experienced faculty with a rich and varied teaching and research exposure. Many of them are drawn from standard Indian Institutions like IITs and NITs. Most of the faculty members published or presented papers in the reputed national and international journals and conferences. Electrical Engineers have great opportunity for employment in the state and central electricity boards like APGENCO, APTRANSCO, BHEL,NTPC, NHPC etc.

            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/_SRK7378.JPG"
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
