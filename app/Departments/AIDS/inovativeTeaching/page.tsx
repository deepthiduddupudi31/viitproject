'use client'
import Sidebar from '../Sidebar'

const innovationData = [
  {
    ay: '2022-23', stad: 6, jigsaw: 6, tps: 7, fscr: 6, arcs: 6, seminar: 7,
    flipped: 6, caseStudy: 5, tel: 4, openBook: 4, gameBased: 5, total: 62,
  },
  {
    ay: '2021-22', stad: 3, jigsaw: 2, tps: 2, fscr: 4, arcs: 3, seminar: 20,
    flipped: 2, caseStudy: 5, tel: 3, openBook: 3, gameBased: 2, total: 47,
  },
  {
    ay: '2020-21', stad: 3, jigsaw: 3, tps: 3, fscr: 3, arcs: 3, seminar: 17,
    flipped: 5, caseStudy: 5, tel: 7, openBook: 1, gameBased: 2, total: 52,
  },
  {
    ay: '2019-20', stad: 6, jigsaw: 3, tps: 4, fscr: 3, arcs: 4, seminar: 16,
    flipped: 4, caseStudy: 5, tel: 9, openBook: 2, gameBased: 4, total: 60,
  },
  {
    ay: '2018-19', stad: 5, jigsaw: 5, tps: 5, fscr: 3, arcs: 5, seminar: 9,
    flipped: 2, caseStudy: 6, tel: 11, openBook: 6, gameBased: 1, total: 58,
  },
]

const innovationPoints = [
  "Innovations in Content development",
  "ICT enabled Teaching & Learning Methods",
  "Instructional delivery methods",
  "Instructional methods",
  "Continuous assessment & evaluation methodologies",
  "*Feedback on Innovative Teaching Learning Practices"
]

export default function InnovativePractices() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-white p-4">
        <img
          src="https://vignaniit.edu.in/images/aids.png"
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

          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Innovations by Faculty in Teaching & Learning Practices
          </h3>

          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {innovationPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="w-full flex justify-center my-10">
  <a
    href="https://vignaniit.edu.in/feedback/viit_feedback.php"
    className="text-2xl md:text-3xl font-bold text-blue-700 underline hover:text-blue-900 transition"
  >
    Feedback on Innovative Teaching Learning Practices
  </a>
</div>
        </main>
      </div>
    </div>
  )
}
