'use client'
import Sidebar from '../Sidebar'

const facultyAwards = [
  { id: 1, name: 'Mr.A.Sampath Dakshina Murthy', awards: 52 },
  { id: 2, name: 'Mr.Ajay T', awards: 1 },
  { id: 3, name: 'Dr A.Naga Jyothi', awards: 2 },
  { id: 4, name: 'Dr.K.Srinivasa Naik', awards: 1 },
  { id: 5, name: 'Mrs.Y.Sukanya', awards: 1 },
  { id: 6, name: 'Mr.Sourav Roy', awards: 1 },
  { id: 7, name: 'Dr.B Prasada Rao', awards: 1 },
  { id: 8, name: 'Mr.M.Hemanth Kumar', awards: 1 },
]

const studentAwards = [
  {
    id: 1,
    award: 'Won I Prize in Andhra pradesh Handball championships, SRIKAKULAM, 17-20 Oct 2018',
    count: 1,
    names: ['P.Ajay Kumar'],
    level: 'National',
  },
  {
    id: 2,
    award: 'Won I Prize in GITAM EXCELLENCE MEET, GITAM UNIVERSITY ,VIZAG, 07-08 Dec 2018',
    count: 3,
    names: ['P.Lochana', 'P.Vinele Rajs', 'K.Sree Sravya'],
    level: 'National',
  },
  {
    id: 3,
    award: 'Won I Prize in Inter collegiate Volleyball tournament, NSRIT, SONTYAM , 04-05 Jan 2019',
    count: 2,
    names: ['B Prasad', 'S Sai Venkatesh'],
    level: 'National',
  },
  {
    id: 4,
    award: 'Won I Prize in A National Level Badminton Tournament, GITAM UNIVERSITY, 27-30 Nov 2019',
    count: 2,
    names: ['P.Akshita', 'S.Yashaswini'],
    level: 'All India Inter-University',
  },
  {
    id: 5,
    award: 'Won I Prize in National Level Cultural Festival, KL University ,07-08 Feb 2020',
    count: 1,
    names: ['P.Akshita'],
    level: 'National',
  },
  {
    id: 6,
    award: 'Won I Prize in A.P Junior Inter District Athletics Championships, Krishna District, 19-21 Jan 2021',
    count: 1,
    names: ['M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 7,
    award: "Won I Prize in National level Cultural Fest, Vignan's University Guntur, 19-20 Feb 2021",
    count: 1,
    names: ['D.Percy'],
    level: 'National',
  },
  {
    id: 8,
    award: 'Won I Prize in 68th AP State Senior Inter District Kabaddi Championship, Krishna District, 23-26 Feb 2021',
    count: 1,
    names: ['B.Lokesh'],
    level: 'National',
  },
  {
    id: 9,
    award: "Won I Prize in National Level Inter Engineering Sports Fest, Vignan's University Guntur, 15-18 March 2021",
    count: 1,
    names: ['M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 10,
    award: 'Won I Prize in 69th AP State Senior Inter District Kabaddi Championship, Visakhapatnam, 06-08 Nov 2021',
    count: 1,
    names: ['B.Lokesh'],
    level: 'National',
  },
  {
    id: 11,
    award: "Won I Prize in National Level Athletics Meet, Vignan's University Guntur, 06-09 Dec 2021",
    count: 1,
    names: ['M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 12,
    award: 'Won I Prize in Inter collegiate Athletics Tournament, Aditya Eng. College, 26-27 Dec 2021',
    count: 5,
    names: ['P Satya Sreeja', 'M Sri Vardhan', 'M Sri Vardhan'],
    level: 'National',
  },
  {
    id: 13,
    award: 'Won I Prize in Vignan\'s Utsav Kabaddi Tournament, Vignan\'s University, 17-23 Feb 2022',
    count: 1,
    names: ['B.Lokesh'],
    level: 'National',
  },
  {
    id: 14,
    award: 'Won I Prize in FAB-RIC Symposium, SRM University, 21-22 April 2022',
    count: 1,
    names: ['P.Satya Sreeja'],
    level: 'National',
  },
  {
    id: 15,
    award: 'Won I Prize in AIRO Tournament, Mahindra University, 16-21 May 2022',
    count: 1,
    names: ['M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 16,
    award: 'Won I Prize in AP Inter District Athletics Championships, Krishna District, 28-29 May 2022',
    count: 1,
    names: ['M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 17,
    award: 'Won I Prize in Association of Indian Universities, Andhra University, 30 June - 03 July 2022',
    count: 2,
    names: ['P Satya Sreeja', 'P Satya Sreeja'],
    level: 'National',
  },
  {
    id: 18,
    award: 'Won I Prize in Inter collegiate Athletics Tournament, Aditya Eng. College, 02-03 Dec 2022',
    count: 3,
    names: ['M.Sri Vardhan', 'M.Sri Vardhan', 'M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 19,
    award: 'Won I Prize in Vignan\'s Mahosthav, Vignan\'s University, 15-17 Feb 2023',
    count: 5,
    names: ['R.Enakshi', 'P.Meena', 'M.Sri Vardhan'],
    level: 'National',
  },
  {
    id: 20,
    award: 'Won I Prize in Association of Indian Universities, Andhra University, 03-04 March 2023',
    count: 1,
    names: ['P Satya Sreeja'],
    level: 'National',
  },
  {
    id: 21,
    award: 'Technology Entrepreneurship Programme',
    count: 3,
    names: ['Abshisheak Achraya', 'K. Ananya', 'K.Chandana'],
    level: 'National',
  },
  {
    id: 22,
    award: 'Second Prize in Technical fest (Robo Car Race), VIIT',
    count: 1,
    names: ['GINNI MANOJ KUMAR'],
    level: 'National',
  },
  {
    id: 23,
    award: 'First prize in QUIZ, VIIT',
    count: 3,
    names: ['P. Cheran sai kumar', 'P.Jaya prakash Ravi Teja', 'VEGI CHANDRA VARDHAN'],
    level: 'National',
  },
  {
    id: 24,
    award: 'Second prize in Coding Competitions, VIIT',
    count: 1,
    names: ['MATCHA VAMSI KRISHNA'],
    level: 'National',
  },
  {
    id: 25,
    award: 'First prize in Hackathon/Ideathons, VIIT',
    count: 1,
    names: ['P.Sai Saowmya'],
    level: 'National',
  },
  {
    id: 26,
    award: 'Second prize in Ardubotics Robotics, JNTU-GV',
    count: 1,
    names: ['Y. SRI SAI SATYADEV'],
    level: 'National',
  },
  {
    id: 27,
    award: 'Third prize in Coding at Vesta, VIIT',
    count: 1,
    names: ['P Prasanthi'],
    level: 'National',
  },
]

export default function AwardsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Awards & Achievements</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Faculty Awards</h2>
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">S. No.</th>
                <th className="border px-4 py-2">Faculty Name</th>
                <th className="border px-4 py-2">Awards</th>
              </tr>
            </thead>
            <tbody>
              {facultyAwards.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.awards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Student Awards & Achievements</h2>
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">S. No.</th>
                <th className="border px-4 py-2">Award/Recognition</th>
                <th className="border px-4 py-2">No. of Students</th>
                <th className="border px-4 py-2">Student Names</th>
                <th className="border px-4 py-2">Level</th>
              </tr>
            </thead>
            <tbody>
              {studentAwards.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.award}</td>
                  <td className="border px-4 py-2">{item.count}</td>
                  <td className="border px-4 py-2">{item.names.join(', ')}</td>
                  <td className="border px-4 py-2">{item.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
