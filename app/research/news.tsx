"use client";

import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "CM outlines vision for youth, capital development & innovation",
    excerpt: "Chief Minister Nara Chandrababu Naidu emphasized the pivotal role of youth in shaping the nation's future during the V-Launchpad event...",
    date: "2025-04-29",
    image: "https://tse3.mm.bing.net/th/id/OIP.-yTwsdVYa-1bMkcZ1KfvfAHaH_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Government",
    featured: true
  },
  {
    id: 2,
    title: "VIIT, Cyient Foundation sign MoU to foster entrepreneurship",
    excerpt: "VIIT  has signed a Memorandum of Understanding (MoU) with Cyient Foundation to enhance entrepreneurship...",
    date: "2025-03-20",
    image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3BhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    category: "Partnership",
    featured: true
  },
  {
    id: 3,
    title: "VITOPIA-2025 at VIIT concludes",
    excerpt: "VIIT  successfully concluded VITOPIA 2025, a grand celebration of innovation, technology, and academic excellence...",
    date: "2025-03-10",
    image: "https://static.vecteezy.com/system/resources/previews/011/643/706/non_2x/business-newspaper-isolated-on-white-background-daily-newspaper-mock-up-concept-photo.jpg",
    category: "Events",
    featured: true
  },
  {
    id: 4,
    title: "Research Excellence Awards 2025",
    excerpt: "VIIT recognizes outstanding research contributions across various disciplines in the annual awards ceremony...",
    date: "2025-02-15",
    image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
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
    id: 6,
    title: "Student Innovation Challenge Winners Announced",
    excerpt: "Creative solutions to real-world problems showcased by talented students in the annual innovation challenge...",
    date: "2025-01-25",
    image: "https://tse3.mm.bing.net/th/id/OIP.jlnqlKvx_vcnMXSPHpQRcAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Students"
  }
];

export default function NewsSection() {
  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-linkedin">News</h1>
            <Link href="/news" className="text-linkedin hover:text-blue-600 font-medium border border-linkedin px-4 py-2 rounded hover:bg-blue-50 transition-colors">
              View More
            </Link>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((article, index) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-linkedin text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-linkedin text-white px-3 py-1 rounded text-sm font-medium">
                    Date: {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    })}
                  </span>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-linkedin hover:text-blue-600 font-medium text-sm flex items-center"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-linkedin text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-linkedin text-white px-2 py-1 rounded text-xs font-medium">
                    Date: {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    })}
                  </span>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-linkedin hover:text-blue-600 font-medium text-xs flex items-center"
                  >
                    Read More 
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      
    </div>
  );
}