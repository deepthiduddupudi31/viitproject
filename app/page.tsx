'use client';

import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
<<<<<<< HEAD
import SchoolsSection from "./pageComponents/schools"
import Programs from "./pageComponents/programs"
import HeroSlider from "./pageComponents/heroSection"
import AboutSection from "./pageComponents/aboutSection"
import News from "./pageComponents/news"
import SocialMediaWall from "./pageComponents/socialMediaWall";
import TopRecruiters from "./pageComponents/topRecruiters"
import CampusLifeSection from "./pageComponents/campusLife"
import { useEffect, useRef, useState } from "react";
import  PlacementHighlights from "./pageComponents/placementHighlights";
=======
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
>>>>>>> 64e2da18118fcbfa5f9045783253d47e7e36146f
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