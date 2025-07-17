import React from 'react'
import { Button } from "../../components/ui/button"

const news = () => {
  return (
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
  )
}

export default news
