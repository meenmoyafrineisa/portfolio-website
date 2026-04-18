const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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

app.get('/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});