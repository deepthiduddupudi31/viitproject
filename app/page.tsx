'use client';

import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
      <section className="relative h-screen overflow-hidden">
        <div
          ref={container}
          className="flex h-full"
          style={{ width: `${slides.length * 100}%` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative flex-none w-full h-full">
              <div className="absolute inset-0 bg-black/30 z-10" />
              <a href={s.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full">
                  {s.type === 'image' ? (
                    <Image
                      src={s.src}
                      alt={s.title || `Slide ${i}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={i === 0}
                    />
                  ) : (
                    <video autoPlay loop muted className="w-full h-full object-cover">
                      <source src={s.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              </a>
              {s.title && (
                <>
                  <div className="hidden lg:flex absolute z-20 top-[35vh] left-[10vw] w-[50vw] flex-col text-white">
                    <h1 className="text-[4vw] font-semibold leading-tight">{s.title}</h1>
                    <h2 className="text-xl font-medium">{s.subtitle}</h2>
                  </div>
                  <div className="lg:hidden absolute z-20 top-1/2 left-1/2 w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-[6.5vw] font-bold">{s.title}</h1>
                    <h2 className="text-[3.5vw]">{s.subtitle}</h2>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About + Video + Announcements */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative pb-[56.25%] mb-6">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/DqCDVElxaL8"
                title="Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="float-left mr-2 text-4xl font-serif font-bold text-red-800">V</span>
              IT has been a forerunner...
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold text-red-800">ANNOUNCEMENTS</h3>
            <div className="space-y-4 text-gray-800 text-sm">
              {[
                '2025-06-04|Integrated M.Tech.- 2025 Results & Choice filling',
                '2025-05-23|VITREE-2025 (July Session)-Results',
                '2025-05-08|VITMEE (M.Tech. 2025) Admission Results',
              ].map((item, i) => {
                const [date, msg] = item.split('|');
                return (
                  <div key={i} className="border-b pb-3">
                    <p className="text-gray-500">{date}</p>
                    <p>{msg}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-right">
              <Link href="#">
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Schools Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">Schools</h2>
          <p className="text-xl mb-12 max-w-4xl">
            At VIT-AP the entire teaching-learning process is concentrated around seven schools for preparing students
            to make meaningful contributions to society as engaged citizens and leaders in a complex world.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="School of Computer Science"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">School of Computer Science and Engineering</h3>
                  <Link href="#" className="text-sm text-yellow-400 hover:underline">
                    Explore Now →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="School of Electronics"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">School of Electronics Engineering</h3>
                  <Link href="#" className="text-sm text-yellow-400 hover:underline">
                    Explore Now →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="School of Mechanical"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">School of Mechanical Engineering</h3>
                  <Link href="#" className="text-sm text-yellow-400 hover:underline">
                    Explore Now →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="School of Advanced Sciences"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">School of Advanced Sciences</h3>
                  <Link href="#" className="text-sm text-yellow-400 hover:underline">
                    Explore Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-6">Programmes Offered</h2>
          <p className="text-gray-700 mb-12">Programme covers the entire spectrum of new-age specializations.</p>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="space-y-4">
              <Button className="w-full bg-red-800 hover:bg-red-900 text-white py-3">Undergraduate</Button>
              <Button
                variant="outline"
                className="w-full border-red-800 text-red-800 hover:bg-red-50 py-3 bg-transparent"
              >
                Dual Degree
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-800 text-red-800 hover:bg-red-50 py-3 bg-transparent"
              >
                Integrated
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-800 text-red-800 hover:bg-red-50 py-3 bg-transparent"
              >
                Postgraduate
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-800 text-red-800 hover:bg-red-50 py-3 bg-transparent"
              >
                Doctoral
              </Button>
            </div>

            <div className="md:col-span-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="text-red-800 font-medium">
                    B.Tech. Electronics and Communication Engineering (Embedded Systems)
                  </h3>
                </div>
                <div className="border-b pb-3">
                  <h3 className="text-red-800 font-medium">B.Tech. Electronics and Communication Engineering (VLSI)</h3>
                </div>
                <div className="border-b pb-3">
                  <h3 className="text-red-800 font-medium">B.Tech. Mechanical Engineering</h3>
                </div>
                <div className="border-b pb-3">
                  <h3 className="text-red-800 font-medium">B.Tech. Mechanical Engineering (Automotive Design)</h3>
                </div>
                <div className="border-b pb-3">
                  <h3 className="text-red-800 font-medium">B.Tech. Mechanical Engineering (Robotics)</h3>
                </div>
                <div>
                  <h3 className="text-red-800 font-medium">B.Tech. Computer Science and Business Systems</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="VIT-AP Campus"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Life @ VIT-AP</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Experience the vibrant heart of our campus life at VIT AP University.
            </p>
            <Button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50">EXPLORE</Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">News</h2>
            <Button variant="outline" className="border-red-800 text-red-800 bg-transparent hover:bg-red-50">
              View More
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  CM outlines vision for youth, capital development & innovation
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Chief Minister Nara Chandrababu Naidu emphasized the pivotal role of youth in shaping the nation's
                  future during the V-Launchpad event...
                </p>
                <div className="bg-red-800 text-white px-3 py-1 rounded text-sm inline-block">Date: 2025-04-29</div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  VIT-AP, Cyient Foundation sign MoU to foster entrepreneurship
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  VIT-AP University has signed a Memorandum of Understanding (MoU) with Cyient Foundation to enhance
                  entrepreneurship...
                </p>
                <div className="bg-red-800 text-white px-3 py-1 rounded text-sm inline-block">Date: 2025-03-20</div>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">VITOPIA-2025 at VIT-AP concludes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  VIT-AP University successfully concluded VITOPIA 2025, a grand celebration of innovation, technology,
                  and academic excellence...
                </p>
                <div className="bg-red-800 text-white px-3 py-1 rounded text-sm inline-block">Date: 2025-03-10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-12">Placement Highlight</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-8">
                VIT-AP University proudly showcases its exceptional placements achievements, reflecting a commitment to
                nurturing industry-ready professionals. Boasting a stellar track record, our students have secured
                coveted positions in leading companies. The testament to our rigorous academic curriculum and holistic
                development approach is evident in the remarkable success stories of our graduates.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-900 rounded-lg p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">632</div>
                      <div className="text-sm text-blue-900">Companies</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">2807</div>
                    <div>Super Dream Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">530</div>
                    <div>Marquee Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">2862</div>
                    <div>Dream Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">12579</div>
                    <div>Overall Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">6380</div>
                    <div>Regular Offers</div>
                  </div>
                  <div className="bg-blue-800 p-3 rounded">
                    <div className="text-yellow-400 font-bold">4051</div>
                    <div>Industry Internships</div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-yellow-400 font-bold">Highest CTC ₹1 Crore</div>
                  <div className="text-xs">295 Super Dream Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-12">Top Recruiters</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-16">
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-purple-600">accenture</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-red-600">ALSTOM</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-orange-500">amazon</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-red-500">amdocs</span>
            </div>
            <div className="flex items-center justify-center h-16">
              <span className="text-2xl font-bold text-blue-600">BAJAJ FINSERV</span>
            </div>
          </div>

          <div className="bg-red-800 text-white py-12 px-8 rounded-lg text-center">
            <blockquote className="text-2xl font-light italic mb-4">
              "INDIA should lead the world. VIT should lead India"
            </blockquote>
            <cite className="text-lg">- Dr. G. Viswanathan, Founder & Chancellor, VIT</cite>
          </div>
        </div>
      </section>

      {/* Social Media Wall Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-800 mb-12">The Wall of Socials from</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Social Media Post 1"
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Hon'ble Andhra Pradesh CM Chandra Babu Naidu Garu Inspires at VIT-AP During V-Launchpad and Block
                  Inaugurations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Social Media Post 2"
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">KARTHIK Event Highlights</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Social Media Post 3"
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">National Level Hackathon</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Social Media Post 4"
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">Student Achievement Recognition</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow us on our Socials</h3>
            <div className="flex justify-center space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg">
                <span className="sr-only">YouTube</span>📺
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
                <span className="sr-only">Facebook</span>📘
              </Button>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg">
                <span className="sr-only">LinkedIn</span>💼
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg">
                <span className="sr-only">X (Twitter)</span>
                ✖️
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg">
                <span className="sr-only">Instagram</span>📷
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}