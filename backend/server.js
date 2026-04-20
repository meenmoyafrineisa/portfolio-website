const express = require('express');
const cors = require('cors');

const app = express();
// Render uses process.env.PORT, while 5001 is your local MacBook fallback
const PORT = process.env.PORT || 5001;

// 1. CORS: This allows your GitHub Pages site to "talk" to this Render backend
app.use(cors({
  origin: 'https://meenmoyafrineisa.github.io',
  methods: ['GET', 'POST'],
  credentials: true
}));

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
    live: 'https://meenmoyafrineisa.github.io/portfolio-website/',
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

// ── Start Server ───────────────────────────────────────────────────────────
// Adding '0.0.0.0' is vital for Render to correctly route external traffic
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
