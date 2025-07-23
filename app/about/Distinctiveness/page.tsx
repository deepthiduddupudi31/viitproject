'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function InstitutionalDistinctivenessPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f4f8, #eaf1f7)',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <AboutMenuBar />

      <main
        style={{
          flex: 1,
          padding: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <section
          style={{
            backgroundColor: '#fff',
            maxWidth: '900px',
            width: '100%',
            padding: '40px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              marginBottom: '20px',
              fontSize: '1.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
            }}
          >
            Institutional Distinctiveness
          </h1>

          <p
            style={{
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginBottom: '30px',
              lineHeight: '1.6',
              color: '#333',
            }}
          >
            <a
              href="https://vignaniit.edu.in/aqar2324uploads/Criteria7/7.3.1/7.3.1.Institute%20Distinctiveness.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#175873',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: '#f1f7fa',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLAnchorElement;
                el.style.backgroundColor = '#e0eef4';
                el.style.color = '#144d62';
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLAnchorElement;
                el.style.backgroundColor = '#f1f7fa';
                el.style.color = '#175873';
              }}
            >
              Accessible, Affordable and Quality Higher Education to Students of Social and Economically Weaker Sections
            </a>
          </p>

          <div
            style={{
              marginTop: '30px',
            }}
          >
            <img
              src="/Students.jpg"
              alt="Institutional Distinctiveness"
              style={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
