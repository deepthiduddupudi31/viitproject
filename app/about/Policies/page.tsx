'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function PoliciesAndPerspectivesPage() {
  const policies = [
    { name: 'HR Policies & Procedures', href: '/HR Policies _ perspectivesn_HR Manual 2017 - 50 nos.pdf' },
    { name: 'Financial Policy', href: '/Finance Policy.pdf' },
    { name: 'Anti-Ragging Policy', href: '/Anti-Ragging Policy.pdf' },
    { name: 'Code of Ethics Policy', href: '/Code Of Ethics Policy.pdf' },
    { name: 'Discipline Policy', href: '/Discipline Policy.pdf' },
    { name: 'e-Governance Policy', href: '/e-Governance Policy.pdf' },
    { name: 'Green Campus Policy', href: '/Green Campus Policy.pdf' },
    { name: 'Grievance Redressal Policy', href: '/Grievance Redressal Policy.pdf' },
    { name: 'Internal Complaint Policy', href: '/Internal Complaint Policy.pdf' },
    { name: 'Internship Manual and Student Diary', href: '/Internship manual and student diary.pdf' },
    { name: 'NISP-Policy', href: '/NISP-Policy.pdf' },
    { name: 'Policy on Divyangjan Facilities', href: '/Policy on Divyangjan Facilities.pdf' },
    { name: 'IT Policy', href: '/IT Policy.pdf' },
    { name: 'Faculty Development Policy', href: '/Faculty Development.pdf' },
    { name: 'Job Induction Policy', href: '/Job Induction Policy.pdf' },
    { name: 'Admission Policy & Procedures', href: '/Student Admission Policy.pdf' },
    { name: 'Infrastructure Maintenance Policy', href: '/Infrastructure Development Policy.pdf' },
    { name: 'Environment & Sustainable Policy', href: '/Environment Sustainble Policy.pdf' },
    { name: 'Gender Policy', href: '/Gender Policy.pdf' },
    { name: 'Industrial Training Policy', href: '/Industrial Training policy.pdf' },
    { name: 'Research Development Policy', href: '/Research Policy.pdf' },
    { name: 'Promotion Policy', href: '/Promotion policy.pdf' },
    { name: 'Means and Merits Scholarship Policy', href: '/Scholarship Scheme Policy.pdf' },
    { name: 'Physical Education Policy', href: '/Physiscal Education.pdf' },
    { name: 'Funds Mobilisation Policy', href: '/mobalization of funds.pdf' },
    { name: 'Scribe Policy', href: '/Scribe Policy.pdf' },
    { name: 'Adjunct Faculty Policy', href: '/Adjunct Faculty Policy.pdf' },
    { name: 'Placements Policy', href: '/PLACEMENTS POLICY _VIIT_01092023.pdf' },
    { name: 'Stakeholder Feedback Policy', href: '/Stakeholder Feedback policy.pdf' },
    { name: 'Value Added Courses Policy', href: '/VAC policy.pdf' },
    { name: 'Add-on Courses Policy', href: '/ADD-ON Courses policy.pdf' },
    { name: 'Course Code Policy', href: '/Course Code Policy.pdf' },
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
            Policies & Perspectives
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
            Policies and Perspectives at VIIT play a pivotal role in the institution's governance and overall functioning. Their importance can be highlighted in several key areas:
            <br /><br />
            <strong>Unified Framework:</strong> They provide a consistent and unified framework for decision-making and operations, ensuring that all stakeholders are on the same page. <br />
            <strong>Clarity and Transparency:</strong> Clearly defined policies promote transparency, making it easier for everyone to understand the rules and expectations. This reduces confusion and potential conflicts. <br />
            <strong>Accountability:</strong> Policies establish clear roles and responsibilities, holding individuals and groups accountable for their actions. This fosters a culture of responsibility and reliability. <br />
            <strong>Regulatory Compliance:</strong> Adhering to policies ensures that the institution remains compliant with external regulations and standards, which is essential for legal and ethical governance. <br />
            <strong>Effective Communication:</strong> Policies act as a communication bridge between management, teachers, students, and parents, facilitating better understanding and collaboration. <br />
            <strong>Conflict Resolution:</strong> A well-documented set of policies provides a basis for resolving disputes and grievances efficiently and fairly. <br />
            <strong>Continuous Improvement:</strong> Regularly updated policies reflect the institution's commitment to continuous improvement and adaptability to changing needs and circumstances. <br />
            <strong>Institutional Integrity:</strong> Upholding strong policies reinforces the integrity and reputation of the institution, building trust among stakeholders and the wider community. <br /><br />
            By implementing and adhering to these policies, VIIT ensures a structured, transparent, and accountable environment conducive to achieving its educational goals.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
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
