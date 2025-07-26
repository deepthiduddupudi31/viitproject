'use client'
import Sidebar from '../Sidebar'

const innovationData = [
  {
    ay: '2022-23', stad: 6, jigsaw: 6, tps: 7, fscr: 4, arcs: 4, seminar: 8,
    flipped: 5, caseStudy: 4, tel: 3, openBook: 5, gameBased: 2, total: 54,
  },
  {
    ay: '2021-22', stad: 4, jigsaw: 5, tps: 5, fscr: 4, arcs: 5, seminar: 6,
    flipped: 5, caseStudy: 3, tel: 5, openBook: 5, gameBased: 3, total: 50,
  },
  {
    ay: '2020-21', stad: 10, jigsaw: 0, tps: 0, fscr: 9, arcs: 9, seminar: 10,
    flipped: 6, caseStudy: 5, tel: 1, openBook: 5, gameBased: 1, total: 56,
  },
  {
    ay: '2019-20', stad: 6, jigsaw: 3, tps: 7, fscr: 8, arcs: 8, seminar: 10,
    flipped: 6, caseStudy: 5, tel: 1, openBook: 5, gameBased: 1, total: 60,
  },
  {
    ay: '2018-19', stad: 7, jigsaw: 2, tps: 6, fscr: 7, arcs: 8, seminar: 9,
    flipped: 7, caseStudy: 6, tel: 1, openBook: 5, gameBased: 2, total: 60,
  },
]

const innovationLinks = [
  { label: "Innovations in Content development", href: "#" },
  { label: "ICT enabled T & L Methods", href: "#" },
  { label: "Instructional delivery methods", href: "#" },
  { label: "Instructional methods", href: "#" },
  {
    label: "Feedback on Innovative Teaching Learning Practices",
    href: "https://vignaniit.edu.in/feedback/viit_feedback.php",
  }
]

export default function InnovativePractices() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/ecm.jpg"
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
                  <tr key={idx} className="even:bg-gray-50 odd:bg-white text-center">
                    <td className="border px-4 py-2">{item.ay}</td>
                    <td className="border px-4 py-2">{item.stad}</td>
                    <td className="border px-4 py-2">{item.jigsaw}</td>
                    <td className="border px-4 py-2">{item.tps}</td>
                    <td className="border px-4 py-2">{item.fscr}</td>
                    <td className="border px-4 py-2">{item.arcs}</td>
                    <td className="border px-4 py-2">{item.seminar}</td>
                    <td className="border px-4 py-2">{item.flipped}</td>
                    <td className="border px-4 py-2">{item.caseStudy}</td>
                    <td className="border px-4 py-2">{item.tel}</td>
                    <td className="border px-4 py-2">{item.openBook}</td>
                    <td className="border px-4 py-2">{item.gameBased}</td>
                    <td className="border px-4 py-2 font-bold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Innovations by Faculty in Teaching & Learning Practices
          </h3>

          <ul className="list-disc list-inside space-y-2 text-blue-800">
            {innovationLinks.slice(0, -1).map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-10">
            <a
              href={innovationLinks[innovationLinks.length - 1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 text-2xl md:text-3xl font-bold underline bg-blue-100 px-6 py-4 rounded-lg shadow hover:bg-blue-200 transition"
            >
              Feedback on Innovative Teaching Learning Practices
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}
