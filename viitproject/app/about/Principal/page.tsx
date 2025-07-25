'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function PrincipalPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f9f9f7',
        color: '#333',
      }}
    >
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
        <article
          style={{
            backgroundColor: '#fff',
            maxWidth: '900px',
            padding: '30px',
            marginTop: '80px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            lineHeight: '1.8',
            textAlign: 'justify',
            fontFamily: `'Georgia', serif`,
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
            Message from the Principal
          </h1>

          {/* 📸 Principal photo here */}
          <img
            src="/Principal.jpg" // 👈 Replace with correct file name in `/public`
            alt="Principal"
            style={{
              width: '220px',
              height: 'auto',
              float: 'left',
              margin: '0 20px 20px 0',
              border: '4px solid #ddd',
              padding: '4px',
              borderRadius: '4px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          />

          <p>
            We envision to be a recognized leader in technical education by creating competent and socially conscious technical manpower for the industrial requirement and the development of the nation. To achieve this vision, we launched undergraduate and postgraduate engineering programs that nurture many vibrant and promising professionals equipped with skills to face the ever-changing social, economic, and technical landscape of our country.
          </p>

          <p>
            At VIIT, we provide high-end education and research opportunities in new frontiers of engineering and technology with special focus on skill, leadership & innovation. Students are provided with opportunities for interaction with the experts from the Industry through Guest Lectures, Industrial Visits, Vocational Training (internships), student chapters of International Professional bodies, sponsored projects, industrial trainings and participation in sports, cultural and other extra-curricular activities etc. We hope these activities encourage our students to embrace creativity and challenge them to come up with innovative ideas.
          </p>

          <p>
            Success of any institution depends on its managerial practices, teaching staff and infrastructure. We have experienced and dedicated faculty, state-of-the-art infrastructure and laboratories. Spacious green campus, well-ventilated spacious classrooms, a state-of-the-art computer center, digital library and peaceful atmosphere ensure a wonderful learning experience. We also believe in the continuous professional development of our teachers and invest in upgrading their teaching as well as classroom management skills.
          </p>

          <p>
            We believe collaboration among our staff as well as students paves the path for better learning just as collaboration and interaction with society helps in the holistic development of our students.
          </p>

          <p>
            Our teaching practices are aligned with this belief and our students take up several activities to engage with the local community.
          </p>

          <p>
            As Vivekananda rightly said, education must form character, strengthen the mind, expand one’s intellect and allow one to stand on one’s own feet.
          </p>

          <p>
            The institute has an excellent track record of placements in past years and students of VIIT have proved their mettle in industry, academics, and administration. This glory has been achieved due to the synergetic efforts of management, learned faculty, dedicated staff and sincere students over these years. I express my sincere gratitude to our stakeholders for their continued support, cooperation and active involvement to make VIIT a citadel of technical learning.
          </p>

          <p>
            When Covid threw a curveball at us, we were among the first to embrace online teaching and assessment. We also took up the massive exercise of creating digital content with the help of our faculty who rose to the challenge with creative ingenuity.
          </p>

          <p>
            VIIT has given me a golden opportunity to serve the community in my position as a Principal and I hope to continue my service towards our society to the best of my ability with the help of the management, staff and students.
          </p>
        </article>
      </main>
    </div>
  );
}
