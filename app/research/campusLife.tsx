import React from 'react'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
const campusLife = () => {
  return (
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
  )
}

export default campusLife
