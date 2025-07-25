"use client"; // This directive is needed for the carousel hook

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Banner images for the carousel
const bannerImages = [
  "/placement1.jpeg",
  "/placement2.jpeg",
  "/placement4.jpeg",
];

// Data for the placement details table
const placementData = [
  {
    year: "2024 - 2025*",
    totalStrength: 1647,
    studentsPlaced: 1215,
    higherEducation: 13,
    entrepreneurs: 0,
    placementPercentage: 75,
  },
  {
    year: "2023 - 2024",
    totalStrength: 1447,
    studentsPlaced: 1143,
    higherEducation: 19,
    entrepreneurs: 4,
    placementPercentage: 80.58,
  },
  {
    year: "2022 - 2023",
    totalStrength: 1296,
    studentsPlaced: 1104,
    higherEducation: 19,
    entrepreneurs: 6,
    placementPercentage: 87.11,
  },
  {
    year: "2021 - 2022",
    totalStrength: 1220,
    studentsPlaced: 1011,
    higherEducation: 40,
    entrepreneurs: 7,
    placementPercentage: 86.72,
  },
  {
    year: "2020 - 2021",
    totalStrength: 1268,
    studentsPlaced: 1051,
    higherEducation: 40,
    entrepreneurs: 8,
    placementPercentage: 86.67,
  },
];

export default function PlacementsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Image Carousel Section (UNCHANGED) --- */}
      <section className="relative w-full mt-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {bannerImages.map((src, index) => (
              <div className="relative flex-[0_0_60%] ml-4" key={index}>
                <Image
                  src={src}
                  alt={`Placement Banner ${index + 1}`}
                  width={1920}
                  height={700}
                  className="w-full object-contain rounded-lg"
                  priority={index === 0} 
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </section>

      {/* --- Placement Details Table Section (UPDATED LAYOUT) --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Placement Details
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              An overview of our placement success over the past five years.
            </p>
          </div>
          
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Academic Year
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Strength
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Students Placed
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Higher Education
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Entrepreneurs
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Placement %
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {placementData.map((item) => (
                        <tr key={item.year}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.year}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.totalStrength}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.studentsPlaced}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.higherEducation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.entrepreneurs}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.placementPercentage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-right text-sm text-gray-500">
            <p>* As on date</p>
          </div>
        </div>
      </section>
    </div>
  );
}
