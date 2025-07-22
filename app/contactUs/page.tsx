"use client";

import React from "react";

export default function ContactUs() {
  const quickLinks = [
    { name: "AICTE", url: "https://www.aicte-india.org/" },
    { name: "UGC e-samadhaan", url: "https://samadhaan.ugc.ac.in/" },
    { name: "JNTUK", url: "https://www.jntuk.edu.in/" },
    { name: "ARIIA", url: "https://ariia.gov.in/" },
    { name: "AISHE", url: "https://aishe.gov.in/aishe/home" },
    { name: "IQAC", url: "https://vignaniit.edu.in/iqac" },
    { name: "NBA", url: "https://www.nbaind.org/" },
    { name: "NAAC", url: "https://www.naac.gov.in/" },
    { name: "NIRF", url: "https://www.nirfindia.org/" },
    { name: "MHRD-ICT", url: "https://mhrd.gov.in/ict-initiatives" },
    { name: "Alumni", url: "https://vignaniit.edu.in/alumni" },
    { name: "NAD", url: "https://nad.gov.in/" },
    { name: "Screen Reader Access", url: "#" },
  ];

  return (
    <div className="mt-40 min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">
        Contact Us
      </h1>

      {/* Contact Info */}
      <section className="bg-white shadow-md rounded-xl p-6 w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          VIGNAN INSTITUTE OF INFORMATION TECHNOLOGY
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Besides VSEZ, Duvvada, Vadlapudi Post, Gajuwaka
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Visakhapatnam - 530049, A.P., India
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Phone:</strong> 0891 - 27 55 222 / 333 / 444 / 555
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:vignaniit@yahoo.com"
            className="text-blue-700 hover:underline"
          >
            vignaniit@yahoo.com
          </a>{" "}
          /{" "}
          <a
            href="mailto:principal@vignaniit.edu.in"
            className="text-blue-700 hover:underline"
          >
            principal@vignaniit.edu.in
          </a>
        </p>
      </section>

      {/* Google Map */}
      <section className="bg-white shadow-md rounded-xl p-6 w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            title="VIIT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.95678422848!2d83.17567667490244!3d17.65830499598399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bdbd191868b%3A0x2ff1e05a7b8d80f1!2sVignan&#39;s%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
