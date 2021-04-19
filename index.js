const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

/* Controllers Import */
const UserController = require('./app/controllers/UserController');

/* Routes */
app.get('/', function(req, res){
    res.render('list-questions');
});

app.get('/question', function(req, res){
   res.render('create-question');
});

app.get('/question/:id', function(req, res){
    res.render('question');
 });

/* Register User */
app.get('/user/create', function(req, res){
    res.render('auth/register');
});

app.post('/user/create', function(req, res){
    var user = new UserController(req.body);
    user.create();

    res.redirect('/user/create');
});

/* Login */
app.get('/user/login', function(req, res){
    res.render('auth/login');
});

app.post('/user/login', function(req, res){

});

app.listen(80);