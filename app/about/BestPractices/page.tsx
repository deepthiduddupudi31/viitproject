'use client';

import AboutMenuBar from '../../../components/AboutMenubar';

export default function BestPracticesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AboutMenuBar />

      <main className="flex-1 px-4 lg:px-12 flex justify-center items-start pt-32">
        <section className="bg-white max-w-5xl w-full p-4 lg:p-8 shadow-xl rounded-lg space-y-16">
          <h1 className="text-4xl text-center font-bold text-teal-800 uppercase tracking-wide">
            Best Practices
          </h1>

          {/* Best Practice I */}
          <div className="space-y-6">
            <a
              href="/7.2.1.Best Practice-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-700 hover:underline flex items-center gap-2"
            >
              📄 Best Practice-I: Felicitation of Parents
            </a>

            {/* Full Image */}
            <div className="w-full">
              <img
                src="/Best Practice 01.jpg"
                alt="Felicitation of Parents"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>

            <p className="text-gray-700 text-justify leading-relaxed">
              VIIT has introduced a distinct initiative to honour and appreciate parents for their invaluable support.
              Their contributions have not only stimulated programme success but also propelled the other students to
              be more active and serious about their careers. A carefully crafted curriculum with supplementary courses
              and structured training from the first semester onwards contributed to student success. In addition,
              parent involvement in the Mentor-Mentee program significantly supported the achievements of students.
            </p>
          </div>

          <hr className="border-t-2 border-gray-200" />

          {/* Best Practice II */}
          <div className="space-y-6">
            <a
              href="/7.2.1.Best Practice-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-700 hover:underline flex items-center gap-2"
            >
              📄 Best Practice-II: Empowerment of Faculty for Effective Teaching-Learning and Research
            </a>

            {/* Full Image */}
            <div className="w-full">
              <img
                src="/Best Practice 02.jpg"
                alt="Empowerment of Faculty"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>

            <p className="text-gray-700 text-justify leading-relaxed">
              The main objective of this initiative is to extend the intellectual horizons of faculty members, improve
              their teaching skills and research capabilities, and thereby foster career enhancement. To train faculty
              with diverse teaching methods, ICT tools, e-content creation, and to engage in Inter-Disciplinary and
              Trans-Disciplinary research aligned with NEP 2020 and sustainable goals. Orientation programs for new
              faculty members emphasize institute vision and mission, work culture, effective teaching, and qualities
              such as empathy, emotional balance, transparency in evaluation, and the significance of research for career
              advancement.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
