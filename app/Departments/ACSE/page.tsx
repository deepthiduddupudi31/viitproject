'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

export default function CivilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Header Banner */}
      <div className="max-w-screen-xl mx-auto text-white flex items-center p-4">
        <img
          src="https://vignaniit.edu.in/images/WEB_01.jpg"
          alt="Banner"
          className="w-full h-32 object-cover rounded-lg shadow-lg"
        />
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-4 left-4 bg-blue-900 text-white p-2 rounded z-50"
        >
          ☰
        </button>
      </div>

      {/* Layout below navbar */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="p-6 flex-1 bg-white">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 ">ABOUT DEPT</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Department of Advanced Computer Science and Engineering at the Vignan’s Institute of Information Technology, Visakhapatnam...
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-2">HoD's Message</h3>
          <p className="text-gray-700 leading-relaxed">
            A warm welcome to ACSE@Vignan’s Institute of Information Technology……..
            <br />
            • Computer Science and Engineering...<br />
            • Computer Systems and Software...<br />
            • Intelligent Systems...
          </p>

          <div className="w-[90%] md:w-[50%] lg:w-[30%] mx-auto relative mt-6">
            <img
              src="https://vignaniit.edu.in/images/acse_hod1.jpeg"
              alt="HOD"
              className="w-full h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="text-center mt-2 font-semibold">HOD - ACSE</p>
          </div>
        </main>
      </div>
    </div>
  );
}
