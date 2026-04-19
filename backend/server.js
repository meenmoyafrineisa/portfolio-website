const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Your API data
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My personal portfolio"
  },
  {
    id: 2,
    name: "E-commerce Site",
    description: "Online shop project"
  }
];

// ✅ API route
app.get('/projects', (req, res) => {
  res.json(projects);
});

// ⭐ IMPORTANT: Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// ⭐ This makes "/" load your index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
