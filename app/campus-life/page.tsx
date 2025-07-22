"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";
import { FocusCards } from "../../components/ui/focus-cards";
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
  const [stats] = useState([
    { label: "Students", value: 4200 },
    { label: "Clubs", value: 32 },
    { label: "Events/Year", value: 50 },
  ]);
  const faqs = [
    { q: "How do I join a club?", a: "You can join any club by attending their orientation or contacting the club coordinator listed on the campus portal." },
    { q: "Are there hostel facilities?", a: "Yes, VIIT offers comfortable hostel facilities for both boys and girls with Wi-Fi, study zones, and mess." },
    { q: "What sports are available?", a: "Basketball, football, cricket, badminton, table tennis, and more are available on campus." },
    { q: "How do I participate in events?", a: "Keep an eye on the campus notice board and student portal for event announcements and registration details." },
  ];
  const gallery = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", "/image5.jpg", "/image.png"
  ];
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredGallery, setFilteredGallery] = useState(gallery);

  // Animation variants with explicit type
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Smooth scroll to section (handled by LocomotiveScrollWrapper)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Gallery filter logic
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredGallery(gallery);
    } else {
      // Example filter logic (can be expanded based on metadata)
      setFilteredGallery(gallery.slice(0, 3)); // Mock filter for demo
    }
  }, [activeFilter]);

  return (
    <LocomotiveScrollWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-gray-800">
        {/* Hero Section */}
        <motion.div
          className="relative flex flex-col items-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0077B5] bg-white rounded-xl px-4 sm:px-6 py-2 shadow-lg inline-block">
              Life <span className="text-black">@ VIIT</span>
            </h1>
          </div>
          <div className="w-full mt-12 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Gemini_Generated_Image_zcysuzzcysuzzcys.png"
                alt="Life at VIIT"
                width={1200}
                height={700}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-3xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center sticky top-16 sm:top-24 z-10 bg-white/90 py-3 rounded-lg shadow-sm backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {sectionLinks.map(link => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="text-[#0077B5] font-semibold hover:underline underline-offset-4 px-2 sm:px-3 py-1 rounded transition-colors duration-200 hover:bg-[#e6f0fa]"
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0077B5] mb-6 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Vignan’s Institute of Information Technology: Campus Life
        </motion.h1>
        <motion.p
          className="mb-8 text-base sm:text-lg text-center max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Located in the bustling coastal city of Visakhapatnam, Vignan’s Institute of Information Technology (VIIT) is where academic excellence meets a lively student experience. Whether you’re coding the next big app, designing innovative machines, or simply soaking in campus vibes, VIIT offers an environment that fuels your ambitions and helps you thrive.
        </motion.p>

        {/* Academic Programs Section */}
        <motion.div
          id="programs"
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mt-10 mb-8 relative overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: 'url("/image2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              filter: 'blur(1px)',
            }}
          />
          <motion.div className="flex-1 relative z-10" variants={fadeIn}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">1. Academic Programs</h2>
            <p className="mb-2">At VIIT, education is all about hands-on learning and real-world impact. Here are some of the standout programs:</p>
            <ul className="list-disc list-inside mb-6">
              <li><b>B.Tech in Computer Science and Engineering:</b> Master coding, AI, and data science with cutting-edge labs and industry-driven projects.</li>
              <li><b>B.Tech in Electronics and Communication:</b> Get skilled in communication tech and embedded systems with top-tier facilities.</li>
              <li><b>B.Tech in Mechanical Engineering:</b> Build the future with access to advanced workshops and design tools.</li>
              <li><b>M.Tech Programs:</b> Specialize in areas like VLSI or Data Science with research-focused training.</li>
              <li><b>MBA and MCA:</b> Blend tech with management or dive deeper into IT with practical curricula.</li>
            </ul>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center relative z-10"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/Gemini_Generated_Image_l3y9vpl3y9vpl3y9 (1).png"
              alt="Academic Programs"
              width={400}
              height={300}
              className="rounded-xl shadow-md object-cover h-48 sm:h-56 w-full max-w-xs"
            />
          </motion.div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          id="facilities"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">2. Campus Facilities</h2>
          <motion.div variants={fadeIn}>
            <FocusCards cards={[
              { title: 'Library', src: '/Gemini_Generated_Image_be1jembe1jembe1j.png' },
              { title: 'Class Rooms', src: '/Gemini_Generated_Image_a0akpga0akpga0ak.png' },
              { title: 'Hostels', src: '/Gemini_Generated_Image_kvly4fkvly4fkvly.png' },
              { title: 'Seminar Hall', src: '/Gemini_Generated_Image_be1jembe1jembe1j (1).png' },
              { title: 'Modern Labs', src: '/Gemini_Generated_Image_l3y9vpl3y9vpl3y9 (1).png' },
              { title: 'Transport', src: '/Gemini_Generated_Image_yt08awyt08awyt08.png' },
            ]} />
          </motion.div>
          <motion.ul className="list-disc list-inside mb-6" variants={fadeIn}>
            <li><b>Sports and Recreation:</b> Play on basketball courts, football fields, or hit the indoor sports complex. There’s also a gym and yoga studio for fitness enthusiasts.</li>
            <li><b>Housing:</b> Live in cozy dorms or shared apartments with Wi-Fi, study zones, and a mess serving tasty, hygienic meals.</li>
            <li><b>Safety:</b> Feel secure with 24/7 security, CCTV, and an on-campus medical center ready for any need.</li>
          </motion.ul>
        </motion.div>

        {/* Student Life Section */}
        <motion.div
          id="studentlife"
          className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 flex justify-center"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/image.png"
              alt="Student Life"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg object-cover h-48 sm:h-56 w-full max-w-xs"
            />
          </motion.div>
          <motion.div className="flex-1" variants={fadeIn}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-2 scroll-mt-32">3. Student Life and Culture</h2>
            <ul className="list-disc list-inside mb-6">
              <li><b>Clubs and Organizations:</b> From the Robotics Club to the Cultural Society, there’s a space for every interest.</li>
              <li><b>Events:</b> Join the fun at Yuva Tarang (Youth Festival), tech fests, or cultural nights that light up the campus.</li>
              <li><b>Community:</b> Get involved with NSS outreach or industry projects that make a difference.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Partnerships Section */}
        <motion.div
          id="partnerships"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">4. Partnerships and Global Exposure</h2>
          <motion.div className="flex flex-wrap gap-4 sm:gap-6 mb-6" variants={staggerContainer}>
            {["Microsoft", "Infosys", "TCS"].map((company, i) => (
              <motion.div
                key={company}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-40 sm:w-48"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder-logo.png" alt={company} width={80} height={80} className="mb-2 object-contain" />
                <span className="font-semibold text-[#0077B5]">{company}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.ul className="list-disc list-inside mb-6" variants={fadeIn}>
            <li><b>Industry Ties:</b> Work with giants like Microsoft, Infosys, and TCS through internships and workshops.</li>
            <li><b>Global Reach:</b> Explore exchange programs and international collaborations that broaden your horizons.</li>
          </motion.ul>
        </motion.div>

        {/* Location Section */}
        <motion.div
          id="location"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">5. Campus Location and Infrastructure</h2>
          <motion.div
            className="w-full mb-4 rounded-xl overflow-hidden"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/image3.jpg" alt="Campus Location" width={1200} height={300} className="w-full h-40 sm:h-48 object-cover" />
          </motion.div>
          <motion.ul className="list-disc list-inside mb-6" variants={fadeIn}>
            <li><b>Where We Are:</b> Situated in Duvvada, Visakhapatnam, VIIT offers a serene yet accessible spot, just 9.5 km from the airport.</li>
            <li><b>Campus Highlights:</b> Spanning 17 acres, you’ll find modern labs, eco-friendly buildings, and a massive library with over 54,000 books and e-journals.</li>
            <li><b>Getting Around:</b> Shuttle services and nearby transport links keep you connected.</li>
          </motion.ul>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          id="testimonials"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">6. What Students Say</h2>
          <motion.div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6" variants={staggerContainer}>
            {[
              { quote: "The projects and faculty support got me my dream internship!", author: "B.Tech CSE Student" },
              { quote: "Campus life at VIIT is so vibrant—I’ve made memories for a lifetime.", author: "B.Tech ECE Student" },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-white rounded-lg shadow p-4"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder-user.jpg" alt={testimonial.author} width={48} height={48} className="rounded-full object-cover" />
                <blockquote className="italic">
                  "{testimonial.quote}"<br />
                  <span className="text-xs text-gray-500">– {testimonial.author}</span>
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What Makes VIIT Special Section */}
        <motion.div
          id="special"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">7. What Makes VIIT Special</h2>
          <motion.ul className="list-disc list-inside mb-6" variants={fadeIn}>
            <li><b>Innovation Central:</b> Home to an MSME-supported startup incubator, perfect for budding entrepreneurs.</li>
            <li><b>Awards:</b> Ranked in the 201-300 band by NIRF (2024) and accredited with an A+ by NAAC.</li>
            <li><b>Balanced Growth:</b> A mix of academics, extracurriculars, and community work shapes you into a leader.</li>
          </motion.ul>
        </motion.div>

        {/* Why VIIT Section */}
        <motion.div
          id="whyviit"
          className="mt-10 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mt-10 mb-4 scroll-mt-32">Why VIIT?</h2>
          <motion.div
            className="w-full mb-4 rounded-xl overflow-hidden"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/image5.jpg" alt="Why VIIT" width={1200} height={300} className="w-full h-40 sm:h-48 object-cover" />
          </motion.div>
          <motion.p className="mb-2" variants={fadeIn}>
            VIIT isn’t just a college—it’s where your journey takes off. With top-notch facilities, a buzzing student community, and a focus on innovation, you’re set to conquer your goals. Welcome to VIIT—your future starts here!
          </motion.p>
        </motion.div>

        {/* Animated Statistics Section */}
        <motion.div
          className="mt-16 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              className="bg-[#f0f9ff] rounded-xl shadow p-6"
              variants={fadeIn}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0077B5] animate-pulse">
                {stat.value.toLocaleString()}
              </span>
              <span className="block mt-2 text-base sm:text-lg font-semibold text-gray-700">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsive Image Gallery Section */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mb-4">Campus Gallery</h2>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 rounded-full ${activeFilter === "all" ? "bg-[#0077B5] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("events")}
              className={`px-3 py-1 rounded-full ${activeFilter === "events" ? "bg-[#0077B5] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveFilter("campus")}
              className={`px-3 py-1 rounded-full ${activeFilter === "campus" ? "bg-[#0077B5] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Campus
            </button>
          </div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" variants={staggerContainer}>
            <AnimatePresence>
              {filteredGallery.map((src, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-xl shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* FAQ Accordion Section */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077B5] mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeIn}>
                <AccordionItem value={`faq${i}`}>
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0077B5] hover:bg-[#e6f0fa] rounded-t-xl px-4 py-2">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 bg-[#f0f9ff] rounded-b-xl px-4 py-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </LocomotiveScrollWrapper>
);
}
