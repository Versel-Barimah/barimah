const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
        
        res.render('index');
});

app.get('/projects', function(req, res) {
        
        res.render('projects');
});

app.get('/about', function(req, res) {
        
        res.render('about');
});

app.get('/contacts', function(req, res) {
        
        res.render('contacts');
});


app.listen(3000);