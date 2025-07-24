import Image from "next/image";
import Link from "next/link";
import { Youtube, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function VITAPHomePage() {
  return (
    <div className="min-h-screen">
      {/* Placement Highlight Section - Exact Match */}
      <div className="bg-white py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Title and Description */}
            <div className="lg:col-span-1">
              <h2 className="text-5xl lg:text-6xl font-bold text-linkedin mb-8 leading-tight">
                Placement Highlight
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                VIIT  proudly showcases its exceptional placements 
                achievements, reflecting a commitment to nurturing industry-ready 
                professionals. Boasting a stellar track record, our students have 
                secured coveted positions in leading companies. The testament to our 
                rigorous academic curriculum and holistic development approach is 
                evident in the remarkable success stories of our graduates.
              </p>
            </div>

            {/* Center - Statistics Dashboard */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300 hover:scale-105">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Header */}
                <div className="text-center mb-6 relative z-10">
                  <div className="text-white text-sm font-medium mb-2">Career Development Centre</div>
                  <div className="text-white text-xs opacity-80">2025 BATCH PLACEMENTS</div>
                </div>

                {/* Central Circle */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-400 group-hover:border-yellow-300 transition-colors duration-300">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">632</div>
                      <div className="text-sm text-blue-700 font-medium">Companies</div>
                    </div>
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">2807</div>
                    <div className="text-xs text-blue-200 leading-tight">Super Dream Offers</div>
                  </div>
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-300 mb-1">530</div>
                    <div className="text-xs text-blue-200 leading-tight">Marquee Offers</div>
                  </div>
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">2862</div>
                    <div className="text-xs text-blue-200 leading-tight">Dream Offers</div>
                  </div>
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-300 mb-1">12579</div>
                    <div className="text-xs text-blue-200 leading-tight">Overall Offers</div>
                  </div>
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">6380</div>
                    <div className="text-xs text-blue-200 leading-tight">Regular Offers</div>
                  </div>
                  <div className="text-center p-3 bg-blue-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-300 mb-1">4051</div>
                    <div className="text-xs text-blue-200 leading-tight">Industry Internships</div>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="text-center relative z-10 bg-blue-800 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all duration-300">
                  <div className="text-yellow-400 font-bold text-lg mb-1">
                    Highest CTC ₹1 Crore
                  </div>
                  <div className="text-blue-200 text-sm">
                    295 Super Dream Companies
                  </div>
                  <div className="text-blue-300 text-xs mt-1">
                    Opportunities & Placement for All 4 Categories: Vellore, Chennai, AP & Bhopal
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Achievement Cards */}
            <div className="lg:col-span-1 space-y-4">
              {[
                { title: "Career Development Centre", subtitle: "2025 BATCH PLACEMENTS", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
                { title: "Congratulations", subtitle: "Top Performers", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
                { title: "Industry Connect", subtitle: "Partnership Program", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
                { title: "LinkedIn Success", subtitle: "Professional Network", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
                { title: "ServiceNow", subtitle: "Partnership", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" },
                { title: "LinkedIn Certification", subtitle: "Professional Development", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-gray-200">
                  <div className="flex items-center p-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-linkedin transition-colors duration-300">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-linkedin transition-colors duration-300">
                      <span className="text-white text-xs font-bold">VIIT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Recruiters Section */}
          {/* <div className="mt-20">
            <h3 className="text-4xl font-bold text-linkedin mb-12 text-left">
              Top Recruiters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                "Microsoft", "Google", "Amazon", "TCS", "Infosys", "Wipro", "Accenture", "IBM",
                "Cognizant", "HCL", "Tech Mahindra", "Capgemini", "Oracle", "SAP", "Adobe", "Salesforce"
              ].map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-110 border border-gray-200">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={https://images.pexels.com/photos/${3184465 + index * 50}/pexels-photo-${3184465 + index * 50}.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop}
                      alt={company}
                      width={100}
                      height={60}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-center font-semibold text-gray-800 text-sm group-hover:text-linkedin transition-colors duration-300">
                    {company}
                  </h4>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}