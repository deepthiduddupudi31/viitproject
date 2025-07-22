import React from 'react';
import Image from 'next/image';

const AdmissionsPage = () => {
  return (
    <main className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="max-w-3xl mb-12">
          <div className="p-2 border-4 border-blue-900 shadow-lg rounded-md">
            <Image
              src="/addmissionproduce.jpg" 
              alt="Vignan's Institute Admission Statistics"
              width={1200}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* --- Main Content Section --- */}
        <div className="space-y-8 text-gray-800">
          
          <div>
            <h1 className="text-3xl font-bold text-blue-800 uppercase mb-4">
              Admissions Procedure
            </h1>
            <p className="text-lg leading-relaxed">
              Vignan’s Institute of Information Technology (VIIT) was established in the year 2002 in the City of Destiny and is promoted by Visionary Dr. Lavu Rathaiah, Chairman of LES, Guntur, Andhra Pradesh. Approved by AICTE and affiliated with JNTU-GV, VIIT began with 4 UG programs in 2002 and now offers 11 UG and 10 PG programs with 2346 annual intake (Academic Year: 2024-25).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 uppercase mb-4">
              Admission Policy
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-3 text-lg leading-relaxed">
              <li>To ensure admission of students based on their performance in the entrance examinations, identifying their academic competence and potentialities of high quality.</li>
              <li>To promote and maintain multicultural ethos and cosmopolitan feel by admitting students from diverse ethnic, linguistic backgrounds with special emphasis on encouraging students from different socio-economic sections.</li>
              <li>In tune with the admission policy of the Institution, top most priority is being given to merit in student admission.</li>
              <li>To decide policy matters on admission and to oversee the admission process, a separate “Admissions Cell” is constituted.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 uppercase mb-4">
              Admission Notification
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Category-A</h3>
                <p className="mt-1 text-lg leading-relaxed">
                  Andhra Pradesh State Council of Higher Education (APSCHE) conducts common entrance examinations. Based on performance, 70% of seats under Category-A are allocated through counseling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Category-B</h3>
                <p className="mt-1 text-lg leading-relaxed">
                  The Institution releases a separate notification for the remaining 30% of seats under Category-B, with wide publicity given through national daily newspapers.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-blue-800 uppercase mb-4">
              Detailed Admission Procedure
            </h2>
            <div className="space-y-4">
              <div>
                  <h3 className="text-xl font-semibold text-gray-900">Category-A (70% of Seats)</h3>
                  <p className="mt-1 text-lg leading-relaxed">
                    Seats are filled by the competent authority based on performance in entrance exams like APEAMCET (UG), APECET (Lateral Entry), APICET (MBA/MCA), and APPGECET (M.Tech).
                  </p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold text-gray-900">Category-B (30% of Seats)</h3>
                  <p className="mt-1 text-lg leading-relaxed">
                    The Institute fills these seats based on guidelines from APSCHE. Applications are invited, and candidates are shortlisted based on performance in qualifying exams. After certificate verification and fee payment, the seat is allotted.
                  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default AdmissionsPage;
