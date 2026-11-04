# 🚀 Pablo Villanueva — Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A production-ready personal developer portfolio built for **Pablo Villanueva** (Software Engineer, Full Stack Developer, AI & Data Enthusiast). 

Engineered with a minimalist design aesthetic inspired by Linear, Vercel, and Raycast, combining a deep navy/charcoal background (`#080B14`), electric blue (`#3B82F6`) and cyan (`#06B6D4`) glow accents, bilingual support (English / Spanish), interactive project mockups, and a single source of truth for all content.

---

## 🌟 Key Features

- **Linear/Vercel-Grade Aesthetic**: Deep navy surfaces, subtle glow gradients, translucent glassmorphic navigation, and refined micro-interactions.
- **Bilingual Support (EN / ES)**: Seamless client-side language toggle between English (professional international) and Spanish (native) persisted in `localStorage`.
- **Single Source of Truth**: All text, projects, credentials, skills, and links are managed from `src/data/portfolioData.ts`. No hunting through components to change text!
- **Interactive Project Showcase**:
  - **Bitcoin Price Prediction & Sentiment Analysis**: Real-time simulated candlestick/SMA time-series chart and sentiment meter.
  - **Full Stack Enterprise Application**: Interactive multi-tier decoupled system diagram (React ⇄ Node/Express ⇄ SQL).
  - **Data Analytics Dashboard**: Dynamic KPI bar metrics and ETL distribution graphic.
  - **Inspection Modal**: Detailed technical breakdown for every project.
- **Accurate Academic & Professional Background**:
  - Universidad Nebrija (Software Development Technician, April 2025 – June 2025).
  - York St John University (BSc Hons Software Engineering, Sept 2025 – June 2026).
  - Higher Vocational Training in Multiplatform Application Development (DAM), Spain.
- **No Arbitrary Skill Percentage Bars**: Verified technologies organized into categorized cards with practical domain notes.
- **CV Modal & Download**: Dedicated downloadable PDF button and preview dialog.
- **Client-Validated Contact Form**: Prototype validation mode with real-time feedback and clear documentation for backend integration.
- **SEO & Accessibility**: Semantic HTML5, Open Graph meta tags, Twitter card, custom monogram SVG favicon, keyboard navigation, and reduced-motion support.

---

## 📁 Project Structure

```text
pablo-villanueva-portfolio/
├── public/
│   ├── favicon.svg               # Minimalist "PV" monogram vector favicon
│   └── cv-pablo-villanueva.pdf   # CV / Resume download target
├── src/
│   ├── assets/                   # Static media
│   ├── components/
│   │   ├── About.tsx             # Background narrative, values & quick stats
│   │   ├── Contact.tsx           # Contact form, direct links & location info
│   │   ├── CvModal.tsx           # Downloadable CV modal & placeholder note
│   │   ├── Education.tsx         # York St John University & DAM degrees
│   │   ├── Experience.tsx        # Universidad Nebrija timeline card
│   │   ├── Footer.tsx            # Dynamic copyright year, social links & top button
│   │   ├── Hero.tsx              # First impression, status pill & primary CTAs
│   │   ├── Navbar.tsx            # Sticky glassmorphism nav with language toggle
│   │   ├── ProjectModal.tsx      # In-depth architectural inspection modal
│   │   ├── Projects.tsx          # Filterable project gallery
│   │   ├── ProjectVisuals.tsx    # Technical SVG/canvas mockups
│   │   └── Skills.tsx            # Categorized verified technical skills
│   ├── context/
│   │   └── LanguageContext.tsx   # Global language state (EN / ES)
│   ├── data/
│   │   └── portfolioData.ts      # ⚡ CENTRAL CONFIGURATION (Edit all content here)
│   ├── types/
│   │   └── portfolio.ts          # TypeScript interfaces & types
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Tailwind directives, fonts & custom scrollbars
│   └── main.tsx                  # React DOM mount point
├── index.html                    # SEO tags, fonts & viewport setup
├── package.json                  # Scripts & dependencies
├── postcss.config.js             # PostCSS Tailwind plugins
├── tailwind.config.js            # Custom palette (#080B14, #3B82F6, #06B6D4)
├── tsconfig.json                 # TypeScript compiler configuration
├── vercel.json                   # Zero-config deployment & SPA rewrites for Vercel
└── vite.config.ts                # Vite bundler configuration
```

---

## ⚡ Quick Start

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```
The output files will be written to `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Edit & Customize Your Portfolio

All personal information, social links, work experience, degrees, projects, and skills are centralized in:

📂 **`src/data/portfolioData.ts`**

