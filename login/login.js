const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5004;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password, secret } = req.body;

  const query = 'SELECT * FROM user WHERE username = ? AND password = ? AND secret = ?';
  db.query(query, [username, password, secret], (err, results) => {
    if (err) {
      return res.status(500).send('Database error');
    }
    if (results.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



 