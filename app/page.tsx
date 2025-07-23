'use client';

import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import SchoolsSection from "./pageComponents/schools"
import Programs from "./pageComponents/programs"
import HeroSlider from "./pageComponents/heroSection"
import AboutSection from "./pageComponents/aboutSection"
import News from "./pageComponents/news"
import SocialMediaWall from "./pageComponents/socialMediaWall";
import TopRecruiters from "./pageComponents/topRecruiters"
import CampusLifeSection from "./pageComponents/campusLife"
import { useEffect, useRef, useState } from "react";
import PlacementHighlights from "./pageComponents/placementHighlights"

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