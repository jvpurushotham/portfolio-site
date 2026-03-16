# 🚀 Portfolio — Setup & Deployment Guide

A stunning, fully responsive portfolio built with **React + Vite**.  
Dark/light mode · Animated sections · Logo-based skills · Resume section · Articles · and more.

---

## 📁 Project Structure

```
portfolio-site/
├── index.html              ← Page entry point (update title/meta here)
├── package.json            ← Dependencies
├── vite.config.js          ← Build config
├── EDIT_ME.md              ← 📖 READ THIS to personalize your portfolio
└── src/
    ├── main.jsx            ← React root mount
    └── App.jsx             ← ✏️  ALL YOUR DATA + COMPONENTS (edit this)
```

---

## ⚡ Quick Start (Local Development)

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

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere.

---

## 🌐 Deployment Options

### Option A — Vercel (Recommended, Free)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → "New Project"
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** → done in ~60 seconds
6. Get a free `.vercel.app` domain instantly

### Option B — Netlify (Free)
1. Go to https://netlify.com → "Add new site" → "Deploy manually"
2. Run `npm run build` locally
3. Drag & drop the `dist/` folder onto Netlify
4. Done — free `.netlify.app` domain

### Option C — GitHub Pages (Free)
1. In `vite.config.js`, set `base: '/YOUR-REPO-NAME/'`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && npx gh-pages -d dist"
   ```
4. Run `npm run deploy`

### Option D — Self-hosted / VPS
```bash
npm run build
# Upload contents of dist/ to your server's public_html or www folder
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Dev server + build tool |
| Google Fonts | Outfit, Space Grotesk, JetBrains Mono, DM Sans |
| Devicons CDN | Technology logos |
| Unsplash | Project cover images |

No extra CSS frameworks, no UI libraries — pure React + inline styles.

---

## 🎨 Customization

See **EDIT_ME.md** for a complete step-by-step guide to filling in all your personal details.

---

## 📄 License

MIT — use freely for personal and commercial portfolios.
