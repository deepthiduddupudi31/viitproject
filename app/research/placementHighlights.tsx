import Image from "next/image";
import Link from "next/link";
import { Youtube, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const socialPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "Dr. G Viswanathan",
    description: "Chancellor's message on academic excellence",
    platform: "instagram"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "IEC V-Launchpad 2025",
    description: "Innovation and entrepreneurship event",
    platform: "facebook"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "Women's Day Celebration",
    description: "Celebrating achievements of women faculty",
    platform: "instagram"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "HACKATHON 2025",
    description: "Students showcasing innovative solutions",
    platform: "linkedin"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "KARTHIK Performance",
    description: "Cultural event at VIT-AP campus",
    platform: "youtube"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    title: "Leadership Meet",
    description: "Faculty and administration gathering",
    platform: "facebook"
  }
];

const socialLinks = [
  { icon: Youtube, href: "#", color: "hover:bg-red-600" },
  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
  { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  { icon: Twitter, href: "#", color: "hover:bg-black" },
  { icon: Instagram, href: "#", color: "hover:bg-pink-600" }
];

const placementStats = [
  { number: "2807", label: "Super Dream Offers", color: "text-yellow-400" },
  { number: "530", label: "Marquee Offers", color: "text-blue-300" },
  { number: "2862", label: "Dream Offers", color: "text-yellow-400" },
  { number: "12579", label: "Overall Offers", color: "text-blue-300" },
  { number: "6380", label: "Regular Offers", color: "text-yellow-400" },
  { number: "4051", label: "Industry Internships", color: "text-blue-300" }
];

const topRecruiters = [
  { name: "Microsoft", logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
  { name: "Google", logo: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
  { name: "Amazon", logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
  { name: "TCS", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
  { name: "Infosys", logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
  { name: "Wipro", logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" }
];

const achievementCards = [
  {
    title: "Career Development Centre",
    subtitle: "2025 BATCH PLACEMENTS",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    title: "Congratulations",
    subtitle: "Top Performers",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    title: "Industry Connect",
    subtitle: "Partnership Program",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  },
  {
    title: "LinkedIn Success",
    subtitle: "Professional Network",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
  }
];

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
                <h2 className="text-5xl lg:text-6xl font-bold text-red-800 mb-4">
                  The Wall
                </h2>
                <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8">
                  of Socials from
                </h3>
              </div>

              {/* Main Featured Post */}
              <div className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-800"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90">
                  <span className="text-red-800 font-bold text-2xl tracking-widest">VIT-AP</span>
                </div>
                
                <div className="ml-6 mr-12 relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                    alt="VIT-AP Main Event"
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-800 font-bold text-xs">VIT-AP</span>
                      </div>
                      <span className="text-sm font-medium">VIT-AP UNIVERSITY</span>
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
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-red-800 text-white rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Social Media Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialPosts.map((post, index) => (
                <div
                  key={post.id}
                  className={`relative group cursor-pointer ${
                    index === 0 || index === 3 ? 'row-span-1' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {/* VIT-AP Logo */}
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-800 font-bold text-xs">VIT-AP</span>
                      </div>
                    </div>

                    {/* Platform Icon */}
                    <div className="absolute bottom-3 right-3">
                      {post.platform === 'instagram' && <Instagram className="w-5 h-5 text-white" />}
                      {post.platform === 'facebook' && <Facebook className="w-5 h-5 text-white" />}
                      {post.platform === 'linkedin' && <Linkedin className="w-5 h-5 text-white" />}
                      {post.platform === 'youtube' && <Youtube className="w-5 h-5 text-white" />}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-3 left-3 right-12 text-white">
                      <h4 className="font-semibold text-sm mb-1 line-clamp-1">{post.title}</h4>
                      <p className="text-xs opacity-90 line-clamp-2">{post.description}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-red-800 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Placement Highlight Section */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-16 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Title and Description */}
            <div className="lg:col-span-1 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Placement Highlight
              </h2>
              <p className="text-lg leading-relaxed opacity-90 mb-8">
                VIT-AP University proudly showcases its exceptional placements achievements, 
                reflecting a commitment to nurturing industry-ready professionals. Boasting a 
                stellar track record, our students have secured coveted positions in leading 
                companies. The testament to our rigorous academic curriculum and holistic 
                development approach is evident in the remarkable success stories of our graduates.
              </p>
            </div>

            {/* Center - Statistics Dashboard */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Central Circle */}
                <div className="flex justify-center mb-8 relative z-10">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900">632</div>
                      <div className="text-sm text-blue-700 font-medium">Companies</div>
                    </div>
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {placementStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-blue-200 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 text-center relative z-10">
                  <div className="text-yellow-400 font-bold text-sm mb-1">
                    Highest CTC ₹1 Crore
                  </div>
                  <div className="text-blue-200 text-xs">
                    295 Super Dream Companies
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Achievement Cards */}
            <div className="lg:col-span-1 space-y-4">
              {achievementCards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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
                      <h4 className="font-bold text-gray-800 text-sm mb-1">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">VIT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Recruiters Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Top Recruiters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {topRecruiters.map((recruiter, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={recruiter.logo}
                      alt={recruiter.name}
                      width={100}
                      height={60}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-center font-semibold text-gray-800 text-sm">
                    {recruiter.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}