# 🌐 Portfolio Website

A sleek, responsive, and modern portfolio website designed to showcase professional work, technical skills, and creative projects.

![License](https://img.shields.io/github/license/meenmoyafrineisa/portfolio-website?style=flat-square&color=blue)
![Stars](https://img.shields.io/github/stars/meenmoyafrineisa/portfolio-website?style=flat-square)
![Forks](https://img.shields.io/github/forks/meenmoyafrineisa/portfolio-website?style=flat-square)

## 🚀 Key Features
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Project Showcase:** Dynamic display of GitHub repositories and live project demos.
- **Modern UI/UX:** Clean aesthetics with smooth animations and intuitive navigation.
- **Contact Integration:** Built-in form or links for professional inquiries.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Flexbox, CSS Grid, Custom Animations
- **Icons:** FontAwesome / DevIcons

## 📦 Quick Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/meenmoyafrineisa/portfolio-website.git](https://github.com/meenmoyafrineisa/portfolio-website.git)
# Portfolio Website

A full-stack portfolio website with a **Node.js/Express backend** serving project data via a REST API, and a **React frontend** that fetches and displays the projects dynamically.

---

## Architecture

```
portfolio-website/
├── backend/
│   ├── server.js        ← Express API + serves built React app
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js   ← fetches /projects from backend
│   │   │   └── Contact.js
│   │   └── index.js
│   └── package.json
├── index.html           ← root fallback (also fetches /projects)
└── render.yaml          ← Render.com deployment config
```

**Data flow:**  
`Frontend (React)` → `fetch('/projects')` → `Backend (Express)` → `JSON response`

---

## Local Development

### 1. Start the backend
```bash
cd backend
npm install
node server.js
# Running on http://localhost:5000
# API: http://localhost:5000/projects
```

### 2. Start the frontend (in a separate terminal)
```bash
cd frontend
npm install
npm start
# Opens http://localhost:3000
# Proxy in package.json forwards /projects → localhost:5000
```

---

## Deploy on Render.com

1. Push this repo to GitHub.
2. Go to [render.com](https://render.com) → **New** → **Blueprint**.
3. Connect your GitHub repo — Render auto-detects `render.yaml`.
4. Click **Apply**. Render will:
   - Build the React frontend (`npm run build`)
   - Install backend dependencies
   - Run `node server.js`
5. Your live URL will show the portfolio with Projects loaded from the backend API.
