import React from 'react';
import { FileDown } from 'lucide-react'; // Using a clear icon for downloads

// Data for the links, organized into arrays for cleaner code
const admissionLists = [
  { year: "2022-23", href: "https://vignaniit.edu.in/admission_lists/Final%20Admission%20List_2022-23.pdf" },
  { year: "2021-22", href: "https://vignaniit.edu.in/admission_lists/Final%20Admission%20List_2021-22.pdf" },
  { year: "2020-21", href: "https://vignaniit.edu.in/admission_lists/Final%20Admission%20List_2020-21.pdf" },
  { year: "2019-20", href: "https://vignaniit.edu.in/admission_lists/Final%20Admission%20List_2019-20.pdf" },
  { year: "2018-19", href: "https://vignaniit.edu.in/admission_lists/Final%20Admission%20List_2018-19.pdf" },
];

const categoryWiseLists = [
  { year: "2022-23", href: "https://vignaniit.edu.in/admission_lists/Students_Category_2022-23.pdf" },
  { year: "2021-22", href: "https://vignaniit.edu.in/admission_lists/Students_Category_2021-22.pdf" },
  { year: "2020-21", href: "https://vignaniit.edu.in/admission_lists/Students_Category_2020-21.pdf" },
  { year: "2019-20", href: "https://vignaniit.edu.in/admission_lists/Students_Category_2019-20.pdf" },
  { year: "2018-19", href: "https://vignaniit.edu.in/admission_lists/Students_Category_2018-19.pdf" },
];

const reservedSeatsLists = [
  { year: "2022-23", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(c)SE_2022-23.pdf" },
  { year: "2021-22", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(c)SE_2O21-22.pdf" },
  { year: "2020-21", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(c)SE_2020-21.pdf" },
  { year: "2019-20", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(c)SE_2019-20.pdf" },
  { year: "2018-19", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(c)SE_2018-19.pdf" },
];

const admissionExtracts = [
  { year: "2022-23", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(d)AE_2022-23.pdf" },
  { year: "2021-22", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(d)AE_2O21-22.pdf" },
  { year: "2020-21", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(d)AE_2020-21.pdf" },
  { year: "2019-20", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(d)AE-2019-20.pdf" },
  { year: "2018-19", href: "https://vignaniit.edu.in/ssr/criteria2/2.1.2/2.1.2.(d)AE_2018-19.pdf" },
];

// Reusable component for rendering a list section
const ListSection = ({ title, items }) => (
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <span className="font-medium text-gray-700 group-hover:text-blue-600">
            {`List ${item.year}`}
          </span>
          <FileDown className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </a>
      ))}
    </div>
  </section>
);


const AdmissionDocumentsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">
            Admission Archives
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Official admission lists and documents from previous academic years.
          </p>
        </div>

        <div className="space-y-14">
          <ListSection title="Final Admission Lists" items={admissionLists} />
          <ListSection title="Category-wise Admission Lists" items={categoryWiseLists} />
          <ListSection title="Seats Earmarked for Reserved Categories" items={reservedSeatsLists} />
          <ListSection title="Admission Extracts" items={admissionExtracts} />
        </div>
      </div>
    </main>
  );
};

export default AdmissionDocumentsPage;
