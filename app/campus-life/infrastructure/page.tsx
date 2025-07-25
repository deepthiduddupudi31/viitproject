<<<<<<< HEAD
import Image from "next/image";
import LocomotiveScrollWrapper from "../../../components/LocomotiveScrollWrapper";

export default function InfrastructurePage() {
  return (
    <LocomotiveScrollWrapper>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        {/* Hero Section */}
        <div className="relative mb-12">
          <Image
            src="/image3.jpg"
            alt="VIIT Infrastructure"
            width={1200}
            height={350}
            className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0077B5]/80 to-transparent rounded-3xl flex items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white px-10 drop-shadow-lg">
              Infrastructure & Teaching – Learning Facilities
            </h1>
          </div>
        </div>

        {/* Teaching & Learning Facilities */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Teaching & Learning Facilities</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image src="/image1.jpg" alt="Classrooms" width={350} height={220} className="rounded-2xl object-cover shadow-lg w-full md:w-1/2" />
            <div className="flex-1">
              <p className="mb-4 text-gray-700">The Institute provides robust support for developing students' knowledge and skills, enhancing learning outcomes through a learner-centered environment and diverse learning opportunities.</p>
              <div className="bg-[#e6f0fa] rounded-lg p-4 mb-4">
                <b>Facilities Overview:</b>
                <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                  <li>82 classrooms (avg. 110 sq. m.), all with ICT facilities; 30% have smart boards.</li>
                  <li>108 well-equipped laboratories with equipment worth Rs 620 lakhs.</li>
                  <li>4 research laboratories worth over Rs 500 lakhs for interdisciplinary research.</li>
                  <li>8 seminar halls for interactive sessions, workshops, and guest lectures.</li>
                </ul>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow text-sm">
                  <thead>
                    <tr className="bg-[#0077B5] text-white">
                      <th className="py-2 px-3 text-left">S.No</th>
                      <th className="py-2 px-3 text-left">Type of Facility</th>
                      <th className="py-2 px-3 text-left">Numbers</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="border-b"><td className="py-2 px-3">1.</td><td className="py-2 px-3">Classrooms</td><td className="py-2 px-3">82</td></tr>
                    <tr className="border-b"><td className="py-2 px-3">2.</td><td className="py-2 px-3">Laboratories</td><td className="py-2 px-3">108</td></tr>
                    <tr className="border-b"><td className="py-2 px-3">3.</td><td className="py-2 px-3">Research Laboratories</td><td className="py-2 px-3">04</td></tr>
                    <tr><td className="py-2 px-3">4.</td><td className="py-2 px-3">Seminar Halls</td><td className="py-2 px-3">08</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ICT Enabled Facilities */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">ICT Enabled Facilities</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-1">
              <p className="mb-4 text-gray-700">ICT enabled facilities enhance the effectiveness of teaching and learning processes. ICT enabled classrooms include smart boards, computers, projectors, speakers integrated with learning management systems.</p>
              <ul className="list-disc list-inside ml-4 mb-4 text-gray-700">
                <li>All 82 classrooms are ICT-enabled, including 30 smart boards and 52 LCD projectors.</li>
                <li>8 seminar halls fully equipped with smart board facilities.</li>
                <li>Adopted <b>Moodle</b> as the Learning Management System (LMS) for seamless digital learning.</li>
              </ul>
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <div className="flex flex-col items-center">
                  <Image src="/placeholder-logo.png" alt="Smart Board" width={40} height={40} className="rounded shadow" />
                  <span className="text-xs mt-1 text-[#0077B5]">Smart Board</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/image5.jpg" alt="Projector" width={40} height={40} className="rounded shadow object-cover" />
                  <span className="text-xs mt-1 text-[#0077B5]">Projector</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/image.png" alt="Moodle LMS" width={40} height={40} className="rounded shadow object-cover" />
                  <span className="text-xs mt-1 text-[#0077B5]">Moodle LMS</span>
                </div>
              </div>
            </div>
            <div className="relative mb-3 md:mb-0">
              <Image src="/image2.jpg" alt="ICT Classroom" width={400} height={120} className="w-full h-40 object-cover rounded-xl shadow" />
              <div className="absolute bottom-2 left-2 bg-[#0077B5]/80 text-white text-xs px-3 py-1 rounded-full shadow">Modern ICT Classroom</div>
            </div>
          </div>
        </section>

        {/* Laboratories */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Laboratories</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image src="/image2.jpg" alt="Laboratories" width={350} height={220} className="rounded-2xl object-cover shadow-lg w-full md:w-1/2" />
            <div className="flex-1">
              <p className="text-gray-700">108 well-equipped laboratories, with state-of-the-art equipment worth <b>Rs 620 lakhs</b>, supporting hands-on learning and research.</p>
            </div>
          </div>
        </section>

        {/* Research Laboratories */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Research Laboratories</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <Image src="/image4.jpg" alt="Research Labs" width={350} height={220} className="rounded-2xl object-cover shadow-lg w-full md:w-1/2" />
            <div className="flex-1">
              <p className="text-gray-700">Four research laboratories worth more than <b>Rs 500 lakhs</b> enable interdisciplinary research and innovation.</p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Research</h2>
          {/* Research Projects Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Research Projects</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Name of the Faculty</th>
                    <th className="py-2 px-3 text-left">Title of the Work</th>
                    <th className="py-2 px-3 text-left">Period</th>
                    <th className="py-2 px-3 text-left">Funded By</th>
                    <th className="py-2 px-3 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b">
                    <td className="py-2 px-3">1</td>
                    <td className="py-2 px-3">Dr.K Yellareswarao</td>
                    <td className="py-2 px-3">Development of All Solid State Thin Film Li-Ion Micro Battery using Powder Sputtering</td>
                    <td className="py-2 px-3">3 years</td>
                    <td className="py-2 px-3">DST,SERB</td>
                    <td className="py-2 px-3">33,39,600 INR.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Research Publications Table */}
          <div>
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Research Publications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Year</th>
                    <th className="py-2 px-3 text-left">National Journals</th>
                    <th className="py-2 px-3 text-left">International Journals</th>
                    <th className="py-2 px-3 text-left">Conferences</th>
                    <th className="py-2 px-3 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">2019-2020</td><td className="py-2 px-3">10</td><td className="py-2 px-3">5</td><td className="py-2 px-3">4</td><td className="py-2 px-3">19</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">2018-2019</td><td className="py-2 px-3">12</td><td className="py-2 px-3">1</td><td className="py-2 px-3">7</td><td className="py-2 px-3">20</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">2017-2018</td><td className="py-2 px-3">6</td><td className="py-2 px-3">2</td><td className="py-2 px-3">3</td><td className="py-2 px-3">11</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">2016-2017</td><td className="py-2 px-3">2</td><td className="py-2 px-3">10</td><td className="py-2 px-3">2</td><td className="py-2 px-3">10</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">2015-2016</td><td className="py-2 px-3">4</td><td className="py-2 px-3">9</td><td className="py-2 px-3">4</td><td className="py-2 px-3">14</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">2014-2015</td><td className="py-2 px-3">3</td><td className="py-2 px-3">9</td><td className="py-2 px-3">7</td><td className="py-2 px-3">12</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">2013-2014</td><td className="py-2 px-3">2</td><td className="py-2 px-3">6</td><td className="py-2 px-3">9</td><td className="py-2 px-3">8</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Board of Studies (BOS) Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Dept. of BS & H</h2>
          <h3 className="text-xl font-semibold text-[#0077B5] mb-2">ABOUT DEPT</h3>
          <div className="bg-[#e6f0fa] rounded-xl p-6 mb-4 shadow">
            <p className="mb-3 text-gray-700">The Department of Basic Sciences and Humanities is recognized as one of the ten departments in the institution. It is a combination of multiple subjects and streams like <b>Chemistry, Physics, Mathematics, Environmental Sciences, and English</b>. It oversees the academic activities of I B.Tech and bridges the gap between Intermediate and Engineering courses. The department has the privilege to transform students from diverse backgrounds into better individuals to cope with global requirements.</p>
            <p className="mb-3 text-gray-700">We have a strong counselling system that helps students mould themselves into real-time professionals. The department has been securing outstanding results for the last 18 years and always stands in the top three places under the affiliating university.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-white rounded-lg p-4 shadow text-[#0077B5] font-semibold text-center">20 Doctorates, 6 pursuing Doctorates, 11 M.Phils, 7 CSIR-UGC NET/APSET qualified faculty</div>
              <div className="bg-white rounded-lg p-4 shadow text-[#0077B5] font-semibold text-center">2 Post Doctoral Fellowships from abroad, 110 research papers, 45 conference papers</div>
            </div>
            <p className="mb-3 text-gray-700">A research project worth <b>INR 34 lakhs</b> has been granted to Dr.K.Yellareswara Rao. Many faculty members have received Gold Medals, Best Teacher Awards, Best Thesis Awards, Vishista Seva, Sastra, Vijetha, and Prathiba awards for excellence in academics, research, and service from reputed universities.</p>
            <p className="mb-3 text-gray-700">The department ensures the holistic development of students, encouraging participation in co-curricular and extra-curricular activities. Our students have won awards/prizes at National and International level events, including merit certificates, medals, and cash awards.</p>
            <p className="mb-3 text-gray-700">We conduct Live-Model Exhibitions, Sports Meet, Cultural Meet, Soft Skills Programmes, Workshops, and FDPs for the overall development of students and faculty members.</p>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
              <div className="flex-shrink-0">
                <Image src="/placeholder-user.jpg" alt="Dr. T.V.S.P.V. Satyaguru, HOD-BS&H" width={90} height={90} className="rounded-full object-cover border-4 border-[#0077B5] shadow" />
              </div>
              <div className="flex-1 text-right md:text-left font-bold text-[#0077B5]">
                Dr. T.V.S.P.V. Satyaguru<br/>HOD-BS&amp;H
              </div>
            </div>
          </div>
          {/* Chemistry BOS Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">BOS Members – Department of Chemistry</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No.</th>
                    <th className="py-2 px-3 text-left">Name of the Person</th>
                    <th className="py-2 px-3 text-left">Designation</th>
                    <th className="py-2 px-3 text-left">Status of the Person</th>
                    <th className="py-2 px-3 text-left">Affiliation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Dr. K.V. Vivekananda</td><td className="py-2 px-3">HoD</td><td className="py-2 px-3">Chairperson</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Dr. S. Satyaveni</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">JNTUK, Nominee</td><td className="py-2 px-3">JNTUK</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Dr. N. Annapurna</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">AU, Nominee</td><td className="py-2 px-3">AUCOE</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Dr. Prathap Reddy</td><td className="py-2 px-3">Head, R&D</td><td className="py-2 px-3">Industry Nominee</td><td className="py-2 px-3">Ryptus Pharma, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Mr. P. H. J Venkatesh</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Alumni Member</td><td className="py-2 px-3">Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Dr. T.V.S.P.V. Satyaguru</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Dr. G. Krantikumar</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">Ms. P. Varalakshmi</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">Ms. A. Ramya</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Physics BOS Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">BOS Members – Department of Physics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No.</th>
                    <th className="py-2 px-3 text-left">Name of the Person</th>
                    <th className="py-2 px-3 text-left">Designation</th>
                    <th className="py-2 px-3 text-left">Category</th>
                    <th className="py-2 px-3 text-left">Status of the Person</th>
                    <th className="py-2 px-3 text-left">Affiliation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Dr. K. Madhusudhana Rao</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Chairman</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Dr. R. Hanumantha Rao</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Dr. K. Yellareswara Rao</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Dr. B. Dhana lakshmi</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Dr. A. Santhosh Kumar</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Mr. S. Ravi Kumar</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Mr. K. Appala Naidu</td><td className="py-2 px-3">Member</td><td className="py-2 px-3">Alumni</td><td className="py-2 px-3">2010 past out EEE student</td><td className="py-2 px-3"></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Mathematics BOS Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">BOS Members – Department of Mathematics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No.</th>
                    <th className="py-2 px-3 text-left">Name of the Person</th>
                    <th className="py-2 px-3 text-left">Designation</th>
                    <th className="py-2 px-3 text-left">Category</th>
                    <th className="py-2 px-3 text-left">Status of the Person</th>
                    <th className="py-2 px-3 text-left">Affiliation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Dr. P. Rajesh</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Chairperson (HOD)</td><td className="py-2 px-3">VIIT, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Dr. G. V. S. R. Deekshitulu</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member -Faculty</td><td className="py-2 px-3">Dept. of Mathematics, JNTU(K),Kakinada</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Dr. K. Rajendra Prasad</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member –Faculty ,BOS Chairman, Dept of Applied Mathematics, A.U Visakhapatnam</td><td className="py-2 px-3">Dept of Applied Mathematics, A.U College of Science and technology, Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Mr Raj Kumar</td><td className="py-2 px-3">Member</td><td className="py-2 px-3">Alumni</td><td className="py-2 px-3">Meritorious student to be nominated by the principal (co-optional)</td><td className="py-2 px-3"></td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Dr. N. Ramya</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty(Statistics )</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Dr. Mrudhula devi</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Dr. Vijaya Prasamsa</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">Dr. Laxmi Sowjanya</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">Dr. S. Sunitha Devi</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">10</td><td className="py-2 px-3">Dr. M.P.V.V.Bhaskara Rao</td><td className="py-2 px-3">Associate Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">11</td><td className="py-2 px-3">Mrs. S. AdiLaxmi</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">12</td><td className="py-2 px-3">Mrs. S. Indira</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">13</td><td className="py-2 px-3">Dr N B Gayathri</td><td className="py-2 px-3">AssociateProfessor</td><td className="py-2 px-3">Education</td><td className="py-2 px-3">Member – Faculty (Mathematics)</td><td className="py-2 px-3">Internal</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* English BOS Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">BOS Members – Department of English</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No.</th>
                    <th className="py-2 px-3 text-left">Name of the Person</th>
                    <th className="py-2 px-3 text-left">Designation</th>
                    <th className="py-2 px-3 text-left">Status of the Person</th>
                    <th className="py-2 px-3 text-left">Affiliation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Dr..K.G.B. Santhosh Kumari</td><td className="py-2 px-3">HoD</td><td className="py-2 px-3">Chairperson</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Dr.B.Indira</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">JNTUK, Nominee</td><td className="py-2 px-3">AUCOE</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Dr.Sharada Allamneni</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">Member</td><td className="py-2 px-3">Vignan University</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Dr.I.S.V.Manjula</td><td className="py-2 px-3">Professor</td><td className="py-2 px-3">Member</td><td className="py-2 px-3">International Examiner,</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Mr.P.H.J Venkatesh</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Alumni Member</td><td className="py-2 px-3">Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Mr.K.Ramappadu</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Mr.D.Ganesh</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">Ms.K.S.N.V.L.Lavanya Kumari</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">Ms. Padmaja Rani Behara</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">10</td><td className="py-2 px-3">Ms. Sai Madhuri</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">11</td><td className="py-2 px-3">Ms. Hilda Sharon</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">12</td><td className="py-2 px-3">Ms.Monika Reddy</td><td className="py-2 px-3">Assistant Professor</td><td className="py-2 px-3">Member –Faculty</td><td className="py-2 px-3">VIIT (A), Visakhapatnam</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Seminar Halls */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Seminar Halls</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image src="/image5.jpg" alt="Seminar Halls" width={350} height={220} className="rounded-2xl object-cover shadow-lg w-full md:w-1/2" />
            <div className="flex-1">
              <p className="text-gray-700">Eight seminar halls, each equipped for interactive sessions, workshops, and guest lectures.</p>
            </div>
          </div>
        </section>

        {/* AICTE Idea Lab */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">AICTE Idea Lab</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <Image src="/placeholder-logo.png" alt="AICTE Idea Lab" width={120} height={120} className="rounded-2xl object-cover shadow-lg w-full md:w-1/3" />
            <div className="flex-1">
              <p className="text-gray-700">AICTE-sponsored Idea Lab established at a cost of <b>Rs 194 lakhs</b> to foster creativity and innovation among students.</p>
            </div>
          </div>
        </section>

        {/* Video Recording Rooms */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4">Video Recording Rooms</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image src="/image.png" alt="Video Recording Rooms" width={350} height={220} className="rounded-2xl object-cover shadow-lg w-full md:w-1/2" />
            <div className="flex-1">
              <p className="text-gray-700">Four video recording rooms equipped with smart boards and glass boards for high-quality content creation and online learning.</p>
            </div>
          </div>
        </section>

        {/* Cultural and Sports Facilities Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0077B5] mb-4 text-center flex items-center justify-center gap-2">
            <span>🎭</span> Cultural & Sports Facilities <span>🏆</span>
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
            VIIT encourages students to participate in sports and cultural activities, enabling them to showcase their talent and creativity at national and inter-collegiate events. Expert advice, support, and training are provided for National events.
          </p>
          {/* Sports and Games Intro */}
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Sports and Games</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Students are trained under the guidance of five qualified Physical Education Trainers and have achieved excellence at University and National levels. The institute organizes various sports meets and provides both indoor and outdoor sports facilities.
            </p>
          </div>
          {/* Sports Facilities Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white rounded-xl shadow-md text-sm">
              <thead>
                <tr className="bg-[#0077B5] text-white">
                  <th className="py-2 px-3 text-left">S.No</th>
                  <th className="py-2 px-3 text-left">Name of the Facility</th>
                  <th className="py-2 px-3 text-left">No. of Facilities</th>
                  <th className="py-2 px-3 text-left">Area (Sq.m)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Volleyball Court</td><td className="py-2 px-3">7</td><td className="py-2 px-3">1134</td></tr>
                <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Basketball Court</td><td className="py-2 px-3">1</td><td className="py-2 px-3">420</td></tr>
                <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Shuttle Badminton Court</td><td className="py-2 px-3">4</td><td className="py-2 px-3">326.96</td></tr>
                <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Kho-Kho Court</td><td className="py-2 px-3">2</td><td className="py-2 px-3">864</td></tr>
                <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Kabaddi Court</td><td className="py-2 px-3">3</td><td className="py-2 px-3">390</td></tr>
                <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Throw Ball Court</td><td className="py-2 px-3">3</td><td className="py-2 px-3">669.78</td></tr>
                <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Tennikoit Court</td><td className="py-2 px-3">2</td><td className="py-2 px-3">134.2</td></tr>
                <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">Lawn Tennis Court</td><td className="py-2 px-3">1</td><td className="py-2 px-3">260.86</td></tr>
                <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">Football Field</td><td className="py-2 px-3">1</td><td className="py-2 px-3">5850</td></tr>
                <tr className="border-b"><td className="py-2 px-3">10</td><td className="py-2 px-3">Cricket Play ground</td><td className="py-2 px-3">1</td><td className="py-2 px-3">17725.13</td></tr>
                <tr className="border-b"><td className="py-2 px-3">11</td><td className="py-2 px-3">Cricket Net Court</td><td className="py-2 px-3">2</td><td className="py-2 px-3">306</td></tr>
                <tr className="border-b"><td className="py-2 px-3">12</td><td className="py-2 px-3">Facilities for Athletics</td><td className="py-2 px-3">3</td><td className="py-2 px-3">3920</td></tr>
                <tr className="border-b"><td className="py-2 px-3">13</td><td className="py-2 px-3">Indoor Games</td><td className="py-2 px-3">1</td><td className="py-2 px-3">5300</td></tr>
                <tr className="font-bold bg-[#e6f0fa]"><td className="py-2 px-3" colSpan={3}>Total Area in Sq.m</td><td className="py-2 px-3">37300.93</td></tr>
              </tbody>
            </table>
          </div>
          {/* Gymnasium Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Gymnasium</h3>
            <p className="text-gray-700 mb-2">Well-furnished gyms are built on campus with separate time schedules for boys and girls. The gyms are well equipped with modern instruments like treadmills, bicycles, squat racks, barbells, pulleys, dumbbells, pull-ups, leg-extension, leg curls, etc. Every day, the gym facilities are used by an average of 100 students.</p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Name of the Facility</th>
                    <th className="py-2 px-3 text-left">No. of Facilities</th>
                    <th className="py-2 px-3 text-left">Area (Sq.m)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Gymnasium (Boys and Girls)</td><td className="py-2 px-3">2</td><td className="py-2 px-3">120</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Open Gymnasium</td><td className="py-2 px-3">1</td><td className="py-2 px-3">500</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Gym Equipment Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Equipments in Gymnasium</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Name of the Facility</th>
                    <th className="py-2 px-3 text-left">No.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Shoulder Single Machine</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Butterfly</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Squad Bench</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Function Trainer</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Chest Bench</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Bypass bench</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Abdominal Bench</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">Floor Abdominal</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">Twister</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">10</td><td className="py-2 px-3">Eight Stations</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">11</td><td className="py-2 px-3">Dumbbell s stand</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">12</td><td className="py-2 px-3">Z Rod</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">13</td><td className="py-2 px-3">Plates-Iron</td><td className="py-2 px-3">16</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">14</td><td className="py-2 px-3">Plates-Steel</td><td className="py-2 px-3">10</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">15</td><td className="py-2 px-3">Plates- Rubber</td><td className="py-2 px-3">12</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">16</td><td className="py-2 px-3">Dumbbell-Iron</td><td className="py-2 px-3">20</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">17</td><td className="py-2 px-3">Flat Bench</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">18</td><td className="py-2 px-3">Weight Lifting Stand</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">19</td><td className="py-2 px-3">Lots Bench</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">20</td><td className="py-2 px-3">Kickboxing</td><td className="py-2 px-3">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Open Gym Equipment Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Equipments in Open Gymnasium</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Name of the Facility</th>
                    <th className="py-2 px-3 text-left">No.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Arm Puller</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Double Air Walker</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Abdominal Boards</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Fitness Walker</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Arm Wheel</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">Elliptical Trainer</td><td className="py-2 px-3">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Facilities for Cultural Activities & Yoga */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Facilities for Cultural Activities & Yoga</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Facilities for Cultural</th>
                    <th className="py-2 px-3 text-left">No.</th>
                    <th className="py-2 px-3 text-left">Seating Capacity</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Cultural Club</td><td className="py-2 px-3">1</td><td className="py-2 px-3">67 Sq.m</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Yoga Center</td><td className="py-2 px-3">1</td><td className="py-2 px-3">67 Sq.m</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Auditoriums (Multi Purpose)</td><td className="py-2 px-3">2</td><td className="py-2 px-3">600 & 4000</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Open Auditoriums (Multi Purpose)</td><td className="py-2 px-3">2</td><td className="py-2 px-3">1000</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Seminar Halls (Multi Purpose)</td><td className="py-2 px-3">3</td><td className="py-2 px-3">220</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Facilities Available in Cultural Club */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Facilities Available in Cultural Club</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Name of Instrument</th>
                    <th className="py-2 px-3 text-left">No.</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">Yamaha PSR 1500 Keyboard</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">Cort Electric Acoustic Guitar</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">Fender Electric Guitar</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">Tama Drum Kit</td><td className="py-2 px-3">1</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">Mikes cordless</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">10000W Speakers</td><td className="py-2 px-3">2</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">Sound Mixer and Accessories</td><td className="py-2 px-3">1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Other Facilities Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Other Facilities</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">S.No</th>
                    <th className="py-2 px-3 text-left">Location/ Room No.</th>
                    <th className="py-2 px-3 text-left">Name of the Lab</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">1</td><td className="py-2 px-3">H-05</td><td className="py-2 px-3">Creche Room</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">2</td><td className="py-2 px-3">H-06</td><td className="py-2 px-3">Health Center</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">3</td><td className="py-2 px-3">H-13</td><td className="py-2 px-3">Boys Common Room</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">4</td><td className="py-2 px-3">H-14</td><td className="py-2 px-3">Cultural Club</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">5</td><td className="py-2 px-3">H-15</td><td className="py-2 px-3">Girls Common Room</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">6</td><td className="py-2 px-3">H-19</td><td className="py-2 px-3">SAC Room</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">7</td><td className="py-2 px-3">OD</td><td className="py-2 px-3">Canteen</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">8</td><td className="py-2 px-3">OD</td><td className="py-2 px-3">Cafeteria</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">9</td><td className="py-2 px-3">E-01</td><td className="py-2 px-3">General Store</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">10</td><td className="py-2 px-3">D-Block</td><td className="py-2 px-3">Lift</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">11</td><td className="py-2 px-3">DF-01</td><td className="py-2 px-3">Room for Housekeeping Tools</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">12</td><td className="py-2 px-3">Main Gate</td><td className="py-2 px-3">Security Room</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">13</td><td className="py-2 px-3">G-41&OD</td><td className="py-2 px-3">Auditoriums</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">14</td><td className="py-2 px-3">OD</td><td className="py-2 px-3">Temple</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">15</td><td className="py-2 px-3">OD</td><td className="py-2 px-3">ATM</td></tr>
                  <tr className="border-b"><td className="py-2 px-3">16</td><td className="py-2 px-3">OD</td><td className="py-2 px-3">Parking Facility</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Parking Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0077B5] mb-2">Parking</h3>
            <p className="text-gray-700 mb-2">The college provides adequate parking facilities for college buses as well as personalized vehicles of staff and students within the campus. The parking area details are presented in the table.</p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white rounded-xl shadow text-sm">
                <thead>
                  <tr className="bg-[#0077B5] text-white">
                    <th className="py-2 px-3 text-left">Mode of Transportation</th>
                    <th className="py-2 px-3 text-left">Buses</th>
                    <th className="py-2 px-3 text-left">Cars</th>
                    <th className="py-2 px-3 text-left">Motorcycle</th>
                    <th className="py-2 px-3 text-left">Bicycles</th>
                    <th className="py-2 px-3 text-left">Parking Area (Sq.m)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b"><td className="py-2 px-3">Parking</td><td className="py-2 px-3">8000</td><td className="py-2 px-3">1080</td><td className="py-2 px-3">4400</td><td className="py-2 px-3">517</td><td className="py-2 px-3">-</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollWrapper>
=======
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const colorVars = {
  primary: "#1F7A6B",
  secondary: "#2D8F6F",
  accent: "#4A90E2",
  orange: "#D4A574",
  dark: "#333333",
  lightGray: "#6B7280",
  bgLight: "#F8FAFC",
  white: "#FFFFFF",
};

const campuses = [
  { name: "Bengaluru", image: "/image1.jpg", desc: "Modern infrastructure, vibrant student life." },
  { name: "Hyderabad", image: "/image2.jpg", desc: "Innovation and research hub." },
  { name: "Visakhapatnam", image: "/image3.jpg", desc: "Flagship campus with world-class facilities." },
  { name: "GIMSR", image: "/image4.jpg", desc: "Medical sciences and healthcare excellence." },
];

const programs = [
  { title: "B.Tech Computer Science", desc: "Cutting-edge curriculum with industry exposure." },
  { title: "B.A. Economics", desc: "Solid foundation in economic theory and applications." },
  { title: "BBA Management", desc: "Leadership and business skills for tomorrow." },
  { title: "B.Sc. Life Sciences", desc: "Hands-on research and modern labs." },
  { title: "B.A. Psychology", desc: "Understanding human behavior and mental health." },
  { title: "B.Com (Hons)", desc: "Comprehensive commerce and finance education." },
];

const facilityTabs = [
  {
    label: "Classrooms",
    image: "/classroom.jpg",
    desc: "A total of 82 classrooms (avg. 110 sq. m.), all well-equipped with ICT facilities. 30% have smart boards.",
    number: 82,
  },
  {
    label: "Labs",
    image: "/lab.jpg",
    desc: "108 well-equipped laboratories, with state-of-the-art equipment worth Rs 620 lakhs.",
    number: 108,
  },
  {
    label: "Research Centre",
    image: "/research.jpg",
    desc: "Four research laboratories worth more than 500 lakhs to carry out interdisciplinary research.",
    number: 4,
  },
  {
    label: "Seminar Halls",
    image: "/seminar.jpg",
    desc: "8 seminar halls fully equipped with smart board facilities.",
    number: 8,
  },
];

export default function InfrastructurePage() {
  const [activeCampus, setActiveCampus] = useState(0);
  const [activeProgramTab, setActiveProgramTab] = useState(0);
  const programTabs = ["Undergraduate", "Postgraduate", "Ph.D."];
  const [activeFacility, setActiveFacility] = useState(0);

  return (
    <>
      <Head>
        <title>Life @Vignan Institute of Information Technology</title>
        <meta name="description" content="Vignan Institute of Information Technology - Premier educational institution with campuses in Visakhapatnam" />
        <meta name="keywords" content="Vignan Institute of Information Technology, education, engineering, management, medical" />
        <meta property="og:title" content="Life at Vignan Institute of Information Technology" />
        <meta property="og:description" content="Discover student life, academics, and opportunities at Vignan Institute of Information Technology" />
        <meta property="og:image" content="/gitam-campus-social.jpg" />
      </Head>
      <main className="bg-[#F8FAFC] min-h-screen font-[Inter,Poppins,sans-serif]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl mb-12 max-w-7xl mx-auto mt-8"
        >
          <Image
            src="/Gemini_Generated_Image_zcysuzzcysuzzcys.png"
            alt="Life at GITAM"
            width={1200}
            height={400}
            className="object-cover w-full h-96"
            priority
          />
          <div className="absolute top-1 left-1 bg-white px-6 py-3 rounded-full shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold" style={{ color: colorVars.primary }}>
              Life @Vignan Institute of Information Technology
            </h1>
          </div>
        </motion.section>

        {/* Teaching – Learning Facilities Section */}
        <motion.section
          className="teaching-facilities-section py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            Teaching – Learning Facilities
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Institute provides support for developing students' learning knowledge and skills. Enhance learning supports and improves learning performance through creating a learner-centered learning environment with more learning opportunities.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white rounded-xl shadow text-base">
              <thead>
                <tr className="bg-[#1F7A6B] text-white">
                  <th className="py-2 px-4 text-left">S.No</th>
                  <th className="py-2 px-4 text-left">Type of Facility</th>
                  <th className="py-2 px-4 text-left">Numbers</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b"><td className="py-2 px-4">1.</td><td className="py-2 px-4">Classrooms</td><td className="py-2 px-4">82</td></tr>
                <tr className="border-b"><td className="py-2 px-4">2.</td><td className="py-2 px-4">Laboratories</td><td className="py-2 px-4">108</td></tr>
                <tr className="border-b"><td className="py-2 px-4">3.</td><td className="py-2 px-4">Research Laboratories</td><td className="py-2 px-4">04</td></tr>
                <tr><td className="py-2 px-4">4.</td><td className="py-2 px-4">Seminar Halls</td><td className="py-2 px-4">08</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Classrooms</h3>
              <p className="text-gray-700">A total of 82 classrooms (avg. 110 sq. m.), all well-equipped with ICT facilities. 30% have smart boards to support various teaching and learning methodologies.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Laboratories</h3>
              <p className="text-gray-700">108 well-equipped laboratories, with state-of-the-art equipment worth Rs 620 lakhs.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Research Laboratories</h3>
              <p className="text-gray-700">Four research laboratories worth more than 500 lakhs to carry out interdisciplinary research.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">AICTE Idea Lab</h3>
              <p className="text-gray-700">AICTE-sponsored Idea Lab established at a cost of Rs 194 lakhs to foster creativity and innovation.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Video Recording Rooms</h3>
              <p className="text-gray-700">Established four video recording rooms with smart boards and glass boards for high-quality content creation and online learning.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Infrastructure and Facilities Tabbed Section */}
        <section className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            Infrastructure and Facilities
          </h2>
          <div className="flex space-x-8 border-b border-gray-200 mb-8">
            {facilityTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`pb-2 font-semibold transition-all ${
                  idx === activeFacility
                    ? 'text-[#1F7A6B] border-b-2 border-[#1F7A6B]'
                    : 'text-gray-600 hover:text-[#1F7A6B]'
                }`}
                onClick={() => setActiveFacility(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={facilityTabs[activeFacility].image}
              alt={facilityTabs[activeFacility].label}
              width={400}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#1F7A6B]">{facilityTabs[activeFacility].label}</h3>
              <p className="text-gray-700 mb-2">{facilityTabs[activeFacility].desc}</p>
              <span className="inline-block bg-[#1F7A6B] text-white px-4 py-2 rounded-full font-bold">
                {facilityTabs[activeFacility].number} {facilityTabs[activeFacility].label}
              </span>
            </div>
          </div>
        </section>

        {/* ICT Enabled Facilities Section */}
        <motion.section
          className="ict-facilities-section py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            ICT Enabled Facilities
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            ICT enabled facilities enhance the effectiveness of teaching and learning processes. ICT enabled classrooms include smart boards, computers, projectors, speakers integrated with learning management systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">ICT Classrooms</h3>
              <p className="text-gray-700">All 82 classrooms are well-equipped with ICT facilities, including 30 smart boards and 52 LCD projectors.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Seminar Halls</h3>
              <p className="text-gray-700">8 seminar halls fully equipped with smart board facilities.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Learning Management System</h3>
              <p className="text-gray-700">Adopted <span className="font-semibold">Moodle</span> as the Learning Management System for seamless digital learning.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Campus Navigation Tabs */}
        <nav className="flex space-x-8 border-b border-gray-200 mb-12 max-w-4xl mx-auto" aria-label="Campus Navigation">
          {campuses.map((campus, idx) => (
            <button
              key={campus.name}
              className={`pb-2 font-semibold transition-all ${
                idx === activeCampus
                  ? 'text-[#1F7A6B] border-b-2 border-[#1F7A6B]'
                  : 'text-gray-600 hover:text-[#1F7A6B]'
              }`}
              onClick={() => setActiveCampus(idx)}
              aria-current={idx === activeCampus ? "page" : undefined}
            >
              {campus.name}
            </button>
          ))}
        </nav>

        {/* Experience Section with Side Image */}
        <motion.section
          className="experience-section py-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="content"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
                Experience {campuses[activeCampus].name}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {campuses[activeCampus].desc} Our {campuses[activeCampus].name} campus offers modern infrastructure, dedicated faculty, and a vibrant student community.
              </p>
            </motion.div>
            <motion.div
              className="image-container"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={campuses[activeCampus].image}
                alt={`${campuses[activeCampus].name} Campus`}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Programs Section with Cards */}
        <motion.section
          className="programs-section py-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-8" style={{ color: colorVars.primary }}>
            Top Programmes at {campuses[activeCampus].name}
          </h2>
          <div className="tabs mb-8 flex gap-8">
            {programTabs.map((tab, idx) => (
              <button
                key={tab}
                className={`underline decoration-2 underline-offset-4 font-medium transition-all ${
                  idx === activeProgramTab ? 'text-[#1F7A6B]' : 'text-gray-600'
                }`}
                onClick={() => setActiveProgramTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="programs-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                className="program-card bg-white rounded-xl shadow-lg p-6 card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * i }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center text-[#1F7A6B]">
                  {prog.title}
                  <ArrowUpRight className="inline-block w-5 h-5 ml-2" />
                </h3>
                <p className="text-gray-700">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </>
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
  );
} 