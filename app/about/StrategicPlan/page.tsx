'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function StrategicPlanPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
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
            maxWidth: '900px',
            width: '100%',
            padding: '30px',
            marginTop: '100px',
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
            Strategic Plan
          </h1>

          <div
            style={{
              lineHeight: '1.8',
              textAlign: 'justify',
              color: '#333',
              fontSize: '1rem',
            }}
          >
            <p>
              The Vision of VIIT emphasizes quality technical education and producing creative, socially conscious individuals. All governance policies align with NEP-2020 and sustainable goals to contribute to national development.
            </p>

            <ol style={{ paddingLeft: '20px', marginTop: '20px' ,
              listStyleType: 'decimal',}}>
              <li>
                The Institute’s effective leadership, demonstrated over two decades, has made it a preferred institution.
              </li>
              <li>
                A decentralized approach ensures all activities are efficiently executed.
              </li>
              <li>
                The well-structured organizational hierarchy promotes success in academics, extra-curricular activities, and the Indian Knowledge System.
              </li>
              <li>
                Participative management and decentralization guide the Institutional Perspective Plan, with stakeholder feedback driving continuous improvement.
              </li>
              <li>
                Decentralization empowers students and faculty to engage in decision-making, fostering a sense of responsibility.
              </li>
              <li>
                Four apex bodies and nineteen faculty-student committees, each with defined functions, support democratic governance.
              </li>
              <li>
                Decentralization empowered students and faculty to participate in decision-making bodies, fostering a sense of responsibility in everyone.
              </li>
            </ol>

            <div
              style={{
                marginTop: '30px',
                textAlign: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#175873',
              }}
            >
              <a
                href="/Strategic Plan 1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  margin: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#175873',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = '#144d62')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = '#175873')
                }
              >
                Strategic Plan 2017–22
              </a>

              <a
                href="/Strategic Plan 2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  margin: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#175873',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = '#144d62')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = '#175873')
                }
              >
                Strategic Plan 2023–28
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
