export const projectsData = [
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    category: "Academic Software & Database Project",
    summary: "An academic coursework project centered on student attendance tracking, administrative workflows, and normalized relational database design.",
    technologies: ["Java", "MySQL", "System Analysis", "JDBC", "Database Design"],
    visualType: "attendance-system",
    githubUrl: null, // Will only show button when configured by the student
    demoUrl: null,
    details: {
      problemStatement: "Manual paper-based attendance logging is prone to omissions, inefficient record-keeping, and tedious report generation in academic settings.",
      academicContext: "Developed as a key practical coursework project at SETEC Institute to bridge object-oriented programming concepts with relational database management systems.",
      keyFeatures: [
        "Structured data modeling with normalized MySQL tables for students, courses, classes, and attendance logs.",
        "System analysis detailing entity relationships, functional constraints, and administrative user roles.",
        "Java interface enabling instructors to record daily attendance statuses (Present, Absent, Excused, Late).",
        "Automated summary queries calculating individual student attendance rates and generating warning thresholds."
      ],
      technicalStackDetails: [
        { label: "Programming", value: "Java (Object-Oriented Architecture, Event Handling, Data Validation)" },
        { label: "Database", value: "MySQL (Relational schemas, Foreign Keys, Indexing, Integrity Constraints)" },
        { label: "Connectivity", value: "JDBC for secure query execution and transaction handling" },
        { label: "Methodology", value: "System Analysis & Design (Use-case diagrams, Data Flow Diagrams, ERD)" }
      ],
      keyTakeaways: [
        "Mastered the design of 3NF relational schemas to prevent data redundancy and anomalies.",
        "Learned how database foreign keys enforce strict referential integrity across course enrollments.",
        "Gained hands-on experience in connecting desktop application code with back-end database servers."
      ]
    }
  },
  {
    id: "mongodb-practice-data-modeling",
    title: "MongoDB Practice & Data Modeling",
    category: "NoSQL Database & Backend Labs",
    summary: "Hands-on exploration of NoSQL document structures, nested schemas, aggregation pipelines, and CRUD queries using JavaScript.",
    technologies: ["MongoDB", "JavaScript", "NoSQL", "Data Modeling", "Aggregation Pipeline"],
    visualType: "mongodb-modeling",
    githubUrl: null,
    demoUrl: null,
    details: {
      problemStatement: "Understanding when and how to model data using flexible JSON/BSON document structures versus traditional tabular relational architectures.",
      academicContext: "Independent and lab-based practical studies exploring modern NoSQL storage paradigms, JSON schema validation, and high-performance querying.",
      keyFeatures: [
        "Document schema design analyzing embedded documents vs. reference-based modeling approaches.",
        "Comprehensive CRUD operations implementing insertMany, update operators ($set, $push, $inc), and filter operators ($gte, $in, $regex).",
        "Multi-stage aggregation pipelines utilizing $match, $group, $sort, $project, and $lookup for complex analytics.",
        "Indexing experiments examining query performance with single-field and compound indexes."
      ],
      technicalStackDetails: [
        { label: "Database Engine", value: "MongoDB Community Edition / MongoDB Compass GUI" },
        { label: "Query Environment", value: "MongoDB Shell (mongosh) & Node.js / JavaScript scripts" },
        { label: "Concepts Practiced", value: "BSON documents, Collections, Document validation, Indexing, Aggregations" }
      ],
      keyTakeaways: [
        "Understood the operational tradeoffs between embedded documents (1-to-few) and normalized references (1-to-many).",
        "Constructed analytical aggregation pipelines without relying on rigid SQL join statements.",
        "Learned how index choices impact document scan ratio (`totalDocsExamined` vs `nReturned`)."
      ]
    }
  },
  {
    id: "exchange-server-lab",
    title: "Exchange Server & Infrastructure Lab",
    category: "Enterprise Systems & Networking",
    summary: "Virtual enterprise environment configuring Windows Server, Active Directory Domain Services, DNS zones, and Microsoft Exchange Server services.",
    technologies: ["Windows Server", "Active Directory (AD DS)", "DNS", "Exchange Server", "SSL / TLS"],
    visualType: "exchange-server",
    githubUrl: null,
    demoUrl: null,
    details: {
      problemStatement: "Enterprise organizations require centralized user authentication, resilient internal name resolution, and secure on-premise email infrastructure.",
      academicContext: "Advanced networking and server administration laboratory practice conducted in a dedicated virtualized lab environment.",
      keyFeatures: [
        "Deployed Windows Server with Active Directory Domain Services (AD DS) as the centralized forest root domain controller.",
        "Configured Forward and Reverse DNS lookup zones along with MX (Mail Exchanger) records essential for email routing.",
        "Installed and prepared Microsoft Exchange Server prerequisites, Schema extensions, and Active Directory preparation.",
        "Configured virtual directories (OWA, ECP, ActiveSync, Autodiscover) and provisioned internal SSL/TLS certificates."
      ],
      technicalStackDetails: [
        { label: "Host Platform", value: "Windows Server (Hyper-V / VMware virtual lab environment)" },
        { label: "Directory Services", value: "Active Directory Domain Services (AD DS), Organizational Units (OUs), Group Policies" },
        { label: "Core Services", value: "DNS Server, DHCP scopes, internal Certificate Authority (CA)" },
        { label: "Enterprise Application", value: "Microsoft Exchange Server (Mailbox database, Transport services, OWA)" }
      ],
      keyTakeaways: [
        "Observed how tightly coupled enterprise messaging solutions are with healthy Active Directory and DNS records.",
        "Troubleshot virtual directory URLs and SSL trust chains for secure Outlook on the Web access.",
        "Gained deep appreciation for systems administration, infrastructure resilience, and enterprise IT management."
      ]
    }
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development & UI/UX",
    summary: "A sleek, responsive personal portfolio built with React, Vite, and Tailwind CSS to document my technical skills, coursework, and practical projects.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "Responsive Design"],
    visualType: "portfolio-website",
    githubUrl: null,
    demoUrl: null,
    details: {
      problemStatement: "Creating a professional, honest, and accessible online presence that accurately showcases student learning milestones without false claims.",
      academicContext: "Personal frontend engineering project showcasing modern component design, clean typography, theme state management, and accessibility.",
      keyFeatures: [
        "Futuristic-minimal dark aesthetic with electric-blue accents (#2F9BFF) and cyan glow highlights (#63D8FF).",
        "Fully functional theme toggle supporting both persistent dark and light modes with localStorage synchronization.",
        "Accessible, keyboard-navigable project detail modal dialogs with focus trapping and ESC dismiss.",
        "Interactive profile customization drawer allowing live updates to contact info and social links stored locally.",
        "Zero external image dependencies—all tech illustrations and previews rendered with clean SVG and CSS."
      ],
      technicalStackDetails: [
        { label: "Framework", value: "React 19 with functional components and hooks" },
        { label: "Build Tool", value: "Vite for lightning-fast HMR and optimized production bundles" },
        { label: "Styling", value: "Tailwind CSS with custom design tokens, dark mode classes, and subtle glow effects" },
        { label: "Icons", value: "Lucide React modern SVG icon library" }
      ],
      keyTakeaways: [
        "Structured clean, reusable modular components with separated presentation and data logic.",
        "Implemented accessible modal interactions that follow modern WCAG guidelines and respect reduced motion.",
        "Created a mobile-first responsive layout that renders sharply across phones, tablets, and wide displays."
      ]
    }
  }
];
