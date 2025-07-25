<<<<<<< HEAD
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CampusLifeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  video.currentTime = 4; 
    const handleTimeUpdate = () => {
        
      if (video.currentTime >= 29) {
        video.currentTime = 6; 
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="w-full bg-light-bg">
      <div className="relative h-screen w-full flex items-end justify-start overflow-hidden">
        <video
          ref={videoRef}
          src="/Glimpse of Events  SAC  Vignan Vizag - Vignan Vizag Studio (1080p, h264).mp4"
          className="absolute z-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Text block */}
        <motion.div
          className="relative z-20 text-left text-white p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Life at <span className="text-vignan-blue">VIIT</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-lg text-slate-200">
            Experience the vibrant heart of our campus, where learning, innovation, and community come together.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
=======
"use client"

import Link from "next/link"
import clsx from "clsx"

const heroCards = [
  {
    href: "/campus-life",
    title: "Life @ VIIT",
    text: "Experience the vibrant heart of our campus life at VIIT Vizag.",
    image: "/image1.jpg",
    buttonText: "EXPLORE",
    large: true,
    video: "/Glimpse of Events  SAC  Vignan Vizag - Vignan Vizag Studio (1080p, h264).mp4"
  },
  {
    href: "/sports",
    title: "Sports",
    image: "/sports.jpg"
  },
  {
    href: "/cafeteria",
    title: "Cafeteria",
    image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const infoCards = [
  {
    titleLines: ["Explore", "The Vibrant", "Life At VIIT"],
    background: "#0077B5",
    imageCard: {
      href: "/library",
      title: "Library",
      image: "/library.jpg"
    }
  },
  {
    firstCard: {
      href: "/clubs-and-chapters",
      title: "Clubs & Chapters",
      image: "/club.jpg"
    },
    secondCard: {
      href: "/celebrations",
      title: "Celebrations",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    thirdCard: {
        href: "/hostels",
        title: "Hostels",
        image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    titleLines: ["The Lively,", "Unforgettable", "Experience"],
    background: "#0077B5",
  }
];

const ImageCard = ({ href, image, title, className = "" }) => (
  <a
    href={href}
    className={clsx(
      "relative w-full h-full flex-1 group overflow-hidden bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-105",
      className
    )}
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url('${image}')`
    }}
  >
    <div className="absolute -bottom-full group-hover:bottom-6 left-6 transition-all duration-300 ease-in-out">
      <h1 className="text-xl md:text-2xl font-bold text-white font-Emilio">
        {title}
      </h1>
    </div>
  </a>
);

const TextBlock = ({ titleLines, background, className = "" }) => (
  <div
    className={clsx(
      "w-full h-full flex-1 flex flex-col items-start justify-center p-6",
      className
    )}
    style={{ backgroundColor: background }}
  >
    {titleLines.map((line, i) => (
      <h1
        key={i}
        className="text-2xl md:text-3xl font-bold text-white font-Emilio leading-tight"
      >
        {line}
      </h1>
    ))}
  </div>
);


export default function CampusLifeSection() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row md:h-[600px] cursor-pointer">
        {/* Large Card - Full width on mobile, 2/3 on desktop */}
        <a
          href={heroCards[0].href}
          className="relative w-full md:w-2/3 h-[400px] md:h-full bg-cover bg-center group overflow-hidden p-8 flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url('${heroCards[0].image}')`
          }}
        >
          <div className="transition-transform duration-300 group-hover:scale-105">
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-Emilio mb-4">
              {heroCards[0].title}
            </h1>
            <p className="text-base lg:text-lg text-white/90 font-light max-w-md mb-6">
              {heroCards[0].text}
            </p>
            <span className="w-40 h-12 flex items-center justify-center bg-white text-[#650010] hover:bg-[#650010] hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors duration-200">
              {heroCards[0].buttonText}
            </span>
          </div>
        </a>
        
        {/* Small Cards - Side-by-side on mobile, stacked on desktop */}
        <div className="w-full md:w-1/3 flex flex-row md:flex-col">
          <ImageCard href={heroCards[1].href} image={heroCards[1].image} title={heroCards[1].title} className="h-64 md:h-1/2"/>
          <ImageCard href={heroCards[2].href} image={heroCards[2].image} title={heroCards[2].title} className="h-64 md:h-1/2"/>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full flex flex-col lg:flex-row cursor-pointer">
        
        {/* First Column - Stacks on mobile, forms a column on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Mobile: Text block above image. Desktop: Text block above image */}
          <TextBlock titleLines={infoCards[0].titleLines} background={infoCards[0].background} className="h-48 md:h-64 lg:h-[400px]"/>
          <ImageCard href={infoCards[0].imageCard.href} image={infoCards[0].imageCard.image} title={infoCards[0].imageCard.title} className="h-64 md:h-80 lg:h-[400px]"/>
        </div>
        
        {/* Second Column - Forms a 2x2 grid on mobile and desktop */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2">
            <ImageCard href={infoCards[1].firstCard.href} image={infoCards[1].firstCard.image} title={infoCards[1].firstCard.title} className="h-64 md:h-80 lg:h-[400px]"/>
            <ImageCard href={infoCards[1].secondCard.href} image={infoCards[1].secondCard.image} title={infoCards[1].secondCard.title} className="h-64 md:h-80 lg:h-[400px]"/>
            <TextBlock titleLines={infoCards[1].titleLines} background={infoCards[1].background} className="h-64 md:h-80 lg:h-[400px]"/>
            <ImageCard href={infoCards[1].thirdCard.href} image={infoCards[1].thirdCard.image} title={infoCards[1].thirdCard.title} className="h-64 md:h-80 lg:h-[400px]"/>
        </div>
      </div>
    </div>
  )
}
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
