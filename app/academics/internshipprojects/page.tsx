"use client"; // This directive is necessary for using hooks like useState

import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const projectData = [
  {
    year: "2022-23",
    branches: [
        { name: "01. Civil Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/2022-23_CE_INTERNSHIPS.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/22-23_CEField%20projects_Final.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/22-23_civilResearch%20projects.pdf" }},
        { name: "02. Electrical and Electronics", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/EEE_22-23_Internship.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/EEE_22-23_Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/EEE_22-23_Research%20Projects.pdf" }},
        { name: "03. Mechanical Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/ME_2022-23_Internship%20Reports_Hyperlink.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/ME_2022-23_Field%20Project_Hyperlink.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/ME_2022-23_Main%20and%20CEER%20Project_Hyperlink.pdf" }},
        { name: "04. Electronics and Communications", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/2022-23_%20ECE_HYPERLINKS_%20Internships%20certificates.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/2022-23%20ECE%20Fiels(EPICS)%20PROJECT.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/ECE_22-23_Research%20Projects.pdf" }},
        { name: "05. Computer Science Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/22-23cse%20Internship%20Merged.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/22-23%20CSE%20Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/CSE%2022-23%20Research%20Projects.pdf" }},
        { name: "12. Information Technology", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/2022-2023%20IT_INTERNSHIP.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/22-23_IT%20FIELD%20PROJECT.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/2022-2023%20IT_%20RESEARCH%20PROJECT(MAIN+CEER.pdf" }},
        { name: "19. Electronics and Computer Eng.", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/ECM-22-23_Internships.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/ECM_22-23_EPICS.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/ECM_22-23_Research%20Projects.pdf" }},
        { name: "43. Artificial Intelligence", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/CSE_22-23_%20AI.pdf" }},
        { name: "44. Data Science", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/CSE_22-23_Data%20Science.pdf" }},
        { name: "46. Cyber Security", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/CSE_22-23%20cyber%20security.pdf" }},
        { name: "54. AI & Data Science", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/AIDS_2022-23_INTERNSHIPS%20WITH%20LINKS.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/AIDS-2022-23-EPICSLINKS.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/AIDS_2022-23_CEER%20WITH%20LINKS.pdf" }},
        { name: "1E. Master of Business Admin.", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/22-23/MBA_22-23_Internship.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/22-23/MBA_22-23_Research%20projects.pdf" }},
        { name: "1F. Master of Computer App.", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/22-23/2022-23-MCA-Field%20Projects.pdf" }},
        { name: "42. Power & Industrial Drives", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/EEE_PG_22-23.pdf" }},
    ]
  },
  {
    year: "2021-22",
    branches: [
      { name: "01. Civil Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/2021-22_CE_INTERNSHIPS.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/21-22_CIVILField%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/21-22_Research%20Projects-CE-B.Tech.pdf" }},
      { name: "02. Electrical and Electronics", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/EEE_21-22_Internships.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/EEE_21-22_Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/EEE_21-22_Research%20Projects.pdf" }},
      { name: "03. Mechanical Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/ME_2021-22_Internship_Hyperlink.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/ME_2021-22_Field%20Projects_Hyperlink.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/ME_2021-22_%20Main%20and%20CEER%20Project_Hyperlink.pdf" }},
      { name: "04. Electronics and Communication Eng.", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/ECE_2021-22_HYPERLINK_INTERNSHIPS.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/2021-22%20ECE%20Field(%20EPICS)%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/ECM_21-22_Research%20Projects.pdf" }},
      { name: "05. Computer Science Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/CSE%2021-22%20internship%20updated.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/CSE%2021-22%20field%20projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/21-22%20CSE%20Research%20Projects.pdf" }},
      { name: "12. Information Technology", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/2021-2022%20IT_INTERNSHIP.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/21-22_IT%20FIELD%20PROJECT.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/2021-2022_IT%20RESEARCH%20PROJECT(MAIN+MINI+CEER.pdf" }},
      { name: "19. Electronics and Computers", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/ECM_21-22_Internships.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/ECM_21-22_EPICS.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/21-22_Research%20project.pdf" }},
      { name: "54. AI and Data Science", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/AIDS-2021-22-EPICS%20LINKS.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/AIDS_2021-22_CEER%20LINKS.pdf" }},
      { name: "1F. Master of Computer Applications", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/21-22/2021-22%20-MCA-Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/2021-22%20-MCA-Reserach%20Projects.pdf" }},
      { name: "1E. Master of Business Administration", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/21-22/21-22_MBA_Internships.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/21-22/MBA_21-22_Research%20projects.pdf" }},
      { name: "22. Transport Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/21-22__M.Tech_CE_Research%20Project.pdf" }},
      { name: "42. Power and Industrial Drives", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/EEE_PG_21-22.pdf" }},
      { name: "58. Computer Science and Eng. (PG)", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/21-22_CSE_PG%20Projects%20Updated.pdf" }},
    ],
  },
  {
    year: "2020-21",
    branches: [
      { name: "01. Civil Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/2020-21_CE_INTERNSHIPS-1.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/Civil_20-21_Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/20-21_Research%20Projects-CE-B.Tech.pdf" }},
      { name: "02. Electrical and Electronics", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/EEE_20-21_Internships.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/EEE_20-21_Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/EEE_20-21_Research%20Projects.pdf" }},
      { name: "03. Mechanical Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/ME_2020-21_Internships_Hyperlink.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/ME_2020-21_Main%20and%20CEER%20Project_Hyperlink.pdf" }},
      { name: "04. Electronics and Communications Eng.", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/ECE_2020-21_INTERNSHIPS_Hyperlinks.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/2020-21%20ECE%20Field%20(%20EPICS)Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/20-21_ECE_Research%20Projects.pdf" }},
      { name: "05. Computer Science Engineering", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/20-21%20CSE%20Internship%20Merged.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/20-21_CSE_Field%20Projects%20updated.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/20-21%20CSE%20Research%20Projects.pdf" }},
      { name: "12. Information Technology", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/2020-2021%20IT_INTERNSHP.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/20-21_%20IT%20FIELD%20PROJECT.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/2020-2021_IT%20RESEARCH%20PROJECT(MAIN+CEER)%20(1)%20(1).pdf" }},
      { name: "19. Electronics and Computers", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/ECM_20-21_Internships.pdf", fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/ECM_20-21_EPICS.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/ECM_20-21_Research%20Projects.pdf" }},
      { name: "1F. Master of Computer Applications", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/20-21/2020-21-MCA-Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/2020-21%20-MCA-Research%20Projects.pdf" }},
      { name: "1E. Master of Business Administration", links: { internships: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/INTERNSHIP/20-21/MBA_INTERNSHIPS%20_20-21.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/MBA_20-21_Research%20Projects%20.pdf" }},
      { name: "54. Artificial Intelligence and Data Science", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/20-21/AIDS_2020-21_CEER%20WITH%20LINKS.pdf" }},
      { name: "22. Transport Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/20-21_Research%20Projec%20-CE-M.Tech.pdf" }},
      { name: "42. Power and Industrial Drives", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/EEE_PG_20-21.pdf" }},
      { name: "58. Computer Science and Eng. (PG)", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/20-21_CSE_PG%20Projects%20updated.pdf" }},
    ],
  },
  {
    year: "2019-20",
    branches: [
      { name: "01. Civil", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/CE_19-20_Research%20projects%20Final%20copy.pdf" }},
      { name: "02. Electrical and Electronics Eng.", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/EEE_19-20_Research%20Projects.pdf" }},
      { name: "03. Mechanical Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/ME_2019-20_Main%20and%20CEER%20Project_Hyperlink.pdf" }},
      { name: "04. Electronics and Communications Eng.", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/19-20_ECE_Research%20Projects.pdf" }},
      { name: "05. Computer Science and Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/CSE%2019-20%20Research%20Projects.pdf" }},
      { name: "12. Information Technology", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/2019-2020_IT%20RESEARCH%20PROJECT(MAIN+CEER.pdf" }},
      { name: "19. Electronics and Computers", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/ECM_19-20_Research%20Projects.pdf" }},
      { name: "1F. Master of Computer Applications", links: { fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/19-20/2019-20%20-MCA-Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/2019-20%20-MCA-Research%20Projects.pdf" }},
      { name: "1E. Master of Business Administration", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/19-20/19-20%20MBA%20projects%20links.pdf" }},
      { name: "42. Power and Industrial Drives", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/EEE_PG_19-20.pdf" }},
      { name: "58. Computer Science and Eng. (PG)", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/19-20_CSE_PG%20Projects%20Updated.pdf" }},
      { name: "70. Electronics and Communication Eng. (PG)", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/M.Tech%20Projects_ECE(2019-20).pdf" }},
    ],
  },
  {
    year: "2018-19",
    branches: [
      { name: "01. Civil Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/18-19_CE_Research%20Projects%20(2).pdf" }},
      { name: "02. Electrical and Electronics", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/EEE_18-19_Main%20Projects.pdf" }},
      { name: "03. Mechanical Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/ME_2018-19_Main%20and%20CEER%20Project_Hyperlink.pdf" }},
      { name: "05. Computer Science and Engineering", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/18-19%20CSE%20Research%20Projects%20Reports.pdf" }},
      { name: "12. Information Technology", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/2018-2019_IT%20RESEARCH%20PROJECTS(MAIN+CEER).pdf" }},
      { name: "19. Electronics and Communications Eng.", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/18-19_ECE_Research%20Projects.pdf" }},
      { name: "19. Electronics and Computers", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/18-19_ECM_Research%20Projects.pdf" }},
      { name: "1E. Master of Business Administration", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/MBA_18-19_Research%20Projects.pdf" }},
      { name: "1F. Master of Computer Applications", links: { internships: null, fieldProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/FIELDPRO/18-19/2018-19%20-MCA-Field%20Projects.pdf", researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/PROJECTS/18-19/2018-19-MCA-Research%20Projects.pdf" }},
      { name: "15. Machine Design", links: {} },
      { name: "22. Transport Engineering", links: {} },
      { name: "40. Information Technology (PG)", links: {} },
      { name: "42. Power and Industrial Drives", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/EEE_PG_18-19.pdf" }},
      { name: "58. Computer Science and Eng. (PG)", links: { researchProjects: "https://vignaniit.edu.in/ssr/criteria1/1.3.3/projects_pg/18-19_CSE_PG%20Projects%20Updated.pdf" }},
      { name: "68. VLSI Embedded Systems", links: {} },
      { name: "70. Electronics and Communication Eng. (PG)", links: {} },
      { name: "AC. Artificial Intelligence and Machine Learning", links: {} },
    ],
  },
];

const ProjectLink = ({ url }) => {
  if (!url) {
    return <span className="text-gray-400">N/A</span>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline group font-medium"
    >
      <FileText className="h-4 w-4 mr-2 text-gray-500 group-hover:text-blue-700 transition-colors" />
      View PDF
    </a>
  );
};

const ProjectsArchivePage = () => {
  const [activeYear, setActiveYear] = useState(projectData[0].year);
  const activeData = projectData.find(d => d.year === activeYear);

  return (
    <main className="min-h-screen bg-gray-50 font-sans mt-24">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Projects & Internships Archive
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Browse official documents for student projects and internships by academic year.
          </p>
        </div>

        <div className="mb-8 flex justify-center flex-wrap border-b border-gray-200">
          {projectData.map(({ year }) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-3 sm:px-5 py-3 text-sm sm:text-base font-semibold transition-colors duration-200 focus:outline-none -mb-px ${
                activeYear === year
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-800 border-b-2 border-transparent'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* --- Responsive Table Container --- */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-800 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-4 w-2/5 font-semibold">Branch</th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold">Internships</th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold">Field Projects</th>
                  <th scope="col" className="px-6 py-4 text-center font-semibold">Research Projects</th>
                </tr>
              </thead>
              <tbody>
                {activeData?.branches.map((branch, index) => (
                  <tr key={index} className="bg-white border-b last:border-0 hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{branch.name}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap"><ProjectLink url={branch.links.internships} /></td>
                    <td className="px-6 py-4 text-center whitespace-nowrap"><ProjectLink url={branch.links.fieldProjects} /></td>
                    <td className="px-6 py-4 text-center whitespace-nowrap"><ProjectLink url={branch.links.researchProjects} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProjectsArchivePage;
