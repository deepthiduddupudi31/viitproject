"use client";

export default function HostelsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 mt-24">
      <h1 className="text-4xl font-bold text-linkedin mb-6 text-center">Hostels</h1>
      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Details of Student Hostel</h2>
      <ul className="list-disc list-inside mb-6">
        <li><b>Capacity of Hostel:</b> Boys: 220 &nbsp; Girls: 400</li>
        <li><b>Rooms in Hostel:</b> Boys: 60 &nbsp; Girls: 150</li>
        <li><b>Recreational facilities:</b> Television with DTH facility, Wi-Fi.</li>
      </ul>
    </div>
  );
} 