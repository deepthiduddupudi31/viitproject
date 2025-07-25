'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutMenuBar() {
  const [open, setOpen] = useState(true);

  const links = [
    { label: 'Vision & Mission', href: '/about' },
    { label: 'Chairman', href: '/about/chairman' },
    { label: 'CEO', href: '/about/CEO' },
    { label: 'Rector', href: '/about/Rector' },
    { label: 'Principal', href: '/about/Principal' },
    { label: 'Administration Team', href: '/about/Administration' },
    { label: 'Awards and Accolades', href: '/about/Awards' },
    { label: 'Strategic Plan', href: '/about/StrategicPlan' },
    { label: 'Institutional Distinctiveness', href: '/about/Distinctiveness' },
  ];

  return (
    <>
      {/* Toggle button when menu is closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            top: '250px',
            left: '20px',
            zIndex: 1000,
            backgroundColor: '#175873',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '6px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
        >
          ☰ Menu
        </button>
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: '300px',
          backgroundColor: '#175873',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '20px',
          minHeight: '100vh',
          paddingTop: '20px',
          boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div>
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#2b7c85',
              border: 'none',
              color: 'white',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
            aria-label="Close Menu"
          >
            ✕
          </button>

          {/* Title */}
          <h2
            style={{
              margin: '30px 0',
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            About Us
          </h2>

          {/* Links */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} legacyBehavior>
                  <a
                    style={{
                      display: 'block',
                      padding: '10px 15px',
                      borderRadius: '4px',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = '#2b7c85';
                      el.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = 'transparent';
                      el.style.transform = 'translateX(0)';
                    }}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.9rem',
            opacity: 0.7,
            marginTop: '20px',
          }}
        >
          &copy; 2025 VIIT Project
        </div>
      </aside>
    </>
  );
}
