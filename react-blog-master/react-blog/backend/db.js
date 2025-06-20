const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_app'
});

conn.connect((err) => {
    if (err) throw err;
    console.log("✅ Connected to MySQL");
});

module.exports = conn;
