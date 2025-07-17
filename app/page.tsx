'use client';

import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SchoolsSection from "./research/schools"
import Programs from "./research/programs"
import HeroSlider from "./research/heroSection"
import AboutSection from "./research/aboutSection"
import News from "./research/news"
import SocialMediaWall from "./research/socialMediaWall";
import TopRecruiters from "./research/topRecruiters"
import CampustLife from "./research/campusLife"
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';

const slides = [
  {
    type: 'image',
    src: '/image2.jpg',
    title: 'CBN x VIT-AP University',
    subtitle: 'V‑LaunchPad 2025 @ VIT‑AP University®',
    link: '#',
  },
  {
    type: 'image',
    src: '/image4.jpg',
    title: 'Explore Innovation',
    subtitle: 'Empowering the Future at VIT‑AP',
    link: '#',
  },
  {
    type: 'image',
    src: '/image2.jpg',
    link: 'https://vitap.ac.in/ug-pg-admissions',
  },
  {
    type: 'video',
    src: '/image3.jpg',
    title: 'Welcome to VIT‑AP University',
    subtitle: 'APPLY KNOWLEDGE, IMPROVE LIFE®',
    link: '#',
  },
];

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex(i => (i + 1) % slides.length);

  useEffect(() => {
    if (!container.current) return;
    gsap.to(container.current, {
      x: `-${index * 100}%`,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }, [index]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider/>

      {/* About Section */}
      {/* About + Announcement Section */}
      <AboutSection/>


      {/* Schools Section */}
      <SchoolsSection/>

      {/* Programs Section */}
      <Programs />

      {/* Campus Life Section */}
      <CampustLife/>

      {/* News Section */}
      <News/>

      {/* Placement Highlights Section */}
      

      {/* Top Recruiters Section */}
      
      <TopRecruiters/>
      {/* Social Media Wall Section */}
      <SocialMediaWall/>
      
    </div>
  )
}