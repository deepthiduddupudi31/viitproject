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
import CampusLifeSection from "./research/campusLife"
import { useEffect, useRef, useState } from "react";
import  PlacementHighlights from "./research/placementHighlights";
import gsap from 'gsap';



export default function HomePage() {

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
      <CampusLifeSection/>

      {/* News Section */}
      <News/>
      
      {/* Placement Highlights Section */}
      {/* <SocialMediaWall/> */}

      {/* Top Recruiters Section */}
      <PlacementHighlights/>
      <TopRecruiters/>
      {/* Social Media Wall Section */}
    
      
    </div>
  )
}