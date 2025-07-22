'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function CEOPage() {
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
            marginTop: '50px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            lineHeight: '1.8',
            textAlign: 'justify',
            fontFamily: `'Georgia', serif`,
            alignItems:'flex-start'
          }}
        >
          <h1
            style={{
                marginTop: '80px',
              marginBottom: '20px',
              fontSize: '1.8rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#175873',
            }}
          >
            Message from the CEO
          </h1>

          {/* 📸 ADD CEO PHOTO HERE */}
          <img
            src="/CEO.jpg" // 👈 replace with the actual filename you put in `/public`
            alt="CEO"
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
            It indeed gives me immense pleasure to welcome you to the Vignan’s Institute of Information Technology — VIIT(A) for short — which as its name suggests would be an ace in education. We wish to set new benchmarks in professional education. Through this web page I, on behalf of the management & on my own behalf, extend you warm greetings for fruitful four years which would transform you into professionals we all should be proud of.
          </p>

          <p>
            Now when higher education is in a phase of renaissance with newer thinking, we at VIIT are committed to providing you a matching teaching-learning process which would make you an excellent engineer and a good citizen of our country. The twenty-first century will undoubtedly be knowledge-dominated where Indian professionals will be much in demand all over the world. VIIT will focus to impart training to meet global needs.
          </p>

          <p>
            Discipline & excellence would be hallmarks of our education system. For success, self-discipline is a pre-requisite. We will assist you in this regard by inculcating respect for punctuality, importance of proper turnout, and encouraging you to take part in all extra & co-curricular activities. There would be sports, hikes, adventure sports, festivities, dramas, annual functions, debates, seminars, presentations, etc., to bring out the best in your personality.
          </p>

          <p>
            VIIT has an active Training and Placement Wing with representatives from all departments to take care of the student’s practical training, industrial visits, and placements. We would be rendering necessary career guidance for placement in industry, defence & PSUs. Aurangabad is amidst a vibrant industrial belt where a large number of major industrial houses & multinationals have production facilities. VIIT will build up a healthy industry-academic relationship so that our students can get training in a working environment & later may be placed too. Our qualified faculty can also assist the industry.
          </p>

          <p>
            I am quite elated that you are exploring what VIIT has to offer to prospective students. I can assure you that VIIT will prove to be the right destination for your professional education. Our winning combination of committed management, qualified & experienced faculty, trained staff & above all an environment conducive to learning will contribute significantly to mould you into professional engineers in four years.
          </p>
        </article>
      </main>
    </div>
  );
}
