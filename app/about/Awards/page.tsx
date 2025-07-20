'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function AwardsPage() {
  const awards = [
    "Vignan’s Institute of Information Technology (VIIT) was established in the year 2002 in the City of Destiny and is promoted by Visionary Dr. Lavu Rathaiah, Chairman of LES, Guntur, Andhra Pradesh.",
    "Approved by AICTE and affiliated with JNTU-GV, VIIT began with 4 UG programs in 2002 and now offers 11 UG and 10 PG programs with 2346 annual intake.",
    "Accredited by NAAC with ‘A’ Grade CGPA 3.41/4.00 and by NBA for FIVE UG programs such as CSE, ECE, IT, EEE, MECH.",
    "Conferred UGC-Autonomous Status by UGC, New Delhi in the year 2017 and Granted Recognition under section 2(f), & 12(B) of the UGC Act, 1956 in the year 2014.",
    "DST-FIST funded institute and Recognised by UGC Paramarsh and MHRD-Unnat Bharat Abhiyan Schemes.",
    "Established recognised Research centres by JNTU-GV and VFSTR for Advance Research activity.",
    "Established AICTE-sponsored Idea Lab costing Rs 194 lakhs, research laboratories worth over 500 lakhs, and Ekalavya remote center supported by IIT Mumbai.",
    "Established APSSDC recognised CM’s SKILL Center and Dassault skill center, MSME, Govt. of India identified host institute to promote entrepreneurship, CISCO certified Network academy, registered for PMKVY to enhance skills.",
    "VIIT bags the State Energy Conservation Award (SECA-2023) and recognised with ‘A' Grade in terms of KPI in Engineering Education by the Govt. of Andhra Pradesh. Recognised as best consortium leaders by IUCEE in AP and Telangana.",
    "Strong collaboration with premier institutions like Ramon Llull University, New York-USA, HUAWEI Services-Hong Kong, IDS-USA, IIT Madras, TiE Grad Hyd, NRDC, MSME, NRDC, SEMS, AMTZ, Brandix etc.",
    "MHRD IIC recognised with 4-star rating for Innovation and ARIIA recognised as Brand Performer in the year 2022. Recognised with Industry Center of Excellence by EDU Skill and ISTE. Won the I Prize in AICTE-Fit India 2021-22.",
    "Recognised as Valuable chapter with Grade “A” by NPTEL-Swayam, Govt. of India and OBE-Diamond Brand with “A+” Grade by R-World Institutional Ranking 2023.",
    "The Institution conforms to quality standards such as ISO 9001:2017, ISO 14001:2018 and OHSAS 18001:2017.",
    "23rd Rank in “Research Rankings” and overall 79th Rank by All India Times Engineering Rankings 2023 and Ranked by Career 360 with AAA+ Grade.",
    "Consistently maintained a 90%+ admission rate and more than 90% of students are successfully graduated every year.",
    "More than 85% placements with the highest annual package of Rs. 36 LPA and placed in the reputed MNCs like Amazon, Microsoft, TCS, Accenture, JUSPAY, Infosys, Tech Mahindra, IBM.",
    "Bagged 27 gold, 18 silver, and 12 bronze medals at the National and International level sports competitions.",
    "Eco-friendly campus with green spaces recognised as Green Institute in Platinum Ranking by Green Mentors, New York, USA.",
    "The institute boasts state-of-the-art infrastructure, including a central computing center, digital library, and serene learning environment. Its central library spans 15451 sq.m., housing 50,000+ volumes, 6500+ e-journals, and 6000+ e-books.",
    "All classrooms and laboratories are equipped with ICT facilities. Amenities include common rooms, health center, lifts, parking, ATM, cafeterias, security, and restrooms. Highly qualified faculty with over 30% from premier institutions such as IITs, NITs, and Central Universities ensure excellent performance. Published 1200+ papers in reputed SCI and Scopus journals, 1727 book chapters, 54 patents, 103 research projects worth 300+ Lakh; h-index improved from 17 to 32 in five years."
  ];

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f9f9f7',
        color: '#333',
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
            marginTop: '150px',
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
            Awards & Accolades
          </h1>

          <ol style={{ paddingLeft: '20px', lineHeight: '1.8', listStylePosition: 'inside' }}>
            {awards.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '12px',
                  textAlign: 'justify',
                  fontSize: '1rem',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    color: '#175873',
                    marginRight: '6px',
                  }}
                >
                  {index + 1}.
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
