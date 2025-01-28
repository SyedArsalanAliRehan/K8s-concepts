const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) return res.status(500).send('MySQL Error');
    res.send(`MySQL Response: ${results[0].solution}`);
  });
});

app.listen(3000, () => console.log('NodeJS App Running'));
