"use client"
<<<<<<< HEAD
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react"
=======
import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
import Image from "next/image"

const slides = [
  {
<<<<<<< HEAD
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
    <section className="relative w-full bg-light-bg flex items-center">
      
      <div className="absolute inset-0 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] opacity-50"></div>

      <div className="relative container mx-auto h-full flex items-center px-6 pt-10 pb-10 lg:py-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-1 items-center gap-x-12 gap-y-16">
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
=======
    type: "image",
    src: "/naac.jpg",
    link: "#",
  },
  {
    type: "image",
    src: "/image5.jpg",
    link: "#",
  },
  {
    type: "image",
    src: "image4.jpg",
    link: "#",
  },
  {
    type: "image",
    src: "image1.jpg",
    link: "#",
  },
]

export default function Section1() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length)
    resetInterval()
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    startAutoSlide()
  }

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="bg-black flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${index * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative w-full h-full"
              style={{ width: `${100 / slides.length}%` }}
            >
              <a href={s.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full">
                  {s.type === "image" ? (
                    <Image
                      src={s.src}
                      alt={`Slide ${i}`}
                      fill
                      className="w-full h-full object-contain lg:object-cover"
                      priority={i === 0}
                    />
                  ) : (
                    <video autoPlay loop muted className="w-full h-full object-cover">
                      <source src={s.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              resetInterval()
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
    </section>
  )
}
