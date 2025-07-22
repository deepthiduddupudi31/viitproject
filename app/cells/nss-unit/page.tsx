import React from "react";

const objectives = [
  "Understand the community in which they work",
  "Understand themselves in relation to their community",
  "Identify the needs and problems of the community and involve them in problem solving process. Develop among themselves a sense of social and civic responsibility",
  "Utilize their knowledge in finding practical solution to individual and community problems",
  "Develop competence required for group-living and sharing of responsibilities",
  "Gain skills in mobilizing community participation",
  "Acquire leadership qualities and democratic attitude",
  "Develop capacity to meet emergencies and natural disaster",
  "Practice national integration and social harmony"
];

const nssEvents = [
  { no: 1, date: "02/01/2022", activity: "One day Seminar for new N.S.S. Volunteers to orient them about all aspects of N.S.S." },
  { no: 2, date: "10/01/2022 -16/01/2022", activity: "Road Safety Week; Programmes" },
  { no: 3, date: "25/01/2022", activity: "National Voters Day" },
  { no: 4, date: "25/01/2022", activity: "Mock Parliament" },
  { no: 5, date: "30/01/2022", activity: "National Cleanliness Day (Cleaning of Class rooms, Labs, Seminar Hall & Outside area)" },
  { no: 6, date: "04/03/2022 -10/03/2022", activity: "National Safety Week" },
  { no: 7, date: "07/04/2022", activity: "World Health Day" },
  { no: 8, date: "22/04/2022", activity: "World Earth Day: Plantation Programme" },
  { no: 9, date: "29/04/2022", activity: "Chairman sir's Birth day : Campus Clean Program and Blood donation camp" },
  { no: 10, date: "08/05/2022", activity: "World Red Cross Day" },
  { no: 11, date: "28/05/2022", activity: "International Labour Day / May Day" },
  { no: 12, date: "31/05/2022", activity: "No Tobacco Day" },
  { no: 13, date: "21/05/2022", activity: "International Yoga Day" },
  { no: 14, date: "26/05/2022", activity: "International Day against Drug Abuse & Illicit Trafficking" },
  { no: 15, date: "01/06/2022", activity: "Special Camp-1: NSS Outreach programme" },
  { no: 16, date: "05/06/2022", activity: "World Environment Day: Plantation programme" },
  { no: 17, date: "11/06/2022", activity: "World Population Day" },
  { no: 18, date: "09/08/2022", activity: "Quit India Movement celebrations" },
  { no: 19, date: "14/08/2022", activity: "Independence day celebrations: Mock Assembly" },
  { no: 20, date: "23/08/2022.- 06/09/2022", activity: "National Fortnight on Eye Donation" },
  { no: 21, date: "01/09/2022-07/09/2022", activity: "National Nutrition Week" },
  { no: 22, date: "08/09/2022", activity: "International Literacy Day - Lecture on New Education Policy" },
  { no: 23, date: "01/09/2022-15/09/2022", activity: "SwachhtaPakhwada" },
  { no: 24, date: "24/09/2022", activity: "NSS Day" },
  { no: 25, date: "27/09/2022", activity: "World Tourism Day Celebration" },
  { no: 26, date: "29/09/2022", activity: "World Heart Day" },
  { no: 27, date: "01/10/2022", activity: "National Voluntary Blood Donation Day" },
  { no: 28, date: "02/10/2022-08/10/2022", activity: "Prevention of Blindness Week" },
  { no: 29, date: "16/10/2022", activity: "World Food Day" },
  { no: 30, date: "14/11/2022", activity: "World Diabetes Day" },
  { no: 31, date: "01/12/2022", activity: "World Aids Day" },
  { no: 32, date: "05/12/2022", activity: "International Volunteer Day For Economic And Social Development" },
  { no: 33, date: "08/12/2022-14/12/2022", activity: "All India Handicrafts Week" },
  { no: 34, date: "14/12/2022", activity: "Energy Conservation Day: An Awareness Session On Save Electricity" },
  { no: 35, date: "15/12/2022", activity: "Special Camp-2: NSS Outreach programme" },
];

export default function NSSUnitPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B5] mb-4 text-center uppercase tracking-wide">National Service Scheme - NSS</h1>
        <h2 className="text-xl font-semibold text-[#0077B5] mb-2 text-center">About NSS</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          The National Service Scheme unit of Vignan's Institute of Information Technology (A) began as a student youth service programme in the academic year 2006. The NSS unit attempts to raise social awareness among young people with the overarching goal of helping students develop their personalities via community service. To achieve the desired goal, 100 student volunteers are registered every year under the supervision of a Faculty in Charge known as the NSS Programme Officer. The NSS unit must submit its annual progress and activities to JNTUK's NSS Coordinator.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">National Service Scheme</h2>
        <p className="text-gray-700 mb-6">
          National Service Scheme popularly known as NSS, the scheme was launched in Mahatma Gandhi Centenary year 1969 and aimed at developing student's personality through community service. The overall objective of National Service is educational. This objective is attained through the service to the community.<br/>
          National Service Scheme (NSS) is a permanent youth Programme under the Ministry of Youth Affairs and Sports, Government of India and funded by Government of Andhra Pradesh and Government of India in the ratio 5:7
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Objective</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          {objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Motto</h2>
        <p className="text-gray-700 mb-6">
          <b>"Not me, but you,"</b> is the NSS's slogan or catchphrase. It emphasises that an individual's well-being is ultimately reliant on the well-being of society as a whole. This encapsulates the core of democratic life, emphasising the need of unselfish service, respect for the viewpoint of others, and care for fellow human beings.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Badge</h2>
        <p className="text-gray-700 mb-6">
          The NSS badge has the NSS emblem, which is embossed. It is worn by NSS volunteers when participating in any programme or doing community service. The symbol's konark wheel includes eight bands that symbolise the 24 hours of the day. As a result, the emblem encourages the wearer to be ready to serve the country 24 hours a day, seven days a week. The red colour of the insignia denotes that the NSS volunteers are full of life, i.e., vivacious, active, energetic, and upbeat. The navy blue colour represents the universe, of which the NSS is a small part, ready to offer its fair contribution to the well-being of humanity.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">Symbol</h2>
        <p className="text-gray-700 mb-6">
          The symbol of the National Service Scheme is "Rath' Wheel of the Konark Sun Temple of Orissa. These giant wheels of the sun temple portray the cycles of creation, preservation and release and signify the movement in life across time and time and space. The design of the symbol, a simplified form of the Sun Chariot wheel primarily depicts movement. The wheel signifies the progressive cycle of life. It stands for continuity as well as change and implies the continuous striving of NSS for social transformation and enlistment.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">NSS Day</h2>
        <p className="text-gray-700 mb-6">
          The National Security Service (NSS) was officially established on September 24, 1969, the centennial of Father of the Nation's birth. As a result, every year on September 24, NSS Day is observed with suitable programmes and activities.
        </p>
        <h2 className="text-2xl font-semibold text-[#0077B5] mb-2 mt-8">NSS Event Calendar 2022</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#0077B5] text-white">
              <tr>
                <th className="py-2 px-3 border-b">S.No</th>
                <th className="py-2 px-3 border-b">Proposed Dates</th>
                <th className="py-2 px-3 border-b">Nature of NSS Activity</th>
              </tr>
            </thead>
            <tbody>
              {nssEvents.map((event, i) => (
                <tr key={i} className="even:bg-[#e6f0fa]">
                  <td className="py-2 px-3 border-b text-center">{event.no}</td>
                  <td className="py-2 px-3 border-b text-center">{event.date}</td>
                  <td className="py-2 px-3 border-b">{event.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 