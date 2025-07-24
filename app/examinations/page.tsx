"use client";
import Link from "next/link";

export default function ExaminationsHome() {
  return (
    <div className="pt-32 px-4 min-h-screen bg-white mt-5">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Examinations Section</h1>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li><Link href="/examinations/notifications" className="text-blue-600 hover:underline">Notifications</Link></li>
        <li><Link href="/examinations/Timetable" className="text-blue-600 hover:underline">Time Tables</Link></li>
        <li><Link href="https://vignaniit.edu.in/examcell/IT%20Integrations.pdf" className="text-blue-600 hover:underline">It Reforms </Link></li>
        <li><Link href="https://vignaniit.edu.in/examcell/regulations/Examination%20Manual.pdf" className="text-blue-600 hover:underline">Examination Manual</Link></li>
      </ul>
    </div>
  );
}
