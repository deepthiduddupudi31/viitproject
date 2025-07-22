import Image from "next/image";
import Link from "next/link";
import { Youtube, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function VITAPHomePage() {
  return (
    <div className="min-h-screen">
      {/* Social Wall Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title and Main Image */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-5xl lg:text-6xl font-bold text-linkedin mb-4">
                  The Wall
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8">
                  of Socials from
                </h3>
              </div>

              {/* Main Featured Post */}
              <div className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-linkedin"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90">
                  <span className="text-linkedin font-bold text-2xl tracking-widest">VIIT</span>
                </div>
                
                <div className="ml-6 mr-12 relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                    alt="VIIT Main Event"
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-linkedin font-bold text-xs">VIIT</span>
                      </div>
                      <span className="text-sm font-medium">VIIT </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Social Media Follow Section */}
              <div className="text-center lg:text-left">
                <p className="text-gray-700 font-medium mb-4">Follow us on our Socials</p>
                <div className="flex justify-center lg:justify-start space-x-3">
                  <Link href="#" className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-600">
                    <Youtube className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-600">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-linkedin">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-black">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-pink-600">
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Social Media Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Dr. G Viswanathan", desc: "Chancellor's message", platform: "instagram" },
                { title: "IEC V-Launchpad 2025", desc: "Innovation event", platform: "facebook" },
                { title: "Women's Day Celebration", desc: "Faculty achievements", platform: "instagram" },
                { title: "HACKATHON 2025", desc: "Student innovations", platform: "linkedin" },
                { title: "KARTHIK Performance", desc: "Cultural event", platform: "youtube" },
                { title: "Leadership Meet", desc: "Faculty gathering", platform: "facebook" }
              ].map((post, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={`https://images.pexels.com/photos/${3184465 + index * 100}/pexels-photo-${3184465 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=300&h=250&fit=crop`}
                      alt={post.title}
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-linkedin font-bold text-xs">VIIT</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      {post.platform === 'instagram' && <Instagram className="w-5 h-5 text-white" />}
                      {post.platform === 'facebook' && <Facebook className="w-5 h-5 text-white" />}
                      {post.platform === 'linkedin' && <Linkedin className="w-5 h-5 text-white" />}
                      {post.platform === 'youtube' && <Youtube className="w-5 h-5 text-white" />}
                    </div>

                    <div className="absolute bottom-3 left-3 right-12 text-white">
                      <h4 className="font-semibold text-sm mb-1 line-clamp-1">{post.title}</h4>
                      <p className="text-xs opacity-90 line-clamp-2">{post.desc}</p>
                    </div>

                    <div className="absolute inset-0 bg-linkedin bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
                      src={`https://images.pexels.com/photos/${3184465 + index * 50}/pexels-photo-${3184465 + index * 50}.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop`}
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