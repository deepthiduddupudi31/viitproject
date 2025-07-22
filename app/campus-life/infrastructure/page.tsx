"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const colorVars = {
  primary: "#1F7A6B",
  secondary: "#2D8F6F",
  accent: "#4A90E2",
  orange: "#D4A574",
  dark: "#333333",
  lightGray: "#6B7280",
  bgLight: "#F8FAFC",
  white: "#FFFFFF",
};

const campuses = [
  { name: "Bengaluru", image: "/image1.jpg", desc: "Modern infrastructure, vibrant student life." },
  { name: "Hyderabad", image: "/image2.jpg", desc: "Innovation and research hub." },
  { name: "Visakhapatnam", image: "/image3.jpg", desc: "Flagship campus with world-class facilities." },
  { name: "GIMSR", image: "/image4.jpg", desc: "Medical sciences and healthcare excellence." },
];

const programs = [
  { title: "B.Tech Computer Science", desc: "Cutting-edge curriculum with industry exposure." },
  { title: "B.A. Economics", desc: "Solid foundation in economic theory and applications." },
  { title: "BBA Management", desc: "Leadership and business skills for tomorrow." },
  { title: "B.Sc. Life Sciences", desc: "Hands-on research and modern labs." },
  { title: "B.A. Psychology", desc: "Understanding human behavior and mental health." },
  { title: "B.Com (Hons)", desc: "Comprehensive commerce and finance education." },
];

const facilityTabs = [
  {
    label: "Classrooms",
    image: "/classroom.jpg",
    desc: "A total of 82 classrooms (avg. 110 sq. m.), all well-equipped with ICT facilities. 30% have smart boards.",
    number: 82,
  },
  {
    label: "Labs",
    image: "/lab.jpg",
    desc: "108 well-equipped laboratories, with state-of-the-art equipment worth Rs 620 lakhs.",
    number: 108,
  },
  {
    label: "Research Centre",
    image: "/research.jpg",
    desc: "Four research laboratories worth more than 500 lakhs to carry out interdisciplinary research.",
    number: 4,
  },
  {
    label: "Seminar Halls",
    image: "/seminar.jpg",
    desc: "8 seminar halls fully equipped with smart board facilities.",
    number: 8,
  },
];

