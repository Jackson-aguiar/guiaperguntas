const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

/* Controllers Import */
const UserController = require('./app/controllers/UserController');

/* Routes */
app.get('/', function(req, res){
    res.render('index');
});

app.get('/user/create', function(req, res){
    res.render('create-user');
});

app.post('/user/create', function(req, res){
    var user = new UserController(req.body);
    user.create();

    res.redirect('/user/create');
});

app.listen(80);