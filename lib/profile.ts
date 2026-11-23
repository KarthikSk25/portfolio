export const profile = {
  name: "Karthikeyan R",
  given: "Karthikeyan",
  initial: "R",
  role: "Full-stack developer",
  location: "Coimbatore, India",
  email: "rksk2596@gmail.com",
  phoneDisplay: "+91 76676 85655",
  phoneHref: "+917667685655",
  linkedin: "https://www.linkedin.com/in/r-karthikeyan-7a5252230",
  linkedinLabel: "r-karthikeyan-7a5252230",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const projects = [
  {
    index: "01",
    name: "ADNIC Plus",
    medium: "React Native · Expo",
    tone: "pine",
    title: "Medical cover, and motor sales",
    summary:
      "The ADNIC mobile app for medical insurance, with motor sales added recently. Members find providers and ADNIC offices on Google Maps, submit and track claims, upload documents, view benefits, update bank details, and receive alerts. For motor sales, a customer quotes a policy from the login screen or dashboard, continues manually or with UAE PASS, compares plans and add-ons, and pays through the Rosoom payment gateway. Successful payment issues the policy.",
    tags: ["React Native", "Expo", "Google Maps", "UAE PASS", "Payment gateway"],
  },
  {
    index: "02",
    name: "HR Training",
    medium: "Web portal",
    tone: "ink",
    title: "Training, from invite to certificate",
    summary:
      "The Training Facilitation Application for ADNIC Talent Management. Employees see assigned sessions, pre-reading, assessments, and feedback, mark attendance with a facilitator QR code, and download certificates. Facilitators run their own sessions, and the talent team manages enrollment through to completion. Staff sign in with Oracle Fusion HCM.",
    tags: ["Enrollment", "Assessments", "QR attendance", "Certificates"],
  },
  {
    index: "03",
    name: "KYC Portal",
    medium: "Web portal",
    tone: "terra",
    title: "SME cases in the AML queue",
    summary:
      "Screen updates and SME integration for the AML/KYC portal. Customer details and documents arrive from the SME portal, the system matches existing customers, and a KYC case is created or updated. Makers and checkers review the case, and status goes back to the SME portal. Search, audit, and customer due-diligence screens were modernized with that flow.",
    tags: ["AML/KYC", "SME integration", "Maker-checker", "Search"],
  },
  {
    index: "04",
    name: "EMIMS Portal",
    medium: "React · TypeScript",
    tone: "ink",
    title: "Role-based insurance operations",
    summary:
      "A web platform for ADNIC internal teams, brokers, and external users. Modules cover claims, endorsements, real-time alerts, user management, and approval workflows, with authentication, authorization, and performance work on Vite, Redux, and Tailwind CSS.",
    tags: ["React.js", "TypeScript", "Vite", "Redux", "Tailwind CSS"],
  },
  {
    index: "05",
    name: "Open Finance",
    medium: "Web and mobile",
    tone: "terra",
    title: "Consent-based financial data sharing",
    summary:
      "A secure portal aligned with UAE Central Bank Open Finance rules. People sign in with UAE PASS, manage consent, link accounts, and share data with third-party providers. Dashboards, approval flows, and live consent status sit on REST APIs and role-based access. Deep links connect the React Native app and the web portal for consent approval.",
    tags: ["React.js", "TypeScript", "Vite", "React Native", "Deep linking"],
  },
  {
    index: "06",
    name: "FocusRO",
    medium: "React Native",
    tone: "sand",
    title: "Employee time, kept visible",
    summary:
      "A cross-platform productivity app with time tracking, periodic screenshots, and an AutoStart flow that turns on when someone is active. It stays off in the background so monitoring stays explicit.",
    tags: ["React Native", "Time tracking", "Cross-platform"],
  },
] as const;

export const roles = [
  {
    dates: "Mar 2023 — Present",
    dateTime: "2023-03",
    place: "Coimbatore",
    title: "Associate Developer",
    org: "KGISL",
    points: [
      "Build and maintain React.js web apps and a React Native app for enterprise clients.",
      "Recently added motor sales, including the payment gateway, inside the ADNIC Plus app, and delivered the HR Training Portal and the AML/KYC portal.",
      "Bridge native modules and apply SSL pinning, secure storage, and JWT on mobile.",
      "Integrate Google Maps, social login, push notifications, payments, and deep linking.",
      "Improved performance by about 30% with code splitting, lazy loading, and tighter state management.",
      "Ship App Store and Play Store builds, Expo OTA updates, and Azure DevOps pipelines.",
    ],
  },
  {
    dates: "Feb 2022 — Feb 2023",
    dateTime: "2022-02",
    place: "Madurai",
    title: "Mobile Application Developer",
    org: "Blaze Web Services",
    points: [
      "Shipped cross-platform apps with React Native, both Expo and the React Native CLI.",
      "Connected Firebase push notifications, payment gateways, and Google Maps.",
      "Lowered crash rates by about 20% through performance work and bug fixing.",
      "Worked with QA and backend teams in Agile sprints using Git and Jira.",
    ],
  },
  {
    dates: "Sep 2019 — Jan 2022",
    dateTime: "2019-09",
    place: "Self-directed",
    title: "Career transition into software",
    org: null,
    points: [
      "Learned JavaScript, React Native, HTML, and CSS, built personal projects, and completed online training before the first developer role.",
    ],
  },
  {
    dates: "May 2017 — Aug 2019",
    dateTime: "2017-05",
    place: "Coimbatore",
    title: "Production Engineer",
    org: "Lakshmi Electrical Control Systems",
    points: [
      "Manufacturing and operations work: coordination across teams, process follow-through, and the analytical habits that came with a mechanical engineering degree.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    title: "Front end",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "State and data on the client",
    items: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "EAS Build",
      "React Navigation",
      "Deep linking",
      "OTA updates",
      "Push notifications",
      "App Store release",
      "Play Store release",
      "Secure storage",
      "SSL pinning",
      "AsyncStorage",
      "SQLite",
      "Native modules",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    title: "Quality and release",
    items: [
      "Jest",
      "Git",
      "GitLab",
      "Azure DevOps",
      "Jira",
      "Postman",
      "Firebase Auth",
      "Crashlytics",
      "Analytics",
    ],
  },
] as const;

export const courses = [
  {
    name: "Java & Spring Boot",
    detail: "Udemy · completed June 2026 · Java, Spring Boot, MySQL",
  },
  {
    name: "Next.js & React — The Complete Guide",
    detail: "Udemy · 2025",
  },
] as const;
