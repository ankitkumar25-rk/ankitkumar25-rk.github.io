# Ankit Kumar — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

Welcome to my personal portfolio codebase! This is a modern, high-fidelity developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Three.js (WebGL)**, and **Tailwind CSS v4**.

It is statically optimized, fully responsive, and deployed automatically to [youngoat.dev](https://youngoat.dev) via GitHub Actions.

---

## Key Features

*   **Interactive 3D WebGL Canvas**: A custom scroll-driven 5911 Tractor animation built from scratch using raw Three.js geometries and Framer Motion. Featuring real-time physics simulation for wheels and dynamic particle exhaust smoke.
*   **Dynamic Viewport Optimization**: The 3D scene scales, positions, and changes its horizontal travel bounds adaptively depending on whether the viewport is desktop or mobile.
*   **Premium Pill Navbar**: A floating, centered navigation bar with a multi-column projects grid menu, integrated light/dark mode overrides, active availability indicator, and responsive drawer overlay on mobile.
*   **Fully Accessible & Responsive Design**: Custom HSL color variables and Tailwind utilities ensure the entire layout is 100% fluid, looking stunning on everything from massive widescreen displays down to small mobile viewports.
*   **Automated CI/CD Pipeline**: GitHub Actions workflow automatically installs dependencies, compiles static exports (`/out`), preserves the custom domain CNAME record, and publishes directly to GitHub Pages.
*   **Formspree Contact Integration**: Modern contact form with real-time UI/UX status updates, client-side input validation, and secure submission.

---

## Technology Stack

*   **Framework**: Next.js 16 (Static HTML Export)
*   **UI Library**: React 19 & Lucide Icons
*   **Styling**: Tailwind CSS v4 & custom CSS variables for light/dark theme overrides
*   **Animation**: Framer Motion
*   **3D Engine**: Three.js (WebGL renderer)
*   **Deployment**: GitHub Pages & GitHub Actions

---

## Getting Started

### 1. Prerequisites
Make sure you have Node.js (v20 or higher) and npm installed.

### 2. Clone and Install Dependencies
```bash
git clone https://github.com/ankitkumar25-rk/ankitkumar25-rk.github.io.git
cd ankitkumar25-rk.github.io
npm install
```

### 3. Local Development Environment
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. Build and Compile Static Files
To test the production build and generate the static export folder `/out`:
```bash
npm run build
```

---

## Deployment

The project is configured for continuous delivery. Any push to the `main` branch triggers the GitHub Actions workflow defined in `.github/workflows/deploy.yml`:
1. Checks out the codebase.
2. Installs dependencies using `npm install`.
3. Builds the Next.js static pages with custom env keys.
4. Generates HTML files inside `./out` (including `/public/CNAME` mapping).
5. Deploys the static assets directly to GitHub Pages.
