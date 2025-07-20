'use client'
import Sidebar from './Sidebar';

export default function CivilPage() {
  return (
    <div className='mt-[10%]'>
      {/* Header Banner */}
      <div className="max-w-screen-xl min-h-auto mx-auto text-white flex flex-row items-center p-4">
      <img
        src='https://vignaniit.edu.in/images/cse.jpg'
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
The Department of Computer Science and Engineering at the Vignan’s Institute of Information Technology, Visakhapatnam, was established in the year 2002 and provides a perfect academic and research environment complemented by excellence in teaching.
The Department offers B.Tech., M.Tech (CSE and SE) Programmes. The Department has a comprehensive curriculum on topics related to all aspects of Computer Science and Engineering with an emphasis on practical learning. The course structure is up-to-date and includes courses on nascent topics to equip our students with the latest developments in Computer Science and Engineering.            {/* Add the full description from the image here */}
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
A warm welcome to CSE@Vignan’s Institute of Information Technology……..

CSE (Computer Science and Engineering) at the Vignan’s Institute of Information Technology has its seeds in the erstwhile Institute set up in 2002. While at inception, it was primarily focused on academics, the ambit expanded on the journey to include M.Tech Programmes, Research and Placements, Research Center, and NBA Accreditations (2009 and 2017), leading to the current name.

CSE Department focuses on academics, creative research, and good placements in three broad areas of computer science:
<br></br>
• Computer Science and Engineering, including basic concepts, number theory, complexity theory, graph theory, coding theory, algorithms, data structures, cryptography and security.
<br></br>
• Computer Systems and Software, including computer architecture, operating systems, programming languages, compilers, software engineering, database systems, graphics and visualization, communication networks, and distributed computing.
<br></br>
• Intelligent Systems, including data mining, machine learning, artificial intelligence, optimization, information retrieval, and scientific applications.            {/* Add the HoD's message here */}
          </p>
    
<div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative">
  <img
    src="https://vignaniit.edu.in/images/mohan1.png"
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
