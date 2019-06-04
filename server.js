const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.static('./build'));

app.get('/getMenuInfos', function(req, res) {
    res.json(['Accueil', 'News', 'Blogs', 'Vidéos', 'Tests', 'Previews', 'Dossiers']);
});0

app.listen(3333, function() {
    console.log('server listening on port 3333');
});