const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ── Projects data ──────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    name: 'Bengali Dialect Classifier',
    description:
      'A multimodal deep-learning system that classifies 13 Bengali regional dialects using audio and text fusion models (Whisper + XLM-RoBERTa). Achieved best results with Early Fusion architecture.',
    tech: ['Python', 'PyTorch', 'Whisper', 'XLM-RoBERTa', 'Kaggle'],
    github: 'https://github.com/meenmoyafrineisa',
    live: '',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description:
      'A full-stack portfolio website with a Node.js/Express backend serving project data via REST API, and a React frontend that dynamically renders content fetched from the backend.',
    tech: ['React', 'Node.js', 'Express', 'Render'],
    github: 'https://github.com/meenmoyafrineisa/portfolio-website',
    live: '',
  },
  {
    id: 3,
    name: 'NLP Research Toolkit',
    description:
      'A collection of preprocessing utilities and evaluation scripts for low-resource NLP tasks targeting South Asian languages, with a focus on Bengali speech and text processing.',
    tech: ['Python', 'HuggingFace', 'spaCy', 'Jupyter'],
    github: 'https://github.com/meenmoyafrineisa',
    live: '',
  },
];

// ── API Routes ─────────────────────────────────────────────────────────────
app.get('/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// ── Serve React build in production ───────────────────────────────────────
const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

// Catch-all: return the React app for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`);
  console.log(`📦  Projects API: http://localhost:${PORT}/projects`);
});
