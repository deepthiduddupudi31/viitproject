"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    src: "/naac.jpg",
    alt: "NAAC A+ Grade Accreditation at VIIT",
  },
  {
    src: "/image4.jpg",
    alt: "Students engaged in hands-on learning at VIIT",
  },
  {
    src: "/image5.jpeg",
    alt: "A tech conference hosted at VIIT, Visakhapatnam",
  },
]

const stats = [
  {
    icon: <Award size={24} className="text-vignan-blue" />,
    value: "A+ Grade",
    label: "NAAC Accredited",
  },
  {
    icon: <TrendingUp size={24} className="text-vignan-blue" />,
    value: "Top 201-300",
    label: "NIRF (Engg.)",
  },
  {
    icon: <Users size={24} className="text-vignan-blue" />,
    value: "Autonomous",
    label: "UGC Status",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <section className="relative w-full bg-light-bg min-h-screen flex items-center lg:mt-[-100px] overflow-hidden">
      
      <div className="absolute inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] opacity-50"></div>

      <div className="relative container mx-auto h-full flex items-center px-6 pt-28 pb-16 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12 gap-y-16">
          
          <motion.div
            className="flex flex-col lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-navy-text">
              Engineer the Future.
              <br />
              <span className="text-vignan-blue">Innovate with Purpose.</span>
            </h1>
            <p className="mt-5 text-base lg:text-lg max-w-lg text-slate-text leading-relaxed">
              At VIIT, we cultivate the next generation of pioneers who will lead, create, and solve the challenges of tomorrow.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 text-left max-w-md">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  {stat.icon}
                  <p className="text-lg font-bold text-navy-text mt-2">{stat.value}</p>
                  <p className="text-xs text-slate-text uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a href="/admissions" className="bg-vignan-blue text-white font-semibold py-3 px-6 rounded-lg text-center shadow-lg shadow-vignan-blue/30 hover:bg-opacity-90 transition-all" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                Apply Now
              </motion.a>
              <motion.a href="/about" className="bg-white text-navy-text font-semibold py-3 px-6 rounded-lg text-center border border-slate-200 hover:border-slate-300 transition-colors" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                Explore Programs
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full aspect-[33/15] rounded-xl shadow-2xl shadow-slate-30/5 overflow-hidden lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence>
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 right-4 flex gap-3 z-10">
              <button onClick={prevSlide} className="w-11 h-11 flex items-center justify-center bg-white/70 hover:bg-white backdrop-blur-sm text-navy-text rounded-full transition-all">
                <ChevronLeft size={22} />
              </button>
              <button onClick={nextSlide} className="w-11 h-11 flex items-center justify-center bg-white/70 hover:bg-white backdrop-blur-sm text-navy-text rounded-full transition-all">
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
