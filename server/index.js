// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   password: '',
//   database: 'mysql',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// // API endpoint to get data
// app.get('/api/data', (req, res) => {
//   db.query('SELECT * FROM your_table_name', (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json(results);
//   });
// });

// // API endpoint to insert data
// app.post('/api/data', (req, res) => {
//   const { date, time, fileType } = req.body;
//   const query = 'INSERT INTO your_table_name (date, time, fileType) VALUES (?, ?, ?)';
//   db.query(query, [date, time, fileType], (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json({ message: 'Data inserted successfully', id: results.insertId });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });




// const express = require('express');
// const multer = require('multer');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mysql'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to database');
// });
 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// }); 
// const upload = multer({ storage: storage });

// app.post('/api/data', upload.single('file'), (req, res) => {
//   const { date, time, fileType } = req.body;
//   const file = req.file ? req.file.filename : null;

//   const query = 'INSERT INTO yourtable (date, time, fileType, file) VALUES (?, ?, ?, ?)';
//   db.query(query, [date, time, fileType, file], (err, result) => {
//     if (err) {
//       console.error('Error inserting data', err);
//       return res.status(500).json({ message: 'Error inserting data' });
//     }
//     res.status(200).json({ message: 'Data submitted successfully' });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
 
const port = 5000;

app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lottery'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});
 
app.use(cors({
  origin: 'http://localhost:3000',   
  methods: ['GET', 'POST'],  
  allowedHeaders: ['Content-Type']  
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage }); 
app.post('/api/data', upload.single('file'), (req, res) => {
  const { date, time, fileType } = req.body;
  const filePath = req.file ? req.file.path : null; 
  const query = 'INSERT INTO infoteam (date, time, fileType, file) VALUES (?, ?, ?, ?)';
  connection.query(query, [date, time, fileType, filePath], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.status(200).send({ message: 'Data submitted successfully' });
    }
  });
}); 
//work fill
// app.get('/datato', (req, res) => {
//   const { date, time, fileType } = req.query;
//   const query = 'SELECT file FROM infoteam WHERE date = ? AND time = ? AND fileType = ?';
  
//   connection.query(query, [date, time, fileType], (err, results) => {
//     if (err) {
//       console.error('Error fetching file path:', err);
//       return res.status(500).send('Error fetching file path');
//     } 

//     if (results.length === 0) {
//       return res.status(404).send('File not found');
//     } 

//     const filePath = results[0].file;

//     // Ensure filePath is a string
//     // if (typeof filePath !== 'string') {
//     //   console.error('File path is not a string:', filePath);
//     //   return res.status(500).send('File path is not valid');
//     // }

//     // Proceed with file download
//     const fileName = path.basename(filePath);

//     // Set headers to force download
//     res.download(filePath, fileName, (err) => {
//       if (err) {
//         console.error('Error downloading file:', err);
//         return res.status(500).send('Error downloading file');
//       }
//     });
//   });
// });
 

  

app.get('/datato', (req, res) => {
  const { date, time, fileType } = req.query;
  const query = 'SELECT file FROM infoteam WHERE date = ? AND time = ? AND fileType = ?';
  
  connection.query(query, [date, time, fileType], (err, results) => {
    if (err) {
      console.error('Error fetching file path:', err);
      return res.status(500).send('Error fetching file path');
    } 

    if (results.length === 0) {
      return res.status(404).send('File not found');
    } 

    const filePath = results[0].file.toString(); // Convert Buffer to string


    // Ensure filePath is a string
    if (typeof filePath !== 'string') {
      console.error('File path is not a string:', filePath);
      return res.status(500).send('File path is not valid');
    }

    const fileName = path.basename(filePath);
    const contentType = mime.getType(filePath) || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Error reading file');
      }

      res.setHeader('Content-Type', contentType);
      res.send(data);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 
 

 