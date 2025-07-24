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
