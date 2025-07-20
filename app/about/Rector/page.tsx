'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function RectorPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f9f9f7',
        color: '#333',
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
            Message from the Rector
          </h1>

          {/* 📸 Rector photo here */}
          <img
            src="/rector.jpg" // 👈 Replace with correct filename if needed
            alt="Rector"
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
            The last two decades have seen a remarkable growth in higher education in India and across the globe. The move towards inter-disciplinary studies and interactive learning has not only opened up several options but also created multiple challenges. India is at a juncture where it envisions a crucial role in the global scenario which is possible only by enhancing the skill set of the budding engineers and turning them into competent professionals ready to take on the challenges of the world. With the tremendous growth of privatization of education in India on one hand and an increased number of youth opting for higher education on the other, the major focus is on creating a platform for quality in knowledge enhancement and bridging the gap between academia and industry.
          </p>

          <p>
            To meet that all the programs offered by Vignan's Institute of Information Technology (VIIT) follow the Choice Based Credit System (CBCS) with Outcome Based Approach. The flexibility in the curriculum has been designed with industry-specific goals in mind and the educator enjoys complete freedom to appropriate the syllabus by incorporating the latest knowledge and to stimulate the creative minds of the students. VIIT has entered into collaboration with many prominent Industries to bridge the gap between Industry and Institute. Regular visits to Industries and mandatory internships with them have helped our students hone their technical skills in tune with the industry requirements.
          </p>

          <p>
            With special focus on our Prime Minister's vision of Skill India, Make in India and Digital India, and a greater emphasis on Innovation, Research, Skill Development and Entrepreneurship, we at VIIT, have adopted some of the best practices in the region in tandem with the changing national and global trends in teaching and research.
          </p>

          <p>
            We have been privileged to have a large pool of highly qualified faculty members who have been chosen for their strong passion for academics.
          </p>

          <p>
            VIIT has set on a goal of academic excellence accredited with the highest grade of 'A+' by NAAC and NBA accreditation. This has been made possible due to the dynamic leadership of VIIT which is driven by values, ethics and a dedicated set of professionals - both teaching and non-teaching. VIIT has high standards of professional education combined with ethics and values. It endeavours to develop overall personalities of its students towards development of India. Students of the current generation are born into a fast changing world making it imperative that they should acquire adaptation skills along with academic rigor. I earnestly appeal to the current students as well as the prospective students to take part in this noble task of nation building and make VIIT as one among the top 100 institutions of higher learning in the Country. I, assure you, on behalf of the VIIT family, that we will help you pursue your objectives of life under the varied social, cultural and economic environment and succeed in your future endeavours keeping the VIIT banner aloft. Your achievements are a source of our strength and pride. Together let's take it in our stride.
          </p>
        </article>
      </main>
    </div>
  );
}
