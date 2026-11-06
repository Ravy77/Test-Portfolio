// Default profile configuration for Ravy Voeun
// Users can update these defaults directly here or through the interactive Quick Edit modal in the app.

export const defaultProfile = {
  name: "Voeun Ravy",
  initials: "VR",
  role: "MIS / IT Student & Bridging Business and Technology",
  headline: "MIS Student | Bridging Business and Technology",
  school: "SETEC Institute",
  program: "Management Information Systems (MIS) / Information Technology",
  academicStatus: "Undergraduate Student",
  studyPeriod: "2023 – Present (Ongoing)",  
  location: "Phnom Penh, Cambodia",
  careerGoal: "Become a skilled IT professional who can combine programming, databases, networking, and business information systems.",
  
  // Editable contact placeholders
  email: "ravyvoeun787@gmail.com",
  githubUrl: "https://github.com/Ravy77",
  linkedinUrl: "https://www.linkedin.com/in/ravy-voeun",

  // Indicator whether URLs are still placeholders (prevents rendering misleading external links)
  isGithubConfigured: false,
  isLinkedinConfigured: false,

  aboutParagraphs: [
    "I am an undergraduate student majoring in Management Information Systems (MIS) / Information Technology at SETEC Institute in Phnom Penh, Cambodia. I am interested in understanding how businesses operate and how technology can support their processes, improve efficiency, and solve practical problems.",
    "Through my studies and hands-on projects, I am exploring software development, database management, systems administration, and network infrastructure. I enjoy learning how these technical areas connect with business requirements and contribute to effective information systems.",
    "My goal is to develop the skills needed to bridge business needs and technology solutions. I am continuously learning, improving my technical abilities, and gaining practical experience through academic projects and IT labs as I prepare for future opportunities in the IT and business information systems field."
  ],

  learningStatement: "I believe technology delivers the greatest value when technical precision aligns with operational business requirements. Every lab, project, and line of code is an opportunity to strengthen that bridge.",

  tagline: "Keep Learning. Keep Building. Keep Growing."
};

const STORAGE_KEY = 'ravy_portfolio_profile_v1';

export function getStoredProfile() {
  if (typeof window === 'undefined') return defaultProfile;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultProfile, ...parsed };
    }
  } catch (e) {
    console.error("Error reading profile from localStorage", e);
  }
  return defaultProfile;
}

export function saveStoredProfile(profile) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Error saving profile to localStorage", e);
  }
}
