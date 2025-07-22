import Image from "next/image";
import Link from "next/link";
import { Youtube, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function SocialMediaWall() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-linkedin mb-4">The Wall</h2>
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-8">of Socials from</h3>
            </div>

            {/* Main Featured Post */}
            <div className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-linkedin"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90">
                <span className="text-linkedin font-bold text-2xl tracking-widest">VIIT</span>
              </div>

              <div className="ml-6 mr-12 relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
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

            {/* Social Icons */}
            <div className="text-center lg:text-left">
              <p className="text-gray-700 font-medium mb-4">Follow us on our Socials</p>
              <div className="flex justify-center lg:justify-start space-x-3">
                {[Youtube, Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-600"
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Grid Posts */}
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
                    src={`https://images.pexels.com/photos/${3184465 + index * 100}/pexels-photo-${3184465 + index * 100}.jpeg`}
                    alt={post.title}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
