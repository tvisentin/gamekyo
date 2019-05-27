const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static('./build'));

app.get('/tags', function(req, res) {
    res.json(['sports', 'cute', 'milk', 'asian', 'fasldfkajshdlfkjhasadfalskjdhfljahs']);
});

app.get('/kind', function(req, res) {
    res.json(['Anyone', 'Adam', 'Eve', 'Adeve', 'Others']);
});

app.get('/where', function(req, res) {
    res.json(['Everywhere', 'Europe', 'North-America', 'South-America', 'Oceania', 'Asia', 'Afrika']);
});

app.listen(3333, function() {
    console.log('server listening on port 3333');
});