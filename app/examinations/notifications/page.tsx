"use client";
import React from "react";
import './Notifications.css';

const notifications = [
  { sno: 1, date: '14/07/2025', note: 'VR23 1-1 Supplementary Time table July 2025' },
  { sno: 2, date: '14/07/2025', note: 'VR22 1-1 Supplementary Time table July 2025' },
  { sno: 3, date: '14/07/2025', note: 'VR20 1-1 Supplementary Time table July 2025' },
  { sno: 4, date: '14/07/2025', note: 'VR19 1-1 Supplementary Time table July 2025' },
  { sno: 5, date: '14/07/2025', note: 'VR17 1-1 Supplementary Time table July 2025' },
  { sno: 6, date: '29/05/2025', note: 'VR19 4-2 Advance Supplementary Time table June 2025' },
  { sno: 7, date: '29/05/2025', note: 'VR17 4-2 Advance Supplementary Time table June 2025' },
  { sno: 8, date: '28/04/2025', note: 'VR22,VR20,VR19,VR17 3-1 Supplementary Time table June 2025' },
  { sno: 9, date: '28/04/2025', note: 'VR22 3-2 Regular & Supplementary Time table May 2025' },
  { sno: 10, date: '16/04/2025', note: 'VR22 3-2 Mid-II May 2025' },
  { sno: 11, date: '16/04/2025', note: 'VR22 3-2 Remid-1 Time table May 2025' },
  { sno: 12, date: '09/04/2025', note: 'VR23,VR22,VR20,VR19,VR17 2-2 Regular & Supplementary Time table May 2025' },
  { sno: 13, date: '09/04/2025', note: 'VR19 4-2 Supplementary Time table May 2025' },
  { sno: 14, date: '09/04/2025', note: 'VR17 4-2 Supplementary Time table May 2025' },
  { sno: 15, date: '21/03/2025', note: 'VR23 2-1 Supplementary Time table Apr 2025' },
  { sno: 16, date: '10/01/2025', note: 'VR17, VR19, VR20 4-1 Advanced Supplementary Timetable Jan 2025' },
  { sno: 17, date: '09/12/2024', note: 'VR22 3-1 Regular & Supple Time table Dec 2024' },
  { sno: 18, date: '02/12/2024', note: 'VR22 3-1 REMID-Exam Time table Dec 2024' },
  { sno: 19, date: '29/11/2024', note: 'VR22 3-1 Mid-Exam Time table Dec 2024' },
  { sno: 20, date: '28/11/2024', note: 'VR23,22,20,19,17 II B.Tech I Sem Reg & Supple Time table Dec 2024' },
  { sno: 21, date: '05/11/2024', note: 'IV-I Reg and Supple End Exam Time table Nov 2024' },
  { sno: 22, date: '14/10/2024', note: 'VR22 III B.Tech I Sem Mid-Exam Time Table' },
  { sno: 23, date: '19/09/2024', note: 'VR23 II B.Tech I Sem Mid-Exam Time Table' },
  { sno: 24, date: '14/09/2024', note: 'VR22 II-I supply Time Table - Sep 2024' },
  { sno: 25, date: '24/08/2024', note: 'VR23 I-I supply Time Table - Aug 2024' },
  
];

const Notifications = () => {
  return (
    <div className="pt-32 px-4 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto shadow-md border border-gray-200 rounded-md overflow-x-auto">
        <h2 className="text-2xl font-bold text-blue-700 p-4 border-b border-gray-200 bg-blue-50">
          Examcell Notifications
        </h2>
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border border-gray-200">S.No</th>
              <th className="py-2 px-4 border border-gray-200">Date of Release</th>
              <th className="py-2 px-4 border border-gray-200">Notification</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map(({ sno, date, note }, index) => {
              const isEvenPair = Math.floor(index / 2) % 2 === 0;
              return (
                <tr
                  key={sno}
                  className={`${
                    isEvenPair ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="py-2 px-4 border border-gray-200">{sno}</td>
                  <td className="py-2 px-4 border border-gray-200">{date}</td>
                  <td className="py-2 px-4 border border-gray-200">{note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;