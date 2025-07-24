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
}
