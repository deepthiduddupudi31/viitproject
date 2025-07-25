'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function AdministrationPage() {
  const team = [
    { sno: 1, name: 'Mr. N.Srikant', designation: 'Chief Executive Officer', contact: '(+91) 891-2755444' },
    { sno: 2, name: 'Dr. V. Madhusudhan Rao', designation: 'Rector', contact: '(+91) 891-2755333' },
    { sno: 3, name: 'Dr. J. Sudhakar', designation: 'Principal', contact: '9052066699 / (+91) 891-2517111' },
    { sno: 4, name: 'Dr. Ch. Hari Govinda Rao', designation: 'Dean Administration', contact: '9866399930' },
    { sno: 5, name: 'Dr. Ch. Ramesh Babu', designation: 'Dean-IQAC', contact: '9581807822' },
    { sno: 6, name: 'Dr. A. Naga Jyothi', designation: 'Dean Academics', contact: '9398121200' },
    { sno: 7, name: 'Dr. B. Sateesh', designation: 'Dean Evaluation', contact: '9550293989' },
    { sno: 8, name: 'Dr. K. Madhusudan Rao', designation: 'Dean Admissions', contact: '9618356061' },
    { sno: 9, name: 'Dr. B. Prasad', designation: 'Dean Placement & Training', contact: '7093098775' },
    { sno: 10, name: 'Dr. R. Sundara Ramam', designation: 'Dean Faculty Affairs', contact: '9440031140' },
    { sno: 11, name: 'Dr. G. Kranthi Kumar', designation: 'Dean Research & Development', contact: '9966600092' },
    { sno: 12, name: 'Dr. Susant Kumar Sahu', designation: 'Dean International Student Affairs', contact: '9642190851' },
    { sno: 13, name: 'Dr. Ch. Rohini Kumar', designation: 'Dean-Industry Relations', contact: '8008606053' },
    { sno: 14, name: 'Mr. Ch. Siva Rama Krishna', designation: 'Dean-Student Affairs', contact: '9989921032' },
    { sno: 15, name: 'Mr. B. Bramhaiah', designation: 'Associate Dean - Infrastructure', contact: '7989494729' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f7', color: '#333' }}>
      {/* <AboutMenuBar /> */}

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
            marginTop: '150px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
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
            Administration Team
          </h1>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#175873', color: '#fff' }}>
                  <th style={cellHeader}>S.No</th>
                  <th style={cellHeader}>Name</th>
                  <th style={cellHeader}>Designation</th>
                  <th style={cellHeader}>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {team.map((member, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#f1f8fb' : '#fff',
                    }}
                  >
                    <td style={cell}>{member.sno}</td>
                    <td style={cell}>{member.name}</td>
                    <td style={cell}>{member.designation}</td>
                    <td style={cell}>{member.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

const cellHeader: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
};

const cell: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};
