'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function CenterOfExcellencePage() {
  const data = [
    { name: 'AICTE Idea Lab', logo: '/IdeaLab Logo.png', href: '/AICTE Idea Lab approved letter.pdf' },
    { name: 'DST-FIST', logo: '/DST Logo.png', href: '/DST-FIST Approval Letter.pdf' },
    { name: 'UGC STRIDE', logo: '/UGC Logo.png', href: '/UGC Stride Approval letter.pdf' },
    { name: 'UGC Paramarsh', logo: '/UGC Logo.png', href: '/UGC Paramarsh approval.pdf' },
    { name: 'MSME Incubation', logo: '/MSME Logo.png', href: '/MSME Incubation Center.pdf' },
    { name: 'Unnat Bharat Abhiyan', logo: '/UBA Logo.png', href: '/UBA scheme.pdf' },
    { name: 'IIC 2018-19', logo: '/IIC Logo.png', href: '/1. IIC Establisment Certificate 2018-19.pdf' },
    { name: 'IIC 2020-21', logo: '/IIC Logo.png', href: '/4. IIC_Rating_Certificate_2020-21.pdf' },
    { name: 'IIC 2021-22', logo: '/IIC Logo.png', href: '/2. IIC_Appreciation_Letter_AY_2021_22 (1).pdf' },
    { name: 'IIC 2022-23', logo: '/IIC Logo.png', href: '/3. IIC_Appreciation_Letter_AY_2022_23.pdf' },
    { name: 'IIC 2023-24', logo: '/IIC Logo.png', href: '/RatingCertificate_2023-24.pdf' },
    { name: 'IIC NIPAM 2022', logo: '/IIC Logo.png', href: '/NIPAM_Certificate_of_appreciation 2022.pdf' },
    { name: 'VFSTR Research Center', logo: '/VFSTR Logo.png', href: '/supervisors recognized in VIIT, Vizag research centre.pdf' },
    { name: 'APSCHE QAC Mentor', logo: '/APSCHE Logo.png', href: 'APSCHE Mentor.pdf' },
    { name: 'CISCO', logo: '/CISCO Logo.png', href: '/CISCO Industry Center of Excellence Award.jpg' },
    { name: 'IUCUEE', logo: '/IUCUEE Logo.png', href: '/IUCEE_Consortium 2015-16.pdf' },
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
            maxWidth: '1400px',
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
              fontSize: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
            }}
          >
            Center of Excellence
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px',
            }}
          >
            {data.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#333',
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#eef6f8';
                  el.style.transform = 'translateY(-4px) scale(1.03)';
                  el.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#f9f9f9';
                  el.style.transform = 'translateY(0) scale(1)';
                  el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
                }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    width: '130px',
                    height: '130px',
                    objectFit: 'contain',
                    marginBottom: '15px',
                  }}
                />
                <span
                  style={{
                    textAlign: 'center',
                    fontSize: '1rem',
                    color: '#175873',
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
