import Image from "next/image";
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
      <div className="container mx-auto px-4 lg:px-8 py-10">
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
                </div>
              </div>
            ))}
          </div>
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
