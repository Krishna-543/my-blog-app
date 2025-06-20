const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./db');  // use new db.js

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Home
app.get('/', (req, res) => {
    conn.query('SELECT * FROM posts', (err, results) => {
        if (err) throw err;
        res.render('index', { posts: results });
    });
});

// Add Post
app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    conn.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete Post
app.post('/delete-post/:id', (req, res) => {
    const { id } = req.params;
    conn.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});
