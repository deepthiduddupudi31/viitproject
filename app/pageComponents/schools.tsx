"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Data remains the same
const departments = [
  { 
    name: "Computer Science & Engineering", 
    path: "/Departments/CSE",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Artificial Intelligence & DataScience", 
    path: "/Departments/AIDS",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Electronics & Communication Engineering", 
    path: "/Departments/ECE",
    image: "https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Electrical & Electronics Engg.", 
    path: "/Departments/EEE",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Mechanical Engineering", 
    path: "/Departments/ME",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Civil Engineering", 
    path: "/Departments/Civil",
    image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  { 
    name: "Management Studies (MBA)", 
    path: "/Departments/MBA",
    image: "https://images.pexels.com/photos/6457522/pexels-photo-6457522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

export default function DepartmentsSection() {
  // State for desktop hover interaction
  const [activeDepartmentIndex, setActiveDepartmentIndex] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const nextMobileSlide = () => {
    setMobileSlide((prev) => (prev + 1) % departments.length);
  };

  const prevMobileSlide = () => {
    setMobileSlide((prev) => (prev - 1 + departments.length) % departments.length);
  };

  return (
    <section className="w-full bg-vignan-blue text-white py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter">
            Explore Our Academic Departments
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            Our departments are dedicated to preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world.
          </p>
        </motion.div>

        {/* --- Desktop Layout: Interactive List (No changes here) --- */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          <motion.div 
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {departments.map((dept, index) => (
              <Link
                key={dept.name}
                href={dept.path}
                onMouseEnter={() => setActiveDepartmentIndex(index)}
                className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeDepartmentIndex === index ? 'bg-white/10 shadow-lg' : 'hover:bg-white/5'}`}
              >
                <span className={`font-semibold text-lg transition-colors ${activeDepartmentIndex === index ? 'text-white' : 'text-blue-100'}`}>
                  {dept.name}
                </span>
                <ArrowRight className={`transition-all duration-300 ${activeDepartmentIndex === index ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-2'}`} size={20} />
              </Link>
            ))}
          </motion.div>
          
          <motion.div 
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatePresence>
              <motion.div
                key={activeDepartmentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={departments[activeDepartmentIndex].image} alt={departments[activeDepartmentIndex].name} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* --- NEW Mobile Layout: Side Slider --- */}
        <div className="relative lg:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${mobileSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              {departments.map((dept) => (
                <div key={dept.name} className="w-full flex-shrink-0 px-2">
                  <Link href={dept.path} className="block group rounded-xl overflow-hidden shadow-lg hover:shadow-black/40 transition-shadow">
                    <div className="relative w-full aspect-video">
                      <Image src={dept.image} alt={dept.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="bg-white/10 p-4">
                      <h3 className="font-bold text-white text-base leading-tight">
                        {dept.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-blue-200 mt-2">
                        <span>Explore</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows for Mobile Slider */}
          <button onClick={prevMobileSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextMobileSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators for Mobile Slider */}
          <div className="flex justify-center gap-2 mt-6">
            {departments.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  mobileSlide === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
=======
import { useState, useEffect } from "react";

const schools = [
  {
    name: "Department of Computer Science and Engineering",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "Department of Mechanical Engineering",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "Department of Advanced Sciences",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "Department of Social Sciences and Humanities",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "Department of Law",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "Department of Business",
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
            <h2 className="text-5xl font-bold text-white mb-6">Departments</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              At VIIT the entire teaching-learning process is concentrated around seven departments for preparing
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
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
