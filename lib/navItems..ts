// navItems.jsx

// --- TYPE DEFINITIONS ---
export interface MegaMenuLink {
  label: string;
  path: string;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

export interface NavItem {
  label: string;
  path: string;
  megaMenu?: MegaMenuColumn[];
  children?: NavItem[]; // Kept for mobile fallback
}

// --- COMPREHENSIVE NAVIGATION DATA ---
export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "#",
    megaMenu: [
      {
        title: "Leadership",
        links: [
          { label: "Chairman", path: "/about/chairman" },
          { label: "CEO", path: "/about/CEO" },
          { label: "Rector", path: "/about/Rector" },
          { label: "Principal", path: "/about/Principal" },
          { label: "Administration", path: "/about/Administration" },
        ],
      },
      {
        title: "Recognition",
        links: [
          { label: "Accreditation", path: "/about/Accreditation" },
          { label: "Awards & Accolades", path: "/about/Awards" },
          { label: "Rankings & Certifications", path: "/about/RankingsAndCertifications" },
        ],
      },
      {
        title: "Institution",
        links: [
          { label: "Center of Excellence", path: "/about/CenterOfExcellence" },
          { label: "Statutory Approvals", path: "/about/StatutoryApprovals" },
          { label: "Strategic Plan", path: "/about/StrategicPlan" },
        ],
      },
    ],
  },
  {
    label: "Governance",
    path: "#",
    megaMenu: [
      {
        title: "Structure",
        links: [
          { label: "Organizational Structure", path: "/governance/organizationalStructure" },
          { label: "Governing Body", path: "/governance/governingBody" },
          { label: "Academic Council", path: "/governance/academicCouncil" },
          { label: "Finance Committee", path: "/governance/financeCommittee" },
        ],
      },
      {
        title: "Academic Committees",
        links: [
          { label: "Planning & Monitoring (PMC)", path: "/governance/nonStatutoryCommittees/planningAndMonitoringCommittee" },
          { label: "Academic Planning (APMC)", path: "/governance/nonStatutoryCommittees/academicPlanningAndMonitoringCommittee" },
          { label: "Admission Advisory (AAC)", path: "/governance/nonStatutoryCommittees/admissionAdvisoryCommittee" },
          { label: "R&D Advisory (R&D AC)", path: "/governance/nonStatutoryCommittees/researchAndDevelopmentAdvisoryCommittee" },
          { label: "Examination Evaluation (EEC)", path: "/governance/nonStatutoryCommittees/examinationEvaluationCommittee" },
        ],
      },
      {
        title: "Student Committees",
        links: [
          { label: "Training & Placement (T&PC)", path: "/governance/nonStatutoryCommittees/trainingAndPlacementCommittee" },
          { label: "Student Activity (SAC)", path: "/governance/nonStatutoryCommittees/studentActivityCommittee" },
          { label: "Student Welfare (SWC)", path: "/governance/nonStatutoryCommittees/studentWelfareCommittee" },
          { label: "Anti Ragging (ARC)", path: "/governance/nonStatutoryCommittees/antiRaggingCommittee" },
          { label: "SC & ST Committee", path: "/governance/nonStatutoryCommittees/SCAndSTCommittee" },
        ],
      },
      {
        title: "Other Committees",
        links: [
          { label: "Code of Conduct (CCMC)", path: "/governance/nonStatutoryCommittees/codeOfConductMonitoringCommittee" },
          { label: "Grievance Redressal (GRC)", path: "/governance/nonStatutoryCommittees/grievanceRedressalCommittee" },
          { label: "Internal Complaints (ICC)", path: "/governance/nonStatutoryCommittees/internalComplaintsCommittee" },
          { label: "Purchase Committee (PC)", path: "/governance/nonStatutoryCommittees/purchaseCommittee" },
          { label: "Library Advisory (LAC)", path: "/governance/nonStatutoryCommittees/libraryAdvisoryCommittee" },
          { label: "Hostel Management (HMC)", path: "/governance/nonStatutoryCommittees/hostelManagementCommittee" },
          { label: "Research Ethics (REC)", path: "/governance/nonStatutoryCommittees/researchAndDevelopmentAdvisoryCommittee" },
          { label: "Academic Audit (AAAC)", path: "/governance/nonStatutoryCommittees/academicAndAdministrativeAuditCommittee" },
          // { label: "Department Development (DDC)", path: "/governance/nonStatutoryCommittees/departmentDevelopmentCommittee" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    path: "#",
    megaMenu: [
      {
        title: "Admissions",
        links: [
          { label: "Courses Offered", path: "/academics/Admissions/coursesoffered" },
          { label: "Admission Procedure", path: "/academics/Admissions/admissionproduce" },
          { label: "Admission Lists", path: "/academics/Admissions/admissionlist" },
          { label: "Course Outcomes", path: "/academics/Admissions/courseoutcome" },
          { label: "Academic Calendars", path: "/academics/Admissions/academiccalender" },
        ],
      },
      {
        title: "Teaching & Learning",
        links: [
          { label: "Teaching Methodologies", path: "/academics/teacherlearning/teachingmethod" },
          { label: "OBE Practices", path: "/academics/teacherlearning/obepractice" },
          { label: "Mentor-Mentee System", path: "/academics/teacherlearning/mentor-mentee" },
          { label: "Special Programs", path: "/academics/teacherlearning/specialprogram" },
          { label: "Internships & Projects", path: "/academics/internshipprojects" },
        ],
      },
      {
        title: "Resources & Documents",
        links: [
          { label: "Internship Manual", path: "https://vignaniit.edu.in/Internship%20manual%20and%20student%20diary.pdf" },
          { label: "Exit Students Feedback", path: "https://vignaniit.edu.in/Exit%20Feed%20Back.pdf" },
          { label: "Curriculum Design", path: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.%201%20.1%20a%20.pdf" },
          { label: "POs, PEOs & PSOs", path: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1%20b.pdf" },
          { label: "MoUs - Academics", path: "https://vignaniit.edu.in/naac/criteria1/1.1.3%20Attachments/MoUs/1.1.3_VIIT_MoUs_Academics.pdf" },
          { label: "Extra Curricular Activities", path: "https://vignaniit.edu.in/ssr/criteria5/5.3.1/5.3.1_Website%20Copy-1.pdf" },
        ],
      },
    ],
  },
  {
    label: "Departments",
    path: "#",
    megaMenu: [
      {
        title: "Core Engineering",
        links: [
          { label: "Civil Engineering", path: "/Departments/Civil" },
          { label: "Electrical & Electronics", path: "/Departments/EEE" },
          { label: "Mechanical Engineering", path: "/Departments/ME" },
        ],
      },
      {
        title: "Computer Science",
        links: [
          { label: "Computer Science & Engg.", path: "/Departments/CSE" },
          { label: "Advanced Computer Science", path: "/Departments/ACSE" },
          { label: "Information Technology", path: "/Departments/IT" },
          { label: "AI & Data Science", path: "/Departments/AIDS" },
        ],
      },
      {
        title: "Electronics",
        links: [
          { label: "Electronics & Communication", path: "/Departments/ECE" },
          { label: "Electronics & Computer", path: "/Departments/ECM" },
        ],
      },
      {
        title: "Other Programs",
        links: [
          { label: "Basic Science & Humanities", path: "/Departments/BSH" },
          { label: "Management Studies (MBA)", path: "/Departments/MBA" },
          { label: "Computer Applications (MCA)", path: "/Departments/MCA" },
        ],
      },
    ],
  },
  {
    label: "Placements",
    path: "#",
    megaMenu: [
      {
        title: "Overview",
        links: [
          { label: "About T&P Cell", path: "/placements/abouttp" },
          { label: "Training Process", path: "/placements/trainingprocess" },
          { label: "Contact T&P", path: "/placements/contact" },
        ],
      },
      {
        title: "Details",
        links: [
          { label: "Placement Records", path: "/placements/placementdetails" },
          { label: "Our Recruiters", path: "/placements/recruiters" },
        ],
      },
    ],
  },
  {
    label: "Examinations",
    path: "#",
    megaMenu: [
      {
        title: "Information",
        links: [
          { label: "Notifications", path: "/examinations/notifications" },
          { label: "Time Tables", path: "/examinations/Timetable" },
          { label: "Results", path: "/examinations/results" },
          { label: "About Exam Cell", path: "/examinations/aboutexamcell" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Examination Manual", path: "https://vignaniit.edu.in/examcell/regulations/Examination%20Manual.pdf" },
          { label: "IT Reforms", path: "https://vignaniit.edu.in/examcell/IT%20Integrations.pdf" },
        ],
      },
    ],
  },
  { label: "Contact Us", path: "/contactus" },
];
