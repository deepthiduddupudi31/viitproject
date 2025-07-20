import React from 'react';
import { Users, MessageCircle, HandHeart, BrainCircuit, ArrowUpRight } from 'lucide-react';

// Data for the training and capacity building table
const trainingData = [
  {
    year: "2023-24",
    softSkills: { events: 4, students: 1628 },
    langComm: { events: 3, students: 1083 },
    lifeSkills: { events: 5, students: 1933 },
    techTrends: { events: 50, students: 11212 },
    source: "https://vignaniit.edu.in/aqar2324uploads/Criteria5/5_1_3_Summary%20Sheet_final.pdf"
  },
  {
    year: "2022-23",
    softSkills: { events: 4, students: 3345 },
    langComm: { events: 3, students: 588 },
    lifeSkills: { events: 15, students: 3363 },
    techTrends: { events: 31, students: 4655 },
    source: "https://vignaniit.edu.in/capacitybuilding2022-23.php"
  },
  {
    year: "2021-22",
    softSkills: { events: 4, students: 1694 },
    langComm: { events: 6, students: 1020 },
    lifeSkills: { events: 15, students: 3293 },
    techTrends: { events: 30, students: 5690 },
    source: "https://vignaniit.edu.in/capacitybuilding2021-22.php"
  },
  {
    year: "2020-21",
    softSkills: { events: 5, students: 4020 },
    langComm: { events: 2, students: 181 },
    lifeSkills: { events: 5, students: 1422 },
    techTrends: { events: 16, students: 2241 },
    source: "https://vignaniit.edu.in/capacitybuilding2020-21.php"
  },
  {
    year: "2019-20",
    softSkills: { events: 3, students: 3026 },
    langComm: { events: 2, students: 202 },
    lifeSkills: { events: 9, students: 1830 },
    techTrends: { events: 13, students: 2328 },
    source: "https://vignaniit.edu.in/capacitybuilding2019-20.php"
  },
  {
    year: "2018-19",
    softSkills: { events: 3, students: 3176 },
    langComm: { events: 2, students: 709 },
    lifeSkills: { events: 6, students: 767 },
    techTrends: { events: 14, students: 5314 },
    source: "https://vignaniit.edu.in/capacitybuilding2018-19.php"
  }
];

// Content for the key areas of focus
const focusAreas = [
    {
        icon: <Users className="h-6 w-6 text-blue-600" />,
        title: "Soft Skills",
        description: "Essential interpersonal skills including communication, teamwork, problem-solving, and adaptability."
    },
    {
        icon: <MessageCircle className="h-6 w-6 text-green-600" />,
        title: "Language and Communication Skills",
        description: "Improving the ability to convey ideas clearly and confidently in any field."
    },
    {
        icon: <HandHeart className="h-6 w-6 text-red-600" />,
        title: "Life Skills",
        description: "Abilities necessary for daily living, such as time management, decision-making, and stress management."
    },
    {
        icon: <BrainCircuit className="h-6 w-6 text-purple-600" />,
        title: "Awareness of Trends in Technology",
        description: "Staying updated with the latest technological advancements to meet industry demands."
    }
];

export default function TrainingProcessPage() {
  return (
    <div className="min-h-screen bg-white ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* --- Training Philosophy Section --- */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Our Training Process
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Nurturing talent and empowering students to become the architects of their own future.
              </p>
              <div className="mt-8 text-gray-700 leading-relaxed space-y-6">
                <p>
                  VIIT (A) is committed to training and nurturing students to excel and be industry-ready. Besides providing academic excellence, students are groomed for corporate placements using multiple training and mentoring interventions. Career guidance programs provide assistance and equip students with the skills and knowledge to be better informed.
                </p>
                <p>
                  Mentoring, Career Guidance, Training and Placement is an innovative process introduced by the Management of VIIT. The aim is to motivate students, provide guidance, and train them from the very beginning to enhance their knowledge, skills, and talent to help them achieve their goals.
                </p>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 bg-gray-50/70 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800">Key Areas of Focus</h2>
              <p className="mt-2 text-gray-500">
                Initiatives to prepare students for academic and professional success.
              </p>
              <ul className="mt-8 space-y-6">
                {focusAreas.map(area => (
                  <li key={area.title} className="flex">
                    <div className="flex-shrink-0 bg-white p-3 rounded-lg border border-gray-200">
                      {area.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-900">{area.title}</h3>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600 bg-gray-50 border-t border-b border-gray-200 py-6 px-6 rounded-lg">
            <p className="max-w-4xl mx-auto">
              By offering these initiatives, Vignan's Institute of Information Technology is not only equipping its students with technical knowledge but also helping them become well-rounded individuals ready to excel in their careers and personal lives.
            </p>
          </div>
        </section>

        {/* --- Detailed Data Table Section --- */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Capacity Development Activities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A year-wise overview of our skill enhancement initiatives.
            </p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase">
                <tr>
                  <th rowSpan={2} className="py-4 px-4 text-left font-semibold">Academic Year</th>
                  <th colSpan={2} className="py-4 px-4 text-center font-semibold border-l">Soft Skills</th>
                  <th colSpan={2} className="py-4 px-4 text-center font-semibold border-l">Language & Communication</th>
                  <th colSpan={2} className="py-4 px-4 text-center font-semibold border-l">Life Skills</th>
                  <th colSpan={2} className="py-4 px-4 text-center font-semibold border-l">Trends in Technology</th>
                  <th rowSpan={2} className="py-4 px-4 text-left font-semibold border-l">Source</th>
                </tr>
                <tr className="bg-gray-200/50">
                  <th className="py-3 px-2 text-center font-medium border-l">Events</th>
                  <th className="py-3 px-2 text-center font-medium">Students</th>
                  <th className="py-3 px-2 text-center font-medium border-l">Events</th>
                  <th className="py-3 px-2 text-center font-medium">Students</th>
                  <th className="py-3 px-2 text-center font-medium border-l">Events</th>
                  <th className="py-3 px-2 text-center font-medium">Students</th>
                  <th className="py-3 px-2 text-center font-medium border-l">Events</th>
                  <th className="py-3 px-2 text-center font-medium">Students</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trainingData.map((row) => (
                  <tr key={row.year} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.year}</td>
                    <td className="py-4 px-2 text-center border-l">{row.softSkills.events}</td>
                    <td className="py-4 px-2 text-center text-gray-500">{row.softSkills.students.toLocaleString()}</td>
                    <td className="py-4 px-2 text-center border-l">{row.langComm.events}</td>
                    <td className="py-4 px-2 text-center text-gray-500">{row.langComm.students.toLocaleString()}</td>
                    <td className="py-4 px-2 text-center border-l">{row.lifeSkills.events}</td>
                    <td className="py-4 px-2 text-center text-gray-500">{row.lifeSkills.students.toLocaleString()}</td>
                    <td className="py-4 px-2 text-center border-l">{row.techTrends.events}</td>
                    <td className="py-4 px-2 text-center text-gray-500">{row.techTrends.students.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center border-l">
                      <a href={row.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center">
                        View <ArrowUpRight className="h-4 w-4 ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
