const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const candidates = [
  { id: 1, name: 'John Doe', skills: 'React, Node.js', experience: 5 },
  { id: 2, name: 'Jane Smith', skills: 'Python, Django', experience: 3 },
  { id: 3, name: 'Michael Brown', skills: 'Java, Spring Boot', experience: 4 },
  { id: 4, name: 'Alice Johnson', skills: 'C++, Python', experience: 6 },
  { id: 5, name: 'Chris Lee', skills: 'JavaScript, Node.js', experience: 2 },
  { id: 6, name: 'Sophie Davis', skills: 'Ruby, Rails', experience: 3 },
  { id: 7, name: 'David Wilson', skills: 'PHP, Laravel', experience: 5 },
  { id: 8, name: 'Emma Harris', skills: 'JavaScript, React', experience: 4 },
  { id: 9, name: 'Liam Clark', skills: 'Go, Kubernetes', experience: 7 },
  { id: 10, name: 'Olivia Taylor', skills: 'Swift, iOS Development', experience: 4 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
