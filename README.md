# Yoeki Assessment - Indium Clone

A high-performance, modern web application built for the Yoeki Assessment. This project serves as a highly animated replica of the Indium website, showcasing advanced responsive design, scroll-triggered animations, and production-ready code architecture.

**Live Demo:** [https://indium-clone.vercel.app](https://indium-clone.vercel.app)

---

## 🚀 Features

- **Next.js (App Router):** Leveraging the latest Next.js features for optimized routing and fast page loads.
- **Tailwind CSS v4:** Fully customized design system with responsive typography and spacing tokens via CSS variables.
- **Framer Motion Animations:** Smooth, 60fps scroll-triggered entrances, interactive hover states, and dynamic elements (e.g., Infinite Marquee, Spring-Up Sections).
- **Mona Sans Typography:** Consistent, premium typographic hierarchy using the `@fontsource-variable/mona-sans` variable font.
- **Redux Toolkit:** State management implemented for the Contact Form feature (`/contact`), complete with loading, success, and error handling states.
- **Modular Component Architecture:** A strictly maintained directory structure for reusable UI components, layout sections, features, and custom hooks.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & React Redux
- **API Requests:** [Axios](https://axios-http.com/)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router pages and global layouts
├── components/
│   ├── layout/           # Global components (Navbar, Footer)
│   ├── sections/         # Page-specific sections (Hero, Marquee, Spotlight, etc.)
│   └── ui/               # Reusable modular UI elements (Button, Input, SectionHeading)
├── features/             # Redux slices and feature-specific logic (e.g., Contact Form)
├── hooks/                # Custom React hooks (useMediaQuery, useRedux, useContactForm)
├── lib/                  # Utility functions (e.g., class name merging with `cn`)
├── providers/            # React context and Redux providers
```

---

## ⚙️ Local Setup & Installation

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.17 or higher) installed.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd yoeki-assessment
```

### 2. Install Dependencies
Using npm:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. View the App
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## 🎨 Design System

The application relies on a strictly defined design system located in `app/globals.css`. It uses Tailwind `@theme` properties to enforce consistency across:
- **Colors:** Defined primary, secondary, and background tokens.
- **Typography:** Custom fluid-like `text-app-*` classes for responsive font sizing.
- **Layout Constraints:** All sections are wrapped in a standard `max-w-[1440px]` container to ensure perfect scaling across devices.

## 🧹 Code Quality
The codebase is fully typed with TypeScript and follows strict linting rules. All code has been optimized for maintainability and performance.
