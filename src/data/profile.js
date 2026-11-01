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
    "I am currently an undergraduate student majoring in Management Information Systems (MIS) / IT at SETEC Institute in Phnom Penh, Cambodia. My academic journey is driven by a deep curiosity about how digital systems connect business logic, software engineering, and underlying network infrastructures.",
    "Rather than limiting myself to a single discipline, I actively bridge software development, database design, and systems administration. I enjoy analyzing how data flows from user interfaces to backend servers and through enterprise network boundaries.",
    "My objective is to solve practical business problems through clean code, structured relational and document databases, and dependable network setups. I am dedicated to continuous learning and hands-on, project-based practice."
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
