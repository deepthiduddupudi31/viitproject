'use client'
import Sidebar from '../Sidebar'

const innovationData = [
  {
    ay: '2023-24', stad: 2, jigsaw: 5, tps: 5, fscr: 4, arcs: 8, seminar: 16,
    flipped: 8, caseStudy: 6, tel: 3, openBook: 5, gameBased: 2, total: 64,
  },
  {
    ay: '2022-23', stad: 3, jigsaw: 5, tps: 5, fscr: 7, arcs: 10, seminar: 16,
    flipped: 7, caseStudy: 9, tel: 4, openBook: 2, gameBased: 2, total: 70,
  },
  {
    ay: '2021-22', stad: 2, jigsaw: 3, tps: 7, fscr: 3, arcs: 5, seminar: 13,
    flipped: 3, caseStudy: 4, tel: 8, openBook: 6, gameBased: 2, total: 56,
  },
  {
    ay: '2020-21', stad: 1, jigsaw: 0, tps: 3, fscr: 5, arcs: 8, seminar: 14,
    flipped: 5, caseStudy: 6, tel: 9, openBook: 1, gameBased: 0, total: 52,
  },
  {
    ay: '2019-20', stad: 3, jigsaw: 0, tps: 7, fscr: 1, arcs: 8, seminar: 9,
    flipped: 4, caseStudy: 6, tel: 7, openBook: 7, gameBased: 0, total: 52,
  },
  {
    ay: '2018-19', stad: 1, jigsaw: 4, tps: 3, fscr: 5, arcs: 10, seminar: 10,
    flipped: 5, caseStudy: 6, tel: 4, openBook: 3, gameBased: 1, total: 52,
  },
]

const innovationPoints = [
  { label: "Innovations in Content development", url: "https://vignaniit.edu.in/e-Content%20developed%20by%20Faculty.pdf" },
  { label: "ICT enabled T & L Methods", url: "https://vignaniit.edu.in/ICT%20Enabled%20Teaching%20and%20Learning.pdf" },
  { label: "Instructional delivery methods", url: "https://vignaniit.edu.in/Innovative%20TLMs%20implemented%20by%20Faculty.pdf" },
  { label: "Instructional methods", url: "https://vignaniit.edu.in/Working%20Models%20in%20Mechanical%20Engg.%20Dept..pdf" },
  { label: "Continuous assessment & evaluation methodologies", url: "https://vignaniit.edu.in" },
]

export default function InnovativePractices() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/mech.jpg"
          alt="Innovative Practices"
          className="w-full h-32 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="flex max-w-screen-xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Innovative Teaching & Learning Practices
          </h2>

          {/* Table Section */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border text-sm rounded shadow-md">
              <thead className="bg-blue-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2">A.Y.</th>
                  <th className="border px-4 py-2">STAD</th>
                  <th className="border px-4 py-2">JigSaw</th>
                  <th className="border px-4 py-2">TPS</th>
                  <th className="border px-4 py-2">FSCR</th>
                  <th className="border px-4 py-2">ARCS</th>
                  <th className="border px-4 py-2">Seminar</th>
                  <th className="border px-4 py-2">Flipped Classroom</th>
                  <th className="border px-4 py-2">Case Study</th>
                  <th className="border px-4 py-2">TEL</th>
                  <th className="border px-4 py-2">Open Book Exam</th>
                  <th className="border px-4 py-2">Game Based Learning</th>
                  <th className="border px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {innovationData.map((item, idx) => (
                  <tr key={idx} className="even:bg-gray-50 odd:bg-white">
                    <td className="border px-4 py-2">{item.ay}</td>
                    <td className="border px-4 py-2 text-center">{item.stad}</td>
                    <td className="border px-4 py-2 text-center">{item.jigsaw}</td>
                    <td className="border px-4 py-2 text-center">{item.tps}</td>
                    <td className="border px-4 py-2 text-center">{item.fscr}</td>
                    <td className="border px-4 py-2 text-center">{item.arcs}</td>
                    <td className="border px-4 py-2 text-center">{item.seminar}</td>
                    <td className="border px-4 py-2 text-center">{item.flipped}</td>
                    <td className="border px-4 py-2 text-center">{item.caseStudy}</td>
                    <td className="border px-4 py-2 text-center">{item.tel}</td>
                    <td className="border px-4 py-2 text-center">{item.openBook}</td>
                    <td className="border px-4 py-2 text-center">{item.gameBased}</td>
                    <td className="border px-4 py-2 text-center">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Innovations by Faculty Links */}
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Innovations by Faculty in Teaching & Learning Practices
          </h3>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            {innovationPoints.map((point, idx) => (
              <li key={idx}>
                <a
                  href={point.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-blue-900 transition"
                >
                  {point.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Feedback Link */}
          <div className="w-full flex justify-center my-10">
            <a
              href="https://vignaniit.edu.in/feedback/viit_feedback.php"
              className="text-2xl md:text-3xl font-bold text-blue-700 underline hover:text-blue-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback on Innovative Teaching Learning Practices
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
