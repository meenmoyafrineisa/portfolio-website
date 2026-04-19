const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// API data
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

// API route
app.get('/projects', (req, res) => {
  res.json(projects);
});

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Root route (VERY IMPORTANT)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// fallback (optional but useful)
app.get('*', (req, res) => {
  res.send("404 Not Found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
