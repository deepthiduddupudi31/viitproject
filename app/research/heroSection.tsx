"use client"
import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    type: "image",
    src: "/image5.jpeg",
    title: "CBN x VIIT ",
    subtitle: "V‑LaunchPad 2025 @ VIIT‑VIZAG ®",
    link: "#",
  },
  {
    type: "image",
    src: "/image5.jpg",
    title: "Explore Innovation",
    subtitle: "Empowering the Future at VIT‑AP",
    link: "#",
  },
  {
    type: "image",
    src: "image.png",
    link: "https://vitap.ac.in/ug-pg-admissions",
  },
  {
    type: 'video',
    src: '/VideoR.mp4',
    title: 'Welcome to VIIT ',
    subtitle: 'APPLY KNOWLEDGE, IMPROVE LIFE®',
    link: '#',
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
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative w-full h-full flex-shrink-0 flex-grow-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <a href={s.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full">
                  {s.type === 'image' ? (
                    <Image
                      src={s.src}
                      alt={s.title || `Slide ${i}`}
                      fill
                      className="w-full h-full object-contain"
                      priority={i === 0}
                    />
                  ) : (
                    <video autoPlay loop muted className="w-full h-full object-cover">
                      <source src={s.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              </a>
              {s.title && (
                <>
                  <div className="hidden lg:flex absolute z-20 top-[35vh] left-[10vw] w-[50vw] flex-col text-white">
                    <h1 className="text-[4vw] font-semibold leading-tight">
                      {s.title}
                    </h1>
                    <h2 className="text-xl font-medium">{s.subtitle}</h2>
                  </div>
                  <div className="lg:hidden absolute z-20 top-1/2 left-1/2 w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-[6.5vw] font-bold">{s.title}</h1>
                    <h2 className="text-[3.5vw]">{s.subtitle}</h2>
                  </div>
                </>
              )}
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
    </section>
  )
}
