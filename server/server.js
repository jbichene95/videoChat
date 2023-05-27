const express = require('express');
const app = express();


// const posts = [
//     {
//         username: "Test1",
//         title: 'Post 1 '
//     },
//     {
//         username: "Test2",
//         title: 'Post 2 '
//     },
//     {
//         username: "Test3",
//         title: 'Post 3 '
//     },
// ]

// app.get('/posts', (req, res) => {
//     res.json(posts);
// });

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    
})

app.get('/login', (req, res) => {

});

app.listen(3000);