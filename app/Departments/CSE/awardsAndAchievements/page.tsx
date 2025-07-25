// app/awards/page.tsx
'use client';
import React from 'react';

const facultyAwards = [
  { name: 'Mr. A. Sampath Dakshina Murthy', count: 52 },
  { name: 'Mr. Ajay T', count: 1 },
  { name: 'Dr. A. Naga Jyothi', count: 2 },
  { name: 'Dr. K. Srinivasa Naik', count: 1 },
  { name: 'Mrs. Y. Sukanya', count: 1 },
  { name: 'Mr. Sourav Roy', count: 1 },
  { name: 'Dr. B. Prasada Rao', count: 1 },
  { name: 'Mr. M. Hemanth Kumar', count: 1 }
];

const studentAwards = [
  {
    title: 'Won I Prize in Andhra Pradesh Handball Championships, SRIKAKULAM, 17–20 Oct 2018',
    students: ['P. Ajay Kumar']
  },
  {
    title: 'Won I Prize in GITAM EXCELLENCE MEET, GITAM University, Vizag, 07–08 Dec 2018',
    students: ['P. Lochana', 'P. Vinele Rajs', 'K. Sree Sravya']
  },
  {
    title: 'Won I Prize in Inter Collegiate Volleyball Tournament, NSRIT Sontyam, 04–05 Jan 2019',
    students: ['B. Prasad', 'S. Sai Venkatesh']
  },
  {
    title: 'Won I Prize in National Level Badminton Tournament, GITAM University, 27–30 Nov 2019',
    students: ['P. Akshita', 'S. Yashaswini']
  },
  {
    title: 'Won I Prize in National Level Cultural Festival, KL University, 07–08 Feb 2020',
    students: ['P. Akshita']
  },
  {
    title: 'Won I Prize in A.P. Junior Inter District Athletics Championships, Krishna District, 19–21 Jan 2021',
    students: ['M. Sri Vardhan']
  },
  {
    title: "Won I Prize in National Level Cultural Fest, Vignan's University, Guntur, 19–20 Feb 2021",
    students: ['D. Percy']
  },
  {
    title: 'Won I Prize in 68th AP State Senior Inter District Kabaddi Championship, Krishna District, 23–26 Feb 2021',
    students: ['B. Lokesh']
  },
  {
    title: "Won I Prize in National Level Inter Engineering Sports Fest, Vignan's University, 15–18 Mar 2021",
    students: ['M. Sri Vardhan']
  },
  {
    title: 'Won I Prize in 69th AP State Senior Inter District Kabaddi Championship, Visakhapatnam, 06–08 Nov 2021',
    students: ['B. Lokesh']
  },
  {
    title: "Won I Prize in National Level Athletics Meet, Vignan's University, 06–09 Dec 2021",
    students: ['M. Sri Vardhan']
  },
  {
    title: 'Won I Prize in Inter Collegiate Athletics, Aditya Engineering College, 26–27 Dec 2021',
    students: ['P. Satya Sreeja', 'M. Sri Vardhan']
  },
  {
    title: "Won I Prize in Vignan's Utsav Kabaddi Tournament, 17–23 Feb 2022",
    students: ['B. Lokesh']
  },
  {
    title: 'Won I Prize in FAB-RIC Symposium, SRM University, 21–22 April 2022',
    students: ['P. Satya Sreeja']
  },
  {
    title: 'Won I Prize in AIRO Tournament, Mahindra University, 16–21 May 2022',
    students: ['M. Sri Vardhan']
  },
  {
    title: 'Won I Prize in AP Senior Inter District Athletics Championships, 28–29 May 2022',
    students: ['M. Sri Vardhan']
  },
  {
    title: 'Won I Prize in Association of Indian Universities, Andhra University, 30 June–03 July 2022',
    students: ['P. Satya Sreeja']
  },
  {
    title: 'Won I Prize in Inter Collegiate Athletics, Aditya Engineering College, 02–03 Dec 2022',
    students: ['M. Sri Vardhan']
  },
  {
    title: "Won I Prize in Vignan's Mahotsav, 15–17 Feb 2023",
    students: ['R. Enakshi', 'P. Meena', 'M. Sri Vardhan']
  },
  {
    title: 'Won I Prize in Association of Indian Universities, Andhra University, 03–04 Mar 2023',
    students: ['P. Satya Sreeja']
  },
  {
    title: 'Technology Entrepreneurship Programme',
    students: ['Abshisheak Achraya', 'K. Ananya', 'K. Chandana']
  },
  {
    title: 'Second Prize in Technical Fest (Robo Car Race), VIIT',
    students: ['Ginni Manoj Kumar']
  },
  {
    title: 'First Prize in Quiz, VIIT',
    students: ['P. Cheran Sai Kumar', 'P. Jaya Prakash Ravi Teja', 'Vegi Chandra Vardhan']
  },
  {
    title: 'Second Prize in Coding Competitions, VIIT',
    students: ['Matcha Vamsi Krishna']
  },
  {
    title: 'First Prize in Hackathon/Ideathons, VIIT',
    students: ['P. Sai Saowmya']
  },
  {
    title: 'Second Prize in Ardubotics Robotics, JNTU-GV',
    students: ['Y. Sri Sai Satyadev']
  },
  {
    title: 'Third Prize in Coding at Vesta, VIIT',
    students: ['P. Prasanthi']
  }
];

export default function AwardsPage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Awards & Achievements</h1>

      {/* Faculty Awards Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Faculty Awards</h2>
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="px-4 py-2 border">S. No.</th>
                <th className="px-4 py-2 border">Faculty Name</th>
                <th className="px-4 py-2 border">No. of Awards</th>
              </tr>
            </thead>
            <tbody>
              {facultyAwards.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Student Awards Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Student Awards & Achievements</h2>
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="px-4 py-2 border">S. No.</th>
                <th className="px-4 py-2 border">Event / Award</th>
                <th className="px-4 py-2 border">Student(s)</th>
              </tr>
            </thead>
            <tbody>
              {studentAwards.map((award, index) => (
                <tr key={index} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{award.title}</td>
                  <td className="px-4 py-2 border">
                    <ul className="list-disc list-inside">
                      {award.students.map((student, idx) => (
                        <li key={idx}>{student}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
