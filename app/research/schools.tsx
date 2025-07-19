"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const schools = [
  {
    name: "School of Computer Science and Engineering",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Mechanical Engineering",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Advanced Sciences",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Social Sciences and Humanities",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Law",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Business",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
];

export default function SchoolsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSlides = isMobile ? schools.length : Math.ceil(schools.length / 3);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (slide) => {
    setCurrentSlide(slide);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative">
      {/* Background with pattern overlay */}
      <div 
        className="relative bg-blue-900-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Content container */}
        <div className="relative bg-linkedin z-10 px-6 py-16">
          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Schools</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              At VIIT the entire teaching-learning process is concentrated around seven schools for preparing
              students to make meaningful contributions to society as engaged citizens and leaders in a complex world.
            </p>
          </div>

          {/* Schools slider */}
          <div className="max-w-7xl mx-auto relative">
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-900 hover:scale-110"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {isMobile ? (
                  schools.map((school, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                      <div className="px-4 max-w-sm mx-auto">
                        <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20">
                          <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20">
                            <div className="aspect-[4/3] relative overflow-hidden">
                              <Image
                                src={school.image}
                                alt={school.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            </div>
                            
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                              <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
                                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                                  {school.name}
                                </h3>
                                <Link href={school.link}>
                                  <span className="inline-flex items-center text-white/90 text-sm hover:text-white transition-colors duration-200">
                                    Explore Now 
                                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  Array.from({ length: Math.ceil(schools.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {schools.slice(slideIndex * 3, slideIndex * 3 + 3).map((school, idx) => (
                          <div 
                            key={slideIndex * 3 + idx} 
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20"
                          >
                            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20">
                              <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                  src={school.image}
                                  alt={school.name}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                              </div>
                              
                              {/* Content overlay */}
                              <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
                                  <h3 className="text-white font-bold text-lg leading-tight mb-2">
                                    {school.name}
                                  </h3>
                                  <Link href={school.link}>
                                    <span className="inline-flex items-center text-white/90 text-sm hover:text-white transition-colors duration-200">
                                      Explore Now 
                                      <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}