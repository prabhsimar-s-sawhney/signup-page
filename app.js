//modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const port = 3000;
const app = express();

//setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//get the pages required
app.get('/', function(req, res, next) {
    res.render('home',{
        title: "This is the home page"
    })
});

app.get('/signup', function(req, res, next) {
    res.render('signup',{
        title: "This is the signup page"
    })
});

app.get('/signin', function(req, res, next) {
    res.render('signin',{
        title: "This is the signin page"
    })
});

app.get('/:name', function(req, res, next) {
    var name = req.params.name;
    res.render('profile',{
        title: "This is the profie page",
        name: name
    })
});

//listener to app
app.listen(port, function(err){
    if(err)
    {
        console.log("the error is: ",err);
    }
    console.log("The server is up and running at port: ", port);
});