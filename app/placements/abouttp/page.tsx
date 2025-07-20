"use client"; // This directive is needed for the carousel hook

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, CheckCircle, Briefcase, Building, TrendingUp, User } from "lucide-react";

const bannerImages = [
  "/placement1.jpeg",
  "/placement2.jpeg",
  "/placement4.jpeg",
];

// Stats are taken from the 2020-24 batch banner
const placementStats = [
  {
    icon: <TrendingUp className="w-10 h-10 text-linkedin" />,
    value: "50 LPA",
    label: "Highest Package (Amazon)",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-linkedin" />,
    value: "1531+",
    label: "Placements So Far (2024 Batch)",
  },
  {
    icon: <Building className="w-10 h-10 text-linkedin" />,
    value: "179+",
    label: "Companies Visited (2024 Batch)",
  },
];

const objectives = [
  "Provide ample opportunities for placement of students to achieve cent percent placements.",
  "Manage Centralized Placement activities for all courses.",
  "Organize campus recruitment with National and Multinational Companies.",
  "Prepare students for recruitments through professional training in Aptitude, GD, and interviews.",
  "Promote career counseling by organizing guest lectures with corporate personnel and alumni.",
];

export default function PlacementsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Image Carousel Section --- */}
      {/* Added 'mt-16' to create space at the top */}
      <section className="relative w-full ">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {bannerImages.map((src, index) => (
              <div className="relative flex-[0_0_90%]" key={index}>
                <Image
                  src={src}
                  alt={`Placement Banner ${index + 1}`}
                  width={1920}
                  height={700}
                  className="w-full object-contain"
                  priority={index === 0} // Prioritize loading the first image
                />
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </section>

      {/* --- Key Statistics Section --- */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
                {stat.icon}
                <div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About T&P Cell Section --- */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-linkedin mb-4">
              Career Guidance, Training & Placement Cell (CGTPC)
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              The central hub for career development and industry connections at VIIT.
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-4 mb-12">
            <p>
              Considering the large number of students pursuing various courses from Vignan's Institute of Information Technology, Visakhapatnam, the Career Guidance, Training & Placement Cell (CGTPC) has been constituted to cater to the needs of leading organizations in conducting campus interviews for final year students.
            </p>
            <p>
              It is headed by Training and Placement officers and supported by department placement coordinators and student representatives. The cell provides the best arrangements and hospitality for visiting HR teams. Through this cell, programs on Communication Development, Technical Aptitude, General Aptitude, Personality Development, and more are provided by expert professionals to prepare students for a competitive world.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Objectives of the Department</h2>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Dean's Profile Section --- */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 rounded-full bg-gray-200 flex-shrink-0">
                {/* NOTE: Replace this placeholder with the actual photo of the Dean */}
                <Image
                  src="/Dean.jpg" 
                  alt="Dr. B. Prasad"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-linkedin">Dr. B. Prasad</h3>
              <p className="text-lg text-gray-600 font-medium">Dean - Training and Placements</p>
              <p className="mt-4 text-gray-700 italic">
                "Our goal is to not just secure placements, but to launch careers. We are committed to empowering every student with the skills and opportunities they need to succeed in the global marketplace."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
