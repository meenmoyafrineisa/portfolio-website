const express = require('express');
const cors = require('cors');

const app = express();

// Render requires the port to be dynamic
const PORT = process.env.PORT || 5001;

// Enable CORS for your GitHub Pages URL
app.use(cors({
  origin: 'https://meenmoyafrineisa.github.io'
}));

app.use(express.json());

const projects = [
  {
    id: 1,
    name: 'Bengali Dialect Classifier',
    description: 'Multimodal deep-learning system using Whisper and XLM-RoBERTa.',
    tech: ['Python', 'PyTorch', 'Whisper'],
    github: 'https://github.com/meenmoyafrineisa',
    live: '',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'Full-stack portfolio with Node.js and React.',
    tech: ['React', 'Node.js', 'Render'],
    github: 'https://github.com/meenmoyafrineisa/portfolio-website',
    live: 'https://meenmoyafrineisa.github.io/portfolio-website/',
  },
  {
    id: 3,
    name: 'NLP Research Toolkit',
    description: 'Preprocessing utilities for South Asian languages.',
    tech: ['Python', 'HuggingFace', 'spaCy'],
    github: 'https://github.com/meenmoyafrineisa',
    live: '',
  }
];

// Routes
app.get('/projects', (req, res) => {
  res.json(projects);
});

// Render needs '0.0.0.0' to correctly bind the port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
