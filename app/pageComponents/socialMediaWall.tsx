import Image from "next/image";
<<<<<<< HEAD
import { ThumbsUp, MessageSquare, Youtube, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";


export default function NonParallelSocialWall() {
  const primaryColor = "#005f9e";
  const collegeLogoUrl = "/viit-logo.jpeg";


  // Posts definition (your data, unchanged)
  const posts = [
    {
      platform: "twitter",
      author: "@VIIT_Innovation",
      image: "/sushacks.jpg",
      content: "The final pitches at SUS Hacks were mind-blowing! So much talent in one room.",
      likes: 88,
      comments: 12,
      position: { top: '25%', left: '28%' }
    },
    {
      platform: "linkedin",
      author: "Dr. Anand K.",
      content: "Honored to speak at the IEEE Conference. The discussions were incredibly insightful.",
      image: "/ieee.jpg",
      likes: 210,
      comments: 30,
      position: { top: '55%', left: '0%' }
    },
    {
      platform: "linkedin",
      author: "VIIT Career Center",
      content: "Top placements secured at our recent drive. Your hard work has paid off!",
      likes: 125,
      comments: 18,
      position: { top: '0%', left: '10%' }
    },
    {
      platform: "youtube",
      author: "VIIT Official",
      content: "Relive the moments from Yuvatarang 2025! Our official aftermovie is now live.",
      videoThumbnail: "/yuvatarang.jpg",
      likes: 350,
      comments: 45,
      position: { top: '-5%', left: '55%' }
    },
    {
      platform: "twitter",
      author: "@VIIT_Alumni",
      content: "Our Republic Day celebrations were a testament to our unity and pride. A day to remember!",
      image: "/alumi.jpg",
      likes: 150,
      comments: 22,
      position: { top: '10%', left: '83%' }
    },
    {
      platform: "youtube",
      author: "VISTA Tech Fest",
      content: "Keynote highlights from VISTA 2025 are now available. Don't miss out!",
      videoThumbnail: "/vista.jpg",
      likes: 400,
      comments: 60,
      position: { top: '55%', left: '55%' }
    },
  ];


  const platformIcons = {
    youtube: <Youtube className="w-5 h-5 text-white" />,
    linkedin: <Linkedin className="w-5 h-5 text-white" />,
    twitter: <Twitter className="w-5 h-5 text-white" />,
  };


  // Responsive check (simple)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  // For mobile view: all cards side by side in a horizontal scroll
  return (
    <div className=" bg-gray-100 font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            The Social Wall
          </h1>
          <p className="text-lg text-gray-500">Live updates from the VIIT community</p>
          <div className="w-20 h-1.5 mx-auto mt-4" style={{ backgroundColor: primaryColor }}></div>
        </div>


        {/* Wall */}
        {!isMobile ? (
          <div className="relative w-full h-[100vh]">
            {posts.map((post, index) => (
              <div
                key={index}
                className="absolute bg-white rounded-xl shadow-lg overflow-hidden group w-72 md:w-80 transition-all duration-300 ease-in-out hover:shadow-2xl hover:z-20 hover:scale-105"
                style={{
                  top: post.position.top,
                  left: post.position.left,
                }}
              >
                {(post.image || post.videoThumbnail) && (
                  <div className="relative">
                    <Image
                      src={post.image || post.videoThumbnail}
                      alt="Post media"
                      width={500}
                      height={300}
                      layout="responsive"
                      objectFit="cover"
                    />
                    {post.platform === 'youtube' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Youtube className="w-12 h-12 text-white/80" />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <Image
                      src={collegeLogoUrl}
                      alt="College Logo"
                      width={40}
                      height={40}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{post.author}</p>
                      <p className="text-gray-600 text-xs mt-1">{post.content}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 flex justify-between items-center border-t border-gray-100" style={{ backgroundColor: primaryColor }}>
                  <div className="flex space-x-4 text-white/80">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-xs font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <div className="text-white">
                    {platformIcons[post.platform]}
                  </div>
=======
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
    description: "Cultural event at VIIT campus",
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
  { icon: Youtube, href: "#", color: "hover:bg-blue-600" },
  { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
  { icon: Linkedin, href: "#", color: "hover:bg-linkedin" },
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
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-linkedin text-white rounded-lg flex items-center justify-center transition-colors duration-300 ${social.color}`}
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
                  
                  {/* VIIT Logo */}
                  <div className="absolute top-3 left-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-linkedin font-bold text-xs">VIIT</span>
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
                  <div className="absolute inset-0 bg-linkedin bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        ) : (
          <div className="w-full">
            <div className="flex items-start gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group min-w-[240px] max-w-[250px] transition-all duration-300 hover:shadow-2xl hover:z-20"
                >
                  {(post.image || post.videoThumbnail) && (
                    <div className="relative ">
                      <Image
                        src={post.image || post.videoThumbnail}
                        alt="Post media"
                        width={400}
                        height={240}
                        layout="responsive"
                        objectFit="cover"
                      />
                      {post.platform === 'youtube' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Youtube className="w-10 h-10 text-white/80" />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-3">
                    <div className="flex items-start mb-2">
                      <Image
                        src={collegeLogoUrl}
                        alt="College Logo"
                        width={30}
                        height={30}
                        className="rounded-full flex-shrink-0"
                      />
                      <div className="ml-2">
                        <p className="text-xs font-semibold text-gray-800">{post.author}</p>
                        <p className="text-gray-600 text-xs mt-1">{post.content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 flex justify-between items-center border-t border-gray-100" style={{ backgroundColor: primaryColor }}>
                    <div className="flex space-x-3 text-white/80">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-3 h-3" />
                        <span className="text-xs font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-3 h-3" />
                        <span className="text-xs font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <div className="text-white">
                      {platformIcons[post.platform]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
=======
        </div>
      </div>
    </div>
  );
}
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
