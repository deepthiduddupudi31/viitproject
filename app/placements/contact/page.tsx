import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Info, UserCircle } from 'lucide-react';

// Contact person's details
const contactPerson = {
  name: "Dr. B. Prasad",
  position: "Dean - Training & Placements, Internships",
  phone: "9866399942",
  email: "dean_tp@vignaniit.edu.in",
};

// Background verification email
const bgvEmail = "vignaniit@yahoo.com";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-2xl w-full space-y-12">
        
        {/* --- Header --- */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Contact our Training & Placements team for any inquiries.
          </p>
        </div>

        {/* --- Main Contact Card --- */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
            <div className="relative w-40 h-40 rounded-full bg-gray-100 flex-shrink-0">
              <Image
                src="/Dean.jpg" 
                alt="Dr. B. Prasad"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div className="mt-6 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-bold text-gray-900">{contactPerson.name}</h2>
              <p className="mt-1 text-md font-medium text-blue-600">{contactPerson.position}</p>
              
              <div className="mt-6 space-y-4">
                <a 
                  href={`tel:${contactPerson.phone}`} 
                  className="flex items-center justify-center sm:justify-start text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{contactPerson.phone}</span>
                </a>
                <a 
                  href={`mailto:${contactPerson.email}`} 
                  className="flex items-center justify-center sm:justify-start text-gray-700 hover:text-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-gray-400" />
                  <span>{contactPerson.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Background Verification Note --- */}
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Background Verifications (BGVs)</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  For all background verification requests, please send an email to: <a href={`mailto:${bgvEmail}`} className="font-medium underline hover:text-blue-900">{bgvEmail}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