### A. Editing Personal Info & Links
Open `src/data/portfolioData.ts` and modify `SOCIAL_LINKS` and `PERSONAL_INFO`:
```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/villanuevapablo',
  linkedin: 'https://www.linkedin.com/in/pablovillanuevapicazo/',
  email: 'your-actual-email@example.com', // 👈 Update your email here
};
```

### B. Updating Your CV / Resume
1. Place your finalized resume PDF inside the `public/` directory named:
   `public/cv-pablo-villanueva.pdf`
2. If you want to use a different filename, change `cvFilename` in `src/data/portfolioData.ts`:
   ```typescript
   cvFilename: 'Pablo_Villanueva_Resume.pdf'
   ```

### C. Adding or Modifying Projects
In `src/data/portfolioData.ts`, each project in the `PROJECTS` array contains:
- `title`: Name of the project.
- `category`: `'ai-ml' | 'fullstack' | 'data'`.
- `technologies`: Array of stack tags.
- `githubUrl`: Your real repository URL (e.g., `'https://github.com/villanuevapablo/bitcoin-forecasting'`).
- `liveDemoUrl`: Public demo URL (or `null` if none).
- `features`: Array of key architectural bullets.

*(Note: You can easily add entries for other projects you've developed such as your `smart_file_organizer` or `poker_analyzer`)*.

### D. Updating Work Experience or Education
Modify the `EXPERIENCES` or `EDUCATION` arrays in `src/data/portfolioData.ts`. Each item accepts bilingual objects (`en` and `es`), ensuring seamless rendering when switching languages.

### E. Connecting the Contact Form to Receive Emails
The contact form currently validates inputs and displays a prototype message. To receive actual emails from visitors:
1. **Option 1 (Formspree)**:
   - Create a free form at [formspree.io](https://formspree.io).
   - In `src/components/Contact.tsx`, change `handleSubmit` to `fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData) })`.
2. **Option 2 (EmailJS)**:
   - Install `@emailjs/browser` and send via `emailjs.send(...)`.
3. **Option 3 (Resend / Next.js / Serverless API)**:
   - Route submissions to an API endpoint or webhook.

---

## 🔍 Identified Placeholders Requiring Your Personal Information

| Section | Placeholder Item | Location to Edit | Action Needed |
| :--- | :--- | :--- | :--- |
| **Contact** | Official Email Address | `src/data/portfolioData.ts` (`SOCIAL_LINKS.email`) | Replace placeholder with your preferred professional email |
| **About / CV** | PDF Resume File | `public/cv-pablo-villanueva.pdf` | Replace the placeholder PDF with your finalized resume |
| **Projects** | Project 1 Repository URL | `src/data/portfolioData.ts` (`PROJECTS[0].githubUrl`) | Add your GitHub repository link when published |
| **Projects** | Project 2 Repository URL | `src/data/portfolioData.ts` (`PROJECTS[1].githubUrl`) | Add your repository link |
| **Projects** | Project 3 Repository URL | `src/data/portfolioData.ts` (`PROJECTS[2].githubUrl`) | Add your repository link |
| **Contact** | Form Backend Service | `src/components/Contact.tsx` | Connect Formspree or EmailJS if you want form deliveries |

---

## 🚢 Preparing for GitHub & Deploying to Vercel

### Step 1: Initialize Git and Commit
From the project folder (`pablo-villanueva-portfolio`):
```bash
git init
git add .
git commit -m "feat: initial release of Pablo Villanueva personal portfolio"
```

### Step 2: Push to GitHub
1. Create a new repository on your GitHub account (`https://github.com/new`) named:
   `pablo-villanueva-portfolio`
2. Link and push your local commits:
```bash
git remote add origin https://github.com/villanuevapablo/pablo-villanueva-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select `pablo-villanueva-portfolio`.
3. Vercel will automatically detect **Vite** and configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your website will be live with free global CDN and automatic HTTPS in under 60 seconds!
5. Any time you push changes to the `main` branch on GitHub, Vercel will automatically rebuild and deploy your site.

---

## 🎨 Design Philosophy & Technology Choices

- **Tailwind CSS**: Zero runtime CSS overhead, maximum performance, and custom extended design tokens (`#080B14`, `#0D1220`, `#3B82F6`, `#06B6D4`).
- **Framer Motion**: Lightweight entrance and view-triggered animations with built-in accessibility compliance (`prefers-reduced-motion`).
- **Lucide React**: Clean, modern, tree-shaken SVG icon system.
- **TypeScript**: Complete type safety for data models, translations, and component props.

---

© 2026 Pablo Villanueva. All rights reserved.
