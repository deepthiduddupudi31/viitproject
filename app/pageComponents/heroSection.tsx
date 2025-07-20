"use client"
import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
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
    type: 'image',
    src: 'image1.jpg',
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
    <section className="relative h-screen overflow-hidden ">
      <div className="w-full h-full overflow-hidden relative mt-36">
        <div
          className="bg-black flex h-full transition-transform duration-1000 ease-in-out"
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative w-full h-full "
              style={{ width: `${100 / slides.length}%` }}
            >
              <a href={s.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full">
                  {s.type === 'image' ? (
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
    </section>
  )
}