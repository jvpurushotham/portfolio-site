# Portfolio — Setup & Deployment Guide

A stunning, fully responsive portfolio built with **React + Vite**.  
Dark/light mode · Animated sections · Logo-based skills · Resume section · Articles · and more.

---

## Project Structure

```
portfolio-site/
├── index.html              ← Page entry point (update title/meta here)
├── package.json            ← Dependencies
├── vite.config.js          ← Build config
└── src/
    ├── main.jsx            ← React root mount
    └── App.jsx             ←  ALL YOUR DATA + COMPONENTS (edit this)
```

---

## Quick Start (Local Development)

### Prerequisites
- Node.js v18+ → https://nodejs.org
- npm (comes with Node)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (hot reload)
npm run dev
```

Open http://localhost:5173 in your browser. Changes save instantly.

---

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere.

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Dev server + build tool |
| Google Fonts | Outfit, Space Grotesk, JetBrains Mono, DM Sans |
| Devicons CDN | Technology logos |
| Unsplash | Project cover images |

No extra CSS frameworks, no UI libraries — pure React + inline styles.
