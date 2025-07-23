'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function PoliciesAndPerspectivesPage() {
  const policies = [
    { name: 'HR Policies & Procedures', href: 'https://vignaniit.edu.in/policies/HR%20Policies%20_%20perspectivesn_HR%20Manual%202017%20-%2050%20nos.pdf' },
    { name: 'Financial Policy', href: 'https://vignaniit.edu.in/policies/Finance%20Policy.pdf' },
    { name: 'Anti-Ragging Policy', href: 'https://vignaniit.edu.in/policies/Anti-Ragging%20Policy.pdf' },
    { name: 'Code of Ethics Policy', href: 'https://vignaniit.edu.in/policies/Code%20of%20Ethics%20Policy.pdf' },
    { name: 'Discipline Policy', href: 'https://vignaniit.edu.in/policies/Discipline%20Policy.pdf' },
    { name: 'e-Governance Policy', href: 'https://vignaniit.edu.in/policies/e-Governance%20Policy.pdf' },
    { name: 'Green Campus Policy', href: 'https://vignaniit.edu.in/policies/Green%20Campus%20Policy.pdf' },
    { name: 'Grievance Redressal Policy', href: 'https://vignaniit.edu.in/policies/Grievance%20Redressal%20Policy.pdf' },
    { name: 'Internal Complaint Policy', href: 'https://vignaniit.edu.in/policies/Internal%20Complaint%20Policy.pdf' },
    { name: 'Internship Manual and Student Diary', href: 'https://vignaniit.edu.in/policies/Internship%20manual%20and%20student%20diary.pdf' },
    { name: 'NISP-Policy', href: 'https://vignaniit.edu.in/policies/NISP-Policy.pdf' },
    { name: 'Policy on Divyangjan Facilities', href: 'https://vignaniit.edu.in/policies/Policy%20on%20Divyangjan%20Facilities.pdf' },
    { name: 'IT Policy', href: 'https://vignaniit.edu.in/policies/IT%20Policy.pdf' },
    { name: 'Faculty Development Policy', href: 'https://vignaniit.edu.in/policies/Faculty%20Development.pdf' },
    { name: 'Job Induction Policy', href: 'https://vignaniit.edu.in/policies/Job%20Induction%20Policy.pdf' },
    { name: 'Admission Policy & Procedures', href: 'https://vignaniit.edu.in/policies/Student%20Admission%20Policy.pdf' },
    { name: 'Infrastructure Maintenance Policy', href: 'https://vignaniit.edu.in/policies/Infrastructure%20Development%20Policy.pdf' },
    { name: 'Environment & Sustainable Policy', href: 'https://vignaniit.edu.in/policies/Environment%20Sustainble%20Policy.pdf' },
    { name: 'Gender Policy', href: 'https://vignaniit.edu.in/policies/Gender%20Policy.pdf' },
    { name: 'Industrial Training Policy', href: 'https://vignaniit.edu.in/policies/Industrial%20Training%20policy.pdf' },
    { name: 'Research Development Policy', href: 'https://vignaniit.edu.in/naac/criteria3/Criteria%203/3.1.1/1.Research%20policy/Research%20Policy.pdf' },
    { name: 'Promotion Policy', href: 'https://vignaniit.edu.in/policies/Promotion%20policy.pdf' },
    { name: 'Means and Merits Scholarship Policy', href: 'https://vignaniit.edu.in/policies/Scholarship%20Scheme%20Policy.pdf' },
    { name: 'Physical Education Policy', href: 'https://vignaniit.edu.in/policies/Physiscal%20Education.pdf' },
    { name: 'Funds Mobilisation Policy', href: 'https://vignaniit.edu.in/policies/mobalization%20of%20funds.pdf' },
    { name: 'Scribe Policy', href: 'https://vignaniit.edu.in/policies/Scribe%20Policy.pdf' },
    { name: 'Adjunct Faculty Policy', href: 'https://vignaniit.edu.in/policies/Adjunct%20Faculty%20Policy.pdf' },
    { name: 'Placements Policy', href: 'https://vignaniit.edu.in/policies/PLACEMENTS%20POLICY%20_VIIT_01092023.pdf' },
    { name: 'Stakeholder Feedback Policy', href: 'https://vignaniit.edu.in/policies/Stakeholder%20Feedback%20policy.pdf' },
    { name: 'Value Added Courses Policy', href: 'https://vignaniit.edu.in/policies/VAC%20policy.pdf' },
    { name: 'Add-on Courses Policy', href: 'https://vignaniit.edu.in/policies/ADD-ON%20Courses%20policy.pdf' },
    { name: 'Course Code Policy', href: 'https://vignaniit.edu.in/policies/Course%20Code%20Policy.pdf' },
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
