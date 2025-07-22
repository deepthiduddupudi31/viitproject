import React from 'react';
import Image from 'next/image';

const CoursesOfferedPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 ">
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 uppercase tracking-wider">
              Courses Offered
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore the programs available for the upcoming academic years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
            
            <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-blue-200 w-full max-w-md transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/courseoffered1.jpg"
                  alt="Courses Offered 2025-26"
                  width={500}
                  height={700}
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-blue-200 w-full max-w-md transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/courseoffered2.jpeg" 
                  alt="Courses Offered 2024-25"
                  width={500}
                  height={700}
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesOfferedPage;
