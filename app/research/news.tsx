"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsArticles = [
  {
    id: 1,
    title: "CM outlines vision for youth, capital development & innovation",
    excerpt: "Chief Minister Nara Chandrababu Naidu emphasized the pivotal role of youth in shaping the nation's future during the V-Launchpad event...",
    date: "2025-04-29",
    image: "https://i.ytimg.com/vi/i5Mpf-vJ4wk/maxresdefault.jpg",
    category: "Government"
  },
  {
    id: 2,
    title: "VIIT, Cyient Foundation sign MoU to foster entrepreneurship",
    excerpt: "VIIT has signed a Memorandum of Understanding (MoU) with Cyient Foundation to enhance entrepreneurship...",
    date: "2025-03-20",
    image: "https://www.yovizag.com/wp-content/uploads/2025/06/Copy-of-Copy-of-FB-For-Yo-Vizag-2025-06-12T160737.768-750x375.jpg",
    category: "Partnership"
  },
  
  {
    id: 4,
    title: "National Level Best Performance Award 2024 by CISCO",
    excerpt: "VIIT recognizes as the National Level Best Performance  across various institues  in the India...",
    date: "2025-02-15",
    image: "https://vignaniit.edu.in/images/cisco.jpeg",
    category: "Research"
  },
  {
    id: 5,
    title: "International Conference on AI and Machine Learning",
    excerpt: "Leading experts from around the world gather at VIIT to discuss the future of artificial intelligence...",
    date: "2025-02-08",
    image: "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
    category: "Technology"
  },
  {
    id: 3,
    title: "The State Energy Conservation Award (SECA - 2023)",
    excerpt: "VIIT(A) bags the State Energy Conservation Award (SECA - 2023) by the government of Andhra Pradesh",
    date: "2025-03-10",
    image: "https://vignaniit.edu.in/images/SEnergyConservationA.jpeg",
    category: "Events"
  },
  {
    id: 6,
    title: " Global Student Innovation Challenge Finalists Announced",
    excerpt: "Creative solutions to real-world problems showcased by talented students in the annual innovation challenge...",
    date: "2025-01-25",
    image: "https://www.pdma.org/resource/resmgr/images/images-2/gsic-banner-nominations-new.gif",
    category: "Students"
  }
];

export default function NewsSection() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-blue-800">News</h1>
            <Link href="/news" className="text-blue-700 hover:text-blue-800 font-medium border border-blue-700 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
              View More
            </Link>
          </div>
        </div>
      </div>

      {/* All News in Slider */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsArticles.map(article => (
            <SwiperSlide key={article.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium">
                      Date: {new Date(article.date).toLocaleDateString('en-US')}
                    </span>
                    <Link href={`/news/${article.id}`} className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
