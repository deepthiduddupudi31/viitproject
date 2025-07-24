"use client";

import Image from "next/image";
import Link from "next/link";
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
          </div>
        </div>
      </div>
    </section>
  );
}
