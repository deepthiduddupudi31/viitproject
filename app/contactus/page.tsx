'use client';
import React from 'react'

// components/ContactUs.js
export default function ContactUs() {
  return (
    <div className="text-center p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">CONTACT US</h2>
      <p className="text-gray-700 font-medium">
        VIGNAN INSTITUTE OF INFORMATION TECHNOLOGY
      </p>
      <p className="text-gray-600">
        Besides VSEZ, Duvvada, Vadlapudi Post, Gajuwaka<br />
        Visakhapatnam -530049, A.P., India
      </p>
      <p className="mt-2 text-gray-600">
        Phone: 0891 - 27 55 222 / 333 / 444 / 555
      </p>
      <p className="mt-1 text-gray-600">
        Email: <a href="mailto:vignaniit@yahoo.com" className="text-gray-600 underline">vignaniit@yahoo.com</a> / 
        <a href="mailto:principal@vignaniit.edu.in" className="text-gray-600 underline"> principal@vignaniit.edu.in</a>
      </p>
    </div>
  );
}


