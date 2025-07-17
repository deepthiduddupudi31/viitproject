"use client";

import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "CM outlines vision for youth, capital development & innovation",
    excerpt: "Chief Minister Nara Chandrababu Naidu emphasized the pivotal role of youth in shaping the nation's future during the V-Launchpad event...",
    date: "2025-04-29",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Government",
    featured: true
  },
  {
    id: 2,
    title: "VIT-AP, Cyient Foundation sign MoU to foster entrepreneurship",
    excerpt: "VIT-AP University has signed a Memorandum of Understanding (MoU) with Cyient Foundation to enhance entrepreneurship...",
    date: "2025-03-20",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Partnership",
    featured: true
  },
  {
    id: 3,
    title: "VITOPIA-2025 at VIT-AP concludes",
    excerpt: "VIT-AP University successfully concluded VITOPIA 2025, a grand celebration of innovation, technology, and academic excellence...",
    date: "2025-03-10",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Events",
    featured: true
  },
  {
    id: 4,
    title: "Research Excellence Awards 2025",
    excerpt: "VIT-AP recognizes outstanding research contributions across various disciplines in the annual awards ceremony...",
    date: "2025-02-15",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    category: "Research"
  },
  {
    id: 5,
    title: "International Conference on AI and Machine Learning",
    excerpt: "Leading experts from around the world gather at VIT-AP to discuss the future of artificial intelligence...",
    date: "2025-02-08",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    category: "Technology"
  },
  {
    id: 6,
    title: "Student Innovation Challenge Winners Announced",
    excerpt: "Creative solutions to real-world problems showcased by talented students in the annual innovation challenge...",
    date: "2025-01-25",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
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
            <h1 className="text-4xl font-bold text-red-800">News</h1>
            <Link href="/news" className="text-red-700 hover:text-red-800 font-medium border border-red-700 px-4 py-2 rounded hover:bg-red-50 transition-colors">
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
                  <span className="bg-red-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-red-700 transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-red-700 text-white px-3 py-1 rounded text-sm font-medium">
                    Date: {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    })}
                  </span>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-red-700 hover:text-red-800 font-medium text-sm flex items-center"
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
                  <span className="bg-red-700 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-red-700 transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h4>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-red-700 text-white px-2 py-1 rounded text-xs font-medium">
                    Date: {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    })}
                  </span>
                  <Link 
                    href={`/news/${article.id}`}
                    className="text-red-700 hover:text-red-800 font-medium text-xs flex items-center"
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
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Placement Highlight</h2>
          <div className="bg-red-50 p-6 rounded-lg">
            <p className="text-gray-700 text-lg">
              VIT-AP continues to achieve exceptional placement records with top companies recruiting our talented graduates across various disciplines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}