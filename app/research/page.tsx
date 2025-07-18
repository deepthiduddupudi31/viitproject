import { Button } from "../../components/ui/button"
import { FileText, Award, Building } from "lucide-react"
import Image from "next/image"

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-linkedin mb-12">Research and Innovation</h1>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-900 text-white p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-2">National Semiconductor Technology Summit (NSTS) 2025</h3>
                <p className="text-sm mb-4">
                  September 12-13, 2025
                  <br />
                  VIIT , Amaravati
                </p>
                <p className="text-xs">Addressing Semiconductor Frontiers through India-Centric Innovation</p>
                <div className="flex space-x-4 mt-4">
                  <span className="text-xs">Powered by</span>
                  {/* Logo placeholders */}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Foreign Guest Lecture"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Foreign Guest Lecture on Photo/electrochemical Applications of Atomically Precise Metal Nanoclusters in
                the Energy Fields
              </h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-600 text-white p-4 rounded-lg mb-4">
                <p className="text-sm">
                  exploring emerging trends such as AI in education, intercultural competence, translanguaging,
                  design-based learning, and regression diagnostics in STATA
                </p>
              </div>
              <h3 className="text-lg font-semibold">
                Faculty Development Programme (FDP) Empowering Educators In the Age of AI and Diversity
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Research Lab Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Research Laboratory"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed mb-8">
              Explore our dynamic Research and Innovation hub, where pioneering ideas shape the future. Join us in
              advancing knowledge and driving impactful research across diverse fields.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Discover endless possibilities in our Research and Innovation hub, where creativity meets excellence,
              fostering a culture of transformative discovery.
            </p>

            <div className="flex space-x-6">
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-linkedin text-linkedin bg-transparent"
              >
                <FileText className="w-4 h-4" />
                <span>Publications</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center space-x-2 border-linkedin text-linkedin bg-transparent"
              >
                <Award className="w-4 h-4" />
                <span>Patents</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center space-x-2 border-linkedin text-linkedin bg-transparent"
              >
                <Building className="w-4 h-4" />
                <span>Sponsored Projects</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
