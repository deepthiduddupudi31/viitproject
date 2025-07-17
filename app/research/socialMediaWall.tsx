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

export default function SocialWallSection() {
  return (
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
  );
}