export default function InfrastructurePage() {
  const [activeCampus, setActiveCampus] = useState(0);
  const [activeProgramTab, setActiveProgramTab] = useState(0);
  const programTabs = ["Undergraduate", "Postgraduate", "Ph.D."];
  const [activeFacility, setActiveFacility] = useState(0);

  return (
    <>
      <Head>
        <title>Life @Vignan Institute of Information Technology</title>
        <meta name="description" content="Vignan Institute of Information Technology - Premier educational institution with campuses in Visakhapatnam" />
        <meta name="keywords" content="Vignan Institute of Information Technology, education, engineering, management, medical" />
        <meta property="og:title" content="Life at Vignan Institute of Information Technology" />
        <meta property="og:description" content="Discover student life, academics, and opportunities at Vignan Institute of Information Technology" />
        <meta property="og:image" content="/gitam-campus-social.jpg" />
      </Head>
      <main className="bg-[#F8FAFC] min-h-screen font-[Inter,Poppins,sans-serif]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl mb-12 max-w-7xl mx-auto mt-8"
        >
          <Image
            src="/Gemini_Generated_Image_zcysuzzcysuzzcys.png"
            alt="Life at GITAM"
            width={1200}
            height={400}
            className="object-cover w-full h-96"
            priority
          />
          <div className="absolute top-1 left-1 bg-white px-6 py-3 rounded-full shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold" style={{ color: colorVars.primary }}>
              Life @Vignan Institute of Information Technology
            </h1>
          </div>
        </motion.section>

        {/* Teaching – Learning Facilities Section */}
        <motion.section
          className="teaching-facilities-section py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            Teaching – Learning Facilities
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Institute provides support for developing students' learning knowledge and skills. Enhance learning supports and improves learning performance through creating a learner-centered learning environment with more learning opportunities.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white rounded-xl shadow text-base">
              <thead>
                <tr className="bg-[#1F7A6B] text-white">
                  <th className="py-2 px-4 text-left">S.No</th>
                  <th className="py-2 px-4 text-left">Type of Facility</th>
                  <th className="py-2 px-4 text-left">Numbers</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-b"><td className="py-2 px-4">1.</td><td className="py-2 px-4">Classrooms</td><td className="py-2 px-4">82</td></tr>
                <tr className="border-b"><td className="py-2 px-4">2.</td><td className="py-2 px-4">Laboratories</td><td className="py-2 px-4">108</td></tr>
                <tr className="border-b"><td className="py-2 px-4">3.</td><td className="py-2 px-4">Research Laboratories</td><td className="py-2 px-4">04</td></tr>
                <tr><td className="py-2 px-4">4.</td><td className="py-2 px-4">Seminar Halls</td><td className="py-2 px-4">08</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Classrooms</h3>
              <p className="text-gray-700">A total of 82 classrooms (avg. 110 sq. m.), all well-equipped with ICT facilities. 30% have smart boards to support various teaching and learning methodologies.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Laboratories</h3>
              <p className="text-gray-700">108 well-equipped laboratories, with state-of-the-art equipment worth Rs 620 lakhs.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Research Laboratories</h3>
              <p className="text-gray-700">Four research laboratories worth more than 500 lakhs to carry out interdisciplinary research.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">AICTE Idea Lab</h3>
              <p className="text-gray-700">AICTE-sponsored Idea Lab established at a cost of Rs 194 lakhs to foster creativity and innovation.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Video Recording Rooms</h3>
              <p className="text-gray-700">Established four video recording rooms with smart boards and glass boards for high-quality content creation and online learning.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Infrastructure and Facilities Tabbed Section */}
        <section className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            Infrastructure and Facilities
          </h2>
          <div className="flex space-x-8 border-b border-gray-200 mb-8">
            {facilityTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`pb-2 font-semibold transition-all ${
                  idx === activeFacility
                    ? 'text-[#1F7A6B] border-b-2 border-[#1F7A6B]'
                    : 'text-gray-600 hover:text-[#1F7A6B]'
                }`}
                onClick={() => setActiveFacility(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={facilityTabs[activeFacility].image}
              alt={facilityTabs[activeFacility].label}
              width={400}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#1F7A6B]">{facilityTabs[activeFacility].label}</h3>
              <p className="text-gray-700 mb-2">{facilityTabs[activeFacility].desc}</p>
              <span className="inline-block bg-[#1F7A6B] text-white px-4 py-2 rounded-full font-bold">
                {facilityTabs[activeFacility].number} {facilityTabs[activeFacility].label}
              </span>
            </div>
          </div>
        </section>

        {/* ICT Enabled Facilities Section */}
        <motion.section
          className="ict-facilities-section py-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
            ICT Enabled Facilities
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            ICT enabled facilities enhance the effectiveness of teaching and learning processes. ICT enabled classrooms include smart boards, computers, projectors, speakers integrated with learning management systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">ICT Classrooms</h3>
              <p className="text-gray-700">All 82 classrooms are well-equipped with ICT facilities, including 30 smart boards and 52 LCD projectors.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Seminar Halls</h3>
              <p className="text-gray-700">8 seminar halls fully equipped with smart board facilities.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1F7A6B]">Learning Management System</h3>
              <p className="text-gray-700">Adopted <span className="font-semibold">Moodle</span> as the Learning Management System for seamless digital learning.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Campus Navigation Tabs */}
        <nav className="flex space-x-8 border-b border-gray-200 mb-12 max-w-4xl mx-auto" aria-label="Campus Navigation">
          {campuses.map((campus, idx) => (
            <button
              key={campus.name}
              className={`pb-2 font-semibold transition-all ${
                idx === activeCampus
                  ? 'text-[#1F7A6B] border-b-2 border-[#1F7A6B]'
                  : 'text-gray-600 hover:text-[#1F7A6B]'
              }`}
              onClick={() => setActiveCampus(idx)}
              aria-current={idx === activeCampus ? "page" : undefined}
            >
              {campus.name}
            </button>
          ))}
        </nav>

        {/* Experience Section with Side Image */}
        <motion.section
          className="experience-section py-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="content"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: colorVars.primary }}>
                Experience {campuses[activeCampus].name}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {campuses[activeCampus].desc} Our {campuses[activeCampus].name} campus offers modern infrastructure, dedicated faculty, and a vibrant student community.
              </p>
            </motion.div>
            <motion.div
              className="image-container"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={campuses[activeCampus].image}
                alt={`${campuses[activeCampus].name} Campus`}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Programs Section with Cards */}
        <motion.section
          className="programs-section py-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-8" style={{ color: colorVars.primary }}>
            Top Programmes at {campuses[activeCampus].name}
          </h2>
          <div className="tabs mb-8 flex gap-8">
            {programTabs.map((tab, idx) => (
              <button
                key={tab}
                className={`underline decoration-2 underline-offset-4 font-medium transition-all ${
                  idx === activeProgramTab ? 'text-[#1F7A6B]' : 'text-gray-600'
                }`}
                onClick={() => setActiveProgramTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="programs-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                className="program-card bg-white rounded-xl shadow-lg p-6 card-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * i }}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center text-[#1F7A6B]">
                  {prog.title}
                  <ArrowUpRight className="inline-block w-5 h-5 ml-2" />
                </h3>
                <p className="text-gray-700">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  );
} 