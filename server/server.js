const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// POST route to save contact form data
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Message stored successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
