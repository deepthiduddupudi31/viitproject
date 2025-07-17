import React from 'react'
import { Button } from "../../components/ui/button"
import Image from "next/image"

const socialMediaWall = () => {
  return (
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
  )
}

export default socialMediaWall
