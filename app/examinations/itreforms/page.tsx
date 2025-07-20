
// import React from "react";

// const pdfs = [
//   {
//     title: "IT Integrations",
//     url: "https://vignaniit.edu.in/examcell/IT%20Integrations.pdf",
//   },
//   // {
//   //   title: "Exam Circular",
//   //   url: "https://vignaniit.edu.in/examcell/ExamCircular.pdf",
//   // },
//   // {
//   //   title: "Academic Calendar",
//   //   url: "https://vignaniit.edu.in/examcell/AcademicCalendar.pdf",
//   // },
// ];

// export default function ItReforms() {
//   return (
//     <div className=" bg-gray-100 min-h-screen pt-32 px-4">
//       <h1 className="text-3xl font-bold mb-8 text-center">PDF Viewer</h1>

//       <div className="space-y-12">
//         {pdfs.map(({ title, url }, index) => {
//           const iframeSrc = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
//             url
//           )}`;

//           return (
//             <div
//               key={index}
//               className={`p-6 rounded-lg shadow-md ${
//                 index % 2 === 0 ? "bg-white" : "bg-gray-200"
//               }`}
//             >
//               <h2 className="text-xl font-semibold mb-4">{title}</h2>
//               <iframe
//                 src={iframeSrc}
//                 width="100%"
//                 height="800"
//                 className="rounded border"
//                 title={title}
//                 loading="lazy"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React from "react";

const pdfs = [
  {
    title: "IT Integrations",
    url: "https://vignaniit.edu.in/examcell/IT%20Integrations.pdf",
  },
  // {
  //   title: "Exam Circular",
  //   url: "https://vignaniit.edu.in/examcell/ExamCircular.pdf",
  // },
  // {
  //   title: "Academic Calendar",
  //   url: "https://vignaniit.edu.in/examcell/AcademicCalendar.pdf",
  // },
];
export default function ItReforms() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-20 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">PDF Links</h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition hover:shadow-lg ${
              index % 2 === 0 ? "bg-white" : "bg-gray-200"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{pdf.title}</h2>
            <a
              href={"https://drive.google.com/viewerng/viewer?url=https://vignaniit.edu.in/examcell/IT%2520Integrations.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              View PDF in Google Drive
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
