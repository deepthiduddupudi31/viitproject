'use client';

// Make sure the path is correct; adjust if AboutMenuBar is in a different folder
import AboutMenuBar from '../../../components/AboutMenubar';
// If the file is named AboutMenuBar.tsx or AboutMenuBar/index.tsx, this import should work.
// Otherwise, update the path below to the correct location, for example:
// import AboutMenuBar from '../components/AboutMenuBar';
// or
// import AboutMenuBar from '../../components/About/AboutMenuBar';
export default function ChairmanPage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: `'Georgia', serif`,
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
        }}
      >
        <article
          style={{
            backgroundColor: '#fff',
            maxWidth: '900px',
            padding: '30px',
            marginTop: '100px', // 👈 makes it a bit down
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            lineHeight: '1.8',
            textAlign: 'justify',
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
            Message from the Chairman
          </h1>

          {/* Photo floated in text */}
          <img
            src="/chairman.jpg"
            alt="Chairman"
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
            <em>
              “Well thought-out reforms in technical education is the need of the hour.”
            </em>
          </p>

          <p>
            We, in India today, are living in a transitional era. On one hand, we are swamped by the global financial meltdown while on the other; we are witnessing a slow but sure revival of the manufacturing and agricultural sectors. It is evident that highly trained and skilled professionals will be needed in vast numbers to enable our country's transition towards industrial and financial self-sufficiency. In this changing scenario, technology will continue to be a major catalyst for enabling the country's transformation. So the demand for quality technical education in India is huge.
          </p>

          <p>
            In Andhra Pradesh, we often mention with pride that the state has the largest number of technical/professional institutions to impart skill-based education to fulfill the needs of the industry. But the fact remains that, in spite of the large number of engineers churned out from the 300 and odd colleges every year, there continues to be an unbridgeable gap between the needs of the industry and the skill set that the engineering students possess. Thus, we are faced with a paradoxical situation where employers keep scouting for employees and vice versa.
          </p>

          <p>
            The problem is not difficult to analyze. In spite of possessing impressive infrastructure and high-tech labs, the quality of technical education imparted in most engineering colleges is woefully poor. Despite the proliferation of colleges, the demand for holistic engineering education remains as high as ever. A keen introspection by the administrative authorities both at the planning and executive level is needed to evolve effective supervisory and regulatory mechanisms so as to reinforce good standards of technical education. Unscrupulous practices compromising on the quality of education need to be checked. All engineering colleges in the state should vie with each other to develop wholesome systems contributing to innovative teaching-learning practices, which will upscale the educational standards in the state and serve the future generation of students in realizing their dreams.
          </p>

          <p>
            We at Vignan resolve to rededicate ourselves to the cause of the nation, the march towards Vision 2020 — the dream of seeing India as a developed nation.
          </p>
        </article>
      </main>
    </div>
  );
}
