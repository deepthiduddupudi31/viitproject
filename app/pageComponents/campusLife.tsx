"use client";

import Link from "next/link";
import { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CampusLifeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full bg-light-bg">
      <div className="relative h-screen w-full flex items-end justify-start overflow-hidden">
        <video
          ref={videoRef}
          src="/viit.mp4"
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