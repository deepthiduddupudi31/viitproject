<<<<<<< HEAD
'use client';

import { useState } from 'react';
import AboutMenuBar from '../../components/AboutMenubar';

export default function AboutPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const cardStyle = (type: string) => ({
    flex: '1 1 300px',
    maxWidth: '500px',
    textAlign: 'center' as const,
    transition: 'transform 0.3s ease',
    transform: hovered === type ? 'scale(1.03)' : 'scale(1)',
    cursor: 'pointer',
  });

  const imageStyle = (type: string) => ({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow:
      hovered === type
        ? '0 6px 16px rgba(0,0,0,0.3)'
        : '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  });

  const textStyle = (type: string) => ({
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: hovered === type ? '1.4rem' : '1.2rem',
    color: hovered === type ? '#175873' : '#333',
    letterSpacing: hovered === type ? '1px' : '0',
    textTransform: 'uppercase' as const,
    textShadow:
      hovered === type ? '1px 1px 4px rgba(0,0,0,0.3)' : 'none',
    transition: 'all 0.3s ease',
  });

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      {/* <AboutMenuBar /> */}

      <main
        style={{
          flex: 1,
          padding: '20px',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Vision & Mission</h1>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            paddingTop: '120px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Vision */}
          <div
            style={cardStyle('vision')}
            onMouseEnter={() => setHovered('vision')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="/vision.jpg"
              alt="Vision"
              style={imageStyle('vision')}
            />
            <p style={textStyle('vision')}>OUR VISION</p>
          </div>

          {/* Mission */}
          <div
            style={cardStyle('mission')}
            onMouseEnter={() => setHovered('mission')}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="/mission.jpg"
              alt="Mission"
              style={imageStyle('mission')}
            />
            <p style={textStyle('mission')}>OUR MISSION</p>
          </div>
        </div>
      </main>
    </div>
  );
=======
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-linkedin mb-8">About VIIT</h1>

            {/* Video Embed Placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-video mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-linkedin rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-gray-600">VIIT  - Empowering Academic Excellence</p>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg font-semibold text-linkedin">V</p>
              <p>
                IT has been a forerunner in delivering quality education. Consistently ranked among the top educational
                institutes in the country, the VIT group of institutions have had a proud tradition of pursuing
                knowledge and excellence. In keeping with this tradition, the leadership at VIIT resonates a dynamic
                blend of academic initiative and industry partnership with a vision of creating one of the finest
                academic destinations in the world.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-linkedin mb-6">ANNOUNCEMENTS</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-06-04</p>
                <h3 className="font-medium text-gray-900">Integrated M.Tech.- 2025 Results & Choice filling</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-23</p>
                <h3 className="font-medium text-gray-900">VITREE-2025 (July Session)-Results</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-08</p>
                <h3 className="font-medium text-gray-900">
                  VITMEE (M.Tech. 2025) Admission Results - Counselling & Choice filling
                </h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-03</p>
                <h3 className="font-medium text-gray-900">VITEEE – 2025 Results</h3>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">2025-05-13</p>
                <h3 className="font-medium text-gray-900">Fresher's Fee Payment 2025</h3>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">2025-02-17</p>
                <h3 className="font-medium text-gray-900">Additional announcement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
>>>>>>> 64e2da18118fcbfa5f9045783253d47e7e36146f
}
