# Ravy Voeun - Premium MIS Student Portfolio

A modern, responsive, and accessible personal portfolio website built with **React 19**, **Tailwind CSS**, and **Vite**.

Designed specifically for **Ravy Voeun**, an undergraduate student majoring in **Management Information Systems (MIS) / IT** at **SETEC Institute** in Phnom Penh, Cambodia. The portfolio emphasizes practical coursework, enterprise networking labs, database modeling, and full-stack software development.

---

## 🌟 Key Highlights & Design Direction

- **Futuristic-Minimal Palette**: Near-black background (`#050912`), electric-blue primary accents (`#2F9BFF`), and cyan secondary accents (`#63D8FF`).
- **Zero Broken Assets**: All hero technology graphics, system architecture diagrams, and database schemas are built natively with responsive **SVG** and **CSS**—no placeholder images or broken external links.
- **Academic & Authentic**: Explicitly highlights student-level coursework, lab experiments, and learning milestones without inflated percentages or fake experience claims.
- **Light & Dark Theme**: Persistent theme switcher with high-contrast, accessible styling for both modes, stored in `localStorage`.
- **Interactive Project Modals**: Deep-dive modals for each project with problem statements, architectural stack breakdowns, and key student takeaways.
- **Interactive Quick-Edit Drawer**: An in-browser modal (accessible via the gear/settings icon in the navbar) that allows instant customization of contact email, GitHub/LinkedIn links, school, and study period, persisting changes to `localStorage`.
- **Email Copy & Form Feedback**: One-click email copying with toast confirmation and a validated contact form with transparent handling (drafts directly into your local mail client or connects cleanly to Formspree/EmailJS).

---

## 📁 Project Structure

```text
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with initials logo, navigation, theme toggle & mobile menu
│   │   ├── Hero.jsx              # Hero section with headline, CTA buttons, and status pill
│   │   ├── About.jsx             # Personal narrative, academic snapshot, and learning philosophy
│   │   ├── Skills.jsx            # Categorized technical skills cards with search and category filtering
│   │   ├── Projects.jsx          # Featured coursework and lab project cards with visual previews
│   │   ├── ProjectModal.jsx      # Accessible modal with deep technical breakdown and takeaways
│   │   ├── Education.jsx         # SETEC Institute studies, academic status, and core curriculum pillars
│   │   ├── LearningJourney.jsx   # "Currently Learning" section connecting tech skills to business needs
│   │   ├── Contact.jsx           # Collaboration invite, copy email, social links, and message form
│   │   ├── Footer.jsx            # Dynamic year, initials logo, tagline, quick links, and back-to-top
│   │   ├── ProfileEditModal.jsx  # In-browser live profile editor with localStorage persistence
│   │   ├── SocialIcons.jsx       # Pixel-perfect GitHub & LinkedIn SVG icon components
│   │   └── TechIllustration.jsx  # Dynamic SVG tech core illustration & project schema previews
│   ├── data/
│   │   ├── profile.js            # Editable student information, bio, contact defaults & storage helpers
│   │   ├── skills.js             # Categorized skills: Programming, Frontend, Databases, Networking, Tools
│   │   └── projects.js           # Detailed academic project data, features, and takeaways
│   ├── App.jsx                   # Main layout, theme state management, and back-to-top listener
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # Tailwind directives, custom scrollbar, glassmorphism & glow classes
├── index.html                    # Root HTML document with Google Fonts (Inter & Manrope) and metadata
├── package.json
├── postcss.config.js
├── tailwind.config.js            # Custom design tokens, colors, animations, and shadows
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested with v24.12.0)
- **npm** v9+ (tested with v11.6.0)

### 2. Installation
Clone or navigate to the project directory:
```bash
cd Portfolio
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Production Build
Create an optimized production bundle:
```bash
npm run build
```
The output will be generated in the `dist/` directory. You can preview the production build locally with:
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### Option A: Edit Directly in the Browser (No Code Required)
1. Run `npm run dev` and open the site in your browser.
2. Click the **gear icon (`⚙`)** in the top navigation bar.
3. Update your **Email**, **GitHub URL**, **LinkedIn URL**, **Institution**, or **Study Dates**.
4. Click **"Save Changes"**. Your updates will be stored in your browser's `localStorage` and will persist across reloads!

### Option B: Edit Configuration Files in Code
All profile information and project listings are decoupled into `src/data/`:

1. **Personal Information (`src/data/profile.js`)**:
   ```javascript
   export const defaultProfile = {
     name: "Ravy Voeun",
     email: "your.actual.email@example.com",
     githubUrl: "https://github.com/your-actual-username",
     linkedinUrl: "https://linkedin.com/in/your-actual-profile",
     isGithubConfigured: true,  // Set to true once you set your real URL
     isLinkedinConfigured: true,
     school: "SETEC Institute",
     // ...
   };
   ```

2. **Skills (`src/data/skills.js`)**:
   Add or update skill items under `Programming`, `Frontend Development`, `Databases & Data Modeling`, `Networking & Infrastructure`, or `Development Tools & Concepts`.

3. **Projects (`src/data/projects.js`)**:
   Update project summaries, add new lab experiments, or configure live demo links when deployed.

---

## 📬 Connecting the Contact Form to a Live Service

By default, the contact form validates input and safely opens your user's email client (`mailto:`) with all subject and message fields pre-filled.

To connect direct automated delivery without opening an email client:
1. **Formspree (Recommended & Free)**:
   - Create an endpoint on [formspree.io](https://formspree.io).
   - In `src/components/Contact.jsx`, replace `window.open(mailtoUrl)` with a `fetch('https://formspree.io/f/YOUR_ENDPOINT_ID', { method: 'POST', body: JSON.stringify(formData) })`.
2. **EmailJS**:
   - Install `@emailjs/browser` and initialize it with your Public Key and Service ID.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<REPO_NAME>/'`.
2. Run `npm run build`.
3. Deploy the contents of `dist` using the `gh-pages` package or GitHub Actions.

---

## 📄 License & Credits

- Designed for **Ravy Voeun**
- Built with [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/), and [Lucide Icons](https://lucide.dev/).
- Tagline: *"Keep Learning. Keep Building. Keep Growing."*
