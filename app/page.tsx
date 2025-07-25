'use client';

<<<<<<< HEAD
import { useState, useEffect } from "react";
import Loader from "../components/loader";

// Import your page sections
import HeroSlider from "./pageComponents/heroSection";
import AboutSection from "./pageComponents/aboutSection";
import SchoolsSection from "./pageComponents/schools";
import Programs from "./pageComponents/programs";
import CampusLifeSection from "./pageComponents/campusLife";
import News from "./pageComponents/news";
import PlacementHighlights from "./pageComponents/placementHighlights";
import TopRecruiters from "./pageComponents/topRecruiters";
import SocialMediaWall from "./pageComponents/socialMediaWall";

export default function HomePage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen">
      <HeroSlider />
      <AboutSection />
      <SchoolsSection />
      <Programs />
      <CampusLifeSection />
      <News />
      <SocialMediaWall />
      <PlacementHighlights />
      <TopRecruiters />
      
    </div>
  );
}
=======
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
import  PlacementHighlights from "./pageComponents/placementHighlights";
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
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
