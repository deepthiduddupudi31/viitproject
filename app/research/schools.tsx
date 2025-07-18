"use client";

import Image from "next/image";
import Link from "next/link";

const schools = [
  {
    name: "School of Computer Science and Engineering",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Mechanical Engineering",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Advanced Sciences",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Social Sciences and Humanities",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Law",
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
  {
    name: "School of Business",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    link: "#",
  },
];

export default function SchoolsSection() {
  return (
    <section className="relative">
      {/* Background with pattern overlay */}
      <div 
        className="relative bg-linkedin-to-br from-linkedin via-linkedin to-linkedin min-h-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Content container */}
        <div className="relative bg-linkedin z-10 px-6 py-16">
          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Schools</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              At VIIT the entire teaching-learning process is concentrated around seven schools for preparing
              students to make meaningful contributions to society as engaged citizens and leaders in a complex world.
            </p>
          </div>

          {/* Schools grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {schools.map((school, idx) => (
                <div 
                  key={idx} 
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={school.image}
                        alt={school.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-white font-bold text-lg leading-tight mb-2">
                          {school.name}
                        </h3>
                        <Link href={school.link}>
                          <span className="inline-flex items-center text-white/90 text-sm hover:text-white transition-colors duration-200">
                            Explore Now 
                            <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}