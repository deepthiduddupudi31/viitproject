<<<<<<< HEAD
"use client";

import { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";
import LocomotiveScrollWrapper from "../../components/LocomotiveScrollWrapper";

const sectionLinks = [
  { id: "programs", label: "Academic Programs" },
  { id: "facilities", label: "Campus Facilities" },
  { id: "studentlife", label: "Student Life & Culture" },
  { id: "partnerships", label: "Partnerships & Global Exposure" },
  { id: "location", label: "Campus Location & Infrastructure" },
  { id: "testimonials", label: "What Students Say" },
  { id: "special", label: "What Makes VIIT Special" },
  { id: "whyviit", label: "Why VIIT?" },
];

export default function CampusLifePage() {
  // Animated stats
  const [stats] = useState([
    { label: "Students", value: 4200 },
    { label: "Clubs", value: 32 },
    { label: "Events/Year", value: 50 },
  ]);
  // FAQ data
  const faqs = [
    { q: "How do I join a club?", a: "You can join any club by attending their orientation or contacting the club coordinator listed on the campus portal." },
    { q: "Are there hostel facilities?", a: "Yes, VIIT offers comfortable hostel facilities for both boys and girls with Wi-Fi, study zones, and mess." },
    { q: "What sports are available?", a: "Basketball, football, cricket, badminton, table tennis, and more are available on campus." },
    { q: "How do I participate in events?", a: "Keep an eye on the campus notice board and student portal for event announcements and registration details." },
  ];
  // Gallery images
  const gallery = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg", "/image.png"
  ];

  return (
    <LocomotiveScrollWrapper>
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16 text-gray-800">
        {/* Hero section with gradient background */}
        <div className="relative flex flex-col items-center mb-10">
          <div className="absolute left-6 top-6 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077B5] bg-white rounded-xl px-6 py-2 shadow-lg inline-block">
              Life <span className="text-black">@ VIIT</span>
            </h1>
          </div>
          <div className="w-full mt-12 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-white">
              <Image
              src="/image1.jpg"
              alt="Life at VIIT"
              width={1200}
                height={400}
              className="w-full h-72 md:h-96 object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
              priority
              />
            </div>
        </div>

        {/* Anchor link menu */}
        <nav className="flex flex-wrap gap-3 mb-8 justify-center sticky top-24 z-10 bg-white/80 py-3 rounded-lg shadow-sm">
          {sectionLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[#0077B5] font-semibold hover:underline underline-offset-4 px-3 py-1 rounded transition-colors duration-200 hover:bg-[#e6f0fa]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-[#0077B5] mb-6 text-center">
          Vignan’s Institute of Information Technology: Campus Life
        </h1>
        <p className="mb-6 text-lg text-center">
          Located in the bustling coastal city of Visakhapatnam, Vignan’s Institute of Information Technology (VIIT) is where academic excellence meets a lively student experience. Whether you’re coding the next big app, designing innovative machines, or simply soaking in campus vibes, VIIT offers an environment that fuels your ambitions and helps you thrive.
        </p>

        {/* Academic Programs Section with side image */}
        <div id="programs" className="flex flex-col md:flex-row items-center gap-8 mt-10 mb-8">
          <div className="flex-1">
            <h2 id="programs" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">1. Academic Programs</h2>
            <p className="mb-2">At VIIT, education is all about hands-on learning and real-world impact. Here are some of the standout programs:</p>
            <ul className="list-disc list-inside mb-6">
              <li><b>B.Tech in Computer Science and Engineering:</b> Master coding, AI, and data science with cutting-edge labs and industry-driven projects.</li>
              <li><b>B.Tech in Electronics and Communication Engineering:</b> Get skilled in communication tech and embedded systems with top-tier facilities.</li>
              <li><b>B.Tech in Mechanical Engineering:</b> Build the future with access to advanced workshops and design tools.</li>
              <li><b>M.Tech Programs:</b> Specialize in areas like VLSI or Data Science with research-focused training.</li>
              <li><b>MBA and MCA:</b> Blend tech with management or dive deeper into IT with practical curricula.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/image2.jpg" alt="Academic Programs" width={400} height={300} className="rounded-xl shadow-md object-cover h-56 w-full max-w-xs transition-transform duration-300 hover:scale-105" />
          </div>
            </div>

        {/* Facilities Section with rounded images */}
        <div id="facilities" className="mt-10 mb-8">
          <h2 id="facilities" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">2. Campus Facilities</h2>
          <div className="flex flex-wrap gap-6 mb-6">
            <Image src="/image3.jpg" alt="Sports and Recreation" width={180} height={120} className="rounded-full object-cover h-28 w-28 shadow transition-transform duration-300 hover:scale-105" />
            <Image src="/image4.jpg" alt="Housing" width={180} height={120} className="rounded-full object-cover h-28 w-28 shadow transition-transform duration-300 hover:scale-105" />
            <Image src="/image5.jpg" alt="Safety" width={180} height={120} className="rounded-full object-cover h-28 w-28 shadow transition-transform duration-300 hover:scale-105" />
          </div>
          <ul className="list-disc list-inside mb-6">
            <li><b>Sports and Recreation:</b> Play on basketball courts, football fields, or hit the indoor sports complex. There’s also a gym and yoga studio for fitness enthusiasts.</li>
            <li><b>Housing:</b> Live in cozy dorms or shared apartments with Wi-Fi, study zones, and a mess serving tasty, hygienic meals.</li>
            <li><b>Safety:</b> Feel secure with 24/7 security, CCTV, and an on-campus medical center ready for any need.</li>
          </ul>
        </div>

        {/* Student Life Section with side-by-side image and text */}
        <div id="studentlife" className="flex flex-col-reverse md:flex-row items-center gap-8 mt-10 mb-8">
          <div className="flex-1 flex justify-center">
            <Image src="/image.png" alt="Student Life" width={400} height={300} className="rounded-2xl shadow-lg object-cover h-56 w-full max-w-xs transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex-1">
            <h2 id="studentlife" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">3. Student Life and Culture</h2>
            <ul className="list-disc list-inside mb-6">
              <li><b>Clubs and Organizations:</b> From the Robotics Club to the Cultural Society, there’s a space for every interest.</li>
              <li><b>Events:</b> Join the fun at Yuva Tarang (Youth Festival), tech fests, or cultural nights that light up the campus.</li>
              <li><b>Community:</b> Get involved with NSS outreach or industry projects that make a difference.</li>
            </ul>
              </div>
            </div>

        {/* Partnerships Section with image cards */}
        <div id="partnerships" className="mt-10 mb-8">
          <h2 id="partnerships" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">4. Partnerships and Global Exposure</h2>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-48 transition-transform duration-300 hover:scale-105">
              <Image src="/placeholder-logo.png" alt="Microsoft" width={80} height={80} className="mb-2 object-contain" />
              <span className="font-semibold text-[#0077B5]">Microsoft</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-48 transition-transform duration-300 hover:scale-105">
              <Image src="/placeholder-logo.png" alt="Infosys" width={80} height={80} className="mb-2 object-contain" />
              <span className="font-semibold text-[#0077B5]">Infosys</span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-48 transition-transform duration-300 hover:scale-105">
              <Image src="/placeholder-logo.png" alt="TCS" width={80} height={80} className="mb-2 object-contain" />
              <span className="font-semibold text-[#0077B5]">TCS</span>
            </div>
          </div>
          <ul className="list-disc list-inside mb-6">
            <li><b>Industry Ties:</b> Work with giants like Microsoft, Infosys, and TCS through internships and workshops.</li>
            <li><b>Global Reach:</b> Explore exchange programs and international collaborations that broaden your horizons.</li>
          </ul>
            </div>

        {/* Location Section with full-width image */}
        <div id="location" className="mt-10 mb-8">
          <h2 id="location" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">5. Campus Location and Infrastructure</h2>
          <div className="w-full mb-4 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="/image3.jpg" alt="Campus Location" width={1200} height={300} className="w-full h-48 object-cover" />
                </div>
          <ul className="list-disc list-inside mb-6">
            <li><b>Where We Are:</b> Situated in Duvvada, Visakhapatnam, VIIT offers a serene yet accessible spot, just 9.5 km from the airport.</li>
            <li><b>Campus Highlights:</b> Spanning 17 acres, you’ll find modern labs, eco-friendly buildings, and a massive library with over 54,000 books and e-journals.</li>
            <li><b>Getting Around:</b> Shuttle services and nearby transport links keep you connected.</li>
          </ul>
              </div>

        {/* Testimonials Section with avatar images */}
        <div id="testimonials" className="mt-10 mb-8">
          <h2 id="testimonials" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">6. What Students Say</h2>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex items-center gap-3 bg-white rounded-lg shadow p-4 transition-transform duration-300 hover:scale-105">
              <Image src="/placeholder-user.jpg" alt="CSE Student" width={48} height={48} className="rounded-full object-cover" />
              <blockquote className="italic">"The projects and faculty support got me my dream internship!"<br /><span className="text-xs text-gray-500">– B.Tech CSE Student</span></blockquote>
              </div>
            <div className="flex items-center gap-3 bg-white rounded-lg shadow p-4 transition-transform duration-300 hover:scale-105">
              <Image src="/placeholder-user.jpg" alt="ECE Student" width={48} height={48} className="rounded-full object-cover" />
              <blockquote className="italic">"Campus life at VIIT is so vibrant—I’ve made memories for a lifetime."<br /><span className="text-xs text-gray-500">– B.Tech ECE Student</span></blockquote>
            </div>
          </div>
              </div>

        {/* What Makes VIIT Special Section */}
        <div id="special" className="mt-10 mb-8">
          <h2 id="special" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">7. What Makes VIIT Special</h2>
          <ul className="list-disc list-inside mb-6">
            <li><b>Innovation Central:</b> Home to an MSME-supported startup incubator, perfect for budding entrepreneurs.</li>
            <li><b>Awards:</b> Ranked in the 201-300 band by NIRF (2024) and accredited with an A+ by NAAC.</li>
            <li><b>Balanced Growth:</b> A mix of academics, extracurriculars, and community work shapes you into a leader.</li>
          </ul>
              </div>

        {/* Why VIIT Section with a highlight image */}
        <div id="whyviit" className="mt-10 mb-8">
          <h2 id="whyviit" className="text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">Why VIIT?</h2>
          <div className="w-full mb-4 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src="/image5.jpg" alt="Why VIIT" width={1200} height={300} className="w-full h-48 object-cover" />
          </div>
          <p className="mb-2">VIIT isn’t just a college—it’s where your journey takes off. With top-notch facilities, a buzzing student community, and a focus on innovation, you’re set to conquer your goals. Welcome to VIIT—your future starts here!</p>
              </div>

        {/* Animated Statistics Section */}
        <div className="mt-16 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(stat => (
            <div key={stat.label} className="bg-[#f0f9ff] rounded-xl shadow p-6">
              <span className="block text-4xl md:text-5xl font-extrabold text-[#0077B5] animate-pulse">{stat.value.toLocaleString()}</span>
              <span className="block mt-2 text-lg font-semibold text-gray-700">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Responsive Image Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0077B5] mb-4">Campus Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow">
                <Image src={src} alt={`Gallery ${i+1}`} width={300} height={200} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0077B5] mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq${i}`}>
                <AccordionTrigger className="text-lg font-semibold text-[#0077B5]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 bg-[#f0f9ff] rounded-b-xl px-4 py-2">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </LocomotiveScrollWrapper>
  );
=======
import { Button } from "../../components/ui/button"
import Image from "next/image"

export default function CampusLifePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="VIIT Campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Life @ VIIT</h1>
            <p className="text-xl">Experience the vibrant heart of our campus life at VIT AP .</p>
            <Button className="mt-6 bg-white text-gray-900 hover:bg-gray-100">EXPLORE</Button>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Sports at VIIT"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sports</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our sports facilities provide students with opportunities to excel in various athletic disciplines,
              promoting physical fitness and team spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Vibrant Life Section */}
      <section className="relative min-h-screen">
        <div className="grid grid-cols-2 h-screen">
          {/* Left side - Text overlay on red background */}
          <div className="bg-linkedin text-white flex items-center justify-center p-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                Explore
                <br />
                The Vibrant
                <br />
                Life At VIIT
              </h2>
            </div>
          </div>

          {/* Right side - Student images */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Students in traditional attire"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-2 h-96">
          {/* Bottom left - Student studying */}
          <div className="relative">
            <Image src="/placeholder.svg?height=400&width=600" alt="Student studying" fill className="object-cover" />
          </div>

          {/* Bottom right - Split between red text and campus building */}
          <div className="grid grid-rows-2">
            <div className="bg-linkedin text-white flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold leading-tight">
                  The
                  <br />
                  Lively
                  <br />
                  Unforgettable
                  <br />
                  Experience
                </h3>
              </div>
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=400" alt="Campus buildings" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-linkedin mb-6">Explore The Vibrant Life At VIIT</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From cultural events to academic competitions, from sports tournaments to innovation challenges - discover
            the endless opportunities that await you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-linkedin mb-4">Cultural Events</h3>
              <p className="text-gray-700">
                Participate in festivals, performances, and cultural celebrations throughout the year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-linkedin mb-4">Student Clubs</h3>
              <p className="text-gray-700">
                Join various clubs and societies to pursue your interests and develop new skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-linkedin mb-4">Innovation Hub</h3>
              <p className="text-gray-700">Engage in research projects, hackathons, and entrepreneurship programs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
>>>>>>> 64e2da18118fcbfa5f9045783253d47e7e36146f
}
