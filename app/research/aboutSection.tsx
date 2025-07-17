'use client';
import React from 'react'
import Link from "next/link"
const aboutSection = () => {
  return (
    <section className="py-16 px-8 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    {/* Embedded YouTube Video */}
    <div className="w-full">
      <div className="aspect-w-16 aspect-h-9">
      <section className="px-4 py-10 sm:px-6 lg:px-16 bg-gray-100">
  <h2 className="text-3xl font-semibold text-center mb-8">Watch Campus Video</h2>

  <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
    <div className="relative aspect-[30/16] w-full">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/DqCDVElxaL8"
        title="VIT-AP Campus Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

      </div>
      <p className="mt-6 text-gray-800 leading-relaxed text-justify text-lg">
        <span className="text-4xl text-red-800 font-serif font-bold float-left mr-2">V</span>
        IT has been a forerunner in delivering quality education. Consistently ranked among the top educational
        institutes in the country, the VIT group of institutions have had a proud tradition of pursuing knowledge
        and excellence. In keeping with this tradition, the leadership at VIT-AP resonates a dynamic blend of
        academic initiative and industry partnership with a vision of creating one of the finest academic
        destinations in the world.
      </p>
    </div>

    {/* Announcements */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-xl font-semibold text-red-800 mb-4">ANNOUNCEMENTS</h3>
      <div className="space-y-4 text-gray-800 text-sm">
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-06-04</p>
          <p>Integrated M.Tech.- 2025 Results & Choice filling</p>
        </div>
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-05-23</p>
          <p>VITREE-2025 (July Session)-Results</p>
        </div>
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-05-08</p>
          <p>VITMEE (M.Tech. 2025) Admission Results - Counselling & Choice filling</p>
        </div>
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-05-03</p>
          <p>VITEEE – 2025 Results</p>
        </div>
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-05-13</p>
          <p>Fresher's Fee Payment 2025</p>
        </div>
        <div className="border-b pb-3">
          <p className="text-gray-500">2025-02-17</p>
          <p>VIT-AP UG & PG (Non-Engg.) Online Applications - 2025</p>
        </div>
      </div>
      <div className="mt-6 text-right">
        <Link href="#" className="text-red-800 font-semibold hover:underline">
          View More
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default aboutSection
