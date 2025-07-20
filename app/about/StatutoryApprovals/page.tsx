'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function StatutoryApprovalsPage() {
  const data = [
    {
      logo: '/AICTE Logo.png',
      pdfs: [
        { name: 'AICTE Approval 2024-25', href: '/AICTE 2024-25.pdf' },
        { name: 'AICTE Approval 2023-24', href: '/AICTE 2023-24.pdf' },
        { name: 'AICTE Approval 2022-23', href: '/AICTE 2022-23.pdf' },
        { name: 'AICTE Approval 2021-22', href: '/AICTE 2021-22.pdf' },
        { name: 'AICTE Approval 2020-21', href: '/AICTE 2020-21.pdf' },
        { name: 'AICTE Approval 2019-20', href: '/AICTE 2019-20.pdf' },
        { name: 'AICTE Approval 2018-19', href: '/AICTE 2018-19.pdf' },
      ],
    },
    {
      logo: '/JNTUK Logo.png',
      pdfs: [
        { name: 'JNTUK Permanent Affiliation 2019-20', href: '/JNTUK 1 2019-20.pdf' },
        { name: 'JNTUK Permanent Affiliation 2022-23', href: '/JNTUK 1 2022-23.pdf' },
      ],
    },
    {
      logo: '/UGC Logo.png',
      pdfs: [
        { name: 'UGC Autonomous Status 2017', href: '/UGC 1.pdf' },
        { name: 'UGC Autonomous Status 2024', href: '/UGC 2.pdf' }
      ],
    },
    {
      logo: '/JNTUGV Logo.jpg',
      pdfs: [
        { name: 'JNTUGV Research Center CE 2023-25', href: '/JNTU-GV Research Centre-CE-2023-2025.pdf' },
        { name: 'JNTUGV Research Center CSE 2023-25', href: '/JNTU-GV Research Centre-CSE-2023-2025.pdf' },
        { name: 'JNTUGV Research Center ECE 2023-25', href: '/JNTU-GV Research Centre-ECE-2023-2025.pdf' },
        { name: 'JNTUGV Research Center EEE 2023-25', href: '/JNTU-GV Research Centre-EEE-2023-2025.pdf' },
        { name: 'JNTUGV Research Center Mech 2023-25', href: '/JNTU-GV Research Centre-Mech-2023-2025.pdf' },
        { name: 'JNTUGV Research Center MBA 2023-25', href: '/JNTU-GV Research Centre-MBA-2023-2025.pdf' },
      ],
    },
    {
      logo: '/JNTUK Logo.png',
      pdfs: [
        { name: 'JNTUK Research Center CSE 2016-17', href: '/JNTUK-CSE Research Center 2016-17.pdf' },
        { name: 'JNTUK Research Center MECH 2016-17', href: '/JNTUK-ME Research Center 2016-17.pdf' },
        { name: 'JNTUK Research Center ECE 2017-18', href: '/JNTUK-ECE Research Center 2017-18.pdf' },
        { name: 'JNTUK Research Center CSE 2018-19', href: '/JNTUK-CSE Research Center 2018-19.pdf' },
        { name: 'JNTUK Research Center EEE 2018-19', href: '/JNTUK-EEE Research Center 2018-19.pdf' },
        { name: 'JNTUK Research Center MBA 2018-19', href: '/JNTUK-MBA Research Center 2018-19.pdf' },
        { name: 'JNTUK Research Center ECE 2019-20', href: '/JNTUK-ECE Research Center 2019-20.pdf' },
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
              marginBottom: '20px',
              fontSize: '1.8rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
            }}
          >
            Statutory Approvals
          </h1>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    backgroundColor: '#175873',
                    color: 'white',
                    fontSize: '1rem',
                    borderTopLeftRadius: '6px',
                    width: '30%',
                  }}
                >
                  Statutory Body
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '12px',
                    backgroundColor: '#175873',
                    color: 'white',
                    fontSize: '1rem',
                    borderTopRightRadius: '6px',
                  }}
                >
                  Approvals
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  }}
                >
                  <td
                    style={{
                      padding: '12px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={`Logo ${index + 1}`}
                      style={{
                        maxWidth: '120px',
                        height: 'auto',
                      }}
                    />
                  </td>
                  <td style={{ padding: '12px' }}>
                    <ul
                      style={{
                        listStyle: 'disc',
                        paddingLeft: '1.2rem',
                        margin: 0,
                        lineHeight: '1.6',
                      }}
                    >
                      {item.pdfs.map((pdf, i) => (
                        <li key={i}>
                          <a
                            href={pdf.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: '#175873',
                              fontWeight: 500,
                              textDecoration: 'none',
                              transition: 'color 0.3s ease, transform 0.3s ease',
                              display: 'inline-block',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.target as HTMLAnchorElement;
                              el.style.color = '#2b7c85';
                              el.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.target as HTMLAnchorElement;
                              el.style.color = '#175873';
                              el.style.transform = 'translateX(0)';
                            }}
                          >
                            {pdf.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
