export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "#",
    children: [
      { label: "Chairman", path: "/about/chairman" },
      { label: "CEO", path: "/about/CEO" },
      { label: "Rector", path: "/about/Rector" },
      { label: "Principal", path: "/about/Principal" },
      { label: "Administration", path: "/about/Administration" },
      { label: "Statutory Approvals", path: "/about/StatutoryApprovals" },
      { label: "Accreditation", path: "/about/Accreditation" },
      { label: "Center of Excellence", path: "/about/CenterOfExcellence" },
      { label: "Rankings and Certifications", path: "/about/RankingsAndCertifications" },
      { label: "Awards & Accolades", path: "/about/Awards" },
      { label: "Strategic Plan", path: "/about/StrategicPlan" },
    ],
  },
  {
    label: "Governance",
    path: "#",
    children: [
      { label: "Organizational Structure", path: "/governance/organizational-structure" },
      { label: "Governing Body", path: "/governance/governing-body" },
      { label: "Academic Council", path: "/governance/academic-council" },
      { label: "Finance Committee", path: "/governance/finance-committee" },
      {
        label: "Non Statutory Committees",
        path: "/governance/non-statutory-committees",
        children: [
          { label: "Planning and Monitoring committee (PMC)", path: "/governance/committees/pmc" },
          { label: "Academic Planning and Monitoring committee (APMC)", path: "/governance/committees/apmc" },
          { label: "Admission Advisory committee (AAC)", path: "/governance/committees/aac" },
          { label: "Research & Development Advisory committee (R&D AC)", path: "/governance/committees/rd-ac" },
          { label: "Examination Evaluation Committee (EEC)", path: "/governance/committees/eec" },
          { label: "Training and Placement Committee (T&PC)", path: "/governance/committees/tpc" },
          { label: "Code of Conduct Monitoring Committee (CCMC)", path: "/governance/committees/ccmc" },
          { label: "Grievance Redressal Committee (GRC)", path: "/governance/committees/grc" },
          { label: "Internal Complaints Committee (ICC)", path: "/governance/committees/icc" },
          { label: "Purchase Committee (PC)", path: "/governance/committees/pc" },
          { label: "Library Advisory Committee (LAC)", path: "/governance/committees/lac" },
          { label: "Hostel Management Committee (HMC)", path: "/governance/committees/hmc" },
          { label: "Research Ethics Committee (REC)", path: "/governance/committees/rec" },
          { label: "SC & ST Committee (SC&ST C)", path: "/governance/committees/sc-st-c" },
          { label: "Student Activity Committee (SAC)", path: "/governance/committees/sac" },
          { label: "Student Welfare Committee (SWC)", path: "/governance/committees/swc" },
          { label: "Anti Ragging Committee (ARC)", path: "/governance/committees/arc" },
          { label: "Academic and Administrative Audit Committee (AAAC)", path: "/governance/committees/aaac" },
          { label: "Department Development Committee (DDC)", path: "/governance/committees/ddc" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    path: "#",
    children: [
      {
        label: "Admissions",
        path: "/academics/Admissions",
        children: [
          { label: "Courses Offered", path: "/academics/Admissions/coursesoffered" },
          { label: "Admission Procedure", path: "/academics/Admissions/admissionproduce" },
          { label: "Admission Lists", path: "/academics/Admissions/admissionlist" },
          { label: "Course Outcomes", path: "/academics/Admissions/courseoutcome" },
        ],
      },
      { label: "Academic Calendars", path: "/academics/Admissions/academiccalender" },
      {
        label: "Teaching Learning Process",
<<<<<<< HEAD
        path: "/academics/teacherlearning",
        children: [
          { label: "Teaching Methodologies", path: "/academics/teacherlearning/teachingmethod" },
          { label: "OBE Practices", path: "/academics/teacherlearning/obepractice" },
          { label: "Special Programs - Student Diversity", path: "/academics/teacherlearning/specialprogram" },
          { label: "Mentor-Mentee System", path: "/academics/teacherlearning/mentor-mentee" },
=======
        path: "/academics/teachinglearning",
        children: [
          { label: "Teaching Methodologies", path: "/academics/teachinglearning/teachingmethod" },
          { label: "OBE Practices", path: "/academics/teachinglearning/obepractice" },
          { label: "Special Programs - Student Diversity", path: "/academics/teachinglearning/specialprogram" },
          { label: "Mentor-Mentee System", path: "/academics/teachinglearning/mentor-mentee" },
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
        ],
      },
      { label: "Internship Manual", path: "https://vignaniit.edu.in/Internship%20manual%20and%20student%20diary.pdf" },
      { label: "Exit Students Feedback", path: "https://vignaniit.edu.in/Exit%20Feed%20Back.pdf" },
      { label: "MoUs - Academics", path: "https://vignaniit.edu.in/naac/criteria1/1.1.3%20Attachments/MoUs/1.1.3_VIIT_MoUs_Academics.pdf" },
      { label: "Extra Curricular Activities", path: "https://vignaniit.edu.in/ssr/criteria5/5.3.1/5.3.1_Website%20Copy-1.pdf"},
      { label: "POs, PEOs and PSOs", path: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.1.1%20b.pdf" },
      { label: "Curriculum Design Process", path: "https://vignaniit.edu.in/ssr/criteria1/1.1.1/1.%201%20.1%20a%20.pdf" },
      { label: "Internships Projects and Research Projects", path: "/academics/internshipprojects" },
    ],
  },
  {
    label: "Departments",
    path: "#",
    children: [
      { label: "Civil Engineering", path: "/Departments/Civil" },
      { label: "Electrical & Electronics Engg.", path: "/Departments/EEE" },
      { label: "Mechanical Engineering", path: "/Departments/ME" },
      { label: "Electronics and Communication Engineering", path: "/Departments/ECE" },
      { label: "Computer Science & Engineering", path: "/Departments/CSE" },
      { label: "Advanced Computer Science & Engineering", path: "/Departments/ACSE" },
      { label: "Information Technology", path: "/Departments/IT" },
      { label: "Electronics & Computer Engineering", path: "/Departments/ECM" },
      { label: "Artificial Intelligence & DataScience", path: "/Departments/AIDS" },
      { label: "Basic Science & Humanities", path: "/Departments/BSH" },
      { label: "Management Studies", path: "/Departments/MBA" },
      { label: "Master of Computer Applications", path: "/Departments/MCA" },

    ],
  },
  {
    label: "Placements",
    path: "#",
    children: [
      { label: "About T&P", path: "/placements/abouttp" },
      { label: "Placement Details", path: "/placements/placementdetails" },
      { label: "Training Process", path: "/placements/trainingprocess" },
      { label: "Contact", path: "/placements/contact" },
    ],
  },
  {
    label: "Examinations",
    path: "#",
    children: [
      { label: "Time Tables", path: "/examinations/Timetable" },
      { label: "Notifications", path: "/examinations/notifications" },
      { label: "Examination Manual", path: "https://vignaniit.edu.in/examcell/regulations/Examination%20Manual.pdf" },
      { label: "It Reforms", path: "https://vignaniit.edu.in/examcell/IT%20Integrations.pdf" },
      { label: "About Exam Cell", path: "/examinations/aboutexamcell" },
      { label: "Results", path: "/examinations/results" },
      
      
    ],
  },
  {
    label: "Facilities",
    path: "#",
    children: [
      { label: "Infrastructure", path: "/campus-life/infrastructure" },
      { label: "Library", path: "/campus-life/library" },
      { label: "IT Infrastructure", path: "/campus-life/it-infrastructure" },
      { label: "Transport", path: "/campus-life/transport" },
      { label: "Hostels", path: "/campus-life/hostels" },
      { label: "Cafeteria", path: "/campus-life/cafeteria" },
      { label: "Physical Education", path: "/campus-life/physical-education" },
      { label: "Medical", path: "#" },
    ],
  },
  {
    label: "Cells",
    path: "#",
    children: [
      { label: "Discipline Cell", path: "/cells/discipline" },
      { label: "ED Cell", path: "/cells/ed-cell" },
      { label: "Green Club", path: "/cells/green-club" },
      { label: "Idea Lab", path: "/cells/idea-lab" },
      { label: "IIC Cell", path: "/cells/iic-cell" },
      { label: "IPR Cell", path: "/cells/ipr-cell" },
      { label: "International Student Cell", path: "/cells/international-student-cell" },
      { label: "Media Cell", path: "/cells/media-cell" },
      { label: "NSS Unit", path: "/cells/nss-unit" },
      { label: "Research Cell",path:"#" },
      { label: "Skill Development Lab",path:"#" },
      { label: "Student Activity Council",path:"#" },
      { label: "WEP Cell",path:"#" },
    ],
  },
  { label: "Contact Us", path: "/contactus" },
];