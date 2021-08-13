//modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const port = 3000;
const app = express();

//setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res, next) {
    res.send('Hello');
});

app.get('/:name', function(req, res, next) {
    var name = req.params.name;
    res.send('Hey ' + name);
});

//listener to app
app.listen(port, function(err){
    if(err)
    {
        console.log("the error is: ",err);
    }
    console.log("The server is up and running at port: ", port);
});