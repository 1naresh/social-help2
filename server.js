var express= require('express');
var fs=require('fs')
var path=require('path')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')

var users=require('./routes/users')
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/test')

app.use(express.static(path.join(__dirname, 'build')));

app.use('/users',users)
app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
  });
app.listen(100,()=>console.log("succcess"))