require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Front-end')));

// Routes
app.get('/about', (req, res) => {
  res.send('My Week 2 API!');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front-end', 'Conan.html'));
});

app.post('/register', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  res.status(201).json({ message: `Hello ${name}!` });
});

app.get('/user/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: `User ${req.params.id} profile`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});