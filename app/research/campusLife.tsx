"use client"

import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

const heroCards = [
  {
    href: "/campuslife",
    title: "Life @ VIT-AP",
    text: "Experience the vibrant heart of our campus life at VIT AP University.",
    image: "/image2.jpg",
    buttonText: "EXPLORE",
    large: true
  },
  {
    href: "/sports",
    title: "Sports",
    image: "/sport.avif"
  },
  {
    href: "/cafeteria",
    title: "Cafeteria",
    image: "/image1.jpg"
  }
]

const infoCards = [
  {
    titleLines: ["Explore", "The Vibrant", "Life At VIT-AP"],
    background: "#650010",
    imageCard: {
      href: "/library",
      title: "Library",
      image: "/image.png"
    }
  },
  {
    imageCard: {
      href: "/clubs-and-chapters",
      title: "Clubs & Chapters",
      image: "/image5.jpg"
    },
    titleLines: ["The", "Lively", "Unforgettable", "Experience"],
    background: "#650010",
    extraCard: {
      href: "/celebrations",
      title: "Celebrations",
      image: "/image5.jpg"
    },
    lastCard: {
      href: "/hostels",
      title: "Hostels",
      image: "/image5.jpg"
    }
  }
]

export default function CampusLifeSection() {
  return (
    <div className="w-full h-full">

      {/* Hero Section Cards */}
      <div className="w-full h-full hidden md:flex cursor-pointer overflow-hidden">
        {heroCards.map((card, idx) => (
          <a
            key={idx}
            href={card.href}
            className={clsx(
              "flex-1 w-full h-[300px] sm:h-[400px] xl:h-[600px] bg-center bg-no-repeat bg-cover flex flex-col items-start justify-end transition-all ease-in-out duration-300 hover:scale-105 overflow-hidden",
              card.large ? "p-[40px]" : "p-[10px] relative group"
            )}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${card.image}')`
            }}
          >
            {card.large ? (
              <>
                <div className="basis-1/2 flex w-full" />
                <div className="basis-1/2 flex flex-col items-start justify-end">
                  <p className="text-[36px] pb-[20px] lg:text-[48px] xl:text-[64px] font-Emilio font-bold text-white">
                    {card.title}
                  </p>
                  <p className="text-[14px] lg:text-[17px] xl:text-[20px] font-Montserrat text-[#FDFEFF] font-normal leading-6 pb-[20px]">
                    {card.text}
                  </p>
                  <span className="w-[100px] lg:w-[120px] xl:w-[180px] h-[40px] xl:h-[54px] flex items-center justify-center bg-white text-[#650010] hover:bg-[#650010] hover:text-white text-[14px] font-Montserrat font-medium transition duration-200 ease-in">
                    {card.buttonText}
                  </span>
                </div>
              </>
            ) : (
              <div className="absolute -bottom-96 group-hover:bottom-10 left-8 transition-all duration-300 ease-in-out">
                <h1 className="text-[20px] lg:text-[24px] xl:text-[32px] font-bold text-white font-Emilio">
                  {card.title}
                </h1>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Info Section Cards */}
      <div className="w-full h-full flex cursor-pointer flex-wrap">
        {infoCards.map((section, idx) => (
          <div key={idx} className="flex-1 h-[300px] sm:h-[400px] xl:h-[600px] w-full flex">
            <div className="w-full h-full flex-1 flex overflow-hidden flex-col">

              {/* Text block */}
              <div
                className="w-full h-full flex-1 flex flex-col items-start justify-center p-[25px]"
                style={{ backgroundColor: section.background }}
              >
                {section.titleLines.map((line, i) => (
                  <h1
                    key={i}
                    className="text-[20px] lg:text-[24px] xl:text-[38px] font-bold text-white font-Emilio"
                  >
                    {line}
                  </h1>
                ))}
              </div>

              {/* Image card */}
              {section.imageCard && (
                <a
                  href={section.imageCard.href}
                  className="w-full h-full flex-1 relative flex flex-col items-start justify-end p-[10px] bg-no-repeat bg-center bg-cover group transition-all ease-in-out duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url('${section.imageCard.image}')`
                  }}
                >
                  <div className="absolute -bottom-96 group-hover:bottom-6 left-8 transition-all duration-300 ease-in-out">
                    <h1 className="text-[20px] lg:text-[24px] xl:text-[32px] font-bold text-white font-Emilio">
                      {section.imageCard.title}
                    </h1>
                  </div>
                </a>
              )}
            </div>

            {/* Additional cards (optional) */}
            {section.extraCard && section.lastCard && (
              <div className="flex-1 w-full h-full flex flex-col overflow-hidden relative">
                {/* Celebrations */}
                <a
                  href={section.extraCard.href}
                  className="flex-1 relative w-full h-full bg-black flex flex-col items-start justify-end p-[10px] bg-no-repeat bg-center bg-cover group transition-all ease-in-out duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url('${section.extraCard.image}')`
                  }}
                >
                  <div className="absolute -bottom-96 group-hover:bottom-6 left-8 transition-all duration-300 ease-in-out">
                    <h1 className="text-[20px] lg:text-[24px] xl:text-[32px] font-bold text-white font-Emilio">
                      {section.extraCard.title}
                    </h1>
                  </div>
                </a>

                {/* Hostels */}
                <div className="flex-1 w-full h-full flex overflow-hidden">
                  <div
                    className="w-full h-full flex-1 flex flex-col items-start justify-center p-[25px]"
                    style={{ backgroundColor: section.background }}
                  >
                    {section.titleLines.map((line, i) => (
                      <h1
                        key={i}
                        className="text-[20px] lg:text-[24px] xl:text-[38px] font-bold text-white font-Emilio"
                      >
                        {line}
                      </h1>
                    ))}
                  </div>

                  <a
                    href={section.lastCard.href}
                    className="flex-1 w-full h-full flex flex-col items-start justify-end p-[10px] bg-no-repeat bg-center bg-cover hover:scale-105 group overflow-hidden transition-all ease-in-out duration-300"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url('${section.lastCard.image}')`
                    }}
                  >
                    <div className="absolute -bottom-96 group-hover:bottom-6 left-4 transition-all duration-300 ease-in-out">
                      <h1 className="text-[20px] lg:text-[24px] xl:text-[32px] font-bold text-white font-Emilio">
                        {section.lastCard.title}
                      </h1>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
