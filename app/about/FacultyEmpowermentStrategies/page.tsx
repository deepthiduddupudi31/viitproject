'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function FacultyEmpowermentStrategiesPage() {
  const policies = [
    { name: 'Staff Awards', href: '/6.3.1.a. Staff Awards.pdf' },
    { name: 'Staff Health Insurance', href: '/6.3.1.b.Staff Health Insurence.pdf' },
    { name: 'Staff Performance Appraisal', href: '/6.3.1.a. Staff Apprisal Policy.pdf' },
    { name: 'Staff Transport Facility', href: '/6.3.1.d. Staff Transport Facility..pdf' },
    { name: 'Staff Welfares', href: '/6.3.1.b. Staff Welfare Policy.pdf' },
    { name: 'Staff Leave Policy', href: '/6.3.1.c. Staff Leave Policy.pdf' },
    { name: 'Financial Aid Policy', href: '/6.3.2 Policy Document.pdf' },
    { name: 'Faculty Career Development', href: '/6.3.1.c Career doucment.pdf' },
    { name: 'Faculty Career Development Events', href: '/6.3.1.c. Staff Leave Policy (1).pdf' },
    { name: 'Faculty Development Programmes (FDPs)/Management Development Programmes (MDPs)', href: '/6.3.3 Brochers and reports final.pdf' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#f0f4f8',
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
            maxWidth: '1200px',
            width: '100%',
            padding: '30px',
            marginTop: '60px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            borderRadius: '12px',
          }}
        >
          <h1
            style={{
              marginBottom: '20px',
              fontSize: '2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
              fontWeight: 700,
            }}
          >
            Faculty Empowerment Strategies
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: '#444',
              marginBottom: '30px',
              maxWidth: '1000px',
              margin: '0 auto 30px auto',
              textAlign: 'justify',
            }}
          >
            The institution values its staff and makes all possible attempts to enhance their To attract and retain both teaching and non-teaching staff a well-defined appraisal system and welfare measures are introduced in the institution. In addition to these many activities are conducted for the career development and progression of the staff.
            <br /><br />
            <strong>Performance appraisal system:</strong> The performance of employees is recognized and rewarded with annual increments based on the recommendations of Staff Appraisal Committee. <br />
            <strong>Avenues for career development/progression:</strong> <br />
            Financial support for faculty for attending conferences, workshops, FDPs, refresher, and orientation courses. <br />
            Provision to the teaching faculty to pursue Ph.D under QIP program and academic leave to the extent of 2 months, those who are pursuing Ph.D in part time mode. <br />
            The non-teaching staff are encouraged to upgrade their qualifications. Once they upgrade, suitable position is given. <br />
            Incentives are provided to faculty members for their outstanding research work, publications, and patents. Rewarded consultancy policy with more than 60% share to the faculty. <br /><br />
            <strong>Welfare measures for teaching and non-teaching staff:</strong> <br />
            Free Group health insurance to all teaching staff members with 2,50,000 INR coverage <br />
            Provident Fund for all eligible staff members <br />
            25-75% of fee concession for the children of all staff in Vignan group of institutions. <br />
            180 days of maternity leave. <br />
            Casual leave, medical leave, earned leave, paternity leave and marriage leaves as per the policy. <br />
            Contributes to ESI for all eligible staff members. <br />
            15 days Paid marriage leave with a gift voucher worth Rs. 3,000. <br />
            On the occasion of Ugadi/Dussehra/Diwali/Sankranti, new clothes and sweets to teaching and non-teaching staff <br />
            Visishta Seva Award with cash prize of Rs. 10,000 to those who complete 10 years of service <br />
            Subsidized lunch and free tea, coffee, and snacks to all the staff members <br />
            Free transport for non-teaching staff and subsidized transport for teaching staff
          </p>

          <h2
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
              color: '#2b7c85',
              marginBottom: '20px',
              marginTop: '40px',
              textTransform: 'uppercase',
            }}
          >
            Related Documents
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {policies.map((policy, index) => (
              <a
                key={index}
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '20px',
                  background: '#fafafa',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: '#175873',
                  fontWeight: 500,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  minHeight: '120px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#eef6f8';
                  el.style.transform = 'translateY(-3px)';
                  el.style.boxShadow = '0 6px 14px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#fafafa';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    marginBottom: '10px',
                  }}
                >
                  📄
                </span>
                <span
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.3',
                  }}
                >
                  {`${index + 1}. ${policy.name}`}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
