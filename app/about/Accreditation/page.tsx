'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function AccreditationsPage() {
  const data = [
    {
      body: 'NAAC',
      logo: '/NAAC Logo.jpeg',
      certificates: [
        { name: 'NAAC 2012 (Cycle-I)', href: 'https://vignaniit.edu.in/iqac/NAAC%202012.pdf' },
        { name: 'NAAC 2017 (Cycle-II)', href: 'https://vignaniit.edu.in/iqac/NAAC%202017.pdf' },
        { name: 'NAAC 2024 (Cycle-III)', href: 'https://vignaniit.edu.in/naac/NAAC%20Accredititation%20Certificate.pdf' },
      ],
    },
    {
      body: 'NBA',
      logo: '/NBA Logo.png',
      certificates: [
        { name: 'NBA 2009-12', href: 'https://vignaniit.edu.in/iqac/NBA%202009.pdf' },
        { name: 'NBA 2017-20', href: 'https://vignaniit.edu.in/iqac/NBA%202017.pdf' },
        { name: 'NBA 2020-23', href: 'https://vignaniit.edu.in/iqac/NBA%202020.pdf' },
        { name: 'NBA 2024-26', href: 'https://vignaniit.edu.in/NBA%202024-2026.pdf' },
      ],
    },
    {
      body: 'UGC',
      logo: '/UGC Logo.png',
      certificates: [
        { name: 'UGC 2f&12B Certification', href: 'https://vignaniit.edu.in/iqac/UGC%20Certificate%202f%20and%2012B.jpg' },
      ],
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#f5f7fa',
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
          alignItems: 'flex-start',
        }}
      >
        <section
          style={{
            backgroundColor: '#fff',
            maxWidth: '1000px',
            width: '100%',
            padding: '30px',
            marginTop: '80px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
          }}
        >
          <h1
            style={{
              marginBottom: '30px',
              fontSize: '1.8rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
            }}
          >
            Accreditations
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            {data.map((item, index) => (
              <div key={index}>
                <h2
                  style={{
                    color: '#175873',
                    fontSize: '1.4rem',
                    marginBottom: '10px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                  }}
                >
                  {item.body}
                </h2>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                  }}
                >
                  {item.certificates.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '6px',
                        padding: '15px',
                        textDecoration: 'none',
                        color: '#175873',
                        fontWeight: 500,
                        width: '170px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = '#eef6f8';
                        el.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = '#f9f9f9';
                        el.style.transform = 'translateY(0)';
                      }}
                    >
                      <img
                        src={item.logo}
                        alt={`${item.body} Logo`}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'contain',
                          marginBottom: '10px',
                        }}
                      />
                      <span
                        style={{
                          textAlign: 'center',
                          fontSize: '0.9rem',
                        }}
                      >
                        {cert.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
