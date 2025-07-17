import { Button } from "@/components/ui/button"
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
          <div className="bg-red-800 text-white flex items-center justify-center p-12">
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
            <div className="bg-red-800 text-white flex items-center justify-center p-8">
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
          <h2 className="text-4xl font-bold text-red-800 mb-6">Explore The Vibrant Life At VIIT</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From cultural events to academic competitions, from sports tournaments to innovation challenges - discover
            the endless opportunities that await you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Cultural Events</h3>
              <p className="text-gray-700">
                Participate in festivals, performances, and cultural celebrations throughout the year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Student Clubs</h3>
              <p className="text-gray-700">
                Join various clubs and societies to pursue your interests and develop new skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Innovation Hub</h3>
              <p className="text-gray-700">Engage in research projects, hackathons, and entrepreneurship programs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